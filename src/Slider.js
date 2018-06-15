import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styled from 'styled-components'
import * as defaultTheme from './theme/defaultTheme'
import handleRef from './internal/handleRef'
import { th } from './utils'

const lerp = (a, b, alpha) => a * (1 - alpha) + b * alpha
const clamp = (min, max, value) => Math.min(Math.max(value, min), max)
const normalize = (min, max, value) => (value - min) / (max - min)

class SliderComponent extends React.Component {
  handleBarRef = ref => {
    this.bar = ref
  }

  componentWillUnmount() {
    this.cleanListeners()
  }

  /**
   * Clean all possibly manually registered event listeners.
   */

  cleanListeners = () => {
    window.document.removeEventListener('mousemove', this.handleMouseMove)
    window.document.removeEventListener('mouseup', this.cleanListeners)
    window.document.removeEventListener('touchmove', this.handleTouchMove)
    window.document.removeEventListener('touchend', this.cleanListeners)
  }

  /**
   * Mouse events.
   */

  handleMouseDown = evt => {
    this.handleMouseMove(evt)

    window.document.addEventListener('mousemove', this.handleMouseMove)
    window.document.addEventListener('mouseup', this.cleanListeners)
  }

  handleMouseMove = evt => {
    evt.preventDefault()
    this.handleChange(evt.clientX)
  }

  /**
   * Touch events.
   */

  handleTouchStart = evt => {
    this.handleTouchMove(evt)

    window.document.addEventListener('touchmove', this.handleTouchMove)
    window.document.addEventListener('touchend', this.cleanListeners)
  }

  handleTouchMove = evt => {
    if (evt.touches.length !== 1) return

    evt.preventDefault()
    this.handleChange(evt.touches[0].clientX)
  }

  /**
   * Handle a value change from a clientX value.
   */

  handleChange = clientX => {
    const { min, max, onChange } = this.props

    const barRect = this.bar.getBoundingClientRect()
    const minX = barRect.left
    const maxX = minX + barRect.width

    const value = lerp(
      min,
      max,
      normalize(minX, maxX, clamp(minX, maxX, clientX)),
    )

    onChange(value)
  }

  /**
   * Keyboard events.
   */

  handleKeyPress = evt => {
    const { min, max, value, onChange } = this.props
    const step = (max - min) / 10

    switch (evt.keyCode) {
      case 37: // left
      case 40: // down
        evt.preventDefault()
        onChange(clamp(min, max, value - step))
        break

      case 39: // right
      case 38: // up
        evt.preventDefault()
        onChange(clamp(min, max, value + step))
        break

      default:
        break
    }
  }

  render() {
    const { min, max, value, className } = this.props
    const progress = normalize(min, max, value) * 100

    return (
      <div
        tabIndex="0"
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        onMouseDown={this.handleMouseDown}
        onTouchStart={this.handleTouchStart}
        onKeyDown={this.handleKeyPress}
        className={classNames('sui-slider', className)}
      >
        <div className="sui-slider-bar" ref={this.handleBarRef}>
          <div
            className="sui-slider-progress"
            style={{ width: `${progress}%` }}
          />
          <div className="sui-slider-handle" style={{ left: `${progress}%` }} />
        </div>
      </div>
    )
  }
}

const SliderRefComponent = handleRef(SliderComponent)

const Slider = styled(SliderRefComponent)`
  padding: 15px;

  .sui-slider-bar {
    position: relative;
    height: 3px;
    width: 100%;
    background-color: ${th('inputBorderColor')};
  }

  .sui-slider-progress {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: ${th('primary')};
  }

  .sui-slider-handle {
    position: absolute;
    top: 50%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, -50%);
    background-color: ${th('primary')};
    border-radius: 50%;
    transition-property: width, height;
    transition-duration: 0.1s;
  }

  &:active .sui-slider-handle,
  &:focus .sui-slider-handle {
    width: 25px;
    height: 25px;
  }
`

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
}

Slider.defaultProps = {
  theme: defaultTheme,
  min: 0,
  max: 1,
  onChange: () => {},
}

/** @component */
export default Slider
