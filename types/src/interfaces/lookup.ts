// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
	/**
	 * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
	 **/
	FrameSystemAccountInfo: {
		nonce: 'u32',
		consumers: 'u32',
		providers: 'u32',
		sufficients: 'u32',
		data: 'PalletBalancesAccountData',
	},
	/**
	 * Lookup5: pallet_balances::types::AccountData<Balance>
	 **/
	PalletBalancesAccountData: {
		free: 'u128',
		reserved: 'u128',
		frozen: 'u128',
		flags: 'u128',
	},
	/**
	 * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
	 **/
	FrameSupportDispatchPerDispatchClassWeight: {
		normal: 'SpWeightsWeightV2Weight',
		operational: 'SpWeightsWeightV2Weight',
		mandatory: 'SpWeightsWeightV2Weight',
	},
	/**
	 * Lookup9: sp_weights::weight_v2::Weight
	 **/
	SpWeightsWeightV2Weight: {
		refTime: 'Compact<u64>',
		proofSize: 'Compact<u64>',
	},
	/**
	 * Lookup14: sp_runtime::generic::digest::Digest
	 **/
	SpRuntimeDigest: {
		logs: 'Vec<SpRuntimeDigestDigestItem>',
	},
	/**
	 * Lookup16: sp_runtime::generic::digest::DigestItem
	 **/
	SpRuntimeDigestDigestItem: {
		_enum: {
			Other: 'Bytes',
			__Unused1: 'Null',
			__Unused2: 'Null',
			__Unused3: 'Null',
			Consensus: '([u8;4],Bytes)',
			Seal: '([u8;4],Bytes)',
			PreRuntime: '([u8;4],Bytes)',
			__Unused7: 'Null',
			RuntimeEnvironmentUpdated: 'Null',
		},
	},
	/**
	 * Lookup19: frame_system::EventRecord<tangle_kusama_runtime::RuntimeEvent, primitive_types::H256>
	 **/
	FrameSystemEventRecord: {
		phase: 'FrameSystemPhase',
		event: 'Event',
		topics: 'Vec<H256>',
	},
	/**
	 * Lookup21: frame_system::pallet::Event<T>
	 **/
	FrameSystemEvent: {
		_enum: {
			ExtrinsicSuccess: {
				dispatchInfo: 'FrameSupportDispatchDispatchInfo',
			},
			ExtrinsicFailed: {
				dispatchError: 'SpRuntimeDispatchError',
				dispatchInfo: 'FrameSupportDispatchDispatchInfo',
			},
			CodeUpdated: 'Null',
			NewAccount: {
				account: 'AccountId32',
			},
			KilledAccount: {
				account: 'AccountId32',
			},
			Remarked: {
				_alias: {
					hash_: 'hash',
				},
				sender: 'AccountId32',
				hash_: 'H256',
			},
		},
	},
	/**
	 * Lookup22: frame_support::dispatch::DispatchInfo
	 **/
	FrameSupportDispatchDispatchInfo: {
		weight: 'SpWeightsWeightV2Weight',
		class: 'FrameSupportDispatchDispatchClass',
		paysFee: 'FrameSupportDispatchPays',
	},
	/**
	 * Lookup23: frame_support::dispatch::DispatchClass
	 **/
	FrameSupportDispatchDispatchClass: {
		_enum: ['Normal', 'Operational', 'Mandatory'],
	},
	/**
	 * Lookup24: frame_support::dispatch::Pays
	 **/
	FrameSupportDispatchPays: {
		_enum: ['Yes', 'No'],
	},
	/**
	 * Lookup25: sp_runtime::DispatchError
	 **/
	SpRuntimeDispatchError: {
		_enum: {
			Other: 'Null',
			CannotLookup: 'Null',
			BadOrigin: 'Null',
			Module: 'SpRuntimeModuleError',
			ConsumerRemaining: 'Null',
			NoProviders: 'Null',
			TooManyConsumers: 'Null',
			Token: 'SpRuntimeTokenError',
			Arithmetic: 'SpArithmeticArithmeticError',
			Transactional: 'SpRuntimeTransactionalError',
			Exhausted: 'Null',
			Corruption: 'Null',
			Unavailable: 'Null',
			RootNotAllowed: 'Null',
		},
	},
	/**
	 * Lookup26: sp_runtime::ModuleError
	 **/
	SpRuntimeModuleError: {
		index: 'u8',
		error: '[u8;4]',
	},
	/**
	 * Lookup27: sp_runtime::TokenError
	 **/
	SpRuntimeTokenError: {
		_enum: [
			'FundsUnavailable',
			'OnlyProvider',
			'BelowMinimum',
			'CannotCreate',
			'UnknownAsset',
			'Frozen',
			'Unsupported',
			'CannotCreateHold',
			'NotExpendable',
			'Blocked',
		],
	},
	/**
	 * Lookup28: sp_arithmetic::ArithmeticError
	 **/
	SpArithmeticArithmeticError: {
		_enum: ['Underflow', 'Overflow', 'DivisionByZero'],
	},
	/**
	 * Lookup29: sp_runtime::TransactionalError
	 **/
	SpRuntimeTransactionalError: {
		_enum: ['LimitReached', 'NoLayer'],
	},
	/**
	 * Lookup30: pallet_indices::pallet::Event<T>
	 **/
	PalletIndicesEvent: {
		_enum: {
			IndexAssigned: {
				who: 'AccountId32',
				index: 'u32',
			},
			IndexFreed: {
				index: 'u32',
			},
			IndexFrozen: {
				index: 'u32',
				who: 'AccountId32',
			},
		},
	},
	/**
	 * Lookup31: cumulus_pallet_parachain_system::pallet::Event<T>
	 **/
	CumulusPalletParachainSystemEvent: {
		_enum: {
			ValidationFunctionStored: 'Null',
			ValidationFunctionApplied: {
				relayChainBlockNum: 'u32',
			},
			ValidationFunctionDiscarded: 'Null',
			UpgradeAuthorized: {
				codeHash: 'H256',
			},
			DownwardMessagesReceived: {
				count: 'u32',
			},
			DownwardMessagesProcessed: {
				weightUsed: 'SpWeightsWeightV2Weight',
				dmqHead: 'H256',
			},
			UpwardMessageSent: {
				messageHash: 'Option<[u8;32]>',
			},
		},
	},
	/**
	 * Lookup33: pallet_balances::pallet::Event<T, I>
	 **/
	PalletBalancesEvent: {
		_enum: {
			Endowed: {
				account: 'AccountId32',
				freeBalance: 'u128',
			},
			DustLost: {
				account: 'AccountId32',
				amount: 'u128',
			},
			Transfer: {
				from: 'AccountId32',
				to: 'AccountId32',
				amount: 'u128',
			},
			BalanceSet: {
				who: 'AccountId32',
				free: 'u128',
			},
			Reserved: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Unreserved: {
				who: 'AccountId32',
				amount: 'u128',
			},
			ReserveRepatriated: {
				from: 'AccountId32',
				to: 'AccountId32',
				amount: 'u128',
				destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
			},
			Deposit: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Withdraw: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Slashed: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Minted: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Burned: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Suspended: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Restored: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Upgraded: {
				who: 'AccountId32',
			},
			Issued: {
				amount: 'u128',
			},
			Rescinded: {
				amount: 'u128',
			},
			Locked: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Unlocked: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Frozen: {
				who: 'AccountId32',
				amount: 'u128',
			},
			Thawed: {
				who: 'AccountId32',
				amount: 'u128',
			},
		},
	},
	/**
	 * Lookup34: frame_support::traits::tokens::misc::BalanceStatus
	 **/
	FrameSupportTokensMiscBalanceStatus: {
		_enum: ['Free', 'Reserved'],
	},
	/**
	 * Lookup35: pallet_transaction_payment::pallet::Event<T>
	 **/
	PalletTransactionPaymentEvent: {
		_enum: {
			TransactionFeePaid: {
				who: 'AccountId32',
				actualFee: 'u128',
				tip: 'u128',
			},
		},
	},
	/**
	 * Lookup36: pallet_session::pallet::Event
	 **/
	PalletSessionEvent: {
		_enum: {
			NewSession: {
				sessionIndex: 'u32',
			},
		},
	},
	/**
	 * Lookup37: tangle_parachain_staking::pallet::Event<T>
	 **/
	TangleParachainStakingEvent: {
		_enum: {
			NewRound: {
				startingBlock: 'u32',
				round: 'u32',
				selectedCollatorsNumber: 'u32',
				totalBalance: 'u128',
			},
			JoinedCollatorCandidates: {
				account: 'AccountId32',
				amountLocked: 'u128',
				newTotalAmtLocked: 'u128',
			},
			CollatorChosen: {
				round: 'u32',
				collatorAccount: 'AccountId32',
				totalExposedAmount: 'u128',
			},
			CandidateBondLessRequested: {
				candidate: 'AccountId32',
				amountToDecrease: 'u128',
				executeRound: 'u32',
			},
			CandidateBondedMore: {
				candidate: 'AccountId32',
				amount: 'u128',
				newTotalBond: 'u128',
			},
			CandidateBondedLess: {
				candidate: 'AccountId32',
				amount: 'u128',
				newBond: 'u128',
			},
			CandidateWentOffline: {
				candidate: 'AccountId32',
			},
			CandidateBackOnline: {
				candidate: 'AccountId32',
			},
			CandidateScheduledExit: {
				exitAllowedRound: 'u32',
				candidate: 'AccountId32',
				scheduledExit: 'u32',
			},
			CancelledCandidateExit: {
				candidate: 'AccountId32',
			},
			CancelledCandidateBondLess: {
				candidate: 'AccountId32',
				amount: 'u128',
				executeRound: 'u32',
			},
			CandidateLeft: {
				exCandidate: 'AccountId32',
				unlockedAmount: 'u128',
				newTotalAmtLocked: 'u128',
			},
			DelegationDecreaseScheduled: {
				delegator: 'AccountId32',
				candidate: 'AccountId32',
				amountToDecrease: 'u128',
				executeRound: 'u32',
			},
			DelegationIncreased: {
				delegator: 'AccountId32',
				candidate: 'AccountId32',
				amount: 'u128',
				inTop: 'bool',
			},
			DelegationDecreased: {
				delegator: 'AccountId32',
				candidate: 'AccountId32',
				amount: 'u128',
				inTop: 'bool',
			},
			DelegatorExitScheduled: {
				round: 'u32',
				delegator: 'AccountId32',
				scheduledExit: 'u32',
			},
			DelegationRevocationScheduled: {
				round: 'u32',
				delegator: 'AccountId32',
				candidate: 'AccountId32',
				scheduledExit: 'u32',
			},
			DelegatorLeft: {
				delegator: 'AccountId32',
				unstakedAmount: 'u128',
			},
			DelegationRevoked: {
				delegator: 'AccountId32',
				candidate: 'AccountId32',
				unstakedAmount: 'u128',
			},
			DelegationKicked: {
				delegator: 'AccountId32',
				candidate: 'AccountId32',
				unstakedAmount: 'u128',
			},
			DelegatorExitCancelled: {
				delegator: 'AccountId32',
			},
			CancelledDelegationRequest: {
				delegator: 'AccountId32',
				cancelledRequest: 'TangleParachainStakingDelegationRequestsCancelledScheduledRequest',
				collator: 'AccountId32',
			},
			Delegation: {
				delegator: 'AccountId32',
				lockedAmount: 'u128',
				candidate: 'AccountId32',
				delegatorPosition: 'TangleParachainStakingDelegatorAdded',
			},
			DelegatorLeftCandidate: {
				delegator: 'AccountId32',
				candidate: 'AccountId32',
				unstakedAmount: 'u128',
				totalCandidateStaked: 'u128',
			},
			Rewarded: {
				account: 'AccountId32',
				rewards: 'u128',
			},
			ReservedForParachainBond: {
				account: 'AccountId32',
				value: 'u128',
			},
			ParachainBondAccountSet: {
				_alias: {
					new_: 'new',
				},
				old: 'AccountId32',
				new_: 'AccountId32',
			},
			ParachainBondReservePercentSet: {
				_alias: {
					new_: 'new',
				},
				old: 'Percent',
				new_: 'Percent',
			},
			InflationSet: {
				annualMin: 'Perbill',
				annualIdeal: 'Perbill',
				annualMax: 'Perbill',
				roundMin: 'Perbill',
				roundIdeal: 'Perbill',
				roundMax: 'Perbill',
			},
			StakeExpectationsSet: {
				expectMin: 'u128',
				expectIdeal: 'u128',
				expectMax: 'u128',
			},
			TotalSelectedSet: {
				_alias: {
					new_: 'new',
				},
				old: 'u32',
				new_: 'u32',
			},
			CollatorCommissionSet: {
				_alias: {
					new_: 'new',
				},
				old: 'Perbill',
				new_: 'Perbill',
			},
			BlocksPerRoundSet: {
				_alias: {
					new_: 'new',
				},
				currentRound: 'u32',
				firstBlock: 'u32',
				old: 'u32',
				new_: 'u32',
				newPerRoundInflationMin: 'Perbill',
				newPerRoundInflationIdeal: 'Perbill',
				newPerRoundInflationMax: 'Perbill',
			},
		},
	},
	/**
	 * Lookup39: tangle_parachain_staking::delegation_requests::CancelledScheduledRequest<Balance>
	 **/
	TangleParachainStakingDelegationRequestsCancelledScheduledRequest: {
		whenExecutable: 'u32',
		action: 'TangleParachainStakingDelegationRequestsDelegationAction',
	},
	/**
	 * Lookup40: tangle_parachain_staking::delegation_requests::DelegationAction<Balance>
	 **/
	TangleParachainStakingDelegationRequestsDelegationAction: {
		_enum: {
			Revoke: 'u128',
			Decrease: 'u128',
		},
	},
	/**
	 * Lookup41: tangle_parachain_staking::types::DelegatorAdded<B>
	 **/
	TangleParachainStakingDelegatorAdded: {
		_enum: {
			AddedToTop: {
				newTotal: 'u128',
			},
			AddedToBottom: 'Null',
		},
	},
	/**
	 * Lookup44: pallet_democracy::pallet::Event<T>
	 **/
	PalletDemocracyEvent: {
		_enum: {
			Proposed: {
				proposalIndex: 'u32',
				deposit: 'u128',
			},
			Tabled: {
				proposalIndex: 'u32',
				deposit: 'u128',
			},
			ExternalTabled: 'Null',
			Started: {
				refIndex: 'u32',
				threshold: 'PalletDemocracyVoteThreshold',
			},
			Passed: {
				refIndex: 'u32',
			},
			NotPassed: {
				refIndex: 'u32',
			},
			Cancelled: {
				refIndex: 'u32',
			},
			Delegated: {
				who: 'AccountId32',
				target: 'AccountId32',
			},
			Undelegated: {
				account: 'AccountId32',
			},
			Vetoed: {
				who: 'AccountId32',
				proposalHash: 'H256',
				until: 'u32',
			},
			Blacklisted: {
				proposalHash: 'H256',
			},
			Voted: {
				voter: 'AccountId32',
				refIndex: 'u32',
				vote: 'PalletDemocracyVoteAccountVote',
			},
			Seconded: {
				seconder: 'AccountId32',
				propIndex: 'u32',
			},
			ProposalCanceled: {
				propIndex: 'u32',
			},
			MetadataSet: {
				_alias: {
					hash_: 'hash',
				},
				owner: 'PalletDemocracyMetadataOwner',
				hash_: 'H256',
			},
			MetadataCleared: {
				_alias: {
					hash_: 'hash',
				},
				owner: 'PalletDemocracyMetadataOwner',
				hash_: 'H256',
			},
			MetadataTransferred: {
				_alias: {
					hash_: 'hash',
				},
				prevOwner: 'PalletDemocracyMetadataOwner',
				owner: 'PalletDemocracyMetadataOwner',
				hash_: 'H256',
			},
		},
	},
	/**
	 * Lookup45: pallet_democracy::vote_threshold::VoteThreshold
	 **/
	PalletDemocracyVoteThreshold: {
		_enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority'],
	},
	/**
	 * Lookup46: pallet_democracy::vote::AccountVote<Balance>
	 **/
	PalletDemocracyVoteAccountVote: {
		_enum: {
			Standard: {
				vote: 'Vote',
				balance: 'u128',
			},
			Split: {
				aye: 'u128',
				nay: 'u128',
			},
		},
	},
	/**
	 * Lookup48: pallet_democracy::types::MetadataOwner
	 **/
	PalletDemocracyMetadataOwner: {
		_enum: {
			External: 'Null',
			Proposal: 'u32',
			Referendum: 'u32',
		},
	},
	/**
	 * Lookup49: pallet_collective::pallet::Event<T, I>
	 **/
	PalletCollectiveEvent: {
		_enum: {
			Proposed: {
				account: 'AccountId32',
				proposalIndex: 'u32',
				proposalHash: 'H256',
				threshold: 'u32',
			},
			Voted: {
				account: 'AccountId32',
				proposalHash: 'H256',
				voted: 'bool',
				yes: 'u32',
				no: 'u32',
			},
			Approved: {
				proposalHash: 'H256',
			},
			Disapproved: {
				proposalHash: 'H256',
			},
			Executed: {
				proposalHash: 'H256',
				result: 'Result<Null, SpRuntimeDispatchError>',
			},
			MemberExecuted: {
				proposalHash: 'H256',
				result: 'Result<Null, SpRuntimeDispatchError>',
			},
			Closed: {
				proposalHash: 'H256',
				yes: 'u32',
				no: 'u32',
			},
		},
	},
	/**
	 * Lookup53: pallet_elections_phragmen::pallet::Event<T>
	 **/
	PalletElectionsPhragmenEvent: {
		_enum: {
			NewTerm: {
				newMembers: 'Vec<(AccountId32,u128)>',
			},
			EmptyTerm: 'Null',
			ElectionError: 'Null',
			MemberKicked: {
				member: 'AccountId32',
			},
			Renounced: {
				candidate: 'AccountId32',
			},
			CandidateSlashed: {
				candidate: 'AccountId32',
				amount: 'u128',
			},
			SeatHolderSlashed: {
				seatHolder: 'AccountId32',
				amount: 'u128',
			},
		},
	},
	/**
	 * Lookup56: pallet_membership::pallet::Event<T, I>
	 **/
	PalletMembershipEvent: {
		_enum: [
			'MemberAdded',
			'MemberRemoved',
			'MembersSwapped',
			'MembersReset',
			'KeyChanged',
			'Dummy',
		],
	},
	/**
	 * Lookup58: pallet_conviction_voting::pallet::Event<T, I>
	 **/
	PalletConvictionVotingEvent: {
		_enum: {
			Delegated: '(AccountId32,AccountId32)',
			Undelegated: 'AccountId32',
		},
	},
	/**
	 * Lookup59: pallet_referenda::pallet::Event<T, I>
	 **/
	PalletReferendaEvent: {
		_enum: {
			Submitted: {
				index: 'u32',
				track: 'u16',
				proposal: 'FrameSupportPreimagesBounded',
			},
			DecisionDepositPlaced: {
				index: 'u32',
				who: 'AccountId32',
				amount: 'u128',
			},
			DecisionDepositRefunded: {
				index: 'u32',
				who: 'AccountId32',
				amount: 'u128',
			},
			DepositSlashed: {
				who: 'AccountId32',
				amount: 'u128',
			},
			DecisionStarted: {
				index: 'u32',
				track: 'u16',
				proposal: 'FrameSupportPreimagesBounded',
				tally: 'PalletConvictionVotingTally',
			},
			ConfirmStarted: {
				index: 'u32',
			},
			ConfirmAborted: {
				index: 'u32',
			},
			Confirmed: {
				index: 'u32',
				tally: 'PalletConvictionVotingTally',
			},
			Approved: {
				index: 'u32',
			},
			Rejected: {
				index: 'u32',
				tally: 'PalletConvictionVotingTally',
			},
			TimedOut: {
				index: 'u32',
				tally: 'PalletConvictionVotingTally',
			},
			Cancelled: {
				index: 'u32',
				tally: 'PalletConvictionVotingTally',
			},
			Killed: {
				index: 'u32',
				tally: 'PalletConvictionVotingTally',
			},
			SubmissionDepositRefunded: {
				index: 'u32',
				who: 'AccountId32',
				amount: 'u128',
			},
			MetadataSet: {
				_alias: {
					hash_: 'hash',
				},
				index: 'u32',
				hash_: 'H256',
			},
			MetadataCleared: {
				_alias: {
					hash_: 'hash',
				},
				index: 'u32',
				hash_: 'H256',
			},
		},
	},
	/**
	 * Lookup61: frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
	 **/
	FrameSupportPreimagesBounded: {
		_enum: {
			Legacy: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
			Inline: 'Bytes',
			Lookup: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
				len: 'u32',
			},
		},
	},
	/**
	 * Lookup63: frame_system::pallet::Call<T>
	 **/
	FrameSystemCall: {
		_enum: {
			remark: {
				remark: 'Bytes',
			},
			set_heap_pages: {
				pages: 'u64',
			},
			set_code: {
				code: 'Bytes',
			},
			set_code_without_checks: {
				code: 'Bytes',
			},
			set_storage: {
				items: 'Vec<(Bytes,Bytes)>',
			},
			kill_storage: {
				_alias: {
					keys_: 'keys',
				},
				keys_: 'Vec<Bytes>',
			},
			kill_prefix: {
				prefix: 'Bytes',
				subkeys: 'u32',
			},
			remark_with_event: {
				remark: 'Bytes',
			},
		},
	},
	/**
	 * Lookup67: pallet_timestamp::pallet::Call<T>
	 **/
	PalletTimestampCall: {
		_enum: {
			set: {
				now: 'Compact<u64>',
			},
		},
	},
	/**
	 * Lookup68: pallet_indices::pallet::Call<T>
	 **/
	PalletIndicesCall: {
		_enum: {
			claim: {
				index: 'u32',
			},
			transfer: {
				_alias: {
					new_: 'new',
				},
				new_: 'MultiAddress',
				index: 'u32',
			},
			free: {
				index: 'u32',
			},
			force_transfer: {
				_alias: {
					new_: 'new',
				},
				new_: 'MultiAddress',
				index: 'u32',
				freeze: 'bool',
			},
			freeze: {
				index: 'u32',
			},
		},
	},
	/**
	 * Lookup72: cumulus_pallet_parachain_system::pallet::Call<T>
	 **/
	CumulusPalletParachainSystemCall: {
		_enum: {
			set_validation_data: {
				data: 'CumulusPrimitivesParachainInherentParachainInherentData',
			},
			sudo_send_upward_message: {
				message: 'Bytes',
			},
			authorize_upgrade: {
				codeHash: 'H256',
				checkVersion: 'bool',
			},
			enact_authorized_upgrade: {
				code: 'Bytes',
			},
		},
	},
	/**
	 * Lookup73: cumulus_primitives_parachain_inherent::ParachainInherentData
	 **/
	CumulusPrimitivesParachainInherentParachainInherentData: {
		validationData: 'PolkadotPrimitivesV6PersistedValidationData',
		relayChainState: 'SpTrieStorageProof',
		downwardMessages: 'Vec<PolkadotCorePrimitivesInboundDownwardMessage>',
		horizontalMessages: 'BTreeMap<u32, Vec<PolkadotCorePrimitivesInboundHrmpMessage>>',
	},
	/**
	 * Lookup74: polkadot_primitives::v6::PersistedValidationData<primitive_types::H256, N>
	 **/
	PolkadotPrimitivesV6PersistedValidationData: {
		parentHead: 'Bytes',
		relayParentNumber: 'u32',
		relayParentStorageRoot: 'H256',
		maxPovSize: 'u32',
	},
	/**
	 * Lookup76: sp_trie::storage_proof::StorageProof
	 **/
	SpTrieStorageProof: {
		trieNodes: 'BTreeSet<Bytes>',
	},
	/**
	 * Lookup79: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
	 **/
	PolkadotCorePrimitivesInboundDownwardMessage: {
		sentAt: 'u32',
		msg: 'Bytes',
	},
	/**
	 * Lookup83: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
	 **/
	PolkadotCorePrimitivesInboundHrmpMessage: {
		sentAt: 'u32',
		data: 'Bytes',
	},
	/**
	 * Lookup86: staging_parachain_info::pallet::Call<T>
	 **/
	StagingParachainInfoCall: 'Null',
	/**
	 * Lookup87: pallet_balances::pallet::Call<T, I>
	 **/
	PalletBalancesCall: {
		_enum: {
			transfer_allow_death: {
				dest: 'MultiAddress',
				value: 'Compact<u128>',
			},
			__Unused1: 'Null',
			force_transfer: {
				source: 'MultiAddress',
				dest: 'MultiAddress',
				value: 'Compact<u128>',
			},
			transfer_keep_alive: {
				dest: 'MultiAddress',
				value: 'Compact<u128>',
			},
			transfer_all: {
				dest: 'MultiAddress',
				keepAlive: 'bool',
			},
			force_unreserve: {
				who: 'MultiAddress',
				amount: 'u128',
			},
			upgrade_accounts: {
				who: 'Vec<AccountId32>',
			},
			__Unused7: 'Null',
			force_set_balance: {
				who: 'MultiAddress',
				newFree: 'Compact<u128>',
			},
		},
	},
	/**
	 * Lookup90: pallet_session::pallet::Call<T>
	 **/
	PalletSessionCall: {
		_enum: {
			set_keys: {
				_alias: {
					keys_: 'keys',
				},
				keys_: 'TangleKusamaRuntimeSessionKeys',
				proof: 'Bytes',
			},
			purge_keys: 'Null',
		},
	},
	/**
	 * Lookup91: tangle_kusama_runtime::SessionKeys
	 **/
	TangleKusamaRuntimeSessionKeys: {
		aura: 'SpConsensusAuraSr25519AppSr25519Public',
	},
	/**
	 * Lookup92: sp_consensus_aura::sr25519::app_sr25519::Public
	 **/
	SpConsensusAuraSr25519AppSr25519Public: 'SpCoreSr25519Public',
	/**
	 * Lookup93: sp_core::sr25519::Public
	 **/
	SpCoreSr25519Public: '[u8;32]',
	/**
	 * Lookup94: tangle_parachain_staking::pallet::Call<T>
	 **/
	TangleParachainStakingCall: {
		_enum: {
			set_staking_expectations: {
				expectations: {
					min: 'u128',
					ideal: 'u128',
					max: 'u128',
				},
			},
			set_inflation: {
				schedule: {
					min: 'Perbill',
					ideal: 'Perbill',
					max: 'Perbill',
				},
			},
			set_parachain_bond_account: {
				_alias: {
					new_: 'new',
				},
				new_: 'AccountId32',
			},
			set_parachain_bond_reserve_percent: {
				_alias: {
					new_: 'new',
				},
				new_: 'Percent',
			},
			set_total_selected: {
				_alias: {
					new_: 'new',
				},
				new_: 'u32',
			},
			set_collator_commission: {
				_alias: {
					new_: 'new',
				},
				new_: 'Perbill',
			},
			set_blocks_per_round: {
				_alias: {
					new_: 'new',
				},
				new_: 'u32',
			},
			join_candidates: {
				bond: 'u128',
				candidateCount: 'u32',
			},
			schedule_leave_candidates: {
				candidateCount: 'u32',
			},
			execute_leave_candidates: {
				candidate: 'AccountId32',
				candidateDelegationCount: 'u32',
			},
			cancel_leave_candidates: {
				candidateCount: 'u32',
			},
			go_offline: 'Null',
			go_online: 'Null',
			candidate_bond_more: {
				more: 'u128',
			},
			schedule_candidate_bond_less: {
				less: 'u128',
			},
			execute_candidate_bond_less: {
				candidate: 'AccountId32',
			},
			cancel_candidate_bond_less: 'Null',
			delegate: {
				candidate: 'AccountId32',
				amount: 'u128',
				candidateDelegationCount: 'u32',
				delegationCount: 'u32',
			},
			schedule_leave_delegators: 'Null',
			execute_leave_delegators: {
				delegator: 'AccountId32',
				delegationCount: 'u32',
			},
			cancel_leave_delegators: 'Null',
			schedule_revoke_delegation: {
				collator: 'AccountId32',
			},
			delegator_bond_more: {
				candidate: 'AccountId32',
				more: 'u128',
			},
			schedule_delegator_bond_less: {
				candidate: 'AccountId32',
				less: 'u128',
			},
			execute_delegation_request: {
				delegator: 'AccountId32',
				candidate: 'AccountId32',
			},
			cancel_delegation_request: {
				candidate: 'AccountId32',
			},
			hotfix_remove_delegation_requests_exited_candidates: {
				candidates: 'Vec<AccountId32>',
			},
			hotfix_migrate_delegators_from_reserve_to_locks: {
				delegators: 'Vec<AccountId32>',
			},
			hotfix_migrate_collators_from_reserve_to_locks: {
				collators: 'Vec<AccountId32>',
			},
		},
	},
	/**
	 * Lookup97: pallet_democracy::pallet::Call<T>
	 **/
	PalletDemocracyCall: {
		_enum: {
			propose: {
				proposal: 'FrameSupportPreimagesBounded',
				value: 'Compact<u128>',
			},
			second: {
				proposal: 'Compact<u32>',
			},
			vote: {
				refIndex: 'Compact<u32>',
				vote: 'PalletDemocracyVoteAccountVote',
			},
			emergency_cancel: {
				refIndex: 'u32',
			},
			external_propose: {
				proposal: 'FrameSupportPreimagesBounded',
			},
			external_propose_majority: {
				proposal: 'FrameSupportPreimagesBounded',
			},
			external_propose_default: {
				proposal: 'FrameSupportPreimagesBounded',
			},
			fast_track: {
				proposalHash: 'H256',
				votingPeriod: 'u32',
				delay: 'u32',
			},
			veto_external: {
				proposalHash: 'H256',
			},
			cancel_referendum: {
				refIndex: 'Compact<u32>',
			},
			delegate: {
				to: 'MultiAddress',
				conviction: 'PalletDemocracyConviction',
				balance: 'u128',
			},
			undelegate: 'Null',
			clear_public_proposals: 'Null',
			unlock: {
				target: 'MultiAddress',
			},
			remove_vote: {
				index: 'u32',
			},
			remove_other_vote: {
				target: 'MultiAddress',
				index: 'u32',
			},
			blacklist: {
				proposalHash: 'H256',
				maybeRefIndex: 'Option<u32>',
			},
			cancel_proposal: {
				propIndex: 'Compact<u32>',
			},
			set_metadata: {
				owner: 'PalletDemocracyMetadataOwner',
				maybeHash: 'Option<H256>',
			},
		},
	},
	/**
	 * Lookup98: pallet_democracy::conviction::Conviction
	 **/
	PalletDemocracyConviction: {
		_enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x'],
	},
	/**
	 * Lookup101: pallet_collective::pallet::Call<T, I>
	 **/
	PalletCollectiveCall: {
		_enum: {
			set_members: {
				newMembers: 'Vec<AccountId32>',
				prime: 'Option<AccountId32>',
				oldCount: 'u32',
			},
			execute: {
				proposal: 'Call',
				lengthBound: 'Compact<u32>',
			},
			propose: {
				threshold: 'Compact<u32>',
				proposal: 'Call',
				lengthBound: 'Compact<u32>',
			},
			vote: {
				proposal: 'H256',
				index: 'Compact<u32>',
				approve: 'bool',
			},
			__Unused4: 'Null',
			disapprove_proposal: {
				proposalHash: 'H256',
			},
			close: {
				proposalHash: 'H256',
				index: 'Compact<u32>',
				proposalWeightBound: 'SpWeightsWeightV2Weight',
				lengthBound: 'Compact<u32>',
			},
		},
	},
	/**
	 * Lookup104: pallet_elections_phragmen::pallet::Call<T>
	 **/
	PalletElectionsPhragmenCall: {
		_enum: {
			vote: {
				votes: 'Vec<AccountId32>',
				value: 'Compact<u128>',
			},
			remove_voter: 'Null',
			submit_candidacy: {
				candidateCount: 'Compact<u32>',
			},
			renounce_candidacy: {
				renouncing: 'PalletElectionsPhragmenRenouncing',
			},
			remove_member: {
				who: 'MultiAddress',
				slashBond: 'bool',
				rerunElection: 'bool',
			},
			clean_defunct_voters: {
				numVoters: 'u32',
				numDefunct: 'u32',
			},
		},
	},
	/**
	 * Lookup105: pallet_elections_phragmen::Renouncing
	 **/
	PalletElectionsPhragmenRenouncing: {
		_enum: {
			Member: 'Null',
			RunnerUp: 'Null',
			Candidate: 'Compact<u32>',
		},
	},
	/**
	 * Lookup106: pallet_membership::pallet::Call<T, I>
	 **/
	PalletMembershipCall: {
		_enum: {
			add_member: {
				who: 'MultiAddress',
			},
			remove_member: {
				who: 'MultiAddress',
			},
			swap_member: {
				remove: 'MultiAddress',
				add: 'MultiAddress',
			},
			reset_members: {
				members: 'Vec<AccountId32>',
			},
			change_key: {
				_alias: {
					new_: 'new',
				},
				new_: 'MultiAddress',
			},
			set_prime: {
				who: 'MultiAddress',
			},
			clear_prime: 'Null',
		},
	},
	/**
	 * Lookup108: pallet_conviction_voting::pallet::Call<T, I>
	 **/
	PalletConvictionVotingCall: {
		_enum: {
			vote: {
				pollIndex: 'Compact<u32>',
				vote: 'PalletConvictionVotingVoteAccountVote',
			},
			delegate: {
				class: 'u16',
				to: 'MultiAddress',
				conviction: 'PalletConvictionVotingConviction',
				balance: 'u128',
			},
			undelegate: {
				class: 'u16',
			},
			unlock: {
				class: 'u16',
				target: 'MultiAddress',
			},
			remove_vote: {
				class: 'Option<u16>',
				index: 'u32',
			},
			remove_other_vote: {
				target: 'MultiAddress',
				class: 'u16',
				index: 'u32',
			},
		},
	},
	/**
	 * Lookup109: pallet_conviction_voting::vote::AccountVote<Balance>
	 **/
	PalletConvictionVotingVoteAccountVote: {
		_enum: {
			Standard: {
				vote: 'Vote',
				balance: 'u128',
			},
			Split: {
				aye: 'u128',
				nay: 'u128',
			},
			SplitAbstain: {
				aye: 'u128',
				nay: 'u128',
				abstain: 'u128',
			},
		},
	},
	/**
	 * Lookup111: pallet_conviction_voting::conviction::Conviction
	 **/
	PalletConvictionVotingConviction: {
		_enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x'],
	},
	/**
	 * Lookup113: pallet_referenda::pallet::Call<T, I>
	 **/
	PalletReferendaCall: {
		_enum: {
			submit: {
				proposalOrigin: 'TangleKusamaRuntimeOriginCaller',
				proposal: 'FrameSupportPreimagesBounded',
				enactmentMoment: 'FrameSupportScheduleDispatchTime',
			},
			place_decision_deposit: {
				index: 'u32',
			},
			refund_decision_deposit: {
				index: 'u32',
			},
			cancel: {
				index: 'u32',
			},
			kill: {
				index: 'u32',
			},
			nudge_referendum: {
				index: 'u32',
			},
			one_fewer_deciding: {
				track: 'u16',
			},
			refund_submission_deposit: {
				index: 'u32',
			},
			set_metadata: {
				index: 'u32',
				maybeHash: 'Option<H256>',
			},
		},
	},
	/**
	 * Lookup114: tangle_kusama_runtime::OriginCaller
	 **/
	TangleKusamaRuntimeOriginCaller: {
		_enum: {
			system: 'FrameSupportDispatchRawOrigin',
			__Unused1: 'Null',
			__Unused2: 'Null',
			__Unused3: 'Null',
			__Unused4: 'Null',
			__Unused5: 'Null',
			Void: 'SpCoreVoid',
			__Unused7: 'Null',
			__Unused8: 'Null',
			__Unused9: 'Null',
			__Unused10: 'Null',
			__Unused11: 'Null',
			__Unused12: 'Null',
			__Unused13: 'Null',
			__Unused14: 'Null',
			__Unused15: 'Null',
			__Unused16: 'Null',
			__Unused17: 'Null',
			__Unused18: 'Null',
			__Unused19: 'Null',
			__Unused20: 'Null',
			__Unused21: 'Null',
			__Unused22: 'Null',
			__Unused23: 'Null',
			__Unused24: 'Null',
			__Unused25: 'Null',
			__Unused26: 'Null',
			__Unused27: 'Null',
			__Unused28: 'Null',
			__Unused29: 'Null',
			__Unused30: 'Null',
			Council: 'PalletCollectiveRawOrigin',
			TechnicalCommittee: 'PalletCollectiveRawOrigin',
			__Unused33: 'Null',
			__Unused34: 'Null',
			__Unused35: 'Null',
			__Unused36: 'Null',
			__Unused37: 'Null',
			Origins: 'TangleKusamaRuntimeGovernanceOriginsCustomOriginsOrigin',
			__Unused39: 'Null',
			__Unused40: 'Null',
			PolkadotXcm: 'PalletXcmOrigin',
			CumulusXcm: 'CumulusPalletXcmOrigin',
		},
	},
	/**
	 * Lookup115: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
	 **/
	FrameSupportDispatchRawOrigin: {
		_enum: {
			Root: 'Null',
			Signed: 'AccountId32',
			None: 'Null',
		},
	},
	/**
	 * Lookup116: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
	 **/
	PalletCollectiveRawOrigin: {
		_enum: {
			Members: '(u32,u32)',
			Member: 'AccountId32',
			_Phantom: 'Null',
		},
	},
	/**
	 * Lookup118: tangle_kusama_runtime::governance::origins::custom_origins::Origin
	 **/
	TangleKusamaRuntimeGovernanceOriginsCustomOriginsOrigin: {
		_enum: [
			'WhitelistedCaller',
			'FellowshipAdmin',
			'ReferendumCanceller',
			'ReferendumKiller',
			'LiquidStaking',
			'SALPAdmin',
			'FellowshipInitiates',
			'Fellows',
			'FellowshipExperts',
			'FellowshipMasters',
			'Fellowship1Dan',
			'Fellowship2Dan',
			'Fellowship3Dan',
			'Fellowship4Dan',
			'Fellowship5Dan',
			'Fellowship6Dan',
			'Fellowship7Dan',
			'Fellowship8Dan',
			'Fellowship9Dan',
			'TechAdmin',
			'CoreAdmin',
			'TreasurySpend',
		],
	},
	/**
	 * Lookup119: pallet_xcm::pallet::Origin
	 **/
	PalletXcmOrigin: {
		_enum: {
			Xcm: 'StagingXcmV3MultiLocation',
			Response: 'StagingXcmV3MultiLocation',
		},
	},
	/**
	 * Lookup120: staging_xcm::v3::multilocation::MultiLocation
	 **/
	StagingXcmV3MultiLocation: {
		parents: 'u8',
		interior: 'XcmV3Junctions',
	},
	/**
	 * Lookup121: xcm::v3::junctions::Junctions
	 **/
	XcmV3Junctions: {
		_enum: {
			Here: 'Null',
			X1: 'XcmV3Junction',
			X2: '(XcmV3Junction,XcmV3Junction)',
			X3: '(XcmV3Junction,XcmV3Junction,XcmV3Junction)',
			X4: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
			X5: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
			X6: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
			X7: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
			X8: '(XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction,XcmV3Junction)',
		},
	},
	/**
	 * Lookup122: xcm::v3::junction::Junction
	 **/
	XcmV3Junction: {
		_enum: {
			Parachain: 'Compact<u32>',
			AccountId32: {
				network: 'Option<XcmV3JunctionNetworkId>',
				id: '[u8;32]',
			},
			AccountIndex64: {
				network: 'Option<XcmV3JunctionNetworkId>',
				index: 'Compact<u64>',
			},
			AccountKey20: {
				network: 'Option<XcmV3JunctionNetworkId>',
				key: '[u8;20]',
			},
			PalletInstance: 'u8',
			GeneralIndex: 'Compact<u128>',
			GeneralKey: {
				length: 'u8',
				data: '[u8;32]',
			},
			OnlyChild: 'Null',
			Plurality: {
				id: 'XcmV3JunctionBodyId',
				part: 'XcmV3JunctionBodyPart',
			},
			GlobalConsensus: 'XcmV3JunctionNetworkId',
		},
	},
	/**
	 * Lookup124: xcm::v3::junction::NetworkId
	 **/
	XcmV3JunctionNetworkId: {
		_enum: {
			ByGenesis: '[u8;32]',
			ByFork: {
				blockNumber: 'u64',
				blockHash: '[u8;32]',
			},
			Polkadot: 'Null',
			Kusama: 'Null',
			Westend: 'Null',
			Rococo: 'Null',
			Wococo: 'Null',
			Ethereum: {
				chainId: 'Compact<u64>',
			},
			BitcoinCore: 'Null',
			BitcoinCash: 'Null',
		},
	},
	/**
	 * Lookup125: xcm::v3::junction::BodyId
	 **/
	XcmV3JunctionBodyId: {
		_enum: {
			Unit: 'Null',
			Moniker: '[u8;4]',
			Index: 'Compact<u32>',
			Executive: 'Null',
			Technical: 'Null',
			Legislative: 'Null',
			Judicial: 'Null',
			Defense: 'Null',
			Administration: 'Null',
			Treasury: 'Null',
		},
	},
	/**
	 * Lookup126: xcm::v3::junction::BodyPart
	 **/
	XcmV3JunctionBodyPart: {
		_enum: {
			Voice: 'Null',
			Members: {
				count: 'Compact<u32>',
			},
			Fraction: {
				nom: 'Compact<u32>',
				denom: 'Compact<u32>',
			},
			AtLeastProportion: {
				nom: 'Compact<u32>',
				denom: 'Compact<u32>',
			},
			MoreThanProportion: {
				nom: 'Compact<u32>',
				denom: 'Compact<u32>',
			},
		},
	},
	/**
	 * Lookup127: cumulus_pallet_xcm::pallet::Origin
	 **/
	CumulusPalletXcmOrigin: {
		_enum: {
			Relay: 'Null',
			SiblingParachain: 'u32',
		},
	},
	/**
	 * Lookup128: sp_core::Void
	 **/
	SpCoreVoid: 'Null',
	/**
	 * Lookup129: frame_support::traits::schedule::DispatchTime<BlockNumber>
	 **/
	FrameSupportScheduleDispatchTime: {
		_enum: {
			At: 'u32',
			After: 'u32',
		},
	},
	/**
	 * Lookup130: pallet_whitelist::pallet::Call<T>
	 **/
	PalletWhitelistCall: {
		_enum: {
			whitelist_call: {
				callHash: 'H256',
			},
			remove_whitelisted_call: {
				callHash: 'H256',
			},
			dispatch_whitelisted_call: {
				callHash: 'H256',
				callEncodedLen: 'u32',
				callWeightWitness: 'SpWeightsWeightV2Weight',
			},
			dispatch_whitelisted_call_with_preimage: {
				call: 'Call',
			},
		},
	},
	/**
	 * Lookup131: cumulus_pallet_xcmp_queue::pallet::Call<T>
	 **/
	CumulusPalletXcmpQueueCall: {
		_enum: {
			service_overweight: {
				index: 'u64',
				weightLimit: 'SpWeightsWeightV2Weight',
			},
			suspend_xcm_execution: 'Null',
			resume_xcm_execution: 'Null',
			update_suspend_threshold: {
				_alias: {
					new_: 'new',
				},
				new_: 'u32',
			},
			update_drop_threshold: {
				_alias: {
					new_: 'new',
				},
				new_: 'u32',
			},
			update_resume_threshold: {
				_alias: {
					new_: 'new',
				},
				new_: 'u32',
			},
			update_threshold_weight: {
				_alias: {
					new_: 'new',
				},
				new_: 'SpWeightsWeightV2Weight',
			},
			update_weight_restrict_decay: {
				_alias: {
					new_: 'new',
				},
				new_: 'SpWeightsWeightV2Weight',
			},
			update_xcmp_max_individual_weight: {
				_alias: {
					new_: 'new',
				},
				new_: 'SpWeightsWeightV2Weight',
			},
		},
	},
	/**
	 * Lookup132: pallet_xcm::pallet::Call<T>
	 **/
	PalletXcmCall: {
		_enum: {
			send: {
				dest: 'XcmVersionedMultiLocation',
				message: 'XcmVersionedXcm',
			},
			teleport_assets: {
				dest: 'XcmVersionedMultiLocation',
				beneficiary: 'XcmVersionedMultiLocation',
				assets: 'XcmVersionedMultiAssets',
				feeAssetItem: 'u32',
			},
			reserve_transfer_assets: {
				dest: 'XcmVersionedMultiLocation',
				beneficiary: 'XcmVersionedMultiLocation',
				assets: 'XcmVersionedMultiAssets',
				feeAssetItem: 'u32',
			},
			execute: {
				message: 'XcmVersionedXcm',
				maxWeight: 'SpWeightsWeightV2Weight',
			},
			force_xcm_version: {
				location: 'StagingXcmV3MultiLocation',
				version: 'u32',
			},
			force_default_xcm_version: {
				maybeXcmVersion: 'Option<u32>',
			},
			force_subscribe_version_notify: {
				location: 'XcmVersionedMultiLocation',
			},
			force_unsubscribe_version_notify: {
				location: 'XcmVersionedMultiLocation',
			},
			limited_reserve_transfer_assets: {
				dest: 'XcmVersionedMultiLocation',
				beneficiary: 'XcmVersionedMultiLocation',
				assets: 'XcmVersionedMultiAssets',
				feeAssetItem: 'u32',
				weightLimit: 'XcmV3WeightLimit',
			},
			limited_teleport_assets: {
				dest: 'XcmVersionedMultiLocation',
				beneficiary: 'XcmVersionedMultiLocation',
				assets: 'XcmVersionedMultiAssets',
				feeAssetItem: 'u32',
				weightLimit: 'XcmV3WeightLimit',
			},
			force_suspension: {
				suspended: 'bool',
			},
		},
	},
	/**
	 * Lookup133: xcm::VersionedMultiLocation
	 **/
	XcmVersionedMultiLocation: {
		_enum: {
			__Unused0: 'Null',
			V2: 'XcmV2MultiLocation',
			__Unused2: 'Null',
			V3: 'StagingXcmV3MultiLocation',
		},
	},
	/**
	 * Lookup134: xcm::v2::multilocation::MultiLocation
	 **/
	XcmV2MultiLocation: {
		parents: 'u8',
		interior: 'XcmV2MultilocationJunctions',
	},
	/**
	 * Lookup135: xcm::v2::multilocation::Junctions
	 **/
	XcmV2MultilocationJunctions: {
		_enum: {
			Here: 'Null',
			X1: 'XcmV2Junction',
			X2: '(XcmV2Junction,XcmV2Junction)',
			X3: '(XcmV2Junction,XcmV2Junction,XcmV2Junction)',
			X4: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
			X5: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
			X6: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
			X7: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
			X8: '(XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction,XcmV2Junction)',
		},
	},
	/**
	 * Lookup136: xcm::v2::junction::Junction
	 **/
	XcmV2Junction: {
		_enum: {
			Parachain: 'Compact<u32>',
			AccountId32: {
				network: 'XcmV2NetworkId',
				id: '[u8;32]',
			},
			AccountIndex64: {
				network: 'XcmV2NetworkId',
				index: 'Compact<u64>',
			},
			AccountKey20: {
				network: 'XcmV2NetworkId',
				key: '[u8;20]',
			},
			PalletInstance: 'u8',
			GeneralIndex: 'Compact<u128>',
			GeneralKey: 'Bytes',
			OnlyChild: 'Null',
			Plurality: {
				id: 'XcmV2BodyId',
				part: 'XcmV2BodyPart',
			},
		},
	},
	/**
	 * Lookup137: xcm::v2::NetworkId
	 **/
	XcmV2NetworkId: {
		_enum: {
			Any: 'Null',
			Named: 'Bytes',
			Polkadot: 'Null',
			Kusama: 'Null',
		},
	},
	/**
	 * Lookup139: xcm::v2::BodyId
	 **/
	XcmV2BodyId: {
		_enum: {
			Unit: 'Null',
			Named: 'Bytes',
			Index: 'Compact<u32>',
			Executive: 'Null',
			Technical: 'Null',
			Legislative: 'Null',
			Judicial: 'Null',
			Defense: 'Null',
			Administration: 'Null',
			Treasury: 'Null',
		},
	},
	/**
	 * Lookup140: xcm::v2::BodyPart
	 **/
	XcmV2BodyPart: {
		_enum: {
			Voice: 'Null',
			Members: {
				count: 'Compact<u32>',
			},
			Fraction: {
				nom: 'Compact<u32>',
				denom: 'Compact<u32>',
			},
			AtLeastProportion: {
				nom: 'Compact<u32>',
				denom: 'Compact<u32>',
			},
			MoreThanProportion: {
				nom: 'Compact<u32>',
				denom: 'Compact<u32>',
			},
		},
	},
	/**
	 * Lookup141: xcm::VersionedXcm<RuntimeCall>
	 **/
	XcmVersionedXcm: {
		_enum: {
			__Unused0: 'Null',
			__Unused1: 'Null',
			V2: 'XcmV2Xcm',
			V3: 'XcmV3Xcm',
		},
	},
	/**
	 * Lookup142: xcm::v2::Xcm<RuntimeCall>
	 **/
	XcmV2Xcm: 'Vec<XcmV2Instruction>',
	/**
	 * Lookup144: xcm::v2::Instruction<RuntimeCall>
	 **/
	XcmV2Instruction: {
		_enum: {
			WithdrawAsset: 'XcmV2MultiassetMultiAssets',
			ReserveAssetDeposited: 'XcmV2MultiassetMultiAssets',
			ReceiveTeleportedAsset: 'XcmV2MultiassetMultiAssets',
			QueryResponse: {
				queryId: 'Compact<u64>',
				response: 'XcmV2Response',
				maxWeight: 'Compact<u64>',
			},
			TransferAsset: {
				assets: 'XcmV2MultiassetMultiAssets',
				beneficiary: 'XcmV2MultiLocation',
			},
			TransferReserveAsset: {
				assets: 'XcmV2MultiassetMultiAssets',
				dest: 'XcmV2MultiLocation',
				xcm: 'XcmV2Xcm',
			},
			Transact: {
				originType: 'XcmV2OriginKind',
				requireWeightAtMost: 'Compact<u64>',
				call: 'XcmDoubleEncoded',
			},
			HrmpNewChannelOpenRequest: {
				sender: 'Compact<u32>',
				maxMessageSize: 'Compact<u32>',
				maxCapacity: 'Compact<u32>',
			},
			HrmpChannelAccepted: {
				recipient: 'Compact<u32>',
			},
			HrmpChannelClosing: {
				initiator: 'Compact<u32>',
				sender: 'Compact<u32>',
				recipient: 'Compact<u32>',
			},
			ClearOrigin: 'Null',
			DescendOrigin: 'XcmV2MultilocationJunctions',
			ReportError: {
				queryId: 'Compact<u64>',
				dest: 'XcmV2MultiLocation',
				maxResponseWeight: 'Compact<u64>',
			},
			DepositAsset: {
				assets: 'XcmV2MultiassetMultiAssetFilter',
				maxAssets: 'Compact<u32>',
				beneficiary: 'XcmV2MultiLocation',
			},
			DepositReserveAsset: {
				assets: 'XcmV2MultiassetMultiAssetFilter',
				maxAssets: 'Compact<u32>',
				dest: 'XcmV2MultiLocation',
				xcm: 'XcmV2Xcm',
			},
			ExchangeAsset: {
				give: 'XcmV2MultiassetMultiAssetFilter',
				receive: 'XcmV2MultiassetMultiAssets',
			},
			InitiateReserveWithdraw: {
				assets: 'XcmV2MultiassetMultiAssetFilter',
				reserve: 'XcmV2MultiLocation',
				xcm: 'XcmV2Xcm',
			},
			InitiateTeleport: {
				assets: 'XcmV2MultiassetMultiAssetFilter',
				dest: 'XcmV2MultiLocation',
				xcm: 'XcmV2Xcm',
			},
			QueryHolding: {
				queryId: 'Compact<u64>',
				dest: 'XcmV2MultiLocation',
				assets: 'XcmV2MultiassetMultiAssetFilter',
				maxResponseWeight: 'Compact<u64>',
			},
			BuyExecution: {
				fees: 'XcmV2MultiAsset',
				weightLimit: 'XcmV2WeightLimit',
			},
			RefundSurplus: 'Null',
			SetErrorHandler: 'XcmV2Xcm',
			SetAppendix: 'XcmV2Xcm',
			ClearError: 'Null',
			ClaimAsset: {
				assets: 'XcmV2MultiassetMultiAssets',
				ticket: 'XcmV2MultiLocation',
			},
			Trap: 'Compact<u64>',
			SubscribeVersion: {
				queryId: 'Compact<u64>',
				maxResponseWeight: 'Compact<u64>',
			},
			UnsubscribeVersion: 'Null',
		},
	},
	/**
	 * Lookup145: xcm::v2::multiasset::MultiAssets
	 **/
	XcmV2MultiassetMultiAssets: 'Vec<XcmV2MultiAsset>',
	/**
	 * Lookup147: xcm::v2::multiasset::MultiAsset
	 **/
	XcmV2MultiAsset: {
		id: 'XcmV2MultiassetAssetId',
		fun: 'XcmV2MultiassetFungibility',
	},
	/**
	 * Lookup148: xcm::v2::multiasset::AssetId
	 **/
	XcmV2MultiassetAssetId: {
		_enum: {
			Concrete: 'XcmV2MultiLocation',
			Abstract: 'Bytes',
		},
	},
	/**
	 * Lookup149: xcm::v2::multiasset::Fungibility
	 **/
	XcmV2MultiassetFungibility: {
		_enum: {
			Fungible: 'Compact<u128>',
			NonFungible: 'XcmV2MultiassetAssetInstance',
		},
	},
	/**
	 * Lookup150: xcm::v2::multiasset::AssetInstance
	 **/
	XcmV2MultiassetAssetInstance: {
		_enum: {
			Undefined: 'Null',
			Index: 'Compact<u128>',
			Array4: '[u8;4]',
			Array8: '[u8;8]',
			Array16: '[u8;16]',
			Array32: '[u8;32]',
			Blob: 'Bytes',
		},
	},
	/**
	 * Lookup153: xcm::v2::Response
	 **/
	XcmV2Response: {
		_enum: {
			Null: 'Null',
			Assets: 'XcmV2MultiassetMultiAssets',
			ExecutionResult: 'Option<(u32,XcmV2TraitsError)>',
			Version: 'u32',
		},
	},
	/**
	 * Lookup156: xcm::v2::traits::Error
	 **/
	XcmV2TraitsError: {
		_enum: {
			Overflow: 'Null',
			Unimplemented: 'Null',
			UntrustedReserveLocation: 'Null',
			UntrustedTeleportLocation: 'Null',
			MultiLocationFull: 'Null',
			MultiLocationNotInvertible: 'Null',
			BadOrigin: 'Null',
			InvalidLocation: 'Null',
			AssetNotFound: 'Null',
			FailedToTransactAsset: 'Null',
			NotWithdrawable: 'Null',
			LocationCannotHold: 'Null',
			ExceedsMaxMessageSize: 'Null',
			DestinationUnsupported: 'Null',
			Transport: 'Null',
			Unroutable: 'Null',
			UnknownClaim: 'Null',
			FailedToDecode: 'Null',
			MaxWeightInvalid: 'Null',
			NotHoldingFees: 'Null',
			TooExpensive: 'Null',
			Trap: 'u64',
			UnhandledXcmVersion: 'Null',
			WeightLimitReached: 'u64',
			Barrier: 'Null',
			WeightNotComputable: 'Null',
		},
	},
	/**
	 * Lookup157: xcm::v2::OriginKind
	 **/
	XcmV2OriginKind: {
		_enum: ['Native', 'SovereignAccount', 'Superuser', 'Xcm'],
	},
	/**
	 * Lookup158: xcm::double_encoded::DoubleEncoded<T>
	 **/
	XcmDoubleEncoded: {
		encoded: 'Bytes',
	},
	/**
	 * Lookup159: xcm::v2::multiasset::MultiAssetFilter
	 **/
	XcmV2MultiassetMultiAssetFilter: {
		_enum: {
			Definite: 'XcmV2MultiassetMultiAssets',
			Wild: 'XcmV2MultiassetWildMultiAsset',
		},
	},
	/**
	 * Lookup160: xcm::v2::multiasset::WildMultiAsset
	 **/
	XcmV2MultiassetWildMultiAsset: {
		_enum: {
			All: 'Null',
			AllOf: {
				id: 'XcmV2MultiassetAssetId',
				fun: 'XcmV2MultiassetWildFungibility',
			},
		},
	},
	/**
	 * Lookup161: xcm::v2::multiasset::WildFungibility
	 **/
	XcmV2MultiassetWildFungibility: {
		_enum: ['Fungible', 'NonFungible'],
	},
	/**
	 * Lookup162: xcm::v2::WeightLimit
	 **/
	XcmV2WeightLimit: {
		_enum: {
			Unlimited: 'Null',
			Limited: 'Compact<u64>',
		},
	},
	/**
	 * Lookup163: xcm::v3::Xcm<Call>
	 **/
	XcmV3Xcm: 'Vec<XcmV3Instruction>',
	/**
	 * Lookup165: xcm::v3::Instruction<Call>
	 **/
	XcmV3Instruction: {
		_enum: {
			WithdrawAsset: 'XcmV3MultiassetMultiAssets',
			ReserveAssetDeposited: 'XcmV3MultiassetMultiAssets',
			ReceiveTeleportedAsset: 'XcmV3MultiassetMultiAssets',
			QueryResponse: {
				queryId: 'Compact<u64>',
				response: 'XcmV3Response',
				maxWeight: 'SpWeightsWeightV2Weight',
				querier: 'Option<StagingXcmV3MultiLocation>',
			},
			TransferAsset: {
				assets: 'XcmV3MultiassetMultiAssets',
				beneficiary: 'StagingXcmV3MultiLocation',
			},
			TransferReserveAsset: {
				assets: 'XcmV3MultiassetMultiAssets',
				dest: 'StagingXcmV3MultiLocation',
				xcm: 'XcmV3Xcm',
			},
			Transact: {
				originKind: 'XcmV2OriginKind',
				requireWeightAtMost: 'SpWeightsWeightV2Weight',
				call: 'XcmDoubleEncoded',
			},
			HrmpNewChannelOpenRequest: {
				sender: 'Compact<u32>',
				maxMessageSize: 'Compact<u32>',
				maxCapacity: 'Compact<u32>',
			},
			HrmpChannelAccepted: {
				recipient: 'Compact<u32>',
			},
			HrmpChannelClosing: {
				initiator: 'Compact<u32>',
				sender: 'Compact<u32>',
				recipient: 'Compact<u32>',
			},
			ClearOrigin: 'Null',
			DescendOrigin: 'XcmV3Junctions',
			ReportError: 'XcmV3QueryResponseInfo',
			DepositAsset: {
				assets: 'XcmV3MultiassetMultiAssetFilter',
				beneficiary: 'StagingXcmV3MultiLocation',
			},
			DepositReserveAsset: {
				assets: 'XcmV3MultiassetMultiAssetFilter',
				dest: 'StagingXcmV3MultiLocation',
				xcm: 'XcmV3Xcm',
			},
			ExchangeAsset: {
				give: 'XcmV3MultiassetMultiAssetFilter',
				want: 'XcmV3MultiassetMultiAssets',
				maximal: 'bool',
			},
			InitiateReserveWithdraw: {
				assets: 'XcmV3MultiassetMultiAssetFilter',
				reserve: 'StagingXcmV3MultiLocation',
				xcm: 'XcmV3Xcm',
			},
			InitiateTeleport: {
				assets: 'XcmV3MultiassetMultiAssetFilter',
				dest: 'StagingXcmV3MultiLocation',
				xcm: 'XcmV3Xcm',
			},
			ReportHolding: {
				responseInfo: 'XcmV3QueryResponseInfo',
				assets: 'XcmV3MultiassetMultiAssetFilter',
			},
			BuyExecution: {
				fees: 'XcmV3MultiAsset',
				weightLimit: 'XcmV3WeightLimit',
			},
			RefundSurplus: 'Null',
			SetErrorHandler: 'XcmV3Xcm',
			SetAppendix: 'XcmV3Xcm',
			ClearError: 'Null',
			ClaimAsset: {
				assets: 'XcmV3MultiassetMultiAssets',
				ticket: 'StagingXcmV3MultiLocation',
			},
			Trap: 'Compact<u64>',
			SubscribeVersion: {
				queryId: 'Compact<u64>',
				maxResponseWeight: 'SpWeightsWeightV2Weight',
			},
			UnsubscribeVersion: 'Null',
			BurnAsset: 'XcmV3MultiassetMultiAssets',
			ExpectAsset: 'XcmV3MultiassetMultiAssets',
			ExpectOrigin: 'Option<StagingXcmV3MultiLocation>',
			ExpectError: 'Option<(u32,XcmV3TraitsError)>',
			ExpectTransactStatus: 'XcmV3MaybeErrorCode',
			QueryPallet: {
				moduleName: 'Bytes',
				responseInfo: 'XcmV3QueryResponseInfo',
			},
			ExpectPallet: {
				index: 'Compact<u32>',
				name: 'Bytes',
				moduleName: 'Bytes',
				crateMajor: 'Compact<u32>',
				minCrateMinor: 'Compact<u32>',
			},
			ReportTransactStatus: 'XcmV3QueryResponseInfo',
			ClearTransactStatus: 'Null',
			UniversalOrigin: 'XcmV3Junction',
			ExportMessage: {
				network: 'XcmV3JunctionNetworkId',
				destination: 'XcmV3Junctions',
				xcm: 'XcmV3Xcm',
			},
			LockAsset: {
				asset: 'XcmV3MultiAsset',
				unlocker: 'StagingXcmV3MultiLocation',
			},
			UnlockAsset: {
				asset: 'XcmV3MultiAsset',
				target: 'StagingXcmV3MultiLocation',
			},
			NoteUnlockable: {
				asset: 'XcmV3MultiAsset',
				owner: 'StagingXcmV3MultiLocation',
			},
			RequestUnlock: {
				asset: 'XcmV3MultiAsset',
				locker: 'StagingXcmV3MultiLocation',
			},
			SetFeesMode: {
				jitWithdraw: 'bool',
			},
			SetTopic: '[u8;32]',
			ClearTopic: 'Null',
			AliasOrigin: 'StagingXcmV3MultiLocation',
			UnpaidExecution: {
				weightLimit: 'XcmV3WeightLimit',
				checkOrigin: 'Option<StagingXcmV3MultiLocation>',
			},
		},
	},
	/**
	 * Lookup166: xcm::v3::multiasset::MultiAssets
	 **/
	XcmV3MultiassetMultiAssets: 'Vec<XcmV3MultiAsset>',
	/**
	 * Lookup168: xcm::v3::multiasset::MultiAsset
	 **/
	XcmV3MultiAsset: {
		id: 'XcmV3MultiassetAssetId',
		fun: 'XcmV3MultiassetFungibility',
	},
	/**
	 * Lookup169: xcm::v3::multiasset::AssetId
	 **/
	XcmV3MultiassetAssetId: {
		_enum: {
			Concrete: 'StagingXcmV3MultiLocation',
			Abstract: '[u8;32]',
		},
	},
	/**
	 * Lookup170: xcm::v3::multiasset::Fungibility
	 **/
	XcmV3MultiassetFungibility: {
		_enum: {
			Fungible: 'Compact<u128>',
			NonFungible: 'XcmV3MultiassetAssetInstance',
		},
	},
	/**
	 * Lookup171: xcm::v3::multiasset::AssetInstance
	 **/
	XcmV3MultiassetAssetInstance: {
		_enum: {
			Undefined: 'Null',
			Index: 'Compact<u128>',
			Array4: '[u8;4]',
			Array8: '[u8;8]',
			Array16: '[u8;16]',
			Array32: '[u8;32]',
		},
	},
	/**
	 * Lookup172: xcm::v3::Response
	 **/
	XcmV3Response: {
		_enum: {
			Null: 'Null',
			Assets: 'XcmV3MultiassetMultiAssets',
			ExecutionResult: 'Option<(u32,XcmV3TraitsError)>',
			Version: 'u32',
			PalletsInfo: 'Vec<XcmV3PalletInfo>',
			DispatchResult: 'XcmV3MaybeErrorCode',
		},
	},
	/**
	 * Lookup175: xcm::v3::traits::Error
	 **/
	XcmV3TraitsError: {
		_enum: {
			Overflow: 'Null',
			Unimplemented: 'Null',
			UntrustedReserveLocation: 'Null',
			UntrustedTeleportLocation: 'Null',
			LocationFull: 'Null',
			LocationNotInvertible: 'Null',
			BadOrigin: 'Null',
			InvalidLocation: 'Null',
			AssetNotFound: 'Null',
			FailedToTransactAsset: 'Null',
			NotWithdrawable: 'Null',
			LocationCannotHold: 'Null',
			ExceedsMaxMessageSize: 'Null',
			DestinationUnsupported: 'Null',
			Transport: 'Null',
			Unroutable: 'Null',
			UnknownClaim: 'Null',
			FailedToDecode: 'Null',
			MaxWeightInvalid: 'Null',
			NotHoldingFees: 'Null',
			TooExpensive: 'Null',
			Trap: 'u64',
			ExpectationFalse: 'Null',
			PalletNotFound: 'Null',
			NameMismatch: 'Null',
			VersionIncompatible: 'Null',
			HoldingWouldOverflow: 'Null',
			ExportError: 'Null',
			ReanchorFailed: 'Null',
			NoDeal: 'Null',
			FeesNotMet: 'Null',
			LockError: 'Null',
			NoPermission: 'Null',
			Unanchored: 'Null',
			NotDepositable: 'Null',
			UnhandledXcmVersion: 'Null',
			WeightLimitReached: 'SpWeightsWeightV2Weight',
			Barrier: 'Null',
			WeightNotComputable: 'Null',
			ExceedsStackLimit: 'Null',
		},
	},
	/**
	 * Lookup177: xcm::v3::PalletInfo
	 **/
	XcmV3PalletInfo: {
		index: 'Compact<u32>',
		name: 'Bytes',
		moduleName: 'Bytes',
		major: 'Compact<u32>',
		minor: 'Compact<u32>',
		patch: 'Compact<u32>',
	},
	/**
	 * Lookup180: xcm::v3::MaybeErrorCode
	 **/
	XcmV3MaybeErrorCode: {
		_enum: {
			Success: 'Null',
			Error: 'Bytes',
			TruncatedError: 'Bytes',
		},
	},
	/**
	 * Lookup183: xcm::v3::QueryResponseInfo
	 **/
	XcmV3QueryResponseInfo: {
		destination: 'StagingXcmV3MultiLocation',
		queryId: 'Compact<u64>',
		maxWeight: 'SpWeightsWeightV2Weight',
	},
	/**
	 * Lookup184: xcm::v3::multiasset::MultiAssetFilter
	 **/
	XcmV3MultiassetMultiAssetFilter: {
		_enum: {
			Definite: 'XcmV3MultiassetMultiAssets',
			Wild: 'XcmV3MultiassetWildMultiAsset',
		},
	},
	/**
	 * Lookup185: xcm::v3::multiasset::WildMultiAsset
	 **/
	XcmV3MultiassetWildMultiAsset: {
		_enum: {
			All: 'Null',
			AllOf: {
				id: 'XcmV3MultiassetAssetId',
				fun: 'XcmV3MultiassetWildFungibility',
			},
			AllCounted: 'Compact<u32>',
			AllOfCounted: {
				id: 'XcmV3MultiassetAssetId',
				fun: 'XcmV3MultiassetWildFungibility',
				count: 'Compact<u32>',
			},
		},
	},
	/**
	 * Lookup186: xcm::v3::multiasset::WildFungibility
	 **/
	XcmV3MultiassetWildFungibility: {
		_enum: ['Fungible', 'NonFungible'],
	},
	/**
	 * Lookup187: xcm::v3::WeightLimit
	 **/
	XcmV3WeightLimit: {
		_enum: {
			Unlimited: 'Null',
			Limited: 'SpWeightsWeightV2Weight',
		},
	},
	/**
	 * Lookup188: xcm::VersionedMultiAssets
	 **/
	XcmVersionedMultiAssets: {
		_enum: {
			__Unused0: 'Null',
			V2: 'XcmV2MultiassetMultiAssets',
			__Unused2: 'Null',
			V3: 'XcmV3MultiassetMultiAssets',
		},
	},
	/**
	 * Lookup197: cumulus_pallet_xcm::pallet::Call<T>
	 **/
	CumulusPalletXcmCall: 'Null',
	/**
	 * Lookup198: cumulus_pallet_dmp_queue::pallet::Call<T>
	 **/
	CumulusPalletDmpQueueCall: {
		_enum: {
			service_overweight: {
				index: 'u64',
				weightLimit: 'SpWeightsWeightV2Weight',
			},
		},
	},
	/**
	 * Lookup199: pallet_utility::pallet::Call<T>
	 **/
	PalletUtilityCall: {
		_enum: {
			batch: {
				calls: 'Vec<Call>',
			},
			as_derivative: {
				index: 'u16',
				call: 'Call',
			},
			batch_all: {
				calls: 'Vec<Call>',
			},
			dispatch_as: {
				asOrigin: 'TangleKusamaRuntimeOriginCaller',
				call: 'Call',
			},
			force_batch: {
				calls: 'Vec<Call>',
			},
			with_weight: {
				call: 'Call',
				weight: 'SpWeightsWeightV2Weight',
			},
		},
	},
	/**
	 * Lookup201: pallet_scheduler::pallet::Call<T>
	 **/
	PalletSchedulerCall: {
		_enum: {
			schedule: {
				when: 'u32',
				maybePeriodic: 'Option<(u32,u32)>',
				priority: 'u8',
				call: 'Call',
			},
			cancel: {
				when: 'u32',
				index: 'u32',
			},
			schedule_named: {
				id: '[u8;32]',
				when: 'u32',
				maybePeriodic: 'Option<(u32,u32)>',
				priority: 'u8',
				call: 'Call',
			},
			cancel_named: {
				id: '[u8;32]',
			},
			schedule_after: {
				after: 'u32',
				maybePeriodic: 'Option<(u32,u32)>',
				priority: 'u8',
				call: 'Call',
			},
			schedule_named_after: {
				id: '[u8;32]',
				after: 'u32',
				maybePeriodic: 'Option<(u32,u32)>',
				priority: 'u8',
				call: 'Call',
			},
		},
	},
	/**
	 * Lookup204: pallet_proxy::pallet::Call<T>
	 **/
	PalletProxyCall: {
		_enum: {
			proxy: {
				real: 'MultiAddress',
				forceProxyType: 'Option<TangleKusamaRuntimeProxyType>',
				call: 'Call',
			},
			add_proxy: {
				delegate: 'MultiAddress',
				proxyType: 'TangleKusamaRuntimeProxyType',
				delay: 'u32',
			},
			remove_proxy: {
				delegate: 'MultiAddress',
				proxyType: 'TangleKusamaRuntimeProxyType',
				delay: 'u32',
			},
			remove_proxies: 'Null',
			create_pure: {
				proxyType: 'TangleKusamaRuntimeProxyType',
				delay: 'u32',
				index: 'u16',
			},
			kill_pure: {
				spawner: 'MultiAddress',
				proxyType: 'TangleKusamaRuntimeProxyType',
				index: 'u16',
				height: 'Compact<u32>',
				extIndex: 'Compact<u32>',
			},
			announce: {
				real: 'MultiAddress',
				callHash: 'H256',
			},
			remove_announcement: {
				real: 'MultiAddress',
				callHash: 'H256',
			},
			reject_announcement: {
				delegate: 'MultiAddress',
				callHash: 'H256',
			},
			proxy_announced: {
				delegate: 'MultiAddress',
				real: 'MultiAddress',
				forceProxyType: 'Option<TangleKusamaRuntimeProxyType>',
				call: 'Call',
			},
		},
	},
	/**
	 * Lookup206: tangle_kusama_runtime::ProxyType
	 **/
	TangleKusamaRuntimeProxyType: {
		_enum: ['Any', 'NonTransfer', 'Governance', 'CancelProxy', 'IdentityJudgement', 'Staking'],
	},
	/**
	 * Lookup207: pallet_multisig::pallet::Call<T>
	 **/
	PalletMultisigCall: {
		_enum: {
			as_multi_threshold_1: {
				otherSignatories: 'Vec<AccountId32>',
				call: 'Call',
			},
			as_multi: {
				threshold: 'u16',
				otherSignatories: 'Vec<AccountId32>',
				maybeTimepoint: 'Option<PalletMultisigTimepoint>',
				call: 'Call',
				maxWeight: 'SpWeightsWeightV2Weight',
			},
			approve_as_multi: {
				threshold: 'u16',
				otherSignatories: 'Vec<AccountId32>',
				maybeTimepoint: 'Option<PalletMultisigTimepoint>',
				callHash: '[u8;32]',
				maxWeight: 'SpWeightsWeightV2Weight',
			},
			cancel_as_multi: {
				threshold: 'u16',
				otherSignatories: 'Vec<AccountId32>',
				timepoint: 'PalletMultisigTimepoint',
				callHash: '[u8;32]',
			},
		},
	},
	/**
	 * Lookup209: pallet_multisig::Timepoint<BlockNumber>
	 **/
	PalletMultisigTimepoint: {
		height: 'u32',
		index: 'u32',
	},
	/**
	 * Lookup210: pallet_identity::pallet::Call<T>
	 **/
	PalletIdentityCall: {
		_enum: {
			add_registrar: {
				account: 'MultiAddress',
			},
			set_identity: {
				info: 'PalletIdentitySimpleIdentityInfo',
			},
			set_subs: {
				subs: 'Vec<(AccountId32,Data)>',
			},
			clear_identity: 'Null',
			request_judgement: {
				regIndex: 'Compact<u32>',
				maxFee: 'Compact<u128>',
			},
			cancel_request: {
				regIndex: 'u32',
			},
			set_fee: {
				index: 'Compact<u32>',
				fee: 'Compact<u128>',
			},
			set_account_id: {
				_alias: {
					new_: 'new',
				},
				index: 'Compact<u32>',
				new_: 'MultiAddress',
			},
			set_fields: {
				index: 'Compact<u32>',
				fields: 'PalletIdentityBitFlags',
			},
			provide_judgement: {
				regIndex: 'Compact<u32>',
				target: 'MultiAddress',
				judgement: 'PalletIdentityJudgement',
				identity: 'H256',
			},
			kill_identity: {
				target: 'MultiAddress',
			},
			add_sub: {
				sub: 'MultiAddress',
				data: 'Data',
			},
			rename_sub: {
				sub: 'MultiAddress',
				data: 'Data',
			},
			remove_sub: {
				sub: 'MultiAddress',
			},
			quit_sub: 'Null',
		},
	},
	/**
	 * Lookup211: pallet_identity::simple::IdentityInfo<FieldLimit>
	 **/
	PalletIdentitySimpleIdentityInfo: {
		additional: 'Vec<(Data,Data)>',
		display: 'Data',
		legal: 'Data',
		web: 'Data',
		riot: 'Data',
		email: 'Data',
		pgpFingerprint: 'Option<[u8;20]>',
		image: 'Data',
		twitter: 'Data',
	},
	/**
	 * Lookup247: pallet_identity::types::BitFlags<pallet_identity::simple::IdentityField>
	 **/
	PalletIdentityBitFlags: {
		_bitLength: 64,
		Display: 0,
		Legal: 1,
		Web: 2,
		Riot: 3,
		Email: 4,
		PgpFingerprint: 5,
		Image: 6,
		Twitter: 7,
	},
	/**
	 * Lookup248: pallet_identity::simple::IdentityField
	 **/
	PalletIdentitySimpleIdentityField: {
		_enum: ['Display', 'Legal', 'Web', 'Riot', 'Email', 'PgpFingerprint', 'Image', 'Twitter'],
	},
	/**
	 * Lookup249: pallet_identity::types::Judgement<Balance>
	 **/
	PalletIdentityJudgement: {
		_enum: {
			Unknown: 'Null',
			FeePaid: 'u128',
			Reasonable: 'Null',
			KnownGood: 'Null',
			OutOfDate: 'Null',
			LowQuality: 'Null',
			Erroneous: 'Null',
		},
	},
	/**
	 * Lookup250: pallet_treasury::pallet::Call<T, I>
	 **/
	PalletTreasuryCall: {
		_enum: {
			propose_spend: {
				value: 'Compact<u128>',
				beneficiary: 'MultiAddress',
			},
			reject_proposal: {
				proposalId: 'Compact<u32>',
			},
			approve_proposal: {
				proposalId: 'Compact<u32>',
			},
			spend_local: {
				amount: 'Compact<u128>',
				beneficiary: 'MultiAddress',
			},
			remove_approval: {
				proposalId: 'Compact<u32>',
			},
			spend: {
				assetKind: 'Null',
				amount: 'Compact<u128>',
				beneficiary: 'AccountId32',
				validFrom: 'Option<u32>',
			},
			payout: {
				index: 'u32',
			},
			check_status: {
				index: 'u32',
			},
			void_spend: {
				index: 'u32',
			},
		},
	},
	/**
	 * Lookup251: pallet_bounties::pallet::Call<T, I>
	 **/
	PalletBountiesCall: {
		_enum: {
			propose_bounty: {
				value: 'Compact<u128>',
				description: 'Bytes',
			},
			approve_bounty: {
				bountyId: 'Compact<u32>',
			},
			propose_curator: {
				bountyId: 'Compact<u32>',
				curator: 'MultiAddress',
				fee: 'Compact<u128>',
			},
			unassign_curator: {
				bountyId: 'Compact<u32>',
			},
			accept_curator: {
				bountyId: 'Compact<u32>',
			},
			award_bounty: {
				bountyId: 'Compact<u32>',
				beneficiary: 'MultiAddress',
			},
			claim_bounty: {
				bountyId: 'Compact<u32>',
			},
			close_bounty: {
				bountyId: 'Compact<u32>',
			},
			extend_bounty_expiry: {
				bountyId: 'Compact<u32>',
				remark: 'Bytes',
			},
		},
	},
	/**
	 * Lookup252: pallet_tips::pallet::Call<T, I>
	 **/
	PalletTipsCall: {
		_enum: {
			report_awesome: {
				reason: 'Bytes',
				who: 'MultiAddress',
			},
			retract_tip: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
			tip_new: {
				reason: 'Bytes',
				who: 'MultiAddress',
				tipValue: 'Compact<u128>',
			},
			tip: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
				tipValue: 'Compact<u128>',
			},
			close_tip: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
			slash_tip: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
		},
	},
	/**
	 * Lookup253: pallet_preimage::pallet::Call<T>
	 **/
	PalletPreimageCall: {
		_enum: {
			note_preimage: {
				bytes: 'Bytes',
			},
			unnote_preimage: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
			request_preimage: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
			unrequest_preimage: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
			ensure_updated: {
				hashes: 'Vec<H256>',
			},
		},
	},
	/**
	 * Lookup255: orml_xtokens::module::Call<T>
	 **/
	OrmlXtokensModuleCall: {
		_enum: {
			transfer: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
				dest: 'XcmVersionedMultiLocation',
				destWeightLimit: 'XcmV3WeightLimit',
			},
			transfer_multiasset: {
				asset: 'XcmVersionedMultiAsset',
				dest: 'XcmVersionedMultiLocation',
				destWeightLimit: 'XcmV3WeightLimit',
			},
			transfer_with_fee: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
				fee: 'u128',
				dest: 'XcmVersionedMultiLocation',
				destWeightLimit: 'XcmV3WeightLimit',
			},
			transfer_multiasset_with_fee: {
				asset: 'XcmVersionedMultiAsset',
				fee: 'XcmVersionedMultiAsset',
				dest: 'XcmVersionedMultiLocation',
				destWeightLimit: 'XcmV3WeightLimit',
			},
			transfer_multicurrencies: {
				currencies: 'Vec<(TanglePrimitivesCurrencyCurrencyId,u128)>',
				feeItem: 'u32',
				dest: 'XcmVersionedMultiLocation',
				destWeightLimit: 'XcmV3WeightLimit',
			},
			transfer_multiassets: {
				assets: 'XcmVersionedMultiAssets',
				feeItem: 'u32',
				dest: 'XcmVersionedMultiLocation',
				destWeightLimit: 'XcmV3WeightLimit',
			},
		},
	},
	/**
	 * Lookup256: tangle_primitives::currency::CurrencyId
	 **/
	TanglePrimitivesCurrencyCurrencyId: {
		_enum: {
			Native: 'TanglePrimitivesCurrencyTokenSymbol',
			lst: 'TanglePrimitivesCurrencyTokenSymbol',
			Token: 'TanglePrimitivesCurrencyTokenSymbol',
			Stable: 'TanglePrimitivesCurrencyTokenSymbol',
			VSToken: 'TanglePrimitivesCurrencyTokenSymbol',
			VSBond: '(TanglePrimitivesCurrencyTokenSymbol,u32,u32,u32)',
			LPToken: '(TanglePrimitivesCurrencyTokenSymbol,u8,TanglePrimitivesCurrencyTokenSymbol,u8)',
			ForeignAsset: 'u32',
			Token2: 'u8',
			lst2: 'u8',
			VSToken2: 'u8',
			VSBond2: '(u8,u32,u32,u32)',
			StableLpToken: 'u32',
			BLP: 'u32',
			Lend: 'u8',
		},
	},
	/**
	 * Lookup257: tangle_primitives::currency::TokenSymbol
	 **/
	TanglePrimitivesCurrencyTokenSymbol: {
		_enum: ['ASG', 'BNC', 'KUSD', 'DOT', 'KSM', 'ETH', 'KAR', 'ZLK', 'PHA', 'RMRK', 'MOVR'],
	},
	/**
	 * Lookup258: xcm::VersionedMultiAsset
	 **/
	XcmVersionedMultiAsset: {
		_enum: {
			__Unused0: 'Null',
			V2: 'XcmV2MultiAsset',
			__Unused2: 'Null',
			V3: 'XcmV3MultiAsset',
		},
	},
	/**
	 * Lookup261: orml_tokens::module::Call<T>
	 **/
	OrmlTokensModuleCall: {
		_enum: {
			transfer: {
				dest: 'MultiAddress',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			transfer_all: {
				dest: 'MultiAddress',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				keepAlive: 'bool',
			},
			transfer_keep_alive: {
				dest: 'MultiAddress',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			force_transfer: {
				source: 'MultiAddress',
				dest: 'MultiAddress',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			set_balance: {
				who: 'MultiAddress',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				newFree: 'Compact<u128>',
				newReserved: 'Compact<u128>',
			},
		},
	},
	/**
	 * Lookup262: tangle_currencies::module::Call<T>
	 **/
	TangleCurrenciesModuleCall: {
		_enum: {
			transfer: {
				dest: 'MultiAddress',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			transfer_native_currency: {
				dest: 'MultiAddress',
				amount: 'Compact<u128>',
			},
			update_balance: {
				who: 'MultiAddress',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'i128',
			},
		},
	},
	/**
	 * Lookup264: orml_xcm::module::Call<T>
	 **/
	OrmlXcmModuleCall: {
		_enum: {
			send_as_sovereign: {
				dest: 'XcmVersionedMultiLocation',
				message: 'XcmVersionedXcm',
			},
		},
	},
	/**
	 * Lookup265: zenlink_protocol::pallet::Call<T>
	 **/
	ZenlinkProtocolCall: {
		_enum: {
			set_fee_receiver: {
				sendTo: 'Option<MultiAddress>',
			},
			set_fee_point: {
				feePoint: 'u8',
			},
			transfer: {
				assetId: 'ZenlinkProtocolPrimitivesAssetId',
				recipient: 'MultiAddress',
				amount: 'Compact<u128>',
			},
			create_pair: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
			},
			add_liquidity: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
				amount0Desired: 'Compact<u128>',
				amount1Desired: 'Compact<u128>',
				amount0Min: 'Compact<u128>',
				amount1Min: 'Compact<u128>',
				deadline: 'Compact<u32>',
			},
			remove_liquidity: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
				liquidity: 'Compact<u128>',
				amount0Min: 'Compact<u128>',
				amount1Min: 'Compact<u128>',
				recipient: 'MultiAddress',
				deadline: 'Compact<u32>',
			},
			swap_exact_assets_for_assets: {
				amountIn: 'Compact<u128>',
				amountOutMin: 'Compact<u128>',
				path: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
				recipient: 'MultiAddress',
				deadline: 'Compact<u32>',
			},
			swap_assets_for_exact_assets: {
				amountOut: 'Compact<u128>',
				amountInMax: 'Compact<u128>',
				path: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
				recipient: 'MultiAddress',
				deadline: 'Compact<u32>',
			},
			bootstrap_create: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
				targetSupply0: 'Compact<u128>',
				targetSupply1: 'Compact<u128>',
				capacitySupply0: 'Compact<u128>',
				capacitySupply1: 'Compact<u128>',
				end: 'Compact<u32>',
				rewards: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
				limits: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
			},
			bootstrap_contribute: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
				amount0Contribute: 'Compact<u128>',
				amount1Contribute: 'Compact<u128>',
				deadline: 'Compact<u32>',
			},
			bootstrap_claim: {
				recipient: 'MultiAddress',
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
				deadline: 'Compact<u32>',
			},
			bootstrap_end: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
			},
			bootstrap_update: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
				targetSupply0: 'Compact<u128>',
				targetSupply1: 'Compact<u128>',
				capacitySupply0: 'Compact<u128>',
				capacitySupply1: 'Compact<u128>',
				end: 'Compact<u32>',
				rewards: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
				limits: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
			},
			bootstrap_refund: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
			},
			bootstrap_charge_reward: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
				chargeRewards: 'Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>',
			},
			bootstrap_withdraw_reward: {
				asset0: 'ZenlinkProtocolPrimitivesAssetId',
				asset1: 'ZenlinkProtocolPrimitivesAssetId',
				recipient: 'MultiAddress',
			},
		},
	},
	/**
	 * Lookup267: zenlink_protocol::primitives::AssetId
	 **/
	ZenlinkProtocolPrimitivesAssetId: {
		chainId: 'u32',
		assetType: 'u8',
		assetIndex: 'u64',
	},
	/**
	 * Lookup271: merkle_distributor::pallet::Call<T>
	 **/
	MerkleDistributorCall: {
		_enum: {
			add_to_create_whitelist: {
				account: 'AccountId32',
			},
			remove_from_create_whitelist: {
				account: 'AccountId32',
			},
			create_merkle_distributor: {
				merkleRoot: 'H256',
				description: 'Bytes',
				distributeCurrency: 'TanglePrimitivesCurrencyCurrencyId',
				distributeAmount: 'u128',
			},
			claim: {
				merkleDistributorId: 'u32',
				index: 'u32',
				account: 'MultiAddress',
				amount: 'u128',
				merkleProof: 'Vec<H256>',
			},
			charge: {
				merkleDistributorId: 'u32',
			},
			emergency_withdraw: {
				merkleDistributorId: 'u32',
				recipient: 'MultiAddress',
				amount: 'u128',
			},
		},
	},
	/**
	 * Lookup272: zenlink_stable_amm::pallet::Call<T>
	 **/
	ZenlinkStableAmmCall: {
		_enum: {
			create_base_pool: {
				currencyIds: 'Vec<TanglePrimitivesCurrencyCurrencyId>',
				currencyDecimals: 'Vec<u32>',
				a: 'u128',
				fee: 'u128',
				adminFee: 'u128',
				adminFeeReceiver: 'AccountId32',
				lpCurrencySymbol: 'Bytes',
			},
			create_meta_pool: {
				currencyIds: 'Vec<TanglePrimitivesCurrencyCurrencyId>',
				currencyDecimals: 'Vec<u32>',
				a: 'u128',
				fee: 'u128',
				adminFee: 'u128',
				adminFeeReceiver: 'AccountId32',
				lpCurrencySymbol: 'Bytes',
			},
			add_liquidity: {
				poolId: 'u32',
				amounts: 'Vec<u128>',
				minMintAmount: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			swap: {
				pooId: 'u32',
				fromIndex: 'u32',
				toIndex: 'u32',
				inAmount: 'u128',
				minOutAmount: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			remove_liquidity: {
				pooId: 'u32',
				lpAmount: 'u128',
				minAmounts: 'Vec<u128>',
				to: 'AccountId32',
				deadline: 'u32',
			},
			remove_liquidity_one_currency: {
				pooId: 'u32',
				lpAmount: 'u128',
				index: 'u32',
				minAmount: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			remove_liquidity_imbalance: {
				poolId: 'u32',
				amounts: 'Vec<u128>',
				maxBurnAmount: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			add_pool_and_base_pool_liquidity: {
				poolId: 'u32',
				basePoolId: 'u32',
				metaAmounts: 'Vec<u128>',
				baseAmounts: 'Vec<u128>',
				minToMint: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			remove_pool_and_base_pool_liquidity: {
				poolId: 'u32',
				basePoolId: 'u32',
				amount: 'u128',
				minAmountsMeta: 'Vec<u128>',
				minAmountsBase: 'Vec<u128>',
				to: 'AccountId32',
				deadline: 'u32',
			},
			remove_pool_and_base_pool_liquidity_one_currency: {
				poolId: 'u32',
				basePoolId: 'u32',
				amount: 'u128',
				i: 'u32',
				minAmount: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			swap_pool_from_base: {
				poolId: 'u32',
				basePoolId: 'u32',
				inIndex: 'u32',
				outIndex: 'u32',
				dx: 'u128',
				minDy: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			swap_pool_to_base: {
				poolId: 'u32',
				basePoolId: 'u32',
				inIndex: 'u32',
				outIndex: 'u32',
				dx: 'u128',
				minDy: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			swap_meta_pool_underlying: {
				poolId: 'u32',
				inIndex: 'u32',
				outIndex: 'u32',
				dx: 'u128',
				minDy: 'u128',
				to: 'AccountId32',
				deadline: 'u32',
			},
			update_fee_receiver: {
				poolId: 'u32',
				feeReceiver: 'MultiAddress',
			},
			set_swap_fee: {
				poolId: 'u32',
				newSwapFee: 'u128',
			},
			set_admin_fee: {
				poolId: 'u32',
				newAdminFee: 'u128',
			},
			ramp_a: {
				poolId: 'u32',
				futureA: 'u128',
				futureATime: 'u128',
			},
			stop_ramp_a: {
				poolId: 'u32',
			},
			withdraw_admin_fee: {
				poolId: 'u32',
			},
		},
	},
	/**
	 * Lookup276: zenlink_swap_router::pallet::Call<T>
	 **/
	ZenlinkSwapRouterCall: {
		_enum: {
			swap_exact_token_for_tokens_through_stable_pool: {
				amountIn: 'u128',
				amountOutMin: 'u128',
				routes: 'Vec<ZenlinkSwapRouterRoute>',
				to: 'AccountId32',
				deadline: 'u32',
			},
		},
	},
	/**
	 * Lookup278: zenlink_swap_router::Route<PoolId, tangle_primitives::currency::CurrencyId, zenlink_protocol::primitives::AssetId>
	 **/
	ZenlinkSwapRouterRoute: {
		_enum: {
			Stable: 'ZenlinkSwapRouterStablePath',
			Normal: 'Vec<ZenlinkProtocolPrimitivesAssetId>',
		},
	},
	/**
	 * Lookup279: zenlink_swap_router::StablePath<PoolId, tangle_primitives::currency::CurrencyId>
	 **/
	ZenlinkSwapRouterStablePath: {
		poolId: 'u32',
		basePoolId: 'u32',
		mode: 'ZenlinkSwapRouterStableSwapMode',
		fromCurrency: 'TanglePrimitivesCurrencyCurrencyId',
		toCurrency: 'TanglePrimitivesCurrencyCurrencyId',
	},
	/**
	 * Lookup280: zenlink_swap_router::StableSwapMode
	 **/
	ZenlinkSwapRouterStableSwapMode: {
		_enum: ['Single', 'FromBase', 'ToBase'],
	},
	/**
	 * Lookup281: tangle_token_issuer::pallet::Call<T>
	 **/
	TangleTokenIssuerCall: {
		_enum: {
			add_to_issue_whitelist: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				account: 'AccountId32',
			},
			remove_from_issue_whitelist: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				account: 'AccountId32',
			},
			add_to_transfer_whitelist: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				account: 'AccountId32',
			},
			remove_from_transfer_whitelist: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				account: 'AccountId32',
			},
			issue: {
				dest: 'AccountId32',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			transfer: {
				dest: 'AccountId32',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
		},
	},
	/**
	 * Lookup282: tangle_asset_registry::pallet::Call<T>
	 **/
	TangleAssetRegistryCall: {
		_enum: {
			register_native_asset: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				location: 'XcmVersionedMultiLocation',
				metadata: 'TangleAssetRegistryAssetMetadata',
			},
			update_native_asset: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				location: 'XcmVersionedMultiLocation',
				metadata: 'TangleAssetRegistryAssetMetadata',
			},
			register_token_metadata: {
				metadata: 'TangleAssetRegistryAssetMetadata',
			},
			register_lst_metadata: {
				tokenId: 'u8',
			},
			register_vstoken_metadata: {
				tokenId: 'u8',
			},
			register_vsbond_metadata: {
				tokenId: 'u8',
				paraId: 'u32',
				firstSlot: 'u32',
				lastSlot: 'u32',
			},
			register_multilocation: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				location: 'XcmVersionedMultiLocation',
				weight: 'SpWeightsWeightV2Weight',
			},
			force_set_multilocation: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				location: 'XcmVersionedMultiLocation',
				weight: 'SpWeightsWeightV2Weight',
			},
		},
	},
	/**
	 * Lookup283: tangle_asset_registry::pallet::AssetMetadata<Balance>
	 **/
	TangleAssetRegistryAssetMetadata: {
		name: 'Bytes',
		symbol: 'Bytes',
		decimals: 'u8',
		minimalBalance: 'u128',
	},
	/**
	 * Lookup284: tangle_lst_minting::pallet::Call<T>
	 **/
	TangleLstMintingCall: {
		_enum: {
			mint: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
				remark: 'Bytes',
				channelId: 'Option<u32>',
			},
			redeem: {
				lstId: 'TanglePrimitivesCurrencyCurrencyId',
				lstAmount: 'u128',
			},
			rebond: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
			},
			rebond_by_unlock_id: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				unlockId: 'u32',
			},
			set_unlock_duration: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				unlockDuration: 'TanglePrimitivesTimeUnit',
			},
			set_minimum_mint: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			set_minimum_redeem: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			add_support_rebond_token: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
			},
			remove_support_rebond_token: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
			},
			set_fees: {
				mintFee: 'Permill',
				redeemFee: 'Permill',
			},
			set_hook_iteration_limit: {
				limit: 'u32',
			},
			set_unlocking_total: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			set_min_time_unit: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				timeUnit: 'TanglePrimitivesTimeUnit',
			},
			recreate_currency_ongoing_time_unit: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				timeUnit: 'TanglePrimitivesTimeUnit',
			},
		},
	},
	/**
	 * Lookup286: tangle_primitives::TimeUnit
	 **/
	TanglePrimitivesTimeUnit: {
		_enum: {
			Era: 'Compact<u32>',
			SlashingSpan: 'Compact<u32>',
			Round: 'Compact<u32>',
			Kblock: 'Compact<u32>',
			Hour: 'Compact<u32>',
		},
	},
	/**
	 * Lookup288: tangle_slp::pallet::Call<T>
	 **/
	TangleSlpCall: {
		_enum: {
			initialize_delegator: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorLocation: 'Option<StagingXcmV3MultiLocation>',
			},
			bond: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				amount: 'Compact<u128>',
				validator: 'Option<StagingXcmV3MultiLocation>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			bond_extra: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				validator: 'Option<StagingXcmV3MultiLocation>',
				amount: 'Compact<u128>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			unbond: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				validator: 'Option<StagingXcmV3MultiLocation>',
				amount: 'Compact<u128>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			unbond_all: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			rebond: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				validator: 'Option<StagingXcmV3MultiLocation>',
				amount: 'Option<u128>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			delegate: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				targets: 'Vec<StagingXcmV3MultiLocation>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			undelegate: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				targets: 'Vec<StagingXcmV3MultiLocation>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			redelegate: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				targets: 'Option<Vec<StagingXcmV3MultiLocation>>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			payout: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				validator: 'StagingXcmV3MultiLocation',
				when: 'Option<TanglePrimitivesTimeUnit>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			liquidize: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				when: 'Option<TanglePrimitivesTimeUnit>',
				validator: 'Option<StagingXcmV3MultiLocation>',
				amount: 'Option<u128>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			chill: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			transfer_back: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				from: 'StagingXcmV3MultiLocation',
				to: 'StagingXcmV3MultiLocation',
				amount: 'Compact<u128>',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			transfer_to: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				from: 'StagingXcmV3MultiLocation',
				to: 'StagingXcmV3MultiLocation',
				amount: 'Compact<u128>',
			},
			convert_asset: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				amount: 'Compact<u128>',
				ifFromCurrency: 'bool',
				weightAndFee: 'Option<(SpWeightsWeightV2Weight,u128)>',
			},
			increase_token_pool: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			decrease_token_pool: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			update_ongoing_time_unit: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				timeUnit: 'TanglePrimitivesTimeUnit',
			},
			refund_currency_due_unbond: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
			},
			supplement_fee_reserve: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				dest: 'StagingXcmV3MultiLocation',
			},
			charge_host_fee_and_tune_lst_exchange_rate: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				value: 'Compact<u128>',
				who: 'Option<StagingXcmV3MultiLocation>',
			},
			__Unused21: 'Null',
			set_operate_origin: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'Option<AccountId32>',
			},
			set_fee_source: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				whoAndFee: 'Option<(StagingXcmV3MultiLocation,u128)>',
			},
			add_delegator: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				index: 'Compact<u16>',
				who: 'StagingXcmV3MultiLocation',
			},
			remove_delegator: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			add_validator: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			remove_validator: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			set_validators_by_delegator: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				validators: 'Vec<StagingXcmV3MultiLocation>',
			},
			set_delegator_ledger: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				ledger: 'Option<TangleSlpPrimitivesLedger>',
			},
			set_minimums_and_maximums: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				constraints: 'Option<TangleSlpPrimitivesMinimumsMaximums>',
			},
			set_currency_delays: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				maybeDelays: 'Option<TangleSlpPrimitivesDelays>',
			},
			set_hosting_fees: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				maybeFeeSet: 'Option<(Permill,StagingXcmV3MultiLocation)>',
			},
			set_currency_tune_exchange_rate_limit: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				maybeTuneExchangeRateLimit: 'Option<(u32,Permill)>',
			},
			set_ongoing_time_unit_update_interval: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				maybeInterval: 'Option<u32>',
			},
			add_supplement_fee_account_to_whitelist: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			remove_supplement_fee_account_from_whitelist: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			confirm_delegator_ledger_query_response: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				queryId: 'Compact<u64>',
			},
			fail_delegator_ledger_query_response: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				queryId: 'Compact<u64>',
			},
			confirm_validators_by_delegator_query_response: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				queryId: 'Compact<u64>',
			},
			fail_validators_by_delegator_query_response: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				queryId: 'Compact<u64>',
			},
			confirm_delegator_ledger: {
				queryId: 'u64',
				response: 'XcmV3Response',
			},
			confirm_validators_by_delegator: {
				queryId: 'u64',
				response: 'XcmV3Response',
			},
			reset_validators: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				validatorList: 'Vec<StagingXcmV3MultiLocation>',
			},
			set_validator_boost_list: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				validatorList: 'Vec<StagingXcmV3MultiLocation>',
			},
			add_to_validator_boost_list: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			remove_from_validator_boot_list: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			convert_treasury_lst: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			clean_outdated_validator_boost_list: {
				token: 'TanglePrimitivesCurrencyCurrencyId',
				page: 'u8',
			},
		},
	},
	/**
	 * Lookup300: tangle_slp::primitives::Ledger<Balance>
	 **/
	TangleSlpPrimitivesLedger: {
		_enum: {
			Substrate: 'TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedger',
			Moonbeam: 'TangleSlpPrimitivesParachainStakingPrimitivesOneToManyLedger',
			ParachainStaking: 'TangleSlpPrimitivesParachainStakingPrimitivesOneToManyLedger',
			Filecoin: 'TangleSlpPrimitivesFilecoinPrimitivesFilecoinLedger',
			Phala: 'TangleSlpPrimitivesPhalaPrimitivesPhalaLedger',
		},
	},
	/**
	 * Lookup301: tangle_slp::primitives::polkadot_primitives::SubstrateLedger<Balance>
	 **/
	TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedger: {
		account: 'StagingXcmV3MultiLocation',
		total: 'Compact<u128>',
		active: 'Compact<u128>',
		unlocking: 'Vec<TangleSlpPrimitivesPolkadotPrimitivesUnlockChunk>',
	},
	/**
	 * Lookup303: tangle_slp::primitives::polkadot_primitives::UnlockChunk<Balance>
	 **/
	TangleSlpPrimitivesPolkadotPrimitivesUnlockChunk: {
		value: 'Compact<u128>',
		unlockTime: 'TanglePrimitivesTimeUnit',
	},
	/**
	 * Lookup304: tangle_slp::primitives::parachain_staking_primitives::OneToManyLedger<Balance>
	 **/
	TangleSlpPrimitivesParachainStakingPrimitivesOneToManyLedger: {
		account: 'StagingXcmV3MultiLocation',
		delegations: 'BTreeMap<StagingXcmV3MultiLocation, u128>',
		total: 'u128',
		lessTotal: 'u128',
		requests: 'Vec<TangleSlpPrimitivesParachainStakingPrimitivesOneToManyScheduledRequest>',
		requestBriefs: 'BTreeMap<StagingXcmV3MultiLocation, (TanglePrimitivesTimeUnit,u128)>',
		status: 'TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegatorStatus',
	},
	/**
	 * Lookup308: tangle_slp::primitives::parachain_staking_primitives::OneToManyScheduledRequest<Balance>
	 **/
	TangleSlpPrimitivesParachainStakingPrimitivesOneToManyScheduledRequest: {
		validator: 'StagingXcmV3MultiLocation',
		whenExecutable: 'TanglePrimitivesTimeUnit',
		action: 'TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegationAction',
	},
	/**
	 * Lookup309: tangle_slp::primitives::parachain_staking_primitives::OneToManyDelegationAction<Balance>
	 **/
	TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegationAction: {
		_enum: {
			Revoke: 'u128',
			Decrease: 'u128',
		},
	},
	/**
	 * Lookup314: tangle_slp::primitives::parachain_staking_primitives::OneToManyDelegatorStatus
	 **/
	TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegatorStatus: {
		_enum: {
			Active: 'Null',
			Leaving: 'TanglePrimitivesTimeUnit',
		},
	},
	/**
	 * Lookup315: tangle_slp::primitives::filecoin_primitives::FilecoinLedger<Balance>
	 **/
	TangleSlpPrimitivesFilecoinPrimitivesFilecoinLedger: {
		account: 'StagingXcmV3MultiLocation',
		initialPledge: 'Compact<u128>',
	},
	/**
	 * Lookup316: tangle_slp::primitives::phala_primitives::PhalaLedger<Balance>
	 **/
	TangleSlpPrimitivesPhalaPrimitivesPhalaLedger: {
		account: 'StagingXcmV3MultiLocation',
		activeShares: 'Compact<u128>',
		unlockingShares: 'Compact<u128>',
		unlockingTimeUnit: 'Option<TanglePrimitivesTimeUnit>',
		bondedPoolId: 'Option<u64>',
		bondedPoolCollectionId: 'Option<u32>',
		bondedIsVault: 'Option<bool>',
	},
	/**
	 * Lookup320: tangle_slp::primitives::MinimumsMaximums<Balance>
	 **/
	TangleSlpPrimitivesMinimumsMaximums: {
		delegatorBondedMinimum: 'Compact<u128>',
		bondExtraMinimum: 'Compact<u128>',
		unbondMinimum: 'Compact<u128>',
		rebondMinimum: 'Compact<u128>',
		unbondRecordMaximum: 'Compact<u32>',
		validatorsBackMaximum: 'Compact<u32>',
		delegatorActiveStakingMaximum: 'Compact<u128>',
		validatorsRewardMaximum: 'Compact<u32>',
		delegationAmountMinimum: 'Compact<u128>',
		delegatorsMaximum: 'Compact<u16>',
		validatorsMaximum: 'Compact<u16>',
	},
	/**
	 * Lookup322: tangle_slp::primitives::Delays
	 **/
	TangleSlpPrimitivesDelays: {
		unlockDelay: 'TanglePrimitivesTimeUnit',
		leaveDelegatorsDelay: 'TanglePrimitivesTimeUnit',
	},
	/**
	 * Lookup327: tangle_xcm_interface::pallet::Call<T>
	 **/
	TangleXcmInterfaceCall: {
		_enum: {
			update_xcm_dest_weight_and_fee: {
				updates:
					'Vec<(TanglePrimitivesCurrencyCurrencyId,TanglePrimitivesXcmOperationType,SpWeightsWeightV2Weight,u128)>',
			},
			transfer_statemine_assets: {
				amount: 'u128',
				assetId: 'u32',
				dest: 'Option<AccountId32>',
			},
		},
	},
	/**
	 * Lookup330: tangle_primitives::XcmOperationType
	 **/
	TanglePrimitivesXcmOperationType: {
		_enum: [
			'UmpContributeTransact',
			'StatemineTransfer',
			'Bond',
			'WithdrawUnbonded',
			'BondExtra',
			'Unbond',
			'Rebond',
			'Delegate',
			'Payout',
			'Liquidize',
			'TransferBack',
			'TransferTo',
			'Chill',
			'Undelegate',
			'CancelLeave',
			'XtokensTransferBack',
			'ExecuteLeave',
			'ConvertAsset',
			'Vote',
			'RemoveVote',
			'Any',
			'SupplementaryFee',
		],
	},
	/**
	 * Lookup331: tangle_slpx::pallet::Call<T>
	 **/
	TangleSlpxCall: {
		_enum: {
			mint: {
				evmCaller: 'H160',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				targetChain: 'TangleSlpxTargetChain',
				remark: 'Bytes',
			},
			zenlink_swap: {
				evmCaller: 'H160',
				currencyIdIn: 'TanglePrimitivesCurrencyCurrencyId',
				currencyIdOut: 'TanglePrimitivesCurrencyCurrencyId',
				currencyIdOutMin: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			redeem: {
				evmCaller: 'H160',
				lstId: 'TanglePrimitivesCurrencyCurrencyId',
				targetChain: 'TangleSlpxTargetChain',
			},
			stable_pool_swap: {
				evmCaller: 'H160',
				poolId: 'u32',
				currencyIdIn: 'TanglePrimitivesCurrencyCurrencyId',
				currencyIdOut: 'TanglePrimitivesCurrencyCurrencyId',
				minDy: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			add_whitelist: {
				supportChain: 'TangleSlpxSupportChain',
				evmContractAccountId: 'AccountId32',
			},
			remove_whitelist: {
				supportChain: 'TangleSlpxSupportChain',
				evmContractAccountId: 'AccountId32',
			},
			set_execution_fee: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				executionFee: 'u128',
			},
			set_transfer_to_fee: {
				supportChain: 'TangleSlpxSupportChain',
				transferToFee: 'u128',
			},
			set_currency_ethereum_call_switch: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				isSupport: 'bool',
			},
			set_ethereum_call_configration: {
				xcmFee: 'u128',
				xcmWeight: 'SpWeightsWeightV2Weight',
				period: 'u32',
				contract: 'H160',
			},
			set_currency_support_xcm_fee: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				isSupport: 'bool',
			},
			set_delay_block: {
				delayBlock: 'u32',
			},
			force_add_order: {
				slpxContractDerivativeAccount: 'AccountId32',
				evmCaller: 'H160',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				targetChain: 'TangleSlpxTargetChain',
				remark: 'Bytes',
				orderType: 'TangleSlpxOrderType',
			},
		},
	},
	/**
	 * Lookup333: tangle_slpx::types::TargetChain<sp_core::crypto::AccountId32>
	 **/
	TangleSlpxTargetChain: {
		_enum: {
			Astar: 'H160',
			Moonbeam: 'H160',
			Hydradx: 'AccountId32',
			Interlay: 'AccountId32',
			Manta: 'AccountId32',
		},
	},
	/**
	 * Lookup334: tangle_slpx::types::SupportChain
	 **/
	TangleSlpxSupportChain: {
		_enum: ['Astar', 'Moonbeam', 'Hydradx', 'Interlay', 'Manta'],
	},
	/**
	 * Lookup335: tangle_slpx::types::OrderType
	 **/
	TangleSlpxOrderType: {
		_enum: ['Mint', 'Redeem'],
	},
	/**
	 * Lookup336: pallet_ranked_collective::pallet::Call<T, I>
	 **/
	PalletRankedCollectiveCall: {
		_enum: {
			add_member: {
				who: 'MultiAddress',
			},
			promote_member: {
				who: 'MultiAddress',
			},
			demote_member: {
				who: 'MultiAddress',
			},
			remove_member: {
				who: 'MultiAddress',
				minRank: 'u16',
			},
			vote: {
				poll: 'u32',
				aye: 'bool',
			},
			cleanup_poll: {
				pollIndex: 'u32',
				max: 'u32',
			},
		},
	},
	/**
	 * Lookup338: tangle_stable_pool::pallet::Call<T>
	 **/
	TangleStablePoolCall: {
		_enum: {
			create_pool: {
				assets: 'Vec<TanglePrimitivesCurrencyCurrencyId>',
				precisions: 'Vec<u128>',
				mintFee: 'u128',
				swapFee: 'u128',
				redeemFee: 'u128',
				initialA: 'u128',
				feeRecipient: 'AccountId32',
				yieldRecipient: 'AccountId32',
				precision: 'u128',
			},
			add_liquidity: {
				poolId: 'u32',
				amounts: 'Vec<u128>',
				minMintAmount: 'u128',
			},
			swap: {
				poolId: 'u32',
				i: 'u32',
				j: 'u32',
				dx: 'u128',
				minDy: 'u128',
			},
			redeem_proportion: {
				poolId: 'u32',
				amount: 'u128',
				minRedeemAmounts: 'Vec<u128>',
			},
			redeem_single: {
				poolId: 'u32',
				amount: 'u128',
				i: 'u32',
				minRedeemAmount: 'u128',
				assetLength: 'u32',
			},
			redeem_multi: {
				poolId: 'u32',
				amounts: 'Vec<u128>',
				maxRedeemAmount: 'u128',
			},
			modify_a: {
				poolId: 'u32',
				a: 'u128',
				futureABlock: 'u32',
			},
			modify_fees: {
				poolId: 'u32',
				mintFee: 'Option<u128>',
				swapFee: 'Option<u128>',
				redeemFee: 'Option<u128>',
			},
			modify_recipients: {
				poolId: 'u32',
				feeRecipient: 'Option<AccountId32>',
				yieldRecipient: 'Option<AccountId32>',
			},
			edit_token_rate: {
				poolId: 'u32',
				tokenRateInfo: 'Vec<(TanglePrimitivesCurrencyCurrencyId,(u128,u128))>',
			},
			config_lst_auto_refresh: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				hardcap: 'Permill',
			},
			remove_lst_auto_refresh: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
			},
		},
	},
	/**
	 * Lookup342: tangle_lst_voting::pallet::Call<T>
	 **/
	TangleLstVotingCall: {
		_enum: {
			vote: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'Compact<u32>',
				lstVote: 'TangleLstVotingVoteAccountVote',
			},
			unlock: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'Compact<u32>',
			},
			remove_delegator_vote: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'Compact<u32>',
				derivativeIndex: 'Compact<u16>',
			},
			kill_referendum: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'Compact<u32>',
			},
			add_delegator: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				derivativeIndex: 'Compact<u16>',
			},
			set_referendum_status: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'Compact<u32>',
				info: 'TangleLstVotingVoteReferendumInfo',
			},
			set_vote_locking_period: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				lockingPeriod: 'u32',
			},
			set_undeciding_timeout: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				undecidingTimeout: 'u32',
			},
			notify_vote: {
				queryId: 'u64',
				response: 'XcmV3Response',
			},
			__Unused9: 'Null',
			notify_remove_delegator_vote: {
				queryId: 'u64',
				response: 'XcmV3Response',
			},
			set_vote_cap_ratio: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				voteCapRatio: 'Perbill',
			},
		},
	},
	/**
	 * Lookup343: tangle_lst_voting::vote::AccountVote<Balance>
	 **/
	TangleLstVotingVoteAccountVote: {
		_enum: {
			Standard: {
				vote: 'Vote',
				balance: 'u128',
			},
			Split: {
				aye: 'u128',
				nay: 'u128',
			},
			SplitAbstain: {
				aye: 'u128',
				nay: 'u128',
				abstain: 'u128',
			},
		},
	},
	/**
	 * Lookup344: tangle_lst_voting::vote::ReferendumInfo<Moment, tangle_lst_voting::vote::Tally<Votes, Total>>
	 **/
	TangleLstVotingVoteReferendumInfo: {
		_enum: {
			Ongoing: 'TangleLstVotingVoteReferendumStatus',
			Completed: 'u32',
			Killed: 'u32',
		},
	},
	/**
	 * Lookup345: tangle_lst_voting::vote::Tally<Votes, Total>
	 **/
	TangleLstVotingVoteTally: {
		ayes: 'u128',
		nays: 'u128',
		support: 'u128',
	},
	/**
	 * Lookup346: tangle_lst_voting::vote::ReferendumStatus<Moment, tangle_lst_voting::vote::Tally<Votes, Total>>
	 **/
	TangleLstVotingVoteReferendumStatus: {
		submitted: 'Option<u32>',
		tally: 'TangleLstVotingVoteTally',
	},
	/**
	 * Lookup347: pallet_prices::pallet::Call<T>
	 **/
	PalletPricesCall: {
		_enum: {
			set_price: {
				assetId: 'TanglePrimitivesCurrencyCurrencyId',
				price: 'u128',
			},
			reset_price: {
				assetId: 'TanglePrimitivesCurrencyCurrencyId',
			},
			set_foreign_asset: {
				foreignAssetId: 'TanglePrimitivesCurrencyCurrencyId',
				assetId: 'TanglePrimitivesCurrencyCurrencyId',
			},
		},
	},
	/**
	 * Lookup349: orml_oracle::module::Call<T, I>
	 **/
	OrmlOracleModuleCall: {
		_enum: {
			feed_values: {
				values: 'Vec<(TanglePrimitivesCurrencyCurrencyId,u128)>',
			},
		},
	},
	/**
	 * Lookup354: sp_runtime::traits::BlakeTwo256
	 **/
	SpRuntimeBlakeTwo256: 'Null',
	/**
	 * Lookup356: pallet_conviction_voting::types::Tally<Votes, Total>
	 **/
	PalletConvictionVotingTally: {
		ayes: 'u128',
		nays: 'u128',
		support: 'u128',
	},
	/**
	 * Lookup357: pallet_whitelist::pallet::Event<T>
	 **/
	PalletWhitelistEvent: {
		_enum: {
			CallWhitelisted: {
				callHash: 'H256',
			},
			WhitelistedCallRemoved: {
				callHash: 'H256',
			},
			WhitelistedCallDispatched: {
				callHash: 'H256',
				result: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>',
			},
		},
	},
	/**
	 * Lookup359: frame_support::dispatch::PostDispatchInfo
	 **/
	FrameSupportDispatchPostDispatchInfo: {
		actualWeight: 'Option<SpWeightsWeightV2Weight>',
		paysFee: 'FrameSupportDispatchPays',
	},
	/**
	 * Lookup361: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
	 **/
	SpRuntimeDispatchErrorWithPostInfo: {
		postInfo: 'FrameSupportDispatchPostDispatchInfo',
		error: 'SpRuntimeDispatchError',
	},
	/**
	 * Lookup362: cumulus_pallet_xcmp_queue::pallet::Event<T>
	 **/
	CumulusPalletXcmpQueueEvent: {
		_enum: {
			Success: {
				messageHash: '[u8;32]',
				messageId: '[u8;32]',
				weight: 'SpWeightsWeightV2Weight',
			},
			Fail: {
				messageHash: '[u8;32]',
				messageId: '[u8;32]',
				error: 'XcmV3TraitsError',
				weight: 'SpWeightsWeightV2Weight',
			},
			BadVersion: {
				messageHash: '[u8;32]',
			},
			BadFormat: {
				messageHash: '[u8;32]',
			},
			XcmpMessageSent: {
				messageHash: '[u8;32]',
			},
			OverweightEnqueued: {
				sender: 'u32',
				sentAt: 'u32',
				index: 'u64',
				required: 'SpWeightsWeightV2Weight',
			},
			OverweightServiced: {
				index: 'u64',
				used: 'SpWeightsWeightV2Weight',
			},
		},
	},
	/**
	 * Lookup363: pallet_xcm::pallet::Event<T>
	 **/
	PalletXcmEvent: {
		_enum: {
			Attempted: {
				outcome: 'XcmV3TraitsOutcome',
			},
			Sent: {
				origin: 'StagingXcmV3MultiLocation',
				destination: 'StagingXcmV3MultiLocation',
				message: 'XcmV3Xcm',
				messageId: '[u8;32]',
			},
			UnexpectedResponse: {
				origin: 'StagingXcmV3MultiLocation',
				queryId: 'u64',
			},
			ResponseReady: {
				queryId: 'u64',
				response: 'XcmV3Response',
			},
			Notified: {
				queryId: 'u64',
				palletIndex: 'u8',
				callIndex: 'u8',
			},
			NotifyOverweight: {
				queryId: 'u64',
				palletIndex: 'u8',
				callIndex: 'u8',
				actualWeight: 'SpWeightsWeightV2Weight',
				maxBudgetedWeight: 'SpWeightsWeightV2Weight',
			},
			NotifyDispatchError: {
				queryId: 'u64',
				palletIndex: 'u8',
				callIndex: 'u8',
			},
			NotifyDecodeFailed: {
				queryId: 'u64',
				palletIndex: 'u8',
				callIndex: 'u8',
			},
			InvalidResponder: {
				origin: 'StagingXcmV3MultiLocation',
				queryId: 'u64',
				expectedLocation: 'Option<StagingXcmV3MultiLocation>',
			},
			InvalidResponderVersion: {
				origin: 'StagingXcmV3MultiLocation',
				queryId: 'u64',
			},
			ResponseTaken: {
				queryId: 'u64',
			},
			AssetsTrapped: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
				origin: 'StagingXcmV3MultiLocation',
				assets: 'XcmVersionedMultiAssets',
			},
			VersionChangeNotified: {
				destination: 'StagingXcmV3MultiLocation',
				result: 'u32',
				cost: 'XcmV3MultiassetMultiAssets',
				messageId: '[u8;32]',
			},
			SupportedVersionChanged: {
				location: 'StagingXcmV3MultiLocation',
				version: 'u32',
			},
			NotifyTargetSendFail: {
				location: 'StagingXcmV3MultiLocation',
				queryId: 'u64',
				error: 'XcmV3TraitsError',
			},
			NotifyTargetMigrationFail: {
				location: 'XcmVersionedMultiLocation',
				queryId: 'u64',
			},
			InvalidQuerierVersion: {
				origin: 'StagingXcmV3MultiLocation',
				queryId: 'u64',
			},
			InvalidQuerier: {
				origin: 'StagingXcmV3MultiLocation',
				queryId: 'u64',
				expectedQuerier: 'StagingXcmV3MultiLocation',
				maybeActualQuerier: 'Option<StagingXcmV3MultiLocation>',
			},
			VersionNotifyStarted: {
				destination: 'StagingXcmV3MultiLocation',
				cost: 'XcmV3MultiassetMultiAssets',
				messageId: '[u8;32]',
			},
			VersionNotifyRequested: {
				destination: 'StagingXcmV3MultiLocation',
				cost: 'XcmV3MultiassetMultiAssets',
				messageId: '[u8;32]',
			},
			VersionNotifyUnrequested: {
				destination: 'StagingXcmV3MultiLocation',
				cost: 'XcmV3MultiassetMultiAssets',
				messageId: '[u8;32]',
			},
			FeesPaid: {
				paying: 'StagingXcmV3MultiLocation',
				fees: 'XcmV3MultiassetMultiAssets',
			},
			AssetsClaimed: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
				origin: 'StagingXcmV3MultiLocation',
				assets: 'XcmVersionedMultiAssets',
			},
		},
	},
	/**
	 * Lookup364: xcm::v3::traits::Outcome
	 **/
	XcmV3TraitsOutcome: {
		_enum: {
			Complete: 'SpWeightsWeightV2Weight',
			Incomplete: '(SpWeightsWeightV2Weight,XcmV3TraitsError)',
			Error: 'XcmV3TraitsError',
		},
	},
	/**
	 * Lookup365: cumulus_pallet_xcm::pallet::Event<T>
	 **/
	CumulusPalletXcmEvent: {
		_enum: {
			InvalidFormat: '[u8;32]',
			UnsupportedVersion: '[u8;32]',
			ExecutedDownward: '([u8;32],XcmV3TraitsOutcome)',
		},
	},
	/**
	 * Lookup366: cumulus_pallet_dmp_queue::pallet::Event<T>
	 **/
	CumulusPalletDmpQueueEvent: {
		_enum: {
			InvalidFormat: {
				messageHash: '[u8;32]',
			},
			UnsupportedVersion: {
				messageHash: '[u8;32]',
			},
			ExecutedDownward: {
				messageHash: '[u8;32]',
				messageId: '[u8;32]',
				outcome: 'XcmV3TraitsOutcome',
			},
			WeightExhausted: {
				messageHash: '[u8;32]',
				messageId: '[u8;32]',
				remainingWeight: 'SpWeightsWeightV2Weight',
				requiredWeight: 'SpWeightsWeightV2Weight',
			},
			OverweightEnqueued: {
				messageHash: '[u8;32]',
				messageId: '[u8;32]',
				overweightIndex: 'u64',
				requiredWeight: 'SpWeightsWeightV2Weight',
			},
			OverweightServiced: {
				overweightIndex: 'u64',
				weightUsed: 'SpWeightsWeightV2Weight',
			},
			MaxMessagesExhausted: {
				messageHash: '[u8;32]',
			},
		},
	},
	/**
	 * Lookup367: pallet_utility::pallet::Event
	 **/
	PalletUtilityEvent: {
		_enum: {
			BatchInterrupted: {
				index: 'u32',
				error: 'SpRuntimeDispatchError',
			},
			BatchCompleted: 'Null',
			BatchCompletedWithErrors: 'Null',
			ItemCompleted: 'Null',
			ItemFailed: {
				error: 'SpRuntimeDispatchError',
			},
			DispatchedAs: {
				result: 'Result<Null, SpRuntimeDispatchError>',
			},
		},
	},
	/**
	 * Lookup368: pallet_scheduler::pallet::Event<T>
	 **/
	PalletSchedulerEvent: {
		_enum: {
			Scheduled: {
				when: 'u32',
				index: 'u32',
			},
			Canceled: {
				when: 'u32',
				index: 'u32',
			},
			Dispatched: {
				task: '(u32,u32)',
				id: 'Option<[u8;32]>',
				result: 'Result<Null, SpRuntimeDispatchError>',
			},
			CallUnavailable: {
				task: '(u32,u32)',
				id: 'Option<[u8;32]>',
			},
			PeriodicFailed: {
				task: '(u32,u32)',
				id: 'Option<[u8;32]>',
			},
			PermanentlyOverweight: {
				task: '(u32,u32)',
				id: 'Option<[u8;32]>',
			},
		},
	},
	/**
	 * Lookup369: pallet_proxy::pallet::Event<T>
	 **/
	PalletProxyEvent: {
		_enum: {
			ProxyExecuted: {
				result: 'Result<Null, SpRuntimeDispatchError>',
			},
			PureCreated: {
				pure: 'AccountId32',
				who: 'AccountId32',
				proxyType: 'TangleKusamaRuntimeProxyType',
				disambiguationIndex: 'u16',
			},
			Announced: {
				real: 'AccountId32',
				proxy: 'AccountId32',
				callHash: 'H256',
			},
			ProxyAdded: {
				delegator: 'AccountId32',
				delegatee: 'AccountId32',
				proxyType: 'TangleKusamaRuntimeProxyType',
				delay: 'u32',
			},
			ProxyRemoved: {
				delegator: 'AccountId32',
				delegatee: 'AccountId32',
				proxyType: 'TangleKusamaRuntimeProxyType',
				delay: 'u32',
			},
		},
	},
	/**
	 * Lookup370: pallet_multisig::pallet::Event<T>
	 **/
	PalletMultisigEvent: {
		_enum: {
			NewMultisig: {
				approving: 'AccountId32',
				multisig: 'AccountId32',
				callHash: '[u8;32]',
			},
			MultisigApproval: {
				approving: 'AccountId32',
				timepoint: 'PalletMultisigTimepoint',
				multisig: 'AccountId32',
				callHash: '[u8;32]',
			},
			MultisigExecuted: {
				approving: 'AccountId32',
				timepoint: 'PalletMultisigTimepoint',
				multisig: 'AccountId32',
				callHash: '[u8;32]',
				result: 'Result<Null, SpRuntimeDispatchError>',
			},
			MultisigCancelled: {
				cancelling: 'AccountId32',
				timepoint: 'PalletMultisigTimepoint',
				multisig: 'AccountId32',
				callHash: '[u8;32]',
			},
		},
	},
	/**
	 * Lookup371: pallet_identity::pallet::Event<T>
	 **/
	PalletIdentityEvent: {
		_enum: {
			IdentitySet: {
				who: 'AccountId32',
			},
			IdentityCleared: {
				who: 'AccountId32',
				deposit: 'u128',
			},
			IdentityKilled: {
				who: 'AccountId32',
				deposit: 'u128',
			},
			JudgementRequested: {
				who: 'AccountId32',
				registrarIndex: 'u32',
			},
			JudgementUnrequested: {
				who: 'AccountId32',
				registrarIndex: 'u32',
			},
			JudgementGiven: {
				target: 'AccountId32',
				registrarIndex: 'u32',
			},
			RegistrarAdded: {
				registrarIndex: 'u32',
			},
			SubIdentityAdded: {
				sub: 'AccountId32',
				main: 'AccountId32',
				deposit: 'u128',
			},
			SubIdentityRemoved: {
				sub: 'AccountId32',
				main: 'AccountId32',
				deposit: 'u128',
			},
			SubIdentityRevoked: {
				sub: 'AccountId32',
				main: 'AccountId32',
				deposit: 'u128',
			},
		},
	},
	/**
	 * Lookup372: pallet_treasury::pallet::Event<T, I>
	 **/
	PalletTreasuryEvent: {
		_enum: {
			Proposed: {
				proposalIndex: 'u32',
			},
			Spending: {
				budgetRemaining: 'u128',
			},
			Awarded: {
				proposalIndex: 'u32',
				award: 'u128',
				account: 'AccountId32',
			},
			Rejected: {
				proposalIndex: 'u32',
				slashed: 'u128',
			},
			Burnt: {
				burntFunds: 'u128',
			},
			Rollover: {
				rolloverBalance: 'u128',
			},
			Deposit: {
				value: 'u128',
			},
			SpendApproved: {
				proposalIndex: 'u32',
				amount: 'u128',
				beneficiary: 'AccountId32',
			},
			UpdatedInactive: {
				reactivated: 'u128',
				deactivated: 'u128',
			},
			AssetSpendApproved: {
				index: 'u32',
				assetKind: 'Null',
				amount: 'u128',
				beneficiary: 'AccountId32',
				validFrom: 'u32',
				expireAt: 'u32',
			},
			AssetSpendVoided: {
				index: 'u32',
			},
			Paid: {
				index: 'u32',
				paymentId: 'Null',
			},
			PaymentFailed: {
				index: 'u32',
				paymentId: 'Null',
			},
			SpendProcessed: {
				index: 'u32',
			},
		},
	},
	/**
	 * Lookup373: pallet_bounties::pallet::Event<T, I>
	 **/
	PalletBountiesEvent: {
		_enum: {
			BountyProposed: {
				index: 'u32',
			},
			BountyRejected: {
				index: 'u32',
				bond: 'u128',
			},
			BountyBecameActive: {
				index: 'u32',
			},
			BountyAwarded: {
				index: 'u32',
				beneficiary: 'AccountId32',
			},
			BountyClaimed: {
				index: 'u32',
				payout: 'u128',
				beneficiary: 'AccountId32',
			},
			BountyCanceled: {
				index: 'u32',
			},
			BountyExtended: {
				index: 'u32',
			},
			BountyApproved: {
				index: 'u32',
			},
			CuratorProposed: {
				bountyId: 'u32',
				curator: 'AccountId32',
			},
			CuratorUnassigned: {
				bountyId: 'u32',
			},
			CuratorAccepted: {
				bountyId: 'u32',
				curator: 'AccountId32',
			},
		},
	},
	/**
	 * Lookup374: pallet_tips::pallet::Event<T, I>
	 **/
	PalletTipsEvent: {
		_enum: {
			NewTip: {
				tipHash: 'H256',
			},
			TipClosing: {
				tipHash: 'H256',
			},
			TipClosed: {
				tipHash: 'H256',
				who: 'AccountId32',
				payout: 'u128',
			},
			TipRetracted: {
				tipHash: 'H256',
			},
			TipSlashed: {
				tipHash: 'H256',
				finder: 'AccountId32',
				deposit: 'u128',
			},
		},
	},
	/**
	 * Lookup375: pallet_preimage::pallet::Event<T>
	 **/
	PalletPreimageEvent: {
		_enum: {
			Noted: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
			Requested: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
			Cleared: {
				_alias: {
					hash_: 'hash',
				},
				hash_: 'H256',
			},
		},
	},
	/**
	 * Lookup376: orml_xtokens::module::Event<T>
	 **/
	OrmlXtokensModuleEvent: {
		_enum: {
			TransferredMultiAssets: {
				sender: 'AccountId32',
				assets: 'XcmV3MultiassetMultiAssets',
				fee: 'XcmV3MultiAsset',
				dest: 'StagingXcmV3MultiLocation',
			},
		},
	},
	/**
	 * Lookup377: orml_tokens::module::Event<T>
	 **/
	OrmlTokensModuleEvent: {
		_enum: {
			Endowed: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			DustLost: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			Transfer: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				from: 'AccountId32',
				to: 'AccountId32',
				amount: 'u128',
			},
			Reserved: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			Unreserved: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			ReserveRepatriated: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				from: 'AccountId32',
				to: 'AccountId32',
				amount: 'u128',
				status: 'FrameSupportTokensMiscBalanceStatus',
			},
			BalanceSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				free: 'u128',
				reserved: 'u128',
			},
			TotalIssuanceSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			Withdrawn: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			Slashed: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				freeAmount: 'u128',
				reservedAmount: 'u128',
			},
			Deposited: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			LockSet: {
				lockId: '[u8;8]',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			LockRemoved: {
				lockId: '[u8;8]',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
			},
			Locked: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			Unlocked: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'AccountId32',
				amount: 'u128',
			},
			Issued: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			Rescinded: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
		},
	},
	/**
	 * Lookup378: orml_unknown_tokens::module::Event
	 **/
	OrmlUnknownTokensModuleEvent: {
		_enum: {
			Deposited: {
				asset: 'XcmV3MultiAsset',
				who: 'StagingXcmV3MultiLocation',
			},
			Withdrawn: {
				asset: 'XcmV3MultiAsset',
				who: 'StagingXcmV3MultiLocation',
			},
		},
	},
	/**
	 * Lookup379: orml_xcm::module::Event<T>
	 **/
	OrmlXcmModuleEvent: {
		_enum: {
			Sent: {
				to: 'StagingXcmV3MultiLocation',
				message: 'XcmV3Xcm',
			},
		},
	},
	/**
	 * Lookup380: zenlink_protocol::pallet::Event<T>
	 **/
	ZenlinkProtocolEvent: {
		_enum: {
			Transferred: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,AccountId32,u128)',
			Burned: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,u128)',
			Minted: '(ZenlinkProtocolPrimitivesAssetId,AccountId32,u128)',
			PairCreated: '(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId)',
			LiquidityAdded:
				'(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
			LiquidityRemoved:
				'(AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
			AssetSwap: '(AccountId32,AccountId32,Vec<ZenlinkProtocolPrimitivesAssetId>,Vec<u128>)',
			TransferredToParachain:
				'(ZenlinkProtocolPrimitivesAssetId,AccountId32,u32,AccountId32,u128,u64)',
			BootstrapContribute:
				'(AccountId32,ZenlinkProtocolPrimitivesAssetId,u128,ZenlinkProtocolPrimitivesAssetId,u128)',
			BootstrapEnd:
				'(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
			BootstrapCreated:
				'(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128,u128,u32)',
			BootstrapClaim:
				'(AccountId32,AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128)',
			BootstrapUpdate:
				'(AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128,u128,u128,u32)',
			BootstrapRefund:
				'(AccountId32,AccountId32,ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,u128,u128)',
			DistributeReward:
				'(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32,Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>)',
			ChargeReward:
				'(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32,Vec<(ZenlinkProtocolPrimitivesAssetId,u128)>)',
			WithdrawReward:
				'(ZenlinkProtocolPrimitivesAssetId,ZenlinkProtocolPrimitivesAssetId,AccountId32)',
		},
	},
	/**
	 * Lookup381: merkle_distributor::pallet::Event<T>
	 **/
	MerkleDistributorEvent: {
		_enum: {
			Create: '(u32,H256,u128)',
			Claim: '(u32,AccountId32,u128)',
			Withdraw: '(u32,AccountId32,u128)',
			AddToWhiteList: 'AccountId32',
			RemoveFromWhiteList: 'AccountId32',
		},
	},
	/**
	 * Lookup382: zenlink_stable_amm::pallet::Event<T>
	 **/
	ZenlinkStableAmmEvent: {
		_enum: {
			CreatePool: {
				poolId: 'u32',
				currencyIds: 'Vec<TanglePrimitivesCurrencyCurrencyId>',
				lpCurrencyId: 'TanglePrimitivesCurrencyCurrencyId',
				a: 'u128',
				account: 'AccountId32',
				adminFeeReceiver: 'AccountId32',
			},
			UpdateAdminFeeReceiver: {
				poolId: 'u32',
				adminFeeReceiver: 'AccountId32',
			},
			AddLiquidity: {
				poolId: 'u32',
				who: 'AccountId32',
				to: 'AccountId32',
				supplyAmounts: 'Vec<u128>',
				fees: 'Vec<u128>',
				newD: 'u128',
				mintAmount: 'u128',
			},
			CurrencyExchange: {
				poolId: 'u32',
				who: 'AccountId32',
				to: 'AccountId32',
				inIndex: 'u32',
				inAmount: 'u128',
				outIndex: 'u32',
				outAmount: 'u128',
			},
			RemoveLiquidity: {
				poolId: 'u32',
				who: 'AccountId32',
				to: 'AccountId32',
				amounts: 'Vec<u128>',
				fees: 'Vec<u128>',
				newTotalSupply: 'u128',
			},
			RemoveLiquidityOneCurrency: {
				poolId: 'u32',
				who: 'AccountId32',
				to: 'AccountId32',
				outIndex: 'u32',
				burnAmount: 'u128',
				outAmount: 'u128',
			},
			RemoveLiquidityImbalance: {
				poolId: 'u32',
				who: 'AccountId32',
				to: 'AccountId32',
				amounts: 'Vec<u128>',
				fees: 'Vec<u128>',
				newD: 'u128',
				newTotalSupply: 'u128',
			},
			NewSwapFee: {
				poolId: 'u32',
				newSwapFee: 'u128',
			},
			NewAdminFee: {
				poolId: 'u32',
				newAdminFee: 'u128',
			},
			RampA: {
				poolId: 'u32',
				initialAPrecise: 'u128',
				futureAPrecise: 'u128',
				now: 'u128',
				futureATime: 'u128',
			},
			StopRampA: {
				poolId: 'u32',
				currentA: 'u128',
				now: 'u128',
			},
			CollectProtocolFee: {
				poolId: 'u32',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				feeAmount: 'u128',
			},
			CurrencyExchangeUnderlying: {
				poolId: 'u32',
				account: 'AccountId32',
				inAmount: 'u128',
				outAmount: 'u128',
				currencyIndexFrom: 'u32',
				currencyIndexTo: 'u32',
				to: 'AccountId32',
			},
		},
	},
	/**
	 * Lookup383: zenlink_swap_router::pallet::Event<T>
	 **/
	ZenlinkSwapRouterEvent: 'Null',
	/**
	 * Lookup384: tangle_token_issuer::pallet::Event<T>
	 **/
	TangleTokenIssuerEvent: {
		_enum: {
			AddedToIssueList: '(AccountId32,TanglePrimitivesCurrencyCurrencyId)',
			RemovedFromIssueList: '(AccountId32,TanglePrimitivesCurrencyCurrencyId)',
			AddedToTransferList: '(AccountId32,TanglePrimitivesCurrencyCurrencyId)',
			RemovedFromTransferList: '(AccountId32,TanglePrimitivesCurrencyCurrencyId)',
			Issued: '(AccountId32,TanglePrimitivesCurrencyCurrencyId,u128)',
			Transferred: '(AccountId32,AccountId32,TanglePrimitivesCurrencyCurrencyId,u128)',
		},
	},
	/**
	 * Lookup385: tangle_asset_registry::pallet::Event<T>
	 **/
	TangleAssetRegistryEvent: {
		_enum: {
			AssetRegistered: {
				assetId: 'TanglePrimitivesCurrencyAssetIds',
				metadata: 'TangleAssetRegistryAssetMetadata',
			},
			AssetUpdated: {
				assetId: 'TanglePrimitivesCurrencyAssetIds',
				metadata: 'TangleAssetRegistryAssetMetadata',
			},
			CurrencyIdRegistered: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				metadata: 'TangleAssetRegistryAssetMetadata',
			},
			MultiLocationSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				location: 'StagingXcmV3MultiLocation',
				weight: 'SpWeightsWeightV2Weight',
			},
		},
	},
	/**
	 * Lookup386: tangle_primitives::currency::AssetIds
	 **/
	TanglePrimitivesCurrencyAssetIds: {
		_enum: {
			ForeignAssetId: 'u32',
			NativeAssetId: 'TanglePrimitivesCurrencyCurrencyId',
		},
	},
	/**
	 * Lookup387: tangle_lst_minting::pallet::Event<T>
	 **/
	TangleLstMintingEvent: {
		_enum: {
			Minted: {
				address: 'AccountId32',
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
				lstAmount: 'u128',
				fee: 'u128',
				remark: 'Bytes',
			},
			Redeemed: {
				address: 'AccountId32',
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
				lstAmount: 'u128',
				fee: 'u128',
				unlockId: 'u32',
			},
			RedeemSuccess: {
				unlockId: 'u32',
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				to: 'AccountId32',
				tokenAmount: 'u128',
			},
			Rebonded: {
				address: 'AccountId32',
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
				lstAmount: 'u128',
				fee: 'u128',
			},
			RebondedByUnlockId: {
				address: 'AccountId32',
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
				lstAmount: 'u128',
				fee: 'u128',
				unlockId: 'u32',
			},
			UnlockDurationSet: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				unlockDuration: 'TanglePrimitivesTimeUnit',
			},
			MinimumMintSet: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			MinimumRedeemSet: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			SupportRebondTokenAdded: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
			},
			SupportRebondTokenRemoved: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
			},
			FeeSet: {
				mintFee: 'Permill',
				redeemFee: 'Permill',
			},
			HookIterationLimitSet: {
				limit: 'u32',
			},
			UnlockingTotalSet: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
			MinTimeUnitSet: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				timeUnit: 'TanglePrimitivesTimeUnit',
			},
			FastRedeemFailed: {
				err: 'SpRuntimeDispatchError',
			},
			CurrencyTimeUnitRecreated: {
				tokenId: 'TanglePrimitivesCurrencyCurrencyId',
				timeUnit: 'TanglePrimitivesTimeUnit',
			},
		},
	},
	/**
	 * Lookup388: tangle_slp::pallet::Event<T>
	 **/
	TangleSlpEvent: {
		_enum: {
			DelegatorInitialized: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
			},
			DelegatorBonded: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				bondedAmount: 'Compact<u128>',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
				validator: 'Option<StagingXcmV3MultiLocation>',
			},
			DelegatorBondExtra: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				extraBondedAmount: 'Compact<u128>',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
				validator: 'Option<StagingXcmV3MultiLocation>',
			},
			DelegatorUnbond: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				unbondAmount: 'Compact<u128>',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
				validator: 'Option<StagingXcmV3MultiLocation>',
			},
			DelegatorUnbondAll: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
			},
			DelegatorRebond: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				rebondAmount: 'Option<u128>',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
				validator: 'Option<StagingXcmV3MultiLocation>',
			},
			Delegated: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				targets: 'Option<Vec<StagingXcmV3MultiLocation>>',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
			},
			Undelegated: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				targets: 'Vec<StagingXcmV3MultiLocation>',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
			},
			Payout: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				validator: 'StagingXcmV3MultiLocation',
				timeUnit: 'Option<TanglePrimitivesTimeUnit>',
			},
			Liquidize: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				timeUnit: 'Option<TanglePrimitivesTimeUnit>',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
				amount: 'Option<u128>',
			},
			Chill: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
				queryId: 'Compact<u64>',
				queryIdHash: 'H256',
			},
			TransferBack: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				from: 'StagingXcmV3MultiLocation',
				to: 'StagingXcmV3MultiLocation',
				amount: 'Compact<u128>',
			},
			TransferTo: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				from: 'StagingXcmV3MultiLocation',
				to: 'StagingXcmV3MultiLocation',
				amount: 'Compact<u128>',
			},
			ConvertAsset: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				amount: 'Compact<u128>',
			},
			DelegatorAdded: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				index: 'Compact<u16>',
				delegatorId: 'StagingXcmV3MultiLocation',
			},
			DelegatorRemoved: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegatorId: 'StagingXcmV3MultiLocation',
			},
			ValidatorsAdded: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				validatorId: 'StagingXcmV3MultiLocation',
			},
			ValidatorsRemoved: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				validatorId: 'StagingXcmV3MultiLocation',
			},
			Refund: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				timeUnit: 'TanglePrimitivesTimeUnit',
				index: 'Compact<u32>',
				amount: 'Compact<u128>',
			},
			FundMoveFromExitToEntrance: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			TimeUnitUpdated: {
				_alias: {
					new_: 'new',
				},
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				old: 'Option<TanglePrimitivesTimeUnit>',
				new_: 'TanglePrimitivesTimeUnit',
			},
			PoolTokenIncreased: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			HostingFeeCharged: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			PoolTokenDecreased: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
			},
			FeeSupplemented: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'Compact<u128>',
				from: 'StagingXcmV3MultiLocation',
				to: 'StagingXcmV3MultiLocation',
			},
			ValidatorsByDelegatorSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				validatorsList: 'Vec<StagingXcmV3MultiLocation>',
				delegatorId: 'StagingXcmV3MultiLocation',
			},
			OperateOriginSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				operator: 'Option<AccountId32>',
			},
			FeeSourceSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				whoAndFee: 'Option<(StagingXcmV3MultiLocation,u128)>',
			},
			DelegatorLedgerSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delegator: 'StagingXcmV3MultiLocation',
				ledger: 'Option<TangleSlpPrimitivesLedger>',
			},
			DelegatorLedgerQueryResponseConfirmed: {
				queryId: 'Compact<u64>',
				entry: 'TangleSlpPrimitivesLedgerUpdateEntry',
			},
			DelegatorLedgerQueryResponseFailed: {
				queryId: 'Compact<u64>',
			},
			ValidatorsByDelegatorQueryResponseConfirmed: {
				queryId: 'Compact<u64>',
				entry: 'TangleSlpPrimitivesValidatorsByDelegatorUpdateEntry',
			},
			ValidatorsByDelegatorQueryResponseFailed: {
				queryId: 'Compact<u64>',
			},
			MinimumsMaximumsSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				minimumsAndMaximums: 'Option<TangleSlpPrimitivesMinimumsMaximums>',
			},
			CurrencyDelaysSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				delays: 'Option<TangleSlpPrimitivesDelays>',
			},
			HostingFeesSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				fees: 'Option<(Permill,StagingXcmV3MultiLocation)>',
			},
			CurrencyTuneExchangeRateLimitSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				tuneExchangeRateLimit: 'Option<(u32,Permill)>',
			},
			OngoingTimeUnitUpdateIntervalSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				interval: 'Option<u32>',
			},
			SupplementFeeAccountWhitelistAdded: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			SupplementFeeAccountWhitelistRemoved: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			ValidatorsReset: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				validatorList: 'Vec<StagingXcmV3MultiLocation>',
			},
			ValidatorBoostListSet: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				validatorBoostList: 'Vec<(StagingXcmV3MultiLocation,u32)>',
			},
			ValidatorBoostListAdded: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
				dueBlockNumber: 'u32',
			},
			RemovedFromBoostList: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				who: 'StagingXcmV3MultiLocation',
			},
			OutdatedValidatorBoostListCleaned: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				page: 'u8',
				removeNum: 'u32',
				numLeft: 'u32',
			},
			BurnFeeFailed: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				amount: 'u128',
			},
		},
	},
	/**
	 * Lookup389: tangle_slp::primitives::LedgerUpdateEntry<Balance>
	 **/
	TangleSlpPrimitivesLedgerUpdateEntry: {
		_enum: {
			Substrate: 'TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry',
			Moonbeam: 'TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateEntry',
			ParachainStaking:
				'TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateEntry',
		},
	},
	/**
	 * Lookup390: tangle_slp::primitives::polkadot_primitives::SubstrateLedgerUpdateEntry<Balance>
	 **/
	TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry: {
		currencyId: 'TanglePrimitivesCurrencyCurrencyId',
		delegatorId: 'StagingXcmV3MultiLocation',
		updateOperation: 'TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation',
		amount: 'Compact<u128>',
		unlockTime: 'Option<TanglePrimitivesTimeUnit>',
	},
	/**
	 * Lookup391: tangle_slp::primitives::polkadot_primitives::SubstrateLedgerUpdateOperation
	 **/
	TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation: {
		_enum: ['Bond', 'Unlock', 'Rebond', 'Liquidize'],
	},
	/**
	 * Lookup392: tangle_slp::primitives::parachain_staking_primitives::ParachainStakingLedgerUpdateEntry<Balance>
	 **/
	TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateEntry: {
		currencyId: 'TanglePrimitivesCurrencyCurrencyId',
		delegatorId: 'StagingXcmV3MultiLocation',
		validatorId: 'Option<StagingXcmV3MultiLocation>',
		updateOperation:
			'TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateOperation',
		amount: 'Compact<u128>',
		unlockTime: 'Option<TanglePrimitivesTimeUnit>',
	},
	/**
	 * Lookup393: tangle_slp::primitives::parachain_staking_primitives::ParachainStakingLedgerUpdateOperation
	 **/
	TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateOperation: {
		_enum: [
			'Bond',
			'BondLess',
			'Revoke',
			'CancelRequest',
			'LeaveDelegator',
			'CancelLeave',
			'ExecuteLeave',
			'ExecuteRequest',
		],
	},
	/**
	 * Lookup394: tangle_slp::primitives::ValidatorsByDelegatorUpdateEntry
	 **/
	TangleSlpPrimitivesValidatorsByDelegatorUpdateEntry: {
		_enum: {
			Substrate: 'TangleSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry',
		},
	},
	/**
	 * Lookup395: tangle_slp::primitives::polkadot_primitives::SubstrateValidatorsByDelegatorUpdateEntry
	 **/
	TangleSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry: {
		currencyId: 'TanglePrimitivesCurrencyCurrencyId',
		delegatorId: 'StagingXcmV3MultiLocation',
		validators: 'Vec<StagingXcmV3MultiLocation>',
	},
	/**
	 * Lookup398: tangle_xcm_interface::pallet::Event<T>
	 **/
	TangleXcmInterfaceEvent: {
		_enum: {
			XcmDestWeightAndFeeUpdated:
				'(TanglePrimitivesXcmOperationType,TanglePrimitivesCurrencyCurrencyId,SpWeightsWeightV2Weight,u128)',
			TransferredStatemineMultiAsset: '(AccountId32,u128)',
		},
	},
	/**
	 * Lookup399: tangle_slpx::pallet::Event<T>
	 **/
	TangleSlpxEvent: {
		_enum: {
			AddWhitelistAccountId: {
				supportChain: 'TangleSlpxSupportChain',
				evmContractAccountId: 'AccountId32',
			},
			RemoveWhitelistAccountId: {
				supportChain: 'TangleSlpxSupportChain',
				evmContractAccountId: 'AccountId32',
			},
			XcmMint: {
				evmCaller: 'H160',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			XcmMintFailed: {
				evmCaller: 'H160',
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			XcmZenlinkSwap: {
				evmCaller: 'H160',
				currencyIdIn: 'TanglePrimitivesCurrencyCurrencyId',
				currencyIdOut: 'TanglePrimitivesCurrencyCurrencyId',
				currencyIdOutAmount: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			XcmZenlinkSwapFailed: {
				evmCaller: 'H160',
				currencyIdIn: 'TanglePrimitivesCurrencyCurrencyId',
				currencyIdOut: 'TanglePrimitivesCurrencyCurrencyId',
				currencyIdInAmount: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			XcmStablePoolSwap: {
				evmCaller: 'H160',
				poolTokenIndexIn: 'u32',
				poolTokenIndexOut: 'u32',
				currencyIdOutAmount: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			XcmStablePoolSwapFailed: {
				evmCaller: 'H160',
				poolTokenIndexIn: 'u32',
				poolTokenIndexOut: 'u32',
				currencyIdInAmount: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			XcmRedeem: {
				evmCaller: 'H160',
				lstId: 'TanglePrimitivesCurrencyCurrencyId',
				lstAmount: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			XcmRedeemFailed: {
				evmCaller: 'H160',
				lstId: 'TanglePrimitivesCurrencyCurrencyId',
				lstAmount: 'u128',
				targetChain: 'TangleSlpxTargetChain',
			},
			SetTransferToFee: {
				supportChain: 'TangleSlpxSupportChain',
				transferToFee: 'u128',
			},
			SetExecutionFee: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				executionFee: 'u128',
			},
			SetCurrencyEthereumCallSwitch: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				isSupport: 'bool',
			},
			SetEthereumCallConfiguration: {
				xcmFee: 'u128',
				xcmWeight: 'SpWeightsWeightV2Weight',
				period: 'u32',
				contract: 'H160',
			},
			XcmSetTokenAmount: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				tokenAmount: 'u128',
				vcurrencyId: 'TanglePrimitivesCurrencyCurrencyId',
				lstAmount: 'u128',
			},
			SetCurrencyToSupportXcmFee: {
				currencyId: 'TanglePrimitivesCurrencyCurrencyId',
				isSupport: 'bool',
			},
			SetDelayBlock: {
				delayBlock: 'u32',
			},
			CreateOrder: {
				order: 'TangleSlpxOrder',
			},
			OrderHandled: {
				order: 'TangleSlpxOrder',
			},
			OrderFailed: {
				order: 'TangleSlpxOrder',
			},
			InsufficientAssets: 'Null',
		},
	},
	/**
	 * Lookup400: tangle_slpx::types::Order<sp_core::crypto::AccountId32, tangle_primitives::currency::CurrencyId, Balance, BlockNumber>
	 **/
	TangleSlpxOrder: {
		sourceChainCaller: 'TangleSlpxOrderCaller',
		tangleChainCaller: 'AccountId32',
		derivativeAccount: 'AccountId32',
		createBlockNumber: 'u32',
		currencyId: 'TanglePrimitivesCurrencyCurrencyId',
		currencyAmount: 'u128',
		orderType: 'TangleSlpxOrderType',
		remark: 'Bytes',
		targetChain: 'TangleSlpxTargetChain',
	},
	/**
	 * Lookup401: tangle_slpx::types::OrderCaller<sp_core::crypto::AccountId32>
	 **/
	TangleSlpxOrderCaller: {
		_enum: {
			Substrate: 'AccountId32',
			Evm: 'H160',
		},
	},
	/**
	 * Lookup402: pallet_ranked_collective::pallet::Event<T, I>
	 **/
	PalletRankedCollectiveEvent: {
		_enum: {
			MemberAdded: {
				who: 'AccountId32',
			},
			RankChanged: {
				who: 'AccountId32',
				rank: 'u16',
			},
			MemberRemoved: {
				who: 'AccountId32',
				rank: 'u16',
			},
			Voted: {
				who: 'AccountId32',
				poll: 'u32',
				vote: 'PalletRankedCollectiveVoteRecord',
				tally: 'PalletRankedCollectiveTally',
			},
		},
	},
	/**
	 * Lookup403: pallet_ranked_collective::VoteRecord
	 **/
	PalletRankedCollectiveVoteRecord: {
		_enum: {
			Aye: 'u32',
			Nay: 'u32',
		},
	},
	/**
	 * Lookup404: pallet_ranked_collective::Tally<T, I, M>
	 **/
	PalletRankedCollectiveTally: {
		bareAyes: 'u32',
		ayes: 'u32',
		nays: 'u32',
	},
	/**
	 * Lookup406: tangle_stable_asset::pallet::Event<T>
	 **/
	TangleStableAssetEvent: {
		_enum: {
			CreatePool: {
				poolId: 'u32',
				a: 'u128',
				swapId: 'AccountId32',
				palletId: 'AccountId32',
			},
			LiquidityAdded: {
				minter: 'AccountId32',
				poolId: 'u32',
				a: 'u128',
				inputAmounts: 'Vec<u128>',
				minOutputAmount: 'u128',
				balances: 'Vec<u128>',
				totalSupply: 'u128',
				feeAmount: 'u128',
				outputAmount: 'u128',
			},
			TokenSwapped: {
				swapper: 'AccountId32',
				poolId: 'u32',
				a: 'u128',
				inputAsset: 'TanglePrimitivesCurrencyCurrencyId',
				outputAsset: 'TanglePrimitivesCurrencyCurrencyId',
				inputAmount: 'u128',
				minOutputAmount: 'u128',
				balances: 'Vec<u128>',
				totalSupply: 'u128',
				outputAmount: 'u128',
			},
			RedeemedProportion: {
				redeemer: 'AccountId32',
				poolId: 'u32',
				a: 'u128',
				inputAmount: 'u128',
				minOutputAmounts: 'Vec<u128>',
				balances: 'Vec<u128>',
				totalSupply: 'u128',
				feeAmount: 'u128',
				outputAmounts: 'Vec<u128>',
			},
			RedeemedSingle: {
				redeemer: 'AccountId32',
				poolId: 'u32',
				a: 'u128',
				inputAmount: 'u128',
				outputAsset: 'TanglePrimitivesCurrencyCurrencyId',
				minOutputAmount: 'u128',
				balances: 'Vec<u128>',
				totalSupply: 'u128',
				feeAmount: 'u128',
				outputAmount: 'u128',
			},
			RedeemedMulti: {
				redeemer: 'AccountId32',
				poolId: 'u32',
				a: 'u128',
				outputAmounts: 'Vec<u128>',
				maxInputAmount: 'u128',
				balances: 'Vec<u128>',
				totalSupply: 'u128',
				feeAmount: 'u128',
				inputAmount: 'u128',
			},
			BalanceUpdated: {
				poolId: 'u32',
				oldBalances: 'Vec<u128>',
				newBalances: 'Vec<u128>',
			},
			YieldCollected: {
				poolId: 'u32',
				a: 'u128',
				oldTotalSupply: 'u128',
				newTotalSupply: 'u128',
				who: 'AccountId32',
				amount: 'u128',
			},
			FeeCollected: {
				poolId: 'u32',
				a: 'u128',
				oldBalances: 'Vec<u128>',
				newBalances: 'Vec<u128>',
				oldTotalSupply: 'u128',
				newTotalSupply: 'u128',
				who: 'AccountId32',
				amount: 'u128',
			},
			AModified: {
				poolId: 'u32',
				value: 'u128',
				time: 'u32',
			},
			FeeModified: {
				poolId: 'u32',
				mintFee: 'u128',
				swapFee: 'u128',
				redeemFee: 'u128',
			},
			RecipientModified: {
				poolId: 'u32',
				feeRecipient: 'AccountId32',
				yieldRecipient: 'AccountId32',
			},
			TokenRateSet: {
				poolId: 'u32',
				tokenRate: 'Vec<(TanglePrimitivesCurrencyCurrencyId,(u128,u128))>',
			},
			TokenRateHardcapConfigured: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				hardcap: 'Permill',
			},
			TokenRateHardcapRemoved: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
			},
			TokenRateRefreshFailed: {
				poolId: 'u32',
			},
		},
	},
	/**
	 * Lookup407: tangle_lst_voting::pallet::Event<T>
	 **/
	TangleLstVotingEvent: {
		_enum: {
			Voted: {
				who: 'AccountId32',
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'u32',
				tokenVote: 'TangleLstVotingVoteAccountVote',
				delegatorVote: 'TangleLstVotingVoteAccountVote',
			},
			Unlocked: {
				who: 'AccountId32',
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'u32',
			},
			DelegatorVoteRemoved: {
				who: 'AccountId32',
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				derivativeIndex: 'u16',
			},
			DelegatorAdded: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				derivativeIndex: 'u16',
			},
			ReferendumInfoCreated: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'u32',
				info: 'TangleLstVotingVoteReferendumInfo',
			},
			ReferendumInfoSet: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'u32',
				info: 'TangleLstVotingVoteReferendumInfo',
			},
			VoteLockingPeriodSet: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				lockingPeriod: 'u32',
			},
			UndecidingTimeoutSet: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				undecidingTimeout: 'u32',
			},
			ReferendumKilled: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'u32',
			},
			VoteNotified: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'u32',
				success: 'bool',
			},
			DelegatorVoteRemovedNotified: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				pollIndex: 'u32',
				success: 'bool',
			},
			ResponseReceived: {
				responder: 'StagingXcmV3MultiLocation',
				queryId: 'u64',
				response: 'XcmV3Response',
			},
			VoteCapRatioSet: {
				lst: 'TanglePrimitivesCurrencyCurrencyId',
				voteCapRatio: 'Perbill',
			},
		},
	},
	/**
	 * Lookup408: pallet_prices::pallet::Event<T>
	 **/
	PalletPricesEvent: {
		_enum: {
			SetPrice: '(TanglePrimitivesCurrencyCurrencyId,u128)',
			ResetPrice: 'TanglePrimitivesCurrencyCurrencyId',
		},
	},
	/**
	 * Lookup409: orml_oracle::module::Event<T, I>
	 **/
	OrmlOracleModuleEvent: {
		_enum: {
			NewFeedData: {
				sender: 'AccountId32',
				values: 'Vec<(TanglePrimitivesCurrencyCurrencyId,u128)>',
			},
		},
	},
	/**
	 * Lookup411: frame_system::Phase
	 **/
	FrameSystemPhase: {
		_enum: {
			ApplyExtrinsic: 'u32',
			Finalization: 'Null',
			Initialization: 'Null',
		},
	},
	/**
	 * Lookup413: frame_system::LastRuntimeUpgradeInfo
	 **/
	FrameSystemLastRuntimeUpgradeInfo: {
		specVersion: 'Compact<u32>',
		specName: 'Text',
	},
	/**
	 * Lookup415: frame_system::limits::BlockWeights
	 **/
	FrameSystemLimitsBlockWeights: {
		baseBlock: 'SpWeightsWeightV2Weight',
		maxBlock: 'SpWeightsWeightV2Weight',
		perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass',
	},
	/**
	 * Lookup416: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
	 **/
	FrameSupportDispatchPerDispatchClassWeightsPerClass: {
		normal: 'FrameSystemLimitsWeightsPerClass',
		operational: 'FrameSystemLimitsWeightsPerClass',
		mandatory: 'FrameSystemLimitsWeightsPerClass',
	},
	/**
	 * Lookup417: frame_system::limits::WeightsPerClass
	 **/
	FrameSystemLimitsWeightsPerClass: {
		baseExtrinsic: 'SpWeightsWeightV2Weight',
		maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
		maxTotal: 'Option<SpWeightsWeightV2Weight>',
		reserved: 'Option<SpWeightsWeightV2Weight>',
	},
	/**
	 * Lookup418: frame_system::limits::BlockLength
	 **/
	FrameSystemLimitsBlockLength: {
		max: 'FrameSupportDispatchPerDispatchClassU32',
	},
	/**
	 * Lookup419: frame_support::dispatch::PerDispatchClass<T>
	 **/
	FrameSupportDispatchPerDispatchClassU32: {
		normal: 'u32',
		operational: 'u32',
		mandatory: 'u32',
	},
	/**
	 * Lookup420: sp_weights::RuntimeDbWeight
	 **/
	SpWeightsRuntimeDbWeight: {
		read: 'u64',
		write: 'u64',
	},
	/**
	 * Lookup421: sp_version::RuntimeVersion
	 **/
	SpVersionRuntimeVersion: {
		specName: 'Text',
		implName: 'Text',
		authoringVersion: 'u32',
		specVersion: 'u32',
		implVersion: 'u32',
		apis: 'Vec<([u8;8],u32)>',
		transactionVersion: 'u32',
		stateVersion: 'u8',
	},
	/**
	 * Lookup425: frame_system::pallet::Error<T>
	 **/
	FrameSystemError: {
		_enum: [
			'InvalidSpecName',
			'SpecVersionNeedsToIncrease',
			'FailedToExtractRuntimeVersion',
			'NonDefaultComposite',
			'NonZeroRefCount',
			'CallFiltered',
		],
	},
	/**
	 * Lookup427: pallet_indices::pallet::Error<T>
	 **/
	PalletIndicesError: {
		_enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent'],
	},
	/**
	 * Lookup429: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
	 **/
	CumulusPalletParachainSystemUnincludedSegmentAncestor: {
		usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
		paraHeadHash: 'Option<H256>',
		consumedGoAheadSignal: 'Option<PolkadotPrimitivesV6UpgradeGoAhead>',
	},
	/**
	 * Lookup430: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
	 **/
	CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
		umpMsgCount: 'u32',
		umpTotalBytes: 'u32',
		hrmpOutgoing: 'BTreeMap<u32, CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate>',
	},
	/**
	 * Lookup432: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
	 **/
	CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
		msgCount: 'u32',
		totalBytes: 'u32',
	},
	/**
	 * Lookup436: polkadot_primitives::v6::UpgradeGoAhead
	 **/
	PolkadotPrimitivesV6UpgradeGoAhead: {
		_enum: ['Abort', 'GoAhead'],
	},
	/**
	 * Lookup437: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
	 **/
	CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
		usedBandwidth: 'CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth',
		hrmpWatermark: 'Option<u32>',
		consumedGoAheadSignal: 'Option<PolkadotPrimitivesV6UpgradeGoAhead>',
	},
	/**
	 * Lookup439: polkadot_primitives::v6::UpgradeRestriction
	 **/
	PolkadotPrimitivesV6UpgradeRestriction: {
		_enum: ['Present'],
	},
	/**
	 * Lookup440: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
	 **/
	CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
		dmqMqcHead: 'H256',
		relayDispatchQueueRemainingCapacity:
			'CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity',
		ingressChannels: 'Vec<(u32,PolkadotPrimitivesV6AbridgedHrmpChannel)>',
		egressChannels: 'Vec<(u32,PolkadotPrimitivesV6AbridgedHrmpChannel)>',
	},
	/**
	 * Lookup441: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
	 **/
	CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
		remainingCount: 'u32',
		remainingSize: 'u32',
	},
	/**
	 * Lookup444: polkadot_primitives::v6::AbridgedHrmpChannel
	 **/
	PolkadotPrimitivesV6AbridgedHrmpChannel: {
		maxCapacity: 'u32',
		maxTotalSize: 'u32',
		maxMessageSize: 'u32',
		msgCount: 'u32',
		totalSize: 'u32',
		mqcHead: 'Option<H256>',
	},
	/**
	 * Lookup445: polkadot_primitives::v6::AbridgedHostConfiguration
	 **/
	PolkadotPrimitivesV6AbridgedHostConfiguration: {
		maxCodeSize: 'u32',
		maxHeadDataSize: 'u32',
		maxUpwardQueueCount: 'u32',
		maxUpwardQueueSize: 'u32',
		maxUpwardMessageSize: 'u32',
		maxUpwardMessageNumPerCandidate: 'u32',
		hrmpMaxMessageNumPerCandidate: 'u32',
		validationUpgradeCooldown: 'u32',
		validationUpgradeDelay: 'u32',
		asyncBackingParams: 'PolkadotPrimitivesV6AsyncBackingAsyncBackingParams',
	},
	/**
	 * Lookup446: polkadot_primitives::v6::async_backing::AsyncBackingParams
	 **/
	PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: {
		maxCandidateDepth: 'u32',
		allowedAncestryLen: 'u32',
	},
	/**
	 * Lookup452: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
	 **/
	PolkadotCorePrimitivesOutboundHrmpMessage: {
		recipient: 'u32',
		data: 'Bytes',
	},
	/**
	 * Lookup453: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
	 **/
	CumulusPalletParachainSystemCodeUpgradeAuthorization: {
		codeHash: 'H256',
		checkVersion: 'bool',
	},
	/**
	 * Lookup454: cumulus_pallet_parachain_system::pallet::Error<T>
	 **/
	CumulusPalletParachainSystemError: {
		_enum: [
			'OverlappingUpgrades',
			'ProhibitedByPolkadot',
			'TooBig',
			'ValidationDataNotAvailable',
			'HostConfigurationNotAvailable',
			'NotScheduled',
			'NothingAuthorized',
			'Unauthorized',
		],
	},
	/**
	 * Lookup456: pallet_balances::types::BalanceLock<Balance>
	 **/
	PalletBalancesBalanceLock: {
		id: '[u8;8]',
		amount: 'u128',
		reasons: 'PalletBalancesReasons',
	},
	/**
	 * Lookup457: pallet_balances::types::Reasons
	 **/
	PalletBalancesReasons: {
		_enum: ['Fee', 'Misc', 'All'],
	},
	/**
	 * Lookup460: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
	 **/
	PalletBalancesReserveData: {
		id: '[u8;8]',
		amount: 'u128',
	},
	/**
	 * Lookup464: tangle_kusama_runtime::RuntimeHoldReason
	 **/
	TangleKusamaRuntimeRuntimeHoldReason: {
		_enum: {
			__Unused0: 'Null',
			__Unused1: 'Null',
			__Unused2: 'Null',
			__Unused3: 'Null',
			__Unused4: 'Null',
			__Unused5: 'Null',
			__Unused6: 'Null',
			__Unused7: 'Null',
			__Unused8: 'Null',
			__Unused9: 'Null',
			__Unused10: 'Null',
			__Unused11: 'Null',
			__Unused12: 'Null',
			__Unused13: 'Null',
			__Unused14: 'Null',
			__Unused15: 'Null',
			__Unused16: 'Null',
			__Unused17: 'Null',
			__Unused18: 'Null',
			__Unused19: 'Null',
			__Unused20: 'Null',
			__Unused21: 'Null',
			__Unused22: 'Null',
			__Unused23: 'Null',
			__Unused24: 'Null',
			__Unused25: 'Null',
			__Unused26: 'Null',
			__Unused27: 'Null',
			__Unused28: 'Null',
			__Unused29: 'Null',
			__Unused30: 'Null',
			__Unused31: 'Null',
			__Unused32: 'Null',
			__Unused33: 'Null',
			__Unused34: 'Null',
			__Unused35: 'Null',
			__Unused36: 'Null',
			__Unused37: 'Null',
			__Unused38: 'Null',
			__Unused39: 'Null',
			__Unused40: 'Null',
			__Unused41: 'Null',
			__Unused42: 'Null',
			__Unused43: 'Null',
			__Unused44: 'Null',
			__Unused45: 'Null',
			__Unused46: 'Null',
			__Unused47: 'Null',
			__Unused48: 'Null',
			__Unused49: 'Null',
			__Unused50: 'Null',
			__Unused51: 'Null',
			__Unused52: 'Null',
			__Unused53: 'Null',
			__Unused54: 'Null',
			__Unused55: 'Null',
			__Unused56: 'Null',
			__Unused57: 'Null',
			__Unused58: 'Null',
			__Unused59: 'Null',
			__Unused60: 'Null',
			__Unused61: 'Null',
			__Unused62: 'Null',
			__Unused63: 'Null',
			Preimage: 'PalletPreimageHoldReason',
		},
	},
	/**
	 * Lookup465: pallet_preimage::pallet::HoldReason
	 **/
	PalletPreimageHoldReason: {
		_enum: ['Preimage'],
	},
	/**
	 * Lookup468: pallet_balances::types::IdAmount<Id, Balance>
	 **/
	PalletBalancesIdAmount: {
		id: 'Null',
		amount: 'u128',
	},
	/**
	 * Lookup470: pallet_balances::pallet::Error<T, I>
	 **/
	PalletBalancesError: {
		_enum: [
			'VestingBalance',
			'LiquidityRestrictions',
			'InsufficientBalance',
			'ExistentialDeposit',
			'Expendability',
			'ExistingVestingSchedule',
			'DeadAccount',
			'TooManyReserves',
			'TooManyHolds',
			'TooManyFreezes',
		],
	},
	/**
	 * Lookup471: pallet_transaction_payment::Releases
	 **/
	PalletTransactionPaymentReleases: {
		_enum: ['V1Ancient', 'V2'],
	},
	/**
	 * Lookup475: sp_core::crypto::KeyTypeId
	 **/
	SpCoreCryptoKeyTypeId: '[u8;4]',
	/**
	 * Lookup476: pallet_session::pallet::Error<T>
	 **/
	PalletSessionError: {
		_enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount'],
	},
	/**
	 * Lookup481: tangle_parachain_staking::types::ParachainBondConfig<sp_core::crypto::AccountId32, BalanceOf>
	 **/
	TangleParachainStakingParachainBondConfig: {
		account: 'AccountId32',
		percent: 'Percent',
		paymentInRound: 'u128',
	},
	/**
	 * Lookup482: tangle_parachain_staking::types::RoundInfo<BlockNumber>
	 **/
	TangleParachainStakingRoundInfo: {
		current: 'u32',
		first: 'u32',
		length: 'u32',
	},
	/**
	 * Lookup483: tangle_parachain_staking::types::Delegator<sp_core::crypto::AccountId32, Balance>
	 **/
	TangleParachainStakingDelegator: {
		id: 'AccountId32',
		delegations: 'TangleParachainStakingSetOrderedSet',
		total: 'u128',
		lessTotal: 'u128',
		status: 'TangleParachainStakingDelegatorStatus',
	},
	/**
	 * Lookup484: tangle_parachain_staking::set::OrderedSet<tangle_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>>
	 **/
	TangleParachainStakingSetOrderedSet: 'Vec<TangleParachainStakingBond>',
	/**
	 * Lookup485: tangle_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>
	 **/
	TangleParachainStakingBond: {
		owner: 'AccountId32',
		amount: 'u128',
	},
	/**
	 * Lookup487: tangle_parachain_staking::types::DelegatorStatus
	 **/
	TangleParachainStakingDelegatorStatus: {
		_enum: {
			Active: 'Null',
			Leaving: 'u32',
		},
	},
	/**
	 * Lookup488: tangle_parachain_staking::types::CandidateMetadata<Balance>
	 **/
	TangleParachainStakingCandidateMetadata: {
		bond: 'u128',
		delegationCount: 'u32',
		totalCounted: 'u128',
		lowestTopDelegationAmount: 'u128',
		highestBottomDelegationAmount: 'u128',
		lowestBottomDelegationAmount: 'u128',
		topCapacity: 'TangleParachainStakingCapacityStatus',
		bottomCapacity: 'TangleParachainStakingCapacityStatus',
		request: 'Option<TangleParachainStakingCandidateBondLessRequest>',
		status: 'TangleParachainStakingCollatorStatus',
	},
	/**
	 * Lookup489: tangle_parachain_staking::types::CapacityStatus
	 **/
	TangleParachainStakingCapacityStatus: {
		_enum: ['Full', 'Empty', 'Partial'],
	},
	/**
	 * Lookup491: tangle_parachain_staking::types::CandidateBondLessRequest<Balance>
	 **/
	TangleParachainStakingCandidateBondLessRequest: {
		amount: 'u128',
		whenExecutable: 'u32',
	},
	/**
	 * Lookup492: tangle_parachain_staking::types::CollatorStatus
	 **/
	TangleParachainStakingCollatorStatus: {
		_enum: {
			Active: 'Null',
			Idle: 'Null',
			Leaving: 'u32',
		},
	},
	/**
	 * Lookup494: tangle_parachain_staking::delegation_requests::ScheduledRequest<sp_core::crypto::AccountId32, Balance>
	 **/
	TangleParachainStakingDelegationRequestsScheduledRequest: {
		delegator: 'AccountId32',
		whenExecutable: 'u32',
		action: 'TangleParachainStakingDelegationRequestsDelegationAction',
	},
	/**
	 * Lookup495: tangle_parachain_staking::types::Delegations<sp_core::crypto::AccountId32, Balance>
	 **/
	TangleParachainStakingDelegations: {
		delegations: 'Vec<TangleParachainStakingBond>',
		total: 'u128',
	},
	/**
	 * Lookup497: tangle_parachain_staking::types::CollatorSnapshot<sp_core::crypto::AccountId32, Balance>
	 **/
	TangleParachainStakingCollatorSnapshot: {
		bond: 'u128',
		delegations: 'Vec<TangleParachainStakingBond>',
		total: 'u128',
	},
	/**
	 * Lookup498: tangle_parachain_staking::types::DelayedPayout<Balance>
	 **/
	TangleParachainStakingDelayedPayout: {
		roundIssuance: 'u128',
		totalStakingReward: 'u128',
		collatorCommission: 'Perbill',
	},
	/**
	 * Lookup499: tangle_parachain_staking::inflation::InflationInfo<Balance>
	 **/
	TangleParachainStakingInflationInflationInfo: {
		expect: {
			min: 'u128',
			ideal: 'u128',
			max: 'u128',
		},
		annual: {
			min: 'Perbill',
			ideal: 'Perbill',
			max: 'Perbill',
		},
		round: {
			min: 'Perbill',
			ideal: 'Perbill',
			max: 'Perbill',
		},
	},
	/**
	 * Lookup500: frame_support::PalletId
	 **/
	FrameSupportPalletId: '[u8;8]',
	/**
	 * Lookup501: tangle_parachain_staking::pallet::Error<T>
	 **/
	TangleParachainStakingError: {
		_enum: [
			'DelegatorDNE',
			'DelegatorDNEinTopNorBottom',
			'DelegatorDNEInDelegatorSet',
			'CandidateDNE',
			'DelegationDNE',
			'DelegatorExists',
			'CandidateExists',
			'CandidateBondBelowMin',
			'InsufficientBalance',
			'DelegatorBondBelowMin',
			'DelegationBelowMin',
			'AlreadyOffline',
			'AlreadyActive',
			'DelegatorAlreadyLeaving',
			'DelegatorNotLeaving',
			'DelegatorCannotLeaveYet',
			'CannotDelegateIfLeaving',
			'CandidateAlreadyLeaving',
			'CandidateNotLeaving',
			'CandidateCannotLeaveYet',
			'CannotGoOnlineIfLeaving',
			'ExceedMaxDelegationsPerDelegator',
			'AlreadyDelegatedCandidate',
			'InvalidSchedule',
			'CannotSetBelowMin',
			'RoundLengthMustBeAtLeastTotalSelectedCollators',
			'NoWritingSameValue',
			'TooLowCandidateCountWeightHintJoinCandidates',
			'TooLowCandidateCountWeightHintCancelLeaveCandidates',
			'TooLowCandidateCountToLeaveCandidates',
			'TooLowDelegationCountToDelegate',
			'TooLowCandidateDelegationCountToDelegate',
			'TooLowCandidateDelegationCountToLeaveCandidates',
			'TooLowDelegationCountToLeaveDelegators',
			'PendingCandidateRequestsDNE',
			'PendingCandidateRequestAlreadyExists',
			'PendingCandidateRequestNotDueYet',
			'PendingDelegationRequestDNE',
			'PendingDelegationRequestAlreadyExists',
			'PendingDelegationRequestNotDueYet',
			'CannotDelegateLessThanOrEqualToLowestBottomWhenFull',
			'PendingDelegationRevoke',
		],
	},
	/**
	 * Lookup507: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
	 **/
	PalletDemocracyReferendumInfo: {
		_enum: {
			Ongoing: 'PalletDemocracyReferendumStatus',
			Finished: {
				approved: 'bool',
				end: 'u32',
			},
		},
	},
	/**
	 * Lookup508: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
	 **/
	PalletDemocracyReferendumStatus: {
		end: 'u32',
		proposal: 'FrameSupportPreimagesBounded',
		threshold: 'PalletDemocracyVoteThreshold',
		delay: 'u32',
		tally: 'PalletDemocracyTally',
	},
	/**
	 * Lookup509: pallet_democracy::types::Tally<Balance>
	 **/
	PalletDemocracyTally: {
		ayes: 'u128',
		nays: 'u128',
		turnout: 'u128',
	},
	/**
	 * Lookup510: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
	 **/
	PalletDemocracyVoteVoting: {
		_enum: {
			Direct: {
				votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
				delegations: 'PalletDemocracyDelegations',
				prior: 'PalletDemocracyVotePriorLock',
			},
			Delegating: {
				balance: 'u128',
				target: 'AccountId32',
				conviction: 'PalletDemocracyConviction',
				delegations: 'PalletDemocracyDelegations',
				prior: 'PalletDemocracyVotePriorLock',
			},
		},
	},
	/**
	 * Lookup514: pallet_democracy::types::Delegations<Balance>
	 **/
	PalletDemocracyDelegations: {
		votes: 'u128',
		capital: 'u128',
	},
	/**
	 * Lookup515: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
	 **/
	PalletDemocracyVotePriorLock: '(u32,u128)',
	/**
	 * Lookup518: pallet_democracy::pallet::Error<T>
	 **/
	PalletDemocracyError: {
		_enum: [
			'ValueLow',
			'ProposalMissing',
			'AlreadyCanceled',
			'DuplicateProposal',
			'ProposalBlacklisted',
			'NotSimpleMajority',
			'InvalidHash',
			'NoProposal',
			'AlreadyVetoed',
			'ReferendumInvalid',
			'NoneWaiting',
			'NotVoter',
			'NoPermission',
			'AlreadyDelegating',
			'InsufficientFunds',
			'NotDelegating',
			'VotesExist',
			'InstantNotAllowed',
			'Nonsense',
			'WrongUpperBound',
			'MaxVotesReached',
			'TooMany',
			'VotingPeriodLow',
			'PreimageNotExist',
		],
	},
	/**
	 * Lookup520: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
	 **/
	PalletCollectiveVotes: {
		index: 'u32',
		threshold: 'u32',
		ayes: 'Vec<AccountId32>',
		nays: 'Vec<AccountId32>',
		end: 'u32',
	},
	/**
	 * Lookup521: pallet_collective::pallet::Error<T, I>
	 **/
	PalletCollectiveError: {
		_enum: [
			'NotMember',
			'DuplicateProposal',
			'ProposalMissing',
			'WrongIndex',
			'DuplicateVote',
			'AlreadyInitialized',
			'TooEarly',
			'TooManyProposals',
			'WrongProposalWeight',
			'WrongProposalLength',
			'PrimeAccountNotMember',
		],
	},
	/**
	 * Lookup525: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
	 **/
	PalletElectionsPhragmenSeatHolder: {
		who: 'AccountId32',
		stake: 'u128',
		deposit: 'u128',
	},
	/**
	 * Lookup526: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
	 **/
	PalletElectionsPhragmenVoter: {
		votes: 'Vec<AccountId32>',
		stake: 'u128',
		deposit: 'u128',
	},
	/**
	 * Lookup527: pallet_elections_phragmen::pallet::Error<T>
	 **/
	PalletElectionsPhragmenError: {
		_enum: [
			'UnableToVote',
			'NoVotes',
			'TooManyVotes',
			'MaximumVotesExceeded',
			'LowBalance',
			'UnableToPayBond',
			'MustBeVoter',
			'DuplicatedCandidate',
			'TooManyCandidates',
			'MemberSubmit',
			'RunnerUpSubmit',
			'InsufficientCandidateFunds',
			'NotMember',
			'InvalidWitnessData',
			'InvalidVoteCount',
			'InvalidRenouncing',
			'InvalidReplacement',
		],
	},
	/**
	 * Lookup529: pallet_membership::pallet::Error<T, I>
	 **/
	PalletMembershipError: {
		_enum: ['AlreadyMember', 'NotMember', 'TooManyMembers'],
	},
	/**
	 * Lookup533: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
	 **/
	PalletConvictionVotingVoteVoting: {
		_enum: {
			Casting: 'PalletConvictionVotingVoteCasting',
			Delegating: 'PalletConvictionVotingVoteDelegating',
		},
	},
	/**
	 * Lookup534: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
	 **/
	PalletConvictionVotingVoteCasting: {
		votes: 'Vec<(u32,PalletConvictionVotingVoteAccountVote)>',
		delegations: 'PalletConvictionVotingDelegations',
		prior: 'PalletConvictionVotingVotePriorLock',
	},
	/**
	 * Lookup538: pallet_conviction_voting::types::Delegations<Balance>
	 **/
	PalletConvictionVotingDelegations: {
		votes: 'u128',
		capital: 'u128',
	},
	/**
	 * Lookup539: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
	 **/
	PalletConvictionVotingVotePriorLock: '(u32,u128)',
	/**
	 * Lookup540: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
	 **/
	PalletConvictionVotingVoteDelegating: {
		balance: 'u128',
		target: 'AccountId32',
		conviction: 'PalletConvictionVotingConviction',
		delegations: 'PalletConvictionVotingDelegations',
		prior: 'PalletConvictionVotingVotePriorLock',
	},
	/**
	 * Lookup544: pallet_conviction_voting::pallet::Error<T, I>
	 **/
	PalletConvictionVotingError: {
		_enum: [
			'NotOngoing',
			'NotVoter',
			'NoPermission',
			'NoPermissionYet',
			'AlreadyDelegating',
			'AlreadyVoting',
			'InsufficientFunds',
			'NotDelegating',
			'Nonsense',
			'MaxVotesReached',
			'ClassNeeded',
			'BadClass',
		],
	},
	/**
	 * Lookup545: pallet_referenda::types::ReferendumInfo<TrackId, tangle_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
	 **/
	PalletReferendaReferendumInfoConvictionVotingTally: {
		_enum: {
			Ongoing: 'PalletReferendaReferendumStatusConvictionVotingTally',
			Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
			Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
			Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
			TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
			Killed: 'u32',
		},
	},
	/**
	 * Lookup546: pallet_referenda::types::ReferendumStatus<TrackId, tangle_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
	 **/
	PalletReferendaReferendumStatusConvictionVotingTally: {
		track: 'u16',
		origin: 'TangleKusamaRuntimeOriginCaller',
		proposal: 'FrameSupportPreimagesBounded',
		enactment: 'FrameSupportScheduleDispatchTime',
		submitted: 'u32',
		submissionDeposit: 'PalletReferendaDeposit',
		decisionDeposit: 'Option<PalletReferendaDeposit>',
		deciding: 'Option<PalletReferendaDecidingStatus>',
		tally: 'PalletConvictionVotingTally',
		inQueue: 'bool',
		alarm: 'Option<(u32,(u32,u32))>',
	},
	/**
	 * Lookup547: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
	 **/
	PalletReferendaDeposit: {
		who: 'AccountId32',
		amount: 'u128',
	},
	/**
	 * Lookup550: pallet_referenda::types::DecidingStatus<BlockNumber>
	 **/
	PalletReferendaDecidingStatus: {
		since: 'u32',
		confirming: 'Option<u32>',
	},
	/**
	 * Lookup558: pallet_referenda::types::TrackInfo<Balance, Moment>
	 **/
	PalletReferendaTrackInfo: {
		name: 'Text',
		maxDeciding: 'u32',
		decisionDeposit: 'u128',
		preparePeriod: 'u32',
		decisionPeriod: 'u32',
		confirmPeriod: 'u32',
		minEnactmentPeriod: 'u32',
		minApproval: 'PalletReferendaCurve',
		minSupport: 'PalletReferendaCurve',
	},
	/**
	 * Lookup559: pallet_referenda::types::Curve
	 **/
	PalletReferendaCurve: {
		_enum: {
			LinearDecreasing: {
				length: 'Perbill',
				floor: 'Perbill',
				ceil: 'Perbill',
			},
			SteppedDecreasing: {
				begin: 'Perbill',
				end: 'Perbill',
				step: 'Perbill',
				period: 'Perbill',
			},
			Reciprocal: {
				factor: 'i64',
				xOffset: 'i64',
				yOffset: 'i64',
			},
		},
	},
	/**
	 * Lookup562: pallet_referenda::pallet::Error<T, I>
	 **/
	PalletReferendaError: {
		_enum: [
			'NotOngoing',
			'HasDeposit',
			'BadTrack',
			'Full',
			'QueueEmpty',
			'BadReferendum',
			'NothingToDo',
			'NoTrack',
			'Unfinished',
			'NoPermission',
			'NoDeposit',
			'BadStatus',
			'PreimageNotExist',
		],
	},
	/**
	 * Lookup563: pallet_whitelist::pallet::Error<T>
	 **/
	PalletWhitelistError: {
		_enum: [
			'UnavailablePreImage',
			'UndecodableCall',
			'InvalidCallWeightWitness',
			'CallIsNotWhitelisted',
			'CallAlreadyWhitelisted',
		],
	},
	/**
	 * Lookup565: cumulus_pallet_xcmp_queue::InboundChannelDetails
	 **/
	CumulusPalletXcmpQueueInboundChannelDetails: {
		sender: 'u32',
		state: 'CumulusPalletXcmpQueueInboundState',
		messageMetadata: 'Vec<(u32,PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat)>',
	},
	/**
	 * Lookup566: cumulus_pallet_xcmp_queue::InboundState
	 **/
	CumulusPalletXcmpQueueInboundState: {
		_enum: ['Ok', 'Suspended'],
	},
	/**
	 * Lookup569: polkadot_parachain_primitives::primitives::XcmpMessageFormat
	 **/
	PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
		_enum: ['ConcatenatedVersionedXcm', 'ConcatenatedEncodedBlob', 'Signals'],
	},
	/**
	 * Lookup572: cumulus_pallet_xcmp_queue::OutboundChannelDetails
	 **/
	CumulusPalletXcmpQueueOutboundChannelDetails: {
		recipient: 'u32',
		state: 'CumulusPalletXcmpQueueOutboundState',
		signalsExist: 'bool',
		firstIndex: 'u16',
		lastIndex: 'u16',
	},
	/**
	 * Lookup573: cumulus_pallet_xcmp_queue::OutboundState
	 **/
	CumulusPalletXcmpQueueOutboundState: {
		_enum: ['Ok', 'Suspended'],
	},
	/**
	 * Lookup575: cumulus_pallet_xcmp_queue::QueueConfigData
	 **/
	CumulusPalletXcmpQueueQueueConfigData: {
		suspendThreshold: 'u32',
		dropThreshold: 'u32',
		resumeThreshold: 'u32',
		thresholdWeight: 'SpWeightsWeightV2Weight',
		weightRestrictDecay: 'SpWeightsWeightV2Weight',
		xcmpMaxIndividualWeight: 'SpWeightsWeightV2Weight',
	},
	/**
	 * Lookup577: cumulus_pallet_xcmp_queue::pallet::Error<T>
	 **/
	CumulusPalletXcmpQueueError: {
		_enum: ['FailedToSend', 'BadXcmOrigin', 'BadXcm', 'BadOverweightIndex', 'WeightOverLimit'],
	},
	/**
	 * Lookup578: pallet_xcm::pallet::QueryStatus<BlockNumber>
	 **/
	PalletXcmQueryStatus: {
		_enum: {
			Pending: {
				responder: 'XcmVersionedMultiLocation',
				maybeMatchQuerier: 'Option<XcmVersionedMultiLocation>',
				maybeNotify: 'Option<(u8,u8)>',
				timeout: 'u32',
			},
			VersionNotifier: {
				origin: 'XcmVersionedMultiLocation',
				isActive: 'bool',
			},
			Ready: {
				response: 'XcmVersionedResponse',
				at: 'u32',
			},
		},
	},
	/**
	 * Lookup582: xcm::VersionedResponse
	 **/
	XcmVersionedResponse: {
		_enum: {
			__Unused0: 'Null',
			__Unused1: 'Null',
			V2: 'XcmV2Response',
			V3: 'XcmV3Response',
		},
	},
	/**
	 * Lookup588: pallet_xcm::pallet::VersionMigrationStage
	 **/
	PalletXcmVersionMigrationStage: {
		_enum: {
			MigrateSupportedVersion: 'Null',
			MigrateVersionNotifiers: 'Null',
			NotifyCurrentTargets: 'Option<Bytes>',
			MigrateAndNotifyOldTargets: 'Null',
		},
	},
	/**
	 * Lookup591: xcm::VersionedAssetId
	 **/
	XcmVersionedAssetId: {
		_enum: {
			__Unused0: 'Null',
			__Unused1: 'Null',
			__Unused2: 'Null',
			V3: 'XcmV3MultiassetAssetId',
		},
	},
	/**
	 * Lookup592: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
	 **/
	PalletXcmRemoteLockedFungibleRecord: {
		amount: 'u128',
		owner: 'XcmVersionedMultiLocation',
		locker: 'XcmVersionedMultiLocation',
		consumers: 'Vec<(Null,u128)>',
	},
	/**
	 * Lookup599: pallet_xcm::pallet::Error<T>
	 **/
	PalletXcmError: {
		_enum: [
			'Unreachable',
			'SendFailure',
			'Filtered',
			'UnweighableMessage',
			'DestinationNotInvertible',
			'Empty',
			'CannotReanchor',
			'TooManyAssets',
			'InvalidOrigin',
			'BadVersion',
			'BadLocation',
			'NoSubscription',
			'AlreadySubscribed',
			'InvalidAsset',
			'LowBalance',
			'TooManyLocks',
			'AccountNotSovereign',
			'FeesNotMet',
			'LockNotFound',
			'InUse',
		],
	},
	/**
	 * Lookup600: cumulus_pallet_xcm::pallet::Error<T>
	 **/
	CumulusPalletXcmError: 'Null',
	/**
	 * Lookup601: cumulus_pallet_dmp_queue::ConfigData
	 **/
	CumulusPalletDmpQueueConfigData: {
		maxIndividual: 'SpWeightsWeightV2Weight',
	},
	/**
	 * Lookup602: cumulus_pallet_dmp_queue::PageIndexData
	 **/
	CumulusPalletDmpQueuePageIndexData: {
		beginUsed: 'u32',
		endUsed: 'u32',
		overweightCount: 'u64',
	},
	/**
	 * Lookup605: cumulus_pallet_dmp_queue::pallet::Error<T>
	 **/
	CumulusPalletDmpQueueError: {
		_enum: ['Unknown', 'OverLimit'],
	},
	/**
	 * Lookup606: pallet_utility::pallet::Error<T>
	 **/
	PalletUtilityError: {
		_enum: ['TooManyCalls'],
	},
	/**
	 * Lookup609: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, tangle_kusama_runtime::OriginCaller, sp_core::crypto::AccountId32>
	 **/
	PalletSchedulerScheduled: {
		maybeId: 'Option<[u8;32]>',
		priority: 'u8',
		call: 'FrameSupportPreimagesBounded',
		maybePeriodic: 'Option<(u32,u32)>',
		origin: 'TangleKusamaRuntimeOriginCaller',
	},
	/**
	 * Lookup611: pallet_scheduler::pallet::Error<T>
	 **/
	PalletSchedulerError: {
		_enum: [
			'FailedToSchedule',
			'NotFound',
			'TargetBlockNumberInPast',
			'RescheduleNoChange',
			'Named',
		],
	},
	/**
	 * Lookup614: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, tangle_kusama_runtime::ProxyType, BlockNumber>
	 **/
	PalletProxyProxyDefinition: {
		delegate: 'AccountId32',
		proxyType: 'TangleKusamaRuntimeProxyType',
		delay: 'u32',
	},
	/**
	 * Lookup618: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
	 **/
	PalletProxyAnnouncement: {
		real: 'AccountId32',
		callHash: 'H256',
		height: 'u32',
	},
	/**
	 * Lookup620: pallet_proxy::pallet::Error<T>
	 **/
	PalletProxyError: {
		_enum: [
			'TooMany',
			'NotFound',
			'NotProxy',
			'Unproxyable',
			'Duplicate',
			'NoPermission',
			'Unannounced',
			'NoSelfProxy',
		],
	},
	/**
	 * Lookup622: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
	 **/
	PalletMultisigMultisig: {
		when: 'PalletMultisigTimepoint',
		deposit: 'u128',
		depositor: 'AccountId32',
		approvals: 'Vec<AccountId32>',
	},
	/**
	 * Lookup624: pallet_multisig::pallet::Error<T>
	 **/
	PalletMultisigError: {
		_enum: [
			'MinimumThreshold',
			'AlreadyApproved',
			'NoApprovalsNeeded',
			'TooFewSignatories',
			'TooManySignatories',
			'SignatoriesOutOfOrder',
			'SenderInSignatories',
			'NotFound',
			'NotOwner',
			'NoTimepoint',
			'WrongTimepoint',
			'UnexpectedTimepoint',
			'MaxWeightTooLow',
			'AlreadyStored',
		],
	},
	/**
	 * Lookup625: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::simple::IdentityInfo<FieldLimit>>
	 **/
	PalletIdentityRegistration: {
		judgements: 'Vec<(u32,PalletIdentityJudgement)>',
		deposit: 'u128',
		info: 'PalletIdentitySimpleIdentityInfo',
	},
	/**
	 * Lookup633: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32, pallet_identity::simple::IdentityField>
	 **/
	PalletIdentityRegistrarInfo: {
		account: 'AccountId32',
		fee: 'u128',
		fields: 'PalletIdentityBitFlags',
	},
	/**
	 * Lookup635: pallet_identity::pallet::Error<T>
	 **/
	PalletIdentityError: {
		_enum: [
			'TooManySubAccounts',
			'NotFound',
			'NotNamed',
			'EmptyIndex',
			'FeeChanged',
			'NoIdentity',
			'StickyJudgement',
			'JudgementGiven',
			'InvalidJudgement',
			'InvalidIndex',
			'InvalidTarget',
			'TooManyFields',
			'TooManyRegistrars',
			'AlreadyClaimed',
			'NotSub',
			'NotOwned',
			'JudgementForDifferentIdentity',
			'JudgementPaymentFailed',
		],
	},
	/**
	 * Lookup636: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
	 **/
	PalletTreasuryProposal: {
		proposer: 'AccountId32',
		value: 'u128',
		beneficiary: 'AccountId32',
		bond: 'u128',
	},
	/**
	 * Lookup638: pallet_treasury::SpendStatus<AssetKind, AssetBalance, sp_core::crypto::AccountId32, BlockNumber, PaymentId>
	 **/
	PalletTreasurySpendStatus: {
		assetKind: 'Null',
		amount: 'u128',
		beneficiary: 'AccountId32',
		validFrom: 'u32',
		expireAt: 'u32',
		status: 'PalletTreasuryPaymentState',
	},
	/**
	 * Lookup639: pallet_treasury::PaymentState<Id>
	 **/
	PalletTreasuryPaymentState: {
		_enum: {
			Pending: 'Null',
			Attempted: {
				id: 'Null',
			},
			Failed: 'Null',
		},
	},
	/**
	 * Lookup640: pallet_treasury::pallet::Error<T, I>
	 **/
	PalletTreasuryError: {
		_enum: [
			'InsufficientProposersBalance',
			'InvalidIndex',
			'TooManyApprovals',
			'InsufficientPermission',
			'ProposalNotApproved',
			'FailedToConvertBalance',
			'SpendExpired',
			'EarlyPayout',
			'AlreadyAttempted',
			'PayoutError',
			'NotAttempted',
			'Inconclusive',
		],
	},
	/**
	 * Lookup641: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
	 **/
	PalletBountiesBounty: {
		proposer: 'AccountId32',
		value: 'u128',
		fee: 'u128',
		curatorDeposit: 'u128',
		bond: 'u128',
		status: 'PalletBountiesBountyStatus',
	},
	/**
	 * Lookup642: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
	 **/
	PalletBountiesBountyStatus: {
		_enum: {
			Proposed: 'Null',
			Approved: 'Null',
			Funded: 'Null',
			CuratorProposed: {
				curator: 'AccountId32',
			},
			Active: {
				curator: 'AccountId32',
				updateDue: 'u32',
			},
			PendingPayout: {
				curator: 'AccountId32',
				beneficiary: 'AccountId32',
				unlockAt: 'u32',
			},
		},
	},
	/**
	 * Lookup644: pallet_bounties::pallet::Error<T, I>
	 **/
	PalletBountiesError: {
		_enum: [
			'InsufficientProposersBalance',
			'InvalidIndex',
			'ReasonTooBig',
			'UnexpectedStatus',
			'RequireCurator',
			'InvalidValue',
			'InvalidFee',
			'PendingPayout',
			'Premature',
			'HasActiveChildBounty',
			'TooManyQueued',
		],
	},
	/**
	 * Lookup645: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
	 **/
	PalletTipsOpenTip: {
		reason: 'H256',
		who: 'AccountId32',
		finder: 'AccountId32',
		deposit: 'u128',
		closes: 'Option<u32>',
		tips: 'Vec<(AccountId32,u128)>',
		findersFee: 'bool',
	},
	/**
	 * Lookup646: pallet_tips::pallet::Error<T, I>
	 **/
	PalletTipsError: {
		_enum: [
			'ReasonTooBig',
			'AlreadyKnown',
			'UnknownTip',
			'MaxTipAmountExceeded',
			'NotFinder',
			'StillOpen',
			'Premature',
		],
	},
	/**
	 * Lookup647: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
	 **/
	PalletPreimageOldRequestStatus: {
		_enum: {
			Unrequested: {
				deposit: '(AccountId32,u128)',
				len: 'u32',
			},
			Requested: {
				deposit: 'Option<(AccountId32,u128)>',
				count: 'u32',
				len: 'Option<u32>',
			},
		},
	},
	/**
	 * Lookup649: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D>>
	 **/
	PalletPreimageRequestStatus: {
		_enum: {
			Unrequested: {
				ticket: '(AccountId32,u128)',
				len: 'u32',
			},
			Requested: {
				maybeTicket: 'Option<(AccountId32,u128)>',
				count: 'u32',
				maybeLen: 'Option<u32>',
			},
		},
	},
	/**
	 * Lookup655: pallet_preimage::pallet::Error<T>
	 **/
	PalletPreimageError: {
		_enum: [
			'TooBig',
			'AlreadyNoted',
			'NotAuthorized',
			'NotNoted',
			'Requested',
			'NotRequested',
			'TooMany',
			'TooFew',
		],
	},
	/**
	 * Lookup656: orml_xtokens::module::Error<T>
	 **/
	OrmlXtokensModuleError: {
		_enum: [
			'AssetHasNoReserve',
			'NotCrossChainTransfer',
			'InvalidDest',
			'NotCrossChainTransferableCurrency',
			'UnweighableMessage',
			'XcmExecutionFailed',
			'CannotReanchor',
			'InvalidAncestry',
			'InvalidAsset',
			'DestinationNotInvertible',
			'BadVersion',
			'DistinctReserveForAssetAndFee',
			'ZeroFee',
			'ZeroAmount',
			'TooManyAssetsBeingSent',
			'AssetIndexNonExistent',
			'FeeNotEnough',
			'NotSupportedMultiLocation',
			'MinXcmFeeNotDefined',
		],
	},
	/**
	 * Lookup659: orml_tokens::BalanceLock<Balance>
	 **/
	OrmlTokensBalanceLock: {
		id: '[u8;8]',
		amount: 'u128',
	},
	/**
	 * Lookup661: orml_tokens::AccountData<Balance>
	 **/
	OrmlTokensAccountData: {
		free: 'u128',
		reserved: 'u128',
		frozen: 'u128',
	},
	/**
	 * Lookup663: orml_tokens::ReserveData<ReserveIdentifier, Balance>
	 **/
	OrmlTokensReserveData: {
		id: '[u8;8]',
		amount: 'u128',
	},
	/**
	 * Lookup665: orml_tokens::module::Error<T>
	 **/
	OrmlTokensModuleError: {
		_enum: [
			'BalanceTooLow',
			'AmountIntoBalanceFailed',
			'LiquidityRestrictions',
			'MaxLocksExceeded',
			'KeepAlive',
			'ExistentialDeposit',
			'DeadAccount',
			'TooManyReserves',
		],
	},
	/**
	 * Lookup666: tangle_currencies::module::Error<T>
	 **/
	TangleCurrenciesModuleError: {
		_enum: ['AmountIntoBalanceFailed', 'BalanceTooLow', 'DepositFailed'],
	},
	/**
	 * Lookup669: orml_unknown_tokens::module::Error<T>
	 **/
	OrmlUnknownTokensModuleError: {
		_enum: ['BalanceTooLow', 'BalanceOverflow', 'UnhandledAsset'],
	},
	/**
	 * Lookup670: orml_xcm::module::Error<T>
	 **/
	OrmlXcmModuleError: {
		_enum: ['Unreachable', 'SendFailure', 'BadVersion'],
	},
	/**
	 * Lookup677: zenlink_protocol::primitives::PairStatus<Balance, BlockNumber, sp_core::crypto::AccountId32>
	 **/
	ZenlinkProtocolPrimitivesPairStatus: {
		_enum: {
			Trading: 'ZenlinkProtocolPrimitivesPairMetadata',
			Bootstrap: 'ZenlinkProtocolPrimitivesBootstrapParameter',
			Disable: 'Null',
		},
	},
	/**
	 * Lookup678: zenlink_protocol::primitives::PairMetadata<Balance, sp_core::crypto::AccountId32>
	 **/
	ZenlinkProtocolPrimitivesPairMetadata: {
		pairAccount: 'AccountId32',
		totalSupply: 'u128',
	},
	/**
	 * Lookup679: zenlink_protocol::primitives::BootstrapParameter<Balance, BlockNumber, sp_core::crypto::AccountId32>
	 **/
	ZenlinkProtocolPrimitivesBootstrapParameter: {
		targetSupply: '(u128,u128)',
		capacitySupply: '(u128,u128)',
		accumulatedSupply: '(u128,u128)',
		endBlockNumber: 'u32',
		pairAccount: 'AccountId32',
	},
	/**
	 * Lookup682: zenlink_protocol::pallet::Error<T>
	 **/
	ZenlinkProtocolError: {
		_enum: [
			'RequireProtocolAdmin',
			'RequireProtocolAdminCandidate',
			'InvalidFeePoint',
			'UnsupportedAssetType',
			'InsufficientAssetBalance',
			'NativeBalanceTooLow',
			'DeniedCreatePair',
			'PairAlreadyExists',
			'PairNotExists',
			'AssetNotExists',
			'InsufficientLiquidity',
			'InsufficientPairReserve',
			'InsufficientTargetAmount',
			'ExcessiveSoldAmount',
			'InvalidPath',
			'IncorrectAssetAmountRange',
			'Overflow',
			'Deadline',
			'AccountIdBadLocation',
			'ExecutionFailed',
			'DeniedTransferToSelf',
			'TargetChainNotRegistered',
			'InvariantCheckFailed',
			'PairCreateForbidden',
			'NotInBootstrap',
			'InvalidContributionAmount',
			'UnqualifiedBootstrap',
			'ZeroContribute',
			'DenyRefund',
			'DisableBootstrap',
			'NotQualifiedAccount',
			'NoRewardTokens',
			'ChargeRewardParamsError',
			'ExistRewardsInBootstrap',
		],
	},
	/**
	 * Lookup683: merkle_distributor::MerkleMetadata<Balance, tangle_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
	 **/
	MerkleDistributorMerkleMetadata: {
		merkleRoot: 'H256',
		description: 'Bytes',
		distributeCurrency: 'TanglePrimitivesCurrencyCurrencyId',
		distributeAmount: 'u128',
		distributeHolder: 'AccountId32',
		charged: 'bool',
	},
	/**
	 * Lookup686: merkle_distributor::pallet::Error<T>
	 **/
	MerkleDistributorError: {
		_enum: [
			'BadDescription',
			'InvalidMerkleDistributorId',
			'MerkleVerifyFailed',
			'Claimed',
			'Charged',
			'WithdrawAmountExceed',
			'BadChargeAccount',
			'AlreadyInWhiteList',
			'NotInWhiteList',
		],
	},
	/**
	 * Lookup687: zenlink_stable_amm::primitives::Pool<PoolId, tangle_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
	 **/
	ZenlinkStableAmmPrimitivesPool: {
		_enum: {
			Base: 'ZenlinkStableAmmPrimitivesBasePool',
			Meta: 'ZenlinkStableAmmPrimitivesMetaPool',
		},
	},
	/**
	 * Lookup688: zenlink_stable_amm::primitives::BasePool<tangle_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
	 **/
	ZenlinkStableAmmPrimitivesBasePool: {
		currencyIds: 'Vec<TanglePrimitivesCurrencyCurrencyId>',
		lpCurrencyId: 'TanglePrimitivesCurrencyCurrencyId',
		tokenMultipliers: 'Vec<u128>',
		balances: 'Vec<u128>',
		fee: 'u128',
		adminFee: 'u128',
		initialA: 'u128',
		futureA: 'u128',
		initialATime: 'u128',
		futureATime: 'u128',
		account: 'AccountId32',
		adminFeeReceiver: 'AccountId32',
		lpCurrencySymbol: 'Bytes',
		lpCurrencyDecimal: 'u8',
	},
	/**
	 * Lookup689: zenlink_stable_amm::primitives::MetaPool<PoolId, tangle_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
	 **/
	ZenlinkStableAmmPrimitivesMetaPool: {
		basePoolId: 'u32',
		baseVirtualPrice: 'u128',
		baseCacheLastUpdated: 'u64',
		baseCurrencies: 'Vec<TanglePrimitivesCurrencyCurrencyId>',
		info: 'ZenlinkStableAmmPrimitivesBasePool',
	},
	/**
	 * Lookup690: zenlink_stable_amm::pallet::Error<T>
	 **/
	ZenlinkStableAmmError: {
		_enum: [
			'InvalidPooledCurrency',
			'InvalidLpCurrency',
			'MismatchParameter',
			'InvalidCurrencyDecimal',
			'InvalidPoolId',
			'InvalidBasePool',
			'Arithmetic',
			'Deadline',
			'InsufficientSupply',
			'InsufficientReserve',
			'CheckDFailed',
			'AmountSlippage',
			'SwapSameCurrency',
			'CurrencyIndexOutRange',
			'InsufficientLpReserve',
			'ExceedThreshold',
			'RampADelay',
			'MinRampTime',
			'ExceedMaxAChange',
			'AlreadyStoppedRampA',
			'ExceedMaxFee',
			'ExceedMaxAdminFee',
			'ExceedMaxA',
			'LpCurrencyAlreadyUsed',
			'RequireAllCurrencies',
			'BadPoolCurrencySymbol',
			'InvalidTransaction',
			'InvalidBasePoolLpCurrency',
			'TokenIndexOutOfRange',
		],
	},
	/**
	 * Lookup691: zenlink_swap_router::pallet::Error<T>
	 **/
	ZenlinkSwapRouterError: {
		_enum: [
			'MismatchPoolAndCurrencyId',
			'Deadline',
			'InvalidRoutes',
			'ConvertCurrencyFailed',
			'AmountSlippage',
			'InvalidPath',
		],
	},
	/**
	 * Lookup693: tangle_token_issuer::pallet::Error<T>
	 **/
	TangleTokenIssuerError: {
		_enum: ['NotEnoughBalance', 'NotExist', 'NotAllowed', 'ConvertError', 'ExceedMaxLen'],
	},
	/**
	 * Lookup694: tangle_asset_registry::pallet::Error<T>
	 **/
	TangleAssetRegistryError: {
		_enum: [
			'BadLocation',
			'MultiLocationExisted',
			'AssetIdNotExists',
			'AssetIdExisted',
			'CurrencyIdNotExists',
			'CurrencyIdExisted',
		],
	},
	/**
	 * Lookup698: tangle_primitives::RedeemType<sp_core::crypto::AccountId32>
	 **/
	TanglePrimitivesRedeemType: {
		_enum: {
			Native: 'Null',
			Astar: 'AccountId32',
			Moonbeam: 'H160',
			Hydradx: 'AccountId32',
			Interlay: 'AccountId32',
			Manta: 'AccountId32',
		},
	},
	/**
	 * Lookup704: tangle_lst_minting::pallet::Error<T>
	 **/
	TangleLstMintingError: {
		_enum: [
			'BelowMinimumMint',
			'BelowMinimumRedeem',
			'InvalidRebondToken',
			'NotSupportTokenType',
			'NotEnoughBalanceToUnlock',
			'TokenToRebondNotZero',
			'OngoingTimeUnitNotSet',
			'TokenUnlockLedgerNotFound',
			'UserUnlockLedgerNotFound',
			'TimeUnitUnlockLedgerNotFound',
			'UnlockDurationNotFound',
			'Unexpected',
			'CalculationOverflow',
			'ExceedMaximumUnlockId',
			'TooManyRedeems',
			'CanNotRedeem',
			'CanNotRebond',
		],
	},
	/**
	 * Lookup714: tangle_slp::pallet::Error<T>
	 **/
	TangleSlpError: {
		_enum: [
			'OperateOriginNotSet',
			'NotAuthorized',
			'NotSupportedCurrencyId',
			'FailToAddDelegator',
			'OverFlow',
			'UnderFlow',
			'NotExist',
			'LowerThanMinimum',
			'GreaterThanMaximum',
			'AlreadyBonded',
			'AccountNotExist',
			'DelegatorNotExist',
			'XcmFailure',
			'DelegatorNotBonded',
			'ExceedActiveMaximum',
			'ProblematicLedger',
			'NotEnoughToUnbond',
			'ExceedUnlockingRecords',
			'RebondExceedUnlockingAmount',
			'DecodingError',
			'EncodingError',
			'VectorEmpty',
			'ValidatorSetNotExist',
			'ValidatorNotExist',
			'InvalidTimeUnit',
			'AmountZero',
			'AmountNotZero',
			'AlreadyExist',
			'ValidatorStillInUse',
			'TimeUnitNotExist',
			'FeeSourceNotExist',
			'WeightAndFeeNotExists',
			'MinimumsAndMaximumsNotExist',
			'QueryNotExist',
			'DelaysNotExist',
			'Unexpected',
			'QueryResponseRemoveError',
			'InvalidHostingFee',
			'InvalidAccount',
			'IncreaseTokenPoolError',
			'TuneExchangeRateLimitNotSet',
			'CurrencyLatestTuneRecordNotExist',
			'InvalidTransferSource',
			'ValidatorNotProvided',
			'Unsupported',
			'ValidatorNotBonded',
			'AlreadyRequested',
			'RequestNotExist',
			'AlreadyLeaving',
			'DelegatorNotLeaving',
			'RequestNotDue',
			'LeavingNotDue',
			'DelegatorSetNotExist',
			'DelegatorLeaving',
			'DelegatorAlreadyLeaving',
			'ValidatorError',
			'AmountNone',
			'InvalidDelays',
			'OngoingTimeUnitUpdateIntervalNotExist',
			'LastTimeUpdatedOngoingTimeUnitNotExist',
			'TooFrequent',
			'DestAccountNotValid',
			'WhiteListNotExist',
			'DelegatorAlreadyTuned',
			'FeeTooHigh',
			'NotEnoughBalance',
			'VectorTooLong',
			'MultiCurrencyError',
			'NotDelegateValidator',
			'DividedByZero',
			'SharePriceNotValid',
			'InvalidAmount',
			'ValidatorMultilocationNotvalid',
			'AmountNotProvided',
			'FailToConvert',
			'ExceedMaxLengthLimit',
			'TransferToError',
			'StablePoolNotFound',
			'StablePoolTokenIndexNotFound',
			'ExceedLimit',
			'InvalidPageNumber',
			'NoMoreValidatorBoostListForCurrency',
		],
	},
	/**
	 * Lookup716: tangle_xcm_interface::pallet::Error<T>
	 **/
	TangleXcmInterfaceError: {
		_enum: [
			'FeeConvertFailed',
			'XcmExecutionFailed',
			'XcmSendFailed',
			'OperationWeightAndFeeNotExist',
			'FailToConvert',
		],
	},
	/**
	 * Lookup718: tangle_slpx::types::EthereumCallConfiguration<BlockNumber>
	 **/
	TangleSlpxEthereumCallConfiguration: {
		xcmFee: 'u128',
		xcmWeight: 'SpWeightsWeightV2Weight',
		period: 'u32',
		lastBlock: 'u32',
		contract: 'H160',
	},
	/**
	 * Lookup723: tangle_slpx::pallet::Error<T>
	 **/
	TangleSlpxError: {
		_enum: [
			'TokenNotFoundInLstMinting',
			'TokenNotFoundInZenlink',
			'AccountIdAlreadyInWhitelist',
			'AccountIdNotInWhitelist',
			'ExceededWhitelistMaxNumber',
			'NotSetExecutionFee',
			'FreeBalanceTooLow',
			'ArgumentsError',
			'ErrorConvertlst',
			'ErrorValidating',
			'ErrorDelivering',
			'Unsupported',
		],
	},
	/**
	 * Lookup724: pallet_ranked_collective::MemberRecord
	 **/
	PalletRankedCollectiveMemberRecord: {
		rank: 'u16',
	},
	/**
	 * Lookup728: pallet_ranked_collective::pallet::Error<T, I>
	 **/
	PalletRankedCollectiveError: {
		_enum: [
			'AlreadyMember',
			'NotMember',
			'NotPolling',
			'Ongoing',
			'NoneRemaining',
			'Corruption',
			'RankTooLow',
			'InvalidWitness',
			'NoPermission',
		],
	},
	/**
	 * Lookup729: pallet_referenda::types::ReferendumInfo<TrackId, tangle_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
	 **/
	PalletReferendaReferendumInfoRankedCollectiveTally: {
		_enum: {
			Ongoing: 'PalletReferendaReferendumStatusRankedCollectiveTally',
			Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
			Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
			Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
			TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
			Killed: 'u32',
		},
	},
	/**
	 * Lookup730: pallet_referenda::types::ReferendumStatus<TrackId, tangle_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
	 **/
	PalletReferendaReferendumStatusRankedCollectiveTally: {
		track: 'u16',
		origin: 'TangleKusamaRuntimeOriginCaller',
		proposal: 'FrameSupportPreimagesBounded',
		enactment: 'FrameSupportScheduleDispatchTime',
		submitted: 'u32',
		submissionDeposit: 'PalletReferendaDeposit',
		decisionDeposit: 'Option<PalletReferendaDeposit>',
		deciding: 'Option<PalletReferendaDecidingStatus>',
		tally: 'PalletRankedCollectiveTally',
		inQueue: 'bool',
		alarm: 'Option<(u32,(u32,u32))>',
	},
	/**
	 * Lookup733: tangle_stable_asset::StableAssetPoolInfo<tangle_primitives::currency::CurrencyId, AtLeast64BitUnsigned, Balance, sp_core::crypto::AccountId32, BlockNumber>
	 **/
	TangleStableAssetStableAssetPoolInfo: {
		poolId: 'u32',
		poolAsset: 'TanglePrimitivesCurrencyCurrencyId',
		assets: 'Vec<TanglePrimitivesCurrencyCurrencyId>',
		precisions: 'Vec<u128>',
		mintFee: 'u128',
		swapFee: 'u128',
		redeemFee: 'u128',
		totalSupply: 'u128',
		a: 'u128',
		aBlock: 'u32',
		futureA: 'u128',
		futureABlock: 'u32',
		balances: 'Vec<u128>',
		feeRecipient: 'AccountId32',
		accountId: 'AccountId32',
		yieldRecipient: 'AccountId32',
		precision: 'u128',
	},
	/**
	 * Lookup735: tangle_stable_asset::pallet::Error<T>
	 **/
	TangleStableAssetError: {
		_enum: [
			'InconsistentStorage',
			'InvalidPoolAsset',
			'ArgumentsMismatch',
			'ArgumentsError',
			'PoolNotFound',
			'Math',
			'InvalidPoolValue',
			'MintUnderMin',
			'SwapUnderMin',
			'RedeemUnderMin',
			'RedeemOverMax',
			'TokenRateNotCleared',
		],
	},
	/**
	 * Lookup736: tangle_stable_pool::pallet::Error<T>
	 **/
	TangleStablePoolError: {
		_enum: ['SwapUnderMin', 'MintUnderMin', 'CantMint', 'RedeemOverMax', 'TokenRateNotSet'],
	},
	/**
	 * Lookup737: tangle_lst_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
	 **/
	TangleLstVotingVoteVoting: {
		_enum: {
			Casting: 'TangleLstVotingVoteCasting',
			Delegating: 'TangleLstVotingVoteDelegating',
		},
	},
	/**
	 * Lookup738: tangle_lst_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
	 **/
	TangleLstVotingVoteCasting: {
		votes: 'Vec<(u32,TangleLstVotingVoteAccountVote,u16,u128)>',
		delegations: 'PalletConvictionVotingDelegations',
		prior: 'TangleLstVotingVotePriorLock',
	},
	/**
	 * Lookup742: tangle_lst_voting::vote::PriorLock<BlockNumber, Balance>
	 **/
	TangleLstVotingVotePriorLock: '(u32,u128)',
	/**
	 * Lookup743: tangle_lst_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
	 **/
	TangleLstVotingVoteDelegating: {
		balance: 'u128',
		target: 'AccountId32',
		conviction: 'PalletConvictionVotingConviction',
		delegations: 'PalletConvictionVotingDelegations',
		prior: 'TangleLstVotingVotePriorLock',
	},
	/**
	 * Lookup757: tangle_lst_voting::pallet::Error<T>
	 **/
	TangleLstVotingError: {
		_enum: [
			'XcmFailure',
			'lstNotSupport',
			'DerivativeIndexOccupied',
			'PendingVote',
			'PendingUpdateReferendumStatus',
			'NoData',
			'NotOngoing',
			'NotCompleted',
			'NotKilled',
			'NotExpired',
			'NotVoter',
			'NoPermission',
			'NoPermissionYet',
			'AlreadyDelegating',
			'InsufficientFunds',
			'MaxVotesReached',
			'TooMany',
			'NotStandardVote',
			'InvalidConviction',
			'OutOfRange',
		],
	},
	/**
	 * Lookup758: orml_oracle::module::TimestampedValue<sp_arithmetic::fixed_point::FixedU128, Moment>
	 **/
	OrmlOracleModuleTimestampedValue: {
		value: 'u128',
		timestamp: 'u64',
	},
	/**
	 * Lookup759: orml_utilities::ordered_set::OrderedSet<sp_core::crypto::AccountId32, S>
	 **/
	OrmlUtilitiesOrderedSet: 'Vec<AccountId32>',
	/**
	 * Lookup761: orml_oracle::module::Error<T, I>
	 **/
	OrmlOracleModuleError: {
		_enum: ['NoPermission', 'AlreadyFeeded'],
	},
	/**
	 * Lookup765: sp_runtime::MultiSignature
	 **/
	SpRuntimeMultiSignature: {
		_enum: {
			Ed25519: 'SpCoreEd25519Signature',
			Sr25519: 'SpCoreSr25519Signature',
			Ecdsa: 'SpCoreEcdsaSignature',
		},
	},
	/**
	 * Lookup766: sp_core::ed25519::Signature
	 **/
	SpCoreEd25519Signature: '[u8;64]',
	/**
	 * Lookup768: sp_core::sr25519::Signature
	 **/
	SpCoreSr25519Signature: '[u8;64]',
	/**
	 * Lookup769: sp_core::ecdsa::Signature
	 **/
	SpCoreEcdsaSignature: '[u8;65]',
	/**
	 * Lookup772: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
	 **/
	FrameSystemExtensionsCheckNonZeroSender: 'Null',
	/**
	 * Lookup773: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
	 **/
	FrameSystemExtensionsCheckSpecVersion: 'Null',
	/**
	 * Lookup774: frame_system::extensions::check_tx_version::CheckTxVersion<T>
	 **/
	FrameSystemExtensionsCheckTxVersion: 'Null',
	/**
	 * Lookup775: frame_system::extensions::check_genesis::CheckGenesis<T>
	 **/
	FrameSystemExtensionsCheckGenesis: 'Null',
	/**
	 * Lookup778: frame_system::extensions::check_nonce::CheckNonce<T>
	 **/
	FrameSystemExtensionsCheckNonce: 'Compact<u32>',
	/**
	 * Lookup779: frame_system::extensions::check_weight::CheckWeight<T>
	 **/
	FrameSystemExtensionsCheckWeight: 'Null',
	/**
	 * Lookup780: pallet_transaction_payment::ChargeTransactionPayment<T>
	 **/
	PalletTransactionPaymentChargeTransactionPayment: 'Compact<u128>',
	/**
	 * Lookup781: tangle_kusama_runtime::Runtime
	 **/
	TangleKusamaRuntimeRuntime: 'Null',
};
