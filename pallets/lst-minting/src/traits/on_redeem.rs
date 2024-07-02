use frame_support::pallet_prelude::Weight;
use parity_scale_codec::{Decode, Encode};
use sp_core::H160;
use sp_runtime::RuntimeDebug;

#[derive(PartialEq, Eq, Clone, Encode, Decode, RuntimeDebug, scale_info::TypeInfo)]
pub enum RedeemTo<AccountId> {
	/// Native chain.
	Native(AccountId),
	/// Astar chain.
	Astar(AccountId),
	/// Moonbeam chain.
	Moonbeam(H160),
	/// Hydradx chain.
	Hydradx(AccountId),
	/// Interlay chain.
	Interlay(AccountId),
	/// Manta chain.
	Manta(AccountId),
}

pub trait OnRedeemSuccess<AccountId, CurrencyId, Balance> {
	fn on_redeem_success(
		token_id: CurrencyId,
		to: AccountId,
		token_amount: Balance,
	) -> frame_support::pallet_prelude::Weight;

	fn on_redeemed(
		address: AccountId,
		token_id: CurrencyId,
		token_amount: Balance,
		Lst_amount: Balance,
		fee: Balance,
	) -> frame_support::pallet_prelude::Weight;
}

impl<AccountId, CurrencyId, Balance> OnRedeemSuccess<AccountId, CurrencyId, Balance> for () {
	fn on_redeem_success(_token_id: CurrencyId, _to: AccountId, _token_amount: Balance) -> Weight {
		Weight::zero()
	}

	fn on_redeemed(
		_address: AccountId,
		_token_id: CurrencyId,
		_token_amount: Balance,
		_Lst_amount: Balance,
		_fee: Balance,
	) -> Weight {
		Weight::zero()
	}
}
