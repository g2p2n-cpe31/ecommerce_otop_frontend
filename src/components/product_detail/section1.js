import React  from 'react'
import styled from 'styled-components'
import Cart from '../../images/ProductDetail/cart.png'
import Button from '@material-ui/core/Button'
import PlusandMinus from './PlusandMinus'
import StarRate from './StarRate'
import Image from './GalleryProductDetail'


const Content = styled.div `
    display: flex;
    justify-content: flex-start;
    background-color: white;
    border-radius: 5px;
    height: 559px;
    width: 100%;
    margin-bottom: 1.5rem;
`

const LeftItem = styled.div`
    width: 50%;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding: 50px 75px;
    margin-right: 23px;
`

const RightItem = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 50px 0px;
`

const ProductName = styled.p`
    font-family: Kanit;
    align-items: center;
    font-size: 24px;
    color: #5b3c78;
    margin-top: 16px;
    margin-bottom: 10px;
`

const ContainerDetial = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

const  ContainerStar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 40px;
    padding: 3px 0 0 0;
    margin-bottom: 5px;
`


const NameStore = styled.p`
    font-family: Kanit;
    color: #828282;
    font-weight: normal;
    margin-right: 28px;
    margin-bottom: 15px;
`

const Subtitle  = styled.p`
    font-family: Kanit;
    color: #828282;
    font-weight: 300;
    margin-bottom: 0;
`

const IdSeller = styled.p`
    font-family: Kanit;
    color: #828282;
    font-weight: normal;
    margin-right: 25px;
    margin-bottom: 20px;
`

const Price = styled.p`
    font-family: Kanit;
    font-size: 3.6rem;
    width: 13.3rem;
    color: #5b3c78;
    line-height: 3.6rem;
    margin-left: 0.8rem;
    margin-bottom: 20px;
`

const Shipping = styled.p`
    font-family: Kanit;
    color: #828282;
    font-weight: normal;
    margin-right: 25px;
    margin-bottom: 20px;
`

const Amount = styled.p`
    font-family: Kanit;
    color: #828282;
    font-weight: normal;
    margin-right: 45px;
    margin-bottom: 40px;
`

const Container_PlusandMinus = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 26px;
`

const ConntainerAdd_Buy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`

const Button_Add = styled(Button)`
    && {
        display: flex;
        flex-direction: row;
        margin-right: 30px;
        border: solid 1px #e89c6b;
        padding: 10px;
        height: 40px;
        width: 179px;
        background: rgba(232, 156, 107, 0.2);
    }
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
    font-size: 14px;
`


const Button_Buy = styled(Button)`
    && {
        font-family: Kanit;
        padding: 10px;
        height: 40px;
        width: 179px;
        color: #f2f2f2;
        background: #e89c6b;
        font-size: 14px;
    }
`


const Section1 = () => {
    return (
        <>
            <Content>
                <LeftItem>
                    <Image/>
                </LeftItem>
                <RightItem>
                    <ProductName>สับปะรดกับมะพร้าว</ProductName>
                    <ContainerDetial>
                        <ContainerStar>
                            <StarRate/>
                        </ContainerStar>
                            <Subtitle>ขายแล้ว 125 ชิ้น</Subtitle>
                    </ContainerDetial>

                    <ContainerDetial>
                        <NameStore>ชื่อร้านค้า</NameStore>
                        <Subtitle>Noon</Subtitle>
                    </ContainerDetial>

                    <ContainerDetial>
                        <IdSeller>รหัสผู้ขาย</IdSeller>
                        <Subtitle>6010504660</Subtitle>
                    </ContainerDetial>

                    <Price>255  บาท</Price>

                    <ContainerDetial>
                        <Shipping>การจัดส่ง</Shipping>
                        <Subtitle>ฟรีค่าจัดส่ง</Subtitle>
                    </ContainerDetial>

                    <ContainerDetial>
                        <Amount>จำนวน</Amount>
                        <Container_PlusandMinus>
                            <PlusandMinus></PlusandMinus>
                        </Container_PlusandMinus>
                        <Subtitle>มีสินค้าทั้งหมด 12 ชิ้น</Subtitle>
                    </ContainerDetial>

                    <ConntainerAdd_Buy >
                        <Button_Add variant="outlined">
                            <Detail_Text >เพิ่มลงตะกร้าสินค้า</Detail_Text>
                            <Detail_Cart src={Cart} atl='main-image'></Detail_Cart>
                        </Button_Add>
                        <Button_Buy  variant="outlined">ซื้อสินค้า</Button_Buy>
                    </ConntainerAdd_Buy>

                </RightItem>
            </Content>
        </>
    )
}
export default Section1