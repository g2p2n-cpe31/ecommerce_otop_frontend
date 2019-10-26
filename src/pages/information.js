import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Rectangle from '../images/Profile/Rectangle.png'
import Profile from '../components/containers/Information/Profile'


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

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 19.7rem;
`

const TextProfile = styled.p`
    width: 7.9rem;
    height: 1.9rem;
    font-family: Kanit;
    font-size: 1.4rem;
    color: #5B3C78;
    margin-top: 0;
    margin-bottom: 2rem;
    cursor: pointer;
    &:active{
        color: #5B3C78;
    }
`

const TextAddress = styled.p`
    width: 6.4rem;
    height: 2rem;
    font-family: Kanit;
    font-size: 1.4rem;
    font-weight: 300;
    color: #4F4F4F;
    margin-top: 0;
    margin-bottom: 2.0rem;
    cursor: pointer;
    &:active{
        color: #5B3C78;
    }
`

const TextPassword = styled.p`
    width: 8.7rem;
    height: 1.8rem;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    color: #4F4F4F;
    margin-top: 0;
    margin-bottom: 2rem;
    cursor: pointer;
    &:active{
        color: #5B3C78;
    }
`
const TextPaymentOption = styled.p`
    width: 12.6rem;
    height: 2rem;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    color: #4F4F4F;
    margin-top: 0;
    margin-bottom: 2rem;
    cursor: pointer;
    &:active{
        color: #5B3C78;
    }
`

const TextHistory = styled.p`
    width: 9.9rem;
    height: 1.9rem;
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.4rem;
    color: #4F4F4F;
    margin-top: 0;
    margin-bottom: 2rem;
    cursor: pointer;
    &:hover{
        color: red;
    }
    &:active{
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
                        <TextProfile>ข้อมูลส่วนตัว</TextProfile>
                        <TextAddress>สมุดที่อยู่</TextAddress>
                        <TextPassword>แก้ไขพาสเวิร์ด</TextPassword>
                        <TextPaymentOption>ตัวเลือกการชำระเงิน</TextPaymentOption>
                        <TextHistory>ประวัติการสั่งซื้อ</TextHistory>
                    </ContainerText>
                </ContainerLeft>
                    <Profile/>
               </Container>
        </Layout>
    )
}
export default profile
