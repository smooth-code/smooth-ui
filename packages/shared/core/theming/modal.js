import { transparentize } from 'polished'
import { css } from '../styled-engine'
import { thd } from '../utils/index'
import { white, black, gray200 } from './color'
import { borderWidth, borderRadiusLg } from './border'

export const modalBackdropBg = thd('modalBackdropBg', 'rgba(0, 0, 0, 0.5)')
export const modalTransitionDuration = thd('modalTransitionDuration', 300)
export const modalInnerPadding = thd('modalInnerPadding', '1rem')

export const modalDialogMargin = thd('modalDialogMargin', '0.5rem')
export const modalDialogMarginYSmUp = thd('modalDialogMarginYSmUp', '1.75rem')

export const modalContentBg = thd('modalContentBg', white)
export const modalContentBorderWidth = thd(
  'modalContentBorderWidth',
  borderWidth,
)
export const modalContentBorderColor = thd(
  'modalContentBorderColor',
  black,
  color => transparentize(0.8, color),
)
export const modalContentBorderRadius = thd(
  'modalContentBorderRadius',
  borderRadiusLg,
)

export const modalContentBoxShadowXs = thd(
  'modalContentBoxShadowXs',
  p => css`
    box-shadow: 0 0.25rem 0.5rem ${transparentize(0.8, black(p))};
  `,
)

export const modalContentBoxShadowSmUp = thd(
  'modalContentBoxShadowSmUp',
  p => css`
    box-shadow: 0 0.5rem 1rem ${transparentize(0.8, black(p))};
  `,
)

export const modalHeaderBorderColor = thd('modalHeaderBorderColor', gray200)
export const modalFooterBorderColor = thd(
  'modalFooterBorderColor',
  modalHeaderBorderColor,
)
export const modalHeaderBorderWidth = thd(
  'modalHeaderBorderWidth',
  modalContentBorderWidth,
)
export const modalFooterBorderWidth = thd(
  'modalFooterBorderWidth',
  modalHeaderBorderWidth,
)
