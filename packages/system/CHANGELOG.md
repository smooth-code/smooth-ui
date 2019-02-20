# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [9.0.2](https://github.com/smooth-code/smooth-ui/compare/v9.0.1...v9.0.2) (2019-02-20)

**Note:** Version bump only for package @smooth-ui/system





## [9.0.1](https://github.com/smooth-code/smooth-ui/compare/v9.0.0...v9.0.1) (2019-02-04)

**Note:** Version bump only for package @smooth-ui/system





# [9.0.0](https://github.com/smooth-code/smooth-ui/compare/v8.1.0...v9.0.0) (2019-02-04)


### Features

* simplify core & remove theme dependency ([cec1029](https://github.com/smooth-code/smooth-ui/commit/cec1029))


### BREAKING CHANGES

* - `prop` utility has been removed
- Undocumented utilities are no longer exported
- `controlFocus` has been renamed `baseFocus`, `controlFocus` is only
for controls (when control prop is `true`)
- `mixin` function is no longer available, also mixins have changed

**Mixins:**

Previously mixins were called using `mixin` helper:

```js
import { styled, mixin } from '@smooth-ui/core-sc'

const Styled = styled.div`
  color: ${mixin('colorLevel', 'red', 5)};
`
```

All mixins are now exported:

```js
import { styled, colorLevel } from '@smooth-ui/core-sc'

const Styled = styled.div`
  color: ${colorLevel('red', 5)};
`
```

**Theme**

Theme is no longer required, Smooth UI will work well without theme and
you can override only needed properties without having to load the
entire theme.

The benefit from that approach is that code splitting is fully
efficient, if you use only one component in Smooth UI you will load only
theme primitives of this component.

The size of a result bundle that is using only a `Button`:

```
 202K  bundle-smooth-ui-v8.js
 194K  bundle-smooth-ui-v9.js
  65K  bundle-smooth-ui-v8.js.gz
  63K  bundle-smooth-ui-v9.js.gz
```

As you can see the bundle has been reduced of 8K (no gzip) and of 2K
(gzip).





# [8.1.0](https://github.com/smooth-code/smooth-ui/compare/v8.0.1...v8.1.0) (2019-01-22)

**Note:** Version bump only for package @smooth-ui/system





## [8.0.1](https://github.com/smooth-code/smooth-ui/compare/v8.0.0...v8.0.1) (2019-01-17)


### Bug Fixes

* **system:** fix issue with space utilities ([#97](https://github.com/smooth-code/smooth-ui/issues/97)) ([192a3aa](https://github.com/smooth-code/smooth-ui/commit/192a3aa))





# [8.0.0](https://github.com/smooth-code/smooth-ui/compare/v7.1.1...v8.0.0) (2019-01-16)


### Features

* support emotion 10 & remove hacks ([#93](https://github.com/smooth-code/smooth-ui/issues/93)) ([d311640](https://github.com/smooth-code/smooth-ui/commit/d311640))
* **system:** add textTransform ([753eecd](https://github.com/smooth-code/smooth-ui/commit/753eecd))


### BREAKING CHANGES

* `OriginalComponent.withComponent(NewComponent)` is replaced by `uiAs(OriginalComponent, NewComponent)`

`as={NewComponent}` is replaced by `uiAs={NewComponent}`

`globalStyle()` is now replaced by `Normalize` component
