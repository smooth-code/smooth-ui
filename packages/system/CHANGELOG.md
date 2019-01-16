# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [8.0.0](https://github.com/smooth-code/smooth-ui/compare/v7.1.1...v8.0.0) (2019-01-16)


### Features

* support emotion 10 & remove hacks ([#93](https://github.com/smooth-code/smooth-ui/issues/93)) ([d311640](https://github.com/smooth-code/smooth-ui/commit/d311640))
* **system:** add textTransform ([753eecd](https://github.com/smooth-code/smooth-ui/commit/753eecd))


### BREAKING CHANGES

* `OriginalComponent.withComponent(NewComponent)` is replaced by `uiAs(OriginalComponent, NewComponent)`

`as={NewComponent}` is replaced by `uiAs={NewComponent}`

`globalStyle()` is now replaced by `Normalize` component
