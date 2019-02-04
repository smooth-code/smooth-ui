/// <reference types="react" />

import * as React from 'react'

export type DefaultColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

export type Sizes = 'sm' | 'md' | 'lg'

interface InputType {
  checked?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  style?: React.CSSProperties
}

declare type OptionalThemeProp =
  | string
  | number
  | {
      xs?: string | number
      sm?: string | number
      md?: string | number
      lg?: string | number
      xl?: string | number
    }

interface BasicsProps<P = Element> extends React.DOMAttributes<P> {
  opacity?: OptionalThemeProp
  overflow?: OptionalThemeProp
}

interface PaddingProps {
  p?: OptionalThemeProp
  px?: OptionalThemeProp
  py?: OptionalThemeProp
  pt?: OptionalThemeProp
  pr?: OptionalThemeProp
  pb?: OptionalThemeProp
  pl?: OptionalThemeProp
}

interface MarginProps {
  m?: OptionalThemeProp
  mx?: OptionalThemeProp
  my?: OptionalThemeProp
  mt?: OptionalThemeProp
  mr?: OptionalThemeProp
  mb?: OptionalThemeProp
  ml?: OptionalThemeProp
}

interface BorderProps {
  border?: OptionalThemeProp
  borderTop?: OptionalThemeProp
  borderRight?: OptionalThemeProp
  borderBottom?: OptionalThemeProp
  borderLeft?: OptionalThemeProp
  borderColor?: OptionalThemeProp
  borderRadius?: OptionalThemeProp
  boxShadow?: OptionalThemeProp
}

interface FontProps {
  fontFamily?: OptionalThemeProp
  fontSize?: OptionalThemeProp
  lineHeight?: OptionalThemeProp
  fontWeight?: OptionalThemeProp
  textAlign?: OptionalThemeProp
  letterSpacing?: OptionalThemeProp
  color?: OptionalThemeProp
  textTransform?: OptionalThemeProp
}

interface DimensionsProps {
  width?: OptionalThemeProp
  height?: OptionalThemeProp
  maxWidth?: OptionalThemeProp
  maxHeight?: OptionalThemeProp
  minHeight?: OptionalThemeProp
  minWidth?: OptionalThemeProp
}

interface FlexProps {
  display?: OptionalThemeProp
  alignItems?: OptionalThemeProp
  alignContent?: OptionalThemeProp
  justifyContent?: OptionalThemeProp
  flexWrap?: OptionalThemeProp
  flexBasis?: OptionalThemeProp
  flexDirection?: OptionalThemeProp
  flex?: OptionalThemeProp
  justifySelf?: OptionalThemeProp
  alignSelf?: OptionalThemeProp
  order?: OptionalThemeProp
}

interface BackgroundProps {
  background?: OptionalThemeProp
  backgroundColor?: OptionalThemeProp
  backgroundImage?: OptionalThemeProp
  backgroundSize?: OptionalThemeProp
  backgroundPosition?: OptionalThemeProp
  backgroundRepeat?: OptionalThemeProp
}

interface PositionProps {
  position?: OptionalThemeProp
  zIndex?: OptionalThemeProp
  top?: OptionalThemeProp
  right?: OptionalThemeProp
  bottom?: OptionalThemeProp
  left?: OptionalThemeProp
}

interface TogglerRenderProps {
  onToggle: (state?: boolean) => void
  toggled: boolean
}

interface TogglerProps {
  children: (props: TogglerRenderProps) => React.ReactNode
  defaultToggled?: boolean
  onToggle?: (value: boolean) => void
}

export const Toggler: React.FunctionComponent<TogglerProps>

interface SwitchStateProps {
  focused: boolean
  checked: boolean
  disabled: boolean
}

interface SwitchStateProps {
  children: (props: SwitchStateProps & InputType) => JSX.Element
}

export class SwitchState extends React.Component<SwitchStateProps> {}

export interface BoxProps
  extends BasicsProps,
    PaddingProps,
    MarginProps,
    PositionProps,
    BorderProps,
    FlexProps,
    FontProps,
    DimensionsProps,
    BackgroundProps {
  as?: string | React.ComponentType
}

type Omit<T, K> = Pick<T, Exclude<keyof T, keyof K>>

