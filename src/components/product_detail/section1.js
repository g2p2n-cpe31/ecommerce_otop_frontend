import React,{ useState }  from 'react'
import styled from 'styled-components'
import Pineapple from '../../images/pineapple.jpg'
import Cart from '../../images/cart.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import star from '../../images/star_rate.png'
import PlusandMinus from './plusandminus'

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
    justify-content: flex-start;
`

const  ContainerStar = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20px;
`


const  Star_Rate = styled.img`
    margin-right: 5px;
    height: 16.6px;
    width: 16px;
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

const Container_PlusandMinus = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 100px;
`


const InputNumberofProduct = styled(TextField)`
    height: 23.8px;

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
                        <ProductName>สัปปะรดกับมะพร้าว</ProductName>
                        <ContainerDetial>
                            <ContainerStar>
                                <Star_Rate src={star} alt="main-image"></Star_Rate>
                                <Star_Rate src={star} alt="main-image"></Star_Rate>
                                <Star_Rate src={star} alt="main-image"></Star_Rate>
                                <Star_Rate src={star} alt="main-image"></Star_Rate>
                                <Star_Rate src={star} alt="main-image"></Star_Rate>
                            </ContainerStar>
                            <Subtitle>ขายแล้ว 125 ชิ้น</Subtitle>
                        </ContainerDetial>
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
                           <Container_PlusandMinus>
                               <PlusandMinus></PlusandMinus>
                            </Container_PlusandMinus>
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