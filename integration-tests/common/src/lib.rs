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

pub mod constants;
pub mod impls;
pub mod xcm_helpers;

pub use constants::{
	accounts::{ALICE, BOB},
	kusama, polkadot, tangle_kusama,
};

// Substrate
use frame_support::traits::OnInitialize;

// Cumulus
use crate::constants::{
	asset_hub_kusama, asset_hub_polkadot, bridge_hub_kusama, bridge_hub_polkadot,
};
use polkadot_primitives::runtime_api::runtime_decl_for_parachain_host::ParachainHostV7;
use sp_runtime::traits::AccountIdConversion;
use xcm_emulator::{
	decl_test_networks, decl_test_parachains, decl_test_relay_chains, DefaultMessageProcessor,
};

decl_test_relay_chains! {
	#[api_version(5)]
	pub struct Polkadot {
		genesis = polkadot::genesis(),
		on_init = (),
		runtime = polkadot_runtime,
		core = {
			MessageProcessor: DefaultMessageProcessor<Polkadot>,
			SovereignAccountOf: polkadot_runtime::xcm_config::SovereignAccountOf,
		},
		pallets = {
			System: polkadot_runtime::System,
			XcmPallet: polkadot_runtime::XcmPallet,
			Balances: polkadot_runtime::Balances,
			Hrmp: polkadot_runtime::Hrmp,
		}
	},
	#[api_version(5)]
	pub struct Kusama {
		genesis = kusama::genesis(),
		on_init = (),
		runtime = kusama_runtime,
		core = {
			MessageProcessor: DefaultMessageProcessor<Kusama>,
			SovereignAccountOf: kusama_runtime::xcm_config::SovereignAccountOf,
		},
		pallets = {
			System: kusama_runtime::System,
			XcmPallet: kusama_runtime::XcmPallet,
			Balances: kusama_runtime::Balances,
			Hrmp: kusama_runtime::Hrmp,
			Referenda: kusama_runtime::Referenda,
		}
	}
}

decl_test_parachains! {
	// Polkadot Parachains
	// pub struct tanglePolkadot {
	// 	genesis = tangle_polkadot::genesis(),
	// 	on_init = {
	// 		tangle_polkadot_runtime::AuraExt::on_initialize(1);
	// 	},
	// 	runtime = tangle_polkadot_runtime,
	// 	core = {
	// 		XcmpMessageHandler: tangle_polkadot_runtime::XcmpQueue,
	// 		DmpMessageHandler: tangle_polkadot_runtime::DmpQueue,
	// 		LocationToAccountId: tangle_polkadot_runtime::xcm_config::LocationToAccountId,
	// 		ParachainInfo: tangle_polkadot_runtime::ParachainInfo,
	// 	},
	// 	pallets = {
	// 		System: tangle_polkadot_runtime::System,
	// 		PolkadotXcm: tangle_polkadot_runtime::PolkadotXcm,
	// 		Tokens: tangle_polkadot_runtime::Tokens,
	// 		XTokens: tangle_polkadot_runtime::XTokens,
	// 		Balances: tangle_polkadot_runtime::Balances,
	// 	}
	// },
	pub struct AssetHubPolkadot {
		genesis = asset_hub_polkadot::genesis(),
		on_init = {
			asset_hub_polkadot_runtime::AuraExt::on_initialize(1);
		},
		runtime = asset_hub_polkadot_runtime,
		core = {
			XcmpMessageHandler: asset_hub_polkadot_runtime::XcmpQueue,
			DmpMessageHandler: asset_hub_polkadot_runtime::DmpQueue,
			LocationToAccountId: asset_hub_polkadot_runtime::xcm_config::LocationToAccountId,
			ParachainInfo: asset_hub_polkadot_runtime::ParachainInfo,
		},
		pallets = {
			PolkadotXcm: asset_hub_polkadot_runtime::PolkadotXcm,
			Assets: asset_hub_polkadot_runtime::Assets,
			Balances: asset_hub_polkadot_runtime::Balances,
		}
	},
	pub struct BridgeHubPolkadot {
		genesis = bridge_hub_polkadot::genesis(),
		on_init = {
			bridge_hub_polkadot_runtime::AuraExt::on_initialize(1);
		},
		runtime = bridge_hub_polkadot_runtime,
		core = {
			XcmpMessageHandler: bridge_hub_polkadot_runtime::XcmpQueue,
			DmpMessageHandler: bridge_hub_polkadot_runtime::DmpQueue,
			LocationToAccountId: bridge_hub_polkadot_runtime::xcm_config::LocationToAccountId,
			ParachainInfo: bridge_hub_polkadot_runtime::ParachainInfo,
		},
		pallets = {
			PolkadotXcm: bridge_hub_polkadot_runtime::PolkadotXcm,
		}
	},
	// Kusama Parachains
	pub struct TangleKusama {
		genesis = tangle_kusama::genesis(),
		on_init = {
			tangle_kusama_runtime::AuraExt::on_initialize(1);
		},
		runtime = tangle_kusama_runtime,
		core = {
			XcmpMessageHandler: tangle_kusama_runtime::XcmpQueue,
			DmpMessageHandler: tangle_kusama_runtime::DmpQueue,
			LocationToAccountId: tangle_kusama_runtime::xcm_config::LocationToAccountId,
			ParachainInfo: tangle_kusama_runtime::ParachainInfo,
		},
		pallets = {
			System: tangle_kusama_runtime::System,
			PolkadotXcm: tangle_kusama_runtime::PolkadotXcm,
			Tokens: tangle_kusama_runtime::Tokens,
			XTokens: tangle_kusama_runtime::XTokens,
			Balances: tangle_kusama_runtime::Balances,
		}
	},
	pub struct AssetHubKusama {
		genesis = asset_hub_kusama::genesis(),
		on_init = {
			asset_hub_kusama_runtime::AuraExt::on_initialize(1);
		},
		runtime = asset_hub_kusama_runtime,
		core = {
			XcmpMessageHandler: asset_hub_kusama_runtime::XcmpQueue,
			DmpMessageHandler: asset_hub_kusama_runtime::DmpQueue,
			LocationToAccountId: asset_hub_kusama_runtime::xcm_config::LocationToAccountId,
			ParachainInfo: asset_hub_kusama_runtime::ParachainInfo,
		},
		pallets = {
			PolkadotXcm: asset_hub_kusama_runtime::PolkadotXcm,
			Assets: asset_hub_kusama_runtime::Assets,
			ForeignAssets: asset_hub_kusama_runtime::ForeignAssets,
			PoolAssets: asset_hub_kusama_runtime::PoolAssets,
			AssetConversion: asset_hub_kusama_runtime::AssetConversion,
			Balances: asset_hub_kusama_runtime::Balances,
		}
	},
	pub struct BridgeHubKusama {
		genesis = bridge_hub_kusama::genesis(),
		on_init = {
			bridge_hub_kusama_runtime::AuraExt::on_initialize(1);
		},
		runtime = bridge_hub_kusama_runtime,
		core = {
			XcmpMessageHandler: bridge_hub_kusama_runtime::XcmpQueue,
			DmpMessageHandler: bridge_hub_kusama_runtime::DmpQueue,
			LocationToAccountId: bridge_hub_kusama_runtime::xcm_config::LocationToAccountId,
			ParachainInfo: bridge_hub_kusama_runtime::ParachainInfo,
		},
		pallets = {
			PolkadotXcm: bridge_hub_kusama_runtime::PolkadotXcm,
		}
	},
}

