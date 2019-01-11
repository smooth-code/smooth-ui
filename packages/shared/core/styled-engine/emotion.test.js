import { styled, css } from './emotion'

describe('emotion styled engine', () => {
  describe('#css', () => {
    it('should work values without functions', () => {
      expect(css({ color: 'red' })).toEqual({
        map: undefined,
        name: 'tokvmb',
        next: undefined,
        styles: 'color:red;',
      })
      expect(css({ color: 'red' }, { fontSize: 10 })).toEqual({
        map: undefined,
        name: 'ia2oof',
        next: undefined,
        styles: 'color:red;font-size:10px;',
      })
      expect(css('color: red;', 'font-size: 10px;')).toEqual({
        map: undefined,
        name: 'odcmjf',
        next: undefined,
        styles: 'color: red;font-size: 10px;',
      })
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
      const props = { primary: 'red', padding: '10px' }
      const colorStyle = css`
        color: ${p => p.primary};
        font-style: italic;
      `
      const style = css`
        font-size: 10px;
        ${colorStyle}
        padding: ${p => p.padding};
      `
      expect(style(props).styles).toMatchInlineSnapshot(`
"
        font-size: 10px;
        
        color: red;
        font-style: italic;
      
        padding: 10px;
      "
`)
    })
  })
})
