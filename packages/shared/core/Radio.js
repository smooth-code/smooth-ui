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

const ModalHeader = createComponent(() => ({
  name: 'radio',
  system,
  applySystem: null,
  render: ({ Component, ref, className, size, ...props }) => (
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
  style: css`
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
      background-color: ${th('inputBgColor')};
      border-width: ${th('inputBorderWidth')};
      border-style: solid;
      border-color: ${th('inputBorderColor')};
      ${th('transitionBase')};
    }

    input:checked + .sui-radio-content {
      border-color: ${th('primary')};

      .sui-radio-circle {
        transform: scale(1);
      }
    }

    input:focused + .sui-radio-content {
      ${mixin('controlFocus')};
    }

    input:disabled + .sui-radio-content {
      background-color: ${th('inputDisabledBgColor')};
    }

    .sui-radio-circle {
      ${th('transitionBase')};
      border-radius: 50%;
      background-color: ${th('primary')};
      transform: scale(0);
    }

    ${p => p.size && sizeStyle[p.size]};

    ${containerSystem.props};

    .sui-radio-content {
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

export default ModalHeader
