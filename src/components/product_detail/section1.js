import React from 'react'
import styled from 'styled-components'
import Pineapple from '../../images/pineapple.jpg'
import Cart from '../../images/cart.png'
import TextField from '@material-ui/core/TextField'
import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const ContainerSection1 = styled.div`
    padding: 181px 277px 0px 277px;
    margin-bottom: 10px;
`

const Content = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: white;
    border-radius: 5px;
    height: 559px;
`

const LeftItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px 60px 180px 60px ;
`

const RightItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px 60px 180px 0px ;
`
const MainImage = styled.img`

`
const ProductName = styled.p`
    font-family: Kanit;
    font-size: 24px;
    color: #5b3c78;
`

const ContainerDetial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-strat;
`


const Title = styled.p`
    font-family: Kanit;
    margin-right: 50px;
    color: #828282;
`

const Subtitle = styled.p`
    font-family: Kanit;
    color: #828282;
`

const Price = styled.p`
    font-family: Kanit;
    font-size: 36px;
    width: 133px;
    height: 46.6px;
    margin-left: 10px;
    color: #5b3c78;

`

// const Container_PlusandMinus = styled.div`
//     display: flex;
//     flex-direction: row;
//     margin-right: 50px;
// `

// const MinusProduct = styled(Button)`
//     display: flex;
//     font-family: Kanit;
//     background:  #E0E0E0;
//     width: 10px;
//     height: 23.8px;
//     justify-content: center;
//     align-items: center;
// `

// const InputNumberofProduct = styled(TextField)`
//     height: 23.8px;

// `

const PlusProduct = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Kanit;
    background:  #E0E0E0;
    height: 23.8px;
    aling-items: center;
`

const ConntainerAdd_Buy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Button_Add = styled(Button)`
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    border: solid 1px #e89c6b;
    padding: 10px;
    height: 40px;
    width: 179px;
    background: rgba(232, 156, 107, 0.2);
`

const Detail_Text = styled.p`
    font-family: Kanit;
    color: #e89c6b;
    font-size: 14px;
    margin-right: 10px;
`

const  Detail_Cart = styled.img`
    width: 23px;
    height: 23px;
`


const Button_Buy = styled(Button)`
    font-family: Kanit;
    padding: 10px;
    height: 40px;
    width: 179px;
    color: #f2f2f2;
    background: #e89c6b;

`



const Section1 = () => {
    return (
        <>
            <ContainerSection1>
                <Content>
                    <LeftItem>
                        <MainImage src={Pineapple} alt="main-image" />
                    </LeftItem>
                    <RightItem>
                        <ProductName>สัปะรดกับมะพร้าว</ProductName>
                        <ContainerDetial>
                            <Title>ชื่อร้านค้า</Title>
                            <Subtitle>Noon</Subtitle>
                        </ContainerDetial>
                        <ContainerDetial>
                            <Title>รหัสผู้ขาย</Title>
                            <Subtitle>6010504660</Subtitle>
                        </ContainerDetial>
                        <Price>255  บาท</Price>
                        <ContainerDetial>
                            <Title>การจัดส่ง</Title>
                            <Subtitle>ฟรีค่าจัดส่ง</Subtitle>
                        </ContainerDetial>
                        <ContainerDetial>
                            <Title>จำนวน</Title>
                           {/* <Container_PlusandMinus>
                               <PlusProduct>-</PlusProduct>
                               <InputNumberofProduct></InputNumberofProduct>
                               <MinusProduct>+</MinusProduct>
                            </Container_PlusandMinus> */}
                            <Subtitle>มีสินค้าทั้งหมด 12 ชิ้น</Subtitle>
                        </ContainerDetial>
                        <ConntainerAdd_Buy>
                            <Button_Add>
                                <Detail_Text>เพิ่มลงตะกร้าสินค้า</Detail_Text>
                                <Detail_Cart src={Cart} atl='main-image'></Detail_Cart>
                            </Button_Add>
                            <Button_Buy>ซื้อสินค้า</Button_Buy>
                        </ConntainerAdd_Buy>
                    </RightItem>
                </Content>
            </ContainerSection1>
        </>
    )
}
export default Section1