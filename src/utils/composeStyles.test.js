import { width, height } from './styles'
import composeStyles from './composeStyles'

describe('#composeStyles', () => {
  it('should expose everything', () => {
    const dimension = composeStyles(width, height)
    expect(dimension({ width: 10, height: { xs: 5, lg: 6 } })).toEqual({
      '@media (min-width: 992px)': { height: '6px' },
      height: '5px',
      width: '10px',
    })
  })
})
