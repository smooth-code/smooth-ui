import { th, unit, px, prop, mixin, calc } from './system'

describe('system utils', () => {
  let props

  beforeEach(() => {
    props = {
      theme: {
        __smoothUI: true,
        red: 'red',
        primary: th('red'),
        secondary: 'blue',
        borderRadius: 3,
        colors: {
          primary: th('primary'),
          secondary: th('secondary'),
        },
      },
    }
  })

  describe('#th', () => {
    it('should return property from theme', () => {
      expect(th('red')(props)).toBe('red')
      expect(th('primary')(props)).toBe('red')
      expect(th('borderRadius', x => x * 2)(props)).toBe(6)

      expect(() => {
        th('foo')(props)
      }).toThrow('"foo" not found in theme')
    })
  })

  describe('#unit', () => {
    it('should automatically add unit', () => {
      const px = unit('px')
      const em = unit('em')
      expect(px(3)).toBe('3px')
      expect(em(3)).toBe('3em')
      expect(em('3px')).toBe('3px')
    })
  })

  describe('#px', () => {
    it('should automatically add px unit', () => {
      expect(px(3)).toBe('3px')
      expect(px('3em')).toBe('3em')
    })
  })

  describe('#prop', () => {
    it('should use prop if available', () => {
      const getMargin = prop('margin', 'defaultMargin')
      expect(getMargin({ margin: '20px' })).toBe('20px')
    })

    it('should default to theme', () => {
      const theme = { __smoothUI: true, defaultMargin: '10px' }
      const getMargin = prop('margin', 'defaultMargin')
      expect(getMargin({ theme })).toBe('10px')
    })
  })

  describe('#mixin', () => {
    it('should call mixin defined theme', () => {
      const theme = {
        __smoothUI: true,
        borderRadius: props => defaultRadius => ({
          borderRadius: props.radius || defaultRadius,
        }),
      }

      expect(mixin('borderRadius', '50%')({ theme })).toEqual({
        borderRadius: '50%',
      })
      expect(mixin('borderRadius', '50%')({ radius: '5px', theme })).toEqual({
        borderRadius: '5px',
      })
    })
  })

  describe('#calc', () => {
    it('should calc without unit', () => {
      expect(calc('50%', x => x * 2)).toBe('100%')
      expect(calc(50, x => x * 2)).toBe('100px')
      expect(calc('5rem', x => x * 2)).toBe('10rem')
      expect(calc('5px', x => x * 2)).toBe('10px')
      expect(calc('5', x => x * 2)).toBe('10px')
    })
  })
})
