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

mod mock_message_queue;
pub mod relaychain;
pub mod tangle_runtime;

use sp_io::TestExternalities;
use sp_runtime::{AccountId32, BuildStorage};
use tangle_primitives::CurrencyId;
use xcm_simulator::{decl_test_network, decl_test_parachain, decl_test_relay_chain, TestExt};

pub const ALICE: AccountId32 = AccountId32::new([0u8; 32]);
pub const BOB: AccountId32 = AccountId32::new([1u8; 32]);
pub type Amount = i128;

decl_test_parachain! {
	pub struct Tangle {
		Runtime = tangle_runtime::Runtime,
		XcmpMessageHandler = tangle_runtime::MessageQueue,
		DmpMessageHandler = tangle_runtime::MessageQueue,
		new_ext = para_ext(2030),
	}
}

decl_test_relay_chain! {
	pub struct Relay {
		Runtime = relaychain::Runtime,
		RuntimeCall = relaychain::RuntimeCall,
		RuntimeEvent = relaychain::RuntimeEvent,
		XcmConfig = relaychain::XcmConfig,
		MessageQueue = relaychain::MessageQueue,
		System = relaychain::System,
		new_ext = relay_ext(),
	}
}

decl_test_network! {
	pub struct TestNet {
		relay_chain = Relay,
		parachains = vec![
			(2030, Tangle),
		],
	}
}

pub type TangleTokens = orml_tokens::Pallet<tangle_runtime::Runtime>;
pub type TangleXTokens = orml_xtokens::Pallet<tangle_runtime::Runtime>;
pub type TangleSlp = tangle_slp::Pallet<tangle_runtime::Runtime>;

pub type RelayBalances = pallet_balances::Pallet<relaychain::Runtime>;
pub type RelaySystem = frame_system::Pallet<relaychain::Runtime>;
pub type RelayXcmPallet = pallet_xcm::Pallet<relaychain::Runtime>;

pub fn para_ext(para_id: u32) -> TestExternalities {
	use tangle_runtime::{MessageQueue, Runtime, System};

	let mut t = frame_system::GenesisConfig::<Runtime>::default().build_storage().unwrap();

	orml_tokens::GenesisConfig::<Runtime> {
		balances: vec![(ALICE, CurrencyId::Token2(0), 100_000_000_000)],
	}
	.assimilate_storage(&mut t)
	.unwrap();

	let mut ext = TestExternalities::new(t);
	ext.execute_with(|| {
		System::set_block_number(1);
		MessageQueue::set_para_id(para_id.into());
	});
	ext
}

pub fn relay_ext() -> TestExternalities {
	use relaychain::{Runtime, System};

	let mut t = frame_system::GenesisConfig::<Runtime>::default().build_storage().unwrap();

	pallet_balances::GenesisConfig::<Runtime> { balances: vec![(ALICE, 100_000_000_000)] }
		.assimilate_storage(&mut t)
		.unwrap();

	let mut ext = TestExternalities::new(t);
	ext.execute_with(|| System::set_block_number(1));
	ext
}
