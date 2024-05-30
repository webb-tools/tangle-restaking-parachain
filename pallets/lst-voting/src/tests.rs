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

// Ensure we're `no_std` when compiling for Wasm.

use super::*;
use crate::mock::*;
use frame_support::{
	assert_noop, assert_ok,
	traits::{
		fungibles::Inspect,
		tokens::{Fortitude::Polite, Preservation::Expendable},
	},
	weights::RuntimeDbWeight,
};
use pallet_conviction_voting::Vote;
use pallet_xcm::Origin as XcmOrigin;
use tangle_primitives::currency::{VBNC, VKSM};

fn aye(amount: Balance, conviction: u8) -> AccountVote<Balance> {
	let vote = Vote { aye: true, conviction: conviction.try_into().unwrap() };
	AccountVote::Standard { vote, balance: amount }
}

fn nay(amount: Balance, conviction: u8) -> AccountVote<Balance> {
	let vote = Vote { aye: false, conviction: conviction.try_into().unwrap() };
	AccountVote::Standard { vote, balance: amount }
}

fn tally(lst: CurrencyId, poll_index: u32) -> TallyOf<Runtime> {
	LstVoting::ensure_referendum_ongoing(lst, poll_index).expect("No poll").tally
}

fn usable_balance(lst: CurrencyId, who: &AccountId) -> Balance {
	Tokens::reducible_balance(lst, who, Expendable, Polite)
}

fn origin_response() -> RuntimeOrigin {
	XcmOrigin::Response(Parent.into()).into()
}

fn response_success() -> Response {
	Response::DispatchResult(MaybeErrorCode::Success)
}

fn response_fail() -> Response {
	Response::DispatchResult(MaybeErrorCode::Error(BoundedVec::try_from(vec![0u8, 1u8]).unwrap()))
}

#[test]
fn basic_voting_works() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
		assert_eq!(tally(lst, poll_index), Tally::from_parts(10, 0, 2));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::Voted {
			who: ALICE,
			lst,
			poll_index,
			token_vote: aye(2, 5),
			delegator_vote: aye(100, 0),
		}));
		assert_ok!(LstVoting::notify_vote(origin_response(), 0, response_success()));

		assert_ok!(LstVoting::try_remove_vote(&ALICE, lst, poll_index, UnvoteScope::Any));
		assert_eq!(tally(lst, poll_index), Tally::from_parts(0, 0, 0));

		assert_ok!(LstVoting::update_lock(&ALICE, lst));
		assert_eq!(usable_balance(lst, &ALICE), 10);
	});
}

#[test]
fn voting_balance_gets_locked() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, nay(10, 0)));
		assert_eq!(tally(lst, poll_index), Tally::from_parts(0, 1, 0));
		assert_ok!(LstVoting::notify_vote(origin_response(), 0, response_success()));
		assert_eq!(usable_balance(lst, &ALICE), 0);

		assert_ok!(LstVoting::try_remove_vote(&ALICE, lst, poll_index, UnvoteScope::Any));
		assert_eq!(tally(lst, poll_index), Tally::from_parts(0, 0, 0));

		assert_ok!(LstVoting::update_lock(&ALICE, lst));
		assert_eq!(usable_balance(lst, &ALICE), 10);
	});
}

#[test]
fn successful_but_zero_conviction_vote_balance_can_be_unlocked() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(1, 1)));
		assert_eq!(usable_balance(lst, &ALICE), 9);
		assert_ok!(LstVoting::notify_vote(origin_response(), 0, response_success()));
		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(3, 1)));
		assert_eq!(usable_balance(lst, &ALICE), 7);
		assert_ok!(LstVoting::notify_vote(origin_response(), 1, response_success()));

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(BOB), lst, poll_index, nay(20, 0)));
		assert_eq!(usable_balance(lst, &BOB), 0);
		assert_ok!(LstVoting::notify_vote(origin_response(), 2, response_success()));

		assert_ok!(LstVoting::set_vote_locking_period(RuntimeOrigin::root(), lst, 10));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			poll_index,
			ReferendumInfoOf::<Runtime>::Completed(3),
		));

		assert_ok!(LstVoting::unlock(RuntimeOrigin::signed(BOB), lst, poll_index));
		assert_eq!(usable_balance(lst, &BOB), 20);

		RelaychainDataProvider::set_block_number(13);
		assert_ok!(LstVoting::unlock(RuntimeOrigin::signed(ALICE), lst, poll_index));
		assert_eq!(usable_balance(lst, &ALICE), 10);
	});
}

