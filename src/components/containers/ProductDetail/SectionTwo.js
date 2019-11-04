import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  border-radius: 5px;
  padding: 3rem;
  padding-top: 2rem;
  height: 72.8rem;
  max-width: 100%;
`

const Detail = styled.p`
  font-family: Kanit;
  align-items: center;
  font-size: 2.4rem;
  color: #333333;
  margin-top: 0;
  margin-bottom: 1.2rem;
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
