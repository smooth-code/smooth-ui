import { minWidth } from './media'

describe('media', () => {
  describe('#minWidth', () => {
    it('returns breakpoint value', () => {
      expect(minWidth(200)).toBe('@media (min-width: 200px)')
    })
  })
})
