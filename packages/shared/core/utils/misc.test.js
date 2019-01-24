import { is, num, func, get, cascade, omit } from './misc'

describe('#is', () => {
  it('should return true if defined an not null', () => {
    expect(is(null)).toBe(false)
    expect(is(undefined)).toBe(false)
    expect(is(false)).toBe(true)
    expect(is('foo')).toBe(true)
  })
})

describe('#num', () => {
  it('should return true if it is a number', () => {
    expect(num(null)).toBe(false)
    expect(num(undefined)).toBe(false)
    expect(num(NaN)).toBe(false)
    expect(num(2)).toBe(true)
  })
})

describe('#func', () => {
  it('should return true if it is a function', () => {
    expect(func(null)).toBe(false)
    expect(func(undefined)).toBe(false)
    expect(func({})).toBe(false)
    expect(func('')).toBe(false)
    expect(func(2)).toBe(false)
    expect(func(() => {})).toBe(true)
  })
})

describe('#get', () => {
  it('should get simple property', () => {
    const obj = { foo: 'bar' }
    expect(get(obj, 'foo')).toBe('bar')
    expect(get(obj, 'nop')).toBe(undefined)
  })

  it('should get deep property', () => {
    const obj = { deep: { foo: 'bar' } }
    expect(get(obj, 'deep.foo')).toBe('bar')
    expect(get(obj, 'deep', 'foo')).toBe('bar')
    expect(get(obj, 'deep', 'nop')).toBe(undefined)
    expect(get(obj, 'deep.nop')).toBe(undefined)
    expect(get(obj, 'nop', 'nop')).toBe(undefined)
  })
})

describe('#cascade', () => {
  it('should call function until it is not one', () => {
    expect(cascade(() => () => () => () => 'bar')).toBe('bar')
  })
})

describe('#omit', () => {
  it('should omit keys', () => {
    expect(omit({ a: 'b', c: 'd' }, ['c'])).toEqual({ a: 'b' })
  })
})