#[test]
fn unsuccessful_conviction_vote_balance_can_be_unlocked() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let locking_period = 10;
		assert_ok!(LstVoting::set_vote_locking_period(RuntimeOrigin::root(), lst, locking_period,));

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(1, 1)));
		assert_ok!(LstVoting::notify_vote(origin_response(), 0, response_success()));
		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(BOB), lst, poll_index, nay(20, 0)));
		assert_ok!(LstVoting::notify_vote(origin_response(), 1, response_success()));

		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			poll_index,
			ReferendumInfoOf::<Runtime>::Completed(3),
		));
		RelaychainDataProvider::set_block_number(13);
		assert_ok!(LstVoting::try_remove_vote(&ALICE, lst, poll_index, UnvoteScope::Any));
		assert_ok!(LstVoting::update_lock(&ALICE, lst));
		assert_eq!(usable_balance(lst, &ALICE), 10);
	});
}

#[test]
fn successful_conviction_vote_balance_stays_locked_for_correct_time() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let locking_period = 10;
		assert_ok!(LstVoting::set_vote_locking_period(RuntimeOrigin::root(), lst, locking_period,));
		for i in 1..=5 {
			assert_ok!(LstVoting::vote(
				RuntimeOrigin::signed(i),
				lst,
				poll_index,
				aye(10, i as u8)
			));
			assert_ok!(LstVoting::notify_vote(origin_response(), i - 1, response_success()));
		}
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			poll_index,
			ReferendumInfoOf::<Runtime>::Completed(3),
		));
		RelaychainDataProvider::set_block_number(163);
		for i in 1..=5 {
			assert_ok!(LstVoting::try_remove_vote(&i, lst, poll_index, UnvoteScope::Any));
		}
		for i in 1..=5 {
			assert_ok!(LstVoting::update_lock(&i, lst));
			assert_eq!(usable_balance(lst, &i), 10 * i as u128);
		}
	});
}

#[test]
fn lock_amalgamation_valid_with_multiple_removed_votes() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let response = response_success();

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, 0, aye(5, 1)));
		assert_ok!(LstVoting::notify_vote(origin_response(), 0, response.clone()));
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 5),]).unwrap()
		);

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, 1, aye(10, 1)));
		assert_ok!(LstVoting::notify_vote(origin_response(), 1, response.clone()));
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 10),]).unwrap()
		);

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, 1, aye(5, 1)));
		assert_ok!(LstVoting::notify_vote(origin_response(), 2, response.clone()));
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 5),]).unwrap()
		);
		assert_eq!(usable_balance(lst, &ALICE), 5);

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, 2, aye(10, 2)));
		assert_ok!(LstVoting::notify_vote(origin_response(), 3, response.clone()));
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 10),]).unwrap()
		);

		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			0,
			ReferendumInfoOf::<Runtime>::Completed(1),
		));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			1,
			ReferendumInfoOf::<Runtime>::Completed(1),
		));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			2,
			ReferendumInfoOf::<Runtime>::Completed(1),
		));

		let locking_period = 10;
		assert_ok!(LstVoting::set_vote_locking_period(RuntimeOrigin::root(), lst, locking_period,));
		assert_eq!(VoteLockingPeriod::<Runtime>::get(lst), Some(10));

		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 10),]).unwrap()
		);

		RelaychainDataProvider::set_block_number(10);
		assert_noop!(
			LstVoting::unlock(RuntimeOrigin::signed(ALICE), lst, 0),
			Error::<Runtime>::NoPermissionYet
		);
		assert_eq!(VotingFor::<Runtime>::get(&ALICE).locked_balance(), 10);
		assert_eq!(usable_balance(lst, &ALICE), 0);

		RelaychainDataProvider::set_block_number(11);
		assert_ok!(LstVoting::unlock(RuntimeOrigin::signed(ALICE), lst, 0));
		assert_eq!(VotingFor::<Runtime>::get(&ALICE).locked_balance(), 10);
		assert_eq!(usable_balance(lst, &ALICE), 0);
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 10),]).unwrap()
		);

		RelaychainDataProvider::set_block_number(11);
		assert_ok!(LstVoting::unlock(RuntimeOrigin::signed(ALICE), lst, 1));
		assert_eq!(usable_balance(lst, &ALICE), 0);
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 10)]).unwrap()
		);

		RelaychainDataProvider::set_block_number(21);
		assert_ok!(LstVoting::unlock(RuntimeOrigin::signed(ALICE), lst, 2));
		assert_eq!(usable_balance(lst, &ALICE), 10);
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![]).unwrap()
		);
	});
}

