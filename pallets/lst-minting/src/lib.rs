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
#![cfg_attr(not(feature = "std"), no_std)]

#[cfg(test)]
mod mock;

#[cfg(test)]
mod tests;

#[cfg(feature = "runtime-benchmarks")]
mod benchmarking;

// pub mod agents;
pub mod traits;

pub mod weights;
use frame_support::traits::fungibles::Create;
use frame_support::traits::nonfungibles;
use frame_support::{
	pallet_prelude::*,
	sp_runtime::{
		traits::{
			AccountIdConversion, CheckedAdd, CheckedSub, Saturating, UniqueSaturatedInto, Zero,
		},
		ArithmeticError, DispatchError, Permill, SaturatedConversion,
	},
	transactional, BoundedVec, PalletId,
};
use frame_system::pallet_prelude::*;
use log;
use orml_traits::arithmetic::One;
use orml_traits::MultiCurrency;
pub use pallet::*;
use sp_core::U256;
use sp_std::{vec, vec::Vec};
use tangle_primitives::{
	CurrencyId, CurrencyIdConversion, CurrencyIdExt, CurrencyIdRegister, LstMintRedeemProvider,
	LstMintingInterface, LstMintingOperator, LstSupplyProvider, RedeemType, SlpOperator,
	SlpxOperator, TimeUnit,
};
pub use traits::*;
pub use weights::WeightInfo;

pub type AccountIdOf<T> = <T as frame_system::Config>::AccountId;

pub type CurrencyIdOf<T> = <<T as Config>::MultiCurrency as MultiCurrency<
	<T as frame_system::Config>::AccountId,
>>::CurrencyId;

pub type AssetIdOf<T> =
	<<T as Config>::AssetsHandler as frame_support::traits::fungibles::Inspect<
		<T as frame_system::Config>::AccountId,
	>>::AssetId;

pub type BalanceOf<T> = <<T as Config>::MultiCurrency as MultiCurrency<AccountIdOf<T>>>::Balance;

pub type UnlockId = u32;

#[frame_support::pallet]
pub mod pallet {
	use super::*;
	use frame_support::pallet_prelude::DispatchResultWithPostInfo;
	use frame_support::traits::fungibles;
	use orml_traits::XcmTransfer;
	use tangle_primitives::{currency::TNT, FIL};
	use xcm::{prelude::*, v3::MultiLocation};

	#[pallet::pallet]
	#[pallet::without_storage_info]
	pub struct Pallet<T>(_);

	#[pallet::config]
	pub trait Config: frame_system::Config {
		type RuntimeEvent: From<Event<Self>> + IsType<<Self as frame_system::Config>::RuntimeEvent>;

		type MultiCurrency: MultiCurrency<AccountIdOf<Self>, CurrencyId = CurrencyId>;
		// + MultiReservableCurrency<AccountIdOf<Self>, CurrencyId = CurrencyId>;

		/// The only origin that can edit token issuer list
		type ControlOrigin: EnsureOrigin<Self::RuntimeOrigin>;

		/// Handler to notify the runtime when redeem success
		/// If you don't need it, you can specify the type `()`.
		type OnRedeemSuccess: OnRedeemSuccess<
			AccountIdOf<Self>,
			CurrencyIdOf<Self>,
			BalanceOf<Self>,
		>;

		/// xtokens xcm transfer interface
		type XcmTransfer: XcmTransfer<AccountIdOf<Self>, BalanceOf<Self>, CurrencyIdOf<Self>>;

		/// The amount of mint
		#[pallet::constant]
		type MaximumUnlockIdOfUser: Get<u32>;

		#[pallet::constant]
		type MaximumUnlockIdOfTimeUnit: Get<u32>;

		#[pallet::constant]
		type EntranceAccount: Get<PalletId>;

		#[pallet::constant]
		type ExitAccount: Get<PalletId>;

		#[pallet::constant]
		type FeeAccount: Get<Self::AccountId>;

		#[pallet::constant]
		type RelayChainToken: Get<CurrencyId>;

		#[pallet::constant]
		type AstarParachainId: Get<u32>;

		#[pallet::constant]
		type MoonbeamParachainId: Get<u32>;

		#[pallet::constant]
		type HydradxParachainId: Get<u32>;

		#[pallet::constant]
		type InterlayParachainId: Get<u32>;

		#[pallet::constant]
		type MantaParachainId: Get<u32>;

		type TangleSlp: SlpOperator<CurrencyId>;

		type TangleSlpx: SlpxOperator<BalanceOf<Self>>;

		type CurrencyIdConversion: CurrencyIdConversion<CurrencyId>;

		type CurrencyIdRegister: CurrencyIdRegister<CurrencyId>;

		type ChannelCommission: LstMintRedeemProvider<CurrencyId, BalanceOf<Self>>;

		type AssetsHandler: fungibles::Inspect<Self::AccountId> + fungibles::Create<Self::AccountId>;

		type NftsHandler: nonfungibles::Inspect<Self::AccountId> + fungibles::Create<Self::AccountId>;

