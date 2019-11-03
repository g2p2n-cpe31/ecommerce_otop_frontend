import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    /* background: pink; */
`

const OrderNumber = styled.div`
    display: flex;
    width: 10%;
    padding: 2.5rem;
    padding-top: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* background: greenyellow; */
`

const OrderDate = styled.div`
    display: flex;
    width: 9%;
    padding: 1rem;
    padding-top: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* background: lightslategrey; */
`


const ShippingDate = styled.div`
    display: flex;
    width: 9%;
    padding: 1rem;
    padding-top: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* background: lightsteelblue; */
`

const TrackingNumber = styled.div`
    display: flex;
    width: 10%;
    padding: 1rem;
    padding-top: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* background: lightyellow; */
`

const Name = styled.div`
    display: flex;
    width: 12%;
    padding: 1rem;
    padding-top: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* background: lightseagreen; */
`

const ProductName = styled.div`
    display: flex;
    width: 20%;
    padding: 1rem;
    padding-top: 2.6rem;
    /* background: lightsalmon; */
`
const InTheBox = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    /* background: greenyellow; */
`
const TextInTheBox = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    margin: 0;
    padding-bottom: 0.5rem;
    /* background: khaki; */
`

const Amount = styled.div`
    display: flex;
    width: 8%;
    padding: 1rem;
    padding-top: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* background: wheat; */
`

const Price = styled.div`
    display: flex;
    width: 12%;
    padding: 1rem;
    padding-top: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* background: lavender; */
`

const TotalPrice = styled.div`
    display: flex;
    width: 10%;
    padding: 1rem;
    padding-top: 2.6rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    /* background: darkmagenta; */
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
                        <TextInTheBox>
                            สับปะรดกับมะพร้าว
                        </TextInTheBox>
                        <TextInTheBox>
                            สตรอว์เบอร์รี
                        </TextInTheBox>
                    </InTheBox>
                </ProductName>
                <Amount>
                    <InTheBox>
                        <TextInTheBox>
                            1
                        </TextInTheBox>
                        <TextInTheBox>
                            3
                        </TextInTheBox>
                    </InTheBox>
                </Amount>
                <Price>
                    <InTheBox>
                        <TextInTheBox>
                            255
                        </TextInTheBox>
                        <TextInTheBox>
                            375
                        </TextInTheBox>
                    </InTheBox>
                </Price>
                <TotalPrice>1380</TotalPrice>
            </Box>
        </div>
    )
}

export default ItemOrderLog
