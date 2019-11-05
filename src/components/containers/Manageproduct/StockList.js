import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
  color: ${props => props.isEmpty};
  display: flex;
`

const OtherName = styled.div`
  width: 15%;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  color: ${props => props.isEmpty};
`

const RemainName = styled.div`
  width: 15%;
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  color:${props => props.isEmpty};
`

const ContainerEdit = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`

const Edit = styled.div`
  text-decoration: underline;
  color: ${props => props.isEmpty};
  font-family: Kanit;
  font-weight: 300;
  font-size: 1.4rem;
  margin-right: 3.5rem;
  cursor: pointer;
`

const Delete = styled.div`
  text-decoration: underline;
  color: ${props => props.isEmpty};
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

const StockList = props => {
  const [showDelete, setShowDelete] = useState(false)
  const [show, setShow] = useState(true)
  const [nameproduct,setNameproduct] = useState('')
  const [price,setPrice] = useState('')
  const [amount,setAmount] = useState('')
  const [detail,setDetail] = useState('')
  const isEmpty = props.total === 0 ? '#EB5757': '#4F4F4F'

  const handleShowDelete = () => {
    setShowDelete(true)
  }
  const dateFormat = (date) => {
    return date.split('T')[0]

  }

  const handleDelete = () => {
    setShow(false)
    deleteProduct()
  }

  const deleteProduct = async () =>
    {
        try{
            const delproduct = await axios.post(`https://otop-d5bqdesqsq-an.a.run.app/v01/api/product/delete/${props.id}`,
            {
                "name"  : nameproduct,
                "price" : price,
                "total" : amount,
                "detail" : detail
            })
            console.log(delproduct)
            await props.search('')
        }catch(error){
            console.error();
        }
    }


  return show ? (
    <ContianerStockList onBlur={() => setShowDelete(false)} tabIndex={0}>
      <ProductName isEmpty={isEmpty}>{props.name}</ProductName>
      <OtherName  isEmpty={isEmpty}>{props.price}</OtherName>
      <OtherName  isEmpty={isEmpty}>{dateFormat(props.date)}</OtherName>
      <OtherName  isEmpty={isEmpty}>{dateFormat(props.edit)}</OtherName>
      <RemainName isEmpty={isEmpty}>{props.total}</RemainName>
      <ContainerEdit>
        <Edit isEmpty={isEmpty}>แก้ไข</Edit>
        <Delete  isEmpty={isEmpty}  onClick={() => handleShowDelete()}>ลบ</Delete>
      </ContainerEdit>
      <ContainerDel showDelete={showDelete}>
        <Confirm >ยืนยันการลบ</Confirm>
        <Cancle onClick={() => setShowDelete(false)}>
          <p>ยกเลิก</p>
        </Cancle>
        <ConfirmDelete onClick={() => handleDelete()}>ลบ</ConfirmDelete>
      </ContainerDel>
    </ContianerStockList>
  ) : null
}
export default StockList
