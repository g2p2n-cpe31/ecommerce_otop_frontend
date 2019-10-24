import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Cart from '../../../images/ProductDetail/cart.png'
import Button from '@material-ui/core/Button'
import PlusandMinus from '../ProductDetail/PlusAndMinus'
import Image from '../ProductDetail/GalleryProductDetail'
import Alert from './Alert'
import Star from '../../../images/ProductDetail/star.svg'
import StarOpacity from '../../../images/ProductDetail/star_opacity.png'
import { QuantityContext } from '../../context/QuantityProduct'

const Content = styled.div`
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
  flex-direction: column;
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
  position: relative;
`

const ProductName = styled.p`
  font-family: Kanit;
  align-items: center;
  font-size: 24px;
  color: #333333;
  margin-top: 6px;
  margin-bottom: 12px;
`

const ContainerDetial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0.8rem 0;
`

const StarStyle = styled.img`
  margin-right: 5px;
  width: 16.55px;
  height: 16px;
  &:last-child {
    margin-right: 20px;
  }
`

const Rating = styled.p`
  margin-right: 29px;
  margin-top: 0.55rem;
  width: 14px;
  font-family: Kanit;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  color: #e89c6b;
`

const Sellout = styled.p`
  margin-bottom: 0px;
  font-weight: normal;
  font-size: 12px;
  color: #828282;
  margin: auto 0;
`

const NameStore = styled.p`
  font-family: Kanit;
  color: #828282;
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0 28px 0 0;

  /* margin-bottom: 15px; */
`

const Subtitle = styled.p`
  font-family: Kanit;
  color: #828282;
  font-weight: 300;
  font-size: 14px;
  margin: 0;
`

const IdSeller = styled.p`
  font-family: Kanit;
  color: #828282;
  font-weight: normal;
  font-size: 14px;
  margin: 0 2.5rem 0 0;
`

const Price = styled.p`
  font-family: Kanit;
  font-size: 36px;
  width: 13.3rem;
  color: #5b3c78;
  line-height: 3.6rem;
  margin: 0.8rem 0.8rem;
`

const Shipping = styled.p`
  font-family: Kanit;
  font-size: 14px;
  color: #828282;
  font-weight: normal;
  margin: 0 2.5rem 0 0;
`

const Amount = styled.p`
  font-family: Kanit;
  color: #828282;
  font-weight: normal;
  font-size: 14px;
  margin: 0 4.5rem 0 0;
`

const ContainerPlusandMinus = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 26px;
`

const ConntainerAddBuy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 5.7rem 0;
`

const ButtonAdd = styled(Button)`
  && {
    display: flex;
    flex-direction: row;
    margin-right: 1rem;
    border: solid 1px #e89c6b;
    /* padding: 8px; */
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
  line-height: 23px;
  margin-right: 10px;
  margin: auto 10px auto auto;
`

const DetailCart = styled.img`
  width: 23px;
  height: 23px;
  font-size: 14px;
  margin: auto;
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
  const [isShow, setIsShow] = useState(false)
  const { state } = useContext(QuantityContext)
  return (
    <Content>
      <LeftItem>
        <Image />
      </LeftItem>
      <RightItem>
        {isShow ? <Alert closeAlert={() => setIsShow(false)} /> : null}

        <ProductName>สับปะรดกับมะพร้าว</ProductName>

        <ContainerDetial>
          <StarStyle src={Star} />
          <StarStyle src={Star} />
          <StarStyle src={Star} />
          <StarStyle src={Star} />
          <StarStyle src={StarOpacity} />
          <Rating>4.2</Rating>
          <Sellout>ขายแล้ว 125 ชิ้น</Sellout>
        </ContainerDetial>

        <ContainerDetial>
          <NameStore>ชื่อร้านค้า</NameStore>
          <Subtitle>Noon</Subtitle>
        </ContainerDetial>

        <ContainerDetial>
          <IdSeller>รหัสผู้ขาย</IdSeller>
          <Subtitle>6010504660</Subtitle>
        </ContainerDetial>

        <Price>255 บาท</Price>

        <ContainerDetial>
          <Shipping>การจัดส่ง</Shipping>
          <Subtitle>ฟรีค่าจัดส่ง</Subtitle>
        </ContainerDetial>

        <ContainerDetial>
          <Amount>จำนวน</Amount>
          <ContainerPlusandMinus>
            <PlusandMinus />
          </ContainerPlusandMinus>
          <Subtitle>มีสินค้าทั้งหมด {state.quantity} ชิ้น</Subtitle>
        </ContainerDetial>

        <ConntainerAddBuy>
          <ButtonAdd variant="outlined" onClick={() => setIsShow(true)}>
            <DetailText>เพิ่มลงตะกร้าสินค้า</DetailText>
            <DetailCart src={Cart} atl="main-image"></DetailCart>
          </ButtonAdd>
          <ButtonBuy variant="outlined">ซื้อสินค้า</ButtonBuy>
        </ConntainerAddBuy>
      </RightItem>
    </Content>
  )
}
export default SectionOne
