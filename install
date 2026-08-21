#!/bin/sh
set -eu

repo="${NIFT_GITHUB_REPOSITORY:-nift-dev/nift}"
install_dir="${NIFT_INSTALL_DIR:-$HOME/.local/bin}"
version="${NIFT_VERSION:-}"

need() {
    command -v "$1" >/dev/null 2>&1 || { echo "nift installer: required command not found: $1" >&2; exit 1; }
}
need curl
need tar
need uname
need mktemp

if [ -z "$version" ]; then
    latest_url="$(curl -fsSL -o /dev/null -w '%{url_effective}' "https://github.com/$repo/releases/latest")"
    version="${latest_url##*/v}"
    case "$version" in
        ''|*[!0-9A-Za-z._-]*) echo "nift installer: could not determine latest release version" >&2; exit 1 ;;
    esac
fi
version="${version#v}"

os="$(uname -s)"
arch="$(uname -m)"
case "$os/$arch" in
    Linux/x86_64|Linux/amd64) platform="linux-x86_64" ;;
    Darwin/arm64|Darwin/aarch64) platform="macos-arm64" ;;
    Darwin/x86_64|Darwin/amd64) platform="macos-x86_64" ;;
    *) echo "nift installer: unsupported platform: $os/$arch" >&2; exit 1 ;;
esac

root="nift-$version-$platform"
archive="$root.tar.gz"
base="${NIFT_RELEASE_BASE:-https://github.com/$repo/releases/download/v$version}"
tmp="$(mktemp -d "${TMPDIR:-/tmp}/nift-install.XXXXXX")"
trap 'rm -rf "$tmp"' EXIT HUP INT TERM

curl -fsSL "$base/$archive" -o "$tmp/$archive"
curl -fsSL "$base/SHA256SUMS" -o "$tmp/SHA256SUMS"
expected="$(awk -v file="$archive" '$2 == file { print $1; exit }' "$tmp/SHA256SUMS")"
[ -n "$expected" ] || { echo "nift installer: checksum for $archive not found" >&2; exit 1; }

if command -v sha256sum >/dev/null 2>&1; then
    actual="$(sha256sum "$tmp/$archive" | awk '{print $1}')"
elif command -v shasum >/dev/null 2>&1; then
    actual="$(shasum -a 256 "$tmp/$archive" | awk '{print $1}')"
else
    echo "nift installer: sha256sum or shasum is required to verify the release" >&2
    exit 1
fi
[ "$actual" = "$expected" ] || { echo "nift installer: checksum verification failed for $archive" >&2; exit 1; }

tar -xzf "$tmp/$archive" -C "$tmp"
[ -f "$tmp/$root/nift" ] || { echo "nift installer: release archive did not contain nift" >&2; exit 1; }
mkdir -p "$install_dir"
cp "$tmp/$root/nift" "$install_dir/nift"
chmod 0755 "$install_dir/nift"

printf 'Installed Nift %s to %s/nift\n' "$version" "$install_dir"
case ":${PATH:-}:" in
    *":$install_dir:"*) ;;
    *) printf 'Add %s to PATH to run nift from any directory.\n' "$install_dir" ;;
esac
