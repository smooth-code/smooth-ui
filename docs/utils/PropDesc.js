const createType = typeDesc => {
  const type = () => typeDesc
  Object.defineProperties(type, {
    isRequired: {
      get() {
        return createType({ ...typeDesc, required: true })
      },
    },
    defaultTo: {
      get() {
        return value => createType({ ...typeDesc, defaultValue: { value } })
      },
    },
    desc: {
      get() {
        return description => createType({ ...typeDesc, description })
      },
    },
  })
  return type
}

const type = (name, { value = null } = {}) =>
  createType({
    type: {
      name,
      value,
    },
    required: false,
    defaultValue: undefined,
  })

const PropDesc = descriptors => ({
  __docgenInfo: {
    props: Object.keys(descriptors).reduce(
      (props, key) => ({
        ...props,
        [key]: descriptors[key](),
      }),
      {},
    ),
  },
})

const node = type('node')
const string = type('string')
const number = type('number')
const bool = type('boolean')
const func = type('function')
const array = type('array')
const shape = types =>
  type('shape', {
    value: Object.keys(types).reduce(
      (obj, name) => ({ ...obj, [name]: types[name]().type }),
      {},
    ),
  })
const oneOf = value => type('enum', { value: value.map(value => ({ value })) })
const oneOfType = types =>
  type('union', { value: types.map(type => type().type) })

PropDesc.node = node
PropDesc.string = string
PropDesc.number = number
PropDesc.bool = bool
PropDesc.func = func
PropDesc.array = array
PropDesc.oneOf = oneOf
PropDesc.oneOfType = oneOfType
PropDesc.shape = shape

export default PropDesc
