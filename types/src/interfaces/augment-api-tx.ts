// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/submittable';

import type {
	ApiTypes,
	AugmentedSubmittable,
	SubmittableExtrinsic,
	SubmittableExtrinsicFunction,
} from '@polkadot/api-base/types';
import type { Data } from '@polkadot/types';
import type {
	Bytes,
	Compact,
	Null,
	Option,
	Struct,
	U8aFixed,
	Vec,
	bool,
	i128,
	u128,
	u16,
	u32,
	u64,
	u8,
} from '@polkadot/types-codec';
import type { AnyNumber, IMethod, ITuple } from '@polkadot/types-codec/types';
import type {
	AccountId32,
	Call,
	H160,
	H256,
	MultiAddress,
	Perbill,
	Percent,
	Permill,
} from '@polkadot/types/interfaces/runtime';
import {
	CumulusPrimitivesParachainInherentParachainInherentData,
	FrameSupportPreimagesBounded,
	FrameSupportScheduleDispatchTime,
	PalletConvictionVotingConviction,
	PalletConvictionVotingVoteAccountVote,
	PalletDemocracyConviction,
	PalletDemocracyMetadataOwner,
	PalletDemocracyVoteAccountVote,
	PalletElectionsPhragmenRenouncing,
	PalletIdentityBitFlags,
	PalletIdentityJudgement,
	PalletIdentitySimpleIdentityInfo,
	PalletMultisigTimepoint,
	SpWeightsWeightV2Weight,
	StagingXcmV3MultiLocation,
	TangleAssetRegistryAssetMetadata,
	TangleKusamaRuntimeOriginCaller,
	TangleKusamaRuntimeProxyType,
	TangleKusamaRuntimeSessionKeys,
	TangleLstVotingVoteAccountVote,
	TangleLstVotingVoteReferendumInfo,
	TanglePrimitivesCurrencyCurrencyId,
	TanglePrimitivesTimeUnit,
	TanglePrimitivesXcmOperationType,
	TangleSlpPrimitivesDelays,
	TangleSlpPrimitivesLedger,
	TangleSlpPrimitivesMinimumsMaximums,
	TangleSlpxOrderType,
	TangleSlpxSupportChain,
	TangleSlpxTargetChain,
	XcmV3Response,
	XcmV3WeightLimit,
	XcmVersionedMultiAsset,
	XcmVersionedMultiAssets,
	XcmVersionedMultiLocation,
	XcmVersionedXcm,
	ZenlinkProtocolPrimitivesAssetId,
	ZenlinkSwapRouterRoute,
} from '@polkadot/types/lookup';

export type __AugmentedSubmittable = AugmentedSubmittable<() => unknown>;
export type __SubmittableExtrinsic<ApiType extends ApiTypes> = SubmittableExtrinsic<ApiType>;
export type __SubmittableExtrinsicFunction<ApiType extends ApiTypes> =
	SubmittableExtrinsicFunction<ApiType>;

