declare const _default: {
    /**
     * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
     **/
    FrameSystemAccountInfo: {
        nonce: string;
        consumers: string;
        providers: string;
        sufficients: string;
        data: string;
    };
    /**
     * Lookup5: pallet_balances::types::AccountData<Balance>
     **/
    PalletBalancesAccountData: {
        free: string;
        reserved: string;
        frozen: string;
        flags: string;
    };
    /**
     * Lookup8: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
     **/
    FrameSupportDispatchPerDispatchClassWeight: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup9: sp_weights::weight_v2::Weight
     **/
    SpWeightsWeightV2Weight: {
        refTime: string;
        proofSize: string;
    };
    /**
     * Lookup14: sp_runtime::generic::digest::Digest
     **/
    SpRuntimeDigest: {
        logs: string;
    };
    /**
     * Lookup16: sp_runtime::generic::digest::DigestItem
     **/
    SpRuntimeDigestDigestItem: {
        _enum: {
            Other: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            Consensus: string;
            Seal: string;
            PreRuntime: string;
            __Unused7: string;
            RuntimeEnvironmentUpdated: string;
        };
    };
    /**
     * Lookup19: frame_system::EventRecord<tangle_kusama_runtime::RuntimeEvent, primitive_types::H256>
     **/
    FrameSystemEventRecord: {
        phase: string;
        event: string;
        topics: string;
    };
    /**
     * Lookup21: frame_system::pallet::Event<T>
     **/
    FrameSystemEvent: {
        _enum: {
            ExtrinsicSuccess: {
                dispatchInfo: string;
            };
            ExtrinsicFailed: {
                dispatchError: string;
                dispatchInfo: string;
            };
            CodeUpdated: string;
            NewAccount: {
                account: string;
            };
            KilledAccount: {
                account: string;
            };
            Remarked: {
                _alias: {
                    hash_: string;
                };
                sender: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup22: frame_support::dispatch::DispatchInfo
     **/
    FrameSupportDispatchDispatchInfo: {
        weight: string;
        class: string;
        paysFee: string;
    };
    /**
     * Lookup23: frame_support::dispatch::DispatchClass
     **/
    FrameSupportDispatchDispatchClass: {
        _enum: string[];
    };
    /**
     * Lookup24: frame_support::dispatch::Pays
     **/
    FrameSupportDispatchPays: {
        _enum: string[];
    };
    /**
     * Lookup25: sp_runtime::DispatchError
     **/
    SpRuntimeDispatchError: {
        _enum: {
            Other: string;
            CannotLookup: string;
            BadOrigin: string;
            Module: string;
            ConsumerRemaining: string;
            NoProviders: string;
            TooManyConsumers: string;
            Token: string;
            Arithmetic: string;
            Transactional: string;
            Exhausted: string;
            Corruption: string;
            Unavailable: string;
            RootNotAllowed: string;
        };
    };
    /**
     * Lookup26: sp_runtime::ModuleError
     **/
    SpRuntimeModuleError: {
        index: string;
        error: string;
    };
    /**
     * Lookup27: sp_runtime::TokenError
     **/
    SpRuntimeTokenError: {
        _enum: string[];
    };
    /**
     * Lookup28: sp_arithmetic::ArithmeticError
     **/
    SpArithmeticArithmeticError: {
        _enum: string[];
    };
    /**
     * Lookup29: sp_runtime::TransactionalError
     **/
    SpRuntimeTransactionalError: {
        _enum: string[];
    };
    /**
     * Lookup30: pallet_indices::pallet::Event<T>
     **/
    PalletIndicesEvent: {
        _enum: {
            IndexAssigned: {
                who: string;
                index: string;
            };
            IndexFreed: {
                index: string;
            };
            IndexFrozen: {
                index: string;
                who: string;
            };
        };
    };
    /**
     * Lookup31: cumulus_pallet_parachain_system::pallet::Event<T>
     **/
    CumulusPalletParachainSystemEvent: {
        _enum: {
            ValidationFunctionStored: string;
            ValidationFunctionApplied: {
                relayChainBlockNum: string;
            };
            ValidationFunctionDiscarded: string;
            UpgradeAuthorized: {
                codeHash: string;
            };
            DownwardMessagesReceived: {
                count: string;
            };
            DownwardMessagesProcessed: {
                weightUsed: string;
                dmqHead: string;
            };
            UpwardMessageSent: {
                messageHash: string;
            };
        };
    };
    /**
     * Lookup33: pallet_balances::pallet::Event<T, I>
     **/
    PalletBalancesEvent: {
        _enum: {
            Endowed: {
                account: string;
                freeBalance: string;
            };
            DustLost: {
                account: string;
                amount: string;
            };
            Transfer: {
                from: string;
                to: string;
                amount: string;
            };
            BalanceSet: {
                who: string;
                free: string;
            };
            Reserved: {
                who: string;
                amount: string;
            };
            Unreserved: {
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                from: string;
                to: string;
                amount: string;
                destinationStatus: string;
            };
            Deposit: {
                who: string;
                amount: string;
            };
            Withdraw: {
                who: string;
                amount: string;
            };
            Slashed: {
                who: string;
                amount: string;
            };
            Minted: {
                who: string;
                amount: string;
            };
            Burned: {
                who: string;
                amount: string;
            };
            Suspended: {
                who: string;
                amount: string;
            };
            Restored: {
                who: string;
                amount: string;
            };
            Upgraded: {
                who: string;
            };
            Issued: {
                amount: string;
            };
            Rescinded: {
                amount: string;
            };
            Locked: {
                who: string;
                amount: string;
            };
            Unlocked: {
                who: string;
                amount: string;
            };
            Frozen: {
                who: string;
                amount: string;
            };
            Thawed: {
                who: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup34: frame_support::traits::tokens::misc::BalanceStatus
     **/
    FrameSupportTokensMiscBalanceStatus: {
        _enum: string[];
    };
    /**
     * Lookup35: pallet_transaction_payment::pallet::Event<T>
     **/
    PalletTransactionPaymentEvent: {
        _enum: {
            TransactionFeePaid: {
                who: string;
                actualFee: string;
                tip: string;
            };
        };
    };
    /**
     * Lookup36: pallet_session::pallet::Event
     **/
    PalletSessionEvent: {
        _enum: {
            NewSession: {
                sessionIndex: string;
            };
        };
    };
    /**
     * Lookup37: tangle_parachain_staking::pallet::Event<T>
     **/
    TangleParachainStakingEvent: {
        _enum: {
            NewRound: {
                startingBlock: string;
                round: string;
                selectedCollatorsNumber: string;
                totalBalance: string;
            };
            JoinedCollatorCandidates: {
                account: string;
                amountLocked: string;
                newTotalAmtLocked: string;
            };
            CollatorChosen: {
                round: string;
                collatorAccount: string;
                totalExposedAmount: string;
            };
            CandidateBondLessRequested: {
                candidate: string;
                amountToDecrease: string;
                executeRound: string;
            };
            CandidateBondedMore: {
                candidate: string;
                amount: string;
                newTotalBond: string;
            };
            CandidateBondedLess: {
                candidate: string;
                amount: string;
                newBond: string;
            };
            CandidateWentOffline: {
                candidate: string;
            };
            CandidateBackOnline: {
                candidate: string;
            };
            CandidateScheduledExit: {
                exitAllowedRound: string;
                candidate: string;
                scheduledExit: string;
            };
            CancelledCandidateExit: {
                candidate: string;
            };
            CancelledCandidateBondLess: {
                candidate: string;
                amount: string;
                executeRound: string;
            };
            CandidateLeft: {
                exCandidate: string;
                unlockedAmount: string;
                newTotalAmtLocked: string;
            };
            DelegationDecreaseScheduled: {
                delegator: string;
                candidate: string;
                amountToDecrease: string;
                executeRound: string;
            };
            DelegationIncreased: {
                delegator: string;
                candidate: string;
                amount: string;
                inTop: string;
            };
            DelegationDecreased: {
                delegator: string;
                candidate: string;
                amount: string;
                inTop: string;
            };
            DelegatorExitScheduled: {
                round: string;
                delegator: string;
                scheduledExit: string;
            };
            DelegationRevocationScheduled: {
                round: string;
                delegator: string;
                candidate: string;
                scheduledExit: string;
            };
            DelegatorLeft: {
                delegator: string;
                unstakedAmount: string;
            };
            DelegationRevoked: {
                delegator: string;
                candidate: string;
                unstakedAmount: string;
            };
            DelegationKicked: {
                delegator: string;
                candidate: string;
                unstakedAmount: string;
            };
            DelegatorExitCancelled: {
                delegator: string;
            };
            CancelledDelegationRequest: {
                delegator: string;
                cancelledRequest: string;
                collator: string;
            };
            Delegation: {
                delegator: string;
                lockedAmount: string;
                candidate: string;
                delegatorPosition: string;
            };
            DelegatorLeftCandidate: {
                delegator: string;
                candidate: string;
                unstakedAmount: string;
                totalCandidateStaked: string;
            };
            Rewarded: {
                account: string;
                rewards: string;
            };
            ReservedForParachainBond: {
                account: string;
                value: string;
            };
            ParachainBondAccountSet: {
                _alias: {
                    new_: string;
                };
                old: string;
                new_: string;
            };
            ParachainBondReservePercentSet: {
                _alias: {
                    new_: string;
                };
                old: string;
                new_: string;
            };
            InflationSet: {
                annualMin: string;
                annualIdeal: string;
                annualMax: string;
                roundMin: string;
                roundIdeal: string;
                roundMax: string;
            };
            StakeExpectationsSet: {
                expectMin: string;
                expectIdeal: string;
                expectMax: string;
            };
            TotalSelectedSet: {
                _alias: {
                    new_: string;
                };
                old: string;
                new_: string;
            };
            CollatorCommissionSet: {
                _alias: {
                    new_: string;
                };
                old: string;
                new_: string;
            };
            BlocksPerRoundSet: {
                _alias: {
                    new_: string;
                };
                currentRound: string;
                firstBlock: string;
                old: string;
                new_: string;
                newPerRoundInflationMin: string;
                newPerRoundInflationIdeal: string;
                newPerRoundInflationMax: string;
            };
        };
    };
    /**
     * Lookup39: tangle_parachain_staking::delegation_requests::CancelledScheduledRequest<Balance>
     **/
    TangleParachainStakingDelegationRequestsCancelledScheduledRequest: {
        whenExecutable: string;
        action: string;
    };
    /**
     * Lookup40: tangle_parachain_staking::delegation_requests::DelegationAction<Balance>
     **/
    TangleParachainStakingDelegationRequestsDelegationAction: {
        _enum: {
            Revoke: string;
            Decrease: string;
        };
    };
    /**
     * Lookup41: tangle_parachain_staking::types::DelegatorAdded<B>
     **/
    TangleParachainStakingDelegatorAdded: {
        _enum: {
            AddedToTop: {
                newTotal: string;
            };
            AddedToBottom: string;
        };
    };
    /**
     * Lookup44: pallet_democracy::pallet::Event<T>
     **/
    PalletDemocracyEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
                deposit: string;
            };
            Tabled: {
                proposalIndex: string;
                deposit: string;
            };
            ExternalTabled: string;
            Started: {
                refIndex: string;
                threshold: string;
            };
            Passed: {
                refIndex: string;
            };
            NotPassed: {
                refIndex: string;
            };
            Cancelled: {
                refIndex: string;
            };
            Delegated: {
                who: string;
                target: string;
            };
            Undelegated: {
                account: string;
            };
            Vetoed: {
                who: string;
                proposalHash: string;
                until: string;
            };
            Blacklisted: {
                proposalHash: string;
            };
            Voted: {
                voter: string;
                refIndex: string;
                vote: string;
            };
            Seconded: {
                seconder: string;
                propIndex: string;
            };
            ProposalCanceled: {
                propIndex: string;
            };
            MetadataSet: {
                _alias: {
                    hash_: string;
                };
                owner: string;
                hash_: string;
            };
            MetadataCleared: {
                _alias: {
                    hash_: string;
                };
                owner: string;
                hash_: string;
            };
            MetadataTransferred: {
                _alias: {
                    hash_: string;
                };
                prevOwner: string;
                owner: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup45: pallet_democracy::vote_threshold::VoteThreshold
     **/
    PalletDemocracyVoteThreshold: {
        _enum: string[];
    };
    /**
     * Lookup46: pallet_democracy::vote::AccountVote<Balance>
     **/
    PalletDemocracyVoteAccountVote: {
        _enum: {
            Standard: {
                vote: string;
                balance: string;
            };
            Split: {
                aye: string;
                nay: string;
            };
        };
    };
    /**
     * Lookup48: pallet_democracy::types::MetadataOwner
     **/
    PalletDemocracyMetadataOwner: {
        _enum: {
            External: string;
            Proposal: string;
            Referendum: string;
        };
    };
    /**
     * Lookup49: pallet_collective::pallet::Event<T, I>
     **/
    PalletCollectiveEvent: {
        _enum: {
            Proposed: {
                account: string;
                proposalIndex: string;
                proposalHash: string;
                threshold: string;
            };
            Voted: {
                account: string;
                proposalHash: string;
                voted: string;
                yes: string;
                no: string;
            };
            Approved: {
                proposalHash: string;
            };
            Disapproved: {
                proposalHash: string;
            };
            Executed: {
                proposalHash: string;
                result: string;
            };
            MemberExecuted: {
                proposalHash: string;
                result: string;
            };
            Closed: {
                proposalHash: string;
                yes: string;
                no: string;
            };
        };
    };
    /**
     * Lookup53: pallet_elections_phragmen::pallet::Event<T>
     **/
    PalletElectionsPhragmenEvent: {
        _enum: {
            NewTerm: {
                newMembers: string;
            };
            EmptyTerm: string;
            ElectionError: string;
            MemberKicked: {
                member: string;
            };
            Renounced: {
                candidate: string;
            };
            CandidateSlashed: {
                candidate: string;
                amount: string;
            };
            SeatHolderSlashed: {
                seatHolder: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup56: pallet_membership::pallet::Event<T, I>
     **/
    PalletMembershipEvent: {
        _enum: string[];
    };
    /**
     * Lookup58: pallet_conviction_voting::pallet::Event<T, I>
     **/
    PalletConvictionVotingEvent: {
        _enum: {
            Delegated: string;
            Undelegated: string;
        };
    };
    /**
     * Lookup59: pallet_referenda::pallet::Event<T, I>
     **/
    PalletReferendaEvent: {
        _enum: {
            Submitted: {
                index: string;
                track: string;
                proposal: string;
            };
            DecisionDepositPlaced: {
                index: string;
                who: string;
                amount: string;
            };
            DecisionDepositRefunded: {
                index: string;
                who: string;
                amount: string;
            };
            DepositSlashed: {
                who: string;
                amount: string;
            };
            DecisionStarted: {
                index: string;
                track: string;
                proposal: string;
                tally: string;
            };
            ConfirmStarted: {
                index: string;
            };
            ConfirmAborted: {
                index: string;
            };
            Confirmed: {
                index: string;
                tally: string;
            };
            Approved: {
                index: string;
            };
            Rejected: {
                index: string;
                tally: string;
            };
            TimedOut: {
                index: string;
                tally: string;
            };
            Cancelled: {
                index: string;
                tally: string;
            };
            Killed: {
                index: string;
                tally: string;
            };
            SubmissionDepositRefunded: {
                index: string;
                who: string;
                amount: string;
            };
            MetadataSet: {
                _alias: {
                    hash_: string;
                };
                index: string;
                hash_: string;
            };
            MetadataCleared: {
                _alias: {
                    hash_: string;
                };
                index: string;
                hash_: string;
            };
        };
    };
    /**
     * Lookup61: frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
     **/
    FrameSupportPreimagesBounded: {
        _enum: {
            Legacy: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Inline: string;
            Lookup: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                len: string;
            };
        };
    };
    /**
     * Lookup63: frame_system::pallet::Call<T>
     **/
    FrameSystemCall: {
        _enum: {
            remark: {
                remark: string;
            };
            set_heap_pages: {
                pages: string;
            };
            set_code: {
                code: string;
            };
            set_code_without_checks: {
                code: string;
            };
            set_storage: {
                items: string;
            };
            kill_storage: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
            };
            kill_prefix: {
                prefix: string;
                subkeys: string;
            };
            remark_with_event: {
                remark: string;
            };
        };
    };
    /**
     * Lookup67: pallet_timestamp::pallet::Call<T>
     **/
    PalletTimestampCall: {
        _enum: {
            set: {
                now: string;
            };
        };
    };
    /**
     * Lookup68: pallet_indices::pallet::Call<T>
     **/
    PalletIndicesCall: {
        _enum: {
            claim: {
                index: string;
            };
            transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
            };
            free: {
                index: string;
            };
            force_transfer: {
                _alias: {
                    new_: string;
                };
                new_: string;
                index: string;
                freeze: string;
            };
            freeze: {
                index: string;
            };
        };
    };
    /**
     * Lookup72: cumulus_pallet_parachain_system::pallet::Call<T>
     **/
    CumulusPalletParachainSystemCall: {
        _enum: {
            set_validation_data: {
                data: string;
            };
            sudo_send_upward_message: {
                message: string;
            };
            authorize_upgrade: {
                codeHash: string;
                checkVersion: string;
            };
            enact_authorized_upgrade: {
                code: string;
            };
        };
    };
    /**
     * Lookup73: cumulus_primitives_parachain_inherent::ParachainInherentData
     **/
    CumulusPrimitivesParachainInherentParachainInherentData: {
        validationData: string;
        relayChainState: string;
        downwardMessages: string;
        horizontalMessages: string;
    };
    /**
     * Lookup74: polkadot_primitives::v6::PersistedValidationData<primitive_types::H256, N>
     **/
    PolkadotPrimitivesV6PersistedValidationData: {
        parentHead: string;
        relayParentNumber: string;
        relayParentStorageRoot: string;
        maxPovSize: string;
    };
    /**
     * Lookup76: sp_trie::storage_proof::StorageProof
     **/
    SpTrieStorageProof: {
        trieNodes: string;
    };
    /**
     * Lookup79: polkadot_core_primitives::InboundDownwardMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundDownwardMessage: {
        sentAt: string;
        msg: string;
    };
    /**
     * Lookup83: polkadot_core_primitives::InboundHrmpMessage<BlockNumber>
     **/
    PolkadotCorePrimitivesInboundHrmpMessage: {
        sentAt: string;
        data: string;
    };
    /**
     * Lookup86: staging_parachain_info::pallet::Call<T>
     **/
    StagingParachainInfoCall: string;
    /**
     * Lookup87: pallet_balances::pallet::Call<T, I>
     **/
    PalletBalancesCall: {
        _enum: {
            transfer_allow_death: {
                dest: string;
                value: string;
            };
            __Unused1: string;
            force_transfer: {
                source: string;
                dest: string;
                value: string;
            };
            transfer_keep_alive: {
                dest: string;
                value: string;
            };
            transfer_all: {
                dest: string;
                keepAlive: string;
            };
            force_unreserve: {
                who: string;
                amount: string;
            };
            upgrade_accounts: {
                who: string;
            };
            __Unused7: string;
            force_set_balance: {
                who: string;
                newFree: string;
            };
        };
    };
    /**
     * Lookup90: pallet_session::pallet::Call<T>
     **/
    PalletSessionCall: {
        _enum: {
            set_keys: {
                _alias: {
                    keys_: string;
                };
                keys_: string;
                proof: string;
            };
            purge_keys: string;
        };
    };
    /**
     * Lookup91: tangle_kusama_runtime::SessionKeys
     **/
    TangleKusamaRuntimeSessionKeys: {
        aura: string;
    };
    /**
     * Lookup92: sp_consensus_aura::sr25519::app_sr25519::Public
     **/
    SpConsensusAuraSr25519AppSr25519Public: string;
    /**
     * Lookup93: sp_core::sr25519::Public
     **/
    SpCoreSr25519Public: string;
    /**
     * Lookup94: tangle_parachain_staking::pallet::Call<T>
     **/
    TangleParachainStakingCall: {
        _enum: {
            set_staking_expectations: {
                expectations: {
                    min: string;
                    ideal: string;
                    max: string;
                };
            };
            set_inflation: {
                schedule: {
                    min: string;
                    ideal: string;
                    max: string;
                };
            };
            set_parachain_bond_account: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_parachain_bond_reserve_percent: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_total_selected: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_collator_commission: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_blocks_per_round: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            join_candidates: {
                bond: string;
                candidateCount: string;
            };
            schedule_leave_candidates: {
                candidateCount: string;
            };
            execute_leave_candidates: {
                candidate: string;
                candidateDelegationCount: string;
            };
            cancel_leave_candidates: {
                candidateCount: string;
            };
            go_offline: string;
            go_online: string;
            candidate_bond_more: {
                more: string;
            };
            schedule_candidate_bond_less: {
                less: string;
            };
            execute_candidate_bond_less: {
                candidate: string;
            };
            cancel_candidate_bond_less: string;
            delegate: {
                candidate: string;
                amount: string;
                candidateDelegationCount: string;
                delegationCount: string;
            };
            schedule_leave_delegators: string;
            execute_leave_delegators: {
                delegator: string;
                delegationCount: string;
            };
            cancel_leave_delegators: string;
            schedule_revoke_delegation: {
                collator: string;
            };
            delegator_bond_more: {
                candidate: string;
                more: string;
            };
            schedule_delegator_bond_less: {
                candidate: string;
                less: string;
            };
            execute_delegation_request: {
                delegator: string;
                candidate: string;
            };
            cancel_delegation_request: {
                candidate: string;
            };
            hotfix_remove_delegation_requests_exited_candidates: {
                candidates: string;
            };
            hotfix_migrate_delegators_from_reserve_to_locks: {
                delegators: string;
            };
            hotfix_migrate_collators_from_reserve_to_locks: {
                collators: string;
            };
        };
    };
    /**
     * Lookup97: pallet_democracy::pallet::Call<T>
     **/
    PalletDemocracyCall: {
        _enum: {
            propose: {
                proposal: string;
                value: string;
            };
            second: {
                proposal: string;
            };
            vote: {
                refIndex: string;
                vote: string;
            };
            emergency_cancel: {
                refIndex: string;
            };
            external_propose: {
                proposal: string;
            };
            external_propose_majority: {
                proposal: string;
            };
            external_propose_default: {
                proposal: string;
            };
            fast_track: {
                proposalHash: string;
                votingPeriod: string;
                delay: string;
            };
            veto_external: {
                proposalHash: string;
            };
            cancel_referendum: {
                refIndex: string;
            };
            delegate: {
                to: string;
                conviction: string;
                balance: string;
            };
            undelegate: string;
            clear_public_proposals: string;
            unlock: {
                target: string;
            };
            remove_vote: {
                index: string;
            };
            remove_other_vote: {
                target: string;
                index: string;
            };
            blacklist: {
                proposalHash: string;
                maybeRefIndex: string;
            };
            cancel_proposal: {
                propIndex: string;
            };
            set_metadata: {
                owner: string;
                maybeHash: string;
            };
        };
    };
    /**
     * Lookup98: pallet_democracy::conviction::Conviction
     **/
    PalletDemocracyConviction: {
        _enum: string[];
    };
    /**
     * Lookup101: pallet_collective::pallet::Call<T, I>
     **/
    PalletCollectiveCall: {
        _enum: {
            set_members: {
                newMembers: string;
                prime: string;
                oldCount: string;
            };
            execute: {
                proposal: string;
                lengthBound: string;
            };
            propose: {
                threshold: string;
                proposal: string;
                lengthBound: string;
            };
            vote: {
                proposal: string;
                index: string;
                approve: string;
            };
            __Unused4: string;
            disapprove_proposal: {
                proposalHash: string;
            };
            close: {
                proposalHash: string;
                index: string;
                proposalWeightBound: string;
                lengthBound: string;
            };
        };
    };
    /**
     * Lookup104: pallet_elections_phragmen::pallet::Call<T>
     **/
    PalletElectionsPhragmenCall: {
        _enum: {
            vote: {
                votes: string;
                value: string;
            };
            remove_voter: string;
            submit_candidacy: {
                candidateCount: string;
            };
            renounce_candidacy: {
                renouncing: string;
            };
            remove_member: {
                who: string;
                slashBond: string;
                rerunElection: string;
            };
            clean_defunct_voters: {
                numVoters: string;
                numDefunct: string;
            };
        };
    };
    /**
     * Lookup105: pallet_elections_phragmen::Renouncing
     **/
    PalletElectionsPhragmenRenouncing: {
        _enum: {
            Member: string;
            RunnerUp: string;
            Candidate: string;
        };
    };
    /**
     * Lookup106: pallet_membership::pallet::Call<T, I>
     **/
    PalletMembershipCall: {
        _enum: {
            add_member: {
                who: string;
            };
            remove_member: {
                who: string;
            };
            swap_member: {
                remove: string;
                add: string;
            };
            reset_members: {
                members: string;
            };
            change_key: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            set_prime: {
                who: string;
            };
            clear_prime: string;
        };
    };
    /**
     * Lookup108: pallet_conviction_voting::pallet::Call<T, I>
     **/
    PalletConvictionVotingCall: {
        _enum: {
            vote: {
                pollIndex: string;
                vote: string;
            };
            delegate: {
                class: string;
                to: string;
                conviction: string;
                balance: string;
            };
            undelegate: {
                class: string;
            };
            unlock: {
                class: string;
                target: string;
            };
            remove_vote: {
                class: string;
                index: string;
            };
            remove_other_vote: {
                target: string;
                class: string;
                index: string;
            };
        };
    };
    /**
     * Lookup109: pallet_conviction_voting::vote::AccountVote<Balance>
     **/
    PalletConvictionVotingVoteAccountVote: {
        _enum: {
            Standard: {
                vote: string;
                balance: string;
            };
            Split: {
                aye: string;
                nay: string;
            };
            SplitAbstain: {
                aye: string;
                nay: string;
                abstain: string;
            };
        };
    };
    /**
     * Lookup111: pallet_conviction_voting::conviction::Conviction
     **/
    PalletConvictionVotingConviction: {
        _enum: string[];
    };
    /**
     * Lookup113: pallet_referenda::pallet::Call<T, I>
     **/
    PalletReferendaCall: {
        _enum: {
            submit: {
                proposalOrigin: string;
                proposal: string;
                enactmentMoment: string;
            };
            place_decision_deposit: {
                index: string;
            };
            refund_decision_deposit: {
                index: string;
            };
            cancel: {
                index: string;
            };
            kill: {
                index: string;
            };
            nudge_referendum: {
                index: string;
            };
            one_fewer_deciding: {
                track: string;
            };
            refund_submission_deposit: {
                index: string;
            };
            set_metadata: {
                index: string;
                maybeHash: string;
            };
        };
    };
    /**
     * Lookup114: tangle_kusama_runtime::OriginCaller
     **/
    TangleKusamaRuntimeOriginCaller: {
        _enum: {
            system: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            __Unused4: string;
            __Unused5: string;
            Void: string;
            __Unused7: string;
            __Unused8: string;
            __Unused9: string;
            __Unused10: string;
            __Unused11: string;
            __Unused12: string;
            __Unused13: string;
            __Unused14: string;
            __Unused15: string;
            __Unused16: string;
            __Unused17: string;
            __Unused18: string;
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            Council: string;
            TechnicalCommittee: string;
            __Unused33: string;
            __Unused34: string;
            __Unused35: string;
            __Unused36: string;
            __Unused37: string;
            Origins: string;
            __Unused39: string;
            __Unused40: string;
            PolkadotXcm: string;
            CumulusXcm: string;
        };
    };
    /**
     * Lookup115: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
     **/
    FrameSupportDispatchRawOrigin: {
        _enum: {
            Root: string;
            Signed: string;
            None: string;
        };
    };
    /**
     * Lookup116: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
     **/
    PalletCollectiveRawOrigin: {
        _enum: {
            Members: string;
            Member: string;
            _Phantom: string;
        };
    };
    /**
     * Lookup118: tangle_kusama_runtime::governance::origins::custom_origins::Origin
     **/
    TangleKusamaRuntimeGovernanceOriginsCustomOriginsOrigin: {
        _enum: string[];
    };
    /**
     * Lookup119: pallet_xcm::pallet::Origin
     **/
    PalletXcmOrigin: {
        _enum: {
            Xcm: string;
            Response: string;
        };
    };
    /**
     * Lookup120: staging_xcm::v3::multilocation::MultiLocation
     **/
    StagingXcmV3MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup121: xcm::v3::junctions::Junctions
     **/
    XcmV3Junctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup122: xcm::v3::junction::Junction
     **/
    XcmV3Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: {
                length: string;
                data: string;
            };
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
            GlobalConsensus: string;
        };
    };
    /**
     * Lookup124: xcm::v3::junction::NetworkId
     **/
    XcmV3JunctionNetworkId: {
        _enum: {
            ByGenesis: string;
            ByFork: {
                blockNumber: string;
                blockHash: string;
            };
            Polkadot: string;
            Kusama: string;
            Westend: string;
            Rococo: string;
            Wococo: string;
            Ethereum: {
                chainId: string;
            };
            BitcoinCore: string;
            BitcoinCash: string;
        };
    };
    /**
     * Lookup125: xcm::v3::junction::BodyId
     **/
    XcmV3JunctionBodyId: {
        _enum: {
            Unit: string;
            Moniker: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup126: xcm::v3::junction::BodyPart
     **/
    XcmV3JunctionBodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup127: cumulus_pallet_xcm::pallet::Origin
     **/
    CumulusPalletXcmOrigin: {
        _enum: {
            Relay: string;
            SiblingParachain: string;
        };
    };
    /**
     * Lookup128: sp_core::Void
     **/
    SpCoreVoid: string;
    /**
     * Lookup129: frame_support::traits::schedule::DispatchTime<BlockNumber>
     **/
    FrameSupportScheduleDispatchTime: {
        _enum: {
            At: string;
            After: string;
        };
    };
    /**
     * Lookup130: pallet_whitelist::pallet::Call<T>
     **/
    PalletWhitelistCall: {
        _enum: {
            whitelist_call: {
                callHash: string;
            };
            remove_whitelisted_call: {
                callHash: string;
            };
            dispatch_whitelisted_call: {
                callHash: string;
                callEncodedLen: string;
                callWeightWitness: string;
            };
            dispatch_whitelisted_call_with_preimage: {
                call: string;
            };
        };
    };
    /**
     * Lookup131: cumulus_pallet_xcmp_queue::pallet::Call<T>
     **/
    CumulusPalletXcmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
            suspend_xcm_execution: string;
            resume_xcm_execution: string;
            update_suspend_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_drop_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_resume_threshold: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_threshold_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_weight_restrict_decay: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
            update_xcmp_max_individual_weight: {
                _alias: {
                    new_: string;
                };
                new_: string;
            };
        };
    };
    /**
     * Lookup132: pallet_xcm::pallet::Call<T>
     **/
    PalletXcmCall: {
        _enum: {
            send: {
                dest: string;
                message: string;
            };
            teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
            };
            execute: {
                message: string;
                maxWeight: string;
            };
            force_xcm_version: {
                location: string;
                version: string;
            };
            force_default_xcm_version: {
                maybeXcmVersion: string;
            };
            force_subscribe_version_notify: {
                location: string;
            };
            force_unsubscribe_version_notify: {
                location: string;
            };
            limited_reserve_transfer_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            limited_teleport_assets: {
                dest: string;
                beneficiary: string;
                assets: string;
                feeAssetItem: string;
                weightLimit: string;
            };
            force_suspension: {
                suspended: string;
            };
        };
    };
    /**
     * Lookup133: xcm::VersionedMultiLocation
     **/
    XcmVersionedMultiLocation: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup134: xcm::v2::multilocation::MultiLocation
     **/
    XcmV2MultiLocation: {
        parents: string;
        interior: string;
    };
    /**
     * Lookup135: xcm::v2::multilocation::Junctions
     **/
    XcmV2MultilocationJunctions: {
        _enum: {
            Here: string;
            X1: string;
            X2: string;
            X3: string;
            X4: string;
            X5: string;
            X6: string;
            X7: string;
            X8: string;
        };
    };
    /**
     * Lookup136: xcm::v2::junction::Junction
     **/
    XcmV2Junction: {
        _enum: {
            Parachain: string;
            AccountId32: {
                network: string;
                id: string;
            };
            AccountIndex64: {
                network: string;
                index: string;
            };
            AccountKey20: {
                network: string;
                key: string;
            };
            PalletInstance: string;
            GeneralIndex: string;
            GeneralKey: string;
            OnlyChild: string;
            Plurality: {
                id: string;
                part: string;
            };
        };
    };
    /**
     * Lookup137: xcm::v2::NetworkId
     **/
    XcmV2NetworkId: {
        _enum: {
            Any: string;
            Named: string;
            Polkadot: string;
            Kusama: string;
        };
    };
    /**
     * Lookup139: xcm::v2::BodyId
     **/
    XcmV2BodyId: {
        _enum: {
            Unit: string;
            Named: string;
            Index: string;
            Executive: string;
            Technical: string;
            Legislative: string;
            Judicial: string;
            Defense: string;
            Administration: string;
            Treasury: string;
        };
    };
    /**
     * Lookup140: xcm::v2::BodyPart
     **/
    XcmV2BodyPart: {
        _enum: {
            Voice: string;
            Members: {
                count: string;
            };
            Fraction: {
                nom: string;
                denom: string;
            };
            AtLeastProportion: {
                nom: string;
                denom: string;
            };
            MoreThanProportion: {
                nom: string;
                denom: string;
            };
        };
    };
    /**
     * Lookup141: xcm::VersionedXcm<RuntimeCall>
     **/
    XcmVersionedXcm: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup142: xcm::v2::Xcm<RuntimeCall>
     **/
    XcmV2Xcm: string;
    /**
     * Lookup144: xcm::v2::Instruction<RuntimeCall>
     **/
    XcmV2Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originType: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: {
                queryId: string;
                dest: string;
                maxResponseWeight: string;
            };
            DepositAsset: {
                assets: string;
                maxAssets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                maxAssets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                receive: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            QueryHolding: {
                queryId: string;
                dest: string;
                assets: string;
                maxResponseWeight: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
        };
    };
    /**
     * Lookup145: xcm::v2::multiasset::MultiAssets
     **/
    XcmV2MultiassetMultiAssets: string;
    /**
     * Lookup147: xcm::v2::multiasset::MultiAsset
     **/
    XcmV2MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup148: xcm::v2::multiasset::AssetId
     **/
    XcmV2MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup149: xcm::v2::multiasset::Fungibility
     **/
    XcmV2MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup150: xcm::v2::multiasset::AssetInstance
     **/
    XcmV2MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
            Blob: string;
        };
    };
    /**
     * Lookup153: xcm::v2::Response
     **/
    XcmV2Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
        };
    };
    /**
     * Lookup156: xcm::v2::traits::Error
     **/
    XcmV2TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            MultiLocationFull: string;
            MultiLocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
        };
    };
    /**
     * Lookup157: xcm::v2::OriginKind
     **/
    XcmV2OriginKind: {
        _enum: string[];
    };
    /**
     * Lookup158: xcm::double_encoded::DoubleEncoded<T>
     **/
    XcmDoubleEncoded: {
        encoded: string;
    };
    /**
     * Lookup159: xcm::v2::multiasset::MultiAssetFilter
     **/
    XcmV2MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup160: xcm::v2::multiasset::WildMultiAsset
     **/
    XcmV2MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
        };
    };
    /**
     * Lookup161: xcm::v2::multiasset::WildFungibility
     **/
    XcmV2MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup162: xcm::v2::WeightLimit
     **/
    XcmV2WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup163: xcm::v3::Xcm<Call>
     **/
    XcmV3Xcm: string;
    /**
     * Lookup165: xcm::v3::Instruction<Call>
     **/
    XcmV3Instruction: {
        _enum: {
            WithdrawAsset: string;
            ReserveAssetDeposited: string;
            ReceiveTeleportedAsset: string;
            QueryResponse: {
                queryId: string;
                response: string;
                maxWeight: string;
                querier: string;
            };
            TransferAsset: {
                assets: string;
                beneficiary: string;
            };
            TransferReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            Transact: {
                originKind: string;
                requireWeightAtMost: string;
                call: string;
            };
            HrmpNewChannelOpenRequest: {
                sender: string;
                maxMessageSize: string;
                maxCapacity: string;
            };
            HrmpChannelAccepted: {
                recipient: string;
            };
            HrmpChannelClosing: {
                initiator: string;
                sender: string;
                recipient: string;
            };
            ClearOrigin: string;
            DescendOrigin: string;
            ReportError: string;
            DepositAsset: {
                assets: string;
                beneficiary: string;
            };
            DepositReserveAsset: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ExchangeAsset: {
                give: string;
                want: string;
                maximal: string;
            };
            InitiateReserveWithdraw: {
                assets: string;
                reserve: string;
                xcm: string;
            };
            InitiateTeleport: {
                assets: string;
                dest: string;
                xcm: string;
            };
            ReportHolding: {
                responseInfo: string;
                assets: string;
            };
            BuyExecution: {
                fees: string;
                weightLimit: string;
            };
            RefundSurplus: string;
            SetErrorHandler: string;
            SetAppendix: string;
            ClearError: string;
            ClaimAsset: {
                assets: string;
                ticket: string;
            };
            Trap: string;
            SubscribeVersion: {
                queryId: string;
                maxResponseWeight: string;
            };
            UnsubscribeVersion: string;
            BurnAsset: string;
            ExpectAsset: string;
            ExpectOrigin: string;
            ExpectError: string;
            ExpectTransactStatus: string;
            QueryPallet: {
                moduleName: string;
                responseInfo: string;
            };
            ExpectPallet: {
                index: string;
                name: string;
                moduleName: string;
                crateMajor: string;
                minCrateMinor: string;
            };
            ReportTransactStatus: string;
            ClearTransactStatus: string;
            UniversalOrigin: string;
            ExportMessage: {
                network: string;
                destination: string;
                xcm: string;
            };
            LockAsset: {
                asset: string;
                unlocker: string;
            };
            UnlockAsset: {
                asset: string;
                target: string;
            };
            NoteUnlockable: {
                asset: string;
                owner: string;
            };
            RequestUnlock: {
                asset: string;
                locker: string;
            };
            SetFeesMode: {
                jitWithdraw: string;
            };
            SetTopic: string;
            ClearTopic: string;
            AliasOrigin: string;
            UnpaidExecution: {
                weightLimit: string;
                checkOrigin: string;
            };
        };
    };
    /**
     * Lookup166: xcm::v3::multiasset::MultiAssets
     **/
    XcmV3MultiassetMultiAssets: string;
    /**
     * Lookup168: xcm::v3::multiasset::MultiAsset
     **/
    XcmV3MultiAsset: {
        id: string;
        fun: string;
    };
    /**
     * Lookup169: xcm::v3::multiasset::AssetId
     **/
    XcmV3MultiassetAssetId: {
        _enum: {
            Concrete: string;
            Abstract: string;
        };
    };
    /**
     * Lookup170: xcm::v3::multiasset::Fungibility
     **/
    XcmV3MultiassetFungibility: {
        _enum: {
            Fungible: string;
            NonFungible: string;
        };
    };
    /**
     * Lookup171: xcm::v3::multiasset::AssetInstance
     **/
    XcmV3MultiassetAssetInstance: {
        _enum: {
            Undefined: string;
            Index: string;
            Array4: string;
            Array8: string;
            Array16: string;
            Array32: string;
        };
    };
    /**
     * Lookup172: xcm::v3::Response
     **/
    XcmV3Response: {
        _enum: {
            Null: string;
            Assets: string;
            ExecutionResult: string;
            Version: string;
            PalletsInfo: string;
            DispatchResult: string;
        };
    };
    /**
     * Lookup175: xcm::v3::traits::Error
     **/
    XcmV3TraitsError: {
        _enum: {
            Overflow: string;
            Unimplemented: string;
            UntrustedReserveLocation: string;
            UntrustedTeleportLocation: string;
            LocationFull: string;
            LocationNotInvertible: string;
            BadOrigin: string;
            InvalidLocation: string;
            AssetNotFound: string;
            FailedToTransactAsset: string;
            NotWithdrawable: string;
            LocationCannotHold: string;
            ExceedsMaxMessageSize: string;
            DestinationUnsupported: string;
            Transport: string;
            Unroutable: string;
            UnknownClaim: string;
            FailedToDecode: string;
            MaxWeightInvalid: string;
            NotHoldingFees: string;
            TooExpensive: string;
            Trap: string;
            ExpectationFalse: string;
            PalletNotFound: string;
            NameMismatch: string;
            VersionIncompatible: string;
            HoldingWouldOverflow: string;
            ExportError: string;
            ReanchorFailed: string;
            NoDeal: string;
            FeesNotMet: string;
            LockError: string;
            NoPermission: string;
            Unanchored: string;
            NotDepositable: string;
            UnhandledXcmVersion: string;
            WeightLimitReached: string;
            Barrier: string;
            WeightNotComputable: string;
            ExceedsStackLimit: string;
        };
    };
    /**
     * Lookup177: xcm::v3::PalletInfo
     **/
    XcmV3PalletInfo: {
        index: string;
        name: string;
        moduleName: string;
        major: string;
        minor: string;
        patch: string;
    };
    /**
     * Lookup180: xcm::v3::MaybeErrorCode
     **/
    XcmV3MaybeErrorCode: {
        _enum: {
            Success: string;
            Error: string;
            TruncatedError: string;
        };
    };
    /**
     * Lookup183: xcm::v3::QueryResponseInfo
     **/
    XcmV3QueryResponseInfo: {
        destination: string;
        queryId: string;
        maxWeight: string;
    };
    /**
     * Lookup184: xcm::v3::multiasset::MultiAssetFilter
     **/
    XcmV3MultiassetMultiAssetFilter: {
        _enum: {
            Definite: string;
            Wild: string;
        };
    };
    /**
     * Lookup185: xcm::v3::multiasset::WildMultiAsset
     **/
    XcmV3MultiassetWildMultiAsset: {
        _enum: {
            All: string;
            AllOf: {
                id: string;
                fun: string;
            };
            AllCounted: string;
            AllOfCounted: {
                id: string;
                fun: string;
                count: string;
            };
        };
    };
    /**
     * Lookup186: xcm::v3::multiasset::WildFungibility
     **/
    XcmV3MultiassetWildFungibility: {
        _enum: string[];
    };
    /**
     * Lookup187: xcm::v3::WeightLimit
     **/
    XcmV3WeightLimit: {
        _enum: {
            Unlimited: string;
            Limited: string;
        };
    };
    /**
     * Lookup188: xcm::VersionedMultiAssets
     **/
    XcmVersionedMultiAssets: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup197: cumulus_pallet_xcm::pallet::Call<T>
     **/
    CumulusPalletXcmCall: string;
    /**
     * Lookup198: cumulus_pallet_dmp_queue::pallet::Call<T>
     **/
    CumulusPalletDmpQueueCall: {
        _enum: {
            service_overweight: {
                index: string;
                weightLimit: string;
            };
        };
    };
    /**
     * Lookup199: pallet_utility::pallet::Call<T>
     **/
    PalletUtilityCall: {
        _enum: {
            batch: {
                calls: string;
            };
            as_derivative: {
                index: string;
                call: string;
            };
            batch_all: {
                calls: string;
            };
            dispatch_as: {
                asOrigin: string;
                call: string;
            };
            force_batch: {
                calls: string;
            };
            with_weight: {
                call: string;
                weight: string;
            };
        };
    };
    /**
     * Lookup201: pallet_scheduler::pallet::Call<T>
     **/
    PalletSchedulerCall: {
        _enum: {
            schedule: {
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel: {
                when: string;
                index: string;
            };
            schedule_named: {
                id: string;
                when: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            cancel_named: {
                id: string;
            };
            schedule_after: {
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
            schedule_named_after: {
                id: string;
                after: string;
                maybePeriodic: string;
                priority: string;
                call: string;
            };
        };
    };
    /**
     * Lookup204: pallet_proxy::pallet::Call<T>
     **/
    PalletProxyCall: {
        _enum: {
            proxy: {
                real: string;
                forceProxyType: string;
                call: string;
            };
            add_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxy: {
                delegate: string;
                proxyType: string;
                delay: string;
            };
            remove_proxies: string;
            create_pure: {
                proxyType: string;
                delay: string;
                index: string;
            };
            kill_pure: {
                spawner: string;
                proxyType: string;
                index: string;
                height: string;
                extIndex: string;
            };
            announce: {
                real: string;
                callHash: string;
            };
            remove_announcement: {
                real: string;
                callHash: string;
            };
            reject_announcement: {
                delegate: string;
                callHash: string;
            };
            proxy_announced: {
                delegate: string;
                real: string;
                forceProxyType: string;
                call: string;
            };
        };
    };
    /**
     * Lookup206: tangle_kusama_runtime::ProxyType
     **/
    TangleKusamaRuntimeProxyType: {
        _enum: string[];
    };
    /**
     * Lookup207: pallet_multisig::pallet::Call<T>
     **/
    PalletMultisigCall: {
        _enum: {
            as_multi_threshold_1: {
                otherSignatories: string;
                call: string;
            };
            as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                call: string;
                maxWeight: string;
            };
            approve_as_multi: {
                threshold: string;
                otherSignatories: string;
                maybeTimepoint: string;
                callHash: string;
                maxWeight: string;
            };
            cancel_as_multi: {
                threshold: string;
                otherSignatories: string;
                timepoint: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup209: pallet_multisig::Timepoint<BlockNumber>
     **/
    PalletMultisigTimepoint: {
        height: string;
        index: string;
    };
    /**
     * Lookup210: pallet_identity::pallet::Call<T>
     **/
    PalletIdentityCall: {
        _enum: {
            add_registrar: {
                account: string;
            };
            set_identity: {
                info: string;
            };
            set_subs: {
                subs: string;
            };
            clear_identity: string;
            request_judgement: {
                regIndex: string;
                maxFee: string;
            };
            cancel_request: {
                regIndex: string;
            };
            set_fee: {
                index: string;
                fee: string;
            };
            set_account_id: {
                _alias: {
                    new_: string;
                };
                index: string;
                new_: string;
            };
            set_fields: {
                index: string;
                fields: string;
            };
            provide_judgement: {
                regIndex: string;
                target: string;
                judgement: string;
                identity: string;
            };
            kill_identity: {
                target: string;
            };
            add_sub: {
                sub: string;
                data: string;
            };
            rename_sub: {
                sub: string;
                data: string;
            };
            remove_sub: {
                sub: string;
            };
            quit_sub: string;
        };
    };
    /**
     * Lookup211: pallet_identity::simple::IdentityInfo<FieldLimit>
     **/
    PalletIdentitySimpleIdentityInfo: {
        additional: string;
        display: string;
        legal: string;
        web: string;
        riot: string;
        email: string;
        pgpFingerprint: string;
        image: string;
        twitter: string;
    };
    /**
     * Lookup247: pallet_identity::types::BitFlags<pallet_identity::simple::IdentityField>
     **/
    PalletIdentityBitFlags: {
        _bitLength: number;
        Display: number;
        Legal: number;
        Web: number;
        Riot: number;
        Email: number;
        PgpFingerprint: number;
        Image: number;
        Twitter: number;
    };
    /**
     * Lookup248: pallet_identity::simple::IdentityField
     **/
    PalletIdentitySimpleIdentityField: {
        _enum: string[];
    };
    /**
     * Lookup249: pallet_identity::types::Judgement<Balance>
     **/
    PalletIdentityJudgement: {
        _enum: {
            Unknown: string;
            FeePaid: string;
            Reasonable: string;
            KnownGood: string;
            OutOfDate: string;
            LowQuality: string;
            Erroneous: string;
        };
    };
    /**
     * Lookup250: pallet_treasury::pallet::Call<T, I>
     **/
    PalletTreasuryCall: {
        _enum: {
            propose_spend: {
                value: string;
                beneficiary: string;
            };
            reject_proposal: {
                proposalId: string;
            };
            approve_proposal: {
                proposalId: string;
            };
            spend_local: {
                amount: string;
                beneficiary: string;
            };
            remove_approval: {
                proposalId: string;
            };
            spend: {
                assetKind: string;
                amount: string;
                beneficiary: string;
                validFrom: string;
            };
            payout: {
                index: string;
            };
            check_status: {
                index: string;
            };
            void_spend: {
                index: string;
            };
        };
    };
    /**
     * Lookup251: pallet_bounties::pallet::Call<T, I>
     **/
    PalletBountiesCall: {
        _enum: {
            propose_bounty: {
                value: string;
                description: string;
            };
            approve_bounty: {
                bountyId: string;
            };
            propose_curator: {
                bountyId: string;
                curator: string;
                fee: string;
            };
            unassign_curator: {
                bountyId: string;
            };
            accept_curator: {
                bountyId: string;
            };
            award_bounty: {
                bountyId: string;
                beneficiary: string;
            };
            claim_bounty: {
                bountyId: string;
            };
            close_bounty: {
                bountyId: string;
            };
            extend_bounty_expiry: {
                bountyId: string;
                remark: string;
            };
        };
    };
    /**
     * Lookup252: pallet_tips::pallet::Call<T, I>
     **/
    PalletTipsCall: {
        _enum: {
            report_awesome: {
                reason: string;
                who: string;
            };
            retract_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            tip_new: {
                reason: string;
                who: string;
                tipValue: string;
            };
            tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                tipValue: string;
            };
            close_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            slash_tip: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup253: pallet_preimage::pallet::Call<T>
     **/
    PalletPreimageCall: {
        _enum: {
            note_preimage: {
                bytes: string;
            };
            unnote_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            request_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            unrequest_preimage: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            ensure_updated: {
                hashes: string;
            };
        };
    };
    /**
     * Lookup255: orml_xtokens::module::Call<T>
     **/
    OrmlXtokensModuleCall: {
        _enum: {
            transfer: {
                currencyId: string;
                amount: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiasset: {
                asset: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_with_fee: {
                currencyId: string;
                amount: string;
                fee: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiasset_with_fee: {
                asset: string;
                fee: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multicurrencies: {
                currencies: string;
                feeItem: string;
                dest: string;
                destWeightLimit: string;
            };
            transfer_multiassets: {
                assets: string;
                feeItem: string;
                dest: string;
                destWeightLimit: string;
            };
        };
    };
    /**
     * Lookup256: tangle_primitives::currency::CurrencyId
     **/
    TanglePrimitivesCurrencyCurrencyId: {
        _enum: {
            Native: string;
            lst: string;
            Token: string;
            Stable: string;
            VSToken: string;
            VSBond: string;
            LPToken: string;
            ForeignAsset: string;
            Token2: string;
            lst2: string;
            VSToken2: string;
            VSBond2: string;
            StableLpToken: string;
            BLP: string;
            Lend: string;
        };
    };
    /**
     * Lookup257: tangle_primitives::currency::TokenSymbol
     **/
    TanglePrimitivesCurrencyTokenSymbol: {
        _enum: string[];
    };
    /**
     * Lookup258: xcm::VersionedMultiAsset
     **/
    XcmVersionedMultiAsset: {
        _enum: {
            __Unused0: string;
            V2: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup261: orml_tokens::module::Call<T>
     **/
    OrmlTokensModuleCall: {
        _enum: {
            transfer: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            transfer_all: {
                dest: string;
                currencyId: string;
                keepAlive: string;
            };
            transfer_keep_alive: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            force_transfer: {
                source: string;
                dest: string;
                currencyId: string;
                amount: string;
            };
            set_balance: {
                who: string;
                currencyId: string;
                newFree: string;
                newReserved: string;
            };
        };
    };
    /**
     * Lookup262: tangle_currencies::module::Call<T>
     **/
    TangleCurrenciesModuleCall: {
        _enum: {
            transfer: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            transfer_native_currency: {
                dest: string;
                amount: string;
            };
            update_balance: {
                who: string;
                currencyId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup264: orml_xcm::module::Call<T>
     **/
    OrmlXcmModuleCall: {
        _enum: {
            send_as_sovereign: {
                dest: string;
                message: string;
            };
        };
    };
    /**
     * Lookup265: zenlink_protocol::pallet::Call<T>
     **/
    ZenlinkProtocolCall: {
        _enum: {
            set_fee_receiver: {
                sendTo: string;
            };
            set_fee_point: {
                feePoint: string;
            };
            transfer: {
                assetId: string;
                recipient: string;
                amount: string;
            };
            create_pair: {
                asset0: string;
                asset1: string;
            };
            add_liquidity: {
                asset0: string;
                asset1: string;
                amount0Desired: string;
                amount1Desired: string;
                amount0Min: string;
                amount1Min: string;
                deadline: string;
            };
            remove_liquidity: {
                asset0: string;
                asset1: string;
                liquidity: string;
                amount0Min: string;
                amount1Min: string;
                recipient: string;
                deadline: string;
            };
            swap_exact_assets_for_assets: {
                amountIn: string;
                amountOutMin: string;
                path: string;
                recipient: string;
                deadline: string;
            };
            swap_assets_for_exact_assets: {
                amountOut: string;
                amountInMax: string;
                path: string;
                recipient: string;
                deadline: string;
            };
            bootstrap_create: {
                asset0: string;
                asset1: string;
                targetSupply0: string;
                targetSupply1: string;
                capacitySupply0: string;
                capacitySupply1: string;
                end: string;
                rewards: string;
                limits: string;
            };
            bootstrap_contribute: {
                asset0: string;
                asset1: string;
                amount0Contribute: string;
                amount1Contribute: string;
                deadline: string;
            };
            bootstrap_claim: {
                recipient: string;
                asset0: string;
                asset1: string;
                deadline: string;
            };
            bootstrap_end: {
                asset0: string;
                asset1: string;
            };
            bootstrap_update: {
                asset0: string;
                asset1: string;
                targetSupply0: string;
                targetSupply1: string;
                capacitySupply0: string;
                capacitySupply1: string;
                end: string;
                rewards: string;
                limits: string;
            };
            bootstrap_refund: {
                asset0: string;
                asset1: string;
            };
            bootstrap_charge_reward: {
                asset0: string;
                asset1: string;
                chargeRewards: string;
            };
            bootstrap_withdraw_reward: {
                asset0: string;
                asset1: string;
                recipient: string;
            };
        };
    };
    /**
     * Lookup267: zenlink_protocol::primitives::AssetId
     **/
    ZenlinkProtocolPrimitivesAssetId: {
        chainId: string;
        assetType: string;
        assetIndex: string;
    };
    /**
     * Lookup271: merkle_distributor::pallet::Call<T>
     **/
    MerkleDistributorCall: {
        _enum: {
            add_to_create_whitelist: {
                account: string;
            };
            remove_from_create_whitelist: {
                account: string;
            };
            create_merkle_distributor: {
                merkleRoot: string;
                description: string;
                distributeCurrency: string;
                distributeAmount: string;
            };
            claim: {
                merkleDistributorId: string;
                index: string;
                account: string;
                amount: string;
                merkleProof: string;
            };
            charge: {
                merkleDistributorId: string;
            };
            emergency_withdraw: {
                merkleDistributorId: string;
                recipient: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup272: zenlink_stable_amm::pallet::Call<T>
     **/
    ZenlinkStableAmmCall: {
        _enum: {
            create_base_pool: {
                currencyIds: string;
                currencyDecimals: string;
                a: string;
                fee: string;
                adminFee: string;
                adminFeeReceiver: string;
                lpCurrencySymbol: string;
            };
            create_meta_pool: {
                currencyIds: string;
                currencyDecimals: string;
                a: string;
                fee: string;
                adminFee: string;
                adminFeeReceiver: string;
                lpCurrencySymbol: string;
            };
            add_liquidity: {
                poolId: string;
                amounts: string;
                minMintAmount: string;
                to: string;
                deadline: string;
            };
            swap: {
                pooId: string;
                fromIndex: string;
                toIndex: string;
                inAmount: string;
                minOutAmount: string;
                to: string;
                deadline: string;
            };
            remove_liquidity: {
                pooId: string;
                lpAmount: string;
                minAmounts: string;
                to: string;
                deadline: string;
            };
            remove_liquidity_one_currency: {
                pooId: string;
                lpAmount: string;
                index: string;
                minAmount: string;
                to: string;
                deadline: string;
            };
            remove_liquidity_imbalance: {
                poolId: string;
                amounts: string;
                maxBurnAmount: string;
                to: string;
                deadline: string;
            };
            add_pool_and_base_pool_liquidity: {
                poolId: string;
                basePoolId: string;
                metaAmounts: string;
                baseAmounts: string;
                minToMint: string;
                to: string;
                deadline: string;
            };
            remove_pool_and_base_pool_liquidity: {
                poolId: string;
                basePoolId: string;
                amount: string;
                minAmountsMeta: string;
                minAmountsBase: string;
                to: string;
                deadline: string;
            };
            remove_pool_and_base_pool_liquidity_one_currency: {
                poolId: string;
                basePoolId: string;
                amount: string;
                i: string;
                minAmount: string;
                to: string;
                deadline: string;
            };
            swap_pool_from_base: {
                poolId: string;
                basePoolId: string;
                inIndex: string;
                outIndex: string;
                dx: string;
                minDy: string;
                to: string;
                deadline: string;
            };
            swap_pool_to_base: {
                poolId: string;
                basePoolId: string;
                inIndex: string;
                outIndex: string;
                dx: string;
                minDy: string;
                to: string;
                deadline: string;
            };
            swap_meta_pool_underlying: {
                poolId: string;
                inIndex: string;
                outIndex: string;
                dx: string;
                minDy: string;
                to: string;
                deadline: string;
            };
            update_fee_receiver: {
                poolId: string;
                feeReceiver: string;
            };
            set_swap_fee: {
                poolId: string;
                newSwapFee: string;
            };
            set_admin_fee: {
                poolId: string;
                newAdminFee: string;
            };
            ramp_a: {
                poolId: string;
                futureA: string;
                futureATime: string;
            };
            stop_ramp_a: {
                poolId: string;
            };
            withdraw_admin_fee: {
                poolId: string;
            };
        };
    };
    /**
     * Lookup276: zenlink_swap_router::pallet::Call<T>
     **/
    ZenlinkSwapRouterCall: {
        _enum: {
            swap_exact_token_for_tokens_through_stable_pool: {
                amountIn: string;
                amountOutMin: string;
                routes: string;
                to: string;
                deadline: string;
            };
        };
    };
    /**
     * Lookup278: zenlink_swap_router::Route<PoolId, tangle_primitives::currency::CurrencyId, zenlink_protocol::primitives::AssetId>
     **/
    ZenlinkSwapRouterRoute: {
        _enum: {
            Stable: string;
            Normal: string;
        };
    };
    /**
     * Lookup279: zenlink_swap_router::StablePath<PoolId, tangle_primitives::currency::CurrencyId>
     **/
    ZenlinkSwapRouterStablePath: {
        poolId: string;
        basePoolId: string;
        mode: string;
        fromCurrency: string;
        toCurrency: string;
    };
    /**
     * Lookup280: zenlink_swap_router::StableSwapMode
     **/
    ZenlinkSwapRouterStableSwapMode: {
        _enum: string[];
    };
    /**
     * Lookup281: tangle_token_issuer::pallet::Call<T>
     **/
    TangleTokenIssuerCall: {
        _enum: {
            add_to_issue_whitelist: {
                currencyId: string;
                account: string;
            };
            remove_from_issue_whitelist: {
                currencyId: string;
                account: string;
            };
            add_to_transfer_whitelist: {
                currencyId: string;
                account: string;
            };
            remove_from_transfer_whitelist: {
                currencyId: string;
                account: string;
            };
            issue: {
                dest: string;
                currencyId: string;
                amount: string;
            };
            transfer: {
                dest: string;
                currencyId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup282: tangle_asset_registry::pallet::Call<T>
     **/
    TangleAssetRegistryCall: {
        _enum: {
            register_native_asset: {
                currencyId: string;
                location: string;
                metadata: string;
            };
            update_native_asset: {
                currencyId: string;
                location: string;
                metadata: string;
            };
            register_token_metadata: {
                metadata: string;
            };
            register_lst_metadata: {
                tokenId: string;
            };
            register_vstoken_metadata: {
                tokenId: string;
            };
            register_vsbond_metadata: {
                tokenId: string;
                paraId: string;
                firstSlot: string;
                lastSlot: string;
            };
            register_multilocation: {
                currencyId: string;
                location: string;
                weight: string;
            };
            force_set_multilocation: {
                currencyId: string;
                location: string;
                weight: string;
            };
        };
    };
    /**
     * Lookup283: tangle_asset_registry::pallet::AssetMetadata<Balance>
     **/
    TangleAssetRegistryAssetMetadata: {
        name: string;
        symbol: string;
        decimals: string;
        minimalBalance: string;
    };
    /**
     * Lookup284: tangle_lst_minting::pallet::Call<T>
     **/
    TangleLstMintingCall: {
        _enum: {
            mint: {
                tokenId: string;
                tokenAmount: string;
                remark: string;
                channelId: string;
            };
            redeem: {
                lstId: string;
                lstAmount: string;
            };
            rebond: {
                tokenId: string;
                tokenAmount: string;
            };
            rebond_by_unlock_id: {
                tokenId: string;
                unlockId: string;
            };
            set_unlock_duration: {
                tokenId: string;
                unlockDuration: string;
            };
            set_minimum_mint: {
                tokenId: string;
                amount: string;
            };
            set_minimum_redeem: {
                tokenId: string;
                amount: string;
            };
            add_support_rebond_token: {
                tokenId: string;
            };
            remove_support_rebond_token: {
                tokenId: string;
            };
            set_fees: {
                mintFee: string;
                redeemFee: string;
            };
            set_hook_iteration_limit: {
                limit: string;
            };
            set_unlocking_total: {
                tokenId: string;
                amount: string;
            };
            set_min_time_unit: {
                tokenId: string;
                timeUnit: string;
            };
            recreate_currency_ongoing_time_unit: {
                tokenId: string;
                timeUnit: string;
            };
        };
    };
    /**
     * Lookup286: tangle_primitives::TimeUnit
     **/
    TanglePrimitivesTimeUnit: {
        _enum: {
            Era: string;
            SlashingSpan: string;
            Round: string;
            Kblock: string;
            Hour: string;
        };
    };
    /**
     * Lookup288: tangle_slp::pallet::Call<T>
     **/
    TangleSlpCall: {
        _enum: {
            initialize_delegator: {
                currencyId: string;
                delegatorLocation: string;
            };
            bond: {
                currencyId: string;
                who: string;
                amount: string;
                validator: string;
                weightAndFee: string;
            };
            bond_extra: {
                currencyId: string;
                who: string;
                validator: string;
                amount: string;
                weightAndFee: string;
            };
            unbond: {
                currencyId: string;
                who: string;
                validator: string;
                amount: string;
                weightAndFee: string;
            };
            unbond_all: {
                currencyId: string;
                who: string;
                weightAndFee: string;
            };
            rebond: {
                currencyId: string;
                who: string;
                validator: string;
                amount: string;
                weightAndFee: string;
            };
            delegate: {
                currencyId: string;
                who: string;
                targets: string;
                weightAndFee: string;
            };
            undelegate: {
                currencyId: string;
                who: string;
                targets: string;
                weightAndFee: string;
            };
            redelegate: {
                currencyId: string;
                who: string;
                targets: string;
                weightAndFee: string;
            };
            payout: {
                currencyId: string;
                who: string;
                validator: string;
                when: string;
                weightAndFee: string;
            };
            liquidize: {
                currencyId: string;
                who: string;
                when: string;
                validator: string;
                amount: string;
                weightAndFee: string;
            };
            chill: {
                currencyId: string;
                who: string;
                weightAndFee: string;
            };
            transfer_back: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
                weightAndFee: string;
            };
            transfer_to: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            convert_asset: {
                currencyId: string;
                who: string;
                amount: string;
                ifFromCurrency: string;
                weightAndFee: string;
            };
            increase_token_pool: {
                currencyId: string;
                amount: string;
            };
            decrease_token_pool: {
                currencyId: string;
                amount: string;
            };
            update_ongoing_time_unit: {
                currencyId: string;
                timeUnit: string;
            };
            refund_currency_due_unbond: {
                currencyId: string;
            };
            supplement_fee_reserve: {
                currencyId: string;
                dest: string;
            };
            charge_host_fee_and_tune_lst_exchange_rate: {
                currencyId: string;
                value: string;
                who: string;
            };
            __Unused21: string;
            set_operate_origin: {
                currencyId: string;
                who: string;
            };
            set_fee_source: {
                currencyId: string;
                whoAndFee: string;
            };
            add_delegator: {
                currencyId: string;
                index: string;
                who: string;
            };
            remove_delegator: {
                currencyId: string;
                who: string;
            };
            add_validator: {
                currencyId: string;
                who: string;
            };
            remove_validator: {
                currencyId: string;
                who: string;
            };
            set_validators_by_delegator: {
                currencyId: string;
                who: string;
                validators: string;
            };
            set_delegator_ledger: {
                currencyId: string;
                who: string;
                ledger: string;
            };
            set_minimums_and_maximums: {
                currencyId: string;
                constraints: string;
            };
            set_currency_delays: {
                currencyId: string;
                maybeDelays: string;
            };
            set_hosting_fees: {
                currencyId: string;
                maybeFeeSet: string;
            };
            set_currency_tune_exchange_rate_limit: {
                currencyId: string;
                maybeTuneExchangeRateLimit: string;
            };
            set_ongoing_time_unit_update_interval: {
                currencyId: string;
                maybeInterval: string;
            };
            add_supplement_fee_account_to_whitelist: {
                currencyId: string;
                who: string;
            };
            remove_supplement_fee_account_from_whitelist: {
                currencyId: string;
                who: string;
            };
            confirm_delegator_ledger_query_response: {
                currencyId: string;
                queryId: string;
            };
            fail_delegator_ledger_query_response: {
                currencyId: string;
                queryId: string;
            };
            confirm_validators_by_delegator_query_response: {
                currencyId: string;
                queryId: string;
            };
            fail_validators_by_delegator_query_response: {
                currencyId: string;
                queryId: string;
            };
            confirm_delegator_ledger: {
                queryId: string;
                response: string;
            };
            confirm_validators_by_delegator: {
                queryId: string;
                response: string;
            };
            reset_validators: {
                currencyId: string;
                validatorList: string;
            };
            set_validator_boost_list: {
                currencyId: string;
                validatorList: string;
            };
            add_to_validator_boost_list: {
                currencyId: string;
                who: string;
            };
            remove_from_validator_boot_list: {
                currencyId: string;
                who: string;
            };
            convert_treasury_lst: {
                lst: string;
                amount: string;
            };
            clean_outdated_validator_boost_list: {
                token: string;
                page: string;
            };
        };
    };
    /**
     * Lookup300: tangle_slp::primitives::Ledger<Balance>
     **/
    TangleSlpPrimitivesLedger: {
        _enum: {
            Substrate: string;
            Moonbeam: string;
            ParachainStaking: string;
            Filecoin: string;
            Phala: string;
        };
    };
    /**
     * Lookup301: tangle_slp::primitives::polkadot_primitives::SubstrateLedger<Balance>
     **/
    TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedger: {
        account: string;
        total: string;
        active: string;
        unlocking: string;
    };
    /**
     * Lookup303: tangle_slp::primitives::polkadot_primitives::UnlockChunk<Balance>
     **/
    TangleSlpPrimitivesPolkadotPrimitivesUnlockChunk: {
        value: string;
        unlockTime: string;
    };
    /**
     * Lookup304: tangle_slp::primitives::parachain_staking_primitives::OneToManyLedger<Balance>
     **/
    TangleSlpPrimitivesParachainStakingPrimitivesOneToManyLedger: {
        account: string;
        delegations: string;
        total: string;
        lessTotal: string;
        requests: string;
        requestBriefs: string;
        status: string;
    };
    /**
     * Lookup308: tangle_slp::primitives::parachain_staking_primitives::OneToManyScheduledRequest<Balance>
     **/
    TangleSlpPrimitivesParachainStakingPrimitivesOneToManyScheduledRequest: {
        validator: string;
        whenExecutable: string;
        action: string;
    };
    /**
     * Lookup309: tangle_slp::primitives::parachain_staking_primitives::OneToManyDelegationAction<Balance>
     **/
    TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegationAction: {
        _enum: {
            Revoke: string;
            Decrease: string;
        };
    };
    /**
     * Lookup314: tangle_slp::primitives::parachain_staking_primitives::OneToManyDelegatorStatus
     **/
    TangleSlpPrimitivesParachainStakingPrimitivesOneToManyDelegatorStatus: {
        _enum: {
            Active: string;
            Leaving: string;
        };
    };
    /**
     * Lookup315: tangle_slp::primitives::filecoin_primitives::FilecoinLedger<Balance>
     **/
    TangleSlpPrimitivesFilecoinPrimitivesFilecoinLedger: {
        account: string;
        initialPledge: string;
    };
    /**
     * Lookup316: tangle_slp::primitives::phala_primitives::PhalaLedger<Balance>
     **/
    TangleSlpPrimitivesPhalaPrimitivesPhalaLedger: {
        account: string;
        activeShares: string;
        unlockingShares: string;
        unlockingTimeUnit: string;
        bondedPoolId: string;
        bondedPoolCollectionId: string;
        bondedIsVault: string;
    };
    /**
     * Lookup320: tangle_slp::primitives::MinimumsMaximums<Balance>
     **/
    TangleSlpPrimitivesMinimumsMaximums: {
        delegatorBondedMinimum: string;
        bondExtraMinimum: string;
        unbondMinimum: string;
        rebondMinimum: string;
        unbondRecordMaximum: string;
        validatorsBackMaximum: string;
        delegatorActiveStakingMaximum: string;
        validatorsRewardMaximum: string;
        delegationAmountMinimum: string;
        delegatorsMaximum: string;
        validatorsMaximum: string;
    };
    /**
     * Lookup322: tangle_slp::primitives::Delays
     **/
    TangleSlpPrimitivesDelays: {
        unlockDelay: string;
        leaveDelegatorsDelay: string;
    };
    /**
     * Lookup327: tangle_xcm_interface::pallet::Call<T>
     **/
    TangleXcmInterfaceCall: {
        _enum: {
            update_xcm_dest_weight_and_fee: {
                updates: string;
            };
            transfer_statemine_assets: {
                amount: string;
                assetId: string;
                dest: string;
            };
        };
    };
    /**
     * Lookup330: tangle_primitives::XcmOperationType
     **/
    TanglePrimitivesXcmOperationType: {
        _enum: string[];
    };
    /**
     * Lookup331: tangle_slpx::pallet::Call<T>
     **/
    TangleSlpxCall: {
        _enum: {
            mint: {
                evmCaller: string;
                currencyId: string;
                targetChain: string;
                remark: string;
            };
            zenlink_swap: {
                evmCaller: string;
                currencyIdIn: string;
                currencyIdOut: string;
                currencyIdOutMin: string;
                targetChain: string;
            };
            redeem: {
                evmCaller: string;
                lstId: string;
                targetChain: string;
            };
            stable_pool_swap: {
                evmCaller: string;
                poolId: string;
                currencyIdIn: string;
                currencyIdOut: string;
                minDy: string;
                targetChain: string;
            };
            add_whitelist: {
                supportChain: string;
                evmContractAccountId: string;
            };
            remove_whitelist: {
                supportChain: string;
                evmContractAccountId: string;
            };
            set_execution_fee: {
                currencyId: string;
                executionFee: string;
            };
            set_transfer_to_fee: {
                supportChain: string;
                transferToFee: string;
            };
            set_currency_ethereum_call_switch: {
                currencyId: string;
                isSupport: string;
            };
            set_ethereum_call_configration: {
                xcmFee: string;
                xcmWeight: string;
                period: string;
                contract: string;
            };
            set_currency_support_xcm_fee: {
                currencyId: string;
                isSupport: string;
            };
            set_delay_block: {
                delayBlock: string;
            };
            force_add_order: {
                slpxContractDerivativeAccount: string;
                evmCaller: string;
                currencyId: string;
                targetChain: string;
                remark: string;
                orderType: string;
            };
        };
    };
    /**
     * Lookup333: tangle_slpx::types::TargetChain<sp_core::crypto::AccountId32>
     **/
    TangleSlpxTargetChain: {
        _enum: {
            Astar: string;
            Moonbeam: string;
            Hydradx: string;
            Interlay: string;
            Manta: string;
        };
    };
    /**
     * Lookup334: tangle_slpx::types::SupportChain
     **/
    TangleSlpxSupportChain: {
        _enum: string[];
    };
    /**
     * Lookup335: tangle_slpx::types::OrderType
     **/
    TangleSlpxOrderType: {
        _enum: string[];
    };
    /**
     * Lookup336: pallet_ranked_collective::pallet::Call<T, I>
     **/
    PalletRankedCollectiveCall: {
        _enum: {
            add_member: {
                who: string;
            };
            promote_member: {
                who: string;
            };
            demote_member: {
                who: string;
            };
            remove_member: {
                who: string;
                minRank: string;
            };
            vote: {
                poll: string;
                aye: string;
            };
            cleanup_poll: {
                pollIndex: string;
                max: string;
            };
        };
    };
    /**
     * Lookup338: tangle_stable_pool::pallet::Call<T>
     **/
    TangleStablePoolCall: {
        _enum: {
            create_pool: {
                assets: string;
                precisions: string;
                mintFee: string;
                swapFee: string;
                redeemFee: string;
                initialA: string;
                feeRecipient: string;
                yieldRecipient: string;
                precision: string;
            };
            add_liquidity: {
                poolId: string;
                amounts: string;
                minMintAmount: string;
            };
            swap: {
                poolId: string;
                i: string;
                j: string;
                dx: string;
                minDy: string;
            };
            redeem_proportion: {
                poolId: string;
                amount: string;
                minRedeemAmounts: string;
            };
            redeem_single: {
                poolId: string;
                amount: string;
                i: string;
                minRedeemAmount: string;
                assetLength: string;
            };
            redeem_multi: {
                poolId: string;
                amounts: string;
                maxRedeemAmount: string;
            };
            modify_a: {
                poolId: string;
                a: string;
                futureABlock: string;
            };
            modify_fees: {
                poolId: string;
                mintFee: string;
                swapFee: string;
                redeemFee: string;
            };
            modify_recipients: {
                poolId: string;
                feeRecipient: string;
                yieldRecipient: string;
            };
            edit_token_rate: {
                poolId: string;
                tokenRateInfo: string;
            };
            config_lst_auto_refresh: {
                lst: string;
                hardcap: string;
            };
            remove_lst_auto_refresh: {
                lst: string;
            };
        };
    };
    /**
     * Lookup342: tangle_lst_voting::pallet::Call<T>
     **/
    TangleLstVotingCall: {
        _enum: {
            vote: {
                lst: string;
                pollIndex: string;
                lstVote: string;
            };
            unlock: {
                lst: string;
                pollIndex: string;
            };
            remove_delegator_vote: {
                lst: string;
                pollIndex: string;
                derivativeIndex: string;
            };
            kill_referendum: {
                lst: string;
                pollIndex: string;
            };
            add_delegator: {
                lst: string;
                derivativeIndex: string;
            };
            set_referendum_status: {
                lst: string;
                pollIndex: string;
                info: string;
            };
            set_vote_locking_period: {
                lst: string;
                lockingPeriod: string;
            };
            set_undeciding_timeout: {
                lst: string;
                undecidingTimeout: string;
            };
            notify_vote: {
                queryId: string;
                response: string;
            };
            __Unused9: string;
            notify_remove_delegator_vote: {
                queryId: string;
                response: string;
            };
            set_vote_cap_ratio: {
                lst: string;
                voteCapRatio: string;
            };
        };
    };
    /**
     * Lookup343: tangle_lst_voting::vote::AccountVote<Balance>
     **/
    TangleLstVotingVoteAccountVote: {
        _enum: {
            Standard: {
                vote: string;
                balance: string;
            };
            Split: {
                aye: string;
                nay: string;
            };
            SplitAbstain: {
                aye: string;
                nay: string;
                abstain: string;
            };
        };
    };
    /**
     * Lookup344: tangle_lst_voting::vote::ReferendumInfo<Moment, tangle_lst_voting::vote::Tally<Votes, Total>>
     **/
    TangleLstVotingVoteReferendumInfo: {
        _enum: {
            Ongoing: string;
            Completed: string;
            Killed: string;
        };
    };
    /**
     * Lookup345: tangle_lst_voting::vote::Tally<Votes, Total>
     **/
    TangleLstVotingVoteTally: {
        ayes: string;
        nays: string;
        support: string;
    };
    /**
     * Lookup346: tangle_lst_voting::vote::ReferendumStatus<Moment, tangle_lst_voting::vote::Tally<Votes, Total>>
     **/
    TangleLstVotingVoteReferendumStatus: {
        submitted: string;
        tally: string;
    };
    /**
     * Lookup347: pallet_prices::pallet::Call<T>
     **/
    PalletPricesCall: {
        _enum: {
            set_price: {
                assetId: string;
                price: string;
            };
            reset_price: {
                assetId: string;
            };
            set_foreign_asset: {
                foreignAssetId: string;
                assetId: string;
            };
        };
    };
    /**
     * Lookup349: orml_oracle::module::Call<T, I>
     **/
    OrmlOracleModuleCall: {
        _enum: {
            feed_values: {
                values: string;
            };
        };
    };
    /**
     * Lookup354: sp_runtime::traits::BlakeTwo256
     **/
    SpRuntimeBlakeTwo256: string;
    /**
     * Lookup356: pallet_conviction_voting::types::Tally<Votes, Total>
     **/
    PalletConvictionVotingTally: {
        ayes: string;
        nays: string;
        support: string;
    };
    /**
     * Lookup357: pallet_whitelist::pallet::Event<T>
     **/
    PalletWhitelistEvent: {
        _enum: {
            CallWhitelisted: {
                callHash: string;
            };
            WhitelistedCallRemoved: {
                callHash: string;
            };
            WhitelistedCallDispatched: {
                callHash: string;
                result: string;
            };
        };
    };
    /**
     * Lookup359: frame_support::dispatch::PostDispatchInfo
     **/
    FrameSupportDispatchPostDispatchInfo: {
        actualWeight: string;
        paysFee: string;
    };
    /**
     * Lookup361: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
     **/
    SpRuntimeDispatchErrorWithPostInfo: {
        postInfo: string;
        error: string;
    };
    /**
     * Lookup362: cumulus_pallet_xcmp_queue::pallet::Event<T>
     **/
    CumulusPalletXcmpQueueEvent: {
        _enum: {
            Success: {
                messageHash: string;
                messageId: string;
                weight: string;
            };
            Fail: {
                messageHash: string;
                messageId: string;
                error: string;
                weight: string;
            };
            BadVersion: {
                messageHash: string;
            };
            BadFormat: {
                messageHash: string;
            };
            XcmpMessageSent: {
                messageHash: string;
            };
            OverweightEnqueued: {
                sender: string;
                sentAt: string;
                index: string;
                required: string;
            };
            OverweightServiced: {
                index: string;
                used: string;
            };
        };
    };
    /**
     * Lookup363: pallet_xcm::pallet::Event<T>
     **/
    PalletXcmEvent: {
        _enum: {
            Attempted: {
                outcome: string;
            };
            Sent: {
                origin: string;
                destination: string;
                message: string;
                messageId: string;
            };
            UnexpectedResponse: {
                origin: string;
                queryId: string;
            };
            ResponseReady: {
                queryId: string;
                response: string;
            };
            Notified: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            NotifyOverweight: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
                actualWeight: string;
                maxBudgetedWeight: string;
            };
            NotifyDispatchError: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            NotifyDecodeFailed: {
                queryId: string;
                palletIndex: string;
                callIndex: string;
            };
            InvalidResponder: {
                origin: string;
                queryId: string;
                expectedLocation: string;
            };
            InvalidResponderVersion: {
                origin: string;
                queryId: string;
            };
            ResponseTaken: {
                queryId: string;
            };
            AssetsTrapped: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                origin: string;
                assets: string;
            };
            VersionChangeNotified: {
                destination: string;
                result: string;
                cost: string;
                messageId: string;
            };
            SupportedVersionChanged: {
                location: string;
                version: string;
            };
            NotifyTargetSendFail: {
                location: string;
                queryId: string;
                error: string;
            };
            NotifyTargetMigrationFail: {
                location: string;
                queryId: string;
            };
            InvalidQuerierVersion: {
                origin: string;
                queryId: string;
            };
            InvalidQuerier: {
                origin: string;
                queryId: string;
                expectedQuerier: string;
                maybeActualQuerier: string;
            };
            VersionNotifyStarted: {
                destination: string;
                cost: string;
                messageId: string;
            };
            VersionNotifyRequested: {
                destination: string;
                cost: string;
                messageId: string;
            };
            VersionNotifyUnrequested: {
                destination: string;
                cost: string;
                messageId: string;
            };
            FeesPaid: {
                paying: string;
                fees: string;
            };
            AssetsClaimed: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
                origin: string;
                assets: string;
            };
        };
    };
    /**
     * Lookup364: xcm::v3::traits::Outcome
     **/
    XcmV3TraitsOutcome: {
        _enum: {
            Complete: string;
            Incomplete: string;
            Error: string;
        };
    };
    /**
     * Lookup365: cumulus_pallet_xcm::pallet::Event<T>
     **/
    CumulusPalletXcmEvent: {
        _enum: {
            InvalidFormat: string;
            UnsupportedVersion: string;
            ExecutedDownward: string;
        };
    };
    /**
     * Lookup366: cumulus_pallet_dmp_queue::pallet::Event<T>
     **/
    CumulusPalletDmpQueueEvent: {
        _enum: {
            InvalidFormat: {
                messageHash: string;
            };
            UnsupportedVersion: {
                messageHash: string;
            };
            ExecutedDownward: {
                messageHash: string;
                messageId: string;
                outcome: string;
            };
            WeightExhausted: {
                messageHash: string;
                messageId: string;
                remainingWeight: string;
                requiredWeight: string;
            };
            OverweightEnqueued: {
                messageHash: string;
                messageId: string;
                overweightIndex: string;
                requiredWeight: string;
            };
            OverweightServiced: {
                overweightIndex: string;
                weightUsed: string;
            };
            MaxMessagesExhausted: {
                messageHash: string;
            };
        };
    };
    /**
     * Lookup367: pallet_utility::pallet::Event
     **/
    PalletUtilityEvent: {
        _enum: {
            BatchInterrupted: {
                index: string;
                error: string;
            };
            BatchCompleted: string;
            BatchCompletedWithErrors: string;
            ItemCompleted: string;
            ItemFailed: {
                error: string;
            };
            DispatchedAs: {
                result: string;
            };
        };
    };
    /**
     * Lookup368: pallet_scheduler::pallet::Event<T>
     **/
    PalletSchedulerEvent: {
        _enum: {
            Scheduled: {
                when: string;
                index: string;
            };
            Canceled: {
                when: string;
                index: string;
            };
            Dispatched: {
                task: string;
                id: string;
                result: string;
            };
            CallUnavailable: {
                task: string;
                id: string;
            };
            PeriodicFailed: {
                task: string;
                id: string;
            };
            PermanentlyOverweight: {
                task: string;
                id: string;
            };
        };
    };
    /**
     * Lookup369: pallet_proxy::pallet::Event<T>
     **/
    PalletProxyEvent: {
        _enum: {
            ProxyExecuted: {
                result: string;
            };
            PureCreated: {
                pure: string;
                who: string;
                proxyType: string;
                disambiguationIndex: string;
            };
            Announced: {
                real: string;
                proxy: string;
                callHash: string;
            };
            ProxyAdded: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
            ProxyRemoved: {
                delegator: string;
                delegatee: string;
                proxyType: string;
                delay: string;
            };
        };
    };
    /**
     * Lookup370: pallet_multisig::pallet::Event<T>
     **/
    PalletMultisigEvent: {
        _enum: {
            NewMultisig: {
                approving: string;
                multisig: string;
                callHash: string;
            };
            MultisigApproval: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
            MultisigExecuted: {
                approving: string;
                timepoint: string;
                multisig: string;
                callHash: string;
                result: string;
            };
            MultisigCancelled: {
                cancelling: string;
                timepoint: string;
                multisig: string;
                callHash: string;
            };
        };
    };
    /**
     * Lookup371: pallet_identity::pallet::Event<T>
     **/
    PalletIdentityEvent: {
        _enum: {
            IdentitySet: {
                who: string;
            };
            IdentityCleared: {
                who: string;
                deposit: string;
            };
            IdentityKilled: {
                who: string;
                deposit: string;
            };
            JudgementRequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementUnrequested: {
                who: string;
                registrarIndex: string;
            };
            JudgementGiven: {
                target: string;
                registrarIndex: string;
            };
            RegistrarAdded: {
                registrarIndex: string;
            };
            SubIdentityAdded: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRemoved: {
                sub: string;
                main: string;
                deposit: string;
            };
            SubIdentityRevoked: {
                sub: string;
                main: string;
                deposit: string;
            };
        };
    };
    /**
     * Lookup372: pallet_treasury::pallet::Event<T, I>
     **/
    PalletTreasuryEvent: {
        _enum: {
            Proposed: {
                proposalIndex: string;
            };
            Spending: {
                budgetRemaining: string;
            };
            Awarded: {
                proposalIndex: string;
                award: string;
                account: string;
            };
            Rejected: {
                proposalIndex: string;
                slashed: string;
            };
            Burnt: {
                burntFunds: string;
            };
            Rollover: {
                rolloverBalance: string;
            };
            Deposit: {
                value: string;
            };
            SpendApproved: {
                proposalIndex: string;
                amount: string;
                beneficiary: string;
            };
            UpdatedInactive: {
                reactivated: string;
                deactivated: string;
            };
            AssetSpendApproved: {
                index: string;
                assetKind: string;
                amount: string;
                beneficiary: string;
                validFrom: string;
                expireAt: string;
            };
            AssetSpendVoided: {
                index: string;
            };
            Paid: {
                index: string;
                paymentId: string;
            };
            PaymentFailed: {
                index: string;
                paymentId: string;
            };
            SpendProcessed: {
                index: string;
            };
        };
    };
    /**
     * Lookup373: pallet_bounties::pallet::Event<T, I>
     **/
    PalletBountiesEvent: {
        _enum: {
            BountyProposed: {
                index: string;
            };
            BountyRejected: {
                index: string;
                bond: string;
            };
            BountyBecameActive: {
                index: string;
            };
            BountyAwarded: {
                index: string;
                beneficiary: string;
            };
            BountyClaimed: {
                index: string;
                payout: string;
                beneficiary: string;
            };
            BountyCanceled: {
                index: string;
            };
            BountyExtended: {
                index: string;
            };
            BountyApproved: {
                index: string;
            };
            CuratorProposed: {
                bountyId: string;
                curator: string;
            };
            CuratorUnassigned: {
                bountyId: string;
            };
            CuratorAccepted: {
                bountyId: string;
                curator: string;
            };
        };
    };
    /**
     * Lookup374: pallet_tips::pallet::Event<T, I>
     **/
    PalletTipsEvent: {
        _enum: {
            NewTip: {
                tipHash: string;
            };
            TipClosing: {
                tipHash: string;
            };
            TipClosed: {
                tipHash: string;
                who: string;
                payout: string;
            };
            TipRetracted: {
                tipHash: string;
            };
            TipSlashed: {
                tipHash: string;
                finder: string;
                deposit: string;
            };
        };
    };
    /**
     * Lookup375: pallet_preimage::pallet::Event<T>
     **/
    PalletPreimageEvent: {
        _enum: {
            Noted: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Requested: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
            Cleared: {
                _alias: {
                    hash_: string;
                };
                hash_: string;
            };
        };
    };
    /**
     * Lookup376: orml_xtokens::module::Event<T>
     **/
    OrmlXtokensModuleEvent: {
        _enum: {
            TransferredMultiAssets: {
                sender: string;
                assets: string;
                fee: string;
                dest: string;
            };
        };
    };
    /**
     * Lookup377: orml_tokens::module::Event<T>
     **/
    OrmlTokensModuleEvent: {
        _enum: {
            Endowed: {
                currencyId: string;
                who: string;
                amount: string;
            };
            DustLost: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Transfer: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            Reserved: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Unreserved: {
                currencyId: string;
                who: string;
                amount: string;
            };
            ReserveRepatriated: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
                status: string;
            };
            BalanceSet: {
                currencyId: string;
                who: string;
                free: string;
                reserved: string;
            };
            TotalIssuanceSet: {
                currencyId: string;
                amount: string;
            };
            Withdrawn: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Slashed: {
                currencyId: string;
                who: string;
                freeAmount: string;
                reservedAmount: string;
            };
            Deposited: {
                currencyId: string;
                who: string;
                amount: string;
            };
            LockSet: {
                lockId: string;
                currencyId: string;
                who: string;
                amount: string;
            };
            LockRemoved: {
                lockId: string;
                currencyId: string;
                who: string;
            };
            Locked: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Unlocked: {
                currencyId: string;
                who: string;
                amount: string;
            };
            Issued: {
                currencyId: string;
                amount: string;
            };
            Rescinded: {
                currencyId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup378: orml_unknown_tokens::module::Event
     **/
    OrmlUnknownTokensModuleEvent: {
        _enum: {
            Deposited: {
                asset: string;
                who: string;
            };
            Withdrawn: {
                asset: string;
                who: string;
            };
        };
    };
    /**
     * Lookup379: orml_xcm::module::Event<T>
     **/
    OrmlXcmModuleEvent: {
        _enum: {
            Sent: {
                to: string;
                message: string;
            };
        };
    };
    /**
     * Lookup380: zenlink_protocol::pallet::Event<T>
     **/
    ZenlinkProtocolEvent: {
        _enum: {
            Transferred: string;
            Burned: string;
            Minted: string;
            PairCreated: string;
            LiquidityAdded: string;
            LiquidityRemoved: string;
            AssetSwap: string;
            TransferredToParachain: string;
            BootstrapContribute: string;
            BootstrapEnd: string;
            BootstrapCreated: string;
            BootstrapClaim: string;
            BootstrapUpdate: string;
            BootstrapRefund: string;
            DistributeReward: string;
            ChargeReward: string;
            WithdrawReward: string;
        };
    };
    /**
     * Lookup381: merkle_distributor::pallet::Event<T>
     **/
    MerkleDistributorEvent: {
        _enum: {
            Create: string;
            Claim: string;
            Withdraw: string;
            AddToWhiteList: string;
            RemoveFromWhiteList: string;
        };
    };
    /**
     * Lookup382: zenlink_stable_amm::pallet::Event<T>
     **/
    ZenlinkStableAmmEvent: {
        _enum: {
            CreatePool: {
                poolId: string;
                currencyIds: string;
                lpCurrencyId: string;
                a: string;
                account: string;
                adminFeeReceiver: string;
            };
            UpdateAdminFeeReceiver: {
                poolId: string;
                adminFeeReceiver: string;
            };
            AddLiquidity: {
                poolId: string;
                who: string;
                to: string;
                supplyAmounts: string;
                fees: string;
                newD: string;
                mintAmount: string;
            };
            CurrencyExchange: {
                poolId: string;
                who: string;
                to: string;
                inIndex: string;
                inAmount: string;
                outIndex: string;
                outAmount: string;
            };
            RemoveLiquidity: {
                poolId: string;
                who: string;
                to: string;
                amounts: string;
                fees: string;
                newTotalSupply: string;
            };
            RemoveLiquidityOneCurrency: {
                poolId: string;
                who: string;
                to: string;
                outIndex: string;
                burnAmount: string;
                outAmount: string;
            };
            RemoveLiquidityImbalance: {
                poolId: string;
                who: string;
                to: string;
                amounts: string;
                fees: string;
                newD: string;
                newTotalSupply: string;
            };
            NewSwapFee: {
                poolId: string;
                newSwapFee: string;
            };
            NewAdminFee: {
                poolId: string;
                newAdminFee: string;
            };
            RampA: {
                poolId: string;
                initialAPrecise: string;
                futureAPrecise: string;
                now: string;
                futureATime: string;
            };
            StopRampA: {
                poolId: string;
                currentA: string;
                now: string;
            };
            CollectProtocolFee: {
                poolId: string;
                currencyId: string;
                feeAmount: string;
            };
            CurrencyExchangeUnderlying: {
                poolId: string;
                account: string;
                inAmount: string;
                outAmount: string;
                currencyIndexFrom: string;
                currencyIndexTo: string;
                to: string;
            };
        };
    };
    /**
     * Lookup383: zenlink_swap_router::pallet::Event<T>
     **/
    ZenlinkSwapRouterEvent: string;
    /**
     * Lookup384: tangle_token_issuer::pallet::Event<T>
     **/
    TangleTokenIssuerEvent: {
        _enum: {
            AddedToIssueList: string;
            RemovedFromIssueList: string;
            AddedToTransferList: string;
            RemovedFromTransferList: string;
            Issued: string;
            Transferred: string;
        };
    };
    /**
     * Lookup385: tangle_asset_registry::pallet::Event<T>
     **/
    TangleAssetRegistryEvent: {
        _enum: {
            AssetRegistered: {
                assetId: string;
                metadata: string;
            };
            AssetUpdated: {
                assetId: string;
                metadata: string;
            };
            CurrencyIdRegistered: {
                currencyId: string;
                metadata: string;
            };
            MultiLocationSet: {
                currencyId: string;
                location: string;
                weight: string;
            };
        };
    };
    /**
     * Lookup386: tangle_primitives::currency::AssetIds
     **/
    TanglePrimitivesCurrencyAssetIds: {
        _enum: {
            ForeignAssetId: string;
            NativeAssetId: string;
        };
    };
    /**
     * Lookup387: tangle_lst_minting::pallet::Event<T>
     **/
    TangleLstMintingEvent: {
        _enum: {
            Minted: {
                address: string;
                tokenId: string;
                tokenAmount: string;
                lstAmount: string;
                fee: string;
                remark: string;
            };
            Redeemed: {
                address: string;
                tokenId: string;
                tokenAmount: string;
                lstAmount: string;
                fee: string;
                unlockId: string;
            };
            RedeemSuccess: {
                unlockId: string;
                tokenId: string;
                to: string;
                tokenAmount: string;
            };
            Rebonded: {
                address: string;
                tokenId: string;
                tokenAmount: string;
                lstAmount: string;
                fee: string;
            };
            RebondedByUnlockId: {
                address: string;
                tokenId: string;
                tokenAmount: string;
                lstAmount: string;
                fee: string;
                unlockId: string;
            };
            UnlockDurationSet: {
                tokenId: string;
                unlockDuration: string;
            };
            MinimumMintSet: {
                tokenId: string;
                amount: string;
            };
            MinimumRedeemSet: {
                tokenId: string;
                amount: string;
            };
            SupportRebondTokenAdded: {
                tokenId: string;
            };
            SupportRebondTokenRemoved: {
                tokenId: string;
            };
            FeeSet: {
                mintFee: string;
                redeemFee: string;
            };
            HookIterationLimitSet: {
                limit: string;
            };
            UnlockingTotalSet: {
                tokenId: string;
                amount: string;
            };
            MinTimeUnitSet: {
                tokenId: string;
                timeUnit: string;
            };
            FastRedeemFailed: {
                err: string;
            };
            CurrencyTimeUnitRecreated: {
                tokenId: string;
                timeUnit: string;
            };
        };
    };
    /**
     * Lookup388: tangle_slp::pallet::Event<T>
     **/
    TangleSlpEvent: {
        _enum: {
            DelegatorInitialized: {
                currencyId: string;
                delegatorId: string;
            };
            DelegatorBonded: {
                currencyId: string;
                delegatorId: string;
                bondedAmount: string;
                queryId: string;
                queryIdHash: string;
                validator: string;
            };
            DelegatorBondExtra: {
                currencyId: string;
                delegatorId: string;
                extraBondedAmount: string;
                queryId: string;
                queryIdHash: string;
                validator: string;
            };
            DelegatorUnbond: {
                currencyId: string;
                delegatorId: string;
                unbondAmount: string;
                queryId: string;
                queryIdHash: string;
                validator: string;
            };
            DelegatorUnbondAll: {
                currencyId: string;
                delegatorId: string;
                queryId: string;
                queryIdHash: string;
            };
            DelegatorRebond: {
                currencyId: string;
                delegatorId: string;
                rebondAmount: string;
                queryId: string;
                queryIdHash: string;
                validator: string;
            };
            Delegated: {
                currencyId: string;
                delegatorId: string;
                targets: string;
                queryId: string;
                queryIdHash: string;
            };
            Undelegated: {
                currencyId: string;
                delegatorId: string;
                targets: string;
                queryId: string;
                queryIdHash: string;
            };
            Payout: {
                currencyId: string;
                validator: string;
                timeUnit: string;
            };
            Liquidize: {
                currencyId: string;
                delegatorId: string;
                timeUnit: string;
                queryId: string;
                queryIdHash: string;
                amount: string;
            };
            Chill: {
                currencyId: string;
                delegatorId: string;
                queryId: string;
                queryIdHash: string;
            };
            TransferBack: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            TransferTo: {
                currencyId: string;
                from: string;
                to: string;
                amount: string;
            };
            ConvertAsset: {
                currencyId: string;
                who: string;
                amount: string;
            };
            DelegatorAdded: {
                currencyId: string;
                index: string;
                delegatorId: string;
            };
            DelegatorRemoved: {
                currencyId: string;
                delegatorId: string;
            };
            ValidatorsAdded: {
                currencyId: string;
                validatorId: string;
            };
            ValidatorsRemoved: {
                currencyId: string;
                validatorId: string;
            };
            Refund: {
                currencyId: string;
                timeUnit: string;
                index: string;
                amount: string;
            };
            FundMoveFromExitToEntrance: {
                currencyId: string;
                amount: string;
            };
            TimeUnitUpdated: {
                _alias: {
                    new_: string;
                };
                currencyId: string;
                old: string;
                new_: string;
            };
            PoolTokenIncreased: {
                currencyId: string;
                amount: string;
            };
            HostingFeeCharged: {
                currencyId: string;
                amount: string;
            };
            PoolTokenDecreased: {
                currencyId: string;
                amount: string;
            };
            FeeSupplemented: {
                currencyId: string;
                amount: string;
                from: string;
                to: string;
            };
            ValidatorsByDelegatorSet: {
                currencyId: string;
                validatorsList: string;
                delegatorId: string;
            };
            OperateOriginSet: {
                currencyId: string;
                operator: string;
            };
            FeeSourceSet: {
                currencyId: string;
                whoAndFee: string;
            };
            DelegatorLedgerSet: {
                currencyId: string;
                delegator: string;
                ledger: string;
            };
            DelegatorLedgerQueryResponseConfirmed: {
                queryId: string;
                entry: string;
            };
            DelegatorLedgerQueryResponseFailed: {
                queryId: string;
            };
            ValidatorsByDelegatorQueryResponseConfirmed: {
                queryId: string;
                entry: string;
            };
            ValidatorsByDelegatorQueryResponseFailed: {
                queryId: string;
            };
            MinimumsMaximumsSet: {
                currencyId: string;
                minimumsAndMaximums: string;
            };
            CurrencyDelaysSet: {
                currencyId: string;
                delays: string;
            };
            HostingFeesSet: {
                currencyId: string;
                fees: string;
            };
            CurrencyTuneExchangeRateLimitSet: {
                currencyId: string;
                tuneExchangeRateLimit: string;
            };
            OngoingTimeUnitUpdateIntervalSet: {
                currencyId: string;
                interval: string;
            };
            SupplementFeeAccountWhitelistAdded: {
                currencyId: string;
                who: string;
            };
            SupplementFeeAccountWhitelistRemoved: {
                currencyId: string;
                who: string;
            };
            ValidatorsReset: {
                currencyId: string;
                validatorList: string;
            };
            ValidatorBoostListSet: {
                currencyId: string;
                validatorBoostList: string;
            };
            ValidatorBoostListAdded: {
                currencyId: string;
                who: string;
                dueBlockNumber: string;
            };
            RemovedFromBoostList: {
                currencyId: string;
                who: string;
            };
            OutdatedValidatorBoostListCleaned: {
                currencyId: string;
                page: string;
                removeNum: string;
                numLeft: string;
            };
            BurnFeeFailed: {
                currencyId: string;
                amount: string;
            };
        };
    };
    /**
     * Lookup389: tangle_slp::primitives::LedgerUpdateEntry<Balance>
     **/
    TangleSlpPrimitivesLedgerUpdateEntry: {
        _enum: {
            Substrate: string;
            Moonbeam: string;
            ParachainStaking: string;
        };
    };
    /**
     * Lookup390: tangle_slp::primitives::polkadot_primitives::SubstrateLedgerUpdateEntry<Balance>
     **/
    TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateEntry: {
        currencyId: string;
        delegatorId: string;
        updateOperation: string;
        amount: string;
        unlockTime: string;
    };
    /**
     * Lookup391: tangle_slp::primitives::polkadot_primitives::SubstrateLedgerUpdateOperation
     **/
    TangleSlpPrimitivesPolkadotPrimitivesSubstrateLedgerUpdateOperation: {
        _enum: string[];
    };
    /**
     * Lookup392: tangle_slp::primitives::parachain_staking_primitives::ParachainStakingLedgerUpdateEntry<Balance>
     **/
    TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateEntry: {
        currencyId: string;
        delegatorId: string;
        validatorId: string;
        updateOperation: string;
        amount: string;
        unlockTime: string;
    };
    /**
     * Lookup393: tangle_slp::primitives::parachain_staking_primitives::ParachainStakingLedgerUpdateOperation
     **/
    TangleSlpPrimitivesParachainStakingPrimitivesParachainStakingLedgerUpdateOperation: {
        _enum: string[];
    };
    /**
     * Lookup394: tangle_slp::primitives::ValidatorsByDelegatorUpdateEntry
     **/
    TangleSlpPrimitivesValidatorsByDelegatorUpdateEntry: {
        _enum: {
            Substrate: string;
        };
    };
    /**
     * Lookup395: tangle_slp::primitives::polkadot_primitives::SubstrateValidatorsByDelegatorUpdateEntry
     **/
    TangleSlpPrimitivesPolkadotPrimitivesSubstrateValidatorsByDelegatorUpdateEntry: {
        currencyId: string;
        delegatorId: string;
        validators: string;
    };
    /**
     * Lookup398: tangle_xcm_interface::pallet::Event<T>
     **/
    TangleXcmInterfaceEvent: {
        _enum: {
            XcmDestWeightAndFeeUpdated: string;
            TransferredStatemineMultiAsset: string;
        };
    };
    /**
     * Lookup399: tangle_slpx::pallet::Event<T>
     **/
    TangleSlpxEvent: {
        _enum: {
            AddWhitelistAccountId: {
                supportChain: string;
                evmContractAccountId: string;
            };
            RemoveWhitelistAccountId: {
                supportChain: string;
                evmContractAccountId: string;
            };
            XcmMint: {
                evmCaller: string;
                currencyId: string;
                tokenAmount: string;
                targetChain: string;
            };
            XcmMintFailed: {
                evmCaller: string;
                currencyId: string;
                tokenAmount: string;
                targetChain: string;
            };
            XcmZenlinkSwap: {
                evmCaller: string;
                currencyIdIn: string;
                currencyIdOut: string;
                currencyIdOutAmount: string;
                targetChain: string;
            };
            XcmZenlinkSwapFailed: {
                evmCaller: string;
                currencyIdIn: string;
                currencyIdOut: string;
                currencyIdInAmount: string;
                targetChain: string;
            };
            XcmStablePoolSwap: {
                evmCaller: string;
                poolTokenIndexIn: string;
                poolTokenIndexOut: string;
                currencyIdOutAmount: string;
                targetChain: string;
            };
            XcmStablePoolSwapFailed: {
                evmCaller: string;
                poolTokenIndexIn: string;
                poolTokenIndexOut: string;
                currencyIdInAmount: string;
                targetChain: string;
            };
            XcmRedeem: {
                evmCaller: string;
                lstId: string;
                lstAmount: string;
                targetChain: string;
            };
            XcmRedeemFailed: {
                evmCaller: string;
                lstId: string;
                lstAmount: string;
                targetChain: string;
            };
            SetTransferToFee: {
                supportChain: string;
                transferToFee: string;
            };
            SetExecutionFee: {
                currencyId: string;
                executionFee: string;
            };
            SetCurrencyEthereumCallSwitch: {
                currencyId: string;
                isSupport: string;
            };
            SetEthereumCallConfiguration: {
                xcmFee: string;
                xcmWeight: string;
                period: string;
                contract: string;
            };
            XcmSetTokenAmount: {
                currencyId: string;
                tokenAmount: string;
                vcurrencyId: string;
                lstAmount: string;
            };
            SetCurrencyToSupportXcmFee: {
                currencyId: string;
                isSupport: string;
            };
            SetDelayBlock: {
                delayBlock: string;
            };
            CreateOrder: {
                order: string;
            };
            OrderHandled: {
                order: string;
            };
            OrderFailed: {
                order: string;
            };
            InsufficientAssets: string;
        };
    };
    /**
     * Lookup400: tangle_slpx::types::Order<sp_core::crypto::AccountId32, tangle_primitives::currency::CurrencyId, Balance, BlockNumber>
     **/
    TangleSlpxOrder: {
        sourceChainCaller: string;
        tangleChainCaller: string;
        derivativeAccount: string;
        createBlockNumber: string;
        currencyId: string;
        currencyAmount: string;
        orderType: string;
        remark: string;
        targetChain: string;
    };
    /**
     * Lookup401: tangle_slpx::types::OrderCaller<sp_core::crypto::AccountId32>
     **/
    TangleSlpxOrderCaller: {
        _enum: {
            Substrate: string;
            Evm: string;
        };
    };
    /**
     * Lookup402: pallet_ranked_collective::pallet::Event<T, I>
     **/
    PalletRankedCollectiveEvent: {
        _enum: {
            MemberAdded: {
                who: string;
            };
            RankChanged: {
                who: string;
                rank: string;
            };
            MemberRemoved: {
                who: string;
                rank: string;
            };
            Voted: {
                who: string;
                poll: string;
                vote: string;
                tally: string;
            };
        };
    };
    /**
     * Lookup403: pallet_ranked_collective::VoteRecord
     **/
    PalletRankedCollectiveVoteRecord: {
        _enum: {
            Aye: string;
            Nay: string;
        };
    };
    /**
     * Lookup404: pallet_ranked_collective::Tally<T, I, M>
     **/
    PalletRankedCollectiveTally: {
        bareAyes: string;
        ayes: string;
        nays: string;
    };
    /**
     * Lookup406: tangle_stable_asset::pallet::Event<T>
     **/
    TangleStableAssetEvent: {
        _enum: {
            CreatePool: {
                poolId: string;
                a: string;
                swapId: string;
                palletId: string;
            };
            LiquidityAdded: {
                minter: string;
                poolId: string;
                a: string;
                inputAmounts: string;
                minOutputAmount: string;
                balances: string;
                totalSupply: string;
                feeAmount: string;
                outputAmount: string;
            };
            TokenSwapped: {
                swapper: string;
                poolId: string;
                a: string;
                inputAsset: string;
                outputAsset: string;
                inputAmount: string;
                minOutputAmount: string;
                balances: string;
                totalSupply: string;
                outputAmount: string;
            };
            RedeemedProportion: {
                redeemer: string;
                poolId: string;
                a: string;
                inputAmount: string;
                minOutputAmounts: string;
                balances: string;
                totalSupply: string;
                feeAmount: string;
                outputAmounts: string;
            };
            RedeemedSingle: {
                redeemer: string;
                poolId: string;
                a: string;
                inputAmount: string;
                outputAsset: string;
                minOutputAmount: string;
                balances: string;
                totalSupply: string;
                feeAmount: string;
                outputAmount: string;
            };
            RedeemedMulti: {
                redeemer: string;
                poolId: string;
                a: string;
                outputAmounts: string;
                maxInputAmount: string;
                balances: string;
                totalSupply: string;
                feeAmount: string;
                inputAmount: string;
            };
            BalanceUpdated: {
                poolId: string;
                oldBalances: string;
                newBalances: string;
            };
            YieldCollected: {
                poolId: string;
                a: string;
                oldTotalSupply: string;
                newTotalSupply: string;
                who: string;
                amount: string;
            };
            FeeCollected: {
                poolId: string;
                a: string;
                oldBalances: string;
                newBalances: string;
                oldTotalSupply: string;
                newTotalSupply: string;
                who: string;
                amount: string;
            };
            AModified: {
                poolId: string;
                value: string;
                time: string;
            };
            FeeModified: {
                poolId: string;
                mintFee: string;
                swapFee: string;
                redeemFee: string;
            };
            RecipientModified: {
                poolId: string;
                feeRecipient: string;
                yieldRecipient: string;
            };
            TokenRateSet: {
                poolId: string;
                tokenRate: string;
            };
            TokenRateHardcapConfigured: {
                lst: string;
                hardcap: string;
            };
            TokenRateHardcapRemoved: {
                lst: string;
            };
            TokenRateRefreshFailed: {
                poolId: string;
            };
        };
    };
    /**
     * Lookup407: tangle_lst_voting::pallet::Event<T>
     **/
    TangleLstVotingEvent: {
        _enum: {
            Voted: {
                who: string;
                lst: string;
                pollIndex: string;
                tokenVote: string;
                delegatorVote: string;
            };
            Unlocked: {
                who: string;
                lst: string;
                pollIndex: string;
            };
            DelegatorVoteRemoved: {
                who: string;
                lst: string;
                derivativeIndex: string;
            };
            DelegatorAdded: {
                lst: string;
                derivativeIndex: string;
            };
            ReferendumInfoCreated: {
                lst: string;
                pollIndex: string;
                info: string;
            };
            ReferendumInfoSet: {
                lst: string;
                pollIndex: string;
                info: string;
            };
            VoteLockingPeriodSet: {
                lst: string;
                lockingPeriod: string;
            };
            UndecidingTimeoutSet: {
                lst: string;
                undecidingTimeout: string;
            };
            ReferendumKilled: {
                lst: string;
                pollIndex: string;
            };
            VoteNotified: {
                lst: string;
                pollIndex: string;
                success: string;
            };
            DelegatorVoteRemovedNotified: {
                lst: string;
                pollIndex: string;
                success: string;
            };
            ResponseReceived: {
                responder: string;
                queryId: string;
                response: string;
            };
            VoteCapRatioSet: {
                lst: string;
                voteCapRatio: string;
            };
        };
    };
    /**
     * Lookup408: pallet_prices::pallet::Event<T>
     **/
    PalletPricesEvent: {
        _enum: {
            SetPrice: string;
            ResetPrice: string;
        };
    };
    /**
     * Lookup409: orml_oracle::module::Event<T, I>
     **/
    OrmlOracleModuleEvent: {
        _enum: {
            NewFeedData: {
                sender: string;
                values: string;
            };
        };
    };
    /**
     * Lookup411: frame_system::Phase
     **/
    FrameSystemPhase: {
        _enum: {
            ApplyExtrinsic: string;
            Finalization: string;
            Initialization: string;
        };
    };
    /**
     * Lookup413: frame_system::LastRuntimeUpgradeInfo
     **/
    FrameSystemLastRuntimeUpgradeInfo: {
        specVersion: string;
        specName: string;
    };
    /**
     * Lookup415: frame_system::limits::BlockWeights
     **/
    FrameSystemLimitsBlockWeights: {
        baseBlock: string;
        maxBlock: string;
        perClass: string;
    };
    /**
     * Lookup416: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
     **/
    FrameSupportDispatchPerDispatchClassWeightsPerClass: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup417: frame_system::limits::WeightsPerClass
     **/
    FrameSystemLimitsWeightsPerClass: {
        baseExtrinsic: string;
        maxExtrinsic: string;
        maxTotal: string;
        reserved: string;
    };
    /**
     * Lookup418: frame_system::limits::BlockLength
     **/
    FrameSystemLimitsBlockLength: {
        max: string;
    };
    /**
     * Lookup419: frame_support::dispatch::PerDispatchClass<T>
     **/
    FrameSupportDispatchPerDispatchClassU32: {
        normal: string;
        operational: string;
        mandatory: string;
    };
    /**
     * Lookup420: sp_weights::RuntimeDbWeight
     **/
    SpWeightsRuntimeDbWeight: {
        read: string;
        write: string;
    };
    /**
     * Lookup421: sp_version::RuntimeVersion
     **/
    SpVersionRuntimeVersion: {
        specName: string;
        implName: string;
        authoringVersion: string;
        specVersion: string;
        implVersion: string;
        apis: string;
        transactionVersion: string;
        stateVersion: string;
    };
    /**
     * Lookup425: frame_system::pallet::Error<T>
     **/
    FrameSystemError: {
        _enum: string[];
    };
    /**
     * Lookup427: pallet_indices::pallet::Error<T>
     **/
    PalletIndicesError: {
        _enum: string[];
    };
    /**
     * Lookup429: cumulus_pallet_parachain_system::unincluded_segment::Ancestor<primitive_types::H256>
     **/
    CumulusPalletParachainSystemUnincludedSegmentAncestor: {
        usedBandwidth: string;
        paraHeadHash: string;
        consumedGoAheadSignal: string;
    };
    /**
     * Lookup430: cumulus_pallet_parachain_system::unincluded_segment::UsedBandwidth
     **/
    CumulusPalletParachainSystemUnincludedSegmentUsedBandwidth: {
        umpMsgCount: string;
        umpTotalBytes: string;
        hrmpOutgoing: string;
    };
    /**
     * Lookup432: cumulus_pallet_parachain_system::unincluded_segment::HrmpChannelUpdate
     **/
    CumulusPalletParachainSystemUnincludedSegmentHrmpChannelUpdate: {
        msgCount: string;
        totalBytes: string;
    };
    /**
     * Lookup436: polkadot_primitives::v6::UpgradeGoAhead
     **/
    PolkadotPrimitivesV6UpgradeGoAhead: {
        _enum: string[];
    };
    /**
     * Lookup437: cumulus_pallet_parachain_system::unincluded_segment::SegmentTracker<primitive_types::H256>
     **/
    CumulusPalletParachainSystemUnincludedSegmentSegmentTracker: {
        usedBandwidth: string;
        hrmpWatermark: string;
        consumedGoAheadSignal: string;
    };
    /**
     * Lookup439: polkadot_primitives::v6::UpgradeRestriction
     **/
    PolkadotPrimitivesV6UpgradeRestriction: {
        _enum: string[];
    };
    /**
     * Lookup440: cumulus_pallet_parachain_system::relay_state_snapshot::MessagingStateSnapshot
     **/
    CumulusPalletParachainSystemRelayStateSnapshotMessagingStateSnapshot: {
        dmqMqcHead: string;
        relayDispatchQueueRemainingCapacity: string;
        ingressChannels: string;
        egressChannels: string;
    };
    /**
     * Lookup441: cumulus_pallet_parachain_system::relay_state_snapshot::RelayDispatchQueueRemainingCapacity
     **/
    CumulusPalletParachainSystemRelayStateSnapshotRelayDispatchQueueRemainingCapacity: {
        remainingCount: string;
        remainingSize: string;
    };
    /**
     * Lookup444: polkadot_primitives::v6::AbridgedHrmpChannel
     **/
    PolkadotPrimitivesV6AbridgedHrmpChannel: {
        maxCapacity: string;
        maxTotalSize: string;
        maxMessageSize: string;
        msgCount: string;
        totalSize: string;
        mqcHead: string;
    };
    /**
     * Lookup445: polkadot_primitives::v6::AbridgedHostConfiguration
     **/
    PolkadotPrimitivesV6AbridgedHostConfiguration: {
        maxCodeSize: string;
        maxHeadDataSize: string;
        maxUpwardQueueCount: string;
        maxUpwardQueueSize: string;
        maxUpwardMessageSize: string;
        maxUpwardMessageNumPerCandidate: string;
        hrmpMaxMessageNumPerCandidate: string;
        validationUpgradeCooldown: string;
        validationUpgradeDelay: string;
        asyncBackingParams: string;
    };
    /**
     * Lookup446: polkadot_primitives::v6::async_backing::AsyncBackingParams
     **/
    PolkadotPrimitivesV6AsyncBackingAsyncBackingParams: {
        maxCandidateDepth: string;
        allowedAncestryLen: string;
    };
    /**
     * Lookup452: polkadot_core_primitives::OutboundHrmpMessage<polkadot_parachain_primitives::primitives::Id>
     **/
    PolkadotCorePrimitivesOutboundHrmpMessage: {
        recipient: string;
        data: string;
    };
    /**
     * Lookup453: cumulus_pallet_parachain_system::CodeUpgradeAuthorization<T>
     **/
    CumulusPalletParachainSystemCodeUpgradeAuthorization: {
        codeHash: string;
        checkVersion: string;
    };
    /**
     * Lookup454: cumulus_pallet_parachain_system::pallet::Error<T>
     **/
    CumulusPalletParachainSystemError: {
        _enum: string[];
    };
    /**
     * Lookup456: pallet_balances::types::BalanceLock<Balance>
     **/
    PalletBalancesBalanceLock: {
        id: string;
        amount: string;
        reasons: string;
    };
    /**
     * Lookup457: pallet_balances::types::Reasons
     **/
    PalletBalancesReasons: {
        _enum: string[];
    };
    /**
     * Lookup460: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
     **/
    PalletBalancesReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup464: tangle_kusama_runtime::RuntimeHoldReason
     **/
    TangleKusamaRuntimeRuntimeHoldReason: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            __Unused2: string;
            __Unused3: string;
            __Unused4: string;
            __Unused5: string;
            __Unused6: string;
            __Unused7: string;
            __Unused8: string;
            __Unused9: string;
            __Unused10: string;
            __Unused11: string;
            __Unused12: string;
            __Unused13: string;
            __Unused14: string;
            __Unused15: string;
            __Unused16: string;
            __Unused17: string;
            __Unused18: string;
            __Unused19: string;
            __Unused20: string;
            __Unused21: string;
            __Unused22: string;
            __Unused23: string;
            __Unused24: string;
            __Unused25: string;
            __Unused26: string;
            __Unused27: string;
            __Unused28: string;
            __Unused29: string;
            __Unused30: string;
            __Unused31: string;
            __Unused32: string;
            __Unused33: string;
            __Unused34: string;
            __Unused35: string;
            __Unused36: string;
            __Unused37: string;
            __Unused38: string;
            __Unused39: string;
            __Unused40: string;
            __Unused41: string;
            __Unused42: string;
            __Unused43: string;
            __Unused44: string;
            __Unused45: string;
            __Unused46: string;
            __Unused47: string;
            __Unused48: string;
            __Unused49: string;
            __Unused50: string;
            __Unused51: string;
            __Unused52: string;
            __Unused53: string;
            __Unused54: string;
            __Unused55: string;
            __Unused56: string;
            __Unused57: string;
            __Unused58: string;
            __Unused59: string;
            __Unused60: string;
            __Unused61: string;
            __Unused62: string;
            __Unused63: string;
            Preimage: string;
        };
    };
    /**
     * Lookup465: pallet_preimage::pallet::HoldReason
     **/
    PalletPreimageHoldReason: {
        _enum: string[];
    };
    /**
     * Lookup468: pallet_balances::types::IdAmount<Id, Balance>
     **/
    PalletBalancesIdAmount: {
        id: string;
        amount: string;
    };
    /**
     * Lookup470: pallet_balances::pallet::Error<T, I>
     **/
    PalletBalancesError: {
        _enum: string[];
    };
    /**
     * Lookup471: pallet_transaction_payment::Releases
     **/
    PalletTransactionPaymentReleases: {
        _enum: string[];
    };
    /**
     * Lookup475: sp_core::crypto::KeyTypeId
     **/
    SpCoreCryptoKeyTypeId: string;
    /**
     * Lookup476: pallet_session::pallet::Error<T>
     **/
    PalletSessionError: {
        _enum: string[];
    };
    /**
     * Lookup481: tangle_parachain_staking::types::ParachainBondConfig<sp_core::crypto::AccountId32, BalanceOf>
     **/
    TangleParachainStakingParachainBondConfig: {
        account: string;
        percent: string;
        paymentInRound: string;
    };
    /**
     * Lookup482: tangle_parachain_staking::types::RoundInfo<BlockNumber>
     **/
    TangleParachainStakingRoundInfo: {
        current: string;
        first: string;
        length: string;
    };
    /**
     * Lookup483: tangle_parachain_staking::types::Delegator<sp_core::crypto::AccountId32, Balance>
     **/
    TangleParachainStakingDelegator: {
        id: string;
        delegations: string;
        total: string;
        lessTotal: string;
        status: string;
    };
    /**
     * Lookup484: tangle_parachain_staking::set::OrderedSet<tangle_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>>
     **/
    TangleParachainStakingSetOrderedSet: string;
    /**
     * Lookup485: tangle_parachain_staking::types::Bond<sp_core::crypto::AccountId32, Balance>
     **/
    TangleParachainStakingBond: {
        owner: string;
        amount: string;
    };
    /**
     * Lookup487: tangle_parachain_staking::types::DelegatorStatus
     **/
    TangleParachainStakingDelegatorStatus: {
        _enum: {
            Active: string;
            Leaving: string;
        };
    };
    /**
     * Lookup488: tangle_parachain_staking::types::CandidateMetadata<Balance>
     **/
    TangleParachainStakingCandidateMetadata: {
        bond: string;
        delegationCount: string;
        totalCounted: string;
        lowestTopDelegationAmount: string;
        highestBottomDelegationAmount: string;
        lowestBottomDelegationAmount: string;
        topCapacity: string;
        bottomCapacity: string;
        request: string;
        status: string;
    };
    /**
     * Lookup489: tangle_parachain_staking::types::CapacityStatus
     **/
    TangleParachainStakingCapacityStatus: {
        _enum: string[];
    };
    /**
     * Lookup491: tangle_parachain_staking::types::CandidateBondLessRequest<Balance>
     **/
    TangleParachainStakingCandidateBondLessRequest: {
        amount: string;
        whenExecutable: string;
    };
    /**
     * Lookup492: tangle_parachain_staking::types::CollatorStatus
     **/
    TangleParachainStakingCollatorStatus: {
        _enum: {
            Active: string;
            Idle: string;
            Leaving: string;
        };
    };
    /**
     * Lookup494: tangle_parachain_staking::delegation_requests::ScheduledRequest<sp_core::crypto::AccountId32, Balance>
     **/
    TangleParachainStakingDelegationRequestsScheduledRequest: {
        delegator: string;
        whenExecutable: string;
        action: string;
    };
    /**
     * Lookup495: tangle_parachain_staking::types::Delegations<sp_core::crypto::AccountId32, Balance>
     **/
    TangleParachainStakingDelegations: {
        delegations: string;
        total: string;
    };
    /**
     * Lookup497: tangle_parachain_staking::types::CollatorSnapshot<sp_core::crypto::AccountId32, Balance>
     **/
    TangleParachainStakingCollatorSnapshot: {
        bond: string;
        delegations: string;
        total: string;
    };
    /**
     * Lookup498: tangle_parachain_staking::types::DelayedPayout<Balance>
     **/
    TangleParachainStakingDelayedPayout: {
        roundIssuance: string;
        totalStakingReward: string;
        collatorCommission: string;
    };
    /**
     * Lookup499: tangle_parachain_staking::inflation::InflationInfo<Balance>
     **/
    TangleParachainStakingInflationInflationInfo: {
        expect: {
            min: string;
            ideal: string;
            max: string;
        };
        annual: {
            min: string;
            ideal: string;
            max: string;
        };
        round: {
            min: string;
            ideal: string;
            max: string;
        };
    };
    /**
     * Lookup500: frame_support::PalletId
     **/
    FrameSupportPalletId: string;
    /**
     * Lookup501: tangle_parachain_staking::pallet::Error<T>
     **/
    TangleParachainStakingError: {
        _enum: string[];
    };
    /**
     * Lookup507: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
     **/
    PalletDemocracyReferendumInfo: {
        _enum: {
            Ongoing: string;
            Finished: {
                approved: string;
                end: string;
            };
        };
    };
    /**
     * Lookup508: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
     **/
    PalletDemocracyReferendumStatus: {
        end: string;
        proposal: string;
        threshold: string;
        delay: string;
        tally: string;
    };
    /**
     * Lookup509: pallet_democracy::types::Tally<Balance>
     **/
    PalletDemocracyTally: {
        ayes: string;
        nays: string;
        turnout: string;
    };
    /**
     * Lookup510: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
     **/
    PalletDemocracyVoteVoting: {
        _enum: {
            Direct: {
                votes: string;
                delegations: string;
                prior: string;
            };
            Delegating: {
                balance: string;
                target: string;
                conviction: string;
                delegations: string;
                prior: string;
            };
        };
    };
    /**
     * Lookup514: pallet_democracy::types::Delegations<Balance>
     **/
    PalletDemocracyDelegations: {
        votes: string;
        capital: string;
    };
    /**
     * Lookup515: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletDemocracyVotePriorLock: string;
    /**
     * Lookup518: pallet_democracy::pallet::Error<T>
     **/
    PalletDemocracyError: {
        _enum: string[];
    };
    /**
     * Lookup520: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletCollectiveVotes: {
        index: string;
        threshold: string;
        ayes: string;
        nays: string;
        end: string;
    };
    /**
     * Lookup521: pallet_collective::pallet::Error<T, I>
     **/
    PalletCollectiveError: {
        _enum: string[];
    };
    /**
     * Lookup525: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenSeatHolder: {
        who: string;
        stake: string;
        deposit: string;
    };
    /**
     * Lookup526: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
     **/
    PalletElectionsPhragmenVoter: {
        votes: string;
        stake: string;
        deposit: string;
    };
    /**
     * Lookup527: pallet_elections_phragmen::pallet::Error<T>
     **/
    PalletElectionsPhragmenError: {
        _enum: string[];
    };
    /**
     * Lookup529: pallet_membership::pallet::Error<T, I>
     **/
    PalletMembershipError: {
        _enum: string[];
    };
    /**
     * Lookup533: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
     **/
    PalletConvictionVotingVoteVoting: {
        _enum: {
            Casting: string;
            Delegating: string;
        };
    };
    /**
     * Lookup534: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
     **/
    PalletConvictionVotingVoteCasting: {
        votes: string;
        delegations: string;
        prior: string;
    };
    /**
     * Lookup538: pallet_conviction_voting::types::Delegations<Balance>
     **/
    PalletConvictionVotingDelegations: {
        votes: string;
        capital: string;
    };
    /**
     * Lookup539: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
     **/
    PalletConvictionVotingVotePriorLock: string;
    /**
     * Lookup540: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletConvictionVotingVoteDelegating: {
        balance: string;
        target: string;
        conviction: string;
        delegations: string;
        prior: string;
    };
    /**
     * Lookup544: pallet_conviction_voting::pallet::Error<T, I>
     **/
    PalletConvictionVotingError: {
        _enum: string[];
    };
    /**
     * Lookup545: pallet_referenda::types::ReferendumInfo<TrackId, tangle_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumInfoConvictionVotingTally: {
        _enum: {
            Ongoing: string;
            Approved: string;
            Rejected: string;
            Cancelled: string;
            TimedOut: string;
            Killed: string;
        };
    };
    /**
     * Lookup546: pallet_referenda::types::ReferendumStatus<TrackId, tangle_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumStatusConvictionVotingTally: {
        track: string;
        origin: string;
        proposal: string;
        enactment: string;
        submitted: string;
        submissionDeposit: string;
        decisionDeposit: string;
        deciding: string;
        tally: string;
        inQueue: string;
        alarm: string;
    };
    /**
     * Lookup547: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
     **/
    PalletReferendaDeposit: {
        who: string;
        amount: string;
    };
    /**
     * Lookup550: pallet_referenda::types::DecidingStatus<BlockNumber>
     **/
    PalletReferendaDecidingStatus: {
        since: string;
        confirming: string;
    };
    /**
     * Lookup558: pallet_referenda::types::TrackInfo<Balance, Moment>
     **/
    PalletReferendaTrackInfo: {
        name: string;
        maxDeciding: string;
        decisionDeposit: string;
        preparePeriod: string;
        decisionPeriod: string;
        confirmPeriod: string;
        minEnactmentPeriod: string;
        minApproval: string;
        minSupport: string;
    };
    /**
     * Lookup559: pallet_referenda::types::Curve
     **/
    PalletReferendaCurve: {
        _enum: {
            LinearDecreasing: {
                length: string;
                floor: string;
                ceil: string;
            };
            SteppedDecreasing: {
                begin: string;
                end: string;
                step: string;
                period: string;
            };
            Reciprocal: {
                factor: string;
                xOffset: string;
                yOffset: string;
            };
        };
    };
    /**
     * Lookup562: pallet_referenda::pallet::Error<T, I>
     **/
    PalletReferendaError: {
        _enum: string[];
    };
    /**
     * Lookup563: pallet_whitelist::pallet::Error<T>
     **/
    PalletWhitelistError: {
        _enum: string[];
    };
    /**
     * Lookup565: cumulus_pallet_xcmp_queue::InboundChannelDetails
     **/
    CumulusPalletXcmpQueueInboundChannelDetails: {
        sender: string;
        state: string;
        messageMetadata: string;
    };
    /**
     * Lookup566: cumulus_pallet_xcmp_queue::InboundState
     **/
    CumulusPalletXcmpQueueInboundState: {
        _enum: string[];
    };
    /**
     * Lookup569: polkadot_parachain_primitives::primitives::XcmpMessageFormat
     **/
    PolkadotParachainPrimitivesPrimitivesXcmpMessageFormat: {
        _enum: string[];
    };
    /**
     * Lookup572: cumulus_pallet_xcmp_queue::OutboundChannelDetails
     **/
    CumulusPalletXcmpQueueOutboundChannelDetails: {
        recipient: string;
        state: string;
        signalsExist: string;
        firstIndex: string;
        lastIndex: string;
    };
    /**
     * Lookup573: cumulus_pallet_xcmp_queue::OutboundState
     **/
    CumulusPalletXcmpQueueOutboundState: {
        _enum: string[];
    };
    /**
     * Lookup575: cumulus_pallet_xcmp_queue::QueueConfigData
     **/
    CumulusPalletXcmpQueueQueueConfigData: {
        suspendThreshold: string;
        dropThreshold: string;
        resumeThreshold: string;
        thresholdWeight: string;
        weightRestrictDecay: string;
        xcmpMaxIndividualWeight: string;
    };
    /**
     * Lookup577: cumulus_pallet_xcmp_queue::pallet::Error<T>
     **/
    CumulusPalletXcmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup578: pallet_xcm::pallet::QueryStatus<BlockNumber>
     **/
    PalletXcmQueryStatus: {
        _enum: {
            Pending: {
                responder: string;
                maybeMatchQuerier: string;
                maybeNotify: string;
                timeout: string;
            };
            VersionNotifier: {
                origin: string;
                isActive: string;
            };
            Ready: {
                response: string;
                at: string;
            };
        };
    };
    /**
     * Lookup582: xcm::VersionedResponse
     **/
    XcmVersionedResponse: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            V2: string;
            V3: string;
        };
    };
    /**
     * Lookup588: pallet_xcm::pallet::VersionMigrationStage
     **/
    PalletXcmVersionMigrationStage: {
        _enum: {
            MigrateSupportedVersion: string;
            MigrateVersionNotifiers: string;
            NotifyCurrentTargets: string;
            MigrateAndNotifyOldTargets: string;
        };
    };
    /**
     * Lookup591: xcm::VersionedAssetId
     **/
    XcmVersionedAssetId: {
        _enum: {
            __Unused0: string;
            __Unused1: string;
            __Unused2: string;
            V3: string;
        };
    };
    /**
     * Lookup592: pallet_xcm::pallet::RemoteLockedFungibleRecord<ConsumerIdentifier, MaxConsumers>
     **/
    PalletXcmRemoteLockedFungibleRecord: {
        amount: string;
        owner: string;
        locker: string;
        consumers: string;
    };
    /**
     * Lookup599: pallet_xcm::pallet::Error<T>
     **/
    PalletXcmError: {
        _enum: string[];
    };
    /**
     * Lookup600: cumulus_pallet_xcm::pallet::Error<T>
     **/
    CumulusPalletXcmError: string;
    /**
     * Lookup601: cumulus_pallet_dmp_queue::ConfigData
     **/
    CumulusPalletDmpQueueConfigData: {
        maxIndividual: string;
    };
    /**
     * Lookup602: cumulus_pallet_dmp_queue::PageIndexData
     **/
    CumulusPalletDmpQueuePageIndexData: {
        beginUsed: string;
        endUsed: string;
        overweightCount: string;
    };
    /**
     * Lookup605: cumulus_pallet_dmp_queue::pallet::Error<T>
     **/
    CumulusPalletDmpQueueError: {
        _enum: string[];
    };
    /**
     * Lookup606: pallet_utility::pallet::Error<T>
     **/
    PalletUtilityError: {
        _enum: string[];
    };
    /**
     * Lookup609: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, tangle_kusama_runtime::OriginCaller, sp_core::crypto::AccountId32>
     **/
    PalletSchedulerScheduled: {
        maybeId: string;
        priority: string;
        call: string;
        maybePeriodic: string;
        origin: string;
    };
    /**
     * Lookup611: pallet_scheduler::pallet::Error<T>
     **/
    PalletSchedulerError: {
        _enum: string[];
    };
    /**
     * Lookup614: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, tangle_kusama_runtime::ProxyType, BlockNumber>
     **/
    PalletProxyProxyDefinition: {
        delegate: string;
        proxyType: string;
        delay: string;
    };
    /**
     * Lookup618: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
     **/
    PalletProxyAnnouncement: {
        real: string;
        callHash: string;
        height: string;
    };
    /**
     * Lookup620: pallet_proxy::pallet::Error<T>
     **/
    PalletProxyError: {
        _enum: string[];
    };
    /**
     * Lookup622: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
     **/
    PalletMultisigMultisig: {
        when: string;
        deposit: string;
        depositor: string;
        approvals: string;
    };
    /**
     * Lookup624: pallet_multisig::pallet::Error<T>
     **/
    PalletMultisigError: {
        _enum: string[];
    };
    /**
     * Lookup625: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::simple::IdentityInfo<FieldLimit>>
     **/
    PalletIdentityRegistration: {
        judgements: string;
        deposit: string;
        info: string;
    };
    /**
     * Lookup633: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32, pallet_identity::simple::IdentityField>
     **/
    PalletIdentityRegistrarInfo: {
        account: string;
        fee: string;
        fields: string;
    };
    /**
     * Lookup635: pallet_identity::pallet::Error<T>
     **/
    PalletIdentityError: {
        _enum: string[];
    };
    /**
     * Lookup636: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
     **/
    PalletTreasuryProposal: {
        proposer: string;
        value: string;
        beneficiary: string;
        bond: string;
    };
    /**
     * Lookup638: pallet_treasury::SpendStatus<AssetKind, AssetBalance, sp_core::crypto::AccountId32, BlockNumber, PaymentId>
     **/
    PalletTreasurySpendStatus: {
        assetKind: string;
        amount: string;
        beneficiary: string;
        validFrom: string;
        expireAt: string;
        status: string;
    };
    /**
     * Lookup639: pallet_treasury::PaymentState<Id>
     **/
    PalletTreasuryPaymentState: {
        _enum: {
            Pending: string;
            Attempted: {
                id: string;
            };
            Failed: string;
        };
    };
    /**
     * Lookup640: pallet_treasury::pallet::Error<T, I>
     **/
    PalletTreasuryError: {
        _enum: string[];
    };
    /**
     * Lookup641: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
     **/
    PalletBountiesBounty: {
        proposer: string;
        value: string;
        fee: string;
        curatorDeposit: string;
        bond: string;
        status: string;
    };
    /**
     * Lookup642: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
     **/
    PalletBountiesBountyStatus: {
        _enum: {
            Proposed: string;
            Approved: string;
            Funded: string;
            CuratorProposed: {
                curator: string;
            };
            Active: {
                curator: string;
                updateDue: string;
            };
            PendingPayout: {
                curator: string;
                beneficiary: string;
                unlockAt: string;
            };
        };
    };
    /**
     * Lookup644: pallet_bounties::pallet::Error<T, I>
     **/
    PalletBountiesError: {
        _enum: string[];
    };
    /**
     * Lookup645: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
     **/
    PalletTipsOpenTip: {
        reason: string;
        who: string;
        finder: string;
        deposit: string;
        closes: string;
        tips: string;
        findersFee: string;
    };
    /**
     * Lookup646: pallet_tips::pallet::Error<T, I>
     **/
    PalletTipsError: {
        _enum: string[];
    };
    /**
     * Lookup647: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
     **/
    PalletPreimageOldRequestStatus: {
        _enum: {
            Unrequested: {
                deposit: string;
                len: string;
            };
            Requested: {
                deposit: string;
                count: string;
                len: string;
            };
        };
    };
    /**
     * Lookup649: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D>>
     **/
    PalletPreimageRequestStatus: {
        _enum: {
            Unrequested: {
                ticket: string;
                len: string;
            };
            Requested: {
                maybeTicket: string;
                count: string;
                maybeLen: string;
            };
        };
    };
    /**
     * Lookup655: pallet_preimage::pallet::Error<T>
     **/
    PalletPreimageError: {
        _enum: string[];
    };
    /**
     * Lookup656: orml_xtokens::module::Error<T>
     **/
    OrmlXtokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup659: orml_tokens::BalanceLock<Balance>
     **/
    OrmlTokensBalanceLock: {
        id: string;
        amount: string;
    };
    /**
     * Lookup661: orml_tokens::AccountData<Balance>
     **/
    OrmlTokensAccountData: {
        free: string;
        reserved: string;
        frozen: string;
    };
    /**
     * Lookup663: orml_tokens::ReserveData<ReserveIdentifier, Balance>
     **/
    OrmlTokensReserveData: {
        id: string;
        amount: string;
    };
    /**
     * Lookup665: orml_tokens::module::Error<T>
     **/
    OrmlTokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup666: tangle_currencies::module::Error<T>
     **/
    TangleCurrenciesModuleError: {
        _enum: string[];
    };
    /**
     * Lookup669: orml_unknown_tokens::module::Error<T>
     **/
    OrmlUnknownTokensModuleError: {
        _enum: string[];
    };
    /**
     * Lookup670: orml_xcm::module::Error<T>
     **/
    OrmlXcmModuleError: {
        _enum: string[];
    };
    /**
     * Lookup677: zenlink_protocol::primitives::PairStatus<Balance, BlockNumber, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesPairStatus: {
        _enum: {
            Trading: string;
            Bootstrap: string;
            Disable: string;
        };
    };
    /**
     * Lookup678: zenlink_protocol::primitives::PairMetadata<Balance, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesPairMetadata: {
        pairAccount: string;
        totalSupply: string;
    };
    /**
     * Lookup679: zenlink_protocol::primitives::BootstrapParameter<Balance, BlockNumber, sp_core::crypto::AccountId32>
     **/
    ZenlinkProtocolPrimitivesBootstrapParameter: {
        targetSupply: string;
        capacitySupply: string;
        accumulatedSupply: string;
        endBlockNumber: string;
        pairAccount: string;
    };
    /**
     * Lookup682: zenlink_protocol::pallet::Error<T>
     **/
    ZenlinkProtocolError: {
        _enum: string[];
    };
    /**
     * Lookup683: merkle_distributor::MerkleMetadata<Balance, tangle_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
     **/
    MerkleDistributorMerkleMetadata: {
        merkleRoot: string;
        description: string;
        distributeCurrency: string;
        distributeAmount: string;
        distributeHolder: string;
        charged: string;
    };
    /**
     * Lookup686: merkle_distributor::pallet::Error<T>
     **/
    MerkleDistributorError: {
        _enum: string[];
    };
    /**
     * Lookup687: zenlink_stable_amm::primitives::Pool<PoolId, tangle_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesPool: {
        _enum: {
            Base: string;
            Meta: string;
        };
    };
    /**
     * Lookup688: zenlink_stable_amm::primitives::BasePool<tangle_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesBasePool: {
        currencyIds: string;
        lpCurrencyId: string;
        tokenMultipliers: string;
        balances: string;
        fee: string;
        adminFee: string;
        initialA: string;
        futureA: string;
        initialATime: string;
        futureATime: string;
        account: string;
        adminFeeReceiver: string;
        lpCurrencySymbol: string;
        lpCurrencyDecimal: string;
    };
    /**
     * Lookup689: zenlink_stable_amm::primitives::MetaPool<PoolId, tangle_primitives::currency::CurrencyId, sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
     **/
    ZenlinkStableAmmPrimitivesMetaPool: {
        basePoolId: string;
        baseVirtualPrice: string;
        baseCacheLastUpdated: string;
        baseCurrencies: string;
        info: string;
    };
    /**
     * Lookup690: zenlink_stable_amm::pallet::Error<T>
     **/
    ZenlinkStableAmmError: {
        _enum: string[];
    };
    /**
     * Lookup691: zenlink_swap_router::pallet::Error<T>
     **/
    ZenlinkSwapRouterError: {
        _enum: string[];
    };
    /**
     * Lookup693: tangle_token_issuer::pallet::Error<T>
     **/
    TangleTokenIssuerError: {
        _enum: string[];
    };
    /**
     * Lookup694: tangle_asset_registry::pallet::Error<T>
     **/
    TangleAssetRegistryError: {
        _enum: string[];
    };
    /**
     * Lookup698: tangle_primitives::RedeemType<sp_core::crypto::AccountId32>
     **/
    TanglePrimitivesRedeemType: {
        _enum: {
            Native: string;
            Astar: string;
            Moonbeam: string;
            Hydradx: string;
            Interlay: string;
            Manta: string;
        };
    };
    /**
     * Lookup704: tangle_lst_minting::pallet::Error<T>
     **/
    TangleLstMintingError: {
        _enum: string[];
    };
    /**
     * Lookup714: tangle_slp::pallet::Error<T>
     **/
    TangleSlpError: {
        _enum: string[];
    };
    /**
     * Lookup716: tangle_xcm_interface::pallet::Error<T>
     **/
    TangleXcmInterfaceError: {
        _enum: string[];
    };
    /**
     * Lookup718: tangle_slpx::types::EthereumCallConfiguration<BlockNumber>
     **/
    TangleSlpxEthereumCallConfiguration: {
        xcmFee: string;
        xcmWeight: string;
        period: string;
        lastBlock: string;
        contract: string;
    };
    /**
     * Lookup723: tangle_slpx::pallet::Error<T>
     **/
    TangleSlpxError: {
        _enum: string[];
    };
    /**
     * Lookup724: pallet_ranked_collective::MemberRecord
     **/
    PalletRankedCollectiveMemberRecord: {
        rank: string;
    };
    /**
     * Lookup728: pallet_ranked_collective::pallet::Error<T, I>
     **/
    PalletRankedCollectiveError: {
        _enum: string[];
    };
    /**
     * Lookup729: pallet_referenda::types::ReferendumInfo<TrackId, tangle_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumInfoRankedCollectiveTally: {
        _enum: {
            Ongoing: string;
            Approved: string;
            Rejected: string;
            Cancelled: string;
            TimedOut: string;
            Killed: string;
        };
    };
    /**
     * Lookup730: pallet_referenda::types::ReferendumStatus<TrackId, tangle_kusama_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<tangle_kusama_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
     **/
    PalletReferendaReferendumStatusRankedCollectiveTally: {
        track: string;
        origin: string;
        proposal: string;
        enactment: string;
        submitted: string;
        submissionDeposit: string;
        decisionDeposit: string;
        deciding: string;
        tally: string;
        inQueue: string;
        alarm: string;
    };
    /**
     * Lookup733: tangle_stable_asset::StableAssetPoolInfo<tangle_primitives::currency::CurrencyId, AtLeast64BitUnsigned, Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    TangleStableAssetStableAssetPoolInfo: {
        poolId: string;
        poolAsset: string;
        assets: string;
        precisions: string;
        mintFee: string;
        swapFee: string;
        redeemFee: string;
        totalSupply: string;
        a: string;
        aBlock: string;
        futureA: string;
        futureABlock: string;
        balances: string;
        feeRecipient: string;
        accountId: string;
        yieldRecipient: string;
        precision: string;
    };
    /**
     * Lookup735: tangle_stable_asset::pallet::Error<T>
     **/
    TangleStableAssetError: {
        _enum: string[];
    };
    /**
     * Lookup736: tangle_stable_pool::pallet::Error<T>
     **/
    TangleStablePoolError: {
        _enum: string[];
    };
    /**
     * Lookup737: tangle_lst_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
     **/
    TangleLstVotingVoteVoting: {
        _enum: {
            Casting: string;
            Delegating: string;
        };
    };
    /**
     * Lookup738: tangle_lst_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
     **/
    TangleLstVotingVoteCasting: {
        votes: string;
        delegations: string;
        prior: string;
    };
    /**
     * Lookup742: tangle_lst_voting::vote::PriorLock<BlockNumber, Balance>
     **/
    TangleLstVotingVotePriorLock: string;
    /**
     * Lookup743: tangle_lst_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
     **/
    TangleLstVotingVoteDelegating: {
        balance: string;
        target: string;
        conviction: string;
        delegations: string;
        prior: string;
    };
    /**
     * Lookup757: tangle_lst_voting::pallet::Error<T>
     **/
    TangleLstVotingError: {
        _enum: string[];
    };
    /**
     * Lookup758: orml_oracle::module::TimestampedValue<sp_arithmetic::fixed_point::FixedU128, Moment>
     **/
    OrmlOracleModuleTimestampedValue: {
        value: string;
        timestamp: string;
    };
    /**
     * Lookup759: orml_utilities::ordered_set::OrderedSet<sp_core::crypto::AccountId32, S>
     **/
    OrmlUtilitiesOrderedSet: string;
    /**
     * Lookup761: orml_oracle::module::Error<T, I>
     **/
    OrmlOracleModuleError: {
        _enum: string[];
    };
    /**
     * Lookup765: sp_runtime::MultiSignature
     **/
    SpRuntimeMultiSignature: {
        _enum: {
            Ed25519: string;
            Sr25519: string;
            Ecdsa: string;
        };
    };
    /**
     * Lookup766: sp_core::ed25519::Signature
     **/
    SpCoreEd25519Signature: string;
    /**
     * Lookup768: sp_core::sr25519::Signature
     **/
    SpCoreSr25519Signature: string;
    /**
     * Lookup769: sp_core::ecdsa::Signature
     **/
    SpCoreEcdsaSignature: string;
    /**
     * Lookup772: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
     **/
    FrameSystemExtensionsCheckNonZeroSender: string;
    /**
     * Lookup773: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
     **/
    FrameSystemExtensionsCheckSpecVersion: string;
    /**
     * Lookup774: frame_system::extensions::check_tx_version::CheckTxVersion<T>
     **/
    FrameSystemExtensionsCheckTxVersion: string;
    /**
     * Lookup775: frame_system::extensions::check_genesis::CheckGenesis<T>
     **/
    FrameSystemExtensionsCheckGenesis: string;
    /**
     * Lookup778: frame_system::extensions::check_nonce::CheckNonce<T>
     **/
    FrameSystemExtensionsCheckNonce: string;
    /**
     * Lookup779: frame_system::extensions::check_weight::CheckWeight<T>
     **/
    FrameSystemExtensionsCheckWeight: string;
    /**
     * Lookup780: pallet_transaction_payment::ChargeTransactionPayment<T>
     **/
    PalletTransactionPaymentChargeTransactionPayment: string;
    /**
     * Lookup781: tangle_kusama_runtime::Runtime
     **/
    TangleKusamaRuntimeRuntime: string;
};
export default _default;
