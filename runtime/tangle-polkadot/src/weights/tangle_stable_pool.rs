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
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Autogenerated weights for tangle_stable_pool
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-09-14, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! HOSTNAME: `tangle-jenkins`, CPU: `Intel(R) Xeon(R) CPU E5-26xx v4`
//! WASM-EXECUTION: Compiled, CHAIN: Some("tangle-kusama-local"), DB CACHE: 1024

// Executed Command:
// target/release/tangle
// benchmark
// pallet
// --chain=tangle-kusama-local
// --steps=50
// --repeat=20
// --pallet=tangle_stable_pool
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./runtime/tangle-kusama/src/weights/tangle_stable_pool.rs
// --template=./weight-template/runtime-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions for tangle_stable_pool.
pub struct TangleWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> tangle_stable_pool::WeightInfo for TangleWeight<T> {
	// Storage: StableAsset PoolCount (r:1 w:1)
	// Proof Skipped: StableAsset PoolCount (max_values: Some(1), max_size: None, mode: Measured)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:1)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	// Storage: System Account (r:1 w:1)
	// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	fn create_pool() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `663`
		//  Estimated: `4128`
		// Minimum execution time: 90_724 nanoseconds.
		Weight::from_parts(93_251_000, 4128)
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(4))
	}
	// Storage: StableAsset PoolCount (r:1 w:0)
	// Proof Skipped: StableAsset PoolCount (max_values: Some(1), max_size: None, mode: Measured)
	// Storage: StableAsset TokenRateCaches (r:3 w:2)
	// Proof Skipped: StableAsset TokenRateCaches (max_values: None, max_size: None, mode: Measured)
	fn edit_token_rate() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `258`
		//  Estimated: `8673`
		// Minimum execution time: 70_303 nanoseconds.
		Weight::from_parts(71_635_000, 8673)
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(2))
	}
	/// Storage: `StableAsset::TokenRateHardcap` (r:0 w:1)
	/// Proof: `StableAsset::TokenRateHardcap` (`max_values`: None, `max_size`: None, mode: `Measured`)
	fn config_Lst_auto_refresh() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 12_383_000 picoseconds.
		Weight::from_parts(12_724_000, 0)
			.saturating_add(Weight::from_parts(0, 0))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: `StableAsset::TokenRateHardcap` (r:0 w:1)
	/// Proof: `StableAsset::TokenRateHardcap` (`max_values`: None, `max_size`: None, mode: `Measured`)
	fn remove_Lst_auto_refresh() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 12_453_000 picoseconds.
		Weight::from_parts(12_564_000, 0)
			.saturating_add(Weight::from_parts(0, 0))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	// Storage: StableAsset TokenRateCaches (r:2 w:0)
	// Proof Skipped: StableAsset TokenRateCaches (max_values: None, max_size: None, mode: Measured)
	// Storage: System Account (r:2 w:2)
	// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	// Storage: Tokens Accounts (r:3 w:3)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:2 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Proof: Tokens TotalIssuance (max_values: None, max_size: Some(38), added: 2513, mode: MaxEncodedLen)
	fn add_liquidity() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `2557`
		//  Estimated: `8769`
		// Minimum execution time: 427_183 nanoseconds.
		Weight::from_parts(438_909_000, 8769)
			.saturating_add(T::DbWeight::get().reads(11))
			.saturating_add(T::DbWeight::get().writes(7))
	}
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	// Storage: System Account (r:2 w:2)
	// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	// Storage: StableAsset TokenRateCaches (r:1 w:0)
	// Proof Skipped: StableAsset TokenRateCaches (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:1 w:1)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Proof: Tokens TotalIssuance (max_values: None, max_size: Some(38), added: 2513, mode: MaxEncodedLen)
	fn swap() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `2239`
		//  Estimated: `6196`
		// Minimum execution time: 375_244 nanoseconds.
		Weight::from_parts(385_475_000, 6196)
			.saturating_add(T::DbWeight::get().reads(7))
			.saturating_add(T::DbWeight::get().writes(5))
	}
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	// Storage: System Account (r:2 w:2)
	// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	// Storage: StableAsset TokenRateCaches (r:1 w:0)
	// Proof Skipped: StableAsset TokenRateCaches (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:1 w:1)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Proof: Tokens TotalIssuance (max_values: None, max_size: Some(38), added: 2513, mode: MaxEncodedLen)
	fn redeem_proportion() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `2239`
		//  Estimated: `6196`
		// Minimum execution time: 359_499 nanoseconds.
		Weight::from_parts(370_566_000, 6196)
			.saturating_add(T::DbWeight::get().reads(7))
			.saturating_add(T::DbWeight::get().writes(5))
	}
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	// Storage: System Account (r:2 w:2)
	// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	// Storage: StableAsset TokenRateCaches (r:1 w:0)
	// Proof Skipped: StableAsset TokenRateCaches (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:1 w:1)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Proof: Tokens TotalIssuance (max_values: None, max_size: Some(38), added: 2513, mode: MaxEncodedLen)
	fn redeem_single() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `2239`
		//  Estimated: `6196`
		// Minimum execution time: 304_691 nanoseconds.
		Weight::from_parts(312_518_000, 6196)
			.saturating_add(T::DbWeight::get().reads(7))
			.saturating_add(T::DbWeight::get().writes(5))
	}
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	// Storage: System Account (r:2 w:2)
	// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	// Storage: StableAsset TokenRateCaches (r:1 w:0)
	// Proof Skipped: StableAsset TokenRateCaches (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:1 w:1)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Proof: Tokens TotalIssuance (max_values: None, max_size: Some(38), added: 2513, mode: MaxEncodedLen)
	fn redeem_multi() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `2239`
		//  Estimated: `6196`
		// Minimum execution time: 363_000 nanoseconds.
		Weight::from_parts(367_057_000, 6196)
			.saturating_add(T::DbWeight::get().reads(7))
			.saturating_add(T::DbWeight::get().writes(5))
	}
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	fn modify_a() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `446`
		//  Estimated: `3911`
		// Minimum execution time: 45_142 nanoseconds.
		Weight::from_parts(46_445_000, 3911)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	fn modify_fees() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `446`
		//  Estimated: `3911`
		// Minimum execution time: 42_836 nanoseconds.
		Weight::from_parts(44_114_000, 3911)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: StableAsset Pools (r:1 w:1)
	// Proof Skipped: StableAsset Pools (max_values: None, max_size: None, mode: Measured)
	fn modify_recipients() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `446`
		//  Estimated: `3911`
		// Minimum execution time: 42_455 nanoseconds.
		Weight::from_parts(43_753_000, 3911)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
}
