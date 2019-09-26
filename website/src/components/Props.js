/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Tooltip } from '@smooth-ui/core-sc'

const Table = styled.table`
  display: table !important;
  background-color: transparent;
  border-collapse: collapse;
  color: text;
  overflow-y: hidden;
  overflow-x: initial;
  width: 100%;
  font-size: 14;
  padding: 0;
  border-spacing: 0;
  border-style: hidden;
  table-layout: auto;
  border-radius: 4;
  box-shadow: ${th.color('border')} 0 0 0 1px;
`

const Thead = styled.thead`
  color: text;
  background-color: secondary-bg;
  text-align: left;
`

const Th = styled.th`
  font-weight: 400;
  padding: 20;

  &:first-child {
    border-radius: 4 0 0;
  }

  &:last-child {
    border-radius: 0 4 0;
  }
`

const Tbody = styled.tbody`
  > tr {
    border-top: 1;
    border-color: border;
  }
`

const Td = styled.td`
  line-height: 2;
  font-weight: 200;
  padding: 12 20;
`

const GROUP_REGEXP = /^\[(.*)]\s+/

function sanitizeDescription(description) {
  return description && description.replace(GROUP_REGEXP, '')
}

function getGroup(meta) {
  if (!meta.description) return null
  const matches = meta.description.match(GROUP_REGEXP)
  if (!matches) return null
  return matches[1]
}

export function Props({ of }) {
  const properties = React.useMemo(
    () =>
      Object.entries(of.propTypes).reduce((properties, [name, prop]) => {
        const group = getGroup(prop.__meta) || 'default'
        properties[group] = properties[group] || []
        properties[group].push([name, prop])
        return properties
      }, {}),
    [],
  )
  const [groupsState, setGroupsState] = React.useState(() =>
    Object.keys(properties).reduce((state, group) => {
      if (group === 'default') return state
      properties[group] = properties[group] || []
      properties[group].push()
      return { ...state, [group]: false }
    }, []),
  )
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Property</Th>
          <Th>Type</Th>
          <Th>Required</Th>
          <Th>Default</Th>
          <Th>Description</Th>
        </tr>
      </Thead>
      <Tbody>
        {Object.entries(properties).map(([group, propTypes]) => {
          return (
            <React.Fragment key={group}>
              {group !== 'default' && (
                <tr>
                  <Td colSpan={5} style={{ textAlign: 'center' }}>
                    <a
                      href="#"
                      onClick={event => {
                        event.preventDefault()
                        setGroupsState(state => ({
                          ...state,
                          [group]: !state[group],
                        }))
                      }}
                    >
                      {groupsState[group] ? 'Hide' : 'Show'} {group} properties
                    </a>
                  </Td>
                </tr>
              )}
              {propTypes.map(([name, prop]) => {
                const meta = prop.__meta
                const propType = meta.toString()
                const tooltip = propType !== meta.type.name
                const group = getGroup(meta)
                if (group && group !== 'default' && !groupsState[group])
                  return null
                return (
                  <tr key={name}>
                    <Td>{name}</Td>
                    <Td>
                      {tooltip ? (
                        <a href="#">
                          {tooltip && (
                            <Tooltip maxWidth={400}>{propType}</Tooltip>
                          )}
                          {meta.type.name}
                        </a>
                      ) : (
                        propType
                      )}
                    </Td>
                    <Td>{meta.required ? 'true' : 'false'}</Td>
                    <Td>{meta.defaultValue ? meta.defaultValue.value : '-'}</Td>
                    <Td
                      dangerouslySetInnerHTML={{
                        __html: sanitizeDescription(meta.description),
                      }}
                    />
                  </tr>
                )
              })}
            </React.Fragment>
          )
        })}
      </Tbody>
    </Table>
  )
}
