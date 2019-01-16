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
import { css } from './styled-engine'
import { th, mixin } from './utils/system'
import SwitchState from './SwitchState'
import createComponent from './utils/createComponent'

const sizeStyle = {
  sm: css`
    .sui-checkbox-content {
      border-radius: ${th('borderRadiusSm')};
      width: 0.875rem;
      height: 0.875rem;
    }

    .sui-checkbox-check {
      width: 8px;
      height: 8px;
    }
  `,
  md: css`
    .sui-checkbox-content {
      border-radius: ${th('borderRadius')};
      width: 1rem;
      height: 1rem;
    }

    .sui-checkbox-check {
      width: 10px;
      height: 10px;
    }
  `,
  lg: css`
    .sui-checkbox-content {
      border-radius: ${th('borderRadiusLg')};
      width: 1.25rem;
      height: 1.25rem;
    }

    .sui-checkbox-check {
      width: 12px;
      height: 12px;
    }
  `,
}

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
  style: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    z-index: ${th('zIndexControl')};

    .sui-checkbox-check {
      pointer-events: none;
      transform: scale(0);
      transform-origin: center;
      color: ${th('white')};
      ${th('transitionBase')};
    }

    .sui-checkbox-content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      background-color: ${th('inputBgColor')};
      border-radius: ${th('borderRadius')};
      border-style: solid;
      border-width: ${th('inputBorderWidth')};
      border-color: ${th('inputBorderColor')};
      ${th('transitionBase')};
    }

    input:checked + .sui-checkbox-content {
      background-color: ${th('primary')};
      border-color: transparent;

      svg {
        transform: scale(1);
      }
    }

    input:focused + .sui-checkbox-content {
      ${mixin('controlFocus')};
    }

    input:disabled + .sui-checkbox-content {
      background-color: ${th('inputDisabledBgColor')};
    }

    ${p => sizeStyle[p.size]};

    ${containerSystem.props};

    .sui-checkbox-content {
      ${contentSystem.props};
    }
  `,
  propTypes: {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    value: PropTypes.string,
  },
  defaultProps: {
    size: 'md',
  },
}))

export default Checkbox
