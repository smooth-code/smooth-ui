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
  primary,
  transitionBase,
  inputBgColor,
  inputBorderWidth,
  inputBorderColor,
  inputDisabledBgColor,
  baseFocus,
  controlFocus,
  success,
  danger,
} from './theming/index'
import { css } from './styled-engine'
import SwitchState from './SwitchState'
import createComponent from './createComponent'

const sizeStyle = {
  sm: css`
    .sui-radio-content {
      width: 0.875rem;
      height: 0.875rem;
    }

    .sui-radio-circle {
      width: 8px;
      height: 8px;
    }
  `,
  md: css`
    .sui-radio-content {
      width: 1rem;
      height: 1rem;
    }

    .sui-radio-circle {
      width: 10px;
      height: 10px;
    }
  `,
  lg: css`
    .sui-radio-content {
      width: 1.25rem;
      height: 1.25rem;
    }

    .sui-radio-circle {
      width: 14px;
      height: 14px;
    }
  `,
}

const validStyle = p => {
  const { valid } = p
  if (valid !== true && valid !== false) return null
  const color = valid ? success(p) : danger(p)
  return css`
    input + .sui-radio-content,
    input:checked + .sui-radio-content {
      border-color: ${color};
    }

    input:checked + .sui-radio-content .sui-radio-circle {
      background-color: ${color};
    }

    input:focus + .sui-radio-content {
      border-color: ${color};
      ${controlFocus(color)(p)}
    }
  `
}

const controlStyle = p =>
  css`
    input:focus + .sui-radio-content {
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

const Radio = createComponent(() => ({
  name: 'radio',
  system,
  applySystem: null,
  render: ({ Component, ref, className, size, control, valid, ...props }) => (
    <SwitchState {...props}>
      {({ input }) => (
        <Component className={className}>
          <input ref={ref} type="radio" {...input} />
          <div className="sui-radio-content">
            <div className="sui-radio-circle" />
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
    position: relative;

    .sui-radio-content {
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: ${inputBgColor(p)};
      border-width: ${inputBorderWidth(p)};
      border-style: solid;
      border-color: ${inputBorderColor(p)};
      ${transitionBase(p)};
    }

    input:checked + .sui-radio-content {
      border-color: ${primary(p)};

      .sui-radio-circle {
        transform: scale(1);
      }
    }

    input:focus + .sui-radio-content {
      ${baseFocus(primary(p))(p)};
    }

    input:disabled + .sui-radio-content {
      background-color: ${inputDisabledBgColor(p)};
    }

    .sui-radio-circle {
      ${transitionBase(p)};
      border-radius: 50%;
      background-color: ${primary(p)};
      transform: scale(0);
    }

    ${p.size && sizeStyle[p.size]};

    ${containerSystem.props};

    .sui-radio-content {
      ${contentSystem.props};
    }

    ${p.control && controlStyle(p)};
  `,
  propTypes: {
    control: PropTypes.bool,
    checked: PropTypes.bool,
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

export default Radio
