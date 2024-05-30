// This file is part of Tangle.

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

use frame_support::{
	assert_ok,
	dispatch::RawOrigin,
	traits::{schedule::DispatchTime, StorePreimage},
	weights::Weight,
};
use integration_tests_common::{Kusama, KusamaAlice, TangleKusama, TangleKusamaAlice};
use pallet_conviction_voting::Vote;
use sp_runtime::Perbill;
use tangle_kusama_runtime::{
	Runtime, RuntimeOrigin, Slp, XcmDestWeightAndFeeHandler, XcmInterface,
};
use tangle_lst_voting::{AccountVote, TallyOf};
use tangle_primitives::{
	currency::VKSM, Balance, CurrencyId, LstSupplyProvider, XcmOperationType as XcmOperation, KSM,
};
use tangle_slp::{Ledger, MinimumsMaximums, SubstrateLedger};
use xcm::v3::Parent;
use xcm_emulator::{Parachain, RelayChain, TestExt};

#[test]
fn vote_works() {
	let lst = VKSM;
	let poll_index = 0;

	Kusama::execute_with(|| {
		use kusama_runtime::{Balances, Referenda, RuntimeEvent, RuntimeOrigin, System, Utility};

		assert_ok!(Balances::force_set_balance(
			RuntimeOrigin::root(),
			Kusama::sovereign_account_id_of_child_para(TangleKusama::para_id()).into(),
			1_000_000_000_000_000u128
		));
		assert_ok!(Balances::force_set_balance(
			RuntimeOrigin::root(),
			Utility::derivative_account_id(
				Kusama::sovereign_account_id_of_child_para(TangleKusama::para_id()).into(),
				5
			)
			.into(),
			1_000_000_000_000_000u128
		));
		assert_ok!(Referenda::submit(
			RuntimeOrigin::signed(TangleKusamaAlice::get()),
			Box::new(RawOrigin::Root.into()),
			set_balance_proposal_bounded(1),
			DispatchTime::At(10),
		));
		System::events().iter().for_each(|r| log::debug!("Kusama >>> {:?}", r.event));
		assert!(System::events().iter().any(|r| matches!(
			r.event,
			RuntimeEvent::Referenda(pallet_referenda::Event::Submitted {
				index: 0,
				track: 0,
				proposal: _,
			})
		)));
		System::reset_events();
	});

	TangleKusama::execute_with(|| {
		use tangle_kusama_runtime::{LstMinting, LstVoting, RuntimeEvent, RuntimeOrigin, System};

		assert_ok!(LstMinting::mint(
			RuntimeOrigin::signed(TangleKusamaAlice::get()),
			KSM,
			1_000_000_000_000,
			Default::default(),
			None
		));
		assert_eq!(
			<Runtime as tangle_lst_voting::Config>::LstSupplyProvider::get_token_supply(KSM),
			Some(1_000_000_000_000)
		);
		assert_eq!(
			<Runtime as tangle_lst_voting::Config>::LstSupplyProvider::get_lst_supply(VKSM),
			Some(1_000_000_000_000)
		);
		let token = CurrencyId::to_token(&lst).unwrap();
		assert_ok!(XcmInterface::set_xcm_dest_weight_and_fee(
			token,
			XcmOperation::Vote,
			Some((Weight::from_parts(4000000000, 100000), 4000000000u32.into())),
		));
		assert_ok!(XcmInterface::set_xcm_dest_weight_and_fee(
			token,
			XcmOperation::RemoveVote,
			Some((Weight::from_parts(4000000000, 100000), 4000000000u32.into())),
		));
		assert_ok!(Slp::set_minimums_and_maximums(
			RuntimeOrigin::root(),
			token,
			Some(MinimumsMaximums {
				delegator_bonded_minimum: 0u32.into(),
				bond_extra_minimum: 0u32.into(),
				unbond_minimum: 0u32.into(),
				rebond_minimum: 0u32.into(),
				unbond_record_maximum: 0u32,
				validators_back_maximum: 0u32,
				delegator_active_staking_maximum: 0u32.into(),
				validators_reward_maximum: 0u32,
				delegation_amount_minimum: 0u32.into(),
				delegators_maximum: u16::MAX,
				validators_maximum: 0u16,
			})
		));
		assert_ok!(Slp::add_delegator(RuntimeOrigin::root(), token, 5, Box::new(Parent.into())));
		assert_ok!(Slp::set_delegator_ledger(
			RuntimeOrigin::root(),
			token,
			Box::new(Parent.into()),
			Box::new(Some(Ledger::Substrate(SubstrateLedger {
				account: Parent.into(),
				total: 1_000_000_000_000u128,
				active: 1_000_000_000_000u128,
				unlocking: vec![],
			})))
		));

		assert_ok!(LstVoting::set_vote_cap_ratio(
			RuntimeOrigin::root(),
			lst,
			Perbill::from_percent(90)
		));
		assert_ok!(LstVoting::add_delegator(RuntimeOrigin::root(), lst, 5));
		assert_ok!(LstVoting::set_vote_locking_period(RuntimeOrigin::root(), lst, 0));
		assert_ok!(LstVoting::set_undeciding_timeout(RuntimeOrigin::root(), lst, 100));

		assert_ok!(LstVoting::vote(
			RuntimeOrigin::signed(TangleKusamaAlice::get()),
			lst,
			poll_index,
			aye(1_000_000_000_000u128, 5)
		));

		assert_eq!(
			tally(lst, poll_index),
			TallyOf::<Runtime>::from_parts(5_000_000_000_000, 0, 1_000_000_000_000)
		);

		assert!(System::events().iter().any(|r| matches!(
			r.event,
			RuntimeEvent::LstVoting(tangle_lst_voting::Event::Voted {
				who: _,
				lst: VKSM,
				poll_index: 0,
				token_vote: _,
				delegator_vote: _,
			})
		)));
		System::reset_events();
	});

	Kusama::execute_with(|| {
		use kusama_runtime::System;

		System::events().iter().for_each(|r| log::debug!("Kusama >>> {:?}", r.event));
		assert!(System::events().iter().any(|r| matches!(
			r.event,
			kusama_runtime::RuntimeEvent::MessageQueue(pallet_message_queue::Event::Processed {
				id: _,
				origin: _,
				weight_used: _,
				success: true
			})
		)));
		System::reset_events();
	});

	TangleKusama::execute_with(|| {
		use tangle_kusama_runtime::{LstVoting, RuntimeEvent, System};

		System::events()
			.iter()
			.for_each(|r| log::debug!("TangleKusama >>> {:?}", r.event));
		assert!(System::events().iter().any(|r| matches!(
			r.event,
			RuntimeEvent::LstVoting(tangle_lst_voting::Event::VoteNotified {
				lst: VKSM,
				poll_index: 0,
				success: true,
			})
		)));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			VKSM,
			0,
			tangle_lst_voting::ReferendumInfoOf::<Runtime>::Completed(1),
		));
		assert_ok!(LstVoting::remove_delegator_vote(
			RuntimeOrigin::signed(TangleKusamaAlice::get()),
			VKSM,
			0,
			5,
		));
		System::reset_events();
	});

	Kusama::execute_with(|| {
		use kusama_runtime::{RuntimeEvent, System};

		System::events().iter().for_each(|r| log::debug!("Kusama >>> {:?}", r.event));
		assert!(System::events().iter().any(|r| matches!(
			&r.event,
			RuntimeEvent::MessageQueue(pallet_message_queue::Event::Processed {
				id: _,
				origin: _,
				weight_used: _,
				success: true
			})
		)));
	});

	TangleKusama::execute_with(|| {
		use tangle_kusama_runtime::{RuntimeEvent, System};

		System::events()
			.iter()
			.for_each(|r| log::debug!("TangleKusama >>> {:?}", r.event));
		assert!(System::events().iter().any(|r| matches!(
			r.event,
			RuntimeEvent::LstVoting(tangle_lst_voting::Event::DelegatorVoteRemovedNotified {
				lst: VKSM,
				poll_index: 0,
				success: true,
			})
		)));
	});
}

pub fn set_balance_proposal_bounded(
	value: Balance,
) -> pallet_referenda::BoundedCallOf<kusama_runtime::Runtime, ()> {
	let c = kusama_runtime::RuntimeCall::Balances(pallet_balances::Call::force_set_balance {
		who: KusamaAlice::get().into(),
		new_free: value,
	});
	<kusama_runtime::Preimage as StorePreimage>::bound(c).unwrap()
}

pub fn aye(amount: Balance, conviction: u8) -> AccountVote<Balance> {
	let vote = Vote { aye: true, conviction: conviction.try_into().unwrap() };
	AccountVote::Standard { vote, balance: amount }
}

fn tally(lst: CurrencyId, poll_index: u32) -> TallyOf<Runtime> {
	tangle_kusama_runtime::LstVoting::ensure_referendum_ongoing(lst, poll_index)
		.expect("No poll")
		.tally
}
