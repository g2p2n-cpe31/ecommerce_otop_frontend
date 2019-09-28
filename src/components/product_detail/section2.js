import React from 'react'
import styled from 'styled-components'

const  ContainerSection2 = styled.div`
    padding: 0px 277px 116px 277px;
`

const Content = styled.div`
    display: flex;
    flex-display: colum;
    justify-content: flex-start;
    background-color: white;
    height: 728px;
    border-radius: 5px;
    padding: 30px;
    height: 650px;
`

const Detail = styled.p`
    font-family: kanit;
`



const Section2 = () => {
    return (
        <>
            <ContainerSection2>
                <Content>
                    <Detail>รายละเอียดสินค้า</Detail>
                </Content>
            </ContainerSection2>
        </>
    )
}
export default Section2