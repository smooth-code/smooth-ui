/* eslint-disable no-unused-vars */
import {
  transparentize,
  lighten,
  modularScale,
  darken,
  parseToRgb,
  mix,
} from 'polished'
import { css } from './styled-engine'
import { DEFAULT_BREAKPOINTS } from './utils/breakpoints'
import { th, mixin } from './utils/system'

export const __smoothUI = true

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

export const primary = p => th('brick')(p)
export const secondary = p => th('gray600')(p)
export const success = p => th('green')(p)
export const info = p => th('cyan')(p)
export const warning = p => th('yellow')(p)
export const danger = p => th('red')(p)
export const light = p => th('gray100')(p)
export const dark = p => th('gray800')(p)

export const primaryLight = p => th('primary', c => lighten(0.3, c))(p)
export const secondaryLight = p => th('secondary', c => lighten(0.3, c))(p)

export const yikTextDark = '#111'
export const yikTextLight = '#fff'

export const colorVariants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
]

// System

export const colors = [
  'white',
  'gray100',
  'gray200',
  'gray300',
  'gray400',
  'gray500',
  'gray600',
  'gray700',
  'gray800',
  'gray900',
  'black',

  'blue',
  'indigo',
  'purple',
  'pink',
  'red',
  'brick',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',

  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'light',
  'dark',

  'primaryLight',
  'secondaryLight',
].reduce((obj, v) => {
  obj[v] = p => th(v)(p)
  return obj
}, {})

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]

export const spaces = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72]

// Borders

export const borderRadius = '.25rem'
export const borderRadiusSm = '.2rem'
export const borderRadiusLg = '.3rem'
export const borderWidth = '1px'

// Fonts

export const fontSizeBase = '1rem'
export const fontSizeSm = p =>
  th('fontSizeBase', fontSize => modularScale(-1, fontSize))(p)
export const fontSizeLg = p =>
  th('fontSizeBase', fontSize => modularScale(1, fontSize))(p)

export const fontWeightLight = 300
export const fontWeightNormal = 400
export const fontWeightBold = 700

export const lineHeightBase = 1.5
export const lineHeightSm = 1.5
export const lineHeightLg = 1.5

// Input + Buttons

export const inputBtnPaddingY = '.375rem'
export const inputBtnPaddingX = '.75rem'
export const inputBtnLineHeight = p => th('lineHeightBase')(p)

export const inputBtnPaddingYSm = '.25rem'
export const inputBtnPaddingXSm = '.5rem'
export const inputBtnLineHeightSm = p => th('lineHeightSm')(p)

export const inputBtnPaddingYLg = '.5rem'
export const inputBtnPaddingXLg = '1rem'
export const inputBtnLineHeightLg = p => th('lineHeightLg')(p)

export const inputBtnBorderWidth = p => th('borderWidth')(p)

// Buttons

export const btnPaddingY = p => th('inputBtnPaddingY')(p)
export const btnPaddingX = p => th('inputBtnPaddingX')(p)
export const btnLineHeight = p => th('inputBtnLineHeight')(p)

export const btnPaddingYSm = p => th('inputBtnPaddingYSm')(p)
export const btnPaddingXSm = p => th('inputBtnPaddingXSm')(p)
export const btnLineHeightSm = p => th('inputBtnLineHeightSm')(p)

export const btnPaddingYLg = p => th('inputBtnPaddingYLg')(p)
export const btnPaddingXLg = p => th('inputBtnPaddingXLg')(p)
export const btnLineHeightLg = p => th('inputBtnLineHeightLg')(p)

export const btnBorderWidth = 0
export const btnDisabledOpacity = 0.8

// Inputs

export const inputPaddingY = p => th('inputBtnPaddingY')(p)
export const inputPaddingX = p => th('inputBtnPaddingX')(p)
export const inputLineHeight = p => th('inputBtnLineHeight')(p)

export const inputPaddingYSm = p => th('inputBtnPaddingYSm')(p)
export const inputPaddingXSm = p => th('inputBtnPaddingXSm')(p)
export const inputLineHeightSm = p => th('inputBtnLineHeightSm')(p)

export const inputPaddingYLg = p => th('inputBtnPaddingYLg')(p)
export const inputPaddingXLg = p => th('inputBtnPaddingXLg')(p)
export const inputLineHeightLg = p => th('inputBtnLineHeightLg')(p)