		/// Set default weight.
		type WeightInfo: WeightInfo;
	}

	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		Minted {
			address: AccountIdOf<T>,
			token_id: CurrencyIdOf<T>,
			token_amount: BalanceOf<T>,
			Lst_amount: BalanceOf<T>,
			fee: BalanceOf<T>,
			remark: BoundedVec<u8, ConstU32<32>>,
		},
		Redeemed {
			address: AccountIdOf<T>,
			token_id: CurrencyIdOf<T>,
			token_amount: BalanceOf<T>,
			Lst_amount: BalanceOf<T>,
			fee: BalanceOf<T>,
			unlock_id: UnlockId,
		},
		RedeemSuccess {
			unlock_id: UnlockId,
			token_id: CurrencyIdOf<T>,
			to: AccountIdOf<T>,
			token_amount: BalanceOf<T>,
		},
		Rebonded {
			address: AccountIdOf<T>,
			token_id: CurrencyIdOf<T>,
			token_amount: BalanceOf<T>,
			Lst_amount: BalanceOf<T>,
			fee: BalanceOf<T>,
		},
		RebondedByUnlockId {
			address: AccountIdOf<T>,
			token_id: CurrencyIdOf<T>,
			token_amount: BalanceOf<T>,
			Lst_amount: BalanceOf<T>,
			fee: BalanceOf<T>,
			unlock_id: UnlockId,
		},
		UnlockDurationSet {
			token_id: CurrencyIdOf<T>,
			unlock_duration: TimeUnit,
		},
		MinimumMintSet {
			token_id: CurrencyIdOf<T>,
			amount: BalanceOf<T>,
		},
		MinimumRedeemSet {
			token_id: CurrencyIdOf<T>,
			amount: BalanceOf<T>,
		},
		SupportRebondTokenAdded {
			token_id: CurrencyIdOf<T>,
		},
		SupportRebondTokenRemoved {
			token_id: CurrencyIdOf<T>,
		},
		/// Several fees has been set.
		FeeSet {
			mint_fee: Permill,
			redeem_fee: Permill,
			// hosting_fee: BalanceOf<T>,
		},
		HookIterationLimitSet {
			limit: u32,
		},
		UnlockingTotalSet {
			token_id: CurrencyIdOf<T>,
			amount: BalanceOf<T>,
		},
		MinTimeUnitSet {
			token_id: CurrencyIdOf<T>,
			time_unit: TimeUnit,
		},
		FastRedeemFailed {
			err: DispatchError,
		},
		CurrencyTimeUnitRecreated {
			token_id: CurrencyIdOf<T>,
			time_unit: TimeUnit,
		},
	}

	#[pallet::error]
	pub enum Error<T> {
		BelowMinimumMint,
		BelowMinimumRedeem,
		/// Invalid token to rebond.
		InvalidRebondToken,
		/// Token type not support.
		NotSupportTokenType,
		NotEnoughBalanceToUnlock,
		TokenToRebondNotZero,
		OngoingTimeUnitNotSet,
		TokenUnlockLedgerNotFound,
		UserUnlockLedgerNotFound,
		TimeUnitUnlockLedgerNotFound,
		UnlockDurationNotFound,
		Unexpected,
		CalculationOverflow,
		ExceedMaximumUnlockId,
		TooManyRedeems,
		CanNotRedeem,
		CanNotRebond,
		InvalidValidator,
	}

	#[pallet::storage]
	#[pallet::getter(fn fees)]
	pub type Fees<T: Config> = StorageValue<_, (Permill, Permill), ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn token_pool)]
	pub type TokenPool<T: Config> =
		StorageMap<_, Twox64Concat, CurrencyIdOf<T>, BalanceOf<T>, ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn unlock_duration)]
	pub type UnlockDuration<T: Config> = StorageMap<_, Twox64Concat, CurrencyIdOf<T>, TimeUnit>;

	#[pallet::storage]
	#[pallet::getter(fn ongoing_time_unit)]
	pub type OngoingTimeUnit<T: Config> = StorageMap<_, Twox64Concat, CurrencyIdOf<T>, TimeUnit>;

	#[pallet::storage]
	#[pallet::getter(fn minimum_mint)]
	pub type MinimumMint<T: Config> =
		StorageMap<_, Twox64Concat, CurrencyIdOf<T>, BalanceOf<T>, ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn minimum_redeem)]
	pub type MinimumRedeem<T: Config> =
		StorageMap<_, Twox64Concat, CurrencyIdOf<T>, BalanceOf<T>, ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn token_unlock_next_id)]
	pub type TokenUnlockNextId<T: Config> =
		StorageMap<_, Twox64Concat, CurrencyIdOf<T>, u32, ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn token_unlock_ledger)]
	pub type TokenUnlockLedger<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		CurrencyIdOf<T>,
		Blake2_128Concat,
		UnlockId,
		(T::AccountId, BalanceOf<T>, TimeUnit, RedeemType<AccountIdOf<T>>),
		OptionQuery,
	>;

	#[pallet::storage]
	#[pallet::getter(fn user_unlock_ledger)]
	pub type UserUnlockLedger<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		AccountIdOf<T>,
		Blake2_128Concat,
		CurrencyIdOf<T>,
		(BalanceOf<T>, BoundedVec<UnlockId, T::MaximumUnlockIdOfUser>),
		OptionQuery,
	>;

	#[pallet::storage]
	#[pallet::getter(fn time_unit_unlock_ledger)]
	pub type TimeUnitUnlockLedger<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		TimeUnit,
		Blake2_128Concat,
		CurrencyIdOf<T>,
		(BalanceOf<T>, BoundedVec<UnlockId, T::MaximumUnlockIdOfTimeUnit>, CurrencyIdOf<T>),
		OptionQuery,
	>;

	#[pallet::storage]
	#[pallet::getter(fn token_to_rebond)]
	pub type TokenToRebond<T: Config> = StorageMap<_, Twox64Concat, CurrencyIdOf<T>, BalanceOf<T>>;

	#[pallet::storage]
	#[pallet::getter(fn min_time_unit)]
	pub type MinTimeUnit<T: Config> =
		StorageMap<_, Twox64Concat, CurrencyIdOf<T>, TimeUnit, ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn unlocking_total)]
	pub type UnlockingTotal<T: Config> =
		StorageMap<_, Twox64Concat, CurrencyIdOf<T>, BalanceOf<T>, ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn hook_iteration_limit)]
	pub type HookIterationLimit<T: Config> = StorageValue<_, u32, ValueQuery>;

	#[pallet::storage]
	#[pallet::getter(fn validator_whitelist)]
	pub type ValidatorWhitelist<T: Config> =
		StorageMap<_, Blake2_128Concat, u32, Vec<T::AccountId>>;

	#[pallet::storage]
	#[pallet::getter(fn validator_assets)]
	pub type ValidatorAssets<T: Config> =
		StorageMap<_, Blake2_128Concat, Vec<T::AccountId>, AssetIdOf<T>>;

	#[pallet::storage]
	#[pallet::getter(fn next_asset_id)]
	pub type NextAssetId<T: Config> = StorageValue<_, AssetIdOf<T>>;

	#[pallet::hooks]
	impl<T: Config> Hooks<BlockNumberFor<T>> for Pallet<T> {
		fn on_initialize(_n: BlockNumberFor<T>) -> Weight {
			Self::handle_on_initialize()
				.map_err(|err| {
					Self::deposit_event(Event::FastRedeemFailed { err });
					log::error!(
						target: "runtime::Lst-minting",
						"Received invalid justification for {:?}",
						err,
					);
					err
				})
				.ok();

			T::WeightInfo::on_initialize()
		}
	}

	#[pallet::call]
	impl<T: Config> Pallet<T> {
		#[pallet::call_index(0)]
		#[pallet::weight(T::WeightInfo::mint())]
		pub fn mint(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			token_amount: BalanceOf<T>,
			channel_id: u32,
			validator: Vec<T::AccountId>,
		) -> DispatchResult {
			// Check origin
			let exchanger = ensure_signed(origin)?;
			Self::mint_inner(
				exchanger,
				token_id,
				token_amount,
				Default::default(),
				channel_id,
				validator,
			)
			.map(|_| ())
		}

		#[pallet::call_index(1)]
		#[pallet::weight(T::WeightInfo::redeem())]
		pub fn redeem(
			origin: OriginFor<T>,
			Lst_id: CurrencyIdOf<T>,
			Lst_amount: BalanceOf<T>,
		) -> DispatchResultWithPostInfo {
			let exchanger = ensure_signed(origin)?;
			Self::redeem_inner(exchanger, Lst_id, Lst_amount, RedeemType::Native)
		}

		#[pallet::call_index(2)]
		#[pallet::weight(T::WeightInfo::rebond())]
		pub fn rebond(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			token_amount: BalanceOf<T>,
		) -> DispatchResult {
			let exchanger = ensure_signed(origin)?;
			let Lst_id = T::CurrencyIdConversion::convert_to_Lst(token_id)
				.map_err(|_| Error::<T>::NotSupportTokenType)?;
			let _token_amount_to_rebond =
				Self::token_to_rebond(token_id).ok_or(Error::<T>::InvalidRebondToken)?;
			if let Some((user_unlock_amount, mut ledger_list)) =
				Self::user_unlock_ledger(&exchanger, token_id)
			{
				ensure!(user_unlock_amount >= token_amount, Error::<T>::NotEnoughBalanceToUnlock);
				let mut tmp_amount = token_amount;
				let ledger_list_rev: Vec<UnlockId> = ledger_list.into_iter().rev().collect();
				ledger_list =
					BoundedVec::<UnlockId, T::MaximumUnlockIdOfUser>::try_from(ledger_list_rev)
						.map_err(|_| Error::<T>::ExceedMaximumUnlockId)?;
				let mut tmp = ledger_list
					.iter()
					.map(|&index| -> Result<(UnlockId, bool), Error<T>> {
						if let Some((_, unlock_amount, time_unit, _)) =
							Self::token_unlock_ledger(token_id, index)
						{
							if tmp_amount >= unlock_amount {
								if let Some((_, _, time_unit, _)) =
									TokenUnlockLedger::<T>::take(&token_id, &index)
								{
									TimeUnitUnlockLedger::<T>::mutate_exists(
										&time_unit,
										&token_id,
										|value| -> Result<(), Error<T>> {
											if let Some((
												total_locked_origin,
												ledger_list_origin,
												_,
											)) = value
											{
												if total_locked_origin == &unlock_amount {
													*value = None;
													return Ok(());
												}
												*total_locked_origin = total_locked_origin
													.checked_sub(&unlock_amount)
													.ok_or(Error::<T>::CalculationOverflow)?;
												ledger_list_origin.retain(|&x| x != index);
											} else {
												return Err(
													Error::<T>::TimeUnitUnlockLedgerNotFound,
												);
											}
											Ok(())
										},
									)?;
									tmp_amount = tmp_amount.saturating_sub(unlock_amount);
								} else {
									return Err(Error::<T>::TokenUnlockLedgerNotFound.into());
								}
								Ok((index, false))
							} else {
								TokenUnlockLedger::<T>::mutate_exists(
									&token_id,
									&index,
									|value| -> Result<(), Error<T>> {
										if let Some((_, total_locked_origin, _, _)) = value {
											if total_locked_origin == &tmp_amount {
												*value = None;
												return Ok(());
											}
											*total_locked_origin = total_locked_origin
												.checked_sub(&tmp_amount)
												.ok_or(Error::<T>::CalculationOverflow)?;
										} else {
											return Err(Error::<T>::TokenUnlockLedgerNotFound);
										}
										Ok(())
									},
								)?;
								TimeUnitUnlockLedger::<T>::mutate_exists(
									&time_unit,
									&token_id,
									|value| -> Result<(), Error<T>> {
										if let Some((total_locked_origin, _, _)) = value {
											if total_locked_origin == &tmp_amount {
												*value = None;
												return Ok(());
											}
											*total_locked_origin = total_locked_origin
												.checked_sub(&tmp_amount)
												.ok_or(Error::<T>::CalculationOverflow)?;
										} else {
											return Err(Error::<T>::TimeUnitUnlockLedgerNotFound);
										}
										Ok(())
									},
								)?;
								Ok((index, true))
							}
						} else {
							Ok((index, true))
						}
					})
					.collect::<Result<Vec<(UnlockId, bool)>, Error<T>>>()?;
				tmp.retain(|(_index, result)| *result);

				let ledger_list_tmp: Vec<UnlockId> =
					tmp.into_iter().map(|(index, _)| index).rev().collect();

				ledger_list =
					BoundedVec::<UnlockId, T::MaximumUnlockIdOfUser>::try_from(ledger_list_tmp)
						.map_err(|_| Error::<T>::ExceedMaximumUnlockId)?;

				UnlockingTotal::<T>::mutate(&token_id, |pool| -> Result<(), Error<T>> {
					*pool =
						pool.checked_sub(&token_amount).ok_or(Error::<T>::CalculationOverflow)?;
					Ok(())
				})?;
				UserUnlockLedger::<T>::mutate_exists(
					&exchanger,
					&token_id,
					|value| -> Result<(), Error<T>> {
						if let Some((total_locked_origin, ledger_list_origin)) = value {
							if total_locked_origin == &token_amount {
								*value = None;
								return Ok(());
							}
							*ledger_list_origin = ledger_list;
							*total_locked_origin = total_locked_origin
								.checked_sub(&token_amount)
								.ok_or(Error::<T>::CalculationOverflow)?;
						} else {
							return Err(Error::<T>::UserUnlockLedgerNotFound);
						}
						Ok(())
					},
				)?;
			} else {
				return Err(Error::<T>::UserUnlockLedgerNotFound.into());
			}

			let (_, Lst_amount, fee) =
				Self::mint_without_tranfer(&exchanger, Lst_id, token_id, token_amount)?;

			TokenToRebond::<T>::mutate(&token_id, |value| -> Result<(), Error<T>> {
				if let Some(value_info) = value {
					*value_info = value_info
						.checked_add(&token_amount)
						.ok_or(Error::<T>::CalculationOverflow)?;
				} else {
					return Err(Error::<T>::InvalidRebondToken);
				}
				Ok(())
			})?;

			Self::deposit_event(Event::Rebonded {
				address: exchanger,
				token_id,
				token_amount,
				Lst_amount,
				fee,
			});
			Ok(())
		}

		#[pallet::call_index(3)]
		#[pallet::weight(T::WeightInfo::rebond_by_unlock_id())]
		pub fn rebond_by_unlock_id(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			unlock_id: UnlockId,
		) -> DispatchResult {
			let exchanger = ensure_signed(origin)?;

			let Lst_id = T::CurrencyIdConversion::convert_to_Lst(token_id)
				.map_err(|_| Error::<T>::NotSupportTokenType)?;
			let _token_amount_to_rebond =
				Self::token_to_rebond(token_id).ok_or(Error::<T>::InvalidRebondToken)?;

			let unlock_amount = match Self::token_unlock_ledger(token_id, unlock_id) {
				Some((who, unlock_amount, time_unit, _)) => {
					ensure!(who == exchanger, Error::<T>::CanNotRebond);
					TimeUnitUnlockLedger::<T>::mutate_exists(
						&time_unit,
						&token_id,
						|value| -> Result<(), Error<T>> {
							if let Some((total_locked_origin, ledger_list_origin, _)) = value {
								if total_locked_origin == &unlock_amount {
									*value = None;
									return Ok(());
								}
								*total_locked_origin = total_locked_origin
									.checked_sub(&unlock_amount)
									.ok_or(Error::<T>::CalculationOverflow)?;
								ledger_list_origin.retain(|&x| x != unlock_id);
							} else {
								return Err(Error::<T>::TimeUnitUnlockLedgerNotFound);
							}
							Ok(())
						},
					)?;

					UserUnlockLedger::<T>::mutate_exists(
						&who,
						&token_id,
						|value| -> Result<(), Error<T>> {
							if let Some((total_locked_origin, ledger_list_origin)) = value {
								if total_locked_origin == &unlock_amount {
									*value = None;
									return Ok(());
								}
								*total_locked_origin = total_locked_origin
									.checked_sub(&unlock_amount)
									.ok_or(Error::<T>::CalculationOverflow)?;
								ledger_list_origin.retain(|&x| x != unlock_id);
							} else {
								return Err(Error::<T>::UserUnlockLedgerNotFound);
							}
							Ok(())
						},
					)?;
					UnlockingTotal::<T>::mutate(&token_id, |pool| -> Result<(), Error<T>> {
						*pool = pool
							.checked_sub(&unlock_amount)
							.ok_or(Error::<T>::CalculationOverflow)?;
						Ok(())
					})?;

					TokenUnlockLedger::<T>::remove(&token_id, &unlock_id);
					unlock_amount
				},
				_ => return Err(Error::<T>::TokenUnlockLedgerNotFound.into()),
			};

			let (token_amount, Lst_amount, fee) =
				Self::mint_without_tranfer(&exchanger, Lst_id, token_id, unlock_amount)?;

			TokenToRebond::<T>::mutate(&token_id, |value| -> Result<(), Error<T>> {
				if let Some(value_info) = value {
					*value_info = value_info
						.checked_add(&token_amount)
						.ok_or(Error::<T>::CalculationOverflow)?;
				} else {
					return Err(Error::<T>::InvalidRebondToken);
				}
				Ok(())
			})?;

			Self::deposit_event(Event::RebondedByUnlockId {
				address: exchanger,
				token_id,
				token_amount: unlock_amount,
				Lst_amount,
				fee,
				unlock_id,
			});
			Ok(())
		}

		#[pallet::call_index(4)]
		#[pallet::weight(T::WeightInfo::set_unlock_duration())]
		pub fn set_unlock_duration(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			unlock_duration: TimeUnit,
		) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			UnlockDuration::<T>::mutate(token_id, |old_unlock_duration| {
				*old_unlock_duration = Some(unlock_duration.clone());
			});

			Self::deposit_event(Event::UnlockDurationSet { token_id, unlock_duration });

			Ok(())
		}

		#[pallet::call_index(5)]
		#[pallet::weight(T::WeightInfo::set_minimum_mint())]
		pub fn set_minimum_mint(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			amount: BalanceOf<T>,
		) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			if !MinimumMint::<T>::contains_key(token_id) {
				// mutate_exists
				MinimumMint::<T>::insert(token_id, amount);
			} else {
				MinimumMint::<T>::mutate(token_id, |old_amount| {
					*old_amount = amount;
				});
			}

			match token_id {
				CurrencyId::Token(token_symbol) => {
					if !T::CurrencyIdRegister::check_Lst_registered(token_symbol) {
						T::CurrencyIdRegister::register_Lst_metadata(token_symbol)?;
					}
				},
				CurrencyId::Token2(token_id) => {
					if !T::CurrencyIdRegister::check_Lst2_registered(token_id) {
						T::CurrencyIdRegister::register_Lst2_metadata(token_id)?;
					}
				},
				_ => (),
			}

			Self::deposit_event(Event::MinimumMintSet { token_id, amount });

			Ok(())
		}

		#[pallet::call_index(6)]
		#[pallet::weight(T::WeightInfo::set_minimum_redeem())]
		pub fn set_minimum_redeem(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			amount: BalanceOf<T>,
		) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			MinimumRedeem::<T>::mutate(token_id, |old_amount| {
				*old_amount = amount;
			});

			Self::deposit_event(Event::MinimumRedeemSet { token_id, amount });
			Ok(())
		}

		#[pallet::call_index(7)]
		#[pallet::weight(T::WeightInfo::add_support_rebond_token())]
		pub fn add_support_rebond_token(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
		) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			if !TokenToRebond::<T>::contains_key(token_id) {
				TokenToRebond::<T>::insert(token_id, BalanceOf::<T>::zero());
				Self::deposit_event(Event::SupportRebondTokenAdded { token_id });
			}

			Ok(())
		}

		#[pallet::call_index(8)]
		#[pallet::weight(T::WeightInfo::remove_support_rebond_token())]
		pub fn remove_support_rebond_token(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
		) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			if TokenToRebond::<T>::contains_key(token_id) {
				let token_amount_to_rebond =
					Self::token_to_rebond(token_id).ok_or(Error::<T>::InvalidRebondToken)?;
				ensure!(
					token_amount_to_rebond == BalanceOf::<T>::zero(),
					Error::<T>::TokenToRebondNotZero
				);

				TokenToRebond::<T>::remove(token_id);
				Self::deposit_event(Event::SupportRebondTokenRemoved { token_id });
			}
			Ok(())
		}

		#[pallet::call_index(9)]
		#[pallet::weight(T::WeightInfo::set_fees())]
		pub fn set_fees(
			origin: OriginFor<T>,
			mint_fee: Permill,
			redeem_fee: Permill,
		) -> DispatchResult {
			ensure_root(origin)?;

			Fees::<T>::mutate(|fees| *fees = (mint_fee, redeem_fee));

			Self::deposit_event(Event::FeeSet { mint_fee, redeem_fee });
			Ok(())
		}

		#[pallet::call_index(10)]
		#[pallet::weight(T::WeightInfo::set_hook_iteration_limit())]
		pub fn set_hook_iteration_limit(origin: OriginFor<T>, limit: u32) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			HookIterationLimit::<T>::mutate(|old_limit| {
				*old_limit = limit;
			});

			Self::deposit_event(Event::HookIterationLimitSet { limit });
			Ok(())
		}

		#[pallet::call_index(11)]
		#[pallet::weight(T::WeightInfo::set_unlocking_total())]
		pub fn set_unlocking_total(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			amount: BalanceOf<T>,
		) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			UnlockingTotal::<T>::mutate(&token_id, |unlocking_total| *unlocking_total = amount);

			Self::deposit_event(Event::UnlockingTotalSet { token_id, amount });
			Ok(())
		}

		#[pallet::call_index(12)]
		#[pallet::weight(T::WeightInfo::set_min_time_unit())]
		pub fn set_min_time_unit(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			time_unit: TimeUnit,
		) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			MinTimeUnit::<T>::mutate(&token_id, |old_time_unit| *old_time_unit = time_unit.clone());

			Self::deposit_event(Event::MinTimeUnitSet { token_id, time_unit });
			Ok(())
		}

		#[pallet::call_index(13)]
		#[pallet::weight(T::WeightInfo::recreate_currency_ongoing_time_unit())]
		pub fn recreate_currency_ongoing_time_unit(
			origin: OriginFor<T>,
			token_id: CurrencyIdOf<T>,
			time_unit: TimeUnit,
		) -> DispatchResult {
			T::ControlOrigin::ensure_origin(origin)?;

			OngoingTimeUnit::<T>::mutate(&token_id, |old_time_unit| {
				*old_time_unit = Some(time_unit.clone())
			});

			Self::deposit_event(Event::CurrencyTimeUnitRecreated { token_id, time_unit });
			Ok(())
		}
	}

	impl<T: Config> Pallet<T> {
		#[transactional]
		pub fn add_time_unit(a: TimeUnit, b: TimeUnit) -> Result<TimeUnit, DispatchError> {
			let result = match a {
				TimeUnit::Era(era_a) => match b {
					TimeUnit::Era(era_b) => TimeUnit::Era(
						era_a.checked_add(era_b).ok_or(Error::<T>::CalculationOverflow)?,
					),
					_ => return Err(Error::<T>::Unexpected.into()),
				},
				TimeUnit::Round(round_a) => match b {
					TimeUnit::Round(round_b) => TimeUnit::Round(
						round_a.checked_add(round_b).ok_or(Error::<T>::CalculationOverflow)?,
					),
					_ => return Err(Error::<T>::Unexpected.into()),
				},
				TimeUnit::SlashingSpan(slashing_span_a) => match b {
					TimeUnit::SlashingSpan(slashing_span_b) => TimeUnit::SlashingSpan(
						slashing_span_a
							.checked_add(slashing_span_b)
							.ok_or(Error::<T>::CalculationOverflow)?,
					),
					_ => return Err(Error::<T>::Unexpected.into()),
				},
				TimeUnit::Kblock(kblock_a) => match b {
					TimeUnit::Kblock(kblock_b) => TimeUnit::Kblock(
						kblock_a.checked_add(kblock_b).ok_or(Error::<T>::CalculationOverflow)?,
					),
					_ => return Err(Error::<T>::Unexpected.into()),
				},
				TimeUnit::Hour(hour_a) => match b {
					TimeUnit::Hour(hour_b) => TimeUnit::Hour(
						hour_a.checked_add(hour_b).ok_or(Error::<T>::CalculationOverflow)?,
					),
					_ => return Err(Error::<T>::Unexpected.into()),
				},
				// _ => return Err(Error::<T>::Unexpected.into()),
			};

			Ok(result)
		}

		#[transactional]
		pub fn mint_without_tranfer(
			exchanger: &AccountIdOf<T>,
			Lst_id: CurrencyId,
			token_id: CurrencyId,
			token_amount: BalanceOf<T>,
		) -> Result<(BalanceOf<T>, BalanceOf<T>, BalanceOf<T>), DispatchError> {
			let token_pool_amount = Self::token_pool(token_id);
			let Lst_total_issuance = T::MultiCurrency::total_issuance(Lst_id);
			let (mint_rate, _redeem_rate) = Fees::<T>::get();
			let mint_fee = mint_rate * token_amount;
			let token_amount_excluding_fee =
				token_amount.checked_sub(&mint_fee).ok_or(Error::<T>::CalculationOverflow)?;
			let mut Lst_amount = token_amount_excluding_fee;
			if token_pool_amount != BalanceOf::<T>::zero() {
				Lst_amount = U256::from(token_amount_excluding_fee.saturated_into::<u128>())
					.saturating_mul(Lst_total_issuance.saturated_into::<u128>().into())
					.checked_div(token_pool_amount.saturated_into::<u128>().into())
					.map(|x| u128::try_from(x))
					.ok_or(Error::<T>::CalculationOverflow)?
					.map_err(|_| Error::<T>::CalculationOverflow)?
					.unique_saturated_into();
			}

			// Charging fees
			T::MultiCurrency::transfer(token_id, exchanger, &T::FeeAccount::get(), mint_fee)?;
			// Issue the corresponding Lst to the user's account.
			T::MultiCurrency::deposit(Lst_id, exchanger, Lst_amount)?;
			TokenPool::<T>::mutate(&token_id, |pool| -> Result<(), Error<T>> {
				*pool = pool
					.checked_add(&token_amount_excluding_fee)
					.ok_or(Error::<T>::CalculationOverflow)?;
				Ok(())
			})?;
			Ok((token_amount_excluding_fee, Lst_amount, mint_fee))
		}

		#[transactional]
		fn on_initialize_update_ledger(
			token_id: CurrencyId,
			account: AccountIdOf<T>,
			index: &UnlockId,
			mut unlock_amount: BalanceOf<T>,
			entrance_account_balance: BalanceOf<T>,
			time_unit: TimeUnit,
			redeem_type: RedeemType<AccountIdOf<T>>,
		) -> DispatchResult {
			let ed = T::MultiCurrency::minimum_balance(token_id);
			let mut account_to_send = account.clone();

			if unlock_amount < ed {
				let receiver_balance = T::MultiCurrency::total_balance(token_id, &account);

				let receiver_balance_after = receiver_balance
					.checked_add(&unlock_amount)
					.ok_or(ArithmeticError::Overflow)?;
				if receiver_balance_after < ed {
					account_to_send = T::FeeAccount::get();
				}
			}
			if entrance_account_balance >= unlock_amount {
				T::MultiCurrency::transfer(
					token_id,
					&T::EntranceAccount::get().into_account_truncating(),
					&account_to_send,
					unlock_amount,
				)?;
				TokenUnlockLedger::<T>::remove(&token_id, &index);

				TimeUnitUnlockLedger::<T>::mutate_exists(
					&time_unit,
					&token_id,
					|value| -> Result<(), Error<T>> {
						if let Some((total_locked_origin, ledger_list_origin, _)) = value {
							if total_locked_origin == &unlock_amount {
								*value = None;
								return Ok(());
							}
							*total_locked_origin = total_locked_origin
								.checked_sub(&unlock_amount)
								.ok_or(Error::<T>::CalculationOverflow)?;
							ledger_list_origin.retain(|x| x != index);
						} else {
							return Err(Error::<T>::TimeUnitUnlockLedgerNotFound);
						}
						Ok(())
					},
				)?;

				UserUnlockLedger::<T>::mutate_exists(
					&account,
					&token_id,
					|value| -> Result<(), Error<T>> {
						if let Some((total_locked_origin, ledger_list_origin)) = value {
							if total_locked_origin == &unlock_amount {
								*value = None;
								return Ok(());
							}
							ledger_list_origin.retain(|x| x != index);
							*total_locked_origin = total_locked_origin
								.checked_sub(&unlock_amount)
								.ok_or(Error::<T>::CalculationOverflow)?;
						} else {
							return Err(Error::<T>::UserUnlockLedgerNotFound);
						}
						Ok(())
					},
				)?;
				match redeem_type {
					RedeemType::Native => {},
					RedeemType::Astar(receiver) => {
						let dest = MultiLocation {
							parents: 1,
							interior: X2(
								Parachain(T::AstarParachainId::get()),
								AccountId32 {
									network: None,
									id: receiver.encode().try_into().unwrap(),
								},
							),
						};
						T::XcmTransfer::transfer(
							account.clone(),
							token_id,
							unlock_amount,
							dest,
							Unlimited,
						)?;
					},
					RedeemType::Hydradx(receiver) => {
						let dest = MultiLocation {
							parents: 1,
							interior: X2(
								Parachain(T::HydradxParachainId::get()),
								AccountId32 {
									network: None,
									id: receiver.encode().try_into().unwrap(),
								},
							),
						};
						T::XcmTransfer::transfer(
							account.clone(),
							token_id,
							unlock_amount,
							dest,
							Unlimited,
						)?;
					},
					RedeemType::Interlay(receiver) => {
						let dest = MultiLocation {
							parents: 1,
							interior: X2(
								Parachain(T::InterlayParachainId::get()),
								AccountId32 {
									network: None,
									id: receiver.encode().try_into().unwrap(),
								},
							),
						};
						T::XcmTransfer::transfer(
							account.clone(),
							token_id,
							unlock_amount,
							dest,
							Unlimited,
						)?;
					},
					RedeemType::Manta(receiver) => {
						let dest = MultiLocation {
							parents: 1,
							interior: X2(
								Parachain(T::MantaParachainId::get()),
								AccountId32 {
									network: None,
									id: receiver.encode().try_into().unwrap(),
								},
							),
						};
						T::XcmTransfer::transfer(
							account.clone(),
							token_id,
							unlock_amount,
							dest,
							Unlimited,
						)?;
					},
					RedeemType::Moonbeam(receiver) => {
						let dest = MultiLocation {
							parents: 1,
							interior: X2(
								Parachain(T::MoonbeamParachainId::get()),
								AccountKey20 { network: None, key: receiver.to_fixed_bytes() },
							),
						};
						if token_id == FIL {
							let assets = vec![
								(token_id, unlock_amount),
								(TNT, T::TangleSlpx::get_moonbeam_transfer_to_fee()),
							];

							T::XcmTransfer::transfer_multicurrencies(
								account.clone(),
								assets,
								1,
								dest,
								Unlimited,
							)?;
						} else {
							T::XcmTransfer::transfer(
								account.clone(),
								token_id,
								unlock_amount,
								dest,
								Unlimited,
							)?;
						}
					},
				};
			} else {
				match redeem_type {
					RedeemType::Astar(_)
					| RedeemType::Moonbeam(_)
					| RedeemType::Hydradx(_)
					| RedeemType::Manta(_)
					| RedeemType::Interlay(_) => {
						return Ok(());
					},
					RedeemType::Native => {},
				};
				unlock_amount = entrance_account_balance;
				T::MultiCurrency::transfer(
					token_id,
					&T::EntranceAccount::get().into_account_truncating(),
					&account_to_send,
					unlock_amount,
				)?;
				TokenUnlockLedger::<T>::mutate_exists(
					&token_id,
					&index,
					|value| -> Result<(), Error<T>> {
						if let Some((_, total_locked_origin, _, _)) = value {
							if total_locked_origin == &unlock_amount {
								*value = None;
								return Ok(());
							}
							*total_locked_origin = total_locked_origin
								.checked_sub(&unlock_amount)
								.ok_or(Error::<T>::CalculationOverflow)?;
						} else {
							return Err(Error::<T>::TokenUnlockLedgerNotFound);
						}
						Ok(())
					},
				)?;

				TimeUnitUnlockLedger::<T>::mutate_exists(
					&time_unit,
					&token_id,
					|value| -> Result<(), Error<T>> {
						if let Some((total_locked_origin, _ledger_list_origin, _)) = value {
							if total_locked_origin == &unlock_amount {
								*value = None;
								return Ok(());
							}
							*total_locked_origin = total_locked_origin
								.checked_sub(&unlock_amount)
								.ok_or(Error::<T>::CalculationOverflow)?;
						} else {
							return Err(Error::<T>::TimeUnitUnlockLedgerNotFound);
						}
						Ok(())
					},
				)?;

				UserUnlockLedger::<T>::mutate_exists(
					&account,
					&token_id,
					|value| -> Result<(), Error<T>> {
						if let Some((total_locked_origin, _ledger_list_origin)) = value {
							if total_locked_origin == &unlock_amount {
								*value = None;
								return Ok(());
							}

							*total_locked_origin = total_locked_origin
								.checked_sub(&unlock_amount)
								.ok_or(Error::<T>::CalculationOverflow)?;
						} else {
							return Err(Error::<T>::UserUnlockLedgerNotFound);
						}
						Ok(())
					},
				)?;
			}

			entrance_account_balance
				.checked_sub(&unlock_amount)
				.ok_or(Error::<T>::CalculationOverflow)?;

			UnlockingTotal::<T>::mutate(&token_id, |pool| -> Result<(), Error<T>> {
				*pool = pool.checked_sub(&unlock_amount).ok_or(Error::<T>::CalculationOverflow)?;
				Ok(())
			})?;

			T::OnRedeemSuccess::on_redeem_success(token_id, account.clone(), unlock_amount);

			Self::deposit_event(Event::RedeemSuccess {
				unlock_id: *index,
				token_id,
				to: account_to_send,
				token_amount: unlock_amount,
			});
			Ok(())
		}

		#[transactional]
		fn handle_on_initialize() -> DispatchResult {
			for currency in OngoingTimeUnit::<T>::iter_keys() {
				Self::handle_ledger_by_currency(currency)?;
			}
			Ok(())
		}

		fn handle_ledger_by_currency(currency: CurrencyId) -> DispatchResult {
			let time_unit = MinTimeUnit::<T>::get(currency);
			let unlock_duration_elem = match UnlockDuration::<T>::get(currency) {
				Some(TimeUnit::Era(unlock_duration_era)) => unlock_duration_era,
				Some(TimeUnit::Round(unlock_duration_round)) => unlock_duration_round,
				Some(TimeUnit::Kblock(unlock_duration_kblock)) => unlock_duration_kblock,
				Some(TimeUnit::Hour(unlock_duration_hour)) => unlock_duration_hour,
				_ => 0,
			};
			let ongoing_elem = match OngoingTimeUnit::<T>::get(currency) {
				Some(TimeUnit::Era(ongoing_era)) => ongoing_era,
				Some(TimeUnit::Round(ongoing_round)) => ongoing_round,
				Some(TimeUnit::Kblock(ongoing_kblock)) => ongoing_kblock,
				Some(TimeUnit::Hour(ongoing_hour)) => ongoing_hour,
				_ => 0,
			};
			if let Some((_total_locked, ledger_list, token_id)) =
				TimeUnitUnlockLedger::<T>::get(time_unit.clone(), currency)
			{
				for index in ledger_list.iter().take(Self::hook_iteration_limit() as usize) {
					if let Some((account, unlock_amount, time_unit, redeem_type)) =
						Self::token_unlock_ledger(token_id, index)
					{
						let entrance_account_balance = T::MultiCurrency::free_balance(
							token_id,
							&T::EntranceAccount::get().into_account_truncating(),
						);
						if entrance_account_balance != BalanceOf::<T>::zero() {
							Self::on_initialize_update_ledger(
								token_id,
								account,
								index,
								unlock_amount,
								entrance_account_balance,
								time_unit,
								redeem_type,
							)
							.ok();
						}
					}
				}
			} else {
				MinTimeUnit::<T>::mutate(currency, |time_unit| -> Result<(), Error<T>> {
					match time_unit {
						TimeUnit::Era(era) => {
							if ongoing_elem + unlock_duration_elem > *era {
								*era = era.checked_add(1).ok_or(Error::<T>::CalculationOverflow)?;
							}
							Ok(())
						},
						TimeUnit::Round(round) => {
							if ongoing_elem + unlock_duration_elem > *round {
								*round =
									round.checked_add(1).ok_or(Error::<T>::CalculationOverflow)?;
							}
							Ok(())
						},
						TimeUnit::Kblock(kblock) => {
							if ongoing_elem + unlock_duration_elem > *kblock {
								*kblock =
									kblock.checked_add(1).ok_or(Error::<T>::CalculationOverflow)?;
							}
							Ok(())
						},
						TimeUnit::Hour(hour) => {
							if ongoing_elem + unlock_duration_elem > *hour {
								*hour =
									hour.checked_add(1).ok_or(Error::<T>::CalculationOverflow)?;
							}
							Ok(())
						},
						_ => Ok(()),
					}
				})?;
			};

			Ok(())
		}

		#[transactional]
		pub fn mint_inner(
			exchanger: AccountIdOf<T>,
			token_id: CurrencyIdOf<T>,
			token_amount: BalanceOf<T>,
			remark: BoundedVec<u8, ConstU32<32>>,
			channel_id: u32,
			validators: Vec<T::AccountId>,
		) -> Result<BalanceOf<T>, DispatchError> {
			ensure!(token_amount >= MinimumMint::<T>::get(token_id), Error::<T>::BelowMinimumMint);

			for validator in &validators {
				// TODO : Handle error
				ensure!(
					ValidatorWhitelist::<T>::get(channel_id).unwrap().contains(validator),
					Error::<T>::InvalidValidator
				);
			}

			let Lst_id = T::CurrencyIdConversion::convert_to_Lst(token_id)
				.map_err(|_| Error::<T>::NotSupportTokenType)?;

			let (token_amount_excluding_fee, Lst_amount, fee) =
				Self::mint_without_tranfer(&exchanger, Lst_id, token_id, token_amount)?;

			T::MultiCurrency::transfer(
				token_id,
				&exchanger,
				&T::EntranceAccount::get().into_account_truncating(),
				token_amount_excluding_fee,
			)?;

			T::ChannelCommission::record_mint_amount(Some(channel_id), Lst_id, Lst_amount)?;

			let asset_id = Self::create_new_token(validators.clone())?;

			ValidatorAssets::<T>::insert(&validators, asset_id);

			Self::deposit_event(Event::Minted {
				address: exchanger,
				token_id,
				token_amount,
				Lst_amount,
				fee,
				remark,
			});

			Ok(Lst_amount.into())
		}

		fn create_new_token(validators: Vec<T::AccountId>) -> Result<AssetIdOf<T>, DispatchError> {
			// Get the next asset ID and increment the counter
			let asset_id = NextAssetId::<T>::get().unwrap();

			// TODO : Fix inc
			// NextAssetId::<T>::mutate(|id| {
			// 	let inc : AssetIdOf<T> = 1_u32.into();
			// 	id = Some(id.unwrap() + inc);
			// });

			// Get the pallet account
			let pallet_account: T::AccountId = T::EntranceAccount::get().into_account_truncating();

			// Create a new asset using the AssetHandler
			T::AssetsHandler::create(
				asset_id.clone(),
				pallet_account.clone(),
				true,         // is_sufficient
				1_u32.into(), // min_balance
			)?;

			Ok(asset_id)
		}

		#[transactional]
		pub fn redeem_inner(
			exchanger: AccountIdOf<T>,
			Lst_id: CurrencyIdOf<T>,
			Lst_amount: BalanceOf<T>,
			redeem_type: RedeemType<AccountIdOf<T>>,
		) -> DispatchResultWithPostInfo {
			let token_id = T::CurrencyIdConversion::convert_to_token(Lst_id)
				.map_err(|_| Error::<T>::NotSupportTokenType)?;
			ensure!(Lst_amount >= MinimumRedeem::<T>::get(Lst_id), Error::<T>::BelowMinimumRedeem);

			ensure!(
				!T::TangleSlp::all_delegation_requests_occupied(token_id),
				Error::<T>::CanNotRedeem,
			);

			let (_mint_rate, redeem_rate) = Fees::<T>::get();
			let redeem_fee = redeem_rate * Lst_amount;
			let Lst_amount =
				Lst_amount.checked_sub(&redeem_fee).ok_or(Error::<T>::CalculationOverflow)?;
			// Charging fees
			T::MultiCurrency::transfer(Lst_id, &exchanger, &T::FeeAccount::get(), redeem_fee)?;

			let token_pool_amount = Self::token_pool(token_id);
			let Lst_total_issuance = T::MultiCurrency::total_issuance(Lst_id);
			let token_amount: BalanceOf<T> = U256::from(Lst_amount.saturated_into::<u128>())
				.saturating_mul(token_pool_amount.saturated_into::<u128>().into())
				.checked_div(Lst_total_issuance.saturated_into::<u128>().into())
				.map(|x| u128::try_from(x))
				.ok_or(Error::<T>::CalculationOverflow)?
				.map_err(|_| Error::<T>::CalculationOverflow)?
				.unique_saturated_into();

			let next_id = Self::token_unlock_next_id(token_id);
			match OngoingTimeUnit::<T>::get(token_id) {
				Some(time_unit) => {
					// Calculate the time to be locked
					let result_time_unit = Self::add_time_unit(
						Self::unlock_duration(token_id)
							.ok_or(Error::<T>::UnlockDurationNotFound)?,
						time_unit,
					)?;

					T::MultiCurrency::withdraw(Lst_id, &exchanger, Lst_amount)?;
					TokenPool::<T>::mutate(&token_id, |pool| -> Result<(), Error<T>> {
						*pool = pool
							.checked_sub(&token_amount)
							.ok_or(Error::<T>::CalculationOverflow)?;
						Ok(())
					})?;
					UnlockingTotal::<T>::mutate(&token_id, |pool| -> Result<(), Error<T>> {
						*pool = pool
							.checked_add(&token_amount)
							.ok_or(Error::<T>::CalculationOverflow)?;
						Ok(())
					})?;
					TokenUnlockLedger::<T>::insert(
						&token_id,
						&next_id,
						(&exchanger, token_amount, &result_time_unit, redeem_type),
					);

					if UserUnlockLedger::<T>::get(&exchanger, &token_id).is_some() {
						UserUnlockLedger::<T>::mutate(
							&exchanger,
							&token_id,
							|value| -> Result<(), Error<T>> {
								if let Some((total_locked, ledger_list)) = value {
									ledger_list
										.try_push(next_id)
										.map_err(|_| Error::<T>::TooManyRedeems)?;

									*total_locked = total_locked
										.checked_add(&token_amount)
										.ok_or(Error::<T>::CalculationOverflow)?;
								};
								Ok(())
							},
						)?;
					} else {
						let mut ledger_list_origin =
							BoundedVec::<UnlockId, T::MaximumUnlockIdOfUser>::default();
						ledger_list_origin
							.try_push(next_id)
							.map_err(|_| Error::<T>::TooManyRedeems)?;
						UserUnlockLedger::<T>::insert(
							&exchanger,
							&token_id,
							(token_amount, ledger_list_origin),
						);
					}

					if let Some((_, _, _token_id)) =
						TimeUnitUnlockLedger::<T>::get(&result_time_unit, &token_id)
					{
						TimeUnitUnlockLedger::<T>::mutate(
							&result_time_unit,
							&token_id,
							|value| -> Result<(), Error<T>> {
								if let Some((total_locked, ledger_list, _token_id)) = value {
									ledger_list
										.try_push(next_id)
										.map_err(|_| Error::<T>::TooManyRedeems)?;
									*total_locked = total_locked
										.checked_add(&token_amount)
										.ok_or(Error::<T>::CalculationOverflow)?;
								};
								Ok(())
							},
						)?;
					} else {
						let mut ledger_list_origin =
							BoundedVec::<UnlockId, T::MaximumUnlockIdOfTimeUnit>::default();
						ledger_list_origin
							.try_push(next_id)
							.map_err(|_| Error::<T>::TooManyRedeems)?;

						TimeUnitUnlockLedger::<T>::insert(
							&result_time_unit,
							&token_id,
							(token_amount, ledger_list_origin, token_id),
						);
					}
				},
				None => return Err(Error::<T>::OngoingTimeUnitNotSet.into()),
			}

			TokenUnlockNextId::<T>::mutate(&token_id, |unlock_id| -> Result<(), Error<T>> {
				*unlock_id = unlock_id.checked_add(1).ok_or(Error::<T>::CalculationOverflow)?;
				Ok(())
			})?;

			// Mint and send NFT to the redeemer
			let nft_id = T::NftsHandler::mint(&exchanger, token_id, Lst_amount)?;

			let extra_weight = T::OnRedeemSuccess::on_redeemed(
				exchanger.clone(),
				token_id,
				token_amount,
				Lst_amount,
				redeem_fee,
			);

			T::ChannelCommission::record_redeem_amount(Lst_id, Lst_amount)?;

			Self::deposit_event(Event::Redeemed {
				address: exchanger,
				token_id,
				Lst_amount,
				token_amount,
				fee: redeem_fee,
				unlock_id: next_id,
			});
			Self::deposit_event(Event::NFTMinted {
				address: exchanger,
				nft_id,
			});
			Ok(Some(T::WeightInfo::redeem() + extra_weight).into())
		}


		pub fn token_to_Lst_inner(
			token_id: CurrencyIdOf<T>,
			Lst_id: CurrencyIdOf<T>,
			token_amount: BalanceOf<T>,
		) -> Result<BalanceOf<T>, DispatchError> {
			let token_pool_amount = Self::token_pool(token_id);
			let Lst_total_issuance = T::MultiCurrency::total_issuance(Lst_id);

			let value = U256::from(token_amount.saturated_into::<u128>())
				.saturating_mul(Lst_total_issuance.saturated_into::<u128>().into())
				.checked_div(token_pool_amount.saturated_into::<u128>().into())
				.ok_or(Error::<T>::CalculationOverflow)?;

			Ok(u128::try_from(value)
				.map(|x| x.unique_saturated_into())
				.map_err(|_| Error::<T>::CalculationOverflow)?)
		}

		pub fn Lst_to_token_inner(
			token_id: CurrencyIdOf<T>,
			Lst_id: CurrencyIdOf<T>,
			Lst_amount: BalanceOf<T>,
		) -> Result<BalanceOf<T>, DispatchError> {
			let token_pool_amount = Self::token_pool(token_id);
			let Lst_total_issuance = T::MultiCurrency::total_issuance(Lst_id);

			let value = U256::from(Lst_amount.saturated_into::<u128>())
				.saturating_mul(token_pool_amount.saturated_into::<u128>().into())
				.checked_div(Lst_total_issuance.saturated_into::<u128>().into())
				.ok_or(Error::<T>::CalculationOverflow)?;

			Ok(u128::try_from(value)
				.map(|x| x.unique_saturated_into())
				.map_err(|_| Error::<T>::CalculationOverflow)?)
		}

		pub fn Lst_id_inner(token_id: CurrencyIdOf<T>) -> Option<CurrencyIdOf<T>> {
			T::CurrencyIdConversion::convert_to_Lst(token_id).ok()
		}

		pub fn token_id_inner(Lst_id: CurrencyIdOf<T>) -> Option<CurrencyIdOf<T>> {
			T::CurrencyIdConversion::convert_to_token(Lst_id).ok()
		}
	}
}

