import { style } from './style'

describe('#style', () => {
  const fontFamily = style({
    prop: 'fontFamily',
    themeKey: 'fonts',
  })

  describe('style(attrs)', () => {
    it('should work without any theme', () => {
      expect(fontFamily({ fontFamily: 'title' })()).toEqual({
        fontFamily: 'title',
      })
    })

    it('should work with props (styled-components)', () => {
      const props = { foo: 'bar', theme: { fonts: { title: 'arial' } } }
      expect(fontFamily({ fontFamily: 'title' })(props)).toEqual({
        fontFamily: 'arial',
      })
    })

    it('should work with theme (emotion)', () => {
      const props = { fonts: { title: 'arial' } }
      expect(fontFamily({ fontFamily: 'title' })(props)).toEqual({
        fontFamily: 'arial',
      })
    })

    it('should work with breakpoints (object)', () => {
      expect(fontFamily({ fontFamily: { xs: 'title' } })()).toEqual({
        fontFamily: 'title',
      })
      expect(fontFamily({ fontFamily: { xs: 'title', md: 'body' } })()).toEqual(
        {
          '@media (min-width: 768px)': { fontFamily: 'body' },
          fontFamily: 'title',
        },
      )
    })

    it('should work with custom breakpoints', () => {
      const breakpoints = { xs: 0, md: 10 }
      expect(
        fontFamily({ fontFamily: { xs: 'title' } })({ breakpoints }),
      ).toEqual({
        fontFamily: 'title',
      })
      expect(
        fontFamily({ fontFamily: { xs: 'title', md: 'body' } })({
          breakpoints,
        }),
      ).toEqual({
        '@media (min-width: 10px)': { fontFamily: 'body' },
        fontFamily: 'title',
      })
    })
  })

  describe('style.props', () => {
    it('should work without any theme', () => {
      expect(fontFamily.props({ fontFamily: 'title' })).toEqual({
        fontFamily: 'title',
      })
    })

    it('should work with a theme', () => {
      expect(
        fontFamily.props({
          fontFamily: 'title',
          theme: { fonts: { title: 'arial' } },
        }),
      ).toEqual({
        fontFamily: 'arial',
      })
    })

    it('should work with theme functions', () => {
      expect(
        fontFamily.props({
          fontFamily: 'title',
          theme: {
            arial: 'arial',
            fonts: { title: ({ theme }) => theme.arial },
          },
        }),
      ).toEqual({
        fontFamily: 'arial',
      })
    })
  })
})
