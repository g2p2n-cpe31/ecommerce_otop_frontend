import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    /* height: 4.7rem; */
    width: 100%;
    padding: 0 2.3rem 0.7rem 2.3rem;
    box-sizing: border-box;
    border-bottom: 0.5px solid #bdbdbd;
    margin-bottom: 2rem;
    position: relative;
    outline: none;
`

const OrderNumber = styled.div`
    width: 13%;
`

const OrderDate = styled.div`
    width: 9%;
`

const ShippingDate = styled.div`
    width: 9%;
`

const TrackingNumber = styled.div`
    width: 17%;
`

const Name = styled.div`
    width: 15%;
`

const ProductName = styled.div`
    width: 15%;
`

const InTheBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`
const TextInTheBox = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    margin: 0;
    padding-bottom: 0.5rem;
`

const Amount = styled.div`
    width: 6%;
`

const Price = styled.div`
    width: 10%;
`

const TotalPrice = styled.div`
    width: 6%;
`

const ItemOrderLog = () => {
    return (
        <div>
            <Box>
                <OrderNumber>#6210260000001</OrderNumber>
                <OrderDate>20/10/2562</OrderDate>
                <ShippingDate>20/10/2562</ShippingDate>
                <TrackingNumber>EF582621151TH</TrackingNumber>
                <Name>ปูรณ์ โชตอะไรซักอย่าง</Name>
                
                <ProductName>
                    <InTheBox>
                        <TextInTheBox>สับปะรดกับมะพร้าว</TextInTheBox>
                        <TextInTheBox>สตรอว์เบอร์รี</TextInTheBox>
                    </InTheBox>
                </ProductName>

                <Amount>
                    <InTheBox>
                        <TextInTheBox>1</TextInTheBox>
                        <TextInTheBox>3</TextInTheBox>
                    </InTheBox>
                </Amount>

                <Price>
                    <InTheBox>
                        <TextInTheBox>255</TextInTheBox>
                        <TextInTheBox>375</TextInTheBox>
                    </InTheBox>
                </Price>

                <TotalPrice>1380</TotalPrice>
            </Box>
        </div>
    )
}

export default ItemOrderLog