export const inputBorderWidth = p => th('inputBtnBorderWidth')(p)
export const inputBorderColor = p => th('gray300')(p)
export const inputBgColor = p => th('white')(p)
export const inputDisabledBgColor = p => th('gray100')(p)
export const inputDisabledText = p => th('gray600')(p)
export const inputPlaceholderText = p => th('gray600')(p)
export const inputTextColor = p => th('gray900')(p)

// Controls

export const controlFocusBorderColor = p =>
  th('primary', color => lighten(0.25, color))(p)

export const controlFocusBoxShadow = p => color =>
  `0 0 0 0.2rem ${th(color, c => transparentize(0.75, c))(p)}`

// Grid

export const gridColumns = 12
export const gridGutter = 8

export const gridMaxWidths = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xl: '1140px',
}

// Alerts

export const alertPaddingY = '.75rem'
export const alertPaddingX = '1.25rem'
export const alertMarginBottom = '1rem'

export const alertBgLevel = -10
export const alertBorderLevel = -9
export const alertColorLevel = 6

export const alertVariant = p => baseColorTheme => {
  const baseColor = th(baseColorTheme)(p)
  const alertColorLevel = th('alertColorLevel')(p)
  const alertBgLevel = th('alertBgLevel')(p)
  const alertBorderLevel = th('alertBorderLevel')(p)

  return css`
    color: ${mixin('colorLevel', baseColor, alertColorLevel)(p)};
    background-color: ${mixin('colorLevel', baseColor, alertBgLevel)(p)};
    border-color: ${mixin('colorLevel', baseColor, alertBorderLevel)(p)};
    hr {
      border-top-color: ${darken(
        0.05,
        mixin('colorLevel', baseColor, alertColorLevel)(p),
      )};
    }
  `
}

// Z-indexes

export const zIndexControl = 1
export const zIndexInnerSwitch = 10
export const zIndexModal = 1050
export const zIndexModalBackdrop = 1071

// Transitions
export const transitionEnabled = true
export const transition = p => value =>
  th('transitionEnabled')(p)
    ? css`
        transition: ${value};

        @media screen and (prefers-reduced-motion: reduce) {
          transition: none;
        }
      `
    : ''

const safeTransitionProperties = [
  'color',
  'border-style',
  'visibility',
  'background',
  'background-color',
  'text-decoration',
  'box-shadow',
  'transform',
  'opacity',
]

export const transitionBase = p =>
  mixin(
    'transition',
    safeTransitionProperties.map(prop => `${prop} .2s ease-in-out`).join(','),
  )(p)

// Breakpoints

export const breakpoints = DEFAULT_BREAKPOINTS

// Color levels

export const yiqContrastedThreshold = 150
export const colorInterval = 0.08

// Headings

export const headingsMarginBottom = '.5rem'
export const headingsFontFamily = p => th('fontFamily')(p)
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

export const displayLineHeight = p => th('headingsLineHeight')(p)

// Modals

export const modalBackdropBg = 'rgba(0, 0, 0, 0.5)'

export const modalInnerPadding = '1rem'
export const modalTransitionDuration = 300 // ms

export const modalDialogMargin = '0.5rem'
export const modalDialogMarginYSmUp = '1.75rem'

export const modalContentBg = p => th('white')(p)
export const modalContentBorderWidth = p => th('borderWidth')(p)
export const modalContentBorderColor = p =>
  th('black', color => transparentize(0.8, color))(p)
export const modalContentBorderRadius = p => th('borderRadiusLg')(p)
export const modalContentBoxShadowXs = css`
  box-shadow: 0 0.25rem 0.5rem
    ${p => th('black', color => transparentize(0.8, color))(p)};
`
export const modalContentBoxShadowSmUp = css`
  box-shadow: 0 0.5rem 1rem
    ${p => th('black', color => transparentize(0.8, color))(p)};
`

export const modalHeaderBorderColor = p => th('gray200')(p)
export const modalFooterBorderColor = p => th('modalHeaderBorderColor')(p)
export const modalHeaderBorderWidth = p => th('modalContentBorderWidth')(p)
export const modalFooterBorderWidth = p => th('modalHeaderBorderWidth')(p)

// Mixins
export const base = () => () => css`
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
