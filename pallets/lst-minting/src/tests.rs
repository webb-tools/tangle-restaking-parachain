// This file is part of Tangle.

// Copyright (C) Liebi Technologies PTE. LTD.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

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

#![cfg(test)]

use crate::{mock::*, DispatchError::Module, *};
use tangle_primitives::currency::{BNC, FIL, KSM, MOVR, VBNC, VFIL, VKSM, VMOVR};
use frame_support::{assert_noop, assert_ok, sp_runtime::Permill, BoundedVec};
use sp_runtime::ModuleError;

#[test]
fn mint_bnc() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			BNC,
			95000000000,
			BoundedVec::default(),
			None
		));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			BNC,
			TimeUnit::Era(1)
		));
		assert_ok!(LstMinting::increase_token_pool(BNC, 70000000000));
		// assert_eq!(LstMinting::token_pool(BNC), 70000000000);
		assert_ok!(LstMinting::update_ongoing_time_unit(BNC, TimeUnit::Era(1)));
		assert_eq!(Tokens::free_balance(VBNC, &BOB), 95000000000);
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VBNC, 20000000000));
	});
}

#[test]
fn redeem_bnc() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		// AssetIdMaps::<Runtime>::register_lst_metadata(TokenSymbol::BNC)
		// 	.expect("Lst register");
		assert_ok!(LstMinting::set_minimum_mint(RuntimeOrigin::signed(ALICE), BNC, 0));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			BNC,
			100000000000,
			BoundedVec::default(),
			None
		));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			BNC,
			TimeUnit::Era(1)
		));
		assert_ok!(LstMinting::increase_token_pool(BNC, 70000000000));
		assert_ok!(LstMinting::update_ongoing_time_unit(BNC, TimeUnit::Era(1)));
		assert_eq!(Tokens::free_balance(VBNC, &BOB), 100000000000);
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VBNC, 20000000000));
	});
}

#[test]
fn mint() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		assert_ok!(LstMinting::set_minimum_mint(RuntimeOrigin::signed(ALICE), KSM, 200));
		pub const FEE: Permill = Permill::from_percent(5);
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));
		assert_noop!(
			LstMinting::mint(Some(BOB).into(), KSM, 100, BoundedVec::default(), None),
			Error::<Runtime>::BelowMinimumMint
		);
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			KSM,
			100000000000,
			BoundedVec::default(),
			None
		));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			MOVR,
			100000000000000000000,
			BoundedVec::default(),
			None
		));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			MOVR,
			100000000000000000000,
			BoundedVec::default(),
			None
		));
		assert_eq!(LstMinting::token_pool(MOVR), 190000000000000000000);
		assert_eq!(LstMinting::token_pool(KSM), 95000000000);
		assert_eq!(LstMinting::minimum_mint(KSM), 200);
		assert_eq!(Tokens::total_issuance(VKSM), 95000001000);

		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 95000000000);
		let fee_account: AccountId = <Runtime as Config>::FeeAccount::get();
		assert_eq!(Tokens::free_balance(KSM, &fee_account), 5000000000);
	});
}

