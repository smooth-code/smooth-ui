/* eslint-disable no-unused-vars */
import { css } from 'styled-components'
import {
  transparentize,
  lighten,
  modularScale,
  darken,
  parseToRgb,
  mix,
} from 'polished'
import defaultBreakpoints from './defaultBreakpoints'
import { th, mixin } from '../utils'

// Fonts

export const fontFamily =
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'

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

export const controlFocusBoxShadow = props => color =>
  css`0 0 0 0.2rem ${th(color, c => transparentize(0.75, c))}`

// Alerts

export const alertPaddingY = '.75rem'
export const alertPaddingX = '1.25rem'
export const alertMarginBottom = '1rem'

export const alertBgLevel = -10
export const alertBorderLevel = -9
export const alertColorLevel = 6

// Z-indexes

export const zIndexControl = 1
export const zIndexInnerSwitch = 10
export const zIndexModal = 1050
export const zIndexModalBackdrop = 1071

// Transitions
const safeTransitionProperties = [
  'color',
  'border-style',
  'visibility',
  'background',
  'background-color',
  'text-decoration',
  'box-shadow',
  'transform',
]
export const transitionBase = safeTransitionProperties
  .map(prop => `${prop} .2s ease-in-out`)
  .join(',')

// Breakpoints

export const breakpoints = defaultBreakpoints

// Color levels

export const yiqContrastedThreshold = 150
export const colorInterval = 0.08

// Headings

export const headingsMarginBottom = '.5rem'
export const headingsFontFamily = null
export const headingsFontWeight = 500
export const headingsLineHeight = 1.2
export const headingsColor = 'inherit'

export const h1FontSize = '2.5rem'
export const h2FontSize = '2rem'
export const h3FontSize = '1.75rem'
export const h4FontSize = '1.5rem'
export const h5FontSize = '1.25rem'
export const h6FontSize = '1rem'

export const display1Size = '6rem'
export const display2Size = '5.5rem'
export const display3Size = '4.4rem'
export const display4Size = '3.5rem'

export const display1Weight = 300
export const display2Weight = 300
export const display3Weight = 300
export const display4Weight = 300

export const displayLineHeight = th('headingsLineHeight')

// Modals

export const modalBackdropBg = 'rgba(0, 0, 0, 0.5)'

export const modalInnerPadding = '1rem'
export const modalTransitionDuration = 300 // ms

export const modalDialogMargin = '0.5rem'
export const modalDialogMarginYSmUp = '1.75rem'

export const modalContentBg = th('white')
export const modalContentBorderWidth = th('borderWidth')
export const modalContentBorderColor = th('black', color =>
  transparentize(0.8, color),
)
export const modalContentBorderRadius = th('borderRadiusLg')
export const modalContentBoxShadowXs = css`0 .25rem .5rem ${th('black', color =>
  transparentize(0.8, color),
)}`
export const modalContentBoxShadowSmUp = css`0 .5rem 1rem ${th('black', color =>
  transparentize(0.8, color),
)}`

export const modalHeaderBorderColor = th('gray200')
export const modalFooterBorderColor = th('modalHeaderBorderColor')
export const modalHeaderBorderWidth = th('modalContentBorderWidth')
export const modalFooterBorderWidth = th('modalHeaderBorderWidth')

// Mixins
export const base = props => () => css`
  box-sizing: border-box;
  font-family: ${th('fontFamily')};
  font-size: ${th('fontSizeBase')};
  line-height: ${th('lineHeightBase')};

  * {
    box-sizing: border-box;
  }
`

export const controlFocus = props => (baseColor = 'primary') => css`
  outline: 0;
  box-shadow: 0 0 2px ${th(baseColor, color => transparentize(0.1, color))};
`

export const btnVariant = props => baseColor => css`
  color: ${mixin('colorYik', th(baseColor))};
  background-color: ${th(baseColor)};

  &:focus {
    ${mixin('controlFocus', baseColor)};
  }

  &:not(:disabled):hover,
  &:not(:disabled):active {
    background-color: ${th(baseColor, color => darken(0.05, color))};
  }
`

export const alertVariant = props => baseColor =>
  css`
    color: ${mixin('colorLevel', th(baseColor), th('alertColorLevel'))};
    background-color: ${mixin('colorLevel', th(baseColor), th('alertBgLevel'))};
    border-color: ${mixin('colorLevel', th(baseColor), th('alertBorderLevel'))};

    hr {
      border-top-color: ${props =>
        darken(
          0.05,
          mixin('colorLevel', th(baseColor), th('alertColorLevel'))(props),
        )};
    }
  `

export const colorLevel = props => (color, level) => {
  color = typeof color === 'function' ? color(props) : color
  level = typeof level === 'function' ? level(props) : level
  const baseColor = level > 0 ? th('black')(props) : th('white')(props)
  const absLevel = Math.abs(level)
  return mix(absLevel * colorInterval, baseColor, color)
}

export const colorYik = props => color => {
  color = typeof color === 'function' ? color(props) : color
  const { red: r, green: g, blue: b } = parseToRgb(color)
  const yik = (r * 299 + g * 587 + b * 114) / 1000
  return yik >= th('yiqContrastedThreshold')(props)
    ? th('yikTextDark')(props)
    : th('yikTextLight')(props)
}