impl<T: Config> LstMintingOperator<CurrencyId, BalanceOf<T>, AccountIdOf<T>, TimeUnit>
	for Pallet<T>
{
	fn get_token_pool(currency_id: CurrencyId) -> BalanceOf<T> {
		Self::token_pool(currency_id)
	}

	fn increase_token_pool(currency_id: CurrencyId, token_amount: BalanceOf<T>) -> DispatchResult {
		TokenPool::<T>::mutate(currency_id, |pool| -> Result<(), Error<T>> {
			*pool = pool.checked_add(&token_amount).ok_or(Error::<T>::CalculationOverflow)?;

			Ok(())
		})?;

		Ok(())
	}

	fn decrease_token_pool(currency_id: CurrencyId, token_amount: BalanceOf<T>) -> DispatchResult {
		TokenPool::<T>::mutate(currency_id, |pool| -> Result<(), Error<T>> {
			*pool = pool.checked_sub(&token_amount).ok_or(Error::<T>::CalculationOverflow)?;
			Ok(())
		})?;

		Ok(())
	}

	fn update_ongoing_time_unit(currency_id: CurrencyId, time_unit: TimeUnit) -> DispatchResult {
		OngoingTimeUnit::<T>::mutate(currency_id, |time_unit_old| -> Result<(), Error<T>> {
			*time_unit_old = Some(time_unit);
			Ok(())
		})?;

		Ok(())
	}

	fn get_ongoing_time_unit(currency_id: CurrencyId) -> Option<TimeUnit> {
		Self::ongoing_time_unit(currency_id)
	}

	fn get_unlock_records(
		currency_id: CurrencyId,
		time_unit: TimeUnit,
	) -> Option<(BalanceOf<T>, Vec<u32>)> {
		if let Some((balance, list, _)) = Self::time_unit_unlock_ledger(&time_unit, currency_id) {
			Some((balance, list.into_inner()))
		} else {
			None
		}
	}

	#[transactional]
	fn deduct_unlock_amount(
		currency_id: CurrencyId,
		index: u32,
		deduct_amount: BalanceOf<T>,
	) -> DispatchResult {
		if let Some((who, unlock_amount, time_unit, _)) =
			Self::token_unlock_ledger(currency_id, index)
		{
			ensure!(unlock_amount >= deduct_amount, Error::<T>::NotEnoughBalanceToUnlock);

			UnlockingTotal::<T>::mutate(&currency_id, |pool| -> Result<(), Error<T>> {
				*pool = pool.checked_sub(&deduct_amount).ok_or(Error::<T>::CalculationOverflow)?;
				Ok(())
			})?;

			TimeUnitUnlockLedger::<T>::mutate_exists(
				&time_unit,
				&currency_id,
				|value| -> Result<(), Error<T>> {
					if let Some((total_locked_origin, ledger_list_origin, _)) = value {
						if total_locked_origin == &deduct_amount {
							*value = None;
							return Ok(());
						}
						*total_locked_origin = total_locked_origin
							.checked_sub(&deduct_amount)
							.ok_or(Error::<T>::CalculationOverflow)?;
						if unlock_amount == deduct_amount {
							ledger_list_origin.retain(|&x| x != index);
						}
					} else {
						return Err(Error::<T>::TimeUnitUnlockLedgerNotFound);
					}
					Ok(())
				},
			)?;

			UserUnlockLedger::<T>::mutate_exists(
				&who,
				&currency_id,
				|value| -> Result<(), Error<T>> {
					if let Some((total_locked_origin, ledger_list_origin)) = value {
						if total_locked_origin == &deduct_amount {
							*value = None;
							return Ok(());
						}
						*total_locked_origin = total_locked_origin
							.checked_sub(&deduct_amount)
							.ok_or(Error::<T>::CalculationOverflow)?;
						if unlock_amount == deduct_amount {
							ledger_list_origin.retain(|&x| x != index);
						}
					} else {
						return Err(Error::<T>::UserUnlockLedgerNotFound);
					}
					Ok(())
				},
			)?;

			if unlock_amount == deduct_amount {
				TokenUnlockLedger::<T>::remove(&currency_id, &index);
			} else {
				TokenUnlockLedger::<T>::mutate_exists(
					&currency_id,
					&index,
					|value| -> Result<(), Error<T>> {
						if let Some((_, total_locked_origin, _, _)) = value {
							if total_locked_origin == &deduct_amount {
								*value = None;
								return Ok(());
							}
							*total_locked_origin = total_locked_origin
								.checked_sub(&deduct_amount)
								.ok_or(Error::<T>::CalculationOverflow)?;
						} else {
							return Err(Error::<T>::TokenUnlockLedgerNotFound);
						}
						Ok(())
					},
				)?;
			}
		}
		Ok(())
	}

	fn get_entrance_and_exit_accounts() -> (AccountIdOf<T>, AccountIdOf<T>) {
		(
			T::EntranceAccount::get().into_account_truncating(),
			T::ExitAccount::get().into_account_truncating(),
		)
	}

	fn get_token_unlock_ledger(
		currency_id: CurrencyId,
		index: u32,
	) -> Option<(AccountIdOf<T>, BalanceOf<T>, TimeUnit, RedeemType<AccountIdOf<T>>)> {
		Self::token_unlock_ledger(currency_id, index)
	}

	fn get_astar_parachain_id() -> u32 {
		T::AstarParachainId::get()
	}
	fn get_moonbeam_parachain_id() -> u32 {
		T::MoonbeamParachainId::get()
	}
	fn get_hydradx_parachain_id() -> u32 {
		T::HydradxParachainId::get()
	}
	fn get_interlay_parachain_id() -> u32 {
		T::InterlayParachainId::get()
	}
	fn get_manta_parachain_id() -> u32 {
		T::MantaParachainId::get()
	}
}

