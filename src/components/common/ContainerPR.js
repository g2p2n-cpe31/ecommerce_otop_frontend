import React from 'react'
import styled from 'styled-components'
import ItemProduct from './ItemProduct'

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
        <ItemProduct margin="auto 1rem" height="339px" />
        <ItemProduct margin="auto 1rem" height="339px" />
        <ItemProduct margin="auto 1rem" height="339px" />
        <ItemProduct margin="auto 1rem" height="339px" />
        <ItemProduct margin="auto 1rem" height="339px" />
        <ItemProduct margin="auto 1rem" height="339px" />
        <ItemProduct margin="auto 1rem" height="339px" />
        <ItemProduct margin="auto 1rem" height="339px" />
      </ContainerItems>
    </>
  )
}

export default ContainerPR
