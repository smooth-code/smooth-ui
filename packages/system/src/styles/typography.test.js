import { getFontSize } from './typography'

describe('#getFontSize', () => {
  it('gets a value and transforms it according to spec.', () => {
    const props = {}
    expect(getFontSize(1)(props)).toEqual(12)
    expect(getFontSize(2)(props)).toEqual(14)
    expect(getFontSize(10)(props)).toEqual(10)
    expect(getFontSize('50%')(props)).toEqual('50%')
  })

  it('gets value from the theme', () => {
    const props = { theme: { fontSizes: [0, 10, 20, 30, 40] } }
    expect(getFontSize(1)(props)).toEqual(10)
    expect(getFontSize(2)(props)).toEqual(20)
    expect(getFontSize(10)(props)).toEqual(10)
    expect(getFontSize('50%')(props)).toEqual('50%')
  })
})
