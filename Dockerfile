# Copyright (C) Liebi Technologies PTE. LTD.
# This file is part of tangle.

# tangle is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# tangle is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.

# You should have received a copy of the GNU General Public License
# along with tangle.  If not, see <http:#www.gnu.org/licenses/>.

# syntax=docker/dockerfile:1
FROM rust:buster as builder

RUN apt-get update && apt-get install time cmake clang libclang-dev llvm protobuf-compiler -y
RUN rustup toolchain install nightly-2023-05-22
RUN rustup target add wasm32-unknown-unknown --toolchain nightly-2023-05-22

WORKDIR /app
COPY . /app

RUN export PATH="$PATH:$HOME/.cargo/bin" && \
	make production-release

# ===== SECOND STAGE ======

FROM ubuntu:20.04

RUN rm -rf /usr/share  && \
  rm -rf /usr/lib/python* && \
  useradd -m -u 1000 -U -s /bin/sh -d /tangle tangle && \
  chown -R tangle:tangle /tangle && \
  mkdir -p /tangle/.local/share && \
  mkdir /data && \
  chown -R tangle:tangle /data && \
  ln -s /data /tangle/.local/share/tangle && \
  mkdir /spec && \
  chown -R tangle:tangle /spec && \
  ln -s /spec /tangle/.local/share/spec

USER tangle
COPY --from=builder /app/target/production/tangle /usr/local/bin
COPY ./node/service/res/tangle-kusama.json /spec/tangle.json
COPY ./node/service/res/tangle-kusama.json /spec
COPY ./node/service/res/tangle-polkadot.json /spec

# checks
RUN ldd /usr/local/bin/tangle && \
  /usr/local/bin/tangle --version

USER tangle
EXPOSE 30333 9933 9944

VOLUME ["/data"]
VOLUME ["/spec"]

ENTRYPOINT ["/usr/local/bin/tangle"]
