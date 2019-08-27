import { th } from '@xstyled/system'

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

  form: {
    valid: th.color('success'),
    invalid: th.color('danger'),
  },
}
