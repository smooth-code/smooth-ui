import React from 'react'
import PropTypes from 'prop-types'
import {
  dimensions,
  space,
  flexboxes,
  basics,
  backgrounds,
  positions,
  borders,
  compose,
} from '@smooth-ui/system'
import {
  zIndexControl,
  borderRadiusSm,
  borderRadius,
  borderRadiusLg,
  success,
  danger,
  white,
  primary,
  transitionBase,
  inputBgColor,
  inputBorderWidth,
  inputBorderColor,
  inputDisabledBgColor,
  controlFocus,
  baseFocus,
} from './theming/index'
import { css } from './styled-engine'
import SwitchState from './SwitchState'
import createComponent from './createComponent'

const sizeStyle = {
  sm: p => css`
    .sui-checkbox-content {
      border-radius: ${borderRadiusSm(p)};
      width: 0.875rem;
      height: 0.875rem;
    }

    .sui-checkbox-check {
      width: 8px;
      height: 8px;
    }
  `,
  md: p => css`
    .sui-checkbox-content {
      border-radius: ${borderRadius(p)};
      width: 1rem;
      height: 1rem;
    }

    .sui-checkbox-check {
      width: 10px;
      height: 10px;
    }
  `,
  lg: p => css`
    .sui-checkbox-content {
      border-radius: ${borderRadiusLg(p)};
      width: 1.25rem;
      height: 1.25rem;
    }

    .sui-checkbox-check {
      width: 12px;
      height: 12px;
    }
  `,
}

const validStyle = p => {
  const { valid } = p
  if (valid !== true && valid !== false) return null
  const color = valid ? success(p) : danger(p)
  return css`
    input + .sui-checkbox-content,
    input:checked + .sui-checkbox-content {
      border-color: ${color};
    }

    input:checked + .sui-checkbox-content {
      background-color: ${color};
    }

    input:focus + .sui-checkbox-content {
      border-color: ${color};
      ${controlFocus(color)(p)}
    }
  `
}

const controlStyle = p =>
  css`
    input:focus + .sui-checkbox-content {
      ${controlFocus(primary(p))(p)}
    }

    ${validStyle(p)};
  `

const containerSystem = compose(
  basics,
  dimensions,
  space,
  flexboxes,
  positions,
)

const contentSystem = compose(
  dimensions,
  backgrounds,
  borders,
)

const system = compose(
  containerSystem,
  contentSystem,
)

const Checkbox = createComponent(() => ({
  name: 'checkbox',
  omitProps: ['control', 'valid'],
  system,
  applySystem: null,
  render: ({ Component, ref, className, size, ...props }) => (
    <SwitchState {...props}>
      {({ input }) => (
        <Component className={className}>
          <input ref={ref} type="checkbox" {...input} />
          <div className="sui-checkbox-content">
            <svg className="sui-checkbox-check" viewBox="0 0 512 512">
              <path
                fill="currentColor"
                d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
              />
            </svg>
          </div>
        </Component>
      )}
    </SwitchState>
  ),
  style: p => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    z-index: ${zIndexControl(p)};

    .sui-checkbox-check {
      pointer-events: none;
      transform: scale(0);
      transform-origin: center;
      color: ${white(p)};
      ${transitionBase(p)};
    }

    .sui-checkbox-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      background-color: ${inputBgColor(p)};
      border-radius: ${borderRadius(p)};
      border-style: solid;
      border-width: ${inputBorderWidth(p)};
      border-color: ${inputBorderColor(p)};
      ${transitionBase(p)};
    }

    input:checked + .sui-checkbox-content {
      background-color: ${primary(p)};
      border-color: transparent;

      svg {
        transform: scale(1);
      }
    }

    input:focus + .sui-checkbox-content {
      ${baseFocus(primary(p))(p)};
    }

    input:disabled + .sui-checkbox-content {
      background-color: ${inputDisabledBgColor(p)};
    }

    ${sizeStyle[p.size] && sizeStyle[p.size] && sizeStyle[p.size](p)};
    ${p.control && controlStyle(p)};

    ${containerSystem.props};

    .sui-checkbox-content {
      ${contentSystem.props};
    }
  `,
  propTypes: {
    checked: PropTypes.bool,
    control: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    valid: PropTypes.bool,
    value: PropTypes.string,
  },
  defaultProps: {
    size: 'md',
  },
}))

export default Checkbox
