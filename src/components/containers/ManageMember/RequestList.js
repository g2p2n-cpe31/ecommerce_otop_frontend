import React, { useState } from 'react'
import styled from 'styled-components'

const Reject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: kanit;
  width: 50%;
  height: 3.3rem;
  font-weight: 300;
  font-size: 1.4rem;
  background-color: #bdbdbd;
  color: #ffffff;
  border-radius: 3px 0px 0px 3px;
  box-sizing: border-box;
  & :hover {
    background-color: #666565;
  }
  cursor: pointer;
`

const ContianerStockList = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 2.3rem 1.7rem 2.3rem;
  box-sizing: border-box;
  border-bottom: 0.5px solid #bdbdbd;
  margin-bottom: 1.7rem;
  color: #4f4f4f;
  font-family: Kanit;
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 2.1rem;
  letter-spacing: 0.5px;
  position: relative;
  outline: none;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  width: 37.2rem;
  height: 3.3rem;
  z-index: 100;
  right: 0rem;
  top: 50%;
  margin-top: -2rem;
  transition: all 0.25s ease;
  overflow: hidden;
  box-sizing: border-box;
`

const Accept = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: kanit;
  width: 50%;
  height: 3.3rem;
  font-weight: 300;
  font-size: 1.4rem;
  background-color: #fbb282;
  color: #ffffff;
  box-sizing: border-box;
  & :hover {
    background-color: #fc8435;
  }
  cursor: pointer;
`

const Text = styled.div`
  width: 12%;
  line-height: 3.3rem;
`

const RequestList = () => {
  const [showDelete, setShowDelete] = useState(false)
  const [show, setShow] = useState(true)

  const handleShowDelete = () => {
    setShowDelete(true)
  }

  return show ? (
    <ContianerStockList onBlur={() => setShowDelete(false)} tabIndex={0}>
      <Text>-</Text>
      <Text>20/10/2562</Text>
      <Text>088-088-0888</Text>
      <Text>ชื่อจริง นามสกุล</Text>
      <Text>-</Text>

      <ButtonContainer>
        <Reject onClick={() => setShow(false)}>
          <p>ปฏิเสธคำขอ</p>
        </Reject>
        <Accept onClick={() => setShow(false)}>
          <p>ตอบรับคำขอ</p>
        </Accept>
      </ButtonContainer>
    </ContianerStockList>
  ) : null
}
export default RequestList
