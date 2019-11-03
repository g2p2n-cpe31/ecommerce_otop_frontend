import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  border-radius: 5px;
  padding: 30px;
  height: 72.8rem;
  max-width: 100%;
`

const Detail = styled.p`
  font-family: Kanit;
`

const SectionTwo = () => {
  return (
    <>
      <Content>
        <Detail>รายละเอียดสินค้า</Detail>
      </Content>
    </>
  )
}
export default SectionTwo