decl_test_networks! {
	pub struct PolkadotMockNet {
		relay_chain = Polkadot,
		parachains = vec![
			//tanglePolkadot,
			AssetHubPolkadot,
			BridgeHubPolkadot,
		],
		// TODO: uncomment when https://github.com/paritytech/cumulus/pull/2528 is merged
		// bridge = PolkadotKusamaMockBridge
		bridge = ()
	},
	pub struct KusamaMockNet {
		relay_chain = Kusama,
		parachains = vec![
			TangleKusama,
			AssetHubKusama,
			BridgeHubKusama,
		],
		// TODO: uncomment when https://github.com/paritytech/cumulus/pull/2528 is merged
		// bridge = KusamaPolkadotMockBridge
		bridge = ()
	},
}

// Polkadot implementation
impl_accounts_helpers_for_relay_chain!(Polkadot);
impl_assert_events_helpers_for_relay_chain!(Polkadot);
impl_hrmp_channels_helpers_for_relay_chain!(Polkadot);

// Kusama implementation
impl_accounts_helpers_for_relay_chain!(Kusama);
impl_assert_events_helpers_for_relay_chain!(Kusama);
impl_hrmp_channels_helpers_for_relay_chain!(Kusama);

// tanglePolkadot implementation
// impl_accounts_helpers_for_parachain!(tanglePolkadot);
// impl_assert_events_helpers_for_parachain!(tanglePolkadot);

// TangleKusama implementation
impl_accounts_helpers_for_parachain!(TangleKusama);
impl_assert_events_helpers_for_parachain!(TangleKusama);

// AssetHubPolkadot implementation
impl_accounts_helpers_for_parachain!(AssetHubPolkadot);
impl_assets_helpers_for_parachain!(AssetHubPolkadot, Polkadot);
impl_assert_events_helpers_for_parachain!(AssetHubPolkadot);

// AssetHubKusama implementation
impl_accounts_helpers_for_parachain!(AssetHubKusama);
impl_assets_helpers_for_parachain!(AssetHubKusama, Kusama);
impl_assert_events_helpers_for_parachain!(AssetHubKusama);

impl_test_accounts_helpers_for_chain! {
	Polkadot, Kusama, TangleKusama
}
