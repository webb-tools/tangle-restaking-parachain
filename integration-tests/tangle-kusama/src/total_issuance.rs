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

use frame_support::{assert_ok, traits::Currency};
use integration_tests_common::{
	TangleKusama, TangleKusamaAlice, TangleKusamaBob, TangleKusamaTreasury,
};
use tangle_kusama_runtime::{
	constants::currency::{BNCS, MILLIBNC},
	Balances, RuntimeOrigin,
};
use xcm_emulator::TestExt;

#[test]
fn remove_dust_account_should_work() {
	TangleKusama::execute_with(|| {
		assert_eq!(Balances::minimum_balance(), 10 * MILLIBNC);

		assert_eq!(Balances::total_issuance(), 8_000_0000 * BNCS);

		assert_ok!(Balances::transfer_allow_death(
			RuntimeOrigin::signed(TangleKusamaAlice::get()),
			TangleKusamaBob::get().into(),
			Balances::free_balance(&TangleKusamaAlice::get()) - MILLIBNC
		));

		// As expected dust balance is removed.
		assert_eq!(Balances::free_balance(&TangleKusamaAlice::get()), 0);
		assert_eq!(
			Balances::free_balance(&TangleKusamaTreasury::get()),
			1_000_0000 * BNCS + MILLIBNC
		);

		assert_eq!(Balances::total_issuance(), 8_000_0000 * BNCS);
	});
}
