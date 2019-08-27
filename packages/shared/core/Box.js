import React from 'react'
import flattenChildren from 'react-flatten-children'
import { Box } from '@xstyled/x'
import { system } from '@xstyled/system'
import { getSystemPropTypes } from './util'

export { Box }

Box.propTypes = getSystemPropTypes(system)

export function Boxer({ children, ...props }) {
  return flattenChildren(children).map(child => (
    <Box key={child.key} {...props}>
      {child}
    </Box>
  ))
}

Boxer.propTypes = getSystemPropTypes(system)
