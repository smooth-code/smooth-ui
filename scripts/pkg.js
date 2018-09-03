const pkg = require('../package.json')

const { STYLED_ENGINE } = process.env

const packageNames = {
  emotion: '@smooth-ui/core-emotion',
  'styled-components': '@smooth-ui/core-sc',
}

pkg.name = packageNames[STYLED_ENGINE]
pkg.peerDependencies = {
  ...pkg.peerDependencies,
  ...pkg.enginePeerDependencies[STYLED_ENGINE],
}

delete pkg.enginePeerDependencies
delete pkg.bundlesize

process.stdout.write(JSON.stringify(pkg, null, 2))
