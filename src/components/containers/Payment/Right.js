import React from 'react'
import styled from 'styled-components'
import Select from '../../common/Filter'

const ContainerRight = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    padding-right: 9.6rem;
    border-radius: 0.2rem;
    margin-left: 9.6rem;
`
const AddressText = styled.p`
    font-family: Kanit;
    font-weight: normal;
    font-size: 30px;
    color: #FFFFFF;
    margin: 2.7rem 0 0 0 ;
`

const StyledSelect = styled(Select)`
    background: #333333;
    opacity: 0.5;
    border-radius: 2px;
`


const Right = () => {
    return(
        <ContainerRight>
            <AddressText>ที่อยู่สำหรับจัดส่ง</AddressText>
            
        </ContainerRight>
    )
}
export default Right