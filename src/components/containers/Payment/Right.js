import React from 'react'
import styled from 'styled-components'
import Dropdown from '../../common/AddressDropdown'
import Button from '@material-ui/core/Button'

const ContainerRight = styled.div`
    display:flex;
    flex-direction: column;
    width: 72rem;
    border-radius: 0.2rem;
    margin-left: 9.6rem;
`
const AddressText = styled.p`
    font-family: Kanit;
    font-weight: normal;
    font-size: 30px;
    color: #FFFFFF;
    margin-top: 2.7rem;
    margin-bottom: 3.3rem;
`

const ConcludeText = styled.p`
    font-family: Kanit;
    font-weight: normal;
    font-size: 30px;
    color: #FFFFFF;
    margin-top: 3.3rem;
    margin-bottom: 2.2rem;
`

const ContainerOrder = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 4rem;
`

const ListOrder = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2rem;
    &:nth-child(2){
        margin-bottom: 5.3rem;
    }
`


const OrderText = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.8rem;
    color: #E0E0E0;
    margin: 0;
`

const Line = styled.div`
    border: 2px solid #FFFFFF;
    opacity: 0.3;
    margin-bottom: 1rem;
`

const ContainerTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
`

const TotalText = styled.p`
    font-family: Kanit;
    font-weight: 300;
    font-size: 1.8rem;
    color: #E0E0E0;
    margin: 0;
    &:last-child{
        font-weight: normal;
        font-size: 2.4rem;
        color: #FFAD79;
        margin: 0;
    }
`

const ContainerButton = styled.div`
    display: flex;
    width: 100%;
    margin-top: 3rem;
`

const ButtonCancle = styled(Button)`
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.8rem;
    width: 21.1rem;
    height: 4.2rem;
    background: #BDBDBD;
    color: #FFFFFF;
    margin-right: 1.7rem;
    &:hover{
        background: #ABABAB;
    }
`

const ButtonsSummit = styled(Button)`
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.8rem;
    width: 45.6rem;
    height: 4.2rem;
    background: #E89C6B;
    color: #FFFFFF;
    &:hover{
        background: #ED7F38;
    }

`


const Right = () => {
    return(
        <ContainerRight>
            <AddressText>ที่อยู่สำหรับจัดส่ง</AddressText>
            <Dropdown/>
            <ConcludeText>สรุปรายการสั่งซื้อ</ConcludeText>
            <ContainerOrder>
                <ListOrder>
                    <OrderText>ยอดรวม (จำนวน 4 ชิ้น)</OrderText>
                    <OrderText>765 บาท</OrderText>
                </ListOrder>
                <ListOrder>
                    <OrderText>ค่าจัดส่ง</OrderText>
                    <OrderText>0 บาท</OrderText>
                </ListOrder>
                <Line/>
                <ContainerTotal>
                    <TotalText>ยอดรวมทั้งสิ้น</TotalText>
                    <TotalText>765 บาท</TotalText>
                </ContainerTotal>
                <ContainerButton>
                    <ButtonCancle>ยกเลิก</ButtonCancle>
                    <ButtonsSummit>สั่งซื้อสินค้าแล้ว</ButtonsSummit>
                </ContainerButton>
            </ContainerOrder>
        </ContainerRight>
    )
}
export default Right