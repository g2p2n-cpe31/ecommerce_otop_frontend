import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'

const ContainerSection = styled.div`
  width: 100%;
  height: 464px;
  background: linear-gradient(
    326.77deg,
    rgba(232, 156, 107, 0.4) 0%,
    rgba(247, 227, 127, 0.4) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
`

// const ContainerText = styled.div`
//   display: flex;
//   width: 80%;
//   /* width: 119.4rem; */
// `

// const TextSession = styled.p`
//   font-family: Kanit;
//   font-size: 1.6rem;
//   line-height: 43px;
// `

// const ContainerItems = styled.div`
//   background: rgba(255, 255, 255, 0.4);
//   width: 80%;
//   height: 359px;
// `

const Profile = () => {
  return (
    <Layout>
      <ContainerSection>123</ContainerSection>
      <ContainerSection></ContainerSection>
      <ContainerSection></ContainerSection>
      {/* <ContainerSection>
        <ContainerText>
          <TextSession>สินค้าแนะนำ</TextSession>
        </ContainerText>
      </ContainerSection> */}
    </Layout>
  )
}

export default Profile
