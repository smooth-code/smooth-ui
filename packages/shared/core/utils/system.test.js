import { th, unit, style, px, prop, mixin, calc } from './system'

describe('system utils', () => {
  let props

  beforeEach(() => {
    props = {
      theme: {
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

  describe('#style', () => {
    it('should support string', () => {
      expect(style({ prop: 'width' })({ width: '10px' })).toEqual({
        width: '10px',
      })
    })

    it('should support number', () => {
      expect(style({ prop: 'width' })({ width: 10 })).toEqual({
        width: 10,
      })
    })

    it('should support breakpoints', () => {
      expect(
        style({ prop: 'width' })({
          width: { xs: '10px', md: '20px', lg: '30px' },
        }),
      ).toEqual({
        '@media (min-width: 768px)': { width: '20px' },
        '@media (min-width: 992px)': { width: '30px' },
        width: '10px',
      })
    })

    it('should support custom transform', () => {
      const width = style({
        prop: 'width',
        transform: x => (x <= 1 ? `${x * 100}%` : `${x}px`),
      })
      expect(width({ width: 1 })).toEqual({ width: '100%' })
      expect(width({ width: { xs: 0.5, md: 20 } })).toEqual({
        '@media (min-width: 768px)': { width: '20px' },
        width: '50%',
      })
    })

    it('should support variants', () => {
      const color = style({ prop: 'color', variants: 'colors' })
      const width = style({ prop: 'width', variants: 'widths' })

      const theme = {
        colors: { red: '#ff0000', green: '#3b873f' },
        widths: [0, '8px', '16px'],
      }

      expect(color({ color: 'red', theme })).toEqual({
        color: '#ff0000',
      })
      expect(color({ color: { lg: 'red' }, theme })).toEqual({
        '@media (min-width: 992px)': { color: '#ff0000' },
      })
      expect(width({ width: 1, theme })).toEqual({
        width: '8px',
      })
      expect(width({ width: { lg: 1 }, theme })).toEqual({
        '@media (min-width: 992px)': { width: '8px' },
      })
    })

    it('should expose meta', () => {
      expect(style({ prop: 'width' }).meta.props).toEqual(['width'])
    })
  })

  describe('#prop', () => {
    it('should use prop if available', () => {
      const getMargin = prop('margin', 'defaultMargin')
      expect(getMargin({ margin: '20px' })).toBe('20px')
    })

    it('should default to theme', () => {
      const theme = { defaultMargin: '10px' }
      const getMargin = prop('margin', 'defaultMargin')
      expect(getMargin({ theme })).toBe('10px')
    })
  })

  describe('#mixin', () => {
    it('should call mixin defined theme', () => {
      const theme = {
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