#[test]
fn redeem() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		pub const FEE: Permill = Permill::from_percent(2);
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			KSM,
			TimeUnit::Era(1)
		));
		assert_ok!(LstMinting::increase_token_pool(KSM, 1000));
		assert_ok!(LstMinting::update_ongoing_time_unit(KSM, TimeUnit::Era(1)));
		assert_ok!(LstMinting::set_minimum_redeem(RuntimeOrigin::signed(ALICE), VKSM, 90));
		assert_ok!(LstMinting::mint(Some(BOB).into(), KSM, 1000, BoundedVec::default(), None));
		assert_noop!(
			LstMinting::redeem(Some(BOB).into(), VKSM, 80),
			Error::<Runtime>::BelowMinimumRedeem
		);
		assert_noop!(
			LstMinting::redeem(Some(BOB).into(), KSM, 80),
			Error::<Runtime>::NotSupportTokenType
		);
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 100));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 200));
		assert_eq!(LstMinting::token_pool(KSM), 1686); // 1000 + 980 - 98 - 196
		assert_eq!(LstMinting::unlocking_total(KSM), 294); // 98 + 196
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			MOVR,
			TimeUnit::Round(1)
		));
		assert_ok!(LstMinting::update_ongoing_time_unit(MOVR, TimeUnit::Round(1)));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			MOVR,
			300000000000000000000,
			BoundedVec::default(),
			None
		));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VMOVR, 20000000000000000000));
		assert_ok!(LstMinting::add_support_rebond_token(RuntimeOrigin::signed(ALICE), MOVR));
		assert_ok!(LstMinting::rebond(Some(BOB).into(), MOVR, 19000000000000000000));
		assert_ok!(LstMinting::set_min_time_unit(
			RuntimeOrigin::signed(ALICE),
			MOVR,
			TimeUnit::Round(1)
		));
		assert_eq!(LstMinting::min_time_unit(MOVR), TimeUnit::Round(1));
		assert_ok!(LstMinting::set_unlocking_total(RuntimeOrigin::signed(ALICE), MOVR, 1000));
		assert_eq!(LstMinting::unlocking_total(MOVR), 1000);
		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 980);
		let mut ledger_list_origin = BoundedVec::default();
		assert_ok!(ledger_list_origin.try_push(0));
		assert_ok!(ledger_list_origin.try_push(1));
		assert_eq!(
			LstMinting::user_unlock_ledger(BOB, KSM),
			Some((294, ledger_list_origin.clone()))
		);
		assert_eq!(
			LstMinting::token_unlock_ledger(KSM, 0),
			Some((BOB, 98, TimeUnit::Era(2), RedeemType::Native))
		);
		let mut ledger_list_origin2 = BoundedVec::default();
		assert_ok!(ledger_list_origin2.try_push(0));
		assert_ok!(ledger_list_origin2.try_push(1));
		assert_eq!(
			LstMinting::time_unit_unlock_ledger(TimeUnit::Era(2), KSM),
			Some((294, ledger_list_origin2, KSM))
		);
	});
}

#[test]
fn rebond() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		pub const FEE: Permill = Permill::from_percent(0);
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			KSM,
			TimeUnit::Era(0)
		));
		assert_ok!(LstMinting::increase_token_pool(KSM, 1000));
		assert_ok!(LstMinting::update_ongoing_time_unit(KSM, TimeUnit::Era(1)));
		let mut ledger_list_origin = BoundedVec::default();
		assert_ok!(ledger_list_origin.try_push(0));
		let mut ledger_list_origin2 = BoundedVec::default();
		assert_ok!(ledger_list_origin2.try_push(0));
		assert_ok!(LstMinting::mint(Some(BOB).into(), KSM, 200, BoundedVec::default(), None));
		assert_ok!(LstMinting::mint(Some(BOB).into(), KSM, 100, BoundedVec::default(), None));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 200));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 100));
		assert_eq!(
			LstMinting::token_unlock_ledger(KSM, 1),
			Some((BOB, 100, TimeUnit::Era(1), RedeemType::Native))
		);
		assert_noop!(
			LstMinting::rebond(Some(BOB).into(), KSM, 100),
			Error::<Runtime>::InvalidRebondToken
		);
		assert_ok!(LstMinting::add_support_rebond_token(RuntimeOrigin::signed(ALICE), KSM));
		assert_ok!(LstMinting::rebond(Some(BOB).into(), KSM, 200));
		assert_eq!(
			LstMinting::time_unit_unlock_ledger(TimeUnit::Era(1), KSM),
			Some((100, ledger_list_origin.clone(), KSM))
		);
		assert_eq!(
			LstMinting::user_unlock_ledger(BOB, KSM),
			Some((100, ledger_list_origin2.clone()))
		);
		assert_eq!(
			LstMinting::token_unlock_ledger(KSM, 0),
			Some((BOB, 100, TimeUnit::Era(1), RedeemType::Native))
		);
		assert_eq!(LstMinting::token_unlock_ledger(KSM, 1), None);
		assert_eq!(LstMinting::token_pool(KSM), 1200);
		assert_eq!(LstMinting::unlocking_total(KSM), 100); // 200 + 100 - 200
		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 300);
	});
}