export type OmitBoxProps<T> = Omit<T, BoxProps>
type OmitFontProps<T> = Omit<T, FontProps>

export const Box: React.FunctionComponent<BoxProps>

export interface ButtonProps extends BoxProps {
  children?: React.ReactNode
  disabled?: boolean
  size?: Sizes
  variant?: DefaultColors
}

export const Button: React.FunctionComponent<ButtonProps>

export interface AlertProps extends BoxProps {
  children: React.ReactNode
  variant?: DefaultColors
}

export const Alert: React.FunctionComponent<AlertProps>

export interface CheckboxProps extends OmitFontProps<BoxProps> {
  checked?: boolean
  disabled?: boolean
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
  size?: Sizes
  value?: string
}

export const Checkbox: React.FunctionComponent<CheckboxProps>

export interface FormCheckProps extends BoxProps {
  children?: React.ReactNode
  inline?: boolean
}

export const FormCheck: React.FunctionComponent<FormCheckProps>

export const FormCheckLabel: React.FunctionComponent<
  BoxProps & React.HTMLProps<HTMLLabelElement>
>

export interface FormGroupProps extends BoxProps {
  children?: React.ReactNode
}

export const FormGroup: React.FunctionComponent<FormGroupProps>

export interface GridProps extends BoxProps {
  children?: React.ReactNode
  gutter?: number
  fluid?: boolean
}

export const Grid: React.FunctionComponent<GridProps>

export interface InputProps
  extends BoxProps,
    Omit<React.HTMLProps<HTMLInputElement>, BoxProps & { size: any }> {
  control?: boolean
  size?: Sizes
  valid?: boolean
}

export const Input: React.FunctionComponent<InputProps>

export interface LabelProps
  extends OmitBoxProps<React.HTMLProps<HTMLLabelElement>>,
    BoxProps {
  children?: React.ReactNode
}

export const Label: React.FunctionComponent<LabelProps>

export interface RadioProps
  extends Omit<React.HTMLProps<HTMLInputElement>, BoxProps & { size: any }>,
    OmitFontProps<BoxProps> {
  checked?: boolean
  disabled?: boolean
  size?: Sizes
  value?: string
}

export const Radio: React.FunctionComponent<RadioProps>

export interface RadioGroupProps {
  children?: React.ReactNode
}

export class RadioGroup extends React.Component<RadioGroupProps> {}

export interface RowProps extends BoxProps {
  gutter?: number | string
  children?: React.ReactNode
}

export const Row: React.FunctionComponent<RowProps>

export interface ColProps extends BoxProps {
  children?: React.ReactNode
  gutter?: number | string
  xs?: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
}

export const Col: React.FunctionComponent<ColProps>

export interface ControlFeedbackProps {
  valid: boolean
  children?: React.ReactNode
}

export const ControlFeedback: React.FunctionComponent<ControlFeedbackProps>

export interface SelectProps
  extends Omit<React.HTMLProps<HTMLSelectElement>, BoxProps & { size: any }>,
    BoxProps {
  arrow?: boolean
  children?: React.ReactNode
  control?: boolean
  size?: Sizes
  valid?: boolean
}

export const Select: React.FunctionComponent<SelectProps>

export interface SwitchProps extends BoxProps {
  checked?: boolean
  disabled?: boolean
  labeled?: boolean
  onLabel?: string
  offLabel: string
}

export const Switch: React.FunctionComponent<SwitchProps>

export interface TextareaProps
  extends Omit<React.HTMLProps<HTMLTextAreaElement>, { size: any }> {
  control?: boolean
  size?: Sizes
  valid?: boolean
}

export const Textarea: React.FunctionComponent<TextareaProps>

export interface TypographyProps extends BoxProps {
  children?: React.ReactNode
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'display-1'
    | 'display-2'
    | 'display-3'
    | 'display-4'
}

export const Typography: React.FunctionComponent<TypographyProps>

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface BreakpointProps {
  children?: React.ReactNode
  up?: Breakpoints
  down?: Breakpoints
}

export const Breakpoint: React.FunctionComponent<BreakpointProps>

