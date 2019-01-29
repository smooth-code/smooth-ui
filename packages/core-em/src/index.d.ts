import * as emotionCore from '@emotion/core'
import { withTheme } from 'emotion-theming'
import { ThemeType } from './shared'

export * from './shared'

export const Normalize: ReturnType<typeof withTheme>

export type ResponsiveUtilityStyles =
  | string
  | emotionCore.ArrayInterpolation<undefined>

export const up: (
  name: string | number,
  code: ResponsiveUtilityStyles,
) => (props: Object) => any

export const down: (
  name: string | number,
  code: ResponsiveUtilityStyles,
) => (props: Object) => any

export const between: (
  lower: string | number,
  upper: string | number,
  code: ResponsiveUtilityStyles,
) => (props: Object) => any
