#!/bin/sh
set -e

case $(uname -s) in
Darwin) target="x86_64-apple-darwin" ;;
*) target="x86_64-unknown-linux-gnu" ;;
esac

if [ $(uname -m) != "x86_64" ]; then
	echo "[dprint]: Unsupported architecture $(uname -m). Only x64 binaries are available."
	exit 1
fi

dprint_uri="https://github.com/dprint/dprint/releases/download/${1}/dprint-${target}.zip"
exe="dprint"

# download and install
curl --fail --location --progress-bar --output "$exe.zip" "$dprint_uri"
unzip -o "$exe.zip"
chmod +x "$exe"
rm "$exe.zip"