impl<T: Config> LstMintingInterface<AccountIdOf<T>, CurrencyIdOf<T>, BalanceOf<T>> for Pallet<T> {
	fn mint(
		exchanger: AccountIdOf<T>,
		token_id: CurrencyIdOf<T>,
		token_amount: BalanceOf<T>,
		remark: BoundedVec<u8, ConstU32<32>>,
		channel_id: u32,
		validator: Vec<T::AccountId>,
	) -> Result<BalanceOf<T>, DispatchError> {
		Self::mint_inner(exchanger, token_id, token_amount, remark, channel_id, validator)
	}

	fn redeem(
		exchanger: AccountIdOf<T>,
		Lst_id: CurrencyIdOf<T>,
		Lst_amount: BalanceOf<T>,
	) -> DispatchResultWithPostInfo {
		Self::redeem_inner(exchanger, Lst_id, Lst_amount, RedeemType::Native)
	}

	fn slpx_redeem(
		exchanger: AccountIdOf<T>,
		Lst_id: CurrencyIdOf<T>,
		Lst_amount: BalanceOf<T>,
		redeem_type: RedeemType<AccountIdOf<T>>,
	) -> DispatchResultWithPostInfo {
		Self::redeem_inner(exchanger, Lst_id, Lst_amount, redeem_type)
	}

