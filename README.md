<table>
<tr>
<td>
<img src="https://github.com/TilePad/tilepad-desktop/raw/main/assets/tilepad-logo.svg" width="150px">
</td>
</tr>
</table>

# Tilepad + JS Plugin

This template provides a minimal template for building a **TilePad** plugin using the JavaScript language.

## Getting started

For help with getting started check out [Getting Started](https://tilepad.pages.dev/plugins/getting-started/)

## Included in this template

- Basic rollup configuration
- Basic counter example project
  - Tile actions for increasing and decreasing a shared counter
  - Inspector UI for choosing the "amount" of increasing / decreasing per tile
- CI for building and bundling releases

## Creating a release

Create a new release tag:

```sh
git tag "0.1.0"
```

Push the release tag to github:

```sh
git push --tags
```

Your project will be built and bundled in CI on github, after this is complete you will find a draft
release under Releases containing the .tilepadPlugin file
