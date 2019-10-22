import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Detail from '../components/containers/Profile/Detail'


const ContainerPersonal = styled.p`
    height: 72px;
    width: 276px;
    font-family: Kanit;
    font-size: 48px;
    margin-top: 60px;
    margin-bottom: 33px;
    margin-left: 315px;
    align-items: flex-start;
`


const Profile = () => {
    return  (
        <Layout>
               <ContainerPersonal>
                   ข้อมูลส่วนตัว
               </ContainerPersonal>
               <Detail/>
        </Layout>
    )
}
export default Profile
