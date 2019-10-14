import React  from 'react'
import styled from 'styled-components'
import Cart from '../../../images/ProductDetail/cart.png'
import Button from '@material-ui/core/Button'
import PlusandMinus from '../ProductDetail/PlusAndMinus'
import StarRate from '../ProductDetail/StarRate'
import Image from '../ProductDetail/GalleryProductDetail'
import Pipeapple from '../../../images/ProductDetail/pineapple.jpg'
import X from '../../../images/ProductDetail/cross.svg'


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

const Alert = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 264px;
    height: 58px;
    background-color: rgba(154, 228, 185, 0.3);
    top: 150px;
    left: 1026px;
    z-index: 200;
`

const Cross = styled.img`
    position: absolute;
    top: 7.4px;
    left: 245px;
    width: 9.5px;
    height: 9.5px;
    z-index: 250;
`

const ContainerAlertLeft = styled.div`
    width: 30%;
    padding: 8px 14px 8px 8px;
`

const ContainerAlertRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
`

const ContainerAlertImage = styled.img`
    width: 64px;
    height: 42px;
`

const AlertNameProduct = styled.p`
    display: flex;
    flex-direction: row;
    font-family: Kanit;
    font-weight: 300;
    font-size: 12px;
    color: #4F4F4F;
    margin-top: 8px;
    margin-bottom: 5px;
`

const AlertAddProduct = styled.p`
    display: flex;
    flex-direction: row;
    font-family: Kanit;
    font-weight: normal;
    font-size: 12px;
    color: #4F4F4F;
`

const ProductName = styled.p`
    font-family: Kanit;
    align-items: center;
    font-size: 24px;
    color: #333333;
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
    margin-bottom: 0px;
`


const NameStore = styled.p`
    font-family: Kanit;
    color: #828282;
    font-size: 14px;
    font-weight: normal;
    margin-right: 28px;
    margin-bottom: 15px;
`

const Subtitle  = styled.p`
    font-family: Kanit;
    color: #828282;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 0;
`

const IdSeller = styled.p`
    font-family: Kanit;
    color: #828282;
    font-weight: normal;
    font-size: 14px;
    margin-right: 25px;
    margin-bottom: 20px;
`

const Price = styled.p`
    font-family: Kanit;
    font-size: 36px;
    width: 13.3rem;
    color: #5b3c78;
    line-height: 3.6rem;
    margin-left: 0.8rem;
    margin-bottom: 20px;
`

const Shipping = styled.p`
    font-family: Kanit;
    font-size: 14px;
    color: #828282;
    font-weight: normal;
    margin-right: 25px;
    margin-bottom: 20px;
`

const Amount = styled.p`
    font-family: Kanit;
    color: #828282;
    font-weight: normal;
    font-size: 14px;
    margin-right: 45px;
    margin-bottom: 40px;
`

const ContainerPlusandMinus = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 26px;
`

const ConntainerAddBuy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
`

const ButtonAdd = styled(Button)`
    && {
        display: flex;
        flex-direction: row;
        margin-right: 30px;
        border: solid 1px #e89c6b;
        padding: 8px;
        height: 40px;
        width: 179px;
        background: rgba(232, 156, 107, 0.2);
    }
`

const DetailText = styled.p`
    font-family: Kanit;
    color: #e89c6b;
    font-weight: 300;
    font-size: 14px;
    margin-right: 10px;
`

const  DetailCart = styled.img`
    width: 23px;
    height: 23px;
    font-size: 14px;
    margin-top: 2px;
`


const ButtonBuy = styled(Button)`
    && {
        font-family: Kanit;
        padding: 10px;
        height: 40px;
        width: 179px;
        color: #f2f2f2;
        background: #e89c6b;
        border: solid 0px #e89c6b;
        font-size: 14px;
        font-weight: 500;
        border-radius: 3px;
    }
`


const SectionOne = () => {
    return (
        <>
            <Content>
                <LeftItem>
                    <Image/>
                </LeftItem>
                <RightItem>
                    <Alert>
                      <ContainerAlertLeft>
                          <ContainerAlertImage src={Pipeapple}/>
                      </ContainerAlertLeft>

                      <ContainerAlertRight>
                         <Cross src={X}/>
                         <AlertNameProduct>สับปะรดกับมะพร้าว</AlertNameProduct>
                         <AlertAddProduct>ถูกเพิ่มลงตะกร้าสินค้าแล้ว</AlertAddProduct>
                      </ContainerAlertRight>
                    </Alert>

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
                        <ContainerPlusandMinus>
                            <PlusandMinus/>
                        </ContainerPlusandMinus>
                        <Subtitle>มีสินค้าทั้งหมด 12 ชิ้น</Subtitle>
                    </ContainerDetial>

                    <ConntainerAddBuy >
                        <ButtonAdd variant="outlined">
                            <DetailText >เพิ่มลงตะกร้าสินค้า</DetailText>
                            <DetailCart src={Cart} atl='main-image'></DetailCart>
                        </ButtonAdd>
                        <ButtonBuy  variant="outlined">ซื้อสินค้า</ButtonBuy>
                    </ConntainerAddBuy>

                </RightItem>
            </Content>
        </>
    )
}
export default SectionOne