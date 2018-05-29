/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components'
import { lighten } from 'polished'
import * as theme from '../src/theme/defaultTheme'

injectGlobal`
  body {
    font-family: ${theme.fontFamily};
  }
  
  table {
    width: 100%;
  }

  [class^='rsg--preview'], [class*=' rsg--preview'] {
    .sui-row + .sui-row {
      margin-top: 1rem;
    }

    .sui-col {
      border: 1px solid ${theme.primary};
      background-color: ${lighten(0.4, theme.primary)}
      padding-top: .75rem;
      padding-bottom: .75rem;
    }

    .sui-alert {
      margin: 10px 0;
    }

    .block-list {
      > * {
        margin: 10px 0;
        display: block;
      }
    }
  }
`