export interface ThemeType {
  fontFamily: string
  colors: {
    white: (props: Object) => string
    gray100: (props: Object) => string
    gray200: (props: Object) => string
    gray300: (props: Object) => string
    gray400: (props: Object) => string
    gray500: (props: Object) => string
    gray600: (props: Object) => string
    gray700: (props: Object) => string
    gray800: (props: Object) => string
    gray900: (props: Object) => string
    black: (props: Object) => string

    blue: (props: Object) => string
    indigo: (props: Object) => string
    purple: (props: Object) => string
    pink: (props: Object) => string
    red: (props: Object) => string
    brick: (props: Object) => string
    orange: (props: Object) => string
    yellow: (props: Object) => string
    green: (props: Object) => string
    teal: (props: Object) => string
    cyan: (props: Object) => string

    primary: (props: Object) => string
    secondary: (props: Object) => string
    success: (props: Object) => string
    info: (props: Object) => string
    warning: (props: Object) => string
    danger: (props: Object) => string
    light: (props: Object) => string
    dark: (props: Object) => string

    primaryLight: (props: Object) => string
    secondaryLight: (props: Object) => string
  }

  colorVariants: [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
  spaces: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72]

  borderRadius: '.25rem'
  borderRadiusSm: '.2rem'
  borderRadiusLg: '.3rem'
  borderWidth: '1px'

  fontSizeBase: '1rem'
  fontSizeSm: (props: Object) => string
  fontSizeLg: (props: Object) => string

  fontWeightLight: 300
  fontWeightNormal: 400
  fontWeightBold: 700

  lineHeightBase: 1.5
  lineHeightSm: 1.5
  lineHeightLg: 1.5

  inputBtnPaddingY: '.375rem'
  inputBtnPaddingX: '.75rem'
  inputBtnLineHeight: (props: Object) => string

  inputBtnPaddingYSm: '.25rem'
  inputBtnPaddingXSm: '.5rem'
  inputBtnLineHeightSm: (props: Object) => string

  inputBtnPaddingYLg: '.5rem'
  inputBtnPaddingXLg: '1rem'
  inputBtnLineHeightLg: (props: Object) => string

  inputBtnBorderWidth: (props: Object) => string

  btnPaddingY: (props: Object) => string
  btnPaddingX: (props: Object) => string
  btnLineHeight: (props: Object) => string

  btnPaddingYSm: (props: Object) => string
  btnPaddingXSm: (props: Object) => string
  btnLineHeightSm: (props: Object) => string

  btnPaddingYLg: (props: Object) => string
  btnPaddingXLg: (props: Object) => string
  btnLineHeightLg: (props: Object) => string

  btnBorderWidth: 0
  btnDisabledOpacity: 0.8

  inputPaddingY: (props: Object) => string
  inputPaddingX: (props: Object) => string
  inputLineHeight: (props: Object) => string

  inputPaddingYSm: (props: Object) => string
  inputPaddingXSm: (props: Object) => string
  inputLineHeightSm: (props: Object) => string

  inputPaddingYLg: (props: Object) => string
  inputPaddingXLg: (props: Object) => string
  inputLineHeightLg: (props: Object) => string

  inputBorderWidth: (props: Object) => string
  inputBorderColor: (props: Object) => string
  inputBgColor: (props: Object) => string
  inputDisabledBgColor: (props: Object) => string
  inputDisabledText: (props: Object) => string
  inputPlaceholderText: (props: Object) => string
  inputTextColor: (props: Object) => string

  gridColumns: 12
  gridGutter: 8

  gridMaxWidths: {
    sm: '540px'
    md: '720px'
    lg: '960px'
    xl: '1140px'
  }

  alertPaddingY: '.75rem'
  alertPaddingX: '1.25rem'
  alertMarginBottom: '1rem'

  alertBgLevel: -10
  alertBorderLevel: -9
  alertColorLevel: 6

  alertVariant: (baseColorTheme: Object) => (props: Object) => AlertColorVariant

  zIndexControl: 1
  zIndexInnerSwitch: 10
  zIndexModal: 1050
  zIndexModalBackdrop: 1071

  transitionEnabled: true
  transition: (value: string) => (props: Object) => string

  safeTransitionProperties: [
    'color',
    'border-style',
    'visibility',
    'background',
    'background-color',
    'text-decoration',
    'box-shadow',
    'transform',
    'opacity'
  ]

  transitionBase: (props: Object) => string

  breakpoints: {
    xs: 0
    sm: 576
    md: 768
    lg: 992
    xl: 1200
  }

