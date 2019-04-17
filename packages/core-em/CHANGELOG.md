# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [10.0.7](https://github.com/smooth-code/smooth-ui/compare/v10.0.6...v10.0.7) (2019-04-17)

**Note:** Version bump only for package @smooth-ui/core-em





## [10.0.6](https://github.com/smooth-code/smooth-ui/compare/v10.0.5...v10.0.6) (2019-04-09)

**Note:** Version bump only for package @smooth-ui/core-em





## [10.0.5](https://github.com/smooth-code/smooth-ui/compare/v10.0.4...v10.0.5) (2019-04-09)

**Note:** Version bump only for package @smooth-ui/core-em





## [10.0.4](https://github.com/smooth-code/smooth-ui/compare/v10.0.3...v10.0.4) (2019-04-05)

**Note:** Version bump only for package @smooth-ui/core-em





## [10.0.3](https://github.com/smooth-code/smooth-ui/compare/v10.0.2...v10.0.3) (2019-03-29)

**Note:** Version bump only for package @smooth-ui/core-em





## [10.0.2](https://github.com/smooth-code/smooth-ui/compare/v10.0.1...v10.0.2) (2019-03-21)

**Note:** Version bump only for package @smooth-ui/core-em





## [10.0.1](https://github.com/smooth-code/smooth-ui/compare/v10.0.0...v10.0.1) (2019-03-21)

**Note:** Version bump only for package @smooth-ui/core-em





# [10.0.0](https://github.com/smooth-code/smooth-ui/compare/v9.1.0...v10.0.0) (2019-03-20)


### Features

