<h1 align="center">Tangle-Restaking-Subxt</h1>

<p align="center">
    <strong>Rust interface to interact with tangle restaking parachain node via RPC</strong>
    <br />
</p>

<br />

### Downloading metadata from a Substrate node

Use the [`subxt-cli`](https://lib.rs/crates/subxt-cli) tool to download the metadata for your target runtime from a node.

1. Install:
```bash
cargo install subxt-cli@0.34.0 --force
```

2. To Save the metadata of `tangle-restaking` parachain node:
Run the release build of the `tangle-restaking` parachain node, then on another terminal run:

```bash
subxt metadata -f bytes > ./metadata/tangle-kasuma-runtime.scale
```

3. Generating the subxt code from the metadata:

```bash
subxt codegen --file metadata/tangle-kasuma-runtime.scale --derive Clone --derive Eq --derive PartialEq | rustfmt --edition=2018 --emit=stdout > src/tangle_kasuma_runtime.rs
```


