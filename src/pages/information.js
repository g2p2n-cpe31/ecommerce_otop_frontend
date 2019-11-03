import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import Layout from '../components/common/Layout'
import Profile from '../components/containers/Information/Profile'
import Address from '../components/containers/Address/AddrBook'
import ChangePassword from '../components/containers/Information/ChangePassword'

const Container = styled.div`
    display: flex;
    flex-direction: row;

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
    color: ${props => props.isActive ? '#5B3C78' : '#4F4F4F'};
    font-weight: ${props => props.isActive? '400':'300'};
    margin-top: 0;
    margin-bottom: 2rem;
    cursor: pointer;
    text-decoration: none;
    ${
        props => props.isActive && css`
            border-left: 3px solid #5B3C78;
            padding-left: 1.5rem;
        `
    }
    &:hover{
        color: #5B3C78;
    }
`


const Information = () => {
    const [pageShow, setPageShow] = useState('information')
    const [actives, setActives] = useState({
        'information':true,
        'address':false,
        'pwd':false,
        'payment':false,
        'history':false,
    })

    const handleActives = (key) => {
        setPageShow(key)
        setActives({[key]: true})
    }

    return(
        <Layout>
               <Container>
                <ContainerLeft>
                    <ContainerText>
                        <TextLink isActive={actives.information} onClick={()=>handleActives('information')}>ข้อมูลส่วนตัว</TextLink>
                        <TextLink isActive={actives.address} onClick={()=>handleActives('address')}>สมุดที่อยู่</TextLink>
                        <TextLink isActive={actives.pwd} onClick={()=>handleActives('pwd')}>แก้ไขพาสเวิร์ด</TextLink>
                        <TextLink isActive={actives.payment} onClick={()=>handleActives('payment')} >ตัวเลือกการชำระเงิน</TextLink>
                        <TextLink isActive={actives.history} onClick={()=>handleActives('history')}  >ประวัติการสั่งซื้อ</TextLink>
                    </ContainerText>
                </ContainerLeft>
                    {
                        {
                            information: <Profile/>,
                            address: <Address/>,
                            pwd: <ChangePassword/>,
                            payment: null,
                            history: null
                        }[pageShow]
                    }
                </Container>
        </Layout>
    )
}
export default Information
