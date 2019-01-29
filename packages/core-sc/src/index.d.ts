import * as styledComponents from 'styled-components'
import { ThemeType } from './shared'

export * from './shared'

export const Normalize: styledComponents.GlobalStyleComponent<{__scTheme?: ThemeType},ThemeType>

export type ResponsiveUtilityStyles =
  | string
  | styledComponents.FlattenSimpleInterpolation

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