  yiqContrastedThreshold: 150
  colorInterval: 0.08

  headingsMarginBottom: '.5rem'
  headingsFontFamily: (props: Object) => string
  headingsFontWeight: 500
  headingsLineHeight: 1.2
  headingsColor: 'inherit'

  h1FontSize: '2.5rem'
  h2FontSize: '2rem'
  h3FontSize: '1.75rem'
  h4FontSize: '1.5rem'
  h5FontSize: '1.25rem'
  h6FontSize: '1rem'

  display1Size: '6rem'
  display2Size: '5.5rem'
  display3Size: '4.4rem'
  display4Size: '3.5rem'

  display1Weight: 300
  display2Weight: 300
  display3Weight: 300
  display4Weight: 300

  displayLineHeight: (props: Object) => string

  modalBackdropBg: 'rgba(0, 0, 0, 0.5)'

  modalInnerPadding: '1rem'
  modalTransitionDuration: 300 // ms

  modalDialogMargin: '0.5rem'
  modalDialogMarginYSmUp: '1.75rem'

  modalContentBg: (props: Object) => string
  modalContentBorderWidth: (props: Object) => string
  modalContentBorderColor: (props: Object) => string

  modalContentBorderRadius: (props: Object) => string
  modalContentBoxShadowXs: (props: Object) => string

  modalContentBoxShadowSmUp: (props: Object) => string

  modalHeaderBorderColor: (props: Object) => string
  modalFooterBorderColor: (props: Object) => string
  modalHeaderBorderWidth: (props: Object) => string
  modalFooterBorderWidth: (props: Object) => string

  base: () => () => (props: Object) => string

  controlFocus: (baseColor: string) => (props: Object) => string
  baseFocus: (baseColor: string) => (props: Object) => string

  btnVariant: (baseColor: string) => (props: Object) => string

  colorLevel: (
    color: (props: Object) => string | string,
    level: (props: Object) => string | string,
  ) => (props: Object) => string

  colorYik: (color: string) => (props: Object) => string
}

export const theme: ThemeType
interface AlertColorVariant {
  color: string
  backgroundColor: string
  borderColor: string
  hr: {
    borderTopColor: string
  }
}

export const th: (
  name: string,
  transform?: (res: any) => string,
) => (props: Object) => string

export const calc: (
  value: string,
  fn: (num: string | number) => string,
) => string

export const unit: (unit: string) => (value: number | string) => string

export const px: ReturnType<typeof unit>

export interface ModalProps extends BoxProps {
  children?: React.ReactNode
  onClose?: () => void
  opened?: boolean
  initialFocusRef?: Object
}

export const Modal: React.FunctionComponent<ModalProps>

export interface ModalBodyProps extends BoxProps {
  children?: React.ReactNode
}

export const ModalBody: React.FunctionComponent<ModalBodyProps>

export interface ModalCloseButtonProps extends BoxProps {
  children?: React.ReactNode
}

export const ModalCloseButton: React.FunctionComponent<ModalCloseButtonProps>

export interface ModalContentProps extends BoxProps {
  children?: React.ReactNode
}

export const ModalContent: React.FunctionComponent<ModalContentProps>

export const ModalContext: React.Context<any>

export interface ModalDialogProps extends BoxProps {
  children?: React.ReactNode
}

export const ModalDialog: React.FunctionComponent<ModalDialogProps>

export interface ModalFooterProps extends BoxProps {
  children?: React.ReactNode
}

export const ModalFooter: React.FunctionComponent<ModalFooterProps>

export interface ModalHeaderProps extends BoxProps {
  children?: React.ReactNode
}

export const ModalHeader: React.FunctionComponent<ModalHeaderProps>

export interface PortalProps {
  type?: string
  children?: React.ReactNode
}

export const Portal: React.FunctionComponent<PortalProps>

/*
 * Breakpoints
 */

export const DEFAULT_BREAKPOINTS: {
  xs: 0
  sm: 576
  md: 768
  lg: 992
  xl: 1200
}

export const breakpoints: (props: Object) => Object

export const mediaMinWidth: (value: number | string) => string

export const mediaMaxWidth: (value: number | string) => string

export const mediaBetweenWidth: (
  min: string | number,
  max: string | number,
) => string
