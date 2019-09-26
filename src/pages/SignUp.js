import React from 'react'
import styled from 'styled-components'

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

const ContainerText = styled.div`
    display: flex;
    width: 80%;
`

const TextSession = styled.p`
    font-family: Kanit;
    font-size: 1.6rem;
    line-height: 43px;
`

const SignUp = () => {
    return (
        <ContainerSection>
            <ContainerText>
                <TextSession>
                    สินค้าแนะนำ
                </TextSession>
            </ContainerText>
        </ContainerSection>
    )
}

export default SignUp