#[test]
fn movr() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_ok!(LstMinting::set_hook_iteration_limit(RuntimeOrigin::signed(ALICE), 10));
		assert_ok!(LstMinting::set_min_time_unit(
			RuntimeOrigin::signed(ALICE),
			MOVR,
			TimeUnit::Round(1)
		));
		pub const FEE: Permill = Permill::from_percent(2);
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			MOVR,
			TimeUnit::Round(1)
		));
		assert_ok!(LstMinting::update_ongoing_time_unit(MOVR, TimeUnit::Round(1)));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			MOVR,
			300000000000000000000,
			BoundedVec::default(),
			None
		));
		assert_eq!(Tokens::free_balance(MOVR, &entrance_account), 294000000000000000000);
		assert_eq!(Tokens::free_balance(VMOVR, &BOB), 294000000000000000000);
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VMOVR, 200000000000000000000));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VMOVR, 80000000000000000000));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VMOVR, 10000000000000000000));
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		assert_eq!(LstMinting::min_time_unit(MOVR), TimeUnit::Round(2));
		assert_eq!(LstMinting::ongoing_time_unit(MOVR), Some(TimeUnit::Round(1)));
		assert_eq!(Tokens::free_balance(MOVR, &BOB), 984200000000000000000);
		assert_eq!(LstMinting::token_unlock_ledger(MOVR, 0), None);
		assert_ok!(LstMinting::mint(
			Some(CHARLIE).into(),
			MOVR,
			30000000000000000000000,
			BoundedVec::default(),
			None
		));
		assert_ok!(LstMinting::redeem(Some(CHARLIE).into(), VMOVR, 20000000000000000000000));
		assert_ok!(LstMinting::add_support_rebond_token(RuntimeOrigin::signed(ALICE), MOVR));
		assert_eq!(LstMinting::token_unlock_ledger(MOVR, 0), None);
		assert_eq!(LstMinting::token_unlock_ledger(MOVR, 1), None);
		assert_eq!(LstMinting::token_unlock_ledger(MOVR, 2), None);
		assert_eq!(LstMinting::token_unlock_next_id(MOVR), 4);
		assert_ok!(LstMinting::rebond(Some(CHARLIE).into(), MOVR, 19000000000000000000000));
		assert_ok!(LstMinting::rebond_by_unlock_id(Some(CHARLIE).into(), MOVR, 3));
		assert_eq!(LstMinting::unlocking_total(MOVR), 0);
	});
}

