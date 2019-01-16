/* eslint-disable no-console, import/no-unresolved */
const Benchmark = require('benchmark')
const sui = require('@smooth-ui/system')
const mui = require('@material-ui/system')
const sys = require('styled-system')

const suiSystem = sui.compose(
  sui.typography,
  sui.space,
)
const muiSystem = mui.compose(
  mui.typography,
  mui.spacing,
)
const sysSystem = sys.compose(
  sys.fontSize,
  sys.space,
)

const suite = new Benchmark.Suite()

function runSui() {
  return suiSystem.props({
    p: { xs: 10, md: 20 },
    mt: 10,
    m: '20px',
    fontSize: 10,
  })
}

function runMui() {
  return muiSystem({
    theme: {},
    p: { xs: 10, md: 20 },
    mt: 10,
    m: '20px',
    fontSize: 10,
  })
}

function runSys() {
  return sysSystem({ p: [10, 20], mt: 10, m: '20px', fontSize: 10 })
}

console.log('sui', runSui())
console.log('mui', runMui())
console.log('sys', runSys())

suite
  .add('@smooth-ui/system', runSui)
  .add('@material-ui/system', runMui)
  .add('styled-system', runSys)
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', function onComplete() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ async: true })
