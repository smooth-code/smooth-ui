/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { system, th } from '@xstyled/system'
import { node, oneOf } from 'prop-desc'
import {
  css,
  scale,
  SCALES,
  createComponent,
  getSystemPropTypes,
  useRandomId,
} from './util'
import * as formTheme from './theme/form'
import * as theme from './theme/common'

export function createFieldsGroupContext(type) {
  const FieldsGroupContext = React.createContext()

  function useFieldsGroupState() {
    return React.useContext(FieldsGroupContext)
  }

  function useCreateFieldsGroupState(baseId) {
    const randomId = useRandomId(type)
    const id = baseId || randomId
    const [labels, setLabels] = React.useState({})
    const registerLabel = React.useCallback((name, id) => {
      setLabels(labels => ({
        ...labels,
        [name]: id,
      }))
    }, [])
    const unregisterLabel = React.useCallback(name => {
      setLabels(labels => {
        const newLabels = { ...labels }
        delete newLabels[name]
        return newLabels
      })
    }, [])
    return React.useMemo(
      () => ({
        id,
        labels,
        registerLabel,
        unregisterLabel,
      }),
      [id, labels, registerLabel, unregisterLabel],
    )
  }

  function Provider({ id, children }) {
    const fieldsGroupState = useCreateFieldsGroupState(id)
    return (
      <FieldsGroupContext.Provider value={fieldsGroupState}>
        {children}
      </FieldsGroupContext.Provider>
    )
  }

  function useRegisterLabel(name, id) {
    const fieldsGroupState = useFieldsGroupState()
    const hasFormState = Boolean(fieldsGroupState)
    const { registerLabel, unregisterLabel } = fieldsGroupState || {}
    React.useEffect(() => {
      if (name && id && hasFormState) {
        registerLabel(name, id)
        return () => {
          unregisterLabel(name)
        }
      }
      return undefined
    }, [name, id, hasFormState, registerLabel, unregisterLabel])
  }

  function getControlId(fieldsGroupId, name) {
    return `${fieldsGroupId}-${name}`
  }

  function getLabelId(controlId) {
    return controlId && `${controlId}-label`
  }

  function useControlId(name, baseId) {
    const fieldsGroupState = useFieldsGroupState()
    const id = React.useMemo(() => {
      if (baseId) return baseId
      if (fieldsGroupState && name)
        return getControlId(fieldsGroupState.id, name)
      return null
    }, [fieldsGroupState, name, baseId])
    return id
  }

  function useControlProps(props) {
    const fieldsGroupState = useFieldsGroupState()
    const id = useControlId(props.name, props.id)
    const labelId =
      (props.name && fieldsGroupState && fieldsGroupState.labels[props.name]) ||
      null
    return {
      ...props,
      id,
      'aria-labelledby': props['aria-labelledby'] || labelId,
    }
  }

  function useLabelProps({ name, ...props }) {
    const controlId = useControlId(name)
    const labelId = getLabelId(controlId)
    useRegisterLabel(name, labelId)
    return { id: labelId, htmlFor: controlId, ...props }
  }

  return {
    Provider,
    useControlProps,
    useLabelProps,
  }
}

const {
  Provider: FormProvider,
  useControlProps: useFormControlProps,
  useLabelProps: useFormLabelProps,
} = createFieldsGroupContext('form')

const {
  Provider: FromGroupProvider,
  useControlProps: useFormGroupControlProps,
  useLabelProps: useFormGroupLabelProps,
} = createFieldsGroupContext('group')

export { FromGroupProvider, useFormGroupControlProps, useFormControlProps }

export const Form = createComponent({
  name: 'Form',
  render: ({ as: As = 'form', ...props }) => {
    const role = As === 'form' ? null : 'form'
    return (
      <FormProvider id={props.id}>
        <As role={role} {...props} />
      </FormProvider>
    )
  },
  theme: {
    components: {
      Form: p => {
        return css`
          && {
            ${system(p)}
          }
        `
      },
    },
  },
  propTypes: {
    children: node,
    ...getSystemPropTypes(system),
  },
})

export const FormField = createComponent({
  name: 'FormField',
  render: ({ as: As = 'div', ...props }) => <As {...props} />,
  theme: {
    space: {
      formField: {
        bottom: scale('1rem', th.space('formField.bottom.base')),
      },
    },
    components: {
      FormField: p => {
        const { scale = 'base' } = p
        const mb = th.space(`formField.bottom.${scale}`)(p)
        return css`
          margin-bottom: ${mb};

          && {
            ${system(p)}
          }
        `
      },
    },
  },
  propTypes: {
    children: node,
    scale: oneOf(SCALES)
      .desc('Control the size of the component.')
      .defaultTo('base'),
    ...getSystemPropTypes(system),
  },
})

export const FormFieldLabel = createComponent({
  name: 'FormFieldLabel',
  render: ({ as: As = 'label', scale, ...props }) => {
    const labelProps = useFormLabelProps(props)
    return <As {...labelProps} />
  },
  theme: [
    theme,
    formTheme,
    {
      space: {
        formFieldLabel: {
          bottom: scale('0.5rem', th.space('formFieldLabel.bottom.base')),
        },
      },
    },
    {
      components: {
        FormFieldLabel: p => {
          const { scale = 'base' } = p
          const py = th.space(`textFormControl.y.${scale}`)(p)
          const mb = th.space(`formFieldLabel.bottom.${scale}`)(p)
          return css`
            font-family: ${th.font('base')(p)};
            font-size: ${th.fontSize(scale)(p)};
            display: inline-block;
            margin-bottom: ${mb};
            font-weight: ${th.fontWeight('medium')(p)};

            ${p.col &&
              css`
                padding-top: calc(${py} + 1px);
                padding-bottom: calc(${py} + 1px);
                margin-bottom: 0;
              `(p)}

            [aria-disabled='true'] ~ & {
              opacity: 0.6;
            }

            && {
              ${system(p)}
            }
          `
        },
      },
    },
  ],
  propTypes: {
    children: node,
    scale: oneOf(SCALES)
      .desc('Control the size of the component.')
      .defaultTo('base'),
    ...getSystemPropTypes(system),
  },
})

export const FormCheck = createComponent({
  name: 'FormCheck',
  render: ({ as: As = 'div', ...props }) => {
    return (
      <FromGroupProvider value={props.id}>
        <As data-form-check {...props} />
      </FromGroupProvider>
    )
  },
  theme: {
    components: {
      FormCheck: p => {
        return css`
          display: flex;
          align-items: center;

          && {
            ${system(p)}
          }
        `
      },
    },
  },
  propTypes: {
    children: node,
  },
})

export const FormCheckLabel = createComponent({
  name: 'FormCheckLabel',
  render: ({ as: As = 'label', ...props }) => {
    const labelProps = useFormGroupLabelProps(props)
    return <As {...labelProps} />
  },
  theme: [
    theme,
    formTheme,
    {
      space: {
        formCheckLabel: {
          left: scale('0.375rem', th.space('formCheckLabel.left.base')),
        },
      },
    },
    {
      components: {
        FormCheckLabel: p => {
          const { scale = 'base' } = p
          const pl = th.space(`formCheckLabel.left.${scale}`)(p)
          return css`
            font-family: ${th.font('base')(p)};
            font-size: ${th.fontSize(scale)(p)};
            padding-left: ${pl};

            [aria-disabled='true'] ~ & {
              opacity: 0.6;
            }
          `
        },
      },
    },
  ],
  propTypes: {
    children: node,
    scale: oneOf(SCALES)
      .desc('Control the size of the component.')
      .defaultTo('base'),
    ...getSystemPropTypes(system),
  },
})