#[test]
fn hook() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		assert_eq!(LstMinting::min_time_unit(KSM), TimeUnit::Era(0));
		assert_ok!(LstMinting::update_ongoing_time_unit(KSM, TimeUnit::Era(3)));
		assert_eq!(LstMinting::ongoing_time_unit(KSM), Some(TimeUnit::Era(3)));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			KSM,
			TimeUnit::Era(1)
		));
		assert_ok!(LstMinting::set_hook_iteration_limit(RuntimeOrigin::signed(ALICE), 1));
		assert_eq!(LstMinting::unlock_duration(KSM), Some(TimeUnit::Era(1)));
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		assert_eq!(LstMinting::min_time_unit(KSM), TimeUnit::Era(4));
		assert_ok!(LstMinting::increase_token_pool(KSM, 1000));
		assert_ok!(LstMinting::mint(Some(BOB).into(), KSM, 200, BoundedVec::default(), None));
		assert_ok!(LstMinting::mint(Some(BOB).into(), KSM, 100, BoundedVec::default(), None));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 200));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 100));
		assert_eq!(LstMinting::unlocking_total(KSM), 300); // 200 + 100
		assert_noop!(
			LstMinting::rebond(Some(BOB).into(), KSM, 100),
			Error::<Runtime>::InvalidRebondToken
		);
		assert_ok!(LstMinting::add_support_rebond_token(RuntimeOrigin::signed(ALICE), KSM));
		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 300);
		LstMinting::on_initialize(100);
		assert_eq!(LstMinting::min_time_unit(KSM), TimeUnit::Era(4));
		LstMinting::on_initialize(100);
		assert_eq!(LstMinting::token_unlock_ledger(KSM, 0), None);
		assert_eq!(LstMinting::token_unlock_ledger(KSM, 1), None);
		assert_eq!(LstMinting::time_unit_unlock_ledger(TimeUnit::Era(4), KSM), None);
		assert_eq!(LstMinting::time_unit_unlock_ledger(TimeUnit::Era(5), KSM), None);
		assert_eq!(LstMinting::user_unlock_ledger(BOB, KSM), None);
		assert_eq!(LstMinting::token_pool(KSM), 1000);
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 0);
		assert_ok!(LstMinting::update_ongoing_time_unit(KSM, TimeUnit::Era(5)));
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(0);
		LstMinting::on_initialize(1);
		assert_eq!(LstMinting::min_time_unit(KSM), TimeUnit::Era(6));
		assert_eq!(LstMinting::unlocking_total(KSM), 0);
		assert_ok!(LstMinting::mint(Some(BOB).into(), KSM, 100, BoundedVec::default(), None));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 200));
		LstMinting::on_initialize(0);
		assert_eq!(
			LstMinting::token_unlock_ledger(KSM, 2),
			Some((BOB, 100, TimeUnit::Era(6), RedeemType::Native))
		);
		let mut ledger_list_origin = BoundedVec::default();
		assert_ok!(ledger_list_origin.try_push(2));
		let mut ledger_list_origin2 = BoundedVec::default();
		assert_ok!(ledger_list_origin2.try_push(2));
		assert_eq!(
			LstMinting::time_unit_unlock_ledger(TimeUnit::Era(6), KSM),
			Some((100, ledger_list_origin.clone(), KSM))
		);
		assert_eq!(
			LstMinting::user_unlock_ledger(BOB, KSM),
			Some((100, ledger_list_origin2.clone()))
		);
	});
}

#[test]
fn rebond_by_unlock_id() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			KSM,
			TimeUnit::Era(0)
		));
		assert_ok!(LstMinting::increase_token_pool(KSM, 1000));
		assert_ok!(LstMinting::update_ongoing_time_unit(KSM, TimeUnit::Era(1)));
		let mut ledger_list_origin = BoundedVec::default();
		assert_ok!(ledger_list_origin.try_push(1));
		let mut ledger_list_origin2 = BoundedVec::default();
		assert_ok!(ledger_list_origin2.try_push(1));
		assert_ok!(LstMinting::mint(Some(BOB).into(), KSM, 200, BoundedVec::default(), None));
		assert_ok!(LstMinting::mint(Some(BOB).into(), KSM, 100, BoundedVec::default(), None));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 200));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 100));
		assert_eq!(LstMinting::token_pool(KSM), 1000);
		assert_noop!(
			LstMinting::rebond_by_unlock_id(Some(BOB).into(), KSM, 0),
			Error::<Runtime>::InvalidRebondToken
		);
		assert_ok!(LstMinting::add_support_rebond_token(RuntimeOrigin::signed(ALICE), KSM));
		assert_noop!(
			LstMinting::rebond_by_unlock_id(Some(ALICE).into(), KSM, 0),
			Error::<Runtime>::CanNotRebond
		);
		assert_ok!(LstMinting::rebond_by_unlock_id(Some(BOB).into(), KSM, 0));
		assert_eq!(
			LstMinting::time_unit_unlock_ledger(TimeUnit::Era(1), KSM),
			Some((100, ledger_list_origin.clone(), KSM))
		);
		assert_eq!(
			LstMinting::user_unlock_ledger(BOB, KSM),
			Some((100, ledger_list_origin2.clone()))
		);
		assert_eq!(LstMinting::token_unlock_ledger(KSM, 0), None);
		assert_eq!(
			LstMinting::token_unlock_ledger(KSM, 1),
			Some((BOB, 100, TimeUnit::Era(1), RedeemType::Native))
		);
		assert_eq!(LstMinting::token_pool(KSM), 1200);
		assert_eq!(LstMinting::unlocking_total(KSM), 100); // 200 + 100 - 200
		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 300);
	});
}

