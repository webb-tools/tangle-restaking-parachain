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

#![warn(unused_extern_crates)]

pub mod chain_spec;
#[cfg(feature = "with-tangle-kusama-runtime")]
pub mod collator_kusama;
#[cfg(feature = "with-tangle-polkadot-runtime")]
pub mod collator_polkadot;
pub use tangle_rpc as rpc;

/// Can be called for a `Configuration` to check if it is a configuration for the `tangle` network.
pub trait IdentifyVariant {
	/// Returns if this is a configuration for the `tangle-Kusama` network.
	fn is_tangle_kusama(&self) -> bool;

	/// Returns if this is a configuration for the `tangle-Polkadot` network.
	fn is_tangle_polkadot(&self) -> bool;

	/// Returns if this is a configuration for the `Dev` network.
	fn is_dev(&self) -> bool;
}

impl IdentifyVariant for Box<dyn sc_service::ChainSpec> {
	fn is_tangle_kusama(&self) -> bool {
		self.id().starts_with("tangle") && !self.id().starts_with("tangle_polkadot")
	}

	fn is_tangle_polkadot(&self) -> bool {
		self.id().starts_with("tangle_polkadot")
	}

	fn is_dev(&self) -> bool {
		self.id().starts_with("dev")
	}
}

pub const tangle_KUSAMA_RUNTIME_NOT_AVAILABLE: &str =
	"tangle runtime is not available. Please compile the node with `--features with-tangle-kusama-runtime` to enable it.";
pub const tangle_POLKADOT_RUNTIME_NOT_AVAILABLE: &str =
	"tangle-polkadot runtime is not available. Please compile the node with `--features with-tangle-polkadot-runtime` to enable it.";
pub const UNKNOWN_RUNTIME: &str = "Unknown runtime";