#[test]
fn removed_votes_when_referendum_killed() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let response = response_success();

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, 0, aye(5, 1)));
		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, 1, aye(10, 1)));
		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, 2, aye(5, 2)));
		assert_eq!(usable_balance(lst, &ALICE), 0);

		assert_ok!(LstVoting::notify_vote(origin_response(), 0, response.clone()));
		assert_ok!(LstVoting::notify_vote(origin_response(), 1, response.clone()));
		assert_ok!(LstVoting::notify_vote(origin_response(), 2, response.clone()));

		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			0,
			ReferendumInfoOf::<Runtime>::Completed(1),
		));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			1,
			ReferendumInfoOf::<Runtime>::Completed(1),
		));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			2,
			ReferendumInfoOf::<Runtime>::Completed(1),
		));

		assert_ok!(LstVoting::kill_referendum(RuntimeOrigin::root(), lst, 0));
		assert_ok!(LstVoting::kill_referendum(RuntimeOrigin::root(), lst, 1));
		assert_ok!(LstVoting::kill_referendum(RuntimeOrigin::root(), lst, 2));

		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 10),]).unwrap()
		);

		assert_ok!(LstVoting::unlock(RuntimeOrigin::signed(ALICE), lst, 0));
		assert_eq!(usable_balance(lst, &ALICE), 0);
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 10),]).unwrap()
		);

		assert_ok!(LstVoting::unlock(RuntimeOrigin::signed(ALICE), lst, 1));
		assert_eq!(usable_balance(lst, &ALICE), 5);
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![(lst, 5)]).unwrap()
		);

		assert_ok!(LstVoting::unlock(RuntimeOrigin::signed(ALICE), lst, 2));
		assert_eq!(usable_balance(lst, &ALICE), 10);
		assert_eq!(
			ClassLocksFor::<Runtime>::get(&ALICE),
			BoundedVec::<(CurrencyId, u128), ConstU32<256>>::try_from(vec![]).unwrap()
		);
	});
}

#[test]
fn errors_with_vote_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;

		assert_noop!(
			LstVoting::vote(RuntimeOrigin::signed(1), VBNC, 0, aye(10, 0)),
			Error::<Runtime>::LstNotSupport
		);
		assert_noop!(
			LstVoting::vote(RuntimeOrigin::signed(1), lst, 3, aye(11, 0)),
			Error::<Runtime>::InsufficientFunds
		);

		for poll_index in 0..256 {
			assert_ok!(LstVoting::vote(RuntimeOrigin::signed(1), lst, poll_index, aye(10, 0)));
		}
		assert_noop!(
			LstVoting::vote(RuntimeOrigin::signed(1), lst, 256, aye(10, 0)),
			Error::<Runtime>::MaxVotesReached
		);
	});
}

#[test]
fn kill_referendum_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let poll_index = 3;

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(5, 1)));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			poll_index,
			ReferendumInfoOf::<Runtime>::Completed(1),
		));
		assert_ok!(LstVoting::kill_referendum(RuntimeOrigin::root(), lst, poll_index));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::ReferendumKilled {
			lst,
			poll_index,
		}));
	});
}

#[test]
fn kill_referendum_with_origin_signed_fails() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let poll_index = 3;

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(5, 1)));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			poll_index,
			ReferendumInfoOf::<Runtime>::Completed(1),
		));
		assert_noop!(
			LstVoting::kill_referendum(RuntimeOrigin::signed(ALICE), lst, poll_index),
			DispatchError::BadOrigin
		);
	});
}

#[test]
fn add_delegator_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let derivative_index: DerivativeIndex = 100;

		assert_ok!(LstVoting::add_delegator(RuntimeOrigin::root(), lst, derivative_index,));

		System::assert_last_event(RuntimeEvent::LstVoting(Event::DelegatorAdded {
			lst,
			derivative_index,
		}));
	});
}

#[test]
fn set_referendum_status_works() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let info = ReferendumInfo::Completed(3);

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			poll_index,
			info.clone(),
		));

		System::assert_last_event(RuntimeEvent::LstVoting(Event::ReferendumInfoSet {
			lst,
			poll_index,
			info,
		}));
	});
}

#[test]
fn set_referendum_status_without_vote_should_fail() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let info = ReferendumInfo::Completed(3);

		assert_noop!(
			LstVoting::set_referendum_status(RuntimeOrigin::root(), lst, poll_index, info.clone(),),
			Error::<Runtime>::NoData
		);
	});
}

