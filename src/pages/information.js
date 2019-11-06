import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import Layout from '../components/common/Layout'
import Profile from '../components/containers/Information/Profile'
import Address from '../components/containers/Address/AddrBook'
import ChangePassword from '../components/containers/Information/ChangePassword'
import CreditEdit from '../components/containers/Payment/CreditCard'
import axios from 'axios'
const CloneBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
`

const Footer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 10.2rem;
  margin: 0;
  margin-top: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5rem;
`

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
`

const ContainerText = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 19.7rem;
  width: 100%;
`

const TextLink = styled.p`
  width: 14.4rem;
  padding-left: 1.8rem;
  font-family: Kanit;
  font-size: 1.4rem;
  color: ${props => (props.isActive ? '#5B3C78' : '#4F4F4F')};
  font-weight: ${props => (props.isActive ? '400' : '300')};
  margin-top: 0;
  margin-bottom: 2rem;
  cursor: pointer;
  text-decoration: none;
  ${props =>
    props.isActive &&
    css`
      border-left: 0.3rem solid #5b3c78;
      padding-left: 1.5rem;
    `}
  &:hover {
    color: #5b3c78;
  }
`

const Information = ({ location, history }) => {
  // const [credits, setCredits] = useState([])
  const [pageShow, setPageShow] = useState('information')
  const [actives, setActives] = useState({
    information: true,
    address: false,
    pwd: false,
    payment: false,
    history: false,
  })

  const handleActives = key => {
    setPageShow(key)
    setActives({ [key]: true })
  }

  // const getCredits = async ( ) => {
  //   const res = await axios('https://otop-d5bqdesqsq-an.a.run.app//v01/api/account/'+ localStorage.getItem('id'))
  //   setCredits(res.data.)
  // }

  return (
    <CloneBody>
      <Layout location={location} history={history}>
        <Container>
          <ContainerLeft>
            <ContainerText>
              <TextLink
                isActive={actives.information}
                onClick={() => handleActives('information')}
              >
                ข้อมูลส่วนตัว
              </TextLink>
              <TextLink
                isActive={actives.address}
                onClick={() => handleActives('address')}
              >
                สมุดที่อยู่
              </TextLink>
              <TextLink
                isActive={actives.pwd}
                onClick={() => handleActives('pwd')}
              >
                แก้ไขพาสเวิร์ด
              </TextLink>
              <TextLink
                isActive={actives.payment}
                onClick={() => handleActives('payment')}
              >
                ตัวเลือกการชำระเงิน
              </TextLink>
              <TextLink
                isActive={actives.history}
                onClick={() => handleActives('history')}
              >
                ประวัติการสั่งซื้อ
              </TextLink>
            </ContainerText>
          </ContainerLeft>
          {
            {
              information: <Profile />,
              address: <Address />,
              pwd: <ChangePassword />,
              payment: <CreditEdit />,
              history: null,
            }[pageShow]
          }
        </Container>
      </Layout>
      <Footer />
    </CloneBody>
  )
}
export default Information
