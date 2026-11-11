# 2026 Upgrade Notes

## Goal

Bring this project back to a working state on modern Node.js and npm while preserving the original static site behavior as much as possible.

## Root cause identified

The initial install fails because the project depends on very old tooling:

- `node-sass@4` / `libsass` is no longer compatible with current Node.js releases
- `node-sass` also requires an old Python 2 toolchain during native build steps
- The repo was last maintained years ago, before modern Node/npm tooling became the default

This is why `npm install` fails on a modern machine before any app code is even built.

## Changes tracked

### 1) Modernize the Sass toolchain

- Replaced `node-sass` with `sass`
- Updated the `scss` script to use Dart Sass instead of the deprecated LibSass pipeline
- Updated `build:css` to use sequencing instead of the old parallel background behavior that can be flaky on modern shells

This keeps the site styling compiling while removing the unsupported native binary dependency.

### 2) Modernize PostCSS and autoprefixing

- Updated `autoprefixer` and `postcss` packages to versions compatible with current Node
- Adjusted `autoprefixer` invocation to the modern CLI pattern

This maintains vendor prefix generation without relying on legacy PostCSS behavior.

### 3) Update the JS build stack to current npm-compatible versions

- Replaced legacy tooling with versions that support current Node releases
- Kept the project structure and custom scripts intact to avoid breaking the old build flow more than necessary

### 4) Preserve the static site architecture

- Kept the existing build script conventions (`pug-compile`, `create-data-model`, etc.)
- Avoided making broad application logic changes before the dependency compatibility issue was fixed

## Risks to watch

- Some older packages in the project may still rely on deprecated APIs or older module assumptions
- The build may still fail if scripts assume outdated Node globals or shell behavior
- CSS or JS output can change slightly when moving from old toolchains to modern ones, so generated assets should be reviewed after the build succeeds
- Legacy plugin behavior may require additional package upgrades or small code adjustments

## Recommended next validation steps

1. Run `npm install` successfully with the updated dependency set
2. Run `npm run build`
3. Open the generated site in the browser to verify no layout or runtime regressions
4. Review any warnings from the Sass, PostCSS, or Pug toolchains and fix cautiously
5. If needed, add a lockfile and document the supported Node version in the project

## Notes

This file is intended to be the change log for the 2026 modernization pass, so future edits should append brief updates here rather than rewriting prior history.
