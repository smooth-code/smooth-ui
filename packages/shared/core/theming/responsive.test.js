import { up, down, between } from './responsive'

describe('responsive', () => {
  describe('#up', () => {
    it('should return style', () => {
      function upX(breakpoint, code) {
        const value = up(breakpoint, code)({})
        if (!value) return value
        if (typeof value === 'string') return value
        return value
          .join('')
          .replace(/\r?\n|\r/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      }

      expect(upX('xs', 'xs')).toBe('xs')
      expect(upX('sm', 'sm')).toBe(`@media (min-width: 576px) { sm; }`)
      expect(upX('md', 'md')).toBe(`@media (min-width: 768px) { md; }`)
      expect(upX('lg', 'lg')).toBe(`@media (min-width: 992px) { lg; }`)
      expect(upX('xl', 'xl')).toBe(`@media (min-width: 1200px) { xl; }`)
    })
  })

  describe('#down', () => {
    it('should return style', () => {
      function downX(breakpoint, code) {
        const value = down(breakpoint, code)({})
        if (!value) return value
        if (typeof value === 'string') return value
        return value
          .join('')
          .replace(/\r?\n|\r/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      }

      expect(downX('xl', 'xl')).toBe(`@media (max-width: 1199.98px) { xl; }`)
      expect(downX('lg', 'lg')).toBe(`@media (max-width: 991.98px) { lg; }`)
      expect(downX('md', 'md')).toBe(`@media (max-width: 767.98px) { md; }`)
      expect(downX('sm', 'sm')).toBe(`@media (max-width: 575.98px) { sm; }`)
      expect(downX('xs', 'xs')).toBe(null)
    })
  })

  describe('#between', () => {
    it('should return style', () => {
      function betweenX(min, max) {
        const value = between(min, max, `${min}-${max}`)({})
        if (!value) return value
        if (typeof value === 'string') return value
        return value
          .join('')
          .replace(/\r?\n|\r/g, '')
          .replace(/\s+/g, ' ')
          .trim()
      }

      expect(betweenX('xs', 'sm')).toBe(
        `@media (max-width: 575.98px) { xs-sm; }`,
      )
      expect(betweenX('xs', 'md')).toBe(
        `@media (max-width: 767.98px) { xs-md; }`,
      )
      expect(betweenX('xs', 'lg')).toBe(
        `@media (max-width: 991.98px) { xs-lg; }`,
      )
      expect(betweenX('xs', 'xl')).toBe(
        `@media (max-width: 1199.98px) { xs-xl; }`,
      )

      expect(betweenX('sm', 'md')).toBe(
        `@media (min-width: 576px) and (max-width: 767.98px) { sm-md; }`,
      )
      expect(betweenX('sm', 'lg')).toBe(
        `@media (min-width: 576px) and (max-width: 991.98px) { sm-lg; }`,
      )
      expect(betweenX('sm', 'xl')).toBe(
        `@media (min-width: 576px) and (max-width: 1199.98px) { sm-xl; }`,
      )

      expect(betweenX('md', 'lg')).toBe(
        `@media (min-width: 768px) and (max-width: 991.98px) { md-lg; }`,
      )
      expect(betweenX('md', 'xl')).toBe(
        `@media (min-width: 768px) and (max-width: 1199.98px) { md-xl; }`,
      )

      expect(betweenX('lg', 'xl')).toBe(
        `@media (min-width: 992px) and (max-width: 1199.98px) { lg-xl; }`,
      )
    })
  })
})
