import styled, { css } from './emotion'

describe('emotion styled engine', () => {
  describe('#css', () => {
    it('should work values without functions', () => {
      expect(css({ color: 'red' })).toBe('css-tokvmb')
      expect(css({ color: 'red' }, { fontSize: 10 })).toBe('css-ia2oof')
      expect(css('color: red;', 'font-size: 10px;')).toBe('css-odcmjf')
    })

    it('should handle components', () => {
      const Dummy = styled('div')`
        color: blue;
      `
      expect.assertions(1)

      try {
        css(Dummy, 'font-size: 10px;')
      } catch (error) {
        expect(error.message).toBe(
          'Component selectors can only be used in conjunction with babel-plugin-emotion.',
        )
      }
    })

    it('should handle interpolations', () => {
      expect(
        css('font-size: 10px;', props => ({ color: props.color })),
      ).toBeInstanceOf(Function)
    })
  })
})