#[test]
fn set_referendum_status_with_origin_signed_should_fail() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let info = ReferendumInfo::Completed(3);

		assert_noop!(
			LstVoting::set_referendum_status(
				RuntimeOrigin::signed(ALICE),
				lst,
				poll_index,
				info.clone(),
			),
			DispatchError::BadOrigin
		);
	});
}

#[test]
fn set_vote_locking_period_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let locking_period = 100;

		assert_ok!(LstVoting::set_vote_locking_period(RuntimeOrigin::root(), lst, locking_period,));

		System::assert_last_event(RuntimeEvent::LstVoting(Event::VoteLockingPeriodSet {
			lst,
			locking_period,
		}));
	});
}

#[test]
fn set_vote_locking_period_with_origin_signed_should_fail() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let locking_period = 100;

		assert_noop!(
			LstVoting::set_vote_locking_period(RuntimeOrigin::signed(ALICE), lst, locking_period,),
			DispatchError::BadOrigin
		);
	});
}

#[test]
fn set_undeciding_timeout_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let undeciding_timeout = 100;

		assert_ok!(LstVoting::set_undeciding_timeout(
			RuntimeOrigin::root(),
			lst,
			undeciding_timeout,
		));

		System::assert_last_event(RuntimeEvent::LstVoting(Event::UndecidingTimeoutSet {
			lst,
			undeciding_timeout,
		}));
	});
}

#[test]
fn set_undeciding_timeout_with_origin_signed_should_fail() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let undeciding_timeout = 100;

		assert_noop!(
			LstVoting::set_undeciding_timeout(
				RuntimeOrigin::signed(ALICE),
				lst,
				undeciding_timeout,
			),
			DispatchError::BadOrigin
		);
	});
}

#[test]
fn notify_vote_success_works() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let query_id = 0;
		let response = response_success();
		let derivative_index = 0;

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
		assert_eq!(
			ReferendumInfoFor::<Runtime>::get(lst, poll_index),
			Some(ReferendumInfo::Ongoing(ReferendumStatus {
				submitted: None,
				tally: TallyOf::<Runtime>::from_parts(10, 0, 2),
			}))
		);
		assert_eq!(
			PendingDelegatorVotes::<Runtime>::get(lst, poll_index),
			BoundedVec::<(DerivativeIndex, AccountVote<Balance>), ConstU32<100>>::try_from(vec![(
				derivative_index,
				aye(100, 0)
			)])
			.unwrap()
		);
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);
		assert_eq!(tally(lst, poll_index), Tally::from_parts(10, 0, 2));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::Voted {
			who: ALICE,
			lst,
			poll_index,
			token_vote: aye(2, 5),
			delegator_vote: aye(100, 0),
		}));

		assert_ok!(LstVoting::notify_vote(origin_response(), query_id, response.clone()));
		assert_eq!(
			ReferendumInfoFor::<Runtime>::get(lst, poll_index),
			Some(ReferendumInfo::Ongoing(ReferendumStatus {
				submitted: Some(1),
				tally: TallyOf::<Runtime>::from_parts(10, 0, 2),
			}))
		);
		assert_eq!(PendingDelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);
		assert_eq!(
			DelegatorVotes::<Runtime>::get(lst, poll_index),
			BoundedVec::<(DerivativeIndex, AccountVote<Balance>), ConstU32<100>>::try_from(vec![(
				derivative_index,
				aye(100, 0)
			)])
			.unwrap()
		);
		System::assert_has_event(RuntimeEvent::LstVoting(Event::VoteNotified {
			lst,
			poll_index,
			success: true,
		}));
		System::assert_has_event(RuntimeEvent::LstVoting(Event::ReferendumInfoCreated {
			lst,
			poll_index,
			info: ReferendumInfo::Ongoing(ReferendumStatus {
				submitted: Some(1),
				tally: TallyOf::<Runtime>::from_parts(10, 0, 2),
			}),
		}));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::ResponseReceived {
			responder: Parent.into(),
			query_id,
			response,
		}));
	});
}

#[test]
fn notify_vote_success_max_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;

		for poll_index in 0..256 {
			RelaychainDataProvider::set_block_number(1);

			assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
			assert_ok!(LstVoting::notify_vote(
				origin_response(),
				poll_index as QueryId,
				response_success()
			));

			RelaychainDataProvider::set_block_number(
				1 + UndecidingTimeout::<Runtime>::get(lst).unwrap(),
			);
			LstVoting::on_idle(Zero::zero(), Weight::MAX);
		}
	});
}

