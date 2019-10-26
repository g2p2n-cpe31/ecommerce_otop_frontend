import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Rectangle from '../images/Profile/Rectangle.png'
import Profile from '../components/containers/Information/Profile'
import {Link} from 'gatsby'

const Container = styled.div`
    display: flex;
    flex-direction: row;

`

const ContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
    width: 20%;
`


const ContainerRectangle = styled.img`
    width: 0.3rem;
    height: 2.4rem;
    margin-top: 19.5rem;
    margin-right: 1.5rem;
`

const ContainerText = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 19.7rem;
    width: 100%;
`

const TextLink = styled(Link)`
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    color: #4F4F4F;
    margin-top: 0;
    margin-bottom: 2rem;
    cursor: pointer;
    text-decoration: none;

    &.active{
        font-size: 1.5rem;
        font-weight: 800;
        color: red;
    }
`


const profile = () => {
    return(
        <Layout>
               <Container>
               <ContainerLeft>
                    <ContainerRectangle src={Rectangle}/>
                    <ContainerText>
                        <TextLink to="profile" activeClassName="active" isPartiallyCurrent={true}>ข้อมูลส่วนตัว</TextLink>
                        <TextLink to="address" activeClassName="active" isPartiallyCurrent={true}>สมุดที่อยู่</TextLink>
                        <TextLink to="/" activeClassName="active">แก้ไขพาสเวิร์ด</TextLink>
                        <TextLink to="/" activeClassName="active">ตัวเลือกการชำระเงิน</TextLink>
                        <TextLink to="/" activeClassName="active">ประวัติการสั่งซื้อ</TextLink>
                    </ContainerText>
                </ContainerLeft>
                    <Profile/>
               </Container>
        </Layout>
    )
}
export default profile
