import React from 'react'
import styled from 'styled-components'
import Item from './ItemPR'

const ContainerItems = styled.div`
  background: ${props => props.background || 'rgba(138, 138, 138, 0.4)'};
  border-radius: 5px;
  width: 80%;
  height: 359px;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

const ContainerPR = props => {
  return (
    <>
      <ContainerItems background={props.background}>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </ContainerItems>
    </>
  )
}

export default ContainerPR
