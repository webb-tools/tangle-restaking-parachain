<a href="https://tangle.finance"><img align="center" src="./assets/Tangle Banner 4.png" alt="tangle Banner"/></a>

<h1 align="left">Tangle Restaking</a></h1>

<p align="left">
Welcome,

tangle is a Web3 derivatives protocol that provides decentralized cross-chain liquidity for staked assets. By leveraging on the cross-consensus message ([XCM](https://wiki.polkadot.network/docs/learn-xcm)) it can provide cross-chain liquid staking services for multiple chains.

[Our mission](https://bifrost-finance.notion.site/7df6abf2acb54b398df75230e157c7da?v=02ecfe941c5242c3b5f8c77654512b80) is to provide standardized cross-chain interest-bearing derivatives for [Polkadot](https://polkadot.network) relay chains, parachains, and heterogeneous chains bridged with Polkadot.

👉 _Discover the tangle at [tangle.finance](https://tangle.finance/)._  
👉 _Learn to use the tangle with our [wiki](https://wiki.tangle.finance/)._

</p>

<div align="left" >

[![master-build](https://img.shields.io/github/actions/workflow/status/bifrost-finance/tangle/ci-build.yml?logo=Buddy)](https://github.com/bifrost-finance/tangle/actions/workflows/ci-build.yml)[![Codacy Badge](https://app.codacy.com/project/badge/Grade/acec53276777415593c2b02b2200f62e)](https://www.codacy.com/gh/bifrost-finance/tangle?utm_source=github.com&utm_medium=referral&utm_content=bifrost-finance/tangle&utm_campaign=Badge_Grade)[![Substrate Version](https://img.shields.io/badge/Substrate-latest-brightgreen?logo=Parity%20Substrate)](https://github.com/paritytech/substrate)[![License](https://img.shields.io/github/license/bifrost-finance/tangle?color=blue)](https://github.com/bifrost-finance/tangle/blob/master/LICENSE)[![Dapp](https://img.shields.io/badge/Dapp-5c5c5c?logo=Icinga)](https://tangle.app)[![Analytics](https://img.shields.io/badge/-Analytics-5c5c5c?logo=Google%20Analytics)](https://stats.tangle.app)[![Discord](https://img.shields.io/badge/-Discord-5c5c5c?logo=Discord)](https://discord.gg/bifrost-finance)[![Twitter](https://img.shields.io/badge/-Twitter-5c5c5c?logo=Twitter)](https://twitter.com/tangleFinance)
</div>

## Get Build Help

```sh
make help
```

## Install Rust and required tools

```bash
curl https://sh.rustup.rs -sSf | sh
make init
```

## Build binary

```bash
make build-all-release
```

## Format code

```sh
make format
```

## Lint code

```sh
make clippy
```

## Testing

```bash
make test-all
```

## Generate runtime weights

if runtime logic change we may do the benchmarking to regenerate WeightInfo for dispatch calls

```bash
make generate-all-weights
```

## Testing runtime migration

If modify the storage, should test the data migration before production upgrade.

```bash
# tangle kusama
make try-kusama-runtime-upgrade

# tangle polkadot
make try-polkadot-runtime-upgrade
```

## Run development chain

```bash
make run-dev
```

## Run local testnet with polkadot-launch

### Install `polkadot-launch`

```bash
yarn global add polkadot-launch
cd -
```

### Build polkadot

```bash
# replace version with your target polkadot version
cargo install --git https://github.com/paritytech/polkadot --tag <version> polkadot --locked
```

### Launch Polkadot and the parachain

```bash
cd -
polkadot-launch ./scripts/tangle-launch.json
```

It will take about 1-2 minutes for the parachain to start producing blocks.

## Run local testnet with parachain-launch

### Install `parachain-launch`

```sh
yarn global add @open-web3/parachain-launch
```

### Generate docker files

```sh
parachain-launch generate --config=scripts/tangle-docker-launch.yml --yes
```

It will pull images and generate required docker files in a folder called `output` in your current working directory

### Start relaychain and parachain

To start the nodes, navigate to the output folder that the generated docker scripts in and start containers:

```sh
cd ./output
docker-compose up -d --build
```

## Run full node

### Create `tangle-fullnode` directory, generate `node-key` and get `tangle.json`

```sh
mkdir -p ~/node-key
subkey generate-node-key --file ~/node-key/tangle.key
```

### Start full node

Replace your-fullnode-name

```sh
docker pull tanglenetwork/tangle:latest
docker run -d \
-v ~/node-key:/node-key \
-p 9944:9944 \
-p 9933:9933 \
-p 30333:30333 \
tanglenetwork/tangle:latest \
  --name your-fullnode-name \
  --base-path "/data" \
  --node-key-file "/node-key/tangle.key" \
  --chain "/spec/tangle.json" \
  --pruning=archive \
  --rpc-external \
  --ws-external \
  --rpc-cors all \
  --trie-cache-size 0 \
  --execution wasm
```

### snapshot

There are also some snapshots you can use to quickly get started, these are provided by the community.

-   Pre-req .

    zstd and aria2

    ```sh

    sudo apt install zstd
    sudo apt install aria2
    ```

#### tangle-kusama snapshots

-   relay-chain data

```sh
# download dict
wget https://snapshot-1258776962.cos.ap-hongkong.myqcloud.com/tangle-kusama/relay.dict

# download zst data
aria2c -x10 https://snapshot-1258776962.cos.ap-hongkong.myqcloud.com/tangle-kusama/relay.tar.zst

# decompress: node is basepath, you can replace any dicrectory you like
mkdir node
tar -I 'zstd -vd -T0 -D relay.dict' -xvf relay.tar.zst -C node/.
```

-   parachain data

```sh
wget https://snapshot-1258776962.cos.ap-hongkong.myqcloud.com/tangle-kusama/para.dict
aria2c -x10  https://snapshot-1258776962.cos.ap-hongkong.myqcloud.com/tangle-kusama/para.tar.zst

tar -I 'zstd -vd -T0 -D para.dict' -xvf para.tar.zst -C node/.
```

#### tangle-polkadot snapshots

link:

-   [relay chain dict](https://snapshot-1258776962.cos.ap-hongkong.myqcloud.com/tangle-polkadot/relay.dict)
-   [relay chain zst data](https://snapshot-1258776962.cos.ap-hongkong.myqcloud.com/tangle-polkadot/relay.tar.zst)

-   [para chain dict](https://snapshot-1258776962.cos.ap-hongkong.myqcloud.com/tangle-polkadot/para.dict)
-   [para chain zst data](https://snapshot-1258776962.cos.ap-hongkong.myqcloud.com/tangle-polkadot/para.tar.zst)
