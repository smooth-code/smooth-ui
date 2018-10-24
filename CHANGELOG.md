# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [7.0.2](https://github.com/smooth-code/smooth-ui/compare/v7.0.1...v7.0.2) (2018-10-23)


### Bug Fixes

* **sc:** fix withComponent API ([#68](https://github.com/smooth-code/smooth-ui/issues/68)) ([0f59029](https://github.com/smooth-code/smooth-ui/commit/0f59029))





## [7.0.1](https://github.com/smooth-code/smooth-ui/compare/v7.0.0...v7.0.1) (2018-10-19)


### Bug Fixes

* **sc:** fix withComponent usage ([3f882c5](https://github.com/smooth-code/smooth-ui/commit/3f882c5))





# [7.0.0](https://github.com/smooth-code/smooth-ui/compare/v6.0.2...v7.0.0) (2018-10-18)


### Features

* make modals accessible ([#65](https://github.com/smooth-code/smooth-ui/issues/65)) ([e37c708](https://github.com/smooth-code/smooth-ui/commit/e37c708)), closes [#31](https://github.com/smooth-code/smooth-ui/issues/31) [#26](https://github.com/smooth-code/smooth-ui/issues/26) [#25](https://github.com/smooth-code/smooth-ui/issues/25)


### BREAKING CHANGES

* "persistent" prop has been removed from Modal, Modal are now
non-persistent.

"sui-modal-backdrop" has been removed, it is now "sui-modal".





## [6.0.2](https://github.com/smooth-code/smooth-ui/compare/v6.0.1...v6.0.2) (2018-10-17)


### Bug Fixes

* correctly apply system ([49e975d](https://github.com/smooth-code/smooth-ui/commit/49e975d))
* **emotion:** fix css & styled function with babel-plugin-emotion ([a214b18](https://github.com/smooth-code/smooth-ui/commit/a214b18))
* **emotion:** fix css function ([29448df](https://github.com/smooth-code/smooth-ui/commit/29448df))





## [6.0.1](https://github.com/smooth-code/smooth-ui/compare/v6.0.0...v6.0.1) (2018-10-17)


### Bug Fixes

* **emotion:** fix css function ([9d61910](https://github.com/smooth-code/smooth-ui/commit/9d61910))





# [6.0.0](https://github.com/smooth-code/smooth-ui/compare/v5.1.3...v6.0.0) (2018-10-17)


### Features

* expose cx & keyframes from emotion ([c226981](https://github.com/smooth-code/smooth-ui/commit/c226981))
* flatten style & remove classNames ([34dd3fc](https://github.com/smooth-code/smooth-ui/commit/34dd3fc))
* select now accepts children instead of options ([1a26480](https://github.com/smooth-code/smooth-ui/commit/1a26480)), closes [#60](https://github.com/smooth-code/smooth-ui/issues/60)
* support styled-components v4 ([b25675a](https://github.com/smooth-code/smooth-ui/commit/b25675a))


### BREAKING CHANGES

* - styled-components v4 is required
- `.extend` has been removed, please use `styled()` instead
- `component` prop has been removed, please use `as` instead
* A lot of classes have been removed.

Introduced a new default size "md".





<a name="5.1.3"></a>
## [5.1.3](https://github.com/smooth-code/smooth-ui/compare/v5.1.2...v5.1.3) (2018-09-26)


### Bug Fixes

* **theme:** Use th() instead of const color ([#50](https://github.com/smooth-code/smooth-ui/issues/50)) ([bdb1f0d](https://github.com/smooth-code/smooth-ui/commit/bdb1f0d))





<a name="5.1.2"></a>
## [5.1.2](https://github.com/smooth-code/smooth-ui/compare/v5.1.1...v5.1.2) (2018-09-17)


### Bug Fixes

* **Breakpoint:** add missing "sm" breakpoint in PropTypes ([#47](https://github.com/smooth-code/smooth-ui/issues/47)) ([4cbeee0](https://github.com/smooth-code/smooth-ui/commit/4cbeee0))
* **button:** use theme line-height ([#46](https://github.com/smooth-code/smooth-ui/issues/46)) ([c815158](https://github.com/smooth-code/smooth-ui/commit/c815158))
* **Grid:** fix Row gutter, default to 8px instead of 16px ([#49](https://github.com/smooth-code/smooth-ui/issues/49)) ([d4fb2cd](https://github.com/smooth-code/smooth-ui/commit/d4fb2cd))


### Features

* **Modal:** add persistent option to modal ([#48](https://github.com/smooth-code/smooth-ui/issues/48)) ([eef5b6e](https://github.com/smooth-code/smooth-ui/commit/eef5b6e))





<a name="5.1.1"></a>
## [5.1.1](https://github.com/smooth-code/smooth-ui/compare/v5.1.0...v5.1.1) (2018-09-08)


### Performance Improvements

* improve tree shaking ([fc07a34](https://github.com/smooth-code/smooth-ui/commit/fc07a34))



<a name="5.1.0"></a>
# [5.1.0](https://github.com/smooth-code/smooth-ui/compare/v5.0.0...v5.1.0) (2018-09-08)


### Bug Fixes

* **emotion:** fix `.extend` behaviour using emotion ([0eaad36](https://github.com/smooth-code/smooth-ui/commit/0eaad36)), closes [#29](https://github.com/smooth-code/smooth-ui/issues/29)
* **Modal:** fix warning about ref ([563354c](https://github.com/smooth-code/smooth-ui/commit/563354c))


### Features

* deprecate "component" in favor of "as" ([c065d09](https://github.com/smooth-code/smooth-ui/commit/c065d09)), closes [#33](https://github.com/smooth-code/smooth-ui/issues/33)
* **a11y:** support "prefers-reduce-motion" ([a76d417](https://github.com/smooth-code/smooth-ui/commit/a76d417)), closes [#39](https://github.com/smooth-code/smooth-ui/issues/39)


### Performance Improvements

* add "sideEffects: false" in package.json ([f9acb75](https://github.com/smooth-code/smooth-ui/commit/f9acb75))



<a name="4.3.2"></a>
## [4.3.2](https://github.com/smooth-code/smooth-ui/compare/v4.3.1...v4.3.2) (2018-09-03)


### Bug Fixes

* **Row:** fix default gutter ([d97b267](https://github.com/smooth-code/smooth-ui/commit/d97b267))



<a name="4.3.1"></a>
## [4.3.1](https://github.com/smooth-code/smooth-ui/compare/v4.3.0...v4.3.1) (2018-08-16)


### Performance Improvements

* **rollup:** correctly optimize build ([73d4f27](https://github.com/smooth-code/smooth-ui/commit/73d4f27))



<a name="4.3.0"></a>
# [4.3.0](https://github.com/smooth-code/smooth-ui/compare/v4.2.1...v4.3.0) (2018-06-15)


### Bug Fixes

* fix peerDependencies ([d60f08d](https://github.com/smooth-code/smooth-ui/commit/d60f08d))
* **modal:** fix modal backdrop ([#19](https://github.com/smooth-code/smooth-ui/issues/19)) ([8a00c08](https://github.com/smooth-code/smooth-ui/commit/8a00c08))


### Features

* Better support for <Select multiple> ([#15](https://github.com/smooth-code/smooth-ui/issues/15)) ([9d5b290](https://github.com/smooth-code/smooth-ui/commit/9d5b290))



<a name="4.2.2"></a>
## [4.2.2](https://github.com/smooth-code/smooth-ui/compare/v4.2.1...v4.2.2) (2018-06-12)


### Bug Fixes

* fix peerDependencies ([c89b2fa](https://github.com/smooth-code/smooth-ui/commit/c89b2fa))



<a name="4.2.1"></a>
## [4.2.1](https://github.com/smooth-code/smooth-ui/compare/v4.2.0...v4.2.1) (2018-06-02)


### Bug Fixes

* **modal:** fix default opened ([26c1d0c](https://github.com/smooth-code/smooth-ui/commit/26c1d0c))
* fix `import X from 'smooth-ui/X' ([41564b9](https://github.com/smooth-code/smooth-ui/commit/41564b9))



<a name="4.2.0"></a>
# [4.2.0](https://github.com/smooth-code/smooth-ui/compare/v4.1.2...v4.2.0) (2018-05-30)


### Features

* add Button default variant (primary) ([2ccb3d8](https://github.com/smooth-code/smooth-ui/commit/2ccb3d8))



<a name="4.1.2"></a>
## [4.1.2](https://github.com/smooth-code/smooth-ui/compare/v4.1.1...v4.1.2) (2018-05-29)


### Bug Fixes

* fix import X from 'smooth-ui/X' ([08c82d5](https://github.com/smooth-code/smooth-ui/commit/08c82d5))



<a name="4.1.1"></a>
## [4.1.1](https://github.com/smooth-code/smooth-ui/compare/v4.1.0...v4.1.1) (2018-05-29)


### Bug Fixes

* fix animations ([2a2e72e](https://github.com/smooth-code/smooth-ui/commit/2a2e72e))



<a name="4.1.0"></a>
# [4.1.0](https://github.com/smooth-code/smooth-ui/compare/v4.0.1...v4.1.0) (2018-05-29)


### Bug Fixes

* remove "transition: all" ([5773201](https://github.com/smooth-code/smooth-ui/commit/5773201)), closes [#8](https://github.com/smooth-code/smooth-ui/issues/8)


### Features

* add Modal ([7d27a07](https://github.com/smooth-code/smooth-ui/commit/7d27a07))
* add Toggler ([88bc002](https://github.com/smooth-code/smooth-ui/commit/88bc002))



<a name="4.0.1"></a>
## [4.0.1](https://github.com/smooth-code/smooth-ui/compare/v4.0.0...v4.0.1) (2018-05-28)



<a name="4.0.0"></a>
# [4.0.0](https://github.com/smooth-code/smooth-ui/compare/v3.0.2...v4.0.0) (2018-05-28)


### Features

* various ([7ad7b4c](https://github.com/smooth-code/smooth-ui/commit/7ad7b4c))


### BREAKING CHANGES

* Remove default variant on buttons
* `controlFocusBoxShadow` is now a mixin



<a name="3.0.2"></a>
## [3.0.2](https://github.com/smooth-code/smooth-ui/compare/v3.0.1...v3.0.2) (2018-04-29)


### Bug Fixes

* fix down ([a60351a](https://github.com/smooth-code/smooth-ui/commit/a60351a))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/smooth-code/smooth-ui/compare/v3.0.0...v3.0.1) (2018-04-29)



<a name="3.0.0"></a>
# [3.0.0](https://github.com/smooth-code/smooth-ui/compare/v2.0.0...v3.0.0) (2018-04-29)


### Features

* add up, down and between ([883edb6](https://github.com/smooth-code/smooth-ui/commit/883edb6))


### BREAKING CHANGES

* - upTo is now up
- rename breakPoints into breakpoints in theme



<a name="2.0.0"></a>
# [2.0.0](https://github.com/smooth-code/smooth-ui/compare/v1.2.2...v2.0.0) (2018-04-01)


### Bug Fixes

* **ControlFeedback:** fix export name ([2e7daf8](https://github.com/smooth-code/smooth-ui/commit/2e7daf8))


### Features

* **Alert:** add alerts ([ec57ee4](https://github.com/smooth-code/smooth-ui/commit/ec57ee4))


### BREAKING CHANGES

* **Alert:** Mixins are now a function that takes props and return another function.



<a name="1.2.2"></a>
## [1.2.2](https://github.com/smooth-code/smooth-ui/compare/v1.2.1...v1.2.2) (2018-02-20)


### Bug Fixes

* fix bind in extend surcharge ([98df43a](https://github.com/smooth-code/smooth-ui/commit/98df43a))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/smooth-code/smooth-ui/compare/v1.2.0...v1.2.1) (2018-02-20)


### Bug Fixes

* fix withComponent ([9fcdb26](https://github.com/smooth-code/smooth-ui/commit/9fcdb26))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/smooth-code/smooth-ui/compare/v1.1.0...v1.2.0) (2018-02-20)


### Features

* support withComponent on Input, Button ([1252d4f](https://github.com/smooth-code/smooth-ui/commit/1252d4f))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/smooth-code/smooth-ui/compare/v1.0.0...v1.1.0) (2018-02-20)


### Features

* export all utils ([e723014](https://github.com/smooth-code/smooth-ui/commit/e723014))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/smooth-code/smooth-ui/compare/v0.2.0...v1.0.0) (2018-02-20)


### Features

* add variants to buttons ([4fdfc73](https://github.com/smooth-code/smooth-ui/commit/4fdfc73))
* flatten theme & utils ([4c33e13](https://github.com/smooth-code/smooth-ui/commit/4c33e13))


### BREAKING CHANGES

* previous version will break if you use theme.



<a name="0.2.0"></a>
# [0.2.0](https://github.com/smooth-code/smooth-ui/compare/v0.1.1...v0.2.0) (2018-02-13)


### Features

* add gutter to grid ([0133098](https://github.com/smooth-code/smooth-ui/commit/0133098))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/smooth-code/smooth-ui/compare/v0.1.0...v0.1.1) (2018-02-08)


### Bug Fixes

* fix box, checkbox, col style def ([67cb8c1](https://github.com/smooth-code/smooth-ui/commit/67cb8c1))



<a name="0.1.0"></a>
# [0.1.0](https://github.com/smooth-code/smooth-ui/compare/v0.0.3...v0.1.0) (2018-02-08)


### Features

* add form validation ([f6314a3](https://github.com/smooth-code/smooth-ui/commit/f6314a3))



<a name="0.0.3"></a>
## [0.0.3](https://github.com/smooth-code/smooth-ui/compare/v0.0.2...v0.0.3) (2018-02-06)


### Bug Fixes

* add missing components ([363b3bd](https://github.com/smooth-code/smooth-ui/commit/363b3bd))



<a name="0.0.2"></a>
## [0.0.2](https://github.com/smooth-code/smooth-ui/compare/v0.0.1...v0.0.2) (2018-02-06)



<a name="0.0.1"></a>
## 0.0.1 (2018-02-06)