	fn token_to_Lst(
		token_id: CurrencyIdOf<T>,
		Lst_id: CurrencyIdOf<T>,
		token_amount: BalanceOf<T>,
	) -> Result<BalanceOf<T>, DispatchError> {
		Self::token_to_Lst_inner(token_id, Lst_id, token_amount)
	}

	fn Lst_to_token(
		token_id: CurrencyIdOf<T>,
		Lst_id: CurrencyIdOf<T>,
		Lst_amount: BalanceOf<T>,
	) -> Result<BalanceOf<T>, DispatchError> {
		Self::Lst_to_token_inner(token_id, Lst_id, Lst_amount)
	}

	fn Lst_id(token_id: CurrencyIdOf<T>) -> Option<CurrencyIdOf<T>> {
		Self::Lst_id_inner(token_id)
	}

	fn token_id(Lst_id: CurrencyIdOf<T>) -> Option<CurrencyIdOf<T>> {
		Self::token_id_inner(Lst_id)
	}

	fn get_minimums_redeem(Lst_id: CurrencyIdOf<T>) -> BalanceOf<T> {
		MinimumRedeem::<T>::get(Lst_id)
	}

	fn get_token_pool(currency_id: CurrencyId) -> BalanceOf<T> {
		Self::token_pool(currency_id)
	}

	fn get_astar_parachain_id() -> u32 {
		T::AstarParachainId::get()
	}
	fn get_moonbeam_parachain_id() -> u32 {
		T::MoonbeamParachainId::get()
	}
	fn get_hydradx_parachain_id() -> u32 {
		T::HydradxParachainId::get()
	}
	fn get_interlay_parachain_id() -> u32 {
		T::InterlayParachainId::get()
	}
	fn get_manta_parachain_id() -> u32 {
		T::MantaParachainId::get()
	}
}

impl<T: Config> LstSupplyProvider<CurrencyIdOf<T>, BalanceOf<T>> for Pallet<T> {
	fn get_Lst_supply(Lst: CurrencyIdOf<T>) -> Option<BalanceOf<T>> {
		if CurrencyId::is_Lst(&Lst) {
			Some(T::MultiCurrency::total_issuance(Lst))
		} else {
			None
		}
	}

	fn get_token_supply(token: CurrencyIdOf<T>) -> Option<BalanceOf<T>> {
		if CurrencyId::is_token(&token) {
			Some(Self::token_pool(token))
		} else {
			None
		}
	}
}
