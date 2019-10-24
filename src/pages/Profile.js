import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import Option from '../components/containers/Profile/Option'
import Information from '../components/containers/Profile/Information'


const Container = styled.div`
    display: flex;
    flex-direction: row;

`



const Profile = () => {
    return(
        <Layout>
               <Container>
                    <Option/>
                    <Information/>
               </Container>
        </Layout>
    )
}
export default Profile
