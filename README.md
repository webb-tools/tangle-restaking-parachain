<a href="https://tangle.finance"><img align="center" src="./assets/Tangle Banner 4.png" alt="tangle Banner"/></a>

<h1 align="left">Tangle Parachain</a></h1>

<p align="left">
Tangle's Parachain is a liquid staking system built using [Bifrost's liquid staking modules.](https://github.com/bifrost-finance/bifrost/tree/develop/pallets) We leverage the liquid staking primarily for [Tangle's restaking infrastructure](https://github.com/webb-tools/tangle), rather than DeFi, as our main intention of creating liquid staking tokens in the Polkadot/Kusama ecosystem. The liquid staking system allows users to bond and nominate their chosen validators (or use programmatic defaults) while minting a liquid staked token representative of their nominations.

Tangle's Parachain allows easy access to Polkadot liquidity for augmenting the security of Tangle's restaking infrastructure on Tangle mainnet. By minting liquid staked assets, users gain opportunities to secure restaking services, specifically [Blueprints](https://docs.tangle.tools/developers/blueprints), deployed on Tangle.

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

You can get started quickly by using the provided `Dockerfile.testnet` file to launch a local testnet using `zombienet`.

```bash
docker build -f Dockerfile.testnet -t tangle-restaking-parachain .

# Run the Docker container with the ports published to the host.
docker run -it \
  -p 30334:30334 -p 9933:9933 -p 9615:9615 \
  -p 30335:30335 -p 9934:9934 -p 9616:9616 \
  -p 30336:30336 -p 9935:9935 -p 9617:9617 \
  -p 30337:30337 -p 9936:9936 -p 9618:9618 \
  tangle-restaking-parachain
```

Alternatively, follow the instructions below to install `zombienet` and `polkadot` binaries on your local machine.

### 1. Install `zombienet`

Download the `zombienet` binary and add it to your path for global access from their [release page](https://github.com/paritytech/zombienet/releases).

If you're using curl, here's an example of how you can accomplish this:

```bash
curl -L -o /usr/local/bin/zombienet https://github.com/paritytech/zombienet/releases/download/v1.3.105/zombienet-linux-x64
chmod +x /usr/local/bin/zombienet # Mark the binary as executable.
```

Verify that `zombienet` is installed correctly by running:

```bash
zombienet version
```

For more information, please refer to [zombienet's installation guide](https://paritytech.github.io/zombienet/install.html).

### 2. Install or build Polkadot

#### Install Polkadot binaries using `zombienet` (recommended)

```bash
zombienet setup polkadot polkadot-launch
```

#### Or build Polkadot and install it using cargo

Note that this will take a while to build, given the size of the Polkadot codebase. [View available tags/versions here](https://github.com/paritytech/polkadot-sdk/tags).

```bash
# replace version with your target polkadot version
cargo install --git https://github.com/paritytech/polkadot-sdk --tag <version> polkadot --locked
```

#### Verify that the Polkadot binary is installed correctly by running:

```bash
polkadot --version
```

### 3. Launch Polkadot and the parachain

```bash
# Make sure you are in the parachain directory.
cd <path-to-tangle-parachain>

# Start the parachain.
zombienet --provider native spawn ./scripts/zombienet.toml
```

It will take about 1-2 minutes for the parachain to start producing blocks.

You can use the `Direct Link` in the zombienet output to access the chains.
