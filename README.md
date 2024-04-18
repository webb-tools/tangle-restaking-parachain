<div align="center">
<a href="https://www.tangle.tools/">
    
![Alt text](<assets/Tangle dApp OG.png>)
  </a>
  </div>
<h1 align="left"> The Tangle Network </h1>
<p align="left">
    <strong>An parachain for restaking for the DOT ecosystem. </strong>
</p>

<div align="left" >

[![Twitter](https://img.shields.io/twitter/follow/webbprotocol.svg?style=flat-square&label=Twitter&color=1DA1F2)](https://twitter.com/intent/user?screen_name=tangle_network)
[![Telegram](https://img.shields.io/badge/Telegram-gray?logo=telegram)](https://t.me/webbprotocol)
[![Discord](https://img.shields.io/discord/833784453251596298.svg?style=flat-square&label=Discord&logo=discord)](https://discord.gg/cv8EfJu3Tn)

</div>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#start"> Getting Started</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
    <li><a href="#contribute">Contributing</a></li>
    <li><a href="#license">License</a></li>
  </ul>  
</details>

<h1 id="start"> Getting Started </h1>
Tangle's Restaking Parachain is a Polkadot parachain node specifically designed for restaking and staking assets within the DOT ecosystem. Its primary function is to secure Tangle's Multi-Party Computation (MPC) and offchain compute infrastructure, providing a robust and secure platform for operations within the Tangle Network.

If you would like to familiarize yourself with Tangle Network check out following repo and docs:

- [Webb Gadgets](https://github.com/webb-tools/gadgets)
- [Tangle Docs](https://docs.tangle.tools/docs)
- [Tangle Website](https://tangle.tools/)

<h2 id="prerequisites"> Prerequisites</h2>

This guide uses <https://rustup.rs> installer and the `rustup` tool to manage the Rust toolchain.

First install and configure `rustup`:

```bash
# Install
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
# Configure
source ~/.cargo/env
```

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/webb-tools/tangle-restaking-parachain.git
   ```
2. Compile the node:
   ```sh
   cargo build --release
   ```

<h2 id="troubleshooting"> Troubleshooting </h2>

The linking phase may fail due to not finding libgmp (i.e., "could not find library -lgmp") when building on apple silicon. To fix this problem, run:

```bash
brew install gmp
# make sure to run the commands below each time when starting a new env, or, append them to .zshrc
export LIBRARY_PATH=$LIBRARY_PATH:/opt/homebrew/lib
export INCLUDE_PATH=$INCLUDE_PATH:/opt/homebrew/include
```

<h2 id="contribute"> Contributing </h2>

Interested in contributing to the Tangle Network? Thank you so much for your interest! We are always appreciative for contributions from the open-source community!

If you have a contribution in mind, please check out our [Contribution Guide](./.github/CONTRIBUTING.md) for information on how to do so. We are excited for your first contribution!

<h2 id="license"> License </h2>

Licensed under <a href="LICENSE">GNU General Public License v3.0</a>.

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in this crate by you, as defined in the GNU General Public License v3.0 license, shall be licensed as above, without any additional terms or conditions.
