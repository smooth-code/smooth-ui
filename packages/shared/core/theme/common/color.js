import { th } from '@xstyled/system'
import { transparentize } from 'polished'

export const colors = {
  black: '#000',
  white: '#fff',

  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',

  blue: '#007bff',
  indigo: '#6610f2',
  purple: '#6f42c1',
  pink: '#e83e8c',
  red: '#dc3545',
  brick: '#bd4932',
  orange: '#fd7e14',
  yellow: '#ffc107',
  green: '#28a745',
  teal: '#20c997',
  cyan: '#17a2b8',

  primary: th.color('brick'),
  secondary: th.color('gray600'),
  success: th.color('green'),
  info: th.color('cyan'),
  warning: th.color('yellow'),
  danger: th.color('red'),
  light: th.color('gray100'),
  dark: th.color('gray800'),

  lighter: th.color('white'),
  light100: th.color('gray100'),
  light200: th.color('gray200'),
  light300: th.color('gray300'),
  light400: th.color('gray400'),
  light500: th.color('gray500'),
  light600: th.color('gray600'),
  light700: th.color('gray700'),
  light800: th.color('gray800'),
  light900: th.color('gray900'),
  darker: th.color('black'),
  highlightBackground: p => transparentize(0.96, th.color('darker')(p)),
  highlightBorder: p => transparentize(0.875, th.color('darker')(p)),

  form: {
    valid: th.color('success'),
    invalid: th.color('danger'),
  },

  modes: {
    dark: {
      lighter: th.color('black'),
      darker: th.color('white'),
      light100: th.color('gray900'),
      light200: th.color('gray800'),
      light300: th.color('gray700'),
      light400: th.color('gray600'),
      light500: th.color('gray500'),
      light600: th.color('gray400'),
      light700: th.color('gray300'),
      light800: th.color('gray200'),
      light900: th.color('gray100'),
    },
  },
}
