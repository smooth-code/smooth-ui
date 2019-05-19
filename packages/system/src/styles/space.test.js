import { space } from './space'

describe('space', () => {
  it('should support m', () => {
    expect(space({ m: 1 })).toEqual({ margin: 4 })
    expect(space({ m: 2 })).toEqual({ margin: 8 })
    expect(space({ m: -2 })).toEqual({ margin: -8 })
    expect(space({ m: 10 })).toEqual({ margin: 10 })
    expect(space({ m: -10 })).toEqual({ margin: -10 })
    expect(space({ m: '50%' })).toEqual({ margin: '50%' })
    expect(space({ m: { md: '50%' } })).toEqual({
      '@media (min-width: 768px)': { margin: '50%' },
    })
  })

  it('should support mx', () => {
    expect(space({ mx: 10 })).toEqual({
      marginLeft: 10,
      marginRight: 10,
    })
    expect(space({ mx: '50%' })).toEqual({
      marginLeft: '50%',
      marginRight: '50%',
    })
    expect(space({ mx: { md: '50%' } })).toEqual({
      '@media (min-width: 768px)': { marginLeft: '50%', marginRight: '50%' },
    })
  })

  it('should support mb, mt, ml, mr', () => {
    expect(space({ mb: 10 })).toEqual({ marginBottom: 10 })
    expect(space({ mt: 10 })).toEqual({ marginTop: 10 })
    expect(space({ ml: 10 })).toEqual({ marginLeft: 10 })
    expect(space({ mr: 10 })).toEqual({ marginRight: 10 })
  })

  it('should support p', () => {
    expect(space({ p: 10 })).toEqual({ padding: 10 })
    expect(space({ p: '50%' })).toEqual({ padding: '50%' })
    expect(space({ p: { md: '50%' } })).toEqual({
      '@media (min-width: 768px)': { padding: '50%' },
    })
  })

  it('should support px, py', () => {
    expect(space({ px: 10 })).toEqual({
      paddingLeft: 10,
      paddingRight: 10,
    })
    expect(space({ px: '50%' })).toEqual({
      paddingLeft: '50%',
      paddingRight: '50%',
    })
    expect(space({ px: { md: '50%' } })).toEqual({
      '@media (min-width: 768px)': { paddingLeft: '50%', paddingRight: '50%' },
    })
  })

  it('should support pb, pt, pl, pr', () => {
    expect(space({ pb: 10 })).toEqual({ paddingBottom: 10 })
    expect(space({ pt: 10 })).toEqual({ paddingTop: 10 })
    expect(space({ pl: 10 })).toEqual({ paddingLeft: 10 })
    expect(space({ pr: 10 })).toEqual({ paddingRight: 10 })
  })

  it('should merge everything', () => {
    expect(space({ px: { md: '50%' }, mx: { md: 10 } })).toEqual({
      '@media (min-width: 768px)': {
        paddingLeft: '50%',
        paddingRight: '50%',
        marginLeft: 10,
        marginRight: 10,
      },
    })
  })

  it('should support variants spaces', () => {
    expect(
      space({
        m: 1,
        p: 0,
        theme: { space: [0, 8, 16] },
      }),
    ).toEqual({
      margin: 8,
      padding: 0,
    })
  })

  it('should expose meta', () => {
    expect(space.meta.props).toEqual([
      'm',
      'mt',
      'mr',
      'mb',
      'ml',
      'mx',
      'my',
      'p',
      'pt',
      'pr',
      'pb',
      'pl',
      'px',
      'py',
    ])
  })
})
