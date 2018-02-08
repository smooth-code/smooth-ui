/* eslint-disable no-unused-vars */
import { injectGlobal, css } from 'styled-components'
import { transparentize, lighten } from 'polished'

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

const white = '#fff'
const gray100 = '#f8f9fa'
const gray200 = '#e9ecef'
const gray300 = '#dee2e6'
const gray400 = '#ced4da'
const gray500 = '#adb5bd'
const gray600 = '#6c757d'
const gray700 = '#495057'
const gray800 = '#343a40'
const gray900 = '#212529'
const black = '#000'

const blue = '#007bff'
const indigo = '#6610f2'
const purple = '#6f42c1'
const pink = '#e83e8c'
const red = '#dc3545'
const orange = '#fd7e14'
const yellow = '#ffc107'
const green = '#28a745'
const teal = '#20c997'
const cyan = '#17a2b8'

const primary = blue
const secondary = gray600
const success = green
const info = cyan
const warning = yellow
const danger = red
const light = gray100
const dark = gray800

const primaryColor = '#bd4932'
const grayLightColor = '#f6f6f6'
const grayDarkColor = '#aaa'
const grayDarkerColor = '#333'

export default {
  colors: {
    primary: primaryColor,
    primaryLight: lighten(0.3, primaryColor),
    danger,
    success,
    white,
    gray100,
    gray200,
    gray300,
    gray400,
    gray500,
    gray600,
    gray700,
    gray800,
    gray900,
    black,
    grayLight: '#f6f6f6',
    gray: '#cfcfcf',
    grayDark: grayDarkColor,
    grayDarker: grayDarkerColor,
    layoutBorderColor: transparentize(0.9, primaryColor),
    controlText: grayDarkerColor,
    controlBorder: '#d7d7d7',
    controlBorderFocus: '#515355',
    disabledControl: transparentize(0.95, primaryColor),
    disabledControlBg: grayLightColor,
    disabledControlText: grayDarkColor,
    placeholder: grayDarkColor,
  },
  borderRadius: {
    sm: '.2rem',
    md: '.25rem',
    lg: '.3rem',
  },
  controlFontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
  },
  textControlPadding: {
    sm: '0.25rem 0.5rem',
    md: '0.375rem 0.75rem',
    lg: '0.5rem 1rem',
  },
  transition: {
    time: '300ms',
  },
  mixins: {
    controlFocus: css`
      outline: 0;
      box-shadow: 0 0 2px ${transparentize(0.1, primaryColor)};
    `,
    control: css`
      &.sui-control {
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: ${props => props.theme.colors.gray700};
        background-color: ${props => props.theme.colors.white};
        background-clip: padding-box;
        border: 1px solid ${props => props.theme.colors.gray400};
        border-radius: 0.25rem;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

        &:focus {
          color: ${props => props.theme.colors.gray700};
          background-color: ${props => props.theme.colors.white};
          border-color: ${props => lighten(0.25, props.theme.colors.primary)};
          outline: 0;
          box-shadow: 0 0 0 0.2rem
            ${props => transparentize(0.75, props.theme.colors.primary)};
        }

        &.sui-is-valid {
          border-color: ${props => props.theme.colors.success};

          &:focus {
            border-color: ${props => props.theme.colors.success};
            box-shadow: 0 0 0 0.2rem
              ${props => transparentize(0.75, props.theme.colors.success)};
          }
        }

        &.sui-is-invalid {
          border-color: ${props => props.theme.colors.danger};

          &:focus {
            border-color: ${props => props.theme.colors.danger};
            box-shadow: 0 0 0 0.2rem
              ${props => transparentize(0.75, props.theme.colors.danger)};
          }
        }
      }
    `,
  },
  zIndexes: {
    control: 1,
    innerSwitch: 10,
  },
  breakPoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}
