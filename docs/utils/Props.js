/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { useComponents } from 'docz'
import { Tooltip } from '@smooth-ui/core-sc'

const Table = styled.table`
  box-shadow: rgb(206, 212, 222) 0px 0px 0px 1px;
  background-color: transparent;
  border-collapse: collapse;
  color: rgb(19, 22, 31);
  overflow-y: hidden;
  overflow-x: initial;
  width: 100%;
  font-family: ${p => p.theme.docz.fonts.mono};
  font-size: 14px;
  padding: 0;
  border-spacing: 0;
  border-style: hidden;
  border-radius: 2px;
  table-layout: auto;
`

const Thead = styled.thead`
  color: rgb(125, 137, 156);
  background: rgb(238, 241, 245);
  text-align: left;
`

const Th = styled.th`
  font-weight: 400;
  padding: 20px;
`

const Tbody = styled.tbody`
  > tr {
    border-top: 1px solid rgb(206, 212, 222);
  }
`

const Td = styled.td`
  line-height: 2;
  font-weight: 200;
  padding: 12px 20px;
`

export default function Props({ props }) {
  const components = useComponents()
  const LinkComponent = components.a

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
        {Object.entries(props).map(([name, prop]) => {
          const propType = prop.toString()
          const tooltip = propType !== prop.type.name
          return (
            <tr key={name}>
              <Td>{name}</Td>
              <Td>
                {tooltip ? (
                  <LinkComponent href="#">
                    {tooltip && <Tooltip maxWidth={400}>{propType}</Tooltip>}
                    {prop.type.name}
                  </LinkComponent>
                ) : (
                  propType
                )}
              </Td>
              <Td>{prop.required ? 'true' : 'false'}</Td>
              <Td>{prop.default || '-'}</Td>
              <Td>{prop.description}</Td>
            </tr>
          )
        })}
      </Tbody>
    </Table>
  )
}
