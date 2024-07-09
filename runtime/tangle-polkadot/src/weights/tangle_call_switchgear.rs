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
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Autogenerated weights for tangle_call_switchgear
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-09-14, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! HOSTNAME: `bifrost-jenkins`, CPU: `Intel(R) Xeon(R) CPU E5-26xx v4`
//! WASM-EXECUTION: Compiled, CHAIN: Some("bifrost-kusama-local"), DB CACHE: 1024

// Executed Command:
// target/release/bifrost
// benchmark
// pallet
// --chain=bifrost-kusama-local
// --steps=50
// --repeat=20
// --pallet=tangle_call_switchgear
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./runtime/bifrost-kusama/src/weights/tangle_call_switchgear.rs
// --template=./weight-template/runtime-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions for tangle_call_switchgear.
pub struct TangleWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> tangle_call_switchgear::WeightInfo for TangleWeight<T> {
	// Storage: CallSwitchgear SwitchedOffTransactions (r:1 w:1)
	// Proof Skipped: CallSwitchgear SwitchedOffTransactions (max_values: None, max_size: None, mode: Measured)
	fn switchoff_transaction() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `4`
		//  Estimated: `3469`
		// Minimum execution time: 29_214 nanoseconds.
		Weight::from_parts(30_398_000, 3469)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: CallSwitchgear SwitchedOffTransactions (r:1 w:1)
	// Proof Skipped: CallSwitchgear SwitchedOffTransactions (max_values: None, max_size: None, mode: Measured)
	fn switchon_transaction() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `55`
		//  Estimated: `3520`
		// Minimum execution time: 31_720 nanoseconds.
		Weight::from_parts(32_717_000, 3520)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: CallSwitchgear DisabledTransfers (r:1 w:1)
	// Proof Skipped: CallSwitchgear DisabledTransfers (max_values: None, max_size: None, mode: Measured)
	fn disable_transfers() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `4`
		//  Estimated: `3469`
		// Minimum execution time: 26_079 nanoseconds.
		Weight::from_parts(26_977_000, 3469)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: CallSwitchgear DisabledTransfers (r:1 w:1)
	// Proof Skipped: CallSwitchgear DisabledTransfers (max_values: None, max_size: None, mode: Measured)
	fn enable_transfers() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `38`
		//  Estimated: `3503`
		// Minimum execution time: 27_719 nanoseconds.
		Weight::from_parts(28_319_000, 3503)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
}
