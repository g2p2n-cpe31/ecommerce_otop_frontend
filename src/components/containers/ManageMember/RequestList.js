import React, { useState } from 'react'
import styled from 'styled-components'

const Accept = styled.div`
  z-index:200;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: kanit;
  width: 40%;
  height: 3.3rem;
  font-weight: 400;
  font-size: 1.4rem;
  background-color: #fbb282;
  color: #ffffff;
  box-sizing: border-box;
  & :hover {
    background-color: #fc8435;
  }
  cursor: pointer;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    width: 40%;
    height: 3.3rem;
    z-index: 100;
    right: 0rem;
    top: 50%;
    margin-top: -2rem;
    transition: all 0.25s ease;
    overflow: hidden;
    box-sizing: border-box;
`

const ContianerStockList = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    padding: 0 2.3rem 1.4rem 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #BDBDBD;
    margin-bottom: 1.7rem;
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 2.1rem;
    letter-spacing: 0.5px;
    position: relative;
    outline: none;
`

const Text = styled.div`
    width: 12%;
`

const Reject = styled.div`
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: kanit;
  width: 40%;
  height: 3.3rem;
  font-weight: 400;
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

const RequestList = () => {
  const [show, setShow] = useState(true)

  return show ? (
    <ContianerStockList>
      <Text>-</Text>
      <Text>20/10/2562</Text>
      <Text>088-088-0888</Text>
      <Text>ชื่อจริง นามสกุล</Text>
      <Text>-</Text>

      <ButtonContainer>
        <Reject onClick={() => setShow(false)}>
          ปฏิเสธคำขอ
        </Reject>
        <Accept onClick={() => setShow(false)}>
          ตอบรับคำขอ
        </Accept>
      </ButtonContainer>

    </ContianerStockList>
  ) : null
}
export default RequestList