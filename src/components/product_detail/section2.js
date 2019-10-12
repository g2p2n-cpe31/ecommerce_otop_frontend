import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    flex-direction: colum;
    justify-content: flex-start;
    background-color: white;
    border-radius: 5px;
    padding: 30px;
    height: 72.8rem;
    width: 100%;
    margin-bottom: 11.6rem;
`

const Detail = styled.p`
    font-family: kanit;
`



const Section2 = () => {
    return (
        <>
            <Content>
                <Detail>รายละเอียดสินค้า</Detail>
            </Content>
        </>
    )
}
export default Section2