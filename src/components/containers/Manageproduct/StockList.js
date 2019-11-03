import React, { useState } from 'react'
import styled from 'styled-components'

const ContianerStockList = styled.div`
  display: flex;
  flex-direction: row;
  height: 4.7rem;
  width: 100%;
  padding: 1.3rem 2.3rem 1rem 2.3rem;
  box-sizing: border-box;
  border-bottom: 0.5px solid #bdbdbd;
  margin-bottom: 1.2rem;
  position: relative;
  outline: none;
`

const ProductName = styled.div`
  width: 30%;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  color: #4f4f4f;
  display: flex;
`

const OtherName = styled.div`
  width: 15%;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  color: #828282;
`

const RemainName = styled.div`
  width: 15%;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  color: #828282;
`

const ContainerEdit = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`

const Edit = styled.div`
  text-decoration: underline;
  color: #4f4f4f;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  margin-right: 3.5rem;
  cursor: pointer;
`

const Delete = styled.div`
  text-decoration: underline;
  color: #4f4f4f;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  cursor: pointer;
`
const ContainerDel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  width: ${props => (props.showDelete ? '20rem' : '0')};
  height: 3.3rem;
  z-index: 100;
  right: -2px;
  top: 50%;
  margin-top: -1.65rem;
  transition: all 0.25s ease;
  overflow: hidden;
  box-sizing: border-box;
`

const Confirm = styled.div`
  white-space: nowrap;
  width: 40%;
  font-family: kanit;
  font-weight: 300;
  font-size: 1.4rem;
  margin-right: 1.4rem;
  color: #828282;
`

const Cancle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: kanit;
  width: 30%;
  height: 3.3rem;
  font-weight: 300;
  font-size: 1.4rem;
  background: #bdbdbd;
  color: #ffffff;
  border-radius: 3px 0px 0px 3px;
  box-sizing: border-box;
  cursor: pointer;
`

const ConfirmDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: kanit;
  width: 30%;
  height: 3.3rem;
  font-weight: 300;
  font-size: 1.4rem;
  background: #ff6969;
  color: #ffffff;
  box-sizing: border-box;
  cursor: pointer;
`

const StockList = () => {
  const [showDelete, setShowDelete] = useState(false)
  const [show, setShow] = useState(true)

  const handleShowDelete = () => {
    setShowDelete(true)
  }

  return show ? (
    <ContianerStockList onBlur={() => setShowDelete(false)} tabIndex={0}>
      <ProductName>สับประรดกับมะพร้าว</ProductName>
      <OtherName>255</OtherName>
      <OtherName>20/10/2562</OtherName>
      <OtherName>20/10/2562</OtherName>
      <RemainName>12</RemainName>
      <ContainerEdit>
        <Edit>แก้ไข</Edit>
        <Delete onClick={() => handleShowDelete()}>ลบ</Delete>
      </ContainerEdit>
      <ContainerDel showDelete={showDelete}>
        <Confirm>ยืนยันการลบ</Confirm>
        <Cancle onClick={() => setShowDelete(false)}>
          <p>ยกเลิก</p>
        </Cancle>
        <ConfirmDelete onClick={() => setShow(false)}>ลบ</ConfirmDelete>
      </ContainerDel>
    </ContianerStockList>
  ) : null
}
export default StockList
