// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/api-base/types/errors';

import type { ApiTypes, AugmentedError } from '@polkadot/api-base/types';

export type __AugmentedError<ApiType extends ApiTypes> = AugmentedError<ApiType>;

declare module '@polkadot/api-base/types/errors' {
	interface AugmentedErrors<ApiType extends ApiTypes> {
		assetRegistry: {
			/**
			 * AssetId exists
			 **/
			AssetIdExisted: AugmentedError<ApiType>;
			/**
			 * AssetId not exists
			 **/
			AssetIdNotExists: AugmentedError<ApiType>;
			/**
			 * The given location could not be used (e.g. because it cannot be expressed in the
			 * desired version of XCM).
			 **/
			BadLocation: AugmentedError<ApiType>;
			/**
			 * CurrencyId exists
			 **/
			CurrencyIdExisted: AugmentedError<ApiType>;
			/**
			 * CurrencyId not exists
			 **/
			CurrencyIdNotExists: AugmentedError<ApiType>;
			/**
			 * MultiLocation existed
			 **/
			MultiLocationExisted: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		balances: {
			/**
			 * Beneficiary account must pre-exist.
			 **/
			DeadAccount: AugmentedError<ApiType>;
			/**
			 * Value too low to create account due to existential deposit.
			 **/
			ExistentialDeposit: AugmentedError<ApiType>;
			/**
			 * A vesting schedule already exists for this account.
			 **/
			ExistingVestingSchedule: AugmentedError<ApiType>;
			/**
			 * Transfer/payment would kill account.
			 **/
			Expendability: AugmentedError<ApiType>;
			/**
			 * Balance too low to send value.
			 **/
			InsufficientBalance: AugmentedError<ApiType>;
			/**
			 * Account liquidity restrictions prevent withdrawal.
			 **/
			LiquidityRestrictions: AugmentedError<ApiType>;
			/**
			 * Number of freezes exceed `MaxFreezes`.
			 **/
			TooManyFreezes: AugmentedError<ApiType>;
			/**
			 * Number of holds exceed `MaxHolds`.
			 **/
			TooManyHolds: AugmentedError<ApiType>;
			/**
			 * Number of named reserves exceed `MaxReserves`.
			 **/
			TooManyReserves: AugmentedError<ApiType>;
			/**
			 * Vesting balance too high to send value.
			 **/
			VestingBalance: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		bounties: {
			/**
			 * The bounty cannot be closed because it has active child bounties.
			 **/
			HasActiveChildBounty: AugmentedError<ApiType>;
			/**
			 * Proposer's balance is too low.
			 **/
			InsufficientProposersBalance: AugmentedError<ApiType>;
			/**
			 * Invalid bounty fee.
			 **/
			InvalidFee: AugmentedError<ApiType>;
			/**
			 * No proposal or bounty at that index.
			 **/
			InvalidIndex: AugmentedError<ApiType>;
			/**
			 * Invalid bounty value.
			 **/
			InvalidValue: AugmentedError<ApiType>;
			/**
			 * A bounty payout is pending.
			 * To cancel the bounty, you must unassign and slash the curator.
			 **/
			PendingPayout: AugmentedError<ApiType>;
			/**
			 * The bounties cannot be claimed/closed because it's still in the countdown period.
			 **/
			Premature: AugmentedError<ApiType>;
			/**
			 * The reason given is just too big.
			 **/
			ReasonTooBig: AugmentedError<ApiType>;
			/**
			 * Require bounty curator.
			 **/
			RequireCurator: AugmentedError<ApiType>;
			/**
			 * Too many approvals are already queued.
			 **/
			TooManyQueued: AugmentedError<ApiType>;
			/**
			 * The bounty status is unexpected.
			 **/
			UnexpectedStatus: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		convictionVoting: {
			/**
			 * The account is already delegating.
			 **/
			AlreadyDelegating: AugmentedError<ApiType>;
			/**
			 * The account currently has votes attached to it and the operation cannot succeed until
			 * these are removed, either through `unvote` or `reap_vote`.
			 **/
			AlreadyVoting: AugmentedError<ApiType>;
			/**
			 * The class ID supplied is invalid.
			 **/
			BadClass: AugmentedError<ApiType>;
			/**
			 * The class must be supplied since it is not easily determinable from the state.
			 **/
			ClassNeeded: AugmentedError<ApiType>;
			/**
			 * Too high a balance was provided that the account cannot afford.
			 **/
			InsufficientFunds: AugmentedError<ApiType>;
			/**
			 * Maximum number of votes reached.
			 **/
			MaxVotesReached: AugmentedError<ApiType>;
			/**
			 * Delegation to oneself makes no sense.
			 **/
			Nonsense: AugmentedError<ApiType>;
			/**
			 * The actor has no permission to conduct the action.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * The actor has no permission to conduct the action right now but will do in the future.
			 **/
			NoPermissionYet: AugmentedError<ApiType>;
			/**
			 * The account is not currently delegating.
			 **/
			NotDelegating: AugmentedError<ApiType>;
			/**
			 * Poll is not ongoing.
			 **/
			NotOngoing: AugmentedError<ApiType>;
			/**
			 * The given account did not vote on the poll.
			 **/
			NotVoter: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		council: {
			/**
			 * Members are already initialized!
			 **/
			AlreadyInitialized: AugmentedError<ApiType>;
			/**
			 * Duplicate proposals not allowed
			 **/
			DuplicateProposal: AugmentedError<ApiType>;
			/**
			 * Duplicate vote ignored
			 **/
			DuplicateVote: AugmentedError<ApiType>;
			/**
			 * Account is not a member
			 **/
			NotMember: AugmentedError<ApiType>;
			/**
			 * Prime account is not a member
			 **/
			PrimeAccountNotMember: AugmentedError<ApiType>;
			/**
			 * Proposal must exist
			 **/
			ProposalMissing: AugmentedError<ApiType>;
			/**
			 * The close call was made too early, before the end of the voting.
			 **/
			TooEarly: AugmentedError<ApiType>;
			/**
			 * There can only be a maximum of `MaxProposals` active proposals.
			 **/
			TooManyProposals: AugmentedError<ApiType>;
			/**
			 * Mismatched index
			 **/
			WrongIndex: AugmentedError<ApiType>;
			/**
			 * The given length bound for the proposal was too low.
			 **/
			WrongProposalLength: AugmentedError<ApiType>;
			/**
			 * The given weight bound for the proposal was too low.
			 **/
			WrongProposalWeight: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		councilMembership: {
			/**
			 * Already a member.
			 **/
			AlreadyMember: AugmentedError<ApiType>;
			/**
			 * Not a member.
			 **/
			NotMember: AugmentedError<ApiType>;
			/**
			 * Too many members.
			 **/
			TooManyMembers: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		cumulusXcm: {
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		currencies: {
			/**
			 * Unable to convert the Amount type into Balance.
			 **/
			AmountIntoBalanceFailed: AugmentedError<ApiType>;
			/**
			 * Balance is too low.
			 **/
			BalanceTooLow: AugmentedError<ApiType>;
			/**
			 * Deposit result is not expected
			 **/
			DepositFailed: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		democracy: {
			/**
			 * Cannot cancel the same proposal twice
			 **/
			AlreadyCanceled: AugmentedError<ApiType>;
			/**
			 * The account is already delegating.
			 **/
			AlreadyDelegating: AugmentedError<ApiType>;
			/**
			 * Identity may not veto a proposal twice
			 **/
			AlreadyVetoed: AugmentedError<ApiType>;
			/**
			 * Proposal already made
			 **/
			DuplicateProposal: AugmentedError<ApiType>;
			/**
			 * The instant referendum origin is currently disallowed.
			 **/
			InstantNotAllowed: AugmentedError<ApiType>;
			/**
			 * Too high a balance was provided that the account cannot afford.
			 **/
			InsufficientFunds: AugmentedError<ApiType>;
			/**
			 * Invalid hash
			 **/
			InvalidHash: AugmentedError<ApiType>;
			/**
			 * Maximum number of votes reached.
			 **/
			MaxVotesReached: AugmentedError<ApiType>;
			/**
			 * No proposals waiting
			 **/
			NoneWaiting: AugmentedError<ApiType>;
			/**
			 * Delegation to oneself makes no sense.
			 **/
			Nonsense: AugmentedError<ApiType>;
			/**
			 * The actor has no permission to conduct the action.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * No external proposal
			 **/
			NoProposal: AugmentedError<ApiType>;
			/**
			 * The account is not currently delegating.
			 **/
			NotDelegating: AugmentedError<ApiType>;
			/**
			 * Next external proposal not simple majority
			 **/
			NotSimpleMajority: AugmentedError<ApiType>;
			/**
			 * The given account did not vote on the referendum.
			 **/
			NotVoter: AugmentedError<ApiType>;
			/**
			 * The preimage does not exist.
			 **/
			PreimageNotExist: AugmentedError<ApiType>;
			/**
			 * Proposal still blacklisted
			 **/
			ProposalBlacklisted: AugmentedError<ApiType>;
			/**
			 * Proposal does not exist
			 **/
			ProposalMissing: AugmentedError<ApiType>;
			/**
			 * Vote given for invalid referendum
			 **/
			ReferendumInvalid: AugmentedError<ApiType>;
			/**
			 * Maximum number of items reached.
			 **/
			TooMany: AugmentedError<ApiType>;
			/**
			 * Value too low
			 **/
			ValueLow: AugmentedError<ApiType>;
			/**
			 * The account currently has votes attached to it and the operation cannot succeed until
			 * these are removed, either through `unvote` or `reap_vote`.
			 **/
			VotesExist: AugmentedError<ApiType>;
			/**
			 * Voting period too low
			 **/
			VotingPeriodLow: AugmentedError<ApiType>;
			/**
			 * Invalid upper bound.
			 **/
			WrongUpperBound: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		dmpQueue: {
			/**
			 * The amount of weight given is possibly not enough for executing the message.
			 **/
			OverLimit: AugmentedError<ApiType>;
			/**
			 * The message index given is unknown.
			 **/
			Unknown: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		fellowshipCollective: {
			/**
			 * Account is already a member.
			 **/
			AlreadyMember: AugmentedError<ApiType>;
			/**
			 * Unexpected error in state.
			 **/
			Corruption: AugmentedError<ApiType>;
			/**
			 * The information provided is incorrect.
			 **/
			InvalidWitness: AugmentedError<ApiType>;
			/**
			 * There are no further records to be removed.
			 **/
			NoneRemaining: AugmentedError<ApiType>;
			/**
			 * The origin is not sufficiently privileged to do the operation.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * Account is not a member.
			 **/
			NotMember: AugmentedError<ApiType>;
			/**
			 * The given poll index is unknown or has closed.
			 **/
			NotPolling: AugmentedError<ApiType>;
			/**
			 * The given poll is still ongoing.
			 **/
			Ongoing: AugmentedError<ApiType>;
			/**
			 * The member's rank is too low to vote.
			 **/
			RankTooLow: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		fellowshipReferenda: {
			/**
			 * The referendum index provided is invalid in this context.
			 **/
			BadReferendum: AugmentedError<ApiType>;
			/**
			 * The referendum status is invalid for this operation.
			 **/
			BadStatus: AugmentedError<ApiType>;
			/**
			 * The track identifier given was invalid.
			 **/
			BadTrack: AugmentedError<ApiType>;
			/**
			 * There are already a full complement of referenda in progress for this track.
			 **/
			Full: AugmentedError<ApiType>;
			/**
			 * Referendum's decision deposit is already paid.
			 **/
			HasDeposit: AugmentedError<ApiType>;
			/**
			 * The deposit cannot be refunded since none was made.
			 **/
			NoDeposit: AugmentedError<ApiType>;
			/**
			 * The deposit refunder is not the depositor.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * There was nothing to do in the advancement.
			 **/
			NothingToDo: AugmentedError<ApiType>;
			/**
			 * Referendum is not ongoing.
			 **/
			NotOngoing: AugmentedError<ApiType>;
			/**
			 * No track exists for the proposal origin.
			 **/
			NoTrack: AugmentedError<ApiType>;
			/**
			 * The preimage does not exist.
			 **/
			PreimageNotExist: AugmentedError<ApiType>;
			/**
			 * The queue of the track is empty.
			 **/
			QueueEmpty: AugmentedError<ApiType>;
			/**
			 * Any deposit cannot be refunded until after the decision is over.
			 **/
			Unfinished: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		identity: {
			/**
			 * Account ID is already named.
			 **/
			AlreadyClaimed: AugmentedError<ApiType>;
			/**
			 * Empty index.
			 **/
			EmptyIndex: AugmentedError<ApiType>;
			/**
			 * Fee is changed.
			 **/
			FeeChanged: AugmentedError<ApiType>;
			/**
			 * The index is invalid.
			 **/
			InvalidIndex: AugmentedError<ApiType>;
			/**
			 * Invalid judgement.
			 **/
			InvalidJudgement: AugmentedError<ApiType>;
			/**
			 * The target is invalid.
			 **/
			InvalidTarget: AugmentedError<ApiType>;
			/**
			 * The provided judgement was for a different identity.
			 **/
			JudgementForDifferentIdentity: AugmentedError<ApiType>;
			/**
			 * Judgement given.
			 **/
			JudgementGiven: AugmentedError<ApiType>;
			/**
			 * Error that occurs when there is an issue paying for judgement.
			 **/
			JudgementPaymentFailed: AugmentedError<ApiType>;
			/**
			 * No identity found.
			 **/
			NoIdentity: AugmentedError<ApiType>;
			/**
			 * Account isn't found.
			 **/
			NotFound: AugmentedError<ApiType>;
			/**
			 * Account isn't named.
			 **/
			NotNamed: AugmentedError<ApiType>;
			/**
			 * Sub-account isn't owned by sender.
			 **/
			NotOwned: AugmentedError<ApiType>;
			/**
			 * Sender is not a sub-account.
			 **/
			NotSub: AugmentedError<ApiType>;
			/**
			 * Sticky judgement.
			 **/
			StickyJudgement: AugmentedError<ApiType>;
			/**
			 * Too many additional fields.
			 **/
			TooManyFields: AugmentedError<ApiType>;
			/**
			 * Maximum amount of registrars reached. Cannot add any more.
			 **/
			TooManyRegistrars: AugmentedError<ApiType>;
			/**
			 * Too many subs-accounts.
			 **/
			TooManySubAccounts: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		indices: {
			/**
			 * The index was not available.
			 **/
			InUse: AugmentedError<ApiType>;
			/**
			 * The index was not already assigned.
			 **/
			NotAssigned: AugmentedError<ApiType>;
			/**
			 * The index is assigned to another account.
			 **/
			NotOwner: AugmentedError<ApiType>;
			/**
			 * The source and destination accounts are identical.
			 **/
			NotTransfer: AugmentedError<ApiType>;
			/**
			 * The index is permanent and may not be freed/changed.
			 **/
			Permanent: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		LstMinting: {
			BelowMinimumMint: AugmentedError<ApiType>;
			BelowMinimumRedeem: AugmentedError<ApiType>;
			CalculationOverflow: AugmentedError<ApiType>;
			CanNotRebond: AugmentedError<ApiType>;
			CanNotRedeem: AugmentedError<ApiType>;
			ExceedMaximumUnlockId: AugmentedError<ApiType>;
			/**
			 * Invalid token to rebond.
			 **/
			InvalidRebondToken: AugmentedError<ApiType>;
			NotEnoughBalanceToUnlock: AugmentedError<ApiType>;
			/**
			 * Token type not support.
			 **/
			NotSupportTokenType: AugmentedError<ApiType>;
			OngoingTimeUnitNotSet: AugmentedError<ApiType>;
			TimeUnitUnlockLedgerNotFound: AugmentedError<ApiType>;
			TokenToRebondNotZero: AugmentedError<ApiType>;
			TokenUnlockLedgerNotFound: AugmentedError<ApiType>;
			TooManyRedeems: AugmentedError<ApiType>;
			Unexpected: AugmentedError<ApiType>;
			UnlockDurationNotFound: AugmentedError<ApiType>;
			UserUnlockLedgerNotFound: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		LstVoting: {
			/**
			 * The account is already delegating.
			 **/
			AlreadyDelegating: AugmentedError<ApiType>;
			/**
			 * Derivative index occupied.
			 **/
			DerivativeIndexOccupied: AugmentedError<ApiType>;
			/**
			 * Too high a balance was provided that the account cannot afford.
			 **/
			InsufficientFunds: AugmentedError<ApiType>;
			/**
			 * The given conviction is not valid.
			 **/
			InvalidConviction: AugmentedError<ApiType>;
			/**
			 * The given currency is not supported.
			 **/
			LstNotSupport: AugmentedError<ApiType>;
			/**
			 * Maximum number of votes reached.
			 **/
			MaxVotesReached: AugmentedError<ApiType>;
			/**
			 * No data available in storage.
			 **/
			NoData: AugmentedError<ApiType>;
			/**
			 * The actor has no permission to conduct the action.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * The actor has no permission to conduct the action right now but will do in the future.
			 **/
			NoPermissionYet: AugmentedError<ApiType>;
			/**
			 * Poll is not completed.
			 **/
			NotCompleted: AugmentedError<ApiType>;
			/**
			 * Poll is not expired.
			 **/
			NotExpired: AugmentedError<ApiType>;
			/**
			 * Poll is not killed.
			 **/
			NotKilled: AugmentedError<ApiType>;
			/**
			 * Poll is not ongoing.
			 **/
			NotOngoing: AugmentedError<ApiType>;
			/**
			 * The given vote is not Standard vote.
			 **/
			NotStandardVote: AugmentedError<ApiType>;
			/**
			 * The given account did not vote on the poll.
			 **/
			NotVoter: AugmentedError<ApiType>;
			/**
			 * The given value is out of range.
			 **/
			OutOfRange: AugmentedError<ApiType>;
			/**
			 * Another update referendum status is pending.
			 **/
			PendingUpdateReferendumStatus: AugmentedError<ApiType>;
			/**
			 * Another vote is pending.
			 **/
			PendingVote: AugmentedError<ApiType>;
			/**
			 * Maximum number of items reached.
			 **/
			TooMany: AugmentedError<ApiType>;
			/**
			 * XCM execution Failure
			 **/
			XcmFailure: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		merkleDistributor: {
			/**
			 * Account has already in the set who can create merkle distributor
			 **/
			AlreadyInWhiteList: AugmentedError<ApiType>;
			/**
			 *
			 **/
			BadChargeAccount: AugmentedError<ApiType>;
			/**
			 * Invalid metadata given.
			 **/
			BadDescription: AugmentedError<ApiType>;
			/**
			 * The reward is already charged.
			 **/
			Charged: AugmentedError<ApiType>;
			/**
			 * The reward is already distributed.
			 **/
			Claimed: AugmentedError<ApiType>;
			/**
			 * The id is not exist.
			 **/
			InvalidMerkleDistributorId: AugmentedError<ApiType>;
			/**
			 * The proof is invalid
			 **/
			MerkleVerifyFailed: AugmentedError<ApiType>;
			/**
			 * Account is no in the set who can create merkle distributor
			 **/
			NotInWhiteList: AugmentedError<ApiType>;
			/**
			 * Withdraw amount exceed charge amount.
			 **/
			WithdrawAmountExceed: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		multisig: {
			/**
			 * Call is already approved by this signatory.
			 **/
			AlreadyApproved: AugmentedError<ApiType>;
			/**
			 * The data to be stored is already stored.
			 **/
			AlreadyStored: AugmentedError<ApiType>;
			/**
			 * The maximum weight information provided was too low.
			 **/
			MaxWeightTooLow: AugmentedError<ApiType>;
			/**
			 * Threshold must be 2 or greater.
			 **/
			MinimumThreshold: AugmentedError<ApiType>;
			/**
			 * Call doesn't need any (more) approvals.
			 **/
			NoApprovalsNeeded: AugmentedError<ApiType>;
			/**
			 * Multisig operation not found when attempting to cancel.
			 **/
			NotFound: AugmentedError<ApiType>;
			/**
			 * No timepoint was given, yet the multisig operation is already underway.
			 **/
			NoTimepoint: AugmentedError<ApiType>;
			/**
			 * Only the account that originally created the multisig is able to cancel it.
			 **/
			NotOwner: AugmentedError<ApiType>;
			/**
			 * The sender was contained in the other signatories; it shouldn't be.
			 **/
			SenderInSignatories: AugmentedError<ApiType>;
			/**
			 * The signatories were provided out of order; they should be ordered.
			 **/
			SignatoriesOutOfOrder: AugmentedError<ApiType>;
			/**
			 * There are too few signatories in the list.
			 **/
			TooFewSignatories: AugmentedError<ApiType>;
			/**
			 * There are too many signatories in the list.
			 **/
			TooManySignatories: AugmentedError<ApiType>;
			/**
			 * A timepoint was given, yet no multisig operation is underway.
			 **/
			UnexpectedTimepoint: AugmentedError<ApiType>;
			/**
			 * A different timepoint was given to the multisig operation that is underway.
			 **/
			WrongTimepoint: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		oracle: {
			/**
			 * Feeder has already feeded at this block
			 **/
			AlreadyFeeded: AugmentedError<ApiType>;
			/**
			 * Sender does not have permission
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		oracleMembership: {
			/**
			 * Already a member.
			 **/
			AlreadyMember: AugmentedError<ApiType>;
			/**
			 * Not a member.
			 **/
			NotMember: AugmentedError<ApiType>;
			/**
			 * Too many members.
			 **/
			TooManyMembers: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		ormlXcm: {
			/**
			 * The version of the `Versioned` value used is not able to be
			 * interpreted.
			 **/
			BadVersion: AugmentedError<ApiType>;
			/**
			 * The message and destination was recognized as being reachable but
			 * the operation could not be completed.
			 **/
			SendFailure: AugmentedError<ApiType>;
			/**
			 * The message and destination combination was not recognized as being
			 * reachable.
			 **/
			Unreachable: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		parachainStaking: {
			AlreadyActive: AugmentedError<ApiType>;
			AlreadyDelegatedCandidate: AugmentedError<ApiType>;
			AlreadyOffline: AugmentedError<ApiType>;
			CandidateAlreadyLeaving: AugmentedError<ApiType>;
			CandidateBondBelowMin: AugmentedError<ApiType>;
			CandidateCannotLeaveYet: AugmentedError<ApiType>;
			CandidateDNE: AugmentedError<ApiType>;
			CandidateExists: AugmentedError<ApiType>;
			CandidateNotLeaving: AugmentedError<ApiType>;
			CannotDelegateIfLeaving: AugmentedError<ApiType>;
			CannotDelegateLessThanOrEqualToLowestBottomWhenFull: AugmentedError<ApiType>;
			CannotGoOnlineIfLeaving: AugmentedError<ApiType>;
			CannotSetBelowMin: AugmentedError<ApiType>;
			DelegationBelowMin: AugmentedError<ApiType>;
			DelegationDNE: AugmentedError<ApiType>;
			DelegatorAlreadyLeaving: AugmentedError<ApiType>;
			DelegatorBondBelowMin: AugmentedError<ApiType>;
			DelegatorCannotLeaveYet: AugmentedError<ApiType>;
			DelegatorDNE: AugmentedError<ApiType>;
			DelegatorDNEInDelegatorSet: AugmentedError<ApiType>;
			DelegatorDNEinTopNorBottom: AugmentedError<ApiType>;
			DelegatorExists: AugmentedError<ApiType>;
			DelegatorNotLeaving: AugmentedError<ApiType>;
			ExceedMaxDelegationsPerDelegator: AugmentedError<ApiType>;
			InsufficientBalance: AugmentedError<ApiType>;
			InvalidSchedule: AugmentedError<ApiType>;
			NoWritingSameValue: AugmentedError<ApiType>;
			PendingCandidateRequestAlreadyExists: AugmentedError<ApiType>;
			PendingCandidateRequestNotDueYet: AugmentedError<ApiType>;
			PendingCandidateRequestsDNE: AugmentedError<ApiType>;
			PendingDelegationRequestAlreadyExists: AugmentedError<ApiType>;
			PendingDelegationRequestDNE: AugmentedError<ApiType>;
			PendingDelegationRequestNotDueYet: AugmentedError<ApiType>;
			PendingDelegationRevoke: AugmentedError<ApiType>;
			RoundLengthMustBeAtLeastTotalSelectedCollators: AugmentedError<ApiType>;
			TooLowCandidateCountToLeaveCandidates: AugmentedError<ApiType>;
			TooLowCandidateCountWeightHintCancelLeaveCandidates: AugmentedError<ApiType>;
			TooLowCandidateCountWeightHintJoinCandidates: AugmentedError<ApiType>;
			TooLowCandidateDelegationCountToDelegate: AugmentedError<ApiType>;
			TooLowCandidateDelegationCountToLeaveCandidates: AugmentedError<ApiType>;
			TooLowDelegationCountToDelegate: AugmentedError<ApiType>;
			TooLowDelegationCountToLeaveDelegators: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		parachainSystem: {
			/**
			 * The inherent which supplies the host configuration did not run this block.
			 **/
			HostConfigurationNotAvailable: AugmentedError<ApiType>;
			/**
			 * No code upgrade has been authorized.
			 **/
			NothingAuthorized: AugmentedError<ApiType>;
			/**
			 * No validation function upgrade is currently scheduled.
			 **/
			NotScheduled: AugmentedError<ApiType>;
			/**
			 * Attempt to upgrade validation function while existing upgrade pending.
			 **/
			OverlappingUpgrades: AugmentedError<ApiType>;
			/**
			 * Polkadot currently prohibits this parachain from upgrading its validation function.
			 **/
			ProhibitedByPolkadot: AugmentedError<ApiType>;
			/**
			 * The supplied validation function has compiled into a blob larger than Polkadot is
			 * willing to run.
			 **/
			TooBig: AugmentedError<ApiType>;
			/**
			 * The given code upgrade has not been authorized.
			 **/
			Unauthorized: AugmentedError<ApiType>;
			/**
			 * The inherent which supplies the validation data did not run this block.
			 **/
			ValidationDataNotAvailable: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		phragmenElection: {
			/**
			 * Duplicated candidate submission.
			 **/
			DuplicatedCandidate: AugmentedError<ApiType>;
			/**
			 * Candidate does not have enough funds.
			 **/
			InsufficientCandidateFunds: AugmentedError<ApiType>;
			/**
			 * The renouncing origin presented a wrong `Renouncing` parameter.
			 **/
			InvalidRenouncing: AugmentedError<ApiType>;
			/**
			 * Prediction regarding replacement after member removal is wrong.
			 **/
			InvalidReplacement: AugmentedError<ApiType>;
			/**
			 * The provided count of number of votes is incorrect.
			 **/
			InvalidVoteCount: AugmentedError<ApiType>;
			/**
			 * The provided count of number of candidates is incorrect.
			 **/
			InvalidWitnessData: AugmentedError<ApiType>;
			/**
			 * Cannot vote with stake less than minimum balance.
			 **/
			LowBalance: AugmentedError<ApiType>;
			/**
			 * Cannot vote more than maximum allowed.
			 **/
			MaximumVotesExceeded: AugmentedError<ApiType>;
			/**
			 * Member cannot re-submit candidacy.
			 **/
			MemberSubmit: AugmentedError<ApiType>;
			/**
			 * Must be a voter.
			 **/
			MustBeVoter: AugmentedError<ApiType>;
			/**
			 * Not a member.
			 **/
			NotMember: AugmentedError<ApiType>;
			/**
			 * Must vote for at least one candidate.
			 **/
			NoVotes: AugmentedError<ApiType>;
			/**
			 * Runner cannot re-submit candidacy.
			 **/
			RunnerUpSubmit: AugmentedError<ApiType>;
			/**
			 * Too many candidates have been created.
			 **/
			TooManyCandidates: AugmentedError<ApiType>;
			/**
			 * Cannot vote more than candidates.
			 **/
			TooManyVotes: AugmentedError<ApiType>;
			/**
			 * Voter can not pay voting bond.
			 **/
			UnableToPayBond: AugmentedError<ApiType>;
			/**
			 * Cannot vote when no candidates or members exist.
			 **/
			UnableToVote: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		polkadotXcm: {
			/**
			 * The given account is not an identifiable sovereign account for any location.
			 **/
			AccountNotSovereign: AugmentedError<ApiType>;
			/**
			 * The location is invalid since it already has a subscription from us.
			 **/
			AlreadySubscribed: AugmentedError<ApiType>;
			/**
			 * The given location could not be used (e.g. because it cannot be expressed in the
			 * desired version of XCM).
			 **/
			BadLocation: AugmentedError<ApiType>;
			/**
			 * The version of the `Versioned` value used is not able to be interpreted.
			 **/
			BadVersion: AugmentedError<ApiType>;
			/**
			 * Could not re-anchor the assets to declare the fees for the destination chain.
			 **/
			CannotReanchor: AugmentedError<ApiType>;
			/**
			 * The destination `MultiLocation` provided cannot be inverted.
			 **/
			DestinationNotInvertible: AugmentedError<ApiType>;
			/**
			 * The assets to be sent are empty.
			 **/
			Empty: AugmentedError<ApiType>;
			/**
			 * The operation required fees to be paid which the initiator could not meet.
			 **/
			FeesNotMet: AugmentedError<ApiType>;
			/**
			 * The message execution fails the filter.
			 **/
			Filtered: AugmentedError<ApiType>;
			/**
			 * The unlock operation cannot succeed because there are still consumers of the lock.
			 **/
			InUse: AugmentedError<ApiType>;
			/**
			 * Invalid asset for the operation.
			 **/
			InvalidAsset: AugmentedError<ApiType>;
			/**
			 * Origin is invalid for sending.
			 **/
			InvalidOrigin: AugmentedError<ApiType>;
			/**
			 * A remote lock with the corresponding data could not be found.
			 **/
			LockNotFound: AugmentedError<ApiType>;
			/**
			 * The owner does not own (all) of the asset that they wish to do the operation on.
			 **/
			LowBalance: AugmentedError<ApiType>;
			/**
			 * The referenced subscription could not be found.
			 **/
			NoSubscription: AugmentedError<ApiType>;
			/**
			 * There was some other issue (i.e. not to do with routing) in sending the message.
			 * Perhaps a lack of space for buffering the message.
			 **/
			SendFailure: AugmentedError<ApiType>;
			/**
			 * Too many assets have been attempted for transfer.
			 **/
			TooManyAssets: AugmentedError<ApiType>;
			/**
			 * The asset owner has too many locks on the asset.
			 **/
			TooManyLocks: AugmentedError<ApiType>;
			/**
			 * The desired destination was unreachable, generally because there is a no way of routing
			 * to it.
			 **/
			Unreachable: AugmentedError<ApiType>;
			/**
			 * The message's weight could not be determined.
			 **/
			UnweighableMessage: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		preimage: {
			/**
			 * Preimage has already been noted on-chain.
			 **/
			AlreadyNoted: AugmentedError<ApiType>;
			/**
			 * The user is not authorized to perform this action.
			 **/
			NotAuthorized: AugmentedError<ApiType>;
			/**
			 * The preimage cannot be removed since it has not yet been noted.
			 **/
			NotNoted: AugmentedError<ApiType>;
			/**
			 * The preimage request cannot be removed since no outstanding requests exist.
			 **/
			NotRequested: AugmentedError<ApiType>;
			/**
			 * A preimage may not be removed when there are outstanding requests.
			 **/
			Requested: AugmentedError<ApiType>;
			/**
			 * Preimage is too large to store on-chain.
			 **/
			TooBig: AugmentedError<ApiType>;
			/**
			 * Too few hashes were requested to be upgraded (i.e. zero).
			 **/
			TooFew: AugmentedError<ApiType>;
			/**
			 * More than `MAX_HASH_UPGRADE_BULK_COUNT` hashes were requested to be upgraded at once.
			 **/
			TooMany: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		proxy: {
			/**
			 * Account is already a proxy.
			 **/
			Duplicate: AugmentedError<ApiType>;
			/**
			 * Call may not be made by proxy because it may escalate its privileges.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * Cannot add self as proxy.
			 **/
			NoSelfProxy: AugmentedError<ApiType>;
			/**
			 * Proxy registration not found.
			 **/
			NotFound: AugmentedError<ApiType>;
			/**
			 * Sender is not a proxy of the account to be proxied.
			 **/
			NotProxy: AugmentedError<ApiType>;
			/**
			 * There are too many proxies registered or too many announcements pending.
			 **/
			TooMany: AugmentedError<ApiType>;
			/**
			 * Announcement, if made at all, was made too recently.
			 **/
			Unannounced: AugmentedError<ApiType>;
			/**
			 * A call which is incompatible with the proxy type's filter was attempted.
			 **/
			Unproxyable: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		referenda: {
			/**
			 * The referendum index provided is invalid in this context.
			 **/
			BadReferendum: AugmentedError<ApiType>;
			/**
			 * The referendum status is invalid for this operation.
			 **/
			BadStatus: AugmentedError<ApiType>;
			/**
			 * The track identifier given was invalid.
			 **/
			BadTrack: AugmentedError<ApiType>;
			/**
			 * There are already a full complement of referenda in progress for this track.
			 **/
			Full: AugmentedError<ApiType>;
			/**
			 * Referendum's decision deposit is already paid.
			 **/
			HasDeposit: AugmentedError<ApiType>;
			/**
			 * The deposit cannot be refunded since none was made.
			 **/
			NoDeposit: AugmentedError<ApiType>;
			/**
			 * The deposit refunder is not the depositor.
			 **/
			NoPermission: AugmentedError<ApiType>;
			/**
			 * There was nothing to do in the advancement.
			 **/
			NothingToDo: AugmentedError<ApiType>;
			/**
			 * Referendum is not ongoing.
			 **/
			NotOngoing: AugmentedError<ApiType>;
			/**
			 * No track exists for the proposal origin.
			 **/
			NoTrack: AugmentedError<ApiType>;
			/**
			 * The preimage does not exist.
			 **/
			PreimageNotExist: AugmentedError<ApiType>;
			/**
			 * The queue of the track is empty.
			 **/
			QueueEmpty: AugmentedError<ApiType>;
			/**
			 * Any deposit cannot be refunded until after the decision is over.
			 **/
			Unfinished: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		scheduler: {
			/**
			 * Failed to schedule a call
			 **/
			FailedToSchedule: AugmentedError<ApiType>;
			/**
			 * Attempt to use a non-named function on a named task.
			 **/
			Named: AugmentedError<ApiType>;
			/**
			 * Cannot find the scheduled call.
			 **/
			NotFound: AugmentedError<ApiType>;
			/**
			 * Reschedule failed because it does not change scheduled time.
			 **/
			RescheduleNoChange: AugmentedError<ApiType>;
			/**
			 * Given target block number is in the past.
			 **/
			TargetBlockNumberInPast: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		session: {
			/**
			 * Registered duplicate key.
			 **/
			DuplicatedKey: AugmentedError<ApiType>;
			/**
			 * Invalid ownership proof.
			 **/
			InvalidProof: AugmentedError<ApiType>;
			/**
			 * Key setting account is not live, so it's impossible to associate keys.
			 **/
			NoAccount: AugmentedError<ApiType>;
			/**
			 * No associated validator ID for account.
			 **/
			NoAssociatedValidatorId: AugmentedError<ApiType>;
			/**
			 * No keys are associated with this account.
			 **/
			NoKeys: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		slp: {
			AccountNotExist: AugmentedError<ApiType>;
			AlreadyBonded: AugmentedError<ApiType>;
			AlreadyExist: AugmentedError<ApiType>;
			AlreadyLeaving: AugmentedError<ApiType>;
			AlreadyRequested: AugmentedError<ApiType>;
			AmountNone: AugmentedError<ApiType>;
			AmountNotProvided: AugmentedError<ApiType>;
			AmountNotZero: AugmentedError<ApiType>;
			AmountZero: AugmentedError<ApiType>;
			CurrencyLatestTuneRecordNotExist: AugmentedError<ApiType>;
			DecodingError: AugmentedError<ApiType>;
			DelaysNotExist: AugmentedError<ApiType>;
			DelegatorAlreadyLeaving: AugmentedError<ApiType>;
			DelegatorAlreadyTuned: AugmentedError<ApiType>;
			DelegatorLeaving: AugmentedError<ApiType>;
			DelegatorNotBonded: AugmentedError<ApiType>;
			DelegatorNotExist: AugmentedError<ApiType>;
			DelegatorNotLeaving: AugmentedError<ApiType>;
			DelegatorSetNotExist: AugmentedError<ApiType>;
			DestAccountNotValid: AugmentedError<ApiType>;
			DividedByZero: AugmentedError<ApiType>;
			EncodingError: AugmentedError<ApiType>;
			ExceedActiveMaximum: AugmentedError<ApiType>;
			ExceedLimit: AugmentedError<ApiType>;
			ExceedMaxLengthLimit: AugmentedError<ApiType>;
			ExceedUnlockingRecords: AugmentedError<ApiType>;
			FailToAddDelegator: AugmentedError<ApiType>;
			FailToConvert: AugmentedError<ApiType>;
			FeeSourceNotExist: AugmentedError<ApiType>;
			FeeTooHigh: AugmentedError<ApiType>;
			GreaterThanMaximum: AugmentedError<ApiType>;
			IncreaseTokenPoolError: AugmentedError<ApiType>;
			InvalidAccount: AugmentedError<ApiType>;
			InvalidAmount: AugmentedError<ApiType>;
			InvalidDelays: AugmentedError<ApiType>;
			InvalidHostingFee: AugmentedError<ApiType>;
			InvalidPageNumber: AugmentedError<ApiType>;
			InvalidTimeUnit: AugmentedError<ApiType>;
			InvalidTransferSource: AugmentedError<ApiType>;
			LastTimeUpdatedOngoingTimeUnitNotExist: AugmentedError<ApiType>;
			LeavingNotDue: AugmentedError<ApiType>;
			LowerThanMinimum: AugmentedError<ApiType>;
			MinimumsAndMaximumsNotExist: AugmentedError<ApiType>;
			MultiCurrencyError: AugmentedError<ApiType>;
			NoMoreValidatorBoostListForCurrency: AugmentedError<ApiType>;
			NotAuthorized: AugmentedError<ApiType>;
			NotDelegateValidator: AugmentedError<ApiType>;
			NotEnoughBalance: AugmentedError<ApiType>;
			NotEnoughToUnbond: AugmentedError<ApiType>;
			NotExist: AugmentedError<ApiType>;
			NotSupportedCurrencyId: AugmentedError<ApiType>;
			OngoingTimeUnitUpdateIntervalNotExist: AugmentedError<ApiType>;
			OperateOriginNotSet: AugmentedError<ApiType>;
			OverFlow: AugmentedError<ApiType>;
			ProblematicLedger: AugmentedError<ApiType>;
			QueryNotExist: AugmentedError<ApiType>;
			QueryResponseRemoveError: AugmentedError<ApiType>;
			RebondExceedUnlockingAmount: AugmentedError<ApiType>;
			RequestNotDue: AugmentedError<ApiType>;
			RequestNotExist: AugmentedError<ApiType>;
			SharePriceNotValid: AugmentedError<ApiType>;
			StablePoolNotFound: AugmentedError<ApiType>;
			StablePoolTokenIndexNotFound: AugmentedError<ApiType>;
			TimeUnitNotExist: AugmentedError<ApiType>;
			TooFrequent: AugmentedError<ApiType>;
			/**
			 * Transfer to failed
			 **/
			TransferToError: AugmentedError<ApiType>;
			TuneExchangeRateLimitNotSet: AugmentedError<ApiType>;
			UnderFlow: AugmentedError<ApiType>;
			Unexpected: AugmentedError<ApiType>;
			Unsupported: AugmentedError<ApiType>;
			ValidatorError: AugmentedError<ApiType>;
			ValidatorMultilocationNotvalid: AugmentedError<ApiType>;
			ValidatorNotBonded: AugmentedError<ApiType>;
			ValidatorNotExist: AugmentedError<ApiType>;
			ValidatorNotProvided: AugmentedError<ApiType>;
			ValidatorSetNotExist: AugmentedError<ApiType>;
			ValidatorStillInUse: AugmentedError<ApiType>;
			VectorEmpty: AugmentedError<ApiType>;
			VectorTooLong: AugmentedError<ApiType>;
			WeightAndFeeNotExists: AugmentedError<ApiType>;
			WhiteListNotExist: AugmentedError<ApiType>;
			XcmFailure: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		slpx: {
			/**
			 * Contract Account already exists in the whitelist
			 **/
			AccountIdAlreadyInWhitelist: AugmentedError<ApiType>;
			/**
			 * Contract Account is not in the whitelist
			 **/
			AccountIdNotInWhitelist: AugmentedError<ApiType>;
			/**
			 * ArgumentsError
			 **/
			ArgumentsError: AugmentedError<ApiType>;
			ErrorConvertLst: AugmentedError<ApiType>;
			ErrorDelivering: AugmentedError<ApiType>;
			ErrorValidating: AugmentedError<ApiType>;
			/**
			 * The maximum number of whitelist addresses is 10
			 **/
			ExceededWhitelistMaxNumber: AugmentedError<ApiType>;
			/**
			 * Insufficient balance to execute the fee
			 **/
			FreeBalanceTooLow: AugmentedError<ApiType>;
			/**
			 * Execution fee not set
			 **/
			NotSetExecutionFee: AugmentedError<ApiType>;
			/**
			 * Token not found in Lst minting
			 **/
			TokenNotFoundInLstMinting: AugmentedError<ApiType>;
			/**
			 * Token not found in zenlink
			 **/
			TokenNotFoundInZenlink: AugmentedError<ApiType>;
			Unsupported: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		stableAsset: {
			ArgumentsError: AugmentedError<ApiType>;
			ArgumentsMismatch: AugmentedError<ApiType>;
			InconsistentStorage: AugmentedError<ApiType>;
			InvalidPoolAsset: AugmentedError<ApiType>;
			InvalidPoolValue: AugmentedError<ApiType>;
			Math: AugmentedError<ApiType>;
			MintUnderMin: AugmentedError<ApiType>;
			PoolNotFound: AugmentedError<ApiType>;
			RedeemOverMax: AugmentedError<ApiType>;
			RedeemUnderMin: AugmentedError<ApiType>;
			SwapUnderMin: AugmentedError<ApiType>;
			TokenRateNotCleared: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		stablePool: {
			CantMint: AugmentedError<ApiType>;
			MintUnderMin: AugmentedError<ApiType>;
			RedeemOverMax: AugmentedError<ApiType>;
			SwapUnderMin: AugmentedError<ApiType>;
			TokenRateNotSet: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		system: {
			/**
			 * The origin filter prevent the call to be dispatched.
			 **/
			CallFiltered: AugmentedError<ApiType>;
			/**
			 * Failed to extract the runtime version from the new runtime.
			 *
			 * Either calling `Core_version` or decoding `RuntimeVersion` failed.
			 **/
			FailedToExtractRuntimeVersion: AugmentedError<ApiType>;
			/**
			 * The name of specification does not match between the current runtime
			 * and the new runtime.
			 **/
			InvalidSpecName: AugmentedError<ApiType>;
			/**
			 * Suicide called when the account has non-default composite data.
			 **/
			NonDefaultComposite: AugmentedError<ApiType>;
			/**
			 * There is a non-zero reference count preventing the account from being purged.
			 **/
			NonZeroRefCount: AugmentedError<ApiType>;
			/**
			 * The specification version is not allowed to decrease between the current runtime
			 * and the new runtime.
			 **/
			SpecVersionNeedsToIncrease: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		technicalCommittee: {
			/**
			 * Members are already initialized!
			 **/
			AlreadyInitialized: AugmentedError<ApiType>;
			/**
			 * Duplicate proposals not allowed
			 **/
			DuplicateProposal: AugmentedError<ApiType>;
			/**
			 * Duplicate vote ignored
			 **/
			DuplicateVote: AugmentedError<ApiType>;
			/**
			 * Account is not a member
			 **/
			NotMember: AugmentedError<ApiType>;
			/**
			 * Prime account is not a member
			 **/
			PrimeAccountNotMember: AugmentedError<ApiType>;
			/**
			 * Proposal must exist
			 **/
			ProposalMissing: AugmentedError<ApiType>;
			/**
			 * The close call was made too early, before the end of the voting.
			 **/
			TooEarly: AugmentedError<ApiType>;
			/**
			 * There can only be a maximum of `MaxProposals` active proposals.
			 **/
			TooManyProposals: AugmentedError<ApiType>;
			/**
			 * Mismatched index
			 **/
			WrongIndex: AugmentedError<ApiType>;
			/**
			 * The given length bound for the proposal was too low.
			 **/
			WrongProposalLength: AugmentedError<ApiType>;
			/**
			 * The given weight bound for the proposal was too low.
			 **/
			WrongProposalWeight: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		technicalMembership: {
			/**
			 * Already a member.
			 **/
			AlreadyMember: AugmentedError<ApiType>;
			/**
			 * Not a member.
			 **/
			NotMember: AugmentedError<ApiType>;
			/**
			 * Too many members.
			 **/
			TooManyMembers: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		tips: {
			/**
			 * The tip was already found/started.
			 **/
			AlreadyKnown: AugmentedError<ApiType>;
			/**
			 * The tip given was too generous.
			 **/
			MaxTipAmountExceeded: AugmentedError<ApiType>;
			/**
			 * The account attempting to retract the tip is not the finder of the tip.
			 **/
			NotFinder: AugmentedError<ApiType>;
			/**
			 * The tip cannot be claimed/closed because it's still in the countdown period.
			 **/
			Premature: AugmentedError<ApiType>;
			/**
			 * The reason given is just too big.
			 **/
			ReasonTooBig: AugmentedError<ApiType>;
			/**
			 * The tip cannot be claimed/closed because there are not enough tippers yet.
			 **/
			StillOpen: AugmentedError<ApiType>;
			/**
			 * The tip hash is unknown.
			 **/
			UnknownTip: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		tokenIssuer: {
			/**
			 * Failed to convert vec to boundedVec
			 **/
			ConvertError: AugmentedError<ApiType>;
			/**
			 * Excceed the max length limit of BoundedVec
			 **/
			ExceedMaxLen: AugmentedError<ApiType>;
			/**
			 * The origin is not allowed to perform the operation.
			 **/
			NotAllowed: AugmentedError<ApiType>;
			/**
			 * The balance is not enough
			 **/
			NotEnoughBalance: AugmentedError<ApiType>;
			/**
			 * The account doesn't exist in the whitelist.
			 **/
			NotExist: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		tokens: {
			/**
			 * Cannot convert Amount into Balance type
			 **/
			AmountIntoBalanceFailed: AugmentedError<ApiType>;
			/**
			 * The balance is too low
			 **/
			BalanceTooLow: AugmentedError<ApiType>;
			/**
			 * Beneficiary account must pre-exist
			 **/
			DeadAccount: AugmentedError<ApiType>;
			/**
			 * Value too low to create account due to existential deposit
			 **/
			ExistentialDeposit: AugmentedError<ApiType>;
			/**
			 * Transfer/payment would kill account
			 **/
			KeepAlive: AugmentedError<ApiType>;
			/**
			 * Failed because liquidity restrictions due to locking
			 **/
			LiquidityRestrictions: AugmentedError<ApiType>;
			/**
			 * Failed because the maximum locks was exceeded
			 **/
			MaxLocksExceeded: AugmentedError<ApiType>;
			TooManyReserves: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		treasury: {
			/**
			 * The payment has already been attempted.
			 **/
			AlreadyAttempted: AugmentedError<ApiType>;
			/**
			 * The spend is not yet eligible for payout.
			 **/
			EarlyPayout: AugmentedError<ApiType>;
			/**
			 * The balance of the asset kind is not convertible to the balance of the native asset.
			 **/
			FailedToConvertBalance: AugmentedError<ApiType>;
			/**
			 * The payment has neither failed nor succeeded yet.
			 **/
			Inconclusive: AugmentedError<ApiType>;
			/**
			 * The spend origin is valid but the amount it is allowed to spend is lower than the
			 * amount to be spent.
			 **/
			InsufficientPermission: AugmentedError<ApiType>;
			/**
			 * Proposer's balance is too low.
			 **/
			InsufficientProposersBalance: AugmentedError<ApiType>;
			/**
			 * No proposal, bounty or spend at that index.
			 **/
			InvalidIndex: AugmentedError<ApiType>;
			/**
			 * The payout was not yet attempted/claimed.
			 **/
			NotAttempted: AugmentedError<ApiType>;
			/**
			 * There was some issue with the mechanism of payment.
			 **/
			PayoutError: AugmentedError<ApiType>;
			/**
			 * Proposal has not been approved.
			 **/
			ProposalNotApproved: AugmentedError<ApiType>;
			/**
			 * The spend has expired and cannot be claimed.
			 **/
			SpendExpired: AugmentedError<ApiType>;
			/**
			 * Too many approvals in the queue.
			 **/
			TooManyApprovals: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		unknownTokens: {
			/**
			 * The operation will cause balance to overflow.
			 **/
			BalanceOverflow: AugmentedError<ApiType>;
			/**
			 * The balance is too low.
			 **/
			BalanceTooLow: AugmentedError<ApiType>;
			/**
			 * Unhandled asset.
			 **/
			UnhandledAsset: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		utility: {
			/**
			 * Too many calls batched.
			 **/
			TooManyCalls: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		whitelist: {
			/**
			 * The call was already whitelisted; No-Op.
			 **/
			CallAlreadyWhitelisted: AugmentedError<ApiType>;
			/**
			 * The call was not whitelisted.
			 **/
			CallIsNotWhitelisted: AugmentedError<ApiType>;
			/**
			 * The weight of the decoded call was higher than the witness.
			 **/
			InvalidCallWeightWitness: AugmentedError<ApiType>;
			/**
			 * The preimage of the call hash could not be loaded.
			 **/
			UnavailablePreImage: AugmentedError<ApiType>;
			/**
			 * The call could not be decoded.
			 **/
			UndecodableCall: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		xcmInterface: {
			FailToConvert: AugmentedError<ApiType>;
			FeeConvertFailed: AugmentedError<ApiType>;
			OperationWeightAndFeeNotExist: AugmentedError<ApiType>;
			XcmExecutionFailed: AugmentedError<ApiType>;
			XcmSendFailed: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		xcmpQueue: {
			/**
			 * Bad overweight index.
			 **/
			BadOverweightIndex: AugmentedError<ApiType>;
			/**
			 * Bad XCM data.
			 **/
			BadXcm: AugmentedError<ApiType>;
			/**
			 * Bad XCM origin.
			 **/
			BadXcmOrigin: AugmentedError<ApiType>;
			/**
			 * Failed to send XCM message.
			 **/
			FailedToSend: AugmentedError<ApiType>;
			/**
			 * Provided weight is possibly not enough to execute the message.
			 **/
			WeightOverLimit: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		xTokens: {
			/**
			 * Asset has no reserve location.
			 **/
			AssetHasNoReserve: AugmentedError<ApiType>;
			/**
			 * The specified index does not exist in a MultiAssets struct.
			 **/
			AssetIndexNonExistent: AugmentedError<ApiType>;
			/**
			 * The version of the `Versioned` value used is not able to be
			 * interpreted.
			 **/
			BadVersion: AugmentedError<ApiType>;
			/**
			 * Could not re-anchor the assets to declare the fees for the
			 * destination chain.
			 **/
			CannotReanchor: AugmentedError<ApiType>;
			/**
			 * The destination `MultiLocation` provided cannot be inverted.
			 **/
			DestinationNotInvertible: AugmentedError<ApiType>;
			/**
			 * We tried sending distinct asset and fee but they have different
			 * reserve chains.
			 **/
			DistinctReserveForAssetAndFee: AugmentedError<ApiType>;
			/**
			 * Fee is not enough.
			 **/
			FeeNotEnough: AugmentedError<ApiType>;
			/**
			 * Could not get ancestry of asset reserve location.
			 **/
			InvalidAncestry: AugmentedError<ApiType>;
			/**
			 * The MultiAsset is invalid.
			 **/
			InvalidAsset: AugmentedError<ApiType>;
			/**
			 * Invalid transfer destination.
			 **/
			InvalidDest: AugmentedError<ApiType>;
			/**
			 * MinXcmFee not registered for certain reserve location
			 **/
			MinXcmFeeNotDefined: AugmentedError<ApiType>;
			/**
			 * Not cross-chain transfer.
			 **/
			NotCrossChainTransfer: AugmentedError<ApiType>;
			/**
			 * Currency is not cross-chain transferable.
			 **/
			NotCrossChainTransferableCurrency: AugmentedError<ApiType>;
			/**
			 * Not supported MultiLocation
			 **/
			NotSupportedMultiLocation: AugmentedError<ApiType>;
			/**
			 * The number of assets to be sent is over the maximum.
			 **/
			TooManyAssetsBeingSent: AugmentedError<ApiType>;
			/**
			 * The message's weight could not be determined.
			 **/
			UnweighableMessage: AugmentedError<ApiType>;
			/**
			 * XCM execution failed.
			 **/
			XcmExecutionFailed: AugmentedError<ApiType>;
			/**
			 * The transfering asset amount is zero.
			 **/
			ZeroAmount: AugmentedError<ApiType>;
			/**
			 * The fee is zero.
			 **/
			ZeroFee: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		zenlinkProtocol: {
			/**
			 * Location given was invalid or unsupported.
			 **/
			AccountIdBadLocation: AugmentedError<ApiType>;
			/**
			 * Asset does not exist.
			 **/
			AssetNotExists: AugmentedError<ApiType>;
			/**
			 * Charge bootstrap extrinsic args has error,
			 **/
			ChargeRewardParamsError: AugmentedError<ApiType>;
			/**
			 * Transaction block number is larger than the end block number.
			 **/
			Deadline: AugmentedError<ApiType>;
			/**
			 * Trading pair can't be created.
			 **/
			DeniedCreatePair: AugmentedError<ApiType>;
			/**
			 * Transfer to self by XCM message.
			 **/
			DeniedTransferToSelf: AugmentedError<ApiType>;
			/**
			 * Bootstrap deny refund
			 **/
			DenyRefund: AugmentedError<ApiType>;
			/**
			 * Bootstrap is disable
			 **/
			DisableBootstrap: AugmentedError<ApiType>;
			/**
			 * Sold amount is more than exception.
			 **/
			ExcessiveSoldAmount: AugmentedError<ApiType>;
			/**
			 * XCM execution failed.
			 **/
			ExecutionFailed: AugmentedError<ApiType>;
			/**
			 * Exist some reward in bootstrap,
			 **/
			ExistRewardsInBootstrap: AugmentedError<ApiType>;
			/**
			 * Incorrect foreign amount range.
			 **/
			IncorrectAssetAmountRange: AugmentedError<ApiType>;
			/**
			 * Account balance must be greater than or equal to the transfer amount.
			 **/
			InsufficientAssetBalance: AugmentedError<ApiType>;
			/**
			 * Liquidity is not enough.
			 **/
			InsufficientLiquidity: AugmentedError<ApiType>;
			/**
			 * Trading pair does have enough foreign.
			 **/
			InsufficientPairReserve: AugmentedError<ApiType>;
			/**
			 * Get target amount is less than exception.
			 **/
			InsufficientTargetAmount: AugmentedError<ApiType>;
			/**
			 * Amount of contribution is invalid.
			 **/
			InvalidContributionAmount: AugmentedError<ApiType>;
			/**
			 * Invalid fee_point
			 **/
			InvalidFeePoint: AugmentedError<ApiType>;
			/**
			 * Can't find pair though trading path.
			 **/
			InvalidPath: AugmentedError<ApiType>;
			/**
			 * Can't pass the K value check
			 **/
			InvariantCheckFailed: AugmentedError<ApiType>;
			/**
			 * Account native currency balance must be greater than ExistentialDeposit.
			 **/
			NativeBalanceTooLow: AugmentedError<ApiType>;
			/**
			 * Reward of bootstrap is not set.
			 **/
			NoRewardTokens: AugmentedError<ApiType>;
			/**
			 * Pair is not in bootstrap
			 **/
			NotInBootstrap: AugmentedError<ApiType>;
			/**
			 * Not eligible to contribute
			 **/
			NotQualifiedAccount: AugmentedError<ApiType>;
			/**
			 * Overflow.
			 **/
			Overflow: AugmentedError<ApiType>;
			/**
			 * Trading pair already exists.
			 **/
			PairAlreadyExists: AugmentedError<ApiType>;
			/**
			 * Created pair can't create now
			 **/
			PairCreateForbidden: AugmentedError<ApiType>;
			/**
			 * Trading pair does not exist.
			 **/
			PairNotExists: AugmentedError<ApiType>;
			/**
			 * Require the admin who can reset the admin and receiver of the protocol fee.
			 **/
			RequireProtocolAdmin: AugmentedError<ApiType>;
			/**
			 * Require the admin candidate who can become new admin after confirm.
			 **/
			RequireProtocolAdminCandidate: AugmentedError<ApiType>;
			/**
			 * Not in ZenlinkRegistedParaChains.
			 **/
			TargetChainNotRegistered: AugmentedError<ApiType>;
			/**
			 * Amount of contribution is invalid.
			 **/
			UnqualifiedBootstrap: AugmentedError<ApiType>;
			/**
			 * Unsupported AssetId by this ZenlinkProtocol Version.
			 **/
			UnsupportedAssetType: AugmentedError<ApiType>;
			/**
			 * Zero contribute in bootstrap
			 **/
			ZeroContribute: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		zenlinkStableAMM: {
			/**
			 * The ramping A of this pool is already stopped.
			 **/
			AlreadyStoppedRampA: AugmentedError<ApiType>;
			/**
			 * Slippage is too large.
			 **/
			AmountSlippage: AugmentedError<ApiType>;
			/**
			 * The error generate by some arithmetic function.
			 **/
			Arithmetic: AugmentedError<ApiType>;
			/**
			 * The symbol of created pool maybe exceed length limit.
			 **/
			BadPoolCurrencySymbol: AugmentedError<ApiType>;
			/**
			 * The new d below then older.
			 **/
			CheckDFailed: AugmentedError<ApiType>;
			/**
			 * The index of currency id bigger the length of pool's currencies;
			 **/
			CurrencyIndexOutRange: AugmentedError<ApiType>;
			/**
			 * The call already expired.
			 **/
			Deadline: AugmentedError<ApiType>;
			/**
			 * The A parameter exceed MAX_A when create pool.
			 **/
			ExceedMaxA: AugmentedError<ApiType>;
			/**
			 * Forbid change A of a pool bigger than MAX_A.
			 **/
			ExceedMaxAChange: AugmentedError<ApiType>;
			/**
			 * The admin fee parameter exceeds MAX_ADMIN_FEE when create pool.
			 **/
			ExceedMaxAdminFee: AugmentedError<ApiType>;
			/**
			 * The fee parameter exceeds MAX_SWAP_FEE when create pool.
			 **/
			ExceedMaxFee: AugmentedError<ApiType>;
			/**
			 * The setting value exceed threshold.
			 **/
			ExceedThreshold: AugmentedError<ApiType>;
			/**
			 * The pool does not have enough lp currency.
			 **/
			InsufficientLpReserve: AugmentedError<ApiType>;
			/**
			 * The pool does not have enough currencies.
			 **/
			InsufficientReserve: AugmentedError<ApiType>;
			/**
			 * The caller does not have enough currencies.
			 **/
			InsufficientSupply: AugmentedError<ApiType>;
			/**
			 * The base pool mismatch this pool.
			 **/
			InvalidBasePool: AugmentedError<ApiType>;
			/**
			 * The base pool lp currency is invalid when create meta pool.
			 **/
			InvalidBasePoolLpCurrency: AugmentedError<ApiType>;
			/**
			 * The decimal of currency is invalid when create pool.
			 **/
			InvalidCurrencyDecimal: AugmentedError<ApiType>;
			/**
			 * The currency id can't become the lp currency id of stable amm pool.
			 **/
			InvalidLpCurrency: AugmentedError<ApiType>;
			/**
			 * The currency id can't join stable amm pool.
			 **/
			InvalidPooledCurrency: AugmentedError<ApiType>;
			/**
			 * The pool id is invalid.
			 **/
			InvalidPoolId: AugmentedError<ApiType>;
			/**
			 * The transaction change nothing.
			 **/
			InvalidTransaction: AugmentedError<ApiType>;
			/**
			 * The lp currency id is already used when create pool.
			 **/
			LpCurrencyAlreadyUsed: AugmentedError<ApiType>;
			/**
			 * The value of feature_a_time is too small.
			 **/
			MinRampTime: AugmentedError<ApiType>;
			/**
			 * The parameters of a call are contradictory.
			 **/
			MismatchParameter: AugmentedError<ApiType>;
			/**
			 * The A of this pool is already ramped in current period.
			 **/
			RampADelay: AugmentedError<ApiType>;
			/**
			 * Require all currencies of this pool when first supply.
			 **/
			RequireAllCurrencies: AugmentedError<ApiType>;
			/**
			 * Forbid swap same currency.
			 **/
			SwapSameCurrency: AugmentedError<ApiType>;
			/**
			 * The token index out of range.
			 **/
			TokenIndexOutOfRange: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
		zenlinkSwapRouter: {
			AmountSlippage: AugmentedError<ApiType>;
			ConvertCurrencyFailed: AugmentedError<ApiType>;
			Deadline: AugmentedError<ApiType>;
			InvalidPath: AugmentedError<ApiType>;
			InvalidRoutes: AugmentedError<ApiType>;
			MismatchPoolAndCurrencyId: AugmentedError<ApiType>;
			/**
			 * Generic error
			 **/
			[key: string]: AugmentedError<ApiType>;
		};
	} // AugmentedErrors
} // declare module