declare module '@polkadot/api-base/types/submittable' {
	interface AugmentedSubmittables<ApiType extends ApiTypes> {
		assetRegistry: {
			/**
			 * See [`Pallet::force_set_multilocation`].
			 **/
			forceSetMultilocation: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					weight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, XcmVersionedMultiLocation, SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::register_lst_metadata`].
			 **/
			registerLstMetadata: AugmentedSubmittable<
				(tokenId: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u8]
			>;
			/**
			 * See [`Pallet::register_multilocation`].
			 **/
			registerMultilocation: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					weight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, XcmVersionedMultiLocation, SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::register_native_asset`].
			 **/
			registerNativeAsset: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					metadata:
						| TangleAssetRegistryAssetMetadata
						| { name?: any; symbol?: any; decimals?: any; minimalBalance?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					XcmVersionedMultiLocation,
					TangleAssetRegistryAssetMetadata,
				]
			>;
			/**
			 * See [`Pallet::register_token_metadata`].
			 **/
			registerTokenMetadata: AugmentedSubmittable<
				(
					metadata:
						| TangleAssetRegistryAssetMetadata
						| { name?: any; symbol?: any; decimals?: any; minimalBalance?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TangleAssetRegistryAssetMetadata]
			>;
			/**
			 * See [`Pallet::register_vsbond_metadata`].
			 **/
			registerVsbondMetadata: AugmentedSubmittable<
				(
					tokenId: u8 | AnyNumber | Uint8Array,
					paraId: u32 | AnyNumber | Uint8Array,
					firstSlot: u32 | AnyNumber | Uint8Array,
					lastSlot: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u8, u32, u32, u32]
			>;
			/**
			 * See [`Pallet::register_vstoken_metadata`].
			 **/
			registerVstokenMetadata: AugmentedSubmittable<
				(tokenId: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u8]
			>;
			/**
			 * See [`Pallet::update_native_asset`].
			 **/
			updateNativeAsset: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					metadata:
						| TangleAssetRegistryAssetMetadata
						| { name?: any; symbol?: any; decimals?: any; minimalBalance?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					XcmVersionedMultiLocation,
					TangleAssetRegistryAssetMetadata,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		balances: {
			/**
			 * See [`Pallet::force_set_balance`].
			 **/
			forceSetBalance: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					newFree: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, Compact<u128>]
			>;
			/**
			 * See [`Pallet::force_transfer`].
			 **/
			forceTransfer: AugmentedSubmittable<
				(
					source:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, MultiAddress, Compact<u128>]
			>;
			/**
			 * See [`Pallet::force_unreserve`].
			 **/
			forceUnreserve: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, u128]
			>;
			/**
			 * See [`Pallet::transfer_all`].
			 **/
			transferAll: AugmentedSubmittable<
				(
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					keepAlive: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, bool]
			>;
			/**
			 * See [`Pallet::transfer_allow_death`].
			 **/
			transferAllowDeath: AugmentedSubmittable<
				(
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer_keep_alive`].
			 **/
			transferKeepAlive: AugmentedSubmittable<
				(
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, Compact<u128>]
			>;
			/**
			 * See [`Pallet::upgrade_accounts`].
			 **/
			upgradeAccounts: AugmentedSubmittable<
				(
					who: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		bounties: {
			/**
			 * See [`Pallet::accept_curator`].
			 **/
			acceptCurator: AugmentedSubmittable<
				(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::approve_bounty`].
			 **/
			approveBounty: AugmentedSubmittable<
				(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::award_bounty`].
			 **/
			awardBounty: AugmentedSubmittable<
				(
					bountyId: Compact<u32> | AnyNumber | Uint8Array,
					beneficiary:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, MultiAddress]
			>;
			/**
			 * See [`Pallet::claim_bounty`].
			 **/
			claimBounty: AugmentedSubmittable<
				(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::close_bounty`].
			 **/
			closeBounty: AugmentedSubmittable<
				(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::extend_bounty_expiry`].
			 **/
			extendBountyExpiry: AugmentedSubmittable<
				(
					bountyId: Compact<u32> | AnyNumber | Uint8Array,
					remark: Bytes | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, Bytes]
			>;
			/**
			 * See [`Pallet::propose_bounty`].
			 **/
			proposeBounty: AugmentedSubmittable<
				(
					value: Compact<u128> | AnyNumber | Uint8Array,
					description: Bytes | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>, Bytes]
			>;
			/**
			 * See [`Pallet::propose_curator`].
			 **/
			proposeCurator: AugmentedSubmittable<
				(
					bountyId: Compact<u32> | AnyNumber | Uint8Array,
					curator:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					fee: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, MultiAddress, Compact<u128>]
			>;
			/**
			 * See [`Pallet::unassign_curator`].
			 **/
			unassignCurator: AugmentedSubmittable<
				(bountyId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		convictionVoting: {
			/**
			 * See [`Pallet::delegate`].
			 **/
			delegate: AugmentedSubmittable<
				(
					clazz: u16 | AnyNumber | Uint8Array,
					to:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					conviction:
						| PalletConvictionVotingConviction
						| 'None'
						| 'Locked1x'
						| 'Locked2x'
						| 'Locked3x'
						| 'Locked4x'
						| 'Locked5x'
						| 'Locked6x'
						| number
						| Uint8Array,
					balance: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u16, MultiAddress, PalletConvictionVotingConviction, u128]
			>;
			/**
			 * See [`Pallet::remove_other_vote`].
			 **/
			removeOtherVote: AugmentedSubmittable<
				(
					target:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					clazz: u16 | AnyNumber | Uint8Array,
					index: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, u16, u32]
			>;
			/**
			 * See [`Pallet::remove_vote`].
			 **/
			removeVote: AugmentedSubmittable<
				(
					clazz: Option<u16> | null | Uint8Array | u16 | AnyNumber,
					index: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Option<u16>, u32]
			>;
			/**
			 * See [`Pallet::undelegate`].
			 **/
			undelegate: AugmentedSubmittable<
				(clazz: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u16]
			>;
			/**
			 * See [`Pallet::unlock`].
			 **/
			unlock: AugmentedSubmittable<
				(
					clazz: u16 | AnyNumber | Uint8Array,
					target:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u16, MultiAddress]
			>;
			/**
			 * See [`Pallet::vote`].
			 **/
			vote: AugmentedSubmittable<
				(
					pollIndex: Compact<u32> | AnyNumber | Uint8Array,
					vote:
						| PalletConvictionVotingVoteAccountVote
						| { Standard: any }
						| { Split: any }
						| { SplitAbstain: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, PalletConvictionVotingVoteAccountVote]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		council: {
			/**
			 * See [`Pallet::close`].
			 **/
			close: AugmentedSubmittable<
				(
					proposalHash: H256 | string | Uint8Array,
					index: Compact<u32> | AnyNumber | Uint8Array,
					proposalWeightBound:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
					lengthBound: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]
			>;
			/**
			 * See [`Pallet::disapprove_proposal`].
			 **/
			disapproveProposal: AugmentedSubmittable<
				(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::execute`].
			 **/
			execute: AugmentedSubmittable<
				(
					proposal: Call | IMethod | string | Uint8Array,
					lengthBound: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Call, Compact<u32>]
			>;
			/**
			 * See [`Pallet::propose`].
			 **/
			propose: AugmentedSubmittable<
				(
					threshold: Compact<u32> | AnyNumber | Uint8Array,
					proposal: Call | IMethod | string | Uint8Array,
					lengthBound: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, Call, Compact<u32>]
			>;
			/**
			 * See [`Pallet::set_members`].
			 **/
			setMembers: AugmentedSubmittable<
				(
					newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
					prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
					oldCount: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>, Option<AccountId32>, u32]
			>;
			/**
			 * See [`Pallet::vote`].
			 **/
			vote: AugmentedSubmittable<
				(
					proposal: H256 | string | Uint8Array,
					index: Compact<u32> | AnyNumber | Uint8Array,
					approve: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, Compact<u32>, bool]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		councilMembership: {
			/**
			 * See [`Pallet::add_member`].
			 **/
			addMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::change_key`].
			 **/
			changeKey: AugmentedSubmittable<
				(
					updated:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::clear_prime`].
			 **/
			clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::remove_member`].
			 **/
			removeMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::reset_members`].
			 **/
			resetMembers: AugmentedSubmittable<
				(
					members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>]
			>;
			/**
			 * See [`Pallet::set_prime`].
			 **/
			setPrime: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::swap_member`].
			 **/
			swapMember: AugmentedSubmittable<
				(
					remove:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					add:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, MultiAddress]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		cumulusXcm: {
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		currencies: {
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TanglePrimitivesCurrencyCurrencyId, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer_native_currency`].
			 **/
			transferNativeCurrency: AugmentedSubmittable<
				(
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, Compact<u128>]
			>;
			/**
			 * See [`Pallet::update_balance`].
			 **/
			updateBalance: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: i128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TanglePrimitivesCurrencyCurrencyId, i128]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		democracy: {
			/**
			 * See [`Pallet::blacklist`].
			 **/
			blacklist: AugmentedSubmittable<
				(
					proposalHash: H256 | string | Uint8Array,
					maybeRefIndex: Option<u32> | null | Uint8Array | u32 | AnyNumber,
				) => SubmittableExtrinsic<ApiType>,
				[H256, Option<u32>]
			>;
			/**
			 * See [`Pallet::cancel_proposal`].
			 **/
			cancelProposal: AugmentedSubmittable<
				(propIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::cancel_referendum`].
			 **/
			cancelReferendum: AugmentedSubmittable<
				(refIndex: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::clear_public_proposals`].
			 **/
			clearPublicProposals: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::delegate`].
			 **/
			delegate: AugmentedSubmittable<
				(
					to:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					conviction:
						| PalletDemocracyConviction
						| 'None'
						| 'Locked1x'
						| 'Locked2x'
						| 'Locked3x'
						| 'Locked4x'
						| 'Locked5x'
						| 'Locked6x'
						| number
						| Uint8Array,
					balance: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, PalletDemocracyConviction, u128]
			>;
			/**
			 * See [`Pallet::emergency_cancel`].
			 **/
			emergencyCancel: AugmentedSubmittable<
				(refIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::external_propose`].
			 **/
			externalPropose: AugmentedSubmittable<
				(
					proposal:
						| FrameSupportPreimagesBounded
						| { Legacy: any }
						| { Inline: any }
						| { Lookup: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[FrameSupportPreimagesBounded]
			>;
			/**
			 * See [`Pallet::external_propose_default`].
			 **/
			externalProposeDefault: AugmentedSubmittable<
				(
					proposal:
						| FrameSupportPreimagesBounded
						| { Legacy: any }
						| { Inline: any }
						| { Lookup: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[FrameSupportPreimagesBounded]
			>;
			/**
			 * See [`Pallet::external_propose_majority`].
			 **/
			externalProposeMajority: AugmentedSubmittable<
				(
					proposal:
						| FrameSupportPreimagesBounded
						| { Legacy: any }
						| { Inline: any }
						| { Lookup: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[FrameSupportPreimagesBounded]
			>;
			/**
			 * See [`Pallet::fast_track`].
			 **/
			fastTrack: AugmentedSubmittable<
				(
					proposalHash: H256 | string | Uint8Array,
					votingPeriod: u32 | AnyNumber | Uint8Array,
					delay: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, u32, u32]
			>;
			/**
			 * See [`Pallet::propose`].
			 **/
			propose: AugmentedSubmittable<
				(
					proposal:
						| FrameSupportPreimagesBounded
						| { Legacy: any }
						| { Inline: any }
						| { Lookup: any }
						| string
						| Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[FrameSupportPreimagesBounded, Compact<u128>]
			>;
			/**
			 * See [`Pallet::remove_other_vote`].
			 **/
			removeOtherVote: AugmentedSubmittable<
				(
					target:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					index: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, u32]
			>;
			/**
			 * See [`Pallet::remove_vote`].
			 **/
			removeVote: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::second`].
			 **/
			second: AugmentedSubmittable<
				(proposal: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::set_metadata`].
			 **/
			setMetadata: AugmentedSubmittable<
				(
					owner:
						| PalletDemocracyMetadataOwner
						| { External: any }
						| { Proposal: any }
						| { Referendum: any }
						| string
						| Uint8Array,
					maybeHash: Option<H256> | null | Uint8Array | H256 | string,
				) => SubmittableExtrinsic<ApiType>,
				[PalletDemocracyMetadataOwner, Option<H256>]
			>;
			/**
			 * See [`Pallet::undelegate`].
			 **/
			undelegate: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::unlock`].
			 **/
			unlock: AugmentedSubmittable<
				(
					target:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::veto_external`].
			 **/
			vetoExternal: AugmentedSubmittable<
				(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::vote`].
			 **/
			vote: AugmentedSubmittable<
				(
					refIndex: Compact<u32> | AnyNumber | Uint8Array,
					vote:
						| PalletDemocracyVoteAccountVote
						| { Standard: any }
						| { Split: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, PalletDemocracyVoteAccountVote]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		dmpQueue: {
			/**
			 * See [`Pallet::service_overweight`].
			 **/
			serviceOverweight: AugmentedSubmittable<
				(
					index: u64 | AnyNumber | Uint8Array,
					weightLimit:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u64, SpWeightsWeightV2Weight]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		fellowshipCollective: {
			/**
			 * See [`Pallet::add_member`].
			 **/
			addMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::cleanup_poll`].
			 **/
			cleanupPoll: AugmentedSubmittable<
				(
					pollIndex: u32 | AnyNumber | Uint8Array,
					max: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::demote_member`].
			 **/
			demoteMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::promote_member`].
			 **/
			promoteMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::remove_member`].
			 **/
			removeMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					minRank: u16 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, u16]
			>;
			/**
			 * See [`Pallet::vote`].
			 **/
			vote: AugmentedSubmittable<
				(
					poll: u32 | AnyNumber | Uint8Array,
					aye: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, bool]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		fellowshipReferenda: {
			/**
			 * See [`Pallet::cancel`].
			 **/
			cancel: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::kill`].
			 **/
			kill: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::nudge_referendum`].
			 **/
			nudgeReferendum: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::one_fewer_deciding`].
			 **/
			oneFewerDeciding: AugmentedSubmittable<
				(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u16]
			>;
			/**
			 * See [`Pallet::place_decision_deposit`].
			 **/
			placeDecisionDeposit: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::refund_decision_deposit`].
			 **/
			refundDecisionDeposit: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::refund_submission_deposit`].
			 **/
			refundSubmissionDeposit: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::set_metadata`].
			 **/
			setMetadata: AugmentedSubmittable<
				(
					index: u32 | AnyNumber | Uint8Array,
					maybeHash: Option<H256> | null | Uint8Array | H256 | string,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<H256>]
			>;
			/**
			 * See [`Pallet::submit`].
			 **/
			submit: AugmentedSubmittable<
				(
					proposalOrigin:
						| TangleKusamaRuntimeOriginCaller
						| { system: any }
						| { Void: any }
						| { Council: any }
						| { TechnicalCommittee: any }
						| { Origins: any }
						| { PolkadotXcm: any }
						| { CumulusXcm: any }
						| string
						| Uint8Array,
					proposal:
						| FrameSupportPreimagesBounded
						| { Legacy: any }
						| { Inline: any }
						| { Lookup: any }
						| string
						| Uint8Array,
					enactmentMoment:
						| FrameSupportScheduleDispatchTime
						| { At: any }
						| { After: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					TangleKusamaRuntimeOriginCaller,
					FrameSupportPreimagesBounded,
					FrameSupportScheduleDispatchTime,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		identity: {
			/**
			 * See [`Pallet::add_registrar`].
			 **/
			addRegistrar: AugmentedSubmittable<
				(
					account:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::add_sub`].
			 **/
			addSub: AugmentedSubmittable<
				(
					sub:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					data:
						| Data
						| { None: any }
						| { Raw: any }
						| { BlakeTwo256: any }
						| { Sha256: any }
						| { Keccak256: any }
						| { ShaThree256: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, Data]
			>;
			/**
			 * See [`Pallet::cancel_request`].
			 **/
			cancelRequest: AugmentedSubmittable<
				(regIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::clear_identity`].
			 **/
			clearIdentity: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::kill_identity`].
			 **/
			killIdentity: AugmentedSubmittable<
				(
					target:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::provide_judgement`].
			 **/
			provideJudgement: AugmentedSubmittable<
				(
					regIndex: Compact<u32> | AnyNumber | Uint8Array,
					target:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					judgement:
						| PalletIdentityJudgement
						| { Unknown: any }
						| { FeePaid: any }
						| { Reasonable: any }
						| { KnownGood: any }
						| { OutOfDate: any }
						| { LowQuality: any }
						| { Erroneous: any }
						| string
						| Uint8Array,
					identity: H256 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, MultiAddress, PalletIdentityJudgement, H256]
			>;
			/**
			 * See [`Pallet::quit_sub`].
			 **/
			quitSub: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::remove_sub`].
			 **/
			removeSub: AugmentedSubmittable<
				(
					sub:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::rename_sub`].
			 **/
			renameSub: AugmentedSubmittable<
				(
					sub:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					data:
						| Data
						| { None: any }
						| { Raw: any }
						| { BlakeTwo256: any }
						| { Sha256: any }
						| { Keccak256: any }
						| { ShaThree256: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, Data]
			>;
			/**
			 * See [`Pallet::request_judgement`].
			 **/
			requestJudgement: AugmentedSubmittable<
				(
					regIndex: Compact<u32> | AnyNumber | Uint8Array,
					maxFee: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, Compact<u128>]
			>;
			/**
			 * See [`Pallet::set_account_id`].
			 **/
			setAccountId: AugmentedSubmittable<
				(
					index: Compact<u32> | AnyNumber | Uint8Array,
					updated:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, MultiAddress]
			>;
			/**
			 * See [`Pallet::set_fee`].
			 **/
			setFee: AugmentedSubmittable<
				(
					index: Compact<u32> | AnyNumber | Uint8Array,
					fee: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, Compact<u128>]
			>;
			/**
			 * See [`Pallet::set_fields`].
			 **/
			setFields: AugmentedSubmittable<
				(
					index: Compact<u32> | AnyNumber | Uint8Array,
					fields: PalletIdentityBitFlags,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, PalletIdentityBitFlags]
			>;
			/**
			 * See [`Pallet::set_identity`].
			 **/
			setIdentity: AugmentedSubmittable<
				(
					info:
						| PalletIdentitySimpleIdentityInfo
						| {
								additional?: any;
								display?: any;
								legal?: any;
								web?: any;
								riot?: any;
								email?: any;
								pgpFingerprint?: any;
								image?: any;
								twitter?: any;
						  }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[PalletIdentitySimpleIdentityInfo]
			>;
			/**
			 * See [`Pallet::set_subs`].
			 **/
			setSubs: AugmentedSubmittable<
				(
					subs:
						| Vec<ITuple<[AccountId32, Data]>>
						| [
								AccountId32 | string | Uint8Array,
								(
									| Data
									| { None: any }
									| { Raw: any }
									| { BlakeTwo256: any }
									| { Sha256: any }
									| { Keccak256: any }
									| { ShaThree256: any }
									| string
									| Uint8Array
								),
						  ][],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<ITuple<[AccountId32, Data]>>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		indices: {
			/**
			 * See [`Pallet::claim`].
			 **/
			claim: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::force_transfer`].
			 **/
			forceTransfer: AugmentedSubmittable<
				(
					updated:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					index: u32 | AnyNumber | Uint8Array,
					freeze: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, u32, bool]
			>;
			/**
			 * See [`Pallet::free`].
			 **/
			free: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::freeze`].
			 **/
			freeze: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					updated:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					index: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		LstMinting: {
			/**
			 * See [`Pallet::add_support_rebond_token`].
			 **/
			addSupportRebondToken: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId]
			>;
			/**
			 * See [`Pallet::mint`].
			 **/
			mint: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					tokenAmount: u128 | AnyNumber | Uint8Array,
					remark: Bytes | string | Uint8Array,
					channelId: Option<u32> | null | Uint8Array | u32 | AnyNumber,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128, Bytes, Option<u32>]
			>;
			/**
			 * See [`Pallet::rebond`].
			 **/
			rebond: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					tokenAmount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * See [`Pallet::rebond_by_unlock_id`].
			 **/
			rebondByUnlockId: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					unlockId: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u32]
			>;
			/**
			 * See [`Pallet::recreate_currency_ongoing_time_unit`].
			 **/
			recreateCurrencyOngoingTimeUnit: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					timeUnit:
						| TanglePrimitivesTimeUnit
						| { Era: any }
						| { SlashingSpan: any }
						| { Round: any }
						| { Kblock: any }
						| { Hour: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, TanglePrimitivesTimeUnit]
			>;
			/**
			 * See [`Pallet::redeem`].
			 **/
			redeem: AugmentedSubmittable<
				(
					LstId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					LstAmount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * See [`Pallet::remove_support_rebond_token`].
			 **/
			removeSupportRebondToken: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId]
			>;
			/**
			 * See [`Pallet::set_fees`].
			 **/
			setFees: AugmentedSubmittable<
				(
					mintFee: Permill | AnyNumber | Uint8Array,
					redeemFee: Permill | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Permill, Permill]
			>;
			/**
			 * See [`Pallet::set_hook_iteration_limit`].
			 **/
			setHookIterationLimit: AugmentedSubmittable<
				(limit: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::set_minimum_mint`].
			 **/
			setMinimumMint: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * See [`Pallet::set_minimum_redeem`].
			 **/
			setMinimumRedeem: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * See [`Pallet::set_min_time_unit`].
			 **/
			setMinTimeUnit: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					timeUnit:
						| TanglePrimitivesTimeUnit
						| { Era: any }
						| { SlashingSpan: any }
						| { Round: any }
						| { Kblock: any }
						| { Hour: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, TanglePrimitivesTimeUnit]
			>;
			/**
			 * See [`Pallet::set_unlock_duration`].
			 **/
			setUnlockDuration: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					unlockDuration:
						| TanglePrimitivesTimeUnit
						| { Era: any }
						| { SlashingSpan: any }
						| { Round: any }
						| { Kblock: any }
						| { Hour: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, TanglePrimitivesTimeUnit]
			>;
			/**
			 * See [`Pallet::set_unlocking_total`].
			 **/
			setUnlockingTotal: AugmentedSubmittable<
				(
					tokenId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		LstVoting: {
			/**
			 * See [`Pallet::add_delegator`].
			 **/
			addDelegator: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					derivativeIndex: Compact<u16> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u16>]
			>;
			/**
			 * See [`Pallet::kill_referendum`].
			 **/
			killReferendum: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					pollIndex: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u32>]
			>;
			/**
			 * See [`Pallet::notify_remove_delegator_vote`].
			 **/
			notifyRemoveDelegatorVote: AugmentedSubmittable<
				(
					queryId: u64 | AnyNumber | Uint8Array,
					response:
						| XcmV3Response
						| { Null: any }
						| { Assets: any }
						| { ExecutionResult: any }
						| { Version: any }
						| { PalletsInfo: any }
						| { DispatchResult: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u64, XcmV3Response]
			>;
			/**
			 * See [`Pallet::notify_vote`].
			 **/
			notifyVote: AugmentedSubmittable<
				(
					queryId: u64 | AnyNumber | Uint8Array,
					response:
						| XcmV3Response
						| { Null: any }
						| { Assets: any }
						| { ExecutionResult: any }
						| { Version: any }
						| { PalletsInfo: any }
						| { DispatchResult: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u64, XcmV3Response]
			>;
			/**
			 * See [`Pallet::remove_delegator_vote`].
			 **/
			removeDelegatorVote: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					pollIndex: Compact<u32> | AnyNumber | Uint8Array,
					derivativeIndex: Compact<u16> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u32>, Compact<u16>]
			>;
			/**
			 * See [`Pallet::set_referendum_status`].
			 **/
			setReferendumStatus: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					pollIndex: Compact<u32> | AnyNumber | Uint8Array,
					info:
						| TangleLstVotingVoteReferendumInfo
						| { Ongoing: any }
						| { Completed: any }
						| { Killed: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u32>, TangleLstVotingVoteReferendumInfo]
			>;
			/**
			 * See [`Pallet::set_undeciding_timeout`].
			 **/
			setUndecidingTimeout: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					undecidingTimeout: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u32]
			>;
			/**
			 * See [`Pallet::set_vote_cap_ratio`].
			 **/
			setVoteCapRatio: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					voteCapRatio: Perbill | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Perbill]
			>;
			/**
			 * See [`Pallet::set_vote_locking_period`].
			 **/
			setVoteLockingPeriod: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					lockingPeriod: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u32]
			>;
			/**
			 * See [`Pallet::unlock`].
			 **/
			unlock: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					pollIndex: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u32>]
			>;
			/**
			 * See [`Pallet::vote`].
			 **/
			vote: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					pollIndex: Compact<u32> | AnyNumber | Uint8Array,
					LstVote:
						| TangleLstVotingVoteAccountVote
						| { Standard: any }
						| { Split: any }
						| { SplitAbstain: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u32>, TangleLstVotingVoteAccountVote]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		merkleDistributor: {
			/**
			 * See [`Pallet::add_to_create_whitelist`].
			 **/
			addToCreateWhitelist: AugmentedSubmittable<
				(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[AccountId32]
			>;
			/**
			 * See [`Pallet::charge`].
			 **/
			charge: AugmentedSubmittable<
				(merkleDistributorId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::claim`].
			 **/
			claim: AugmentedSubmittable<
				(
					merkleDistributorId: u32 | AnyNumber | Uint8Array,
					index: u32 | AnyNumber | Uint8Array,
					account:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					merkleProof: Vec<H256> | (H256 | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, MultiAddress, u128, Vec<H256>]
			>;
			/**
			 * See [`Pallet::create_merkle_distributor`].
			 **/
			createMerkleDistributor: AugmentedSubmittable<
				(
					merkleRoot: H256 | string | Uint8Array,
					description: Bytes | string | Uint8Array,
					distributeCurrency:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					distributeAmount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, Bytes, TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * See [`Pallet::emergency_withdraw`].
			 **/
			emergencyWithdraw: AugmentedSubmittable<
				(
					merkleDistributorId: u32 | AnyNumber | Uint8Array,
					recipient:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, MultiAddress, u128]
			>;
			/**
			 * See [`Pallet::remove_from_create_whitelist`].
			 **/
			removeFromCreateWhitelist: AugmentedSubmittable<
				(account: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[AccountId32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		multisig: {
			/**
			 * See [`Pallet::approve_as_multi`].
			 **/
			approveAsMulti: AugmentedSubmittable<
				(
					threshold: u16 | AnyNumber | Uint8Array,
					otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
					maybeTimepoint:
						| Option<PalletMultisigTimepoint>
						| null
						| Uint8Array
						| PalletMultisigTimepoint
						| { height?: any; index?: any }
						| string,
					callHash: U8aFixed | string | Uint8Array,
					maxWeight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, U8aFixed, SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::as_multi`].
			 **/
			asMulti: AugmentedSubmittable<
				(
					threshold: u16 | AnyNumber | Uint8Array,
					otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
					maybeTimepoint:
						| Option<PalletMultisigTimepoint>
						| null
						| Uint8Array
						| PalletMultisigTimepoint
						| { height?: any; index?: any }
						| string,
					call: Call | IMethod | string | Uint8Array,
					maxWeight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u16, Vec<AccountId32>, Option<PalletMultisigTimepoint>, Call, SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::as_multi_threshold_1`].
			 **/
			asMultiThreshold1: AugmentedSubmittable<
				(
					otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>, Call]
			>;
			/**
			 * See [`Pallet::cancel_as_multi`].
			 **/
			cancelAsMulti: AugmentedSubmittable<
				(
					threshold: u16 | AnyNumber | Uint8Array,
					otherSignatories: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
					timepoint: PalletMultisigTimepoint | { height?: any; index?: any } | string | Uint8Array,
					callHash: U8aFixed | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u16, Vec<AccountId32>, PalletMultisigTimepoint, U8aFixed]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		oracle: {
			/**
			 * See [`Pallet::feed_values`].
			 **/
			feedValues: AugmentedSubmittable<
				(
					values:
						| Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, u128]>>
						| [
								(
									| TanglePrimitivesCurrencyCurrencyId
									| { Native: any }
									| { Lst: any }
									| { Token: any }
									| { Stable: any }
									| { VSToken: any }
									| { VSBond: any }
									| { LPToken: any }
									| { ForeignAsset: any }
									| { Token2: any }
									| { Lst2: any }
									| { VSToken2: any }
									| { VSBond2: any }
									| { StableLpToken: any }
									| { BLP: any }
									| { Lend: any }
									| string
									| Uint8Array
								),
								u128 | AnyNumber | Uint8Array,
						  ][],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, u128]>>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		oracleMembership: {
			/**
			 * See [`Pallet::add_member`].
			 **/
			addMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::change_key`].
			 **/
			changeKey: AugmentedSubmittable<
				(
					updated:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::clear_prime`].
			 **/
			clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::remove_member`].
			 **/
			removeMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::reset_members`].
			 **/
			resetMembers: AugmentedSubmittable<
				(
					members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>]
			>;
			/**
			 * See [`Pallet::set_prime`].
			 **/
			setPrime: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::swap_member`].
			 **/
			swapMember: AugmentedSubmittable<
				(
					remove:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					add:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, MultiAddress]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		ormlXcm: {
			/**
			 * See [`Pallet::send_as_sovereign`].
			 **/
			sendAsSovereign: AugmentedSubmittable<
				(
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedMultiLocation, XcmVersionedXcm]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		parachainInfo: {
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		parachainStaking: {
			/**
			 * See [`Pallet::cancel_candidate_bond_less`].
			 **/
			cancelCandidateBondLess: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::cancel_delegation_request`].
			 **/
			cancelDelegationRequest: AugmentedSubmittable<
				(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[AccountId32]
			>;
			/**
			 * See [`Pallet::cancel_leave_candidates`].
			 **/
			cancelLeaveCandidates: AugmentedSubmittable<
				(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::cancel_leave_delegators`].
			 **/
			cancelLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::candidate_bond_more`].
			 **/
			candidateBondMore: AugmentedSubmittable<
				(more: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * See [`Pallet::delegate`].
			 **/
			delegate: AugmentedSubmittable<
				(
					candidate: AccountId32 | string | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					candidateDelegationCount: u32 | AnyNumber | Uint8Array,
					delegationCount: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[AccountId32, u128, u32, u32]
			>;
			/**
			 * See [`Pallet::delegator_bond_more`].
			 **/
			delegatorBondMore: AugmentedSubmittable<
				(
					candidate: AccountId32 | string | Uint8Array,
					more: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[AccountId32, u128]
			>;
			/**
			 * See [`Pallet::execute_candidate_bond_less`].
			 **/
			executeCandidateBondLess: AugmentedSubmittable<
				(candidate: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[AccountId32]
			>;
			/**
			 * See [`Pallet::execute_delegation_request`].
			 **/
			executeDelegationRequest: AugmentedSubmittable<
				(
					delegator: AccountId32 | string | Uint8Array,
					candidate: AccountId32 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[AccountId32, AccountId32]
			>;
			/**
			 * See [`Pallet::execute_leave_candidates`].
			 **/
			executeLeaveCandidates: AugmentedSubmittable<
				(
					candidate: AccountId32 | string | Uint8Array,
					candidateDelegationCount: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[AccountId32, u32]
			>;
			/**
			 * See [`Pallet::execute_leave_delegators`].
			 **/
			executeLeaveDelegators: AugmentedSubmittable<
				(
					delegator: AccountId32 | string | Uint8Array,
					delegationCount: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[AccountId32, u32]
			>;
			/**
			 * See [`Pallet::go_offline`].
			 **/
			goOffline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::go_online`].
			 **/
			goOnline: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::hotfix_migrate_collators_from_reserve_to_locks`].
			 **/
			hotfixMigrateCollatorsFromReserveToLocks: AugmentedSubmittable<
				(
					collators: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>]
			>;
			/**
			 * See [`Pallet::hotfix_migrate_delegators_from_reserve_to_locks`].
			 **/
			hotfixMigrateDelegatorsFromReserveToLocks: AugmentedSubmittable<
				(
					delegators: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>]
			>;
			/**
			 * See [`Pallet::hotfix_remove_delegation_requests_exited_candidates`].
			 **/
			hotfixRemoveDelegationRequestsExitedCandidates: AugmentedSubmittable<
				(
					candidates: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>]
			>;
			/**
			 * See [`Pallet::join_candidates`].
			 **/
			joinCandidates: AugmentedSubmittable<
				(
					bond: u128 | AnyNumber | Uint8Array,
					candidateCount: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u128, u32]
			>;
			/**
			 * See [`Pallet::schedule_candidate_bond_less`].
			 **/
			scheduleCandidateBondLess: AugmentedSubmittable<
				(less: u128 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u128]
			>;
			/**
			 * See [`Pallet::schedule_delegator_bond_less`].
			 **/
			scheduleDelegatorBondLess: AugmentedSubmittable<
				(
					candidate: AccountId32 | string | Uint8Array,
					less: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[AccountId32, u128]
			>;
			/**
			 * See [`Pallet::schedule_leave_candidates`].
			 **/
			scheduleLeaveCandidates: AugmentedSubmittable<
				(candidateCount: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::schedule_leave_delegators`].
			 **/
			scheduleLeaveDelegators: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::schedule_revoke_delegation`].
			 **/
			scheduleRevokeDelegation: AugmentedSubmittable<
				(collator: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[AccountId32]
			>;
			/**
			 * See [`Pallet::set_blocks_per_round`].
			 **/
			setBlocksPerRound: AugmentedSubmittable<
				(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::set_collator_commission`].
			 **/
			setCollatorCommission: AugmentedSubmittable<
				(updated: Perbill | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Perbill]
			>;
			/**
			 * See [`Pallet::set_inflation`].
			 **/
			setInflation: AugmentedSubmittable<
				(
					schedule:
						| ({
								readonly min: Perbill;
								readonly ideal: Perbill;
								readonly max: Perbill;
						  } & Struct)
						| { min?: any; ideal?: any; max?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					{
						readonly min: Perbill;
						readonly ideal: Perbill;
						readonly max: Perbill;
					} & Struct,
				]
			>;
			/**
			 * See [`Pallet::set_parachain_bond_account`].
			 **/
			setParachainBondAccount: AugmentedSubmittable<
				(updated: AccountId32 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[AccountId32]
			>;
			/**
			 * See [`Pallet::set_parachain_bond_reserve_percent`].
			 **/
			setParachainBondReservePercent: AugmentedSubmittable<
				(updated: Percent | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Percent]
			>;
			/**
			 * See [`Pallet::set_staking_expectations`].
			 **/
			setStakingExpectations: AugmentedSubmittable<
				(
					expectations:
						| ({
								readonly min: u128;
								readonly ideal: u128;
								readonly max: u128;
						  } & Struct)
						| { min?: any; ideal?: any; max?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					{
						readonly min: u128;
						readonly ideal: u128;
						readonly max: u128;
					} & Struct,
				]
			>;
			/**
			 * See [`Pallet::set_total_selected`].
			 **/
			setTotalSelected: AugmentedSubmittable<
				(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		parachainSystem: {
			/**
			 * See [`Pallet::authorize_upgrade`].
			 **/
			authorizeUpgrade: AugmentedSubmittable<
				(
					codeHash: H256 | string | Uint8Array,
					checkVersion: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, bool]
			>;
			/**
			 * See [`Pallet::enact_authorized_upgrade`].
			 **/
			enactAuthorizedUpgrade: AugmentedSubmittable<
				(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::set_validation_data`].
			 **/
			setValidationData: AugmentedSubmittable<
				(
					data:
						| CumulusPrimitivesParachainInherentParachainInherentData
						| {
								validationData?: any;
								relayChainState?: any;
								downwardMessages?: any;
								horizontalMessages?: any;
						  }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[CumulusPrimitivesParachainInherentParachainInherentData]
			>;
			/**
			 * See [`Pallet::sudo_send_upward_message`].
			 **/
			sudoSendUpwardMessage: AugmentedSubmittable<
				(message: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		phragmenElection: {
			/**
			 * See [`Pallet::clean_defunct_voters`].
			 **/
			cleanDefunctVoters: AugmentedSubmittable<
				(
					numVoters: u32 | AnyNumber | Uint8Array,
					numDefunct: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::remove_member`].
			 **/
			removeMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					slashBond: bool | boolean | Uint8Array,
					rerunElection: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, bool, bool]
			>;
			/**
			 * See [`Pallet::remove_voter`].
			 **/
			removeVoter: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::renounce_candidacy`].
			 **/
			renounceCandidacy: AugmentedSubmittable<
				(
					renouncing:
						| PalletElectionsPhragmenRenouncing
						| { Member: any }
						| { RunnerUp: any }
						| { Candidate: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[PalletElectionsPhragmenRenouncing]
			>;
			/**
			 * See [`Pallet::submit_candidacy`].
			 **/
			submitCandidacy: AugmentedSubmittable<
				(candidateCount: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::vote`].
			 **/
			vote: AugmentedSubmittable<
				(
					votes: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
					value: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>, Compact<u128>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		polkadotXcm: {
			/**
			 * See [`Pallet::execute`].
			 **/
			execute: AugmentedSubmittable<
				(
					message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array,
					maxWeight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedXcm, SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::force_default_xcm_version`].
			 **/
			forceDefaultXcmVersion: AugmentedSubmittable<
				(
					maybeXcmVersion: Option<u32> | null | Uint8Array | u32 | AnyNumber,
				) => SubmittableExtrinsic<ApiType>,
				[Option<u32>]
			>;
			/**
			 * See [`Pallet::force_subscribe_version_notify`].
			 **/
			forceSubscribeVersionNotify: AugmentedSubmittable<
				(
					location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedMultiLocation]
			>;
			/**
			 * See [`Pallet::force_suspension`].
			 **/
			forceSuspension: AugmentedSubmittable<
				(suspended: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[bool]
			>;
			/**
			 * See [`Pallet::force_unsubscribe_version_notify`].
			 **/
			forceUnsubscribeVersionNotify: AugmentedSubmittable<
				(
					location: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedMultiLocation]
			>;
			/**
			 * See [`Pallet::force_xcm_version`].
			 **/
			forceXcmVersion: AugmentedSubmittable<
				(
					location:
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string
						| Uint8Array,
					version: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[StagingXcmV3MultiLocation, u32]
			>;
			/**
			 * See [`Pallet::limited_reserve_transfer_assets`].
			 **/
			limitedReserveTransferAssets: AugmentedSubmittable<
				(
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
					feeAssetItem: u32 | AnyNumber | Uint8Array,
					weightLimit:
						| XcmV3WeightLimit
						| { Unlimited: any }
						| { Limited: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					XcmVersionedMultiLocation,
					XcmVersionedMultiLocation,
					XcmVersionedMultiAssets,
					u32,
					XcmV3WeightLimit,
				]
			>;
			/**
			 * See [`Pallet::limited_teleport_assets`].
			 **/
			limitedTeleportAssets: AugmentedSubmittable<
				(
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
					feeAssetItem: u32 | AnyNumber | Uint8Array,
					weightLimit:
						| XcmV3WeightLimit
						| { Unlimited: any }
						| { Limited: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					XcmVersionedMultiLocation,
					XcmVersionedMultiLocation,
					XcmVersionedMultiAssets,
					u32,
					XcmV3WeightLimit,
				]
			>;
			/**
			 * See [`Pallet::reserve_transfer_assets`].
			 **/
			reserveTransferAssets: AugmentedSubmittable<
				(
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
					feeAssetItem: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]
			>;
			/**
			 * See [`Pallet::send`].
			 **/
			send: AugmentedSubmittable<
				(
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					message: XcmVersionedXcm | { V2: any } | { V3: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedMultiLocation, XcmVersionedXcm]
			>;
			/**
			 * See [`Pallet::teleport_assets`].
			 **/
			teleportAssets: AugmentedSubmittable<
				(
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					beneficiary: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
					feeAssetItem: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedMultiLocation, XcmVersionedMultiLocation, XcmVersionedMultiAssets, u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		preimage: {
			/**
			 * See [`Pallet::ensure_updated`].
			 **/
			ensureUpdated: AugmentedSubmittable<
				(hashes: Vec<H256> | (H256 | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
				[Vec<H256>]
			>;
			/**
			 * See [`Pallet::note_preimage`].
			 **/
			notePreimage: AugmentedSubmittable<
				(bytes: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::request_preimage`].
			 **/
			requestPreimage: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::unnote_preimage`].
			 **/
			unnotePreimage: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::unrequest_preimage`].
			 **/
			unrequestPreimage: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		prices: {
			/**
			 * See [`Pallet::reset_price`].
			 **/
			resetPrice: AugmentedSubmittable<
				(
					assetId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId]
			>;
			/**
			 * See [`Pallet::set_foreign_asset`].
			 **/
			setForeignAsset: AugmentedSubmittable<
				(
					foreignAssetId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					assetId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, TanglePrimitivesCurrencyCurrencyId]
			>;
			/**
			 * See [`Pallet::set_price`].
			 **/
			setPrice: AugmentedSubmittable<
				(
					assetId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					price: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		proxy: {
			/**
			 * See [`Pallet::add_proxy`].
			 **/
			addProxy: AugmentedSubmittable<
				(
					delegate:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					proxyType:
						| TangleKusamaRuntimeProxyType
						| 'Any'
						| 'NonTransfer'
						| 'Governance'
						| 'CancelProxy'
						| 'IdentityJudgement'
						| 'Staking'
						| number
						| Uint8Array,
					delay: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TangleKusamaRuntimeProxyType, u32]
			>;
			/**
			 * See [`Pallet::announce`].
			 **/
			announce: AugmentedSubmittable<
				(
					real:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					callHash: H256 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, H256]
			>;
			/**
			 * See [`Pallet::create_pure`].
			 **/
			createPure: AugmentedSubmittable<
				(
					proxyType:
						| TangleKusamaRuntimeProxyType
						| 'Any'
						| 'NonTransfer'
						| 'Governance'
						| 'CancelProxy'
						| 'IdentityJudgement'
						| 'Staking'
						| number
						| Uint8Array,
					delay: u32 | AnyNumber | Uint8Array,
					index: u16 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TangleKusamaRuntimeProxyType, u32, u16]
			>;
			/**
			 * See [`Pallet::kill_pure`].
			 **/
			killPure: AugmentedSubmittable<
				(
					spawner:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					proxyType:
						| TangleKusamaRuntimeProxyType
						| 'Any'
						| 'NonTransfer'
						| 'Governance'
						| 'CancelProxy'
						| 'IdentityJudgement'
						| 'Staking'
						| number
						| Uint8Array,
					index: u16 | AnyNumber | Uint8Array,
					height: Compact<u32> | AnyNumber | Uint8Array,
					extIndex: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TangleKusamaRuntimeProxyType, u16, Compact<u32>, Compact<u32>]
			>;
			/**
			 * See [`Pallet::proxy`].
			 **/
			proxy: AugmentedSubmittable<
				(
					real:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					forceProxyType:
						| Option<TangleKusamaRuntimeProxyType>
						| null
						| Uint8Array
						| TangleKusamaRuntimeProxyType
						| 'Any'
						| 'NonTransfer'
						| 'Governance'
						| 'CancelProxy'
						| 'IdentityJudgement'
						| 'Staking'
						| number,
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, Option<TangleKusamaRuntimeProxyType>, Call]
			>;
			/**
			 * See [`Pallet::proxy_announced`].
			 **/
			proxyAnnounced: AugmentedSubmittable<
				(
					delegate:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					real:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					forceProxyType:
						| Option<TangleKusamaRuntimeProxyType>
						| null
						| Uint8Array
						| TangleKusamaRuntimeProxyType
						| 'Any'
						| 'NonTransfer'
						| 'Governance'
						| 'CancelProxy'
						| 'IdentityJudgement'
						| 'Staking'
						| number,
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, MultiAddress, Option<TangleKusamaRuntimeProxyType>, Call]
			>;
			/**
			 * See [`Pallet::reject_announcement`].
			 **/
			rejectAnnouncement: AugmentedSubmittable<
				(
					delegate:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					callHash: H256 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, H256]
			>;
			/**
			 * See [`Pallet::remove_announcement`].
			 **/
			removeAnnouncement: AugmentedSubmittable<
				(
					real:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					callHash: H256 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, H256]
			>;
			/**
			 * See [`Pallet::remove_proxies`].
			 **/
			removeProxies: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::remove_proxy`].
			 **/
			removeProxy: AugmentedSubmittable<
				(
					delegate:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					proxyType:
						| TangleKusamaRuntimeProxyType
						| 'Any'
						| 'NonTransfer'
						| 'Governance'
						| 'CancelProxy'
						| 'IdentityJudgement'
						| 'Staking'
						| number
						| Uint8Array,
					delay: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TangleKusamaRuntimeProxyType, u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		referenda: {
			/**
			 * See [`Pallet::cancel`].
			 **/
			cancel: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::kill`].
			 **/
			kill: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::nudge_referendum`].
			 **/
			nudgeReferendum: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::one_fewer_deciding`].
			 **/
			oneFewerDeciding: AugmentedSubmittable<
				(track: u16 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u16]
			>;
			/**
			 * See [`Pallet::place_decision_deposit`].
			 **/
			placeDecisionDeposit: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::refund_decision_deposit`].
			 **/
			refundDecisionDeposit: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::refund_submission_deposit`].
			 **/
			refundSubmissionDeposit: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::set_metadata`].
			 **/
			setMetadata: AugmentedSubmittable<
				(
					index: u32 | AnyNumber | Uint8Array,
					maybeHash: Option<H256> | null | Uint8Array | H256 | string,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<H256>]
			>;
			/**
			 * See [`Pallet::submit`].
			 **/
			submit: AugmentedSubmittable<
				(
					proposalOrigin:
						| TangleKusamaRuntimeOriginCaller
						| { system: any }
						| { Void: any }
						| { Council: any }
						| { TechnicalCommittee: any }
						| { Origins: any }
						| { PolkadotXcm: any }
						| { CumulusXcm: any }
						| string
						| Uint8Array,
					proposal:
						| FrameSupportPreimagesBounded
						| { Legacy: any }
						| { Inline: any }
						| { Lookup: any }
						| string
						| Uint8Array,
					enactmentMoment:
						| FrameSupportScheduleDispatchTime
						| { At: any }
						| { After: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					TangleKusamaRuntimeOriginCaller,
					FrameSupportPreimagesBounded,
					FrameSupportScheduleDispatchTime,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		scheduler: {
			/**
			 * See [`Pallet::cancel`].
			 **/
			cancel: AugmentedSubmittable<
				(
					when: u32 | AnyNumber | Uint8Array,
					index: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32]
			>;
			/**
			 * See [`Pallet::cancel_named`].
			 **/
			cancelNamed: AugmentedSubmittable<
				(id: U8aFixed | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[U8aFixed]
			>;
			/**
			 * See [`Pallet::schedule`].
			 **/
			schedule: AugmentedSubmittable<
				(
					when: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<ITuple<[u32, u32]>>, u8, Call]
			>;
			/**
			 * See [`Pallet::schedule_after`].
			 **/
			scheduleAfter: AugmentedSubmittable<
				(
					after: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<ITuple<[u32, u32]>>, u8, Call]
			>;
			/**
			 * See [`Pallet::schedule_named`].
			 **/
			scheduleNamed: AugmentedSubmittable<
				(
					id: U8aFixed | string | Uint8Array,
					when: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]
			>;
			/**
			 * See [`Pallet::schedule_named_after`].
			 **/
			scheduleNamedAfter: AugmentedSubmittable<
				(
					id: U8aFixed | string | Uint8Array,
					after: u32 | AnyNumber | Uint8Array,
					maybePeriodic:
						| Option<ITuple<[u32, u32]>>
						| null
						| Uint8Array
						| ITuple<[u32, u32]>
						| [u32 | AnyNumber | Uint8Array, u32 | AnyNumber | Uint8Array],
					priority: u8 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[U8aFixed, u32, Option<ITuple<[u32, u32]>>, u8, Call]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		session: {
			/**
			 * See [`Pallet::purge_keys`].
			 **/
			purgeKeys: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::set_keys`].
			 **/
			setKeys: AugmentedSubmittable<
				(
					keys: TangleKusamaRuntimeSessionKeys | { aura?: any } | string | Uint8Array,
					proof: Bytes | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TangleKusamaRuntimeSessionKeys, Bytes]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		slp: {
			/**
			 * See [`Pallet::add_delegator`].
			 **/
			addDelegator: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					index: Compact<u16> | AnyNumber | Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u16>, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::add_supplement_fee_account_to_whitelist`].
			 **/
			addSupplementFeeAccountToWhitelist: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::add_to_validator_boost_list`].
			 **/
			addToValidatorBoostList: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::add_validator`].
			 **/
			addValidator: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::bond`].
			 **/
			bond: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
					validator:
						| Option<StagingXcmV3MultiLocation>
						| null
						| Uint8Array
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Compact<u128>,
					Option<StagingXcmV3MultiLocation>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::bond_extra`].
			 **/
			bondExtra: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					validator:
						| Option<StagingXcmV3MultiLocation>
						| null
						| Uint8Array
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string,
					amount: Compact<u128> | AnyNumber | Uint8Array,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Option<StagingXcmV3MultiLocation>,
					Compact<u128>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::charge_host_fee_and_tune_lst_exchange_rate`].
			 **/
			chargeHostFeeAndTuneLstExchangeRate: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					value: Compact<u128> | AnyNumber | Uint8Array,
					who:
						| Option<StagingXcmV3MultiLocation>
						| null
						| Uint8Array
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u128>, Option<StagingXcmV3MultiLocation>]
			>;
			/**
			 * See [`Pallet::chill`].
			 **/
			chill: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::clean_outdated_validator_boost_list`].
			 **/
			cleanOutdatedValidatorBoostList: AugmentedSubmittable<
				(
					token:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					page: u8 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u8]
			>;
			/**
			 * See [`Pallet::confirm_delegator_ledger`].
			 **/
			confirmDelegatorLedger: AugmentedSubmittable<
				(
					queryId: u64 | AnyNumber | Uint8Array,
					response:
						| XcmV3Response
						| { Null: any }
						| { Assets: any }
						| { ExecutionResult: any }
						| { Version: any }
						| { PalletsInfo: any }
						| { DispatchResult: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u64, XcmV3Response]
			>;
			/**
			 * See [`Pallet::confirm_delegator_ledger_query_response`].
			 **/
			confirmDelegatorLedgerQueryResponse: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					queryId: Compact<u64> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u64>]
			>;
			/**
			 * See [`Pallet::confirm_validators_by_delegator`].
			 **/
			confirmValidatorsByDelegator: AugmentedSubmittable<
				(
					queryId: u64 | AnyNumber | Uint8Array,
					response:
						| XcmV3Response
						| { Null: any }
						| { Assets: any }
						| { ExecutionResult: any }
						| { Version: any }
						| { PalletsInfo: any }
						| { DispatchResult: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u64, XcmV3Response]
			>;
			/**
			 * See [`Pallet::confirm_validators_by_delegator_query_response`].
			 **/
			confirmValidatorsByDelegatorQueryResponse: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					queryId: Compact<u64> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u64>]
			>;
			/**
			 * See [`Pallet::convert_asset`].
			 **/
			convertAsset: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
					ifFromCurrency: bool | boolean | Uint8Array,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Compact<u128>,
					bool,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::convert_treasury_lst`].
			 **/
			convertTreasuryLst: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * See [`Pallet::decrease_token_pool`].
			 **/
			decreaseTokenPool: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u128>]
			>;
			/**
			 * See [`Pallet::delegate`].
			 **/
			delegate: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					targets:
						| Vec<StagingXcmV3MultiLocation>
						| (
								| StagingXcmV3MultiLocation
								| { parents?: any; interior?: any }
								| string
								| Uint8Array
						  )[],
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Vec<StagingXcmV3MultiLocation>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::fail_delegator_ledger_query_response`].
			 **/
			failDelegatorLedgerQueryResponse: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					queryId: Compact<u64> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u64>]
			>;
			/**
			 * See [`Pallet::fail_validators_by_delegator_query_response`].
			 **/
			failValidatorsByDelegatorQueryResponse: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					queryId: Compact<u64> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u64>]
			>;
			/**
			 * See [`Pallet::increase_token_pool`].
			 **/
			increaseTokenPool: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Compact<u128>]
			>;
			/**
			 * See [`Pallet::initialize_delegator`].
			 **/
			initializeDelegator: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					delegatorLocation:
						| Option<StagingXcmV3MultiLocation>
						| null
						| Uint8Array
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Option<StagingXcmV3MultiLocation>]
			>;
			/**
			 * See [`Pallet::liquidize`].
			 **/
			liquidize: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					when:
						| Option<TanglePrimitivesTimeUnit>
						| null
						| Uint8Array
						| TanglePrimitivesTimeUnit
						| { Era: any }
						| { SlashingSpan: any }
						| { Round: any }
						| { Kblock: any }
						| { Hour: any }
						| string,
					validator:
						| Option<StagingXcmV3MultiLocation>
						| null
						| Uint8Array
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string,
					amount: Option<u128> | null | Uint8Array | u128 | AnyNumber,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Option<TanglePrimitivesTimeUnit>,
					Option<StagingXcmV3MultiLocation>,
					Option<u128>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::payout`].
			 **/
			payout: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					validator:
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string
						| Uint8Array,
					when:
						| Option<TanglePrimitivesTimeUnit>
						| null
						| Uint8Array
						| TanglePrimitivesTimeUnit
						| { Era: any }
						| { SlashingSpan: any }
						| { Round: any }
						| { Kblock: any }
						| { Hour: any }
						| string,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					StagingXcmV3MultiLocation,
					Option<TanglePrimitivesTimeUnit>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::rebond`].
			 **/
			rebond: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					validator:
						| Option<StagingXcmV3MultiLocation>
						| null
						| Uint8Array
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string,
					amount: Option<u128> | null | Uint8Array | u128 | AnyNumber,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Option<StagingXcmV3MultiLocation>,
					Option<u128>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::redelegate`].
			 **/
			redelegate: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					targets:
						| Option<Vec<StagingXcmV3MultiLocation>>
						| null
						| Uint8Array
						| Vec<StagingXcmV3MultiLocation>
						| (
								| StagingXcmV3MultiLocation
								| { parents?: any; interior?: any }
								| string
								| Uint8Array
						  )[],
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Option<Vec<StagingXcmV3MultiLocation>>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::refund_currency_due_unbond`].
			 **/
			refundCurrencyDueUnbond: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId]
			>;
			/**
			 * See [`Pallet::remove_delegator`].
			 **/
			removeDelegator: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::remove_from_validator_boot_list`].
			 **/
			removeFromValidatorBootList: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::remove_supplement_fee_account_from_whitelist`].
			 **/
			removeSupplementFeeAccountFromWhitelist: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::remove_validator`].
			 **/
			removeValidator: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::reset_validators`].
			 **/
			resetValidators: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					validatorList:
						| Vec<StagingXcmV3MultiLocation>
						| (
								| StagingXcmV3MultiLocation
								| { parents?: any; interior?: any }
								| string
								| Uint8Array
						  )[],
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Vec<StagingXcmV3MultiLocation>]
			>;
			/**
			 * See [`Pallet::set_currency_delays`].
			 **/
			setCurrencyDelays: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					maybeDelays:
						| Option<TangleSlpPrimitivesDelays>
						| null
						| Uint8Array
						| TangleSlpPrimitivesDelays
						| { unlockDelay?: any; leaveDelegatorsDelay?: any }
						| string,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Option<TangleSlpPrimitivesDelays>]
			>;
			/**
			 * See [`Pallet::set_currency_tune_exchange_rate_limit`].
			 **/
			setCurrencyTuneExchangeRateLimit: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					maybeTuneExchangeRateLimit:
						| Option<ITuple<[u32, Permill]>>
						| null
						| Uint8Array
						| ITuple<[u32, Permill]>
						| [u32 | AnyNumber | Uint8Array, Permill | AnyNumber | Uint8Array],
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Option<ITuple<[u32, Permill]>>]
			>;
			/**
			 * See [`Pallet::set_delegator_ledger`].
			 **/
			setDelegatorLedger: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					ledger:
						| Option<TangleSlpPrimitivesLedger>
						| null
						| Uint8Array
						| TangleSlpPrimitivesLedger
						| { Substrate: any }
						| { Moonbeam: any }
						| { ParachainStaking: any }
						| { Filecoin: any }
						| { Phala: any }
						| string,
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Option<TangleSlpPrimitivesLedger>,
				]
			>;
			/**
			 * See [`Pallet::set_fee_source`].
			 **/
			setFeeSource: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					whoAndFee:
						| Option<ITuple<[StagingXcmV3MultiLocation, u128]>>
						| null
						| Uint8Array
						| ITuple<[StagingXcmV3MultiLocation, u128]>
						| [
								StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Option<ITuple<[StagingXcmV3MultiLocation, u128]>>]
			>;
			/**
			 * See [`Pallet::set_hosting_fees`].
			 **/
			setHostingFees: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					maybeFeeSet:
						| Option<ITuple<[Permill, StagingXcmV3MultiLocation]>>
						| null
						| Uint8Array
						| ITuple<[Permill, StagingXcmV3MultiLocation]>
						| [
								Permill | AnyNumber | Uint8Array,
								StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Option<ITuple<[Permill, StagingXcmV3MultiLocation]>>]
			>;
			/**
			 * See [`Pallet::set_minimums_and_maximums`].
			 **/
			setMinimumsAndMaximums: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					constraints:
						| Option<TangleSlpPrimitivesMinimumsMaximums>
						| null
						| Uint8Array
						| TangleSlpPrimitivesMinimumsMaximums
						| {
								delegatorBondedMinimum?: any;
								bondExtraMinimum?: any;
								unbondMinimum?: any;
								rebondMinimum?: any;
								unbondRecordMaximum?: any;
								validatorsBackMaximum?: any;
								delegatorActiveStakingMaximum?: any;
								validatorsRewardMaximum?: any;
								delegationAmountMinimum?: any;
								delegatorsMaximum?: any;
								validatorsMaximum?: any;
						  }
						| string,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Option<TangleSlpPrimitivesMinimumsMaximums>]
			>;
			/**
			 * See [`Pallet::set_ongoing_time_unit_update_interval`].
			 **/
			setOngoingTimeUnitUpdateInterval: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					maybeInterval: Option<u32> | null | Uint8Array | u32 | AnyNumber,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Option<u32>]
			>;
			/**
			 * See [`Pallet::set_operate_origin`].
			 **/
			setOperateOrigin: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Option<AccountId32>]
			>;
			/**
			 * See [`Pallet::set_validator_boost_list`].
			 **/
			setValidatorBoostList: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					validatorList:
						| Vec<StagingXcmV3MultiLocation>
						| (
								| StagingXcmV3MultiLocation
								| { parents?: any; interior?: any }
								| string
								| Uint8Array
						  )[],
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Vec<StagingXcmV3MultiLocation>]
			>;
			/**
			 * See [`Pallet::set_validators_by_delegator`].
			 **/
			setValidatorsByDelegator: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					validators:
						| Vec<StagingXcmV3MultiLocation>
						| (
								| StagingXcmV3MultiLocation
								| { parents?: any; interior?: any }
								| string
								| Uint8Array
						  )[],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Vec<StagingXcmV3MultiLocation>,
				]
			>;
			/**
			 * See [`Pallet::supplement_fee_reserve`].
			 **/
			supplementFeeReserve: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					dest: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, StagingXcmV3MultiLocation]
			>;
			/**
			 * See [`Pallet::transfer_back`].
			 **/
			transferBack: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					from: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					to: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					StagingXcmV3MultiLocation,
					Compact<u128>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::transfer_to`].
			 **/
			transferTo: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					from: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					to: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					StagingXcmV3MultiLocation,
					Compact<u128>,
				]
			>;
			/**
			 * See [`Pallet::unbond`].
			 **/
			unbond: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					validator:
						| Option<StagingXcmV3MultiLocation>
						| null
						| Uint8Array
						| StagingXcmV3MultiLocation
						| { parents?: any; interior?: any }
						| string,
					amount: Compact<u128> | AnyNumber | Uint8Array,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Option<StagingXcmV3MultiLocation>,
					Compact<u128>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::unbond_all`].
			 **/
			unbondAll: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::undelegate`].
			 **/
			undelegate: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					who: StagingXcmV3MultiLocation | { parents?: any; interior?: any } | string | Uint8Array,
					targets:
						| Vec<StagingXcmV3MultiLocation>
						| (
								| StagingXcmV3MultiLocation
								| { parents?: any; interior?: any }
								| string
								| Uint8Array
						  )[],
					weightAndFee:
						| Option<ITuple<[SpWeightsWeightV2Weight, u128]>>
						| null
						| Uint8Array
						| ITuple<[SpWeightsWeightV2Weight, u128]>
						| [
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ],
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					StagingXcmV3MultiLocation,
					Vec<StagingXcmV3MultiLocation>,
					Option<ITuple<[SpWeightsWeightV2Weight, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::update_ongoing_time_unit`].
			 **/
			updateOngoingTimeUnit: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					timeUnit:
						| TanglePrimitivesTimeUnit
						| { Era: any }
						| { SlashingSpan: any }
						| { Round: any }
						| { Kblock: any }
						| { Hour: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, TanglePrimitivesTimeUnit]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		slpx: {
			/**
			 * See [`Pallet::add_whitelist`].
			 **/
			addWhitelist: AugmentedSubmittable<
				(
					supportChain:
						| TangleSlpxSupportChain
						| 'Astar'
						| 'Moonbeam'
						| 'Hydradx'
						| 'Interlay'
						| 'Manta'
						| number
						| Uint8Array,
					evmContractAccountId: AccountId32 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TangleSlpxSupportChain, AccountId32]
			>;
			/**
			 * See [`Pallet::force_add_order`].
			 **/
			forceAddOrder: AugmentedSubmittable<
				(
					slpxContractDerivativeAccount: AccountId32 | string | Uint8Array,
					evmCaller: H160 | string | Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					targetChain:
						| TangleSlpxTargetChain
						| { Astar: any }
						| { Moonbeam: any }
						| { Hydradx: any }
						| { Interlay: any }
						| { Manta: any }
						| string
						| Uint8Array,
					remark: Bytes | string | Uint8Array,
					orderType: TangleSlpxOrderType | 'Mint' | 'Redeem' | number | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					AccountId32,
					H160,
					TanglePrimitivesCurrencyCurrencyId,
					TangleSlpxTargetChain,
					Bytes,
					TangleSlpxOrderType,
				]
			>;
			/**
			 * See [`Pallet::mint`].
			 **/
			mint: AugmentedSubmittable<
				(
					evmCaller: H160 | string | Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					targetChain:
						| TangleSlpxTargetChain
						| { Astar: any }
						| { Moonbeam: any }
						| { Hydradx: any }
						| { Interlay: any }
						| { Manta: any }
						| string
						| Uint8Array,
					remark: Bytes | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H160, TanglePrimitivesCurrencyCurrencyId, TangleSlpxTargetChain, Bytes]
			>;
			/**
			 * See [`Pallet::redeem`].
			 **/
			redeem: AugmentedSubmittable<
				(
					evmCaller: H160 | string | Uint8Array,
					LstId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					targetChain:
						| TangleSlpxTargetChain
						| { Astar: any }
						| { Moonbeam: any }
						| { Hydradx: any }
						| { Interlay: any }
						| { Manta: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H160, TanglePrimitivesCurrencyCurrencyId, TangleSlpxTargetChain]
			>;
			/**
			 * See [`Pallet::remove_whitelist`].
			 **/
			removeWhitelist: AugmentedSubmittable<
				(
					supportChain:
						| TangleSlpxSupportChain
						| 'Astar'
						| 'Moonbeam'
						| 'Hydradx'
						| 'Interlay'
						| 'Manta'
						| number
						| Uint8Array,
					evmContractAccountId: AccountId32 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TangleSlpxSupportChain, AccountId32]
			>;
			/**
			 * See [`Pallet::set_currency_ethereum_call_switch`].
			 **/
			setCurrencyEthereumCallSwitch: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					isSupport: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, bool]
			>;
			/**
			 * See [`Pallet::set_currency_support_xcm_fee`].
			 **/
			setCurrencySupportXcmFee: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					isSupport: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, bool]
			>;
			/**
			 * See [`Pallet::set_delay_block`].
			 **/
			setDelayBlock: AugmentedSubmittable<
				(delayBlock: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::set_ethereum_call_configration`].
			 **/
			setEthereumCallConfigration: AugmentedSubmittable<
				(
					xcmFee: u128 | AnyNumber | Uint8Array,
					xcmWeight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
					period: u32 | AnyNumber | Uint8Array,
					contract: H160 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u128, SpWeightsWeightV2Weight, u32, H160]
			>;
			/**
			 * See [`Pallet::set_execution_fee`].
			 **/
			setExecutionFee: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					executionFee: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128]
			>;
			/**
			 * See [`Pallet::set_transfer_to_fee`].
			 **/
			setTransferToFee: AugmentedSubmittable<
				(
					supportChain:
						| TangleSlpxSupportChain
						| 'Astar'
						| 'Moonbeam'
						| 'Hydradx'
						| 'Interlay'
						| 'Manta'
						| number
						| Uint8Array,
					transferToFee: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TangleSlpxSupportChain, u128]
			>;
			/**
			 * See [`Pallet::stable_pool_swap`].
			 **/
			stablePoolSwap: AugmentedSubmittable<
				(
					evmCaller: H160 | string | Uint8Array,
					poolId: u32 | AnyNumber | Uint8Array,
					currencyIdIn:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					currencyIdOut:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					minDy: u128 | AnyNumber | Uint8Array,
					targetChain:
						| TangleSlpxTargetChain
						| { Astar: any }
						| { Moonbeam: any }
						| { Hydradx: any }
						| { Interlay: any }
						| { Manta: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					H160,
					u32,
					TanglePrimitivesCurrencyCurrencyId,
					TanglePrimitivesCurrencyCurrencyId,
					u128,
					TangleSlpxTargetChain,
				]
			>;
			/**
			 * See [`Pallet::zenlink_swap`].
			 **/
			zenlinkSwap: AugmentedSubmittable<
				(
					evmCaller: H160 | string | Uint8Array,
					currencyIdIn:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					currencyIdOut:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					currencyIdOutMin: u128 | AnyNumber | Uint8Array,
					targetChain:
						| TangleSlpxTargetChain
						| { Astar: any }
						| { Moonbeam: any }
						| { Hydradx: any }
						| { Interlay: any }
						| { Manta: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					H160,
					TanglePrimitivesCurrencyCurrencyId,
					TanglePrimitivesCurrencyCurrencyId,
					u128,
					TangleSlpxTargetChain,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		stablePool: {
			/**
			 * See [`Pallet::add_liquidity`].
			 **/
			addLiquidity: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					amounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					minMintAmount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u128>, u128]
			>;
			/**
			 * See [`Pallet::config_lst_auto_refresh`].
			 **/
			configLstAutoRefresh: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					hardcap: Permill | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, Permill]
			>;
			/**
			 * See [`Pallet::create_pool`].
			 **/
			createPool: AugmentedSubmittable<
				(
					assets:
						| Vec<TanglePrimitivesCurrencyCurrencyId>
						| (
								| TanglePrimitivesCurrencyCurrencyId
								| { Native: any }
								| { Lst: any }
								| { Token: any }
								| { Stable: any }
								| { VSToken: any }
								| { VSBond: any }
								| { LPToken: any }
								| { ForeignAsset: any }
								| { Token2: any }
								| { Lst2: any }
								| { VSToken2: any }
								| { VSBond2: any }
								| { StableLpToken: any }
								| { BLP: any }
								| { Lend: any }
								| string
								| Uint8Array
						  )[],
					precisions: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					mintFee: u128 | AnyNumber | Uint8Array,
					swapFee: u128 | AnyNumber | Uint8Array,
					redeemFee: u128 | AnyNumber | Uint8Array,
					initialA: u128 | AnyNumber | Uint8Array,
					feeRecipient: AccountId32 | string | Uint8Array,
					yieldRecipient: AccountId32 | string | Uint8Array,
					precision: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					Vec<TanglePrimitivesCurrencyCurrencyId>,
					Vec<u128>,
					u128,
					u128,
					u128,
					u128,
					AccountId32,
					AccountId32,
					u128,
				]
			>;
			/**
			 * See [`Pallet::edit_token_rate`].
			 **/
			editTokenRate: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					tokenRateInfo:
						| Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, ITuple<[u128, u128]>]>>
						| [
								(
									| TanglePrimitivesCurrencyCurrencyId
									| { Native: any }
									| { Lst: any }
									| { Token: any }
									| { Stable: any }
									| { VSToken: any }
									| { VSBond: any }
									| { LPToken: any }
									| { ForeignAsset: any }
									| { Token2: any }
									| { Lst2: any }
									| { VSToken2: any }
									| { VSBond2: any }
									| { StableLpToken: any }
									| { BLP: any }
									| { Lend: any }
									| string
									| Uint8Array
								),
								(
									| ITuple<[u128, u128]>
									| [u128 | AnyNumber | Uint8Array, u128 | AnyNumber | Uint8Array]
								),
						  ][],
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, ITuple<[u128, u128]>]>>]
			>;
			/**
			 * See [`Pallet::modify_a`].
			 **/
			modifyA: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					a: u128 | AnyNumber | Uint8Array,
					futureABlock: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, u32]
			>;
			/**
			 * See [`Pallet::modify_fees`].
			 **/
			modifyFees: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					mintFee: Option<u128> | null | Uint8Array | u128 | AnyNumber,
					swapFee: Option<u128> | null | Uint8Array | u128 | AnyNumber,
					redeemFee: Option<u128> | null | Uint8Array | u128 | AnyNumber,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<u128>, Option<u128>, Option<u128>]
			>;
			/**
			 * See [`Pallet::modify_recipients`].
			 **/
			modifyRecipients: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					feeRecipient: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
					yieldRecipient: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Option<AccountId32>, Option<AccountId32>]
			>;
			/**
			 * See [`Pallet::redeem_multi`].
			 **/
			redeemMulti: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					amounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					maxRedeemAmount: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u128>, u128]
			>;
			/**
			 * See [`Pallet::redeem_proportion`].
			 **/
			redeemProportion: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					minRedeemAmounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, Vec<u128>]
			>;
			/**
			 * See [`Pallet::redeem_single`].
			 **/
			redeemSingle: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					i: u32 | AnyNumber | Uint8Array,
					minRedeemAmount: u128 | AnyNumber | Uint8Array,
					assetLength: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, u32, u128, u32]
			>;
			/**
			 * See [`Pallet::remove_lst_auto_refresh`].
			 **/
			removeLstAutoRefresh: AugmentedSubmittable<
				(
					Lst:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId]
			>;
			/**
			 * See [`Pallet::swap`].
			 **/
			swap: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					i: u32 | AnyNumber | Uint8Array,
					j: u32 | AnyNumber | Uint8Array,
					dx: u128 | AnyNumber | Uint8Array,
					minDy: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u32, u128, u128]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		system: {
			/**
			 * See [`Pallet::kill_prefix`].
			 **/
			killPrefix: AugmentedSubmittable<
				(
					prefix: Bytes | string | Uint8Array,
					subkeys: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, u32]
			>;
			/**
			 * See [`Pallet::kill_storage`].
			 **/
			kilLstorage: AugmentedSubmittable<
				(keys: Vec<Bytes> | (Bytes | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>,
				[Vec<Bytes>]
			>;
			/**
			 * See [`Pallet::remark`].
			 **/
			remark: AugmentedSubmittable<
				(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::remark_with_event`].
			 **/
			remarkWithEvent: AugmentedSubmittable<
				(remark: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::set_code`].
			 **/
			setCode: AugmentedSubmittable<
				(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::set_code_without_checks`].
			 **/
			setCodeWithoutChecks: AugmentedSubmittable<
				(code: Bytes | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Bytes]
			>;
			/**
			 * See [`Pallet::set_heap_pages`].
			 **/
			setHeapPages: AugmentedSubmittable<
				(pages: u64 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u64]
			>;
			/**
			 * See [`Pallet::set_storage`].
			 **/
			setStorage: AugmentedSubmittable<
				(
					items:
						| Vec<ITuple<[Bytes, Bytes]>>
						| [Bytes | string | Uint8Array, Bytes | string | Uint8Array][],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<ITuple<[Bytes, Bytes]>>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		technicalCommittee: {
			/**
			 * See [`Pallet::close`].
			 **/
			close: AugmentedSubmittable<
				(
					proposalHash: H256 | string | Uint8Array,
					index: Compact<u32> | AnyNumber | Uint8Array,
					proposalWeightBound:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
					lengthBound: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, Compact<u32>, SpWeightsWeightV2Weight, Compact<u32>]
			>;
			/**
			 * See [`Pallet::disapprove_proposal`].
			 **/
			disapproveProposal: AugmentedSubmittable<
				(proposalHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::execute`].
			 **/
			execute: AugmentedSubmittable<
				(
					proposal: Call | IMethod | string | Uint8Array,
					lengthBound: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Call, Compact<u32>]
			>;
			/**
			 * See [`Pallet::propose`].
			 **/
			propose: AugmentedSubmittable<
				(
					threshold: Compact<u32> | AnyNumber | Uint8Array,
					proposal: Call | IMethod | string | Uint8Array,
					lengthBound: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>, Call, Compact<u32>]
			>;
			/**
			 * See [`Pallet::set_members`].
			 **/
			setMembers: AugmentedSubmittable<
				(
					newMembers: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
					prime: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
					oldCount: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>, Option<AccountId32>, u32]
			>;
			/**
			 * See [`Pallet::vote`].
			 **/
			vote: AugmentedSubmittable<
				(
					proposal: H256 | string | Uint8Array,
					index: Compact<u32> | AnyNumber | Uint8Array,
					approve: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, Compact<u32>, bool]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		technicalMembership: {
			/**
			 * See [`Pallet::add_member`].
			 **/
			addMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::change_key`].
			 **/
			changeKey: AugmentedSubmittable<
				(
					updated:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::clear_prime`].
			 **/
			clearPrime: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::remove_member`].
			 **/
			removeMember: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::reset_members`].
			 **/
			resetMembers: AugmentedSubmittable<
				(
					members: Vec<AccountId32> | (AccountId32 | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<AccountId32>]
			>;
			/**
			 * See [`Pallet::set_prime`].
			 **/
			setPrime: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress]
			>;
			/**
			 * See [`Pallet::swap_member`].
			 **/
			swapMember: AugmentedSubmittable<
				(
					remove:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					add:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, MultiAddress]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		timestamp: {
			/**
			 * See [`Pallet::set`].
			 **/
			set: AugmentedSubmittable<
				(now: Compact<u64> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u64>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		tips: {
			/**
			 * See [`Pallet::close_tip`].
			 **/
			closeTip: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::report_awesome`].
			 **/
			reportAwesome: AugmentedSubmittable<
				(
					reason: Bytes | string | Uint8Array,
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, MultiAddress]
			>;
			/**
			 * See [`Pallet::retract_tip`].
			 **/
			retractTip: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::slash_tip`].
			 **/
			slashTip: AugmentedSubmittable<
				(hash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::tip`].
			 **/
			tip: AugmentedSubmittable<
				(
					hash: H256 | string | Uint8Array,
					tipValue: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, Compact<u128>]
			>;
			/**
			 * See [`Pallet::tip_new`].
			 **/
			tipNew: AugmentedSubmittable<
				(
					reason: Bytes | string | Uint8Array,
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					tipValue: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Bytes, MultiAddress, Compact<u128>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		tokenIssuer: {
			/**
			 * See [`Pallet::add_to_issue_whitelist`].
			 **/
			addToIssueWhitelist: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					account: AccountId32 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, AccountId32]
			>;
			/**
			 * See [`Pallet::add_to_transfer_whitelist`].
			 **/
			addToTransferWhitelist: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					account: AccountId32 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, AccountId32]
			>;
			/**
			 * See [`Pallet::issue`].
			 **/
			issue: AugmentedSubmittable<
				(
					dest: AccountId32 | string | Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[AccountId32, TanglePrimitivesCurrencyCurrencyId, Compact<u128>]
			>;
			/**
			 * See [`Pallet::remove_from_issue_whitelist`].
			 **/
			removeFromIssueWhitelist: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					account: AccountId32 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, AccountId32]
			>;
			/**
			 * See [`Pallet::remove_from_transfer_whitelist`].
			 **/
			removeFromTransferWhitelist: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					account: AccountId32 | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, AccountId32]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					dest: AccountId32 | string | Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[AccountId32, TanglePrimitivesCurrencyCurrencyId, Compact<u128>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		tokens: {
			/**
			 * See [`Pallet::force_transfer`].
			 **/
			forceTransfer: AugmentedSubmittable<
				(
					source:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, MultiAddress, TanglePrimitivesCurrencyCurrencyId, Compact<u128>]
			>;
			/**
			 * See [`Pallet::set_balance`].
			 **/
			setBalance: AugmentedSubmittable<
				(
					who:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					newFree: Compact<u128> | AnyNumber | Uint8Array,
					newReserved: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TanglePrimitivesCurrencyCurrencyId, Compact<u128>, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TanglePrimitivesCurrencyCurrencyId, Compact<u128>]
			>;
			/**
			 * See [`Pallet::transfer_all`].
			 **/
			transferAll: AugmentedSubmittable<
				(
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					keepAlive: bool | boolean | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TanglePrimitivesCurrencyCurrencyId, bool]
			>;
			/**
			 * See [`Pallet::transfer_keep_alive`].
			 **/
			transferKeepAlive: AugmentedSubmittable<
				(
					dest:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[MultiAddress, TanglePrimitivesCurrencyCurrencyId, Compact<u128>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		treasury: {
			/**
			 * See [`Pallet::approve_proposal`].
			 **/
			approveProposal: AugmentedSubmittable<
				(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::check_status`].
			 **/
			checkStatus: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::payout`].
			 **/
			payout: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::propose_spend`].
			 **/
			proposeSpend: AugmentedSubmittable<
				(
					value: Compact<u128> | AnyNumber | Uint8Array,
					beneficiary:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>, MultiAddress]
			>;
			/**
			 * See [`Pallet::reject_proposal`].
			 **/
			rejectProposal: AugmentedSubmittable<
				(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::remove_approval`].
			 **/
			removeApproval: AugmentedSubmittable<
				(proposalId: Compact<u32> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Compact<u32>]
			>;
			/**
			 * See [`Pallet::spend`].
			 **/
			spend: AugmentedSubmittable<
				(
					assetKind: Null | null,
					amount: Compact<u128> | AnyNumber | Uint8Array,
					beneficiary: AccountId32 | string | Uint8Array,
					validFrom: Option<u32> | null | Uint8Array | u32 | AnyNumber,
				) => SubmittableExtrinsic<ApiType>,
				[Null, Compact<u128>, AccountId32, Option<u32>]
			>;
			/**
			 * See [`Pallet::spend_local`].
			 **/
			spendLocal: AugmentedSubmittable<
				(
					amount: Compact<u128> | AnyNumber | Uint8Array,
					beneficiary:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Compact<u128>, MultiAddress]
			>;
			/**
			 * See [`Pallet::void_spend`].
			 **/
			voidSpend: AugmentedSubmittable<
				(index: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		utility: {
			/**
			 * See [`Pallet::as_derivative`].
			 **/
			asDerivative: AugmentedSubmittable<
				(
					index: u16 | AnyNumber | Uint8Array,
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u16, Call]
			>;
			/**
			 * See [`Pallet::batch`].
			 **/
			batch: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * See [`Pallet::batch_all`].
			 **/
			batchAll: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * See [`Pallet::dispatch_as`].
			 **/
			dispatchAs: AugmentedSubmittable<
				(
					asOrigin:
						| TangleKusamaRuntimeOriginCaller
						| { system: any }
						| { Void: any }
						| { Council: any }
						| { TechnicalCommittee: any }
						| { Origins: any }
						| { PolkadotXcm: any }
						| { CumulusXcm: any }
						| string
						| Uint8Array,
					call: Call | IMethod | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TangleKusamaRuntimeOriginCaller, Call]
			>;
			/**
			 * See [`Pallet::force_batch`].
			 **/
			forceBatch: AugmentedSubmittable<
				(
					calls: Vec<Call> | (Call | IMethod | string | Uint8Array)[],
				) => SubmittableExtrinsic<ApiType>,
				[Vec<Call>]
			>;
			/**
			 * See [`Pallet::with_weight`].
			 **/
			withWeight: AugmentedSubmittable<
				(
					call: Call | IMethod | string | Uint8Array,
					weight:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Call, SpWeightsWeightV2Weight]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		whitelist: {
			/**
			 * See [`Pallet::dispatch_whitelisted_call`].
			 **/
			dispatchWhitelistedCall: AugmentedSubmittable<
				(
					callHash: H256 | string | Uint8Array,
					callEncodedLen: u32 | AnyNumber | Uint8Array,
					callWeightWitness:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[H256, u32, SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::dispatch_whitelisted_call_with_preimage`].
			 **/
			dispatchWhitelistedCallWithPreimage: AugmentedSubmittable<
				(call: Call | IMethod | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[Call]
			>;
			/**
			 * See [`Pallet::remove_whitelisted_call`].
			 **/
			removeWhitelistedCall: AugmentedSubmittable<
				(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * See [`Pallet::whitelist_call`].
			 **/
			whitelistCall: AugmentedSubmittable<
				(callHash: H256 | string | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[H256]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		xcmInterface: {
			/**
			 * See [`Pallet::transfer_statemine_assets`].
			 **/
			transferStatemineAssets: AugmentedSubmittable<
				(
					amount: u128 | AnyNumber | Uint8Array,
					assetId: u32 | AnyNumber | Uint8Array,
					dest: Option<AccountId32> | null | Uint8Array | AccountId32 | string,
				) => SubmittableExtrinsic<ApiType>,
				[u128, u32, Option<AccountId32>]
			>;
			/**
			 * See [`Pallet::update_xcm_dest_weight_and_fee`].
			 **/
			updateXcmDestWeightAndFee: AugmentedSubmittable<
				(
					updates:
						| Vec<
								ITuple<
									[
										TanglePrimitivesCurrencyCurrencyId,
										TanglePrimitivesXcmOperationType,
										SpWeightsWeightV2Weight,
										u128,
									]
								>
						  >
						| [
								(
									| TanglePrimitivesCurrencyCurrencyId
									| { Native: any }
									| { Lst: any }
									| { Token: any }
									| { Stable: any }
									| { VSToken: any }
									| { VSBond: any }
									| { LPToken: any }
									| { ForeignAsset: any }
									| { Token2: any }
									| { Lst2: any }
									| { VSToken2: any }
									| { VSBond2: any }
									| { StableLpToken: any }
									| { BLP: any }
									| { Lend: any }
									| string
									| Uint8Array
								),
								(
									| TanglePrimitivesXcmOperationType
									| 'UmpContributeTransact'
									| 'StatemineTransfer'
									| 'Bond'
									| 'WithdrawUnbonded'
									| 'BondExtra'
									| 'Unbond'
									| 'Rebond'
									| 'Delegate'
									| 'Payout'
									| 'Liquidize'
									| 'TransferBack'
									| 'TransferTo'
									| 'Chill'
									| 'Undelegate'
									| 'CancelLeave'
									| 'XtokensTransferBack'
									| 'ExecuteLeave'
									| 'ConvertAsset'
									| 'Vote'
									| 'RemoveVote'
									| 'Any'
									| 'SupplementaryFee'
									| number
									| Uint8Array
								),
								SpWeightsWeightV2Weight | { refTime?: any; proofSize?: any } | string | Uint8Array,
								u128 | AnyNumber | Uint8Array,
						  ][],
				) => SubmittableExtrinsic<ApiType>,
				[
					Vec<
						ITuple<
							[
								TanglePrimitivesCurrencyCurrencyId,
								TanglePrimitivesXcmOperationType,
								SpWeightsWeightV2Weight,
								u128,
							]
						>
					>,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		xcmpQueue: {
			/**
			 * See [`Pallet::resume_xcm_execution`].
			 **/
			resumeXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::service_overweight`].
			 **/
			serviceOverweight: AugmentedSubmittable<
				(
					index: u64 | AnyNumber | Uint8Array,
					weightLimit:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u64, SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::suspend_xcm_execution`].
			 **/
			suspendXcmExecution: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
			/**
			 * See [`Pallet::update_drop_threshold`].
			 **/
			updateDropThreshold: AugmentedSubmittable<
				(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::update_resume_threshold`].
			 **/
			updateResumeThreshold: AugmentedSubmittable<
				(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::update_suspend_threshold`].
			 **/
			updateSuspendThreshold: AugmentedSubmittable<
				(updated: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See [`Pallet::update_threshold_weight`].
			 **/
			updateThresholdWeight: AugmentedSubmittable<
				(
					updated:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::update_weight_restrict_decay`].
			 **/
			updateWeightRestrictDecay: AugmentedSubmittable<
				(
					updated:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[SpWeightsWeightV2Weight]
			>;
			/**
			 * See [`Pallet::update_xcmp_max_individual_weight`].
			 **/
			updateXcmpMaxIndividualWeight: AugmentedSubmittable<
				(
					updated:
						| SpWeightsWeightV2Weight
						| { refTime?: any; proofSize?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[SpWeightsWeightV2Weight]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		xTokens: {
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					destWeightLimit:
						| XcmV3WeightLimit
						| { Unlimited: any }
						| { Limited: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[TanglePrimitivesCurrencyCurrencyId, u128, XcmVersionedMultiLocation, XcmV3WeightLimit]
			>;
			/**
			 * See [`Pallet::transfer_multiasset`].
			 **/
			transferMultiasset: AugmentedSubmittable<
				(
					asset: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array,
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					destWeightLimit:
						| XcmV3WeightLimit
						| { Unlimited: any }
						| { Limited: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedMultiAsset, XcmVersionedMultiLocation, XcmV3WeightLimit]
			>;
			/**
			 * See [`Pallet::transfer_multiassets`].
			 **/
			transferMultiassets: AugmentedSubmittable<
				(
					assets: XcmVersionedMultiAssets | { V2: any } | { V3: any } | string | Uint8Array,
					feeItem: u32 | AnyNumber | Uint8Array,
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					destWeightLimit:
						| XcmV3WeightLimit
						| { Unlimited: any }
						| { Limited: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[XcmVersionedMultiAssets, u32, XcmVersionedMultiLocation, XcmV3WeightLimit]
			>;
			/**
			 * See [`Pallet::transfer_multiasset_with_fee`].
			 **/
			transferMultiassetWithFee: AugmentedSubmittable<
				(
					asset: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array,
					fee: XcmVersionedMultiAsset | { V2: any } | { V3: any } | string | Uint8Array,
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					destWeightLimit:
						| XcmV3WeightLimit
						| { Unlimited: any }
						| { Limited: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					XcmVersionedMultiAsset,
					XcmVersionedMultiAsset,
					XcmVersionedMultiLocation,
					XcmV3WeightLimit,
				]
			>;
			/**
			 * See [`Pallet::transfer_multicurrencies`].
			 **/
			transferMulticurrencies: AugmentedSubmittable<
				(
					currencies:
						| Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, u128]>>
						| [
								(
									| TanglePrimitivesCurrencyCurrencyId
									| { Native: any }
									| { Lst: any }
									| { Token: any }
									| { Stable: any }
									| { VSToken: any }
									| { VSBond: any }
									| { LPToken: any }
									| { ForeignAsset: any }
									| { Token2: any }
									| { Lst2: any }
									| { VSToken2: any }
									| { VSBond2: any }
									| { StableLpToken: any }
									| { BLP: any }
									| { Lend: any }
									| string
									| Uint8Array
								),
								u128 | AnyNumber | Uint8Array,
						  ][],
					feeItem: u32 | AnyNumber | Uint8Array,
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					destWeightLimit:
						| XcmV3WeightLimit
						| { Unlimited: any }
						| { Limited: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					Vec<ITuple<[TanglePrimitivesCurrencyCurrencyId, u128]>>,
					u32,
					XcmVersionedMultiLocation,
					XcmV3WeightLimit,
				]
			>;
			/**
			 * See [`Pallet::transfer_with_fee`].
			 **/
			transferWithFee: AugmentedSubmittable<
				(
					currencyId:
						| TanglePrimitivesCurrencyCurrencyId
						| { Native: any }
						| { Lst: any }
						| { Token: any }
						| { Stable: any }
						| { VSToken: any }
						| { VSBond: any }
						| { LPToken: any }
						| { ForeignAsset: any }
						| { Token2: any }
						| { Lst2: any }
						| { VSToken2: any }
						| { VSBond2: any }
						| { StableLpToken: any }
						| { BLP: any }
						| { Lend: any }
						| string
						| Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					fee: u128 | AnyNumber | Uint8Array,
					dest: XcmVersionedMultiLocation | { V2: any } | { V3: any } | string | Uint8Array,
					destWeightLimit:
						| XcmV3WeightLimit
						| { Unlimited: any }
						| { Limited: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					TanglePrimitivesCurrencyCurrencyId,
					u128,
					u128,
					XcmVersionedMultiLocation,
					XcmV3WeightLimit,
				]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		zenlinkProtocol: {
			/**
			 * See [`Pallet::add_liquidity`].
			 **/
			addLiquidity: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					amount0Desired: Compact<u128> | AnyNumber | Uint8Array,
					amount1Desired: Compact<u128> | AnyNumber | Uint8Array,
					amount0Min: Compact<u128> | AnyNumber | Uint8Array,
					amount1Min: Compact<u128> | AnyNumber | Uint8Array,
					deadline: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					ZenlinkProtocolPrimitivesAssetId,
					ZenlinkProtocolPrimitivesAssetId,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Compact<u32>,
				]
			>;
			/**
			 * See [`Pallet::bootstrap_charge_reward`].
			 **/
			bootstrapChargeReward: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					chargeRewards:
						| Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>
						| [
								(
									| ZenlinkProtocolPrimitivesAssetId
									| { chainId?: any; assetType?: any; assetIndex?: any }
									| string
									| Uint8Array
								),
								u128 | AnyNumber | Uint8Array,
						  ][],
				) => SubmittableExtrinsic<ApiType>,
				[
					ZenlinkProtocolPrimitivesAssetId,
					ZenlinkProtocolPrimitivesAssetId,
					Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::bootstrap_claim`].
			 **/
			bootstrapClaim: AugmentedSubmittable<
				(
					recipient:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					deadline: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					MultiAddress,
					ZenlinkProtocolPrimitivesAssetId,
					ZenlinkProtocolPrimitivesAssetId,
					Compact<u32>,
				]
			>;
			/**
			 * See [`Pallet::bootstrap_contribute`].
			 **/
			bootstrapContribute: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					amount0Contribute: Compact<u128> | AnyNumber | Uint8Array,
					amount1Contribute: Compact<u128> | AnyNumber | Uint8Array,
					deadline: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					ZenlinkProtocolPrimitivesAssetId,
					ZenlinkProtocolPrimitivesAssetId,
					Compact<u128>,
					Compact<u128>,
					Compact<u32>,
				]
			>;
			/**
			 * See [`Pallet::bootstrap_create`].
			 **/
			bootstrapCreate: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					targetSupply0: Compact<u128> | AnyNumber | Uint8Array,
					targetSupply1: Compact<u128> | AnyNumber | Uint8Array,
					capacitySupply0: Compact<u128> | AnyNumber | Uint8Array,
					capacitySupply1: Compact<u128> | AnyNumber | Uint8Array,
					end: Compact<u32> | AnyNumber | Uint8Array,
					rewards:
						| Vec<ZenlinkProtocolPrimitivesAssetId>
						| (
								| ZenlinkProtocolPrimitivesAssetId
								| { chainId?: any; assetType?: any; assetIndex?: any }
								| string
								| Uint8Array
						  )[],
					limits:
						| Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>
						| [
								(
									| ZenlinkProtocolPrimitivesAssetId
									| { chainId?: any; assetType?: any; assetIndex?: any }
									| string
									| Uint8Array
								),
								u128 | AnyNumber | Uint8Array,
						  ][],
				) => SubmittableExtrinsic<ApiType>,
				[
					ZenlinkProtocolPrimitivesAssetId,
					ZenlinkProtocolPrimitivesAssetId,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Compact<u32>,
					Vec<ZenlinkProtocolPrimitivesAssetId>,
					Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::bootstrap_end`].
			 **/
			bootstrapEnd: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]
			>;
			/**
			 * See [`Pallet::bootstrap_refund`].
			 **/
			bootstrapRefund: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]
			>;
			/**
			 * See [`Pallet::bootstrap_update`].
			 **/
			bootstrapUpdate: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					targetSupply0: Compact<u128> | AnyNumber | Uint8Array,
					targetSupply1: Compact<u128> | AnyNumber | Uint8Array,
					capacitySupply0: Compact<u128> | AnyNumber | Uint8Array,
					capacitySupply1: Compact<u128> | AnyNumber | Uint8Array,
					end: Compact<u32> | AnyNumber | Uint8Array,
					rewards:
						| Vec<ZenlinkProtocolPrimitivesAssetId>
						| (
								| ZenlinkProtocolPrimitivesAssetId
								| { chainId?: any; assetType?: any; assetIndex?: any }
								| string
								| Uint8Array
						  )[],
					limits:
						| Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>
						| [
								(
									| ZenlinkProtocolPrimitivesAssetId
									| { chainId?: any; assetType?: any; assetIndex?: any }
									| string
									| Uint8Array
								),
								u128 | AnyNumber | Uint8Array,
						  ][],
				) => SubmittableExtrinsic<ApiType>,
				[
					ZenlinkProtocolPrimitivesAssetId,
					ZenlinkProtocolPrimitivesAssetId,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					Compact<u32>,
					Vec<ZenlinkProtocolPrimitivesAssetId>,
					Vec<ITuple<[ZenlinkProtocolPrimitivesAssetId, u128]>>,
				]
			>;
			/**
			 * See [`Pallet::bootstrap_withdraw_reward`].
			 **/
			bootstrapWithdrawReward: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					recipient:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId, MultiAddress]
			>;
			/**
			 * See [`Pallet::create_pair`].
			 **/
			createPair: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[ZenlinkProtocolPrimitivesAssetId, ZenlinkProtocolPrimitivesAssetId]
			>;
			/**
			 * See [`Pallet::remove_liquidity`].
			 **/
			removeLiquidity: AugmentedSubmittable<
				(
					asset0:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					asset1:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					liquidity: Compact<u128> | AnyNumber | Uint8Array,
					amount0Min: Compact<u128> | AnyNumber | Uint8Array,
					amount1Min: Compact<u128> | AnyNumber | Uint8Array,
					recipient:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					deadline: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					ZenlinkProtocolPrimitivesAssetId,
					ZenlinkProtocolPrimitivesAssetId,
					Compact<u128>,
					Compact<u128>,
					Compact<u128>,
					MultiAddress,
					Compact<u32>,
				]
			>;
			/**
			 * See [`Pallet::set_fee_point`].
			 **/
			setFeePoint: AugmentedSubmittable<
				(feePoint: u8 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u8]
			>;
			/**
			 * See [`Pallet::set_fee_receiver`].
			 **/
			setFeeReceiver: AugmentedSubmittable<
				(
					sendTo:
						| Option<MultiAddress>
						| null
						| Uint8Array
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string,
				) => SubmittableExtrinsic<ApiType>,
				[Option<MultiAddress>]
			>;
			/**
			 * See [`Pallet::swap_assets_for_exact_assets`].
			 **/
			swapAssetsForExactAssets: AugmentedSubmittable<
				(
					amountOut: Compact<u128> | AnyNumber | Uint8Array,
					amountInMax: Compact<u128> | AnyNumber | Uint8Array,
					path:
						| Vec<ZenlinkProtocolPrimitivesAssetId>
						| (
								| ZenlinkProtocolPrimitivesAssetId
								| { chainId?: any; assetType?: any; assetIndex?: any }
								| string
								| Uint8Array
						  )[],
					recipient:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					deadline: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					Compact<u128>,
					Compact<u128>,
					Vec<ZenlinkProtocolPrimitivesAssetId>,
					MultiAddress,
					Compact<u32>,
				]
			>;
			/**
			 * See [`Pallet::swap_exact_assets_for_assets`].
			 **/
			swapExactAssetsForAssets: AugmentedSubmittable<
				(
					amountIn: Compact<u128> | AnyNumber | Uint8Array,
					amountOutMin: Compact<u128> | AnyNumber | Uint8Array,
					path:
						| Vec<ZenlinkProtocolPrimitivesAssetId>
						| (
								| ZenlinkProtocolPrimitivesAssetId
								| { chainId?: any; assetType?: any; assetIndex?: any }
								| string
								| Uint8Array
						  )[],
					recipient:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					deadline: Compact<u32> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[
					Compact<u128>,
					Compact<u128>,
					Vec<ZenlinkProtocolPrimitivesAssetId>,
					MultiAddress,
					Compact<u32>,
				]
			>;
			/**
			 * See [`Pallet::transfer`].
			 **/
			transfer: AugmentedSubmittable<
				(
					assetId:
						| ZenlinkProtocolPrimitivesAssetId
						| { chainId?: any; assetType?: any; assetIndex?: any }
						| string
						| Uint8Array,
					recipient:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
					amount: Compact<u128> | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[ZenlinkProtocolPrimitivesAssetId, MultiAddress, Compact<u128>]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		zenlinkStableAMM: {
			/**
			 * See `Pallet::add_liquidity`.
			 **/
			addLiquidity: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					amounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					minMintAmount: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u128>, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::add_pool_and_base_pool_liquidity`.
			 **/
			addPoolAndBasePoolLiquidity: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					basePoolId: u32 | AnyNumber | Uint8Array,
					metaAmounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					baseAmounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					minToMint: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, Vec<u128>, Vec<u128>, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::create_base_pool`.
			 **/
			createBasePool: AugmentedSubmittable<
				(
					currencyIds:
						| Vec<TanglePrimitivesCurrencyCurrencyId>
						| (
								| TanglePrimitivesCurrencyCurrencyId
								| { Native: any }
								| { Lst: any }
								| { Token: any }
								| { Stable: any }
								| { VSToken: any }
								| { VSBond: any }
								| { LPToken: any }
								| { ForeignAsset: any }
								| { Token2: any }
								| { Lst2: any }
								| { VSToken2: any }
								| { VSBond2: any }
								| { StableLpToken: any }
								| { BLP: any }
								| { Lend: any }
								| string
								| Uint8Array
						  )[],
					currencyDecimals: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					a: u128 | AnyNumber | Uint8Array,
					fee: u128 | AnyNumber | Uint8Array,
					adminFee: u128 | AnyNumber | Uint8Array,
					adminFeeReceiver: AccountId32 | string | Uint8Array,
					lpCurrencySymbol: Bytes | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Vec<TanglePrimitivesCurrencyCurrencyId>, Vec<u32>, u128, u128, u128, AccountId32, Bytes]
			>;
			/**
			 * See `Pallet::create_meta_pool`.
			 **/
			createMetaPool: AugmentedSubmittable<
				(
					currencyIds:
						| Vec<TanglePrimitivesCurrencyCurrencyId>
						| (
								| TanglePrimitivesCurrencyCurrencyId
								| { Native: any }
								| { Lst: any }
								| { Token: any }
								| { Stable: any }
								| { VSToken: any }
								| { VSBond: any }
								| { LPToken: any }
								| { ForeignAsset: any }
								| { Token2: any }
								| { Lst2: any }
								| { VSToken2: any }
								| { VSBond2: any }
								| { StableLpToken: any }
								| { BLP: any }
								| { Lend: any }
								| string
								| Uint8Array
						  )[],
					currencyDecimals: Vec<u32> | (u32 | AnyNumber | Uint8Array)[],
					a: u128 | AnyNumber | Uint8Array,
					fee: u128 | AnyNumber | Uint8Array,
					adminFee: u128 | AnyNumber | Uint8Array,
					adminFeeReceiver: AccountId32 | string | Uint8Array,
					lpCurrencySymbol: Bytes | string | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[Vec<TanglePrimitivesCurrencyCurrencyId>, Vec<u32>, u128, u128, u128, AccountId32, Bytes]
			>;
			/**
			 * See `Pallet::ramp_a`.
			 **/
			rampA: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					futureA: u128 | AnyNumber | Uint8Array,
					futureATime: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, u128]
			>;
			/**
			 * See `Pallet::remove_liquidity`.
			 **/
			removeLiquidity: AugmentedSubmittable<
				(
					pooId: u32 | AnyNumber | Uint8Array,
					lpAmount: u128 | AnyNumber | Uint8Array,
					minAmounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, Vec<u128>, AccountId32, u32]
			>;
			/**
			 * See `Pallet::remove_liquidity_imbalance`.
			 **/
			removeLiquidityImbalance: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					amounts: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					maxBurnAmount: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, Vec<u128>, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::remove_liquidity_one_currency`.
			 **/
			removeLiquidityOneCurrency: AugmentedSubmittable<
				(
					pooId: u32 | AnyNumber | Uint8Array,
					lpAmount: u128 | AnyNumber | Uint8Array,
					index: u32 | AnyNumber | Uint8Array,
					minAmount: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128, u32, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::remove_pool_and_base_pool_liquidity`.
			 **/
			removePoolAndBasePoolLiquidity: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					basePoolId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					minAmountsMeta: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					minAmountsBase: Vec<u128> | (u128 | AnyNumber | Uint8Array)[],
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u128, Vec<u128>, Vec<u128>, AccountId32, u32]
			>;
			/**
			 * See `Pallet::remove_pool_and_base_pool_liquidity_one_currency`.
			 **/
			removePoolAndBasePoolLiquidityOneCurrency: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					basePoolId: u32 | AnyNumber | Uint8Array,
					amount: u128 | AnyNumber | Uint8Array,
					i: u32 | AnyNumber | Uint8Array,
					minAmount: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u128, u32, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::set_admin_fee`.
			 **/
			setAdminFee: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					newAdminFee: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128]
			>;
			/**
			 * See `Pallet::set_swap_fee`.
			 **/
			setSwapFee: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					newSwapFee: u128 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u128]
			>;
			/**
			 * See `Pallet::stop_ramp_a`.
			 **/
			stopRampA: AugmentedSubmittable<
				(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * See `Pallet::swap`.
			 **/
			swap: AugmentedSubmittable<
				(
					pooId: u32 | AnyNumber | Uint8Array,
					fromIndex: u32 | AnyNumber | Uint8Array,
					toIndex: u32 | AnyNumber | Uint8Array,
					inAmount: u128 | AnyNumber | Uint8Array,
					minOutAmount: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u32, u128, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::swap_meta_pool_underlying`.
			 **/
			swapMetaPoolUnderlying: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					inIndex: u32 | AnyNumber | Uint8Array,
					outIndex: u32 | AnyNumber | Uint8Array,
					dx: u128 | AnyNumber | Uint8Array,
					minDy: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u32, u128, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::swap_pool_from_base`.
			 **/
			swapPoolFromBase: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					basePoolId: u32 | AnyNumber | Uint8Array,
					inIndex: u32 | AnyNumber | Uint8Array,
					outIndex: u32 | AnyNumber | Uint8Array,
					dx: u128 | AnyNumber | Uint8Array,
					minDy: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u32, u32, u128, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::swap_pool_to_base`.
			 **/
			swapPoolToBase: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					basePoolId: u32 | AnyNumber | Uint8Array,
					inIndex: u32 | AnyNumber | Uint8Array,
					outIndex: u32 | AnyNumber | Uint8Array,
					dx: u128 | AnyNumber | Uint8Array,
					minDy: u128 | AnyNumber | Uint8Array,
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, u32, u32, u32, u128, u128, AccountId32, u32]
			>;
			/**
			 * See `Pallet::update_fee_receiver`.
			 **/
			updateFeeReceiver: AugmentedSubmittable<
				(
					poolId: u32 | AnyNumber | Uint8Array,
					feeReceiver:
						| MultiAddress
						| { Id: any }
						| { Index: any }
						| { Raw: any }
						| { Address32: any }
						| { Address20: any }
						| string
						| Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u32, MultiAddress]
			>;
			/**
			 * See `Pallet::withdraw_admin_fee`.
			 **/
			withdrawAdminFee: AugmentedSubmittable<
				(poolId: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>,
				[u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
		zenlinkSwapRouter: {
			/**
			 * See [`Pallet::swap_exact_token_for_tokens_through_stable_pool`].
			 **/
			swapExactTokenForTokensThroughStablePool: AugmentedSubmittable<
				(
					amountIn: u128 | AnyNumber | Uint8Array,
					amountOutMin: u128 | AnyNumber | Uint8Array,
					routes:
						| Vec<ZenlinkSwapRouterRoute>
						| (ZenlinkSwapRouterRoute | { Stable: any } | { Normal: any } | string | Uint8Array)[],
					to: AccountId32 | string | Uint8Array,
					deadline: u32 | AnyNumber | Uint8Array,
				) => SubmittableExtrinsic<ApiType>,
				[u128, u128, Vec<ZenlinkSwapRouterRoute>, AccountId32, u32]
			>;
			/**
			 * Generic tx
			 **/
			[key: string]: SubmittableExtrinsicFunction<ApiType>;
		};
	} // AugmentedSubmittables
} // declare module