#[test]
fn fast_redeem_for_fil() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		env_logger::try_init().unwrap_or(());
		assert_ok!(LstMinting::set_min_time_unit(
			RuntimeOrigin::signed(ALICE),
			FIL,
			TimeUnit::Kblock(1)
		));
		assert_eq!(LstMinting::min_time_unit(FIL), TimeUnit::Kblock(1));
		assert_ok!(LstMinting::update_ongoing_time_unit(FIL, TimeUnit::Kblock(3)));
		assert_eq!(LstMinting::ongoing_time_unit(FIL), Some(TimeUnit::Kblock(3)));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			FIL,
			TimeUnit::Kblock(1)
		));
		assert_ok!(LstMinting::set_hook_iteration_limit(RuntimeOrigin::signed(ALICE), 1));
		assert_eq!(LstMinting::unlock_duration(FIL), Some(TimeUnit::Kblock(1)));
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(100);
		assert_eq!(LstMinting::min_time_unit(FIL), TimeUnit::Kblock(4));
		assert_ok!(LstMinting::increase_token_pool(FIL, 1000));
		assert_ok!(LstMinting::mint(Some(BOB).into(), FIL, 200, BoundedVec::default(), None));
		assert_ok!(LstMinting::mint(Some(BOB).into(), FIL, 100, BoundedVec::default(), None));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VFIL, 200));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VFIL, 100));
		assert_eq!(LstMinting::unlocking_total(FIL), 300); // 200 + 100
		assert_noop!(
			LstMinting::rebond(Some(BOB).into(), FIL, 100),
			Error::<Runtime>::InvalidRebondToken
		);
		assert_ok!(LstMinting::add_support_rebond_token(RuntimeOrigin::signed(ALICE), FIL));
		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(FIL, &entrance_account), 300);
		LstMinting::on_initialize(100);
		assert_eq!(LstMinting::min_time_unit(FIL), TimeUnit::Kblock(4));
		LstMinting::on_initialize(100);
		assert_eq!(LstMinting::token_unlock_ledger(FIL, 0), None);
		assert_eq!(LstMinting::token_unlock_ledger(FIL, 1), None);
		assert_eq!(LstMinting::time_unit_unlock_ledger(TimeUnit::Kblock(4), FIL), None);
		assert_eq!(LstMinting::time_unit_unlock_ledger(TimeUnit::Kblock(5), FIL), None);
		assert_eq!(LstMinting::user_unlock_ledger(BOB, FIL), None);
		assert_eq!(LstMinting::token_pool(FIL), 1000);
		assert_eq!(Tokens::free_balance(FIL, &entrance_account), 0);
		assert_ok!(LstMinting::update_ongoing_time_unit(FIL, TimeUnit::Kblock(5)));
		LstMinting::on_initialize(100);
		LstMinting::on_initialize(0);
		LstMinting::on_initialize(1);
		assert_eq!(LstMinting::min_time_unit(FIL), TimeUnit::Kblock(6));
		assert_eq!(LstMinting::unlocking_total(FIL), 0);
		assert_ok!(LstMinting::mint(Some(BOB).into(), FIL, 100, BoundedVec::default(), None));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VFIL, 200));
		LstMinting::on_initialize(0);
		assert_eq!(
			LstMinting::token_unlock_ledger(FIL, 2),
			Some((BOB, 100, TimeUnit::Kblock(6), RedeemType::Native))
		);
		let mut ledger_list_origin = BoundedVec::default();
		assert_ok!(ledger_list_origin.try_push(2));
		let mut ledger_list_origin2 = BoundedVec::default();
		assert_ok!(ledger_list_origin2.try_push(2));
		assert_eq!(
			LstMinting::time_unit_unlock_ledger(TimeUnit::Kblock(6), FIL),
			Some((100, ledger_list_origin.clone(), FIL))
		);
		assert_eq!(
			LstMinting::user_unlock_ledger(BOB, FIL),
			Some((100, ledger_list_origin2.clone()))
		);
	});
}

