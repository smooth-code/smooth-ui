import React from 'react'
import { LiveConfig } from 'smooth-doc/components'
import styled, * as sc from 'styled-components'
import * as xstyledSc from '@xstyled/styled-components'
import * as xstyledEm from '@xstyled/emotion'
import * as smoothUISc from 'smooth-ui-sc-next'
import * as smoothUIEm from 'smooth-ui-em-next'

export default function Layout({ children }) {
  return (
    <>
      <LiveConfig
        modules={{
          react: React,
          '@smooth-ui/core-em': smoothUIEm,
          '@smooth-ui/core-sc': smoothUISc,
          '@xstyled/styled-components': xstyledSc,
          '@xstyled/emotion': xstyledEm,
          'styled-components': Object.assign(styled, sc),
        }}
      />
      {children}
    </>
  )
}
