import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'

import ContainerPR from '../components/common/ContainerPR'

const MockCarousel = styled.div`
  width: 100%;
  height: 359px;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem auto 1rem;
`

const ContainerSection = styled.div`
  width: 100%;
  height: ${props => props.height || '464px'};
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || '#E0E0E0'};
`

const TextTopic = styled.p`
  width: 80%;
  font-family: Kanit;
  font-size: 3rem;
  line-height: 3rem;
  color: #333333;
  margin: 1rem 0;
`

const Home = () => {
  return (
    <Layout>
      <MockCarousel>
        <p>CAROUSEL</p>
      </MockCarousel>
      <ContainerSection>
        <TextTopic>สินค้าขายดี</TextTopic>
        <ContainerPR />
      </ContainerSection>
      <ContainerSection background="linear-gradient(326.77deg, rgba(232, 156, 107, 0.4) 0%, rgba(247, 227, 127, 0.4) 100%)">
        <TextTopic>สินค้าแนะนำ</TextTopic>
        <ContainerPR background="rgba(255, 255, 255, 0.4);" />
      </ContainerSection>
    </Layout>
  )
}

export default Home
