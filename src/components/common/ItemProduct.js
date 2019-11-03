import React from 'react'
import styled from 'styled-components'
import ImgStarVote from '../../images/Navbar/star_vote.svg'
import { Link } from 'gatsby'

const ImageContainer = styled.div`
  width: 229px;
  height: ${props => (props.multiImages ? ' 45.4rem' : '23.4rem')};
  background: rgb(224, 209, 214);
  border-radius: 5px 5px 0px 0px;
`

const ContainerDetail = styled.div`
  display: flex;
  padding: 1rem 1.2rem;
  flex-direction: column;

  p {
    margin: 0.1rem 0;
  }
`
const NameProduct = styled.p`
  font-family: Kanit;
  font-weight: 350;
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

const Card = styled(Link)`
  cursor: pointer;
  width: 22.9rem;
  height: ${props => props.height};
  margin: ${props => props.margin};
  background: #f2f2f2;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  text-decoration: none;
  transition: box-shadow 0.25s ease;


  &:hover {
    box-shadow: 0px 3px 6px 5px rgba(0, 0, 0, 0.2);
    /* &:after {
      content: '';
      width: 229px;
      height: ${props => (props.multiImages ? ' 45.4rem' : '23.4rem')};
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
      background: linear-gradient(
        0deg,
        rgba(65, 65, 65, 0.2),
        rgba(65, 65, 65, 0.4)
      );
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    } */
  }
`

const ItemProduct = ({
  margin = ' 2.9rem 1rem',
  height = '562px',
  multiImages = true,
}) => {
  return (
    <Card
      margin={margin}
      height={height}
      to="/product_detail"
      // multiImages={multiImages}
      // activeClassName="active"
    >
      <ImageContainer multiImages={multiImages} />
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

export default ItemProduct
