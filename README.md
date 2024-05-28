<a href="https://tangle.finance"><img align="center" src="./assets/Tangle Banner 4.png" alt="tangle Banner"/></a>

<h1 align="left">Tangle Restaking</a></h1>

<p align="left">
Welcome,

tangle is a Web3 derivatives protocol that provides decentralized cross-chain liquidity for staked assets. By leveraging on the cross-consensus message ([XCM](https://wiki.polkadot.network/docs/learn-xcm)) it can provide cross-chain liquid staking services for multiple chains.

[Our mission](https://bifrost-finance.notion.site/7df6abf2acb54b398df75230e157c7da?v=02ecfe941c5242c3b5f8c77654512b80) is to provide standardized cross-chain interest-bearing derivatives for [Polkadot](https://polkadot.network) relay chains, parachains, and heterogeneous chains bridged with Polkadot.


## Install Rust and required tools

```bash
curl https://sh.rustup.rs -sSf | sh
make init
```

## Build binary

```bash
cargo build -p tangle-cli
```

## Run local testnet with zombienet

### Install `zombienet`

Refer https://github.com/paritytech/zombienet for zombienet installation guide.

### Build polkadot

```bash
# replace version with your target polkadot version
cargo install --git https://github.com/paritytech/polkadot --tag <version> polkadot --locked
```

### Launch Polkadot and the parachain

```bash
<PATH_TO_ZOMBIENET> spawn --provider native ./scripts/zombienet.toml 
```

It will take about 1-2 minutes for the parachain to start producing blocks.

You can use the `Direct Link` in the zombienet output to access the chains