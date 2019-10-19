import React from 'react'
import styled from 'styled-components'
import ItemProduct from './ItemProduct'

const ContainerItems = styled.div`
  background: ${props => props.background || 'rgba(138, 138, 138, 0.4)'};
  border-radius: 5px;
  width: 80%;
  height: 359px;
  overflow-x: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

const WrapContent = styled.div`
  /* This Wrap builded for layer scollable padding at end */
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 100%;
  height: 359px;
  padding: 0 0.5rem;
  float: left;
`

const ContainerPR = props => {
  return (
    <>
      <ContainerItems background={props.background}>
        <WrapContent>
          <ItemProduct margin="auto .5rem" height="339px" multiImages={false} />
          <ItemProduct margin="auto .5rem" height="339px" multiImages={false} />
          <ItemProduct margin="auto .5rem" height="339px" multiImages={false} />
          <ItemProduct margin="auto .5rem" height="339px" multiImages={false} />
          <ItemProduct margin="auto .5rem" height="339px" multiImages={false} />
          <ItemProduct margin="auto .5rem" height="339px" multiImages={false} />
          <ItemProduct margin="auto .5rem" height="339px" multiImages={false} />
          <ItemProduct margin="auto .5rem" height="339px" multiImages={false} />
        </WrapContent>
      </ContainerItems>
    </>
  )
}

export default ContainerPR
