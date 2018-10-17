import React from 'react'
import { mount } from 'enzyme'
import styled from 'styled-components'
import {
  DEFAULT_BREAKPOINTS,
  getBreakpoints,
  getBreakpointsEntries,
  getNextBreakpoint,
  getPreviousBreakpoint,
  getBreakpointMin,
  getBreakpointMax,
  up,
  down,
  between,
} from './breakpoints'

describe('breakpoints utils', () => {
  let props

  beforeEach(() => {
    props = {
      theme: {
        breakpoints: {
          xs: 0,
          sm: 5,
          md: 10,
          lg: 30,
        },
      },
    }
  })

  describe('#getBreakpoints', () => {
    it('should return breakpoints from theme or use default ones', () => {
      expect(getBreakpoints(props)).toEqual({
        xs: 0,
        sm: 5,
        md: 10,
        lg: 30,
      })
      expect(getBreakpoints()).toBe(DEFAULT_BREAKPOINTS)
    })
  })

  describe('#getBreakpointsEntries', () => {
    it('should give sorted breakpoints entries', () => {
      expect(getBreakpointsEntries(props)).toEqual([
        ['xs', 0],
        ['sm', 5],
        ['md', 10],
        ['lg', 30],
      ])
      expect(getBreakpointsEntries()).toEqual([
        ['xs', 0],
        ['sm', 576],
        ['md', 768],
        ['lg', 992],
        ['xl', 1200],
      ])
    })
  })

  describe('#getNextBreakpoint', () => {
    it('should return next breakpoint', () => {
      expect(getNextBreakpoint('xs', props)).toBe('sm')
      expect(getNextBreakpoint('sm', props)).toBe('md')
      expect(getNextBreakpoint('lg', props)).toBe(null)
    })
  })

  describe('#getPreviousBreakpoint', () => {
    it('should return next breakpoint', () => {
      expect(getPreviousBreakpoint('xs', props)).toBe(null)
      expect(getPreviousBreakpoint('sm', props)).toBe('xs')
      expect(getPreviousBreakpoint('lg', props)).toBe('md')
    })
  })

  describe('#getBreakpointMin', () => {
    it('should return breakpoint minimum value', () => {
      expect(getBreakpointMin('xs', props)).toBe(null)
      expect(getBreakpointMin('sm', props)).toBe(5)
      expect(getBreakpointMin('md', props)).toBe(10)
      expect(getBreakpointMin('lg', props)).toBe(30)
    })
  })

  describe('#getBreakpointMax', () => {
    it('should return breakpoint maximum value', () => {
      expect(getBreakpointMax('xs', props)).toBe(4.98)
      expect(getBreakpointMax('sm', props)).toBe(9.98)
      expect(getBreakpointMax('md', props)).toBe(29.98)
      expect(getBreakpointMax('lg', props)).toBe(null)
    })
  })

  describe('#up', () => {
    it('should generate a media query', () => {
      const Dummy = styled.div`
        color: blue;
        ${up('md', 'color: red;')};
        ${up('lg', { color: 'yellow' })};
      `

      const wrapper = mount(<Dummy {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'blue')
      expect(wrapper).toHaveStyleRule('color', 'red', {
        media: '(min-width:10px)',
      })
      expect(wrapper).toHaveStyleRule('color', 'yellow', {
        media: '(min-width:30px)',
      })
    })

    it('should not add a media query if smallest', () => {
      const Dummy = styled.div`
        color: blue;
        ${up('xs', 'color: red')};
      `

      const wrapper = mount(<Dummy {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'red')
    })
  })

  describe('#down', () => {
    it('should generate a media query', () => {
      const Dummy = styled.div`
        color: blue;
        ${down('md', 'color: red')};
        ${down('sm', { color: 'yellow' })};
      `

      const wrapper = mount(<Dummy {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'blue')
      expect(wrapper).toHaveStyleRule('color', 'red', {
        media: '(max-width:9.98px)',
      })
      expect(wrapper).toHaveStyleRule('color', 'yellow', {
        media: '(max-width:4.98px)',
      })
    })

    it('should not add a media query if largest', () => {
      const Dummy = styled.div`
        color: blue;
        ${down('lg', 'color: red')};
      `

      const wrapper = mount(<Dummy {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'red')
    })
  })

  describe('#between', () => {
    it('should return only max if smallest', () => {
      const Dummy = styled.div`
        color: blue;
        ${between('xs', 'sm', 'color: red')};
        ${between('xs', 'sm', { background: 'yellow' })};
      `

      const wrapper = mount(<Dummy {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'blue')
      expect(wrapper).toHaveStyleRule('color', 'red', {
        media: '(max-width:4.98px)',
      })
      expect(wrapper).toHaveStyleRule('background', 'yellow', {
        media: '(max-width:4.98px)',
      })
    })

    it('should return only min if largest', () => {
      const Dummy = styled.div`
        color: blue;
        ${between('md', 'lg', 'color: red')};
      `

      const wrapper = mount(<Dummy {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'blue')
      expect(wrapper).toHaveStyleRule('color', 'red', {
        media: '(min-width:10px)',
      })
    })

    it('should return max and min if middle', () => {
      const Dummy = styled.div`
        color: blue;
        ${between('sm', 'md', 'color: red')};
      `

      const wrapper = mount(<Dummy {...props} />)
      expect(wrapper).toHaveStyleRule('color', 'blue')
      expect(wrapper).toHaveStyleRule('color', 'red', {
        media: '(min-width:5px) and (max-width:9.98px)',
      })
    })
  })
})
