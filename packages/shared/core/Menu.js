import React from 'react'
import {
  useMenuState,
  Menu as ReakitMenu,
  MenuItem as ReakitMenuItem,
  MenuDisclosure as ReakitMenuDisclosure,
  MenuSeparator as ReakitMenuSeparator,
} from 'reakit/Menu'
import { system, th } from '@xstyled/system'
import { node } from 'prop-desc'
import { Button } from './Button'
import { Separator } from './Separator'
import { css, createComponent, getSystemPropTypes } from './util'
import * as theme from './theme/common'

export { useMenuState }

export const Menu = createComponent({
  name: 'Menu',
  render: props => (
    <ReakitMenu
      data-animated={props.unstable_animated}
      data-animating={props.unstable_animating}
      {...props}
    />
  ),
  theme: [
    theme,
    {
      components: {
        Menu: p => {
          return css`
            border: 0.0625rem solid;
            border-color: ${th.color('highlightBorder')(p)};
            font-family: ${th.font('base')(p)};
            background-color: ${th.color('lighter')(p)};
            border-radius: ${th.radius('base')(p)};
            padding: 0.5rem 0.25rem;
            z-index: 999;

            &:focus {
              outline: none;
            }

            &[data-animated='true'] {
              transition: ${th.transition('base')(p)};
              transition-property: opacity;
              display: block !important;

              &[hidden][data-animating='false'] {
                display: none !important;
              }

              &[hidden],
              &[data-animating='true']:not([hidden]) {
                opacity: 0;
              }

              &:not([hidden]),
              &[hidden][data-animating='true'] {
                opacity: 1;
              }
            }
          `
        },
      },
    },
  ],
  propTypes: {
    children: node,
    ...getSystemPropTypes(system),
  },
})

export const MenuItem = createComponent({
  name: 'MenuItem',
  render: props => <ReakitMenuItem {...props} />,
  theme: [
    theme,
    {
      components: {
        MenuItem: p => {
          return css`
            appearance: none;
            background-color: transparent;
            padding: 8rpx;
            border: 0;
            border-radius: ${th.radius('base')(p)};
            color: ${th.color('light700')(p)};
            font-size: 14rpx;
            display: block;
            width: 100%;
            text-align: left;
            transition: ${th.transition('base')(p)};
            transition-property: background-color;
            cursor: pointer;
            /* For links */
            text-decoration: none;

            &[type='button'] {
              appearance: none;
            }

            &:focus,
            &:hover {
              outline: none;
              background-color: ${th.color('highlightBackground')(p)};
            }

            &[disabled],
            &[aria-disabled='true'] {
              color: ${th.color('light500')(p)};
              cursor: default;

              &:hover {
                background-color: transparent;
              }
            }
          `
        },
      },
    },
  ],
  propTypes: {
    children: node,
    ...getSystemPropTypes(system),
  },
})

const MenuItemDisclosure = React.forwardRef((props, ref) => {
  return <MenuItem as="div" {...props} ref={ref} />
})

export const MenuDisclosure = createComponent({
  name: 'MenuDisclosure',
  theme,
  render: ({ as: asProp, ...props }) => {
    const as =
      asProp || (props.role === 'menuitem' ? MenuItemDisclosure : Button)
    return <ReakitMenuDisclosure as={as} {...props} />
  },
  propTypes: Button.propTypes,
})

export const MenuSeparator = createComponent({
  name: 'MenuSeparator',
  theme,
  render: ({ as = Separator, ...props }) => (
    <ReakitMenuSeparator as={as} {...props} />
  ),
  propTypes: Separator.propTypes,
})
