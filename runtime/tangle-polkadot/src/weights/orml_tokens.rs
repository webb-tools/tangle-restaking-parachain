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

//! Autogenerated weights for `orml_tokens`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2021-11-08, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! EXECUTION: Some(Wasm), WASM-EXECUTION: Compiled, CHAIN: Some("asgard-local"), DB CACHE: 128

// Executed Command:
// target/release/bifrost
// benchmark
// --chain=asgard-local
// --steps=50
// --repeat=20
// --pallet=orml-tokens
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --header=./HEADER-GPL3
// --output=./runtime/asgard/src/weights/orml_tokens.rs


#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::Weight};
use sp_std::marker::PhantomData;

/// Weight functions for orml_tokens.
pub struct WeightInfo<T>(PhantomData<T>);
impl<T: frame_system::Config> orml_tokens::WeightInfo for WeightInfo<T> {
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: EvmAccounts EvmAddresses (r:1 w:0)
	// Storage: System Account (r:1 w:1)
	fn transfer() -> Weight {
		// Minimum execution time: 43_684 nanoseconds.
		Weight::from_parts(44_569_000, 0)
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(3))
	}
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: EvmAccounts EvmAddresses (r:1 w:0)
	// Storage: System Account (r:1 w:1)
	fn transfer_all() -> Weight {
		// Minimum execution time: 45_979 nanoseconds.
		Weight::from_parts(47_580_000, 0)
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(3))
	}
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: System Account (r:1 w:1)
	fn transfer_keep_alive() -> Weight {
		// Minimum execution time: 33_081 nanoseconds.
		Weight::from_parts(33_673_000, 0)
			.saturating_add(T::DbWeight::get().reads(3))
			.saturating_add(T::DbWeight::get().writes(3))
	}
	// Storage: Tokens Accounts (r:2 w:2)
	// Storage: System Account (r:2 w:1)
	fn force_transfer() -> Weight {
		// Minimum execution time: 35_052 nanoseconds.
		Weight::from_parts(36_041_000, 0)
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(3))
	}
	// Storage: Tokens Accounts (r:1 w:1)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Storage: System Account (r:1 w:1)
	fn set_balance() -> Weight {
		// Minimum execution time: 26_951 nanoseconds.
		Weight::from_parts(27_606_000, 0)
			.saturating_add(T::DbWeight::get().reads(3))
			.saturating_add(T::DbWeight::get().writes(3))
	}
}
