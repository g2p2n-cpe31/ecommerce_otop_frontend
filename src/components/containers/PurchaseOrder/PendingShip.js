import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
// import Layout from '../../common/Layout';

const CustName = styled.div`
    width: 15%;
`

const ListText = styled.div`
    width: 90%;
    padding-top: 0.5rem;
`

const ListDetail = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    cursor: pointer;
`

const ListOther = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    text-decoration: underline;
    cursor: pointer;
 `

const OrderNumber = styled.div`
    width: 15%;
`

const OtherHead = styled.div`
    width: 30%;
`

const OtherText = styled.div`
    display: flex;
    direction: row;
    align-items: flex-start;
    width: 30%;
`

const PayDate = styled.div`
    width: 10%;
`

const ProductName = styled.div`
    width: 25%;
`

const ProdNameContainer = styled.div`
    width: 25%;
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
`

const ProductNumber = styled.div`
    width: 5%;
`

const ProductNumberContainer = styled.div`
    width: 5%;
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
`

const StockList = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    padding: 1.3rem 2.3rem 0 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #BDBDBD;
    margin-bottom: 2.6rem;
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
`

const TableContainer = styled(Container)`
    background-color: #fff;
    max-width: 162.4rem;
    min-height: 88.2rem;
    width: 100%;
    margin-top: 3.1rem;
    margin-left: 0;
    /* margin: 0 0; */
    padding: 0 0;
`

const TableHead = styled.div`
    display: flex;
    flex-direction: row;
    height: 4.7rem;
    width:100%;
    padding: 1.3rem 2.3rem 0 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.1rem solid #828282;
    margin-bottom: 2.6rem;
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.8rem;
    color: #828282;
`

const Tel = styled.div`
    width: 15%;
`

const PendingShip = () => {
    const [valueSearch, setValueSearch] = useState('')
    const handleChangeSearch = event => setValueSearch(event.target.value)

    return (
        <>
            <TableContainer>
                <TableHead>
                    <OrderNumber>หมายเลขคำสั่งซื้อ</OrderNumber>
                    <PayDate>วันที่สั่งซื้อ</PayDate>
                    <Tel>เบอร์ติดต่อผู้ซื้อ</Tel>
                    <CustName>ชื่อผู้ซื้อ</CustName>
                    <ProductName>ชื่อสินค้า</ProductName>
                    <ProductNumber>จำนวน</ProductNumber>
                    <OtherHead />
                </TableHead>

                <StockList>
                    <OrderNumber>#2226210260000001</OrderNumber>
                    <PayDate>21/10/2562</PayDate>
                    <Tel>088-088-0888</Tel>
                    <CustName>ชื่อจริง  นามสกุล</CustName>
                    <ProdNameContainer>
                        <ListText>สับปะรด</ListText>
                        <ListText>กล้วย</ListText>
                        <ListText>ผ้าไหม</ListText>
                    </ProdNameContainer>
                    <ProductNumberContainer>
                        <ListText>2</ListText>
                        <ListText>5</ListText>
                        <ListText>1</ListText>
                    </ProductNumberContainer>
                    <OtherText>
                        <ListDetail>รายละเอียดเพิ่มเติม</ListDetail>
                        <ListOther>ที่อยู่จัดส่ง</ListOther>
                        <ListOther>จัดส่งแล้ว</ListOther>
                    </OtherText>
                </StockList>

            </TableContainer>
        </>
    )
}
  
export default PendingShip