import  React from 'react'
import styled from 'styled-components'

const ContainerSection = styled.div`
    width: 100%;
    height: 464px;
    background:red;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContainerText = styled.div`
    display: flex;
    width: 80%;
`

const TextSession = styled.div`
    front-family: Kanit;
    front-size : 1.6rem;
    line-height: 43px;
`


const Product_detial = () => {
    return(
        <ContainerSection>
            <ContainerText>
                <TextSession>สินค้าแนะนำ</TextSession>
            </ContainerText>
        </ContainerSection>
    )
}
export default  Product_detial