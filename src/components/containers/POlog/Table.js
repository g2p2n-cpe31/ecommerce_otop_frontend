import React from 'react'
import styled from 'styled-components'
import ItemOrderLog from './ItemOrderLog'

const Amount = styled.div`
    width: 6%;
`

const CustName = styled.div`
    width: 15%;
`

const ContainerSectionThree = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 88.2rem;
    background: #FFFFFF;
    border-radius: 0.3rem;
    margin-top: 4.1rem ;
    margin-bottom: 9.8rem;
    padding: 0 2px 0 2px;
`

const Content = styled.div`
    position: sticky;
    display: flex;
    flex-direction: row;
    height: 4.7rem;
    width:100%;
    padding: 1.3rem 2.3rem 0 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.1rem solid #828282;
    margin-bottom: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-size: 1.8rem;
    color: #828282;
`

const ContainerStockList = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    height: 88.2rem;
`

const OrdNo = styled.div`
    width: 13%;
`

const OrdDate = styled.div`
    width: 9%;
`

const Price = styled.div`
    width: 10%;
`

const ProductName = styled.div`
    width: 15%;
`

const ShipDate = styled.div`
    width: 9%;
`

const Total = styled.div`
    width: 6%;
`

const TrackNo = styled.div`
    width: 17%;
`

const SectionThree = () => {
    return (
        <ContainerSectionThree>
                <Content>
                    <OrdNo>หมายเลขคำสั่งซื้อ</OrdNo>
                    <OrdDate>วันที่สั่งซื้อ</OrdDate>
                    <ShipDate>วันที่จัดส่ง</ShipDate>
                    <TrackNo>หมายเลขติดตามสินค้า</TrackNo>
                    <CustName>ชื่อผู้ซื้อ</CustName>
                    <ProductName>ชื่อสินค้า</ProductName>
                    <Amount>จำนวน</Amount>
                    <Price>ราคาต่อหน่วย</Price>
                    <Total>ราคาสุทธิ</Total>
                </Content>
                <ContainerStockList>
                    <ItemOrderLog />
                    <ItemOrderLog />
                    <ItemOrderLog />
                    <ItemOrderLog />
                    <ItemOrderLog />
                    <ItemOrderLog />
                    <ItemOrderLog />
                </ContainerStockList>
        </ContainerSectionThree>
    )
}
export default SectionThree