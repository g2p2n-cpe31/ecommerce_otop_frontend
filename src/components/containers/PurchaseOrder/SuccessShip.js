import React, { useState } from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container';
// import Layout from '../../common/Layout';

const Amount = styled.div`
    width: 4%;
`

const AmountContainer = styled.div`
    width: 4%;
`

const CustName = styled.div`
    width: 16%;
`

const Empty = styled.div`
    color: #4F4F4F;
    font-family: Kanit;
    font-size: 1.4rem; 
    font-weight: 300;   
    line-height: 21px;
    letter-spacing: 0.5px;
    width: 10%;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    cursor: pointer;
`

const ListText = styled.div`
    width: 90%;
    padding-top: 0.5rem;
`

const OrderNumber = styled.div`
    width: 13%;
`

const PayDate = styled.div`
    width: 8%;
`

const ProductName = styled.div`
    width: 17%;
`

const ProdNameContainer = styled.div`
    width: 17%;
`

const ShipDate = styled.div`
    width: 8%;
`

const ShipStatus = styled.div`
    width: 12%;
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
    max-height: 88.2rem;
    min-height: 50rem;
    width: 100%;
    margin-top: 3.1rem;
    margin-left: 0;
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

const TrackNo = styled.div`
    width: 12%;
`


const PendingShip = () => {
    const [valueSearch, setValueSearch] = useState('')
    const handleChangeSearch = event => setValueSearch(event.target.value)

    return (
        <>
            {/* <Layout> */}
                <TableContainer>
                    <TableHead>
                        <OrderNumber>หมายเลขคำสั่งซื้อ</OrderNumber>
                        <PayDate>วันที่ชำระเงิน</PayDate>
                        <ShipDate>วันที่จัดส่ง</ShipDate>
                        <TrackNo>หมายเลขไปรษณีย์</TrackNo>
                        <ShipStatus>สถานะการจัดส่ง</ShipStatus>
                        <CustName>ชื่อผู้ซื้อ</CustName>
                        <ProductName>ชื่อสินค้า</ProductName>
                        <Amount>จำนวน</Amount>
                        <Empty></Empty>
                    </TableHead>

                    <StockList>
                        <OrderNumber>#33336210260000001</OrderNumber>
                        <PayDate>15/10/2562</PayDate>
                        <ShipDate>16/10/2562</ShipDate>
                        <TrackNo>EF582621151TH</TrackNo>
                        <ShipStatus>ถึงผู้รับแล้ว</ShipStatus>
                        <CustName>ชื่อจริง  นามสกุล</CustName>
                        <ProdNameContainer>
                            <ListText>สับปะรด</ListText>
                            <ListText>กล้วย</ListText>
                            <ListText>ทุเรียนทอด</ListText>
                        </ProdNameContainer>
                        <AmountContainer>
                            <ListText>3</ListText>
                            <ListText>10</ListText>
                            <ListText>2</ListText>
                        </AmountContainer>
                        <Empty>ที่อยู่จัดส่ง</Empty>
                    </StockList>

                </TableContainer>

            {/* </Layout> */}
        </>
    )
}
  
export default PendingShip