#[test]
fn recreate_currency_ongoing_time_unit_should_work() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		env_logger::try_init().unwrap_or(());

		// set KSM ongoing time unit to be Era(1)
		OngoingTimeUnit::<Runtime>::insert(KSM, TimeUnit::Era(1));
		assert_eq!(LstMinting::ongoing_time_unit(KSM), Some(TimeUnit::Era(1)));

		// recreate_currency_ongoing_time_unit the ongoing time unit of KSM to be Round(2)
		assert_ok!(LstMinting::recreate_currency_ongoing_time_unit(
			RuntimeOrigin::signed(ALICE),
			KSM,
			TimeUnit::Round(2)
		));
		assert_eq!(LstMinting::ongoing_time_unit(KSM), Some(TimeUnit::Round(2)));
	})
}

#[test]
fn mint_with_lock_should_work() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		env_logger::try_init().unwrap_or(());

		pub const FEE: Permill = Permill::from_percent(5);
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));

		// mint exceeds bob's KSM balance
		assert_noop!(
			LstMinting::mint_with_lock(
				Some(BOB).into(),
				KSM,
				10000000000000,
				BoundedVec::default(),
				None
			),
			Error::<Runtime>::NotEnoughBalance
		);

		// Minimum Mint not set
		assert_noop!(
			LstMinting::mint_with_lock(Some(BOB).into(), KSM, 100, BoundedVec::default(), None),
			Error::<Runtime>::NotSupportTokenType
		);

		// Set minimum mint
		assert_ok!(LstMinting::set_minimum_mint(RuntimeOrigin::signed(ALICE), KSM, 100));

		// Lst coefficient not set
		assert_noop!(
			LstMinting::mint_with_lock(Some(BOB).into(), KSM, 100, BoundedVec::default(), None),
			Error::<Runtime>::IncentiveCoefNotFound
		);

		// set Lst coefficient
		assert_ok!(LstMinting::set_incentive_coef(RuntimeOrigin::signed(ALICE), VKSM, Some(1)));

		// pool not enough vKSM balance
		assert_noop!(
			LstMinting::mint_with_lock(Some(BOB).into(), KSM, 100, BoundedVec::default(), None),
			Error::<Runtime>::NotEnoughBalance
		);

		// set incentive pool balance
		assert_ok!(Tokens::deposit(
			VKSM,
			&LstMinting::incentive_pool_account(),
			100000000000000000000
		));

		// incentive lock blocks not set
		assert_noop!(
			LstMinting::mint_with_lock(Some(BOB).into(), KSM, 100, BoundedVec::default(), None),
			Error::<Runtime>::IncentiveLockBlocksNotSet
		);

		// set incentive lock blocks
		assert_ok!(LstMinting::set_lst_incentive_lock_blocks(
			RuntimeOrigin::signed(ALICE),
			VKSM,
			Some(100)
		));

		let bob_old_balance = Tokens::free_balance(VKSM, &BOB);
		// mint with lock
		assert_ok!(LstMinting::mint_with_lock(
			Some(BOB).into(),
			KSM,
			100000000000,
			BoundedVec::default(),
			None
		));

		// check the vksm balance of bob. Should be minted_amount + incentive amount + original
		// balance
		assert_eq!(Tokens::free_balance(VKSM, &BOB), 95000000000 + 9499999990 + bob_old_balance);

		// check the pool balance, should have been transferred 9499999990 to Bob account
		assert_eq!(
			Tokens::free_balance(VKSM, &LstMinting::incentive_pool_account()),
			100000000000000000000 - 9499999990
		);

		// check ledger
		let lock_ledger = LstMinting::get_lst_lock_ledger(BOB, VKSM).unwrap();
		let list = BoundedVec::try_from(vec![(95000000000u128, 100u64)]).unwrap();
		let should_be_ledger = (95000000000u128, list);
		assert_eq!(lock_ledger, should_be_ledger);
	})
}

#[test]
fn unlock_incentive_minted_lst_should_work() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		env_logger::try_init().unwrap_or(());

		pub const FEE: Permill = Permill::from_percent(5);
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));
		// Set minimum mint
		assert_ok!(LstMinting::set_minimum_mint(RuntimeOrigin::signed(ALICE), KSM, 100));
		// set Lst coefficient
		assert_ok!(LstMinting::set_incentive_coef(RuntimeOrigin::signed(ALICE), VKSM, Some(1)));
		// set incentive pool balance
		assert_ok!(Tokens::deposit(
			VKSM,
			&LstMinting::incentive_pool_account(),
			100000000000000000000
		));
		// set incentive lock blocks
		assert_ok!(LstMinting::set_lst_incentive_lock_blocks(
			RuntimeOrigin::signed(ALICE),
			VKSM,
			Some(100)
		));
		// mint with lock
		assert_ok!(LstMinting::mint_with_lock(
			Some(BOB).into(),
			KSM,
			100000000000,
			BoundedVec::default(),
			None
		));

		run_to_block(101);

		// check ledger
		let lock_ledger = LstMinting::get_lst_lock_ledger(BOB, VKSM).unwrap();
		let list = BoundedVec::try_from(vec![(95000000000u128, 100u64)]).unwrap();
		let should_be_ledger = (95000000000u128, list);
		assert_eq!(lock_ledger, should_be_ledger);

		let bob_vksm_balance = Tokens::free_balance(VKSM, &BOB);
		// Bob's account cannot withdraw the locked vksm
		assert_eq!(
			<Runtime as crate::Config>::MultiCurrency::ensure_can_withdraw(
				VKSM,
				&BOB,
				bob_vksm_balance
			),
			Err(Module(ModuleError {
				index: 1,
				error: [2, 0, 0, 0,],
				message: Some("LiquidityRestrictions",),
			},),)
		);

		// unlock incentive minted Lst
		assert_ok!(LstMinting::unlock_incentive_minted_lst(RuntimeOrigin::signed(BOB), VKSM));

		// Bob's amount can withdraw the locked vksm now
		assert_ok!(<Runtime as crate::Config>::MultiCurrency::ensure_can_withdraw(
			VKSM,
			&BOB,
			bob_vksm_balance
		));

		// total amount should be remain the same
		let new_bob_vksm_balance = Tokens::free_balance(VKSM, &BOB);
		assert_eq!(new_bob_vksm_balance, bob_vksm_balance);

		// check ledger
		let lock_ledger = LstMinting::get_lst_lock_ledger(BOB, VKSM);
		assert_eq!(lock_ledger, None);
	})
}

#[test]
fn set_incentive_coef_should_work() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		env_logger::try_init().unwrap_or(());

		// get vksm coefficient should return None
		assert_eq!(LstMinting::get_lst_incentive_coef(VKSM), None);

		// set vksm coefficient
		assert_ok!(LstMinting::set_incentive_coef(RuntimeOrigin::signed(ALICE), VKSM, Some(1)));

		// get vksm coefficient should return Some(1)
		assert_eq!(LstMinting::get_lst_incentive_coef(VKSM), Some(1));

		// set vksm coefficient to None
		assert_ok!(LstMinting::set_incentive_coef(RuntimeOrigin::signed(ALICE), VKSM, None));

		// get vksm coefficient should return None
		assert_eq!(LstMinting::get_lst_incentive_coef(VKSM), None);
	})
}

#[test]
fn set_lst_incentive_lock_blocks_should_work() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		env_logger::try_init().unwrap_or(());

		// get vksm lock blocks should return None
		assert_eq!(LstMinting::get_mint_with_lock_blocks(VKSM), None);

		// set vksm lock blocks
		assert_ok!(LstMinting::set_lst_incentive_lock_blocks(
			RuntimeOrigin::signed(ALICE),
			VKSM,
			Some(100)
		));

		// get vksm lock blocks should return Some(100)
		assert_eq!(LstMinting::get_mint_with_lock_blocks(VKSM), Some(100));

		// set vksm lock blocks to None
		assert_ok!(LstMinting::set_lst_incentive_lock_blocks(
			RuntimeOrigin::signed(ALICE),
			VKSM,
			None
		));

		// get vksm lock blocks should return None
		assert_eq!(LstMinting::get_mint_with_lock_blocks(VKSM), None);
	})
}
