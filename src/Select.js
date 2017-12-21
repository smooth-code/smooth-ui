import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { transparentize } from 'polished'
import styled from 'styled-components'
import handleRef from './internal/handleRef'
import defaultTheme from './style/defaultTheme'

const renderOption = option => {
  const { label, value } =
    typeof option === 'string' ? { label: option, value: option } : option
  return (
    <option key={value} value={value}>
      {label}
    </option>
  )
}

const SelectComponent = ({
  arrow,
  className,
  options,
  size,
  theme,
  ...props
}) => (
  <div
    className={classNames(
      'sui-select',
      {
        [`sui-select-${size}`]: size,
      },
      className,
    )}
  >
    {arrow ? (
      <svg className="sui-select-arrow" viewBox="0 0 10 5">
        <g fill="none" fillRule="evenodd">
          <path d="M17 14H-7v-24h24" />
          <path fill="currentColor" opacity={0.5} d="M0 0l5 5 5-5" />
        </g>
      </svg>
    ) : null}
    <select {...props}>
      {options.map(
        node =>
          node.options ? (
            <optgroup key={node.label} label={node.label}>
              {node.options.map(renderOption)}
            </optgroup>
          ) : (
            renderOption(node)
          ),
      )}
    </select>
  </div>
)

const Select = styled(handleRef(SelectComponent))`
  display: inline-block;
  position: relative;

  select {
    /* Disable appearance */
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-border-radius: 0;

    display: inline-block;
    border: 1px solid ${props => props.theme.colors.controlBorder};
    border-radius: ${props => props.theme.borderRadius.md};
    padding: ${props => props.theme.textControlPadding.md};
    font-size: ${props => props.theme.controlFontSize.md};
    line-height: 1.5;
    transition: border-color ${props => props.theme.transition.time},
      box-shadow ${props => props.theme.transition.time};
    color: ${props => props.theme.colors.controlText};
    padding-right: 1.6rem;

    &:focus {
      ${props => props.theme.mixins.controlFocus};
    }

    &[disabled] {
      background-color: ${props => props.theme.colors.grayLight};
      color: ${props => transparentize(0.5, props.theme.colors.controlText)};
    }
  }

  .sui-select-arrow {
    position: absolute;
    top: 50%;
    right: 0.5rem;
    width: 0.6rem;
    pointer-events: none;
  }

  &.sui-select-sm {
    select {
      padding: ${props => props.theme.textControlPadding.sm};
      font-size: ${props => props.theme.controlFontSize.sm};
      border-radius: ${props => props.theme.borderRadius.sm};
      padding-right: 1.225rem;
    }

    .sui-select-arrow {
      right: 0.35rem;
      width: 0.525rem;
    }
  }

  &.sui-select-lg {
    select {
      padding: ${props => props.theme.textControlPadding.lg};
      font-size: ${props => props.theme.controlFontSize.lg};
      border-radius: ${props => props.theme.borderRadius.lg};
      padding-right: 2rem;
    }

    .sui-select-arrow {
      right: 0.625rem;
      width: 0.75rem;
    }
  }
`

Select.propTypes = {
  arrow: PropTypes.bool,
  theme: PropTypes.object,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string,
        options: PropTypes.arrayOf(
          PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              value: PropTypes.string.isRequired,
            }).isRequired,
          ]),
        ),
      }).isRequired,
    ]),
  ),
}

Select.defaultProps = {
  arrow: true,
  options: [],
  size: PropTypes.oneOf(['sm', 'lg']),
  theme: defaultTheme,
}

/** @component */
export default Select
