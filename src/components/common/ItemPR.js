import React from 'react'
import styled from 'styled-components'
import ImgStarVote from '../../images/Navbar/star_vote.svg'

const Card = styled.div`
  width: 229px;
  height: 339px;
  background: #f2f2f2;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: auto 1rem;
`

const ImageContainer = styled.div`
  width: 229px;
  height: 234px;
  /* background: url(humphrey-muleba-mIzTRbaqDGM-unsplash.jpg); */
  background: rgb(224, 209, 214);
  border-radius: 5px 5px 0px 0px;
`

const ContainerDetail = styled.div`
  width: 100%;
  display: flex;
  padding: 0.6rem 1.2rem;
  flex-direction: column;

  p {
    margin: 0.1rem 0;
  }
`
const NameProduct = styled.p`
  font-family: Kanit;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0.5px;
  color: #4f4f4f;
`

const Price = styled.p`
  font-family: Kanit;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #5b3c78;
`

const SendStatus = styled.p`
  font-family: Kanit;
  font-weight: 300;
  font-size: 10px;
  letter-spacing: 0.5px;
  color: #828282;
`

const ContainerFooterItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
`

const ContainerStar = styled.div`
  display: flex;
  width: 40%;
`

const IconStar = styled.img`
  width: 1.6rem;
  height: 15.27px;
  margin: 0 7px 0 0;
`

const VoteNumber = styled.p`
  font-family: Kanit;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #e89c6b;
`

const TextSold = styled.p`
  font-family: Kanit;
  font-weight: 300;
  font-size: 1rem;
  letter-spacing: 0.5px;
  color: #828282;
`

const ItemPR = () => {
  return (
    <Card>
      <ImageContainer></ImageContainer>
      <ContainerDetail>
        <NameProduct>กระหรี่ปัป</NameProduct>
        <Price>255 บาท</Price>
        <SendStatus>จัดส่งฟรี</SendStatus>
        <ContainerFooterItem>
          <ContainerStar>
            <IconStar src={ImgStarVote} />
            <VoteNumber>4.2</VoteNumber>
          </ContainerStar>
          <TextSold>ขายแล้ว 125 ชิ้น</TextSold>
        </ContainerFooterItem>
      </ContainerDetail>
    </Card>
  )
}

export default ItemPR