#[test]
fn notify_vote_success_exceed_max_fail() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;

		for poll_index in 0..50 {
			assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
			assert_ok!(LstVoting::notify_vote(
				origin_response(),
				poll_index as QueryId,
				response_success()
			));
		}
		let poll_index = 50;
		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
		assert_noop!(
			LstVoting::notify_vote(origin_response(), poll_index as QueryId, response_success()),
			Error::<Runtime>::TooMany
		);
	});
}

#[test]
fn notify_vote_fail_works() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let query_id = 0;
		let response = response_fail();
		let derivative_index = 0;

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
		assert_eq!(
			ReferendumInfoFor::<Runtime>::get(lst, poll_index),
			Some(ReferendumInfo::Ongoing(ReferendumStatus {
				submitted: None,
				tally: TallyOf::<Runtime>::from_parts(10, 0, 2),
			}))
		);
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);
		assert_eq!(
			PendingDelegatorVotes::<Runtime>::get(lst, poll_index),
			BoundedVec::<(DerivativeIndex, AccountVote<Balance>), ConstU32<100>>::try_from(vec![(
				derivative_index,
				aye(100, 0)
			)])
			.unwrap()
		);
		assert_eq!(tally(lst, poll_index), Tally::from_parts(10, 0, 2));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::Voted {
			who: ALICE,
			lst,
			poll_index,
			token_vote: aye(2, 5),
			delegator_vote: aye(100, 0),
		}));

		assert_ok!(LstVoting::notify_vote(origin_response(), query_id, response.clone()));
		assert_eq!(ReferendumInfoFor::<Runtime>::get(lst, poll_index), None);
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);
		assert_eq!(PendingDelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);
		System::assert_last_event(RuntimeEvent::LstVoting(Event::ResponseReceived {
			responder: Parent.into(),
			query_id,
			response,
		}));
	});
}

#[test]
fn notify_vote_with_no_data_works() {
	new_test_ext().execute_with(|| {
		let query_id = 0;
		let response = response_success();

		assert_ok!(LstVoting::notify_vote(origin_response(), query_id, response.clone()));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::ResponseReceived {
			responder: Parent.into(),
			query_id,
			response,
		}));
	});
}

#[test]
fn notify_remove_delegator_vote_success_works() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let mut query_id = 0;
		let derivative_index = 0;
		let response = response_success();

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);
		assert_eq!(
			PendingDelegatorVotes::<Runtime>::get(lst, poll_index),
			BoundedVec::<(DerivativeIndex, AccountVote<Balance>), ConstU32<100>>::try_from(vec![(
				derivative_index,
				aye(100, 0)
			)])
			.unwrap()
		);
		assert_eq!(tally(lst, poll_index), Tally::from_parts(10, 0, 2));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::Voted {
			who: ALICE,
			lst,
			poll_index,
			token_vote: aye(2, 5),
			delegator_vote: aye(100, 0),
		}));
		assert_ok!(LstVoting::notify_vote(origin_response(), query_id, response.clone()));
		assert_eq!(
			DelegatorVotes::<Runtime>::get(lst, poll_index),
			BoundedVec::<(DerivativeIndex, AccountVote<Balance>), ConstU32<100>>::try_from(vec![(
				derivative_index,
				aye(100, 0)
			)])
			.unwrap()
		);
		assert_eq!(PendingDelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);

		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			poll_index,
			ReferendumInfoOf::<Runtime>::Completed(3),
		));
		assert_ok!(LstVoting::set_vote_locking_period(RuntimeOrigin::root(), lst, 10));

		RelaychainDataProvider::set_block_number(3);
		assert_ok!(LstVoting::remove_delegator_vote(
			RuntimeOrigin::signed(ALICE),
			lst,
			poll_index,
			derivative_index,
		));
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 1);

		query_id = 1;
		assert_ok!(LstVoting::notify_remove_delegator_vote(
			origin_response(),
			query_id,
			response.clone()
		));
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);
		System::assert_has_event(RuntimeEvent::LstVoting(Event::DelegatorVoteRemovedNotified {
			lst,
			poll_index,
			success: true,
		}));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::ResponseReceived {
			responder: Parent.into(),
			query_id,
			response,
		}));
	});
}

#[test]
fn notify_remove_delegator_vote_fail_works() {
	new_test_ext().execute_with(|| {
		let poll_index = 3;
		let lst = VKSM;
		let mut query_id = 0;
		let derivative_index = 0;
		let response = response_fail();

		assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, poll_index, aye(2, 5)));
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);
		assert_eq!(
			PendingDelegatorVotes::<Runtime>::get(lst, poll_index),
			BoundedVec::<(DerivativeIndex, AccountVote<Balance>), ConstU32<100>>::try_from(vec![(
				derivative_index,
				aye(100, 0)
			)])
			.unwrap()
		);
		assert_eq!(tally(lst, poll_index), Tally::from_parts(10, 0, 2));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::Voted {
			who: ALICE,
			lst,
			poll_index,
			token_vote: aye(2, 5),
			delegator_vote: aye(100, 0),
		}));
		assert_ok!(LstVoting::notify_vote(origin_response(), query_id, response_success()));
		assert_eq!(
			DelegatorVotes::<Runtime>::get(lst, poll_index),
			BoundedVec::<(DerivativeIndex, AccountVote<Balance>), ConstU32<100>>::try_from(vec![(
				derivative_index,
				aye(100, 0)
			)])
			.unwrap()
		);
		assert_eq!(PendingDelegatorVotes::<Runtime>::get(lst, poll_index).len(), 0);

		assert_ok!(LstVoting::set_referendum_status(
			RuntimeOrigin::root(),
			lst,
			poll_index,
			ReferendumInfoOf::<Runtime>::Completed(3),
		));
		assert_ok!(LstVoting::set_vote_locking_period(RuntimeOrigin::root(), lst, 10));

		RelaychainDataProvider::set_block_number(3);
		assert_ok!(LstVoting::remove_delegator_vote(
			RuntimeOrigin::signed(ALICE),
			lst,
			poll_index,
			derivative_index,
		));
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 1);

		query_id = 1;
		assert_ok!(LstVoting::notify_remove_delegator_vote(
			origin_response(),
			query_id,
			response.clone()
		));
		assert_eq!(DelegatorVotes::<Runtime>::get(lst, poll_index).len(), 1);
		System::assert_last_event(RuntimeEvent::LstVoting(Event::ResponseReceived {
			responder: Parent.into(),
			query_id,
			response,
		}));
	});
}

#[test]
fn notify_remove_delegator_vote_with_no_data_works() {
	new_test_ext().execute_with(|| {
		let query_id = 0;
		let response = response_success();

		assert_ok!(LstVoting::notify_remove_delegator_vote(
			origin_response(),
			query_id,
			response.clone(),
		));
		System::assert_last_event(RuntimeEvent::LstVoting(Event::ResponseReceived {
			responder: Parent.into(),
			query_id,
			response,
		}));
	});
}

#[test]
fn on_idle_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		for (index, poll_index) in (0..50).collect::<Vec<_>>().iter().enumerate() {
			let relay_block_number = index as BlockNumber;
			let query_id = index as QueryId;
			RelaychainDataProvider::set_block_number(relay_block_number);
			assert_ok!(LstVoting::vote(RuntimeOrigin::signed(ALICE), lst, *poll_index, aye(2, 5)));
			assert_ok!(LstVoting::notify_vote(
				origin_response(),
				query_id as QueryId,
				response_success()
			));
		}

		let count = 30;
		RelaychainDataProvider::set_block_number(
			count + UndecidingTimeout::<Runtime>::get(lst).unwrap(),
		);
		let db_weight = RuntimeDbWeight { read: 1, write: 1 };
		let weight =
			db_weight.reads(3) + db_weight.reads_writes(1, 2) * count + db_weight.writes(2) * count;
		let used_weight = LstVoting::on_idle(Zero::zero(), weight);
		assert_eq!(used_weight, Weight::from_parts(153, 0));

		let mut actual_count = 0;
		for poll_index in 0..50 {
			let relay_block_number = poll_index as BlockNumber;
			if ReferendumTimeout::<Runtime>::get(
				relay_block_number + UndecidingTimeout::<Runtime>::get(lst).unwrap(),
			)
			.is_empty()
			{
				actual_count += 1;
			}
		}
		assert_eq!(actual_count, count);
	});
}

#[test]
fn set_vote_cap_ratio_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;

		assert_ok!(LstVoting::set_vote_cap_ratio(
			RuntimeOrigin::root(),
			lst,
			Perbill::from_percent(0)
		));
		assert_eq!(VoteCapRatio::<Runtime>::get(lst), Perbill::from_percent(0));

		assert_ok!(LstVoting::set_vote_cap_ratio(
			RuntimeOrigin::root(),
			lst,
			Perbill::from_percent(10)
		));
		assert_eq!(VoteCapRatio::<Runtime>::get(lst), Perbill::from_percent(10));

		assert_ok!(LstVoting::set_vote_cap_ratio(
			RuntimeOrigin::root(),
			lst,
			Perbill::from_percent(100)
		));
		assert_eq!(VoteCapRatio::<Runtime>::get(lst), Perbill::from_percent(100));
	});
}

