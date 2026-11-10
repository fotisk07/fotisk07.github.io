default:
    @just --list

# Fetch the pinned theme after cloning.
install:
    git submodule update --init --recursive

# Preview at localhost:1111. Stop with Ctrl+C.
dev:
    zola serve

# Build the static site into public/.
build:
    zola build