* popover, tooltips, responsive grid, hooks ([#122](https://github.com/smooth-code/smooth-ui/issues/122)) ([7bc0b8c](https://github.com/smooth-code/smooth-ui/commit/7bc0b8c))


### BREAKING CHANGES

* - React v16.8+ is now required (hooks inside)
- Grid, Col and Row `gutter` prop is now based on system, **be careful**!
- Toggler now returns an array `[toggled, onToggle]` instead of an object





# [9.1.0](https://github.com/smooth-code/smooth-ui/compare/v9.0.2...v9.1.0) (2019-03-07)

**Note:** Version bump only for package @smooth-ui/core-em





## [9.0.2](https://github.com/smooth-code/smooth-ui/compare/v9.0.1...v9.0.2) (2019-02-20)

**Note:** Version bump only for package @smooth-ui/core-em





## [9.0.1](https://github.com/smooth-code/smooth-ui/compare/v9.0.0...v9.0.1) (2019-02-04)

**Note:** Version bump only for package @smooth-ui/core-em





# [9.0.0](https://github.com/smooth-code/smooth-ui/compare/v8.1.0...v9.0.0) (2019-02-04)


### Bug Fixes

* **types:** fix TypeScript definitions ([#108](https://github.com/smooth-code/smooth-ui/issues/108)) ([87eda0b](https://github.com/smooth-code/smooth-ui/commit/87eda0b))


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


### Features

* add scroll-lock to modals, fixes [#25](https://github.com/smooth-code/smooth-ui/issues/25) ([#103](https://github.com/smooth-code/smooth-ui/issues/103)) ([23f35dd](https://github.com/smooth-code/smooth-ui/commit/23f35dd))





## [8.0.1](https://github.com/smooth-code/smooth-ui/compare/v8.0.0...v8.0.1) (2019-01-17)

**Note:** Version bump only for package @smooth-ui/core-em





# [8.0.0](https://github.com/smooth-code/smooth-ui/compare/v7.1.1...v8.0.0) (2019-01-16)


### Features

* support emotion 10 & remove hacks ([#93](https://github.com/smooth-code/smooth-ui/issues/93)) ([d311640](https://github.com/smooth-code/smooth-ui/commit/d311640))


### BREAKING CHANGES

* `OriginalComponent.withComponent(NewComponent)` is replaced by `uiAs(OriginalComponent, NewComponent)`

`as={NewComponent}` is replaced by `uiAs={NewComponent}`

`globalStyle()` is now replaced by `Normalize` component





## [7.1.1](https://github.com/smooth-code/smooth-ui/compare/v7.1.0...v7.1.1) (2019-01-11)

**Note:** Version bump only for package @smooth-ui/core-em

# [7.1.0](https://github.com/smooth-code/smooth-ui/compare/v7.0.5...v7.1.0) (2019-01-07)

### Features

- add TypeScript definitions ([#87](https://github.com/smooth-code/smooth-ui/issues/87)) ([ab8c033](https://github.com/smooth-code/smooth-ui/commit/ab8c033))

## [7.0.5](https://github.com/smooth-code/smooth-ui/compare/v7.0.4...v7.0.5) (2018-11-11)

**Note:** Version bump only for package @smooth-ui/core-em

## [7.0.4](https://github.com/smooth-code/smooth-ui/compare/v7.0.3...v7.0.4) (2018-11-01)

**Note:** Version bump only for package @smooth-ui/core-em

## [7.0.3](https://github.com/smooth-code/smooth-ui/compare/v7.0.2...v7.0.3) (2018-10-24)

### Bug Fixes

- **modals:** replace focus-trap by focus-lock ([#69](https://github.com/smooth-code/smooth-ui/issues/69)) ([77872db](https://github.com/smooth-code/smooth-ui/commit/77872db))

## [7.0.2](https://github.com/smooth-code/smooth-ui/compare/v7.0.1...v7.0.2) (2018-10-23)

### Bug Fixes

- **sc:** fix withComponent API ([#68](https://github.com/smooth-code/smooth-ui/issues/68)) ([0f59029](https://github.com/smooth-code/smooth-ui/commit/0f59029))

## [7.0.1](https://github.com/smooth-code/smooth-ui/compare/v7.0.0...v7.0.1) (2018-10-19)

**Note:** Version bump only for package @smooth-ui/core-em

# [7.0.0](https://github.com/smooth-code/smooth-ui/compare/v6.0.2...v7.0.0) (2018-10-18)

### Features

- make modals accessible ([#65](https://github.com/smooth-code/smooth-ui/issues/65)) ([e37c708](https://github.com/smooth-code/smooth-ui/commit/e37c708)), closes [#31](https://github.com/smooth-code/smooth-ui/issues/31) [#26](https://github.com/smooth-code/smooth-ui/issues/26) [#25](https://github.com/smooth-code/smooth-ui/issues/25)

### BREAKING CHANGES

- "persistent" prop has been removed from Modal, Modal are now
  non-persistent.

"sui-modal-backdrop" has been removed, it is now "sui-modal".

## [6.0.2](https://github.com/smooth-code/smooth-ui/compare/v6.0.1...v6.0.2) (2018-10-17)

**Note:** Version bump only for package @smooth-ui/core-em

## [6.0.1](https://github.com/smooth-code/smooth-ui/compare/v6.0.0...v6.0.1) (2018-10-17)

**Note:** Version bump only for package @smooth-ui/core-em

# [6.0.0](https://github.com/smooth-code/smooth-ui/compare/v5.1.3...v6.0.0) (2018-10-17)

### Features

- flatten style & remove classNames ([34dd3fc](https://github.com/smooth-code/smooth-ui/commit/34dd3fc))
- support styled-components v4 ([b25675a](https://github.com/smooth-code/smooth-ui/commit/b25675a))

### BREAKING CHANGES

- - styled-components v4 is required

* `.extend` has been removed, please use `styled()` instead
* `component` prop has been removed, please use `as` instead

- A lot of classes have been removed.

Introduced a new default size "md".

<a name="5.1.3"></a>

## [5.1.3](https://github.com/smooth-code/smooth-ui/compare/v5.1.2...v5.1.3) (2018-09-26)

**Note:** Version bump only for package @smooth-ui/core-em

<a name="5.1.2"></a>

## [5.1.2](https://github.com/smooth-code/smooth-ui/compare/v5.1.1...v5.1.2) (2018-09-17)

**Note:** Version bump only for package @smooth-ui/core-em
