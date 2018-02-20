/* eslint-disable no-unused-vars */
import { injectGlobal, css } from 'styled-components'
import {
  transparentize,
  lighten,
  modularScale,
  darken,
  parseToRgb,
} from 'polished'
import { th, mixin } from '../utils'

/* eslint-disable no-unused-expressions */
injectGlobal`
  [class^='sui-'], [class*=' sui-'] {
    box-sizing: border-box;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;

    * {
      box-sizing: border-box;
    }
  }
`
/* eslint-enable no-unused-expressions */

// Colors

export const white = '#fff'
export const gray100 = '#f8f9fa'
export const gray200 = '#e9ecef'
export const gray300 = '#dee2e6'
export const gray400 = '#ced4da'
export const gray500 = '#adb5bd'
export const gray600 = '#6c757d'
export const gray700 = '#495057'
export const gray800 = '#343a40'
export const gray900 = '#212529'
export const black = '#000'

export const blue = '#007bff'
export const indigo = '#6610f2'
export const purple = '#6f42c1'
export const pink = '#e83e8c'
export const red = '#dc3545'
export const brick = '#bd4932'
export const orange = '#fd7e14'
export const yellow = '#ffc107'
export const green = '#28a745'
export const teal = '#20c997'
export const cyan = '#17a2b8'

export const primary = brick
export const secondary = gray600
export const success = green
export const info = cyan
export const warning = yellow
export const danger = red
export const light = gray100
export const dark = gray800

export const primaryLight = th('primary', c => lighten(0.3, c))
export const secondaryLight = th('secondary', c => lighten(0.3, c))

export const yikTextDark = '#111'
export const yikTextLight = '#fff'

// Borders

export const borderRadius = '.25rem'
export const borderRadiusSm = '.2rem'
export const borderRadiusLg = '.3rem'
export const borderWidth = '1px'

// Fonts

export const fontSizeBase = '1rem'
export const fontSizeSm = th('fontSizeBase', fontSize =>
  modularScale(-1, fontSize),
)
export const fontSizeLg = th('fontSizeBase', fontSize =>
  modularScale(1, fontSize),
)

export const fontWeightLight = 300
export const fontWeightNormal = 400
export const fontWeightBold = 700

export const lineHeightBase = 1.5
export const lineHeightSm = 1.5
export const lineHeightLg = 1.5

// Input + Buttons

export const inputBtnPaddingY = '.375rem'
export const inputBtnPaddingX = '.75rem'
export const inputBtnLineHeight = th('lineHeightBase')

export const inputBtnPaddingYSm = '.25rem'
export const inputBtnPaddingXSm = '.5rem'
export const inputBtnLineHeightSm = th('lineHeightSm')

export const inputBtnPaddingYLg = '.5rem'
export const inputBtnPaddingXLg = '1rem'
export const inputBtnLineHeightLg = th('lineHeightLg')

export const inputBtnBorderWidth = th('borderWidth')

// Buttons

export const btnPaddingY = th('inputBtnPaddingY')
export const btnPaddingX = th('inputBtnPaddingX')
export const btnLineHeight = th('inputBtnLineHeight')

export const btnPaddingYSm = th('inputBtnPaddingYSm')
export const btnPaddingXSm = th('inputBtnPaddingXSm')
export const btnLineHeightSm = th('inputBtnLineHeightSm')

export const btnPaddingYLg = th('inputBtnPaddingYLg')
export const btnPaddingXLg = th('inputBtnPaddingXLg')
export const btnLineHeightLg = th('inputBtnLineHeightLg')

export const btnBorderWidth = 0
export const btnDisabledOpacity = 0.8

// Inputs

export const inputPaddingY = th('inputBtnPaddingY')
export const inputPaddingX = th('inputBtnPaddingX')
export const inputLineHeight = th('inputBtnLineHeight')

export const inputPaddingYSm = th('inputBtnPaddingYSm')
export const inputPaddingXSm = th('inputBtnPaddingXSm')
export const inputLineHeightSm = th('inputBtnLineHeightSm')

export const inputPaddingYLg = th('inputBtnPaddingYLg')
export const inputPaddingXLg = th('inputBtnPaddingXLg')
export const inputLineHeightLg = th('inputBtnLineHeightLg')

export const inputBorderWidth = th('inputBtnBorderWidth')
export const inputBorderColor = th('gray300')
export const inputBgColor = th('white')
export const inputDisabledBgColor = th('gray100')
export const inputDisabledText = th('gray600')
export const inputPlaceholderText = th('gray600')
export const inputTextColor = th('gray900')

// Controls

export const controlFocusBorderColor = th('primary', color =>
  lighten(0.25, color),
)
export const controlFocusBoxShadow = color =>
  css`0 0 0 0.2rem ${th(color, c => transparentize(0.75, c))}`

// Z-indexes

export const zIndexControl = 1
export const zIndexInnerSwitch = 10

// Transitions

export const transitionBase = 'all .2s ease-in-out'

// Breakpoints

export const breakPoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

// Mixins

export const controlFocus = (baseColor = 'primary') => css`
  outline: 0;
  box-shadow: 0 0 2px ${th(baseColor, color => transparentize(0.1, color))};
`

export const btnVariant = baseColor => css`
  color: ${props => props.theme.colorYik(th(baseColor)(props))};
  background-color: ${th(baseColor)};

  &:focus {
    ${mixin('controlFocus', baseColor)};
  }

  &:not(:disabled):hover,
  &:not(:disabled):active {
    background-color: ${th(baseColor, color => darken(0.05, color))};
  }
`

export const colorYik = color => {
  const { red: r, green: g, blue: b } = parseToRgb(color)
  const yik = (r * 299 + g * 587 + b * 114) / 1000
  return yik >= 150 ? th('yikTextDark') : th('yikTextLight')
}