#[test]
fn vote_cap_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		assert_eq!(LstVoting::vote_cap(lst), Ok((u64::MAX / 10) as Balance));
	});
}

#[test]
fn vote_to_capital_works() {
	new_test_ext().execute_with(|| {
		assert_eq!(LstVoting::vote_to_capital(Conviction::None, 300), 3000);
		assert_eq!(LstVoting::vote_to_capital(Conviction::Locked1x, 300), 300);
		assert_eq!(LstVoting::vote_to_capital(Conviction::Locked2x, 300), 150);
		assert_eq!(LstVoting::vote_to_capital(Conviction::Locked3x, 300), 100);
		assert_eq!(LstVoting::vote_to_capital(Conviction::Locked4x, 300), 75);
		assert_eq!(LstVoting::vote_to_capital(Conviction::Locked5x, 300), 60);
		assert_eq!(LstVoting::vote_to_capital(Conviction::Locked6x, 300), 50);
	});
}

#[test]
fn compute_delegator_total_vote_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, aye(10, 0)), Ok(aye(10, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, aye(2, 1)), Ok(aye(20, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, aye(2, 2)), Ok(aye(40, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, aye(2, 3)), Ok(aye(60, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, aye(2, 4)), Ok(aye(80, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, aye(2, 5)), Ok(aye(100, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, aye(2, 6)), Ok(aye(120, 0)));

		assert_eq!(LstVoting::compute_delegator_total_vote(lst, nay(10, 0)), Ok(nay(10, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, nay(2, 1)), Ok(nay(20, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, nay(2, 2)), Ok(nay(40, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, nay(2, 3)), Ok(nay(60, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, nay(2, 4)), Ok(nay(80, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, nay(2, 5)), Ok(nay(100, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, nay(2, 6)), Ok(nay(120, 0)));

		SimplelstSupplyProvider::set_token_supply(10_000_000);
		assert_eq!(LstVoting::vote_cap(lst), Ok(1_000_000));
		assert_eq!(
			LstVoting::compute_delegator_total_vote(lst, aye(1_000_000, 0)),
			Ok(aye(1_000_000, 0))
		);
		for i in 1..=6_u8 {
			assert_eq!(
				LstVoting::compute_delegator_total_vote(lst, aye(10_000_000 * i as Balance, 0)),
				Ok(aye(1_000_000, i))
			);
		}

		assert_eq!(
			LstVoting::compute_delegator_total_vote(lst, aye(100_000, 1)),
			Ok(aye(1_000_000, 0))
		);
		for i in 1..=6_u8 {
			assert_eq!(
				LstVoting::compute_delegator_total_vote(lst, aye(1_000_000 * i as Balance, 1)),
				Ok(aye(1_000_000, i))
			);
		}
		assert_noop!(
			LstVoting::compute_delegator_total_vote(lst, aye(6_000_006, 1)),
			Error::<Runtime>::InsufficientFunds
		);

		assert_eq!(
			LstVoting::compute_delegator_total_vote(lst, aye(50_000, 2)),
			Ok(aye(1_000_000, 0))
		);
		for i in 1..=6_u8 {
			assert_eq!(
				LstVoting::compute_delegator_total_vote(lst, aye(500_000 * i as Balance, 2)),
				Ok(aye(1_000_000, i))
			);
		}
		assert_noop!(
			LstVoting::compute_delegator_total_vote(lst, aye(3_000_003, 2)),
			Error::<Runtime>::InsufficientFunds
		);

		assert_eq!(
			LstVoting::compute_delegator_total_vote(lst, aye(33_333, 3)),
			Ok(aye(999_990, 0))
		);
		for i in 1..=6_u8 {
			assert_eq!(
				LstVoting::compute_delegator_total_vote(lst, aye(333_333 * i as Balance, 3)),
				Ok(aye(999_999, i))
			);
		}
		assert_noop!(
			LstVoting::compute_delegator_total_vote(lst, aye(2_000_002, 3)),
			Error::<Runtime>::InsufficientFunds
		);

		assert_eq!(
			LstVoting::compute_delegator_total_vote(lst, aye(25_000, 4)),
			Ok(aye(1_000_000, 0))
		);
		for i in 1..=6_u8 {
			assert_eq!(
				LstVoting::compute_delegator_total_vote(lst, aye(250_000 * i as Balance, 4)),
				Ok(aye(1_000_000, i))
			);
		}
		assert_noop!(
			LstVoting::compute_delegator_total_vote(lst, aye(1_500_002, 4)),
			Error::<Runtime>::InsufficientFunds
		);

		assert_eq!(
			LstVoting::compute_delegator_total_vote(lst, aye(20_000, 5)),
			Ok(aye(1_000_000, 0))
		);
		for i in 1..=6_u8 {
			assert_eq!(
				LstVoting::compute_delegator_total_vote(lst, aye(200_000 * i as Balance, 5)),
				Ok(aye(1_000_000, i))
			);
		}
		assert_noop!(
			LstVoting::compute_delegator_total_vote(lst, aye(1_200_002, 5)),
			Error::<Runtime>::InsufficientFunds
		);

		assert_eq!(
			LstVoting::compute_delegator_total_vote(lst, aye(16_666, 6)),
			Ok(aye(999_960, 0))
		);
		for i in 1..=6_u8 {
			assert_eq!(
				LstVoting::compute_delegator_total_vote(lst, aye(166_666 * i as Balance, 6)),
				Ok(aye(999_996, i))
			);
		}
		assert_noop!(
			LstVoting::compute_delegator_total_vote(lst, aye(1_000_001, 6)),
			Error::<Runtime>::InsufficientFunds
		);
	});
}

#[test]
fn compute_delegator_total_vote_with_low_value_will_loss() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, aye(9, 0)), Ok(aye(0, 0)));
		assert_eq!(LstVoting::compute_delegator_total_vote(lst, nay(9, 0)), Ok(nay(0, 0)));
	});
}

#[test]
fn allocate_delegator_votes_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;
		let poll_index = 3;

		for conviction in 0..=6 {
			let vote = aye(5e9 as Balance, conviction);
			let delegator_votes = LstVoting::allocate_delegator_votes(lst, poll_index, vote);
			assert_eq!(
				delegator_votes,
				Ok(vec![(0, aye(4294967295, conviction)), (1, aye(705032705, conviction))])
			);
			assert_eq!(
				delegator_votes.unwrap().into_iter().map(|(_derivative_index, vote)| vote).fold(
					aye(0, conviction),
					|mut acc, vote| {
						let _ = acc.checked_add(vote);
						acc
					},
				),
				vote
			);
		}

		for conviction in 0..=6 {
			let vote = aye(3e10 as Balance, conviction);
			let delegator_votes = LstVoting::allocate_delegator_votes(lst, poll_index, vote);
			assert_eq!(
				delegator_votes,
				Ok(vec![
					(0, aye(4294967295, conviction)),
					(1, aye(4294967295, conviction)),
					(2, aye(4294967295, conviction)),
					(3, aye(4294967295, conviction)),
					(4, aye(4294967295, conviction)),
					(5, aye(4294967295, conviction)),
					(10, aye(4230196230, conviction))
				])
			);
			assert_eq!(
				delegator_votes.unwrap().into_iter().map(|(_derivative_index, vote)| vote).fold(
					aye(0, conviction),
					|mut acc, vote| {
						let _ = acc.checked_add(vote);
						acc
					},
				),
				vote
			);
		}
	});
}

#[test]
fn tally_convert_works() {
	assert_eq!(
		TallyOf::<Runtime>::from_parts(10, 9, 0).account_vote(Conviction::Locked1x),
		aye(1, 1)
	);
	assert_eq!(
		TallyOf::<Runtime>::from_parts(10, 11, 0).account_vote(Conviction::Locked1x),
		nay(1, 1)
	);
	assert_eq!(
		TallyOf::<Runtime>::from_parts(10, 10, 0).account_vote(Conviction::Locked1x),
		aye(0, 1)
	);
}

#[test]
fn set_lock_works() {
	new_test_ext().execute_with(|| {
		let lst = VKSM;

		assert_ok!(LstVoting::set_lock(&ALICE, lst, 10));
		assert_eq!(usable_balance(lst, &ALICE), 0);

		assert_ok!(LstVoting::set_lock(&ALICE, lst, 1));
		assert_eq!(usable_balance(lst, &ALICE), 9);

		assert_ok!(LstVoting::set_lock(&ALICE, lst, 0));
		assert_eq!(usable_balance(lst, &ALICE), 10);
	});
}
