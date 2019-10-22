import React from 'react'
import styled from 'styled-components'
import Rectangle from '../../../images/Profile/Rectangle.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ContainerDetail = styled.div `
    display: flex;
    flex-direction: row;
`

const ContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px 76px 0 69px;
    margin-right: 3px;
`

const ContainerRectangle = styled.img`
    width: 3px;
    height: 24px;
    margin-right: 15px;
`

const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2px 0 0 0 ;

`

const TextProfile = styled.p`
    width: 79px;
    height: 19px;
    font-family: Kanit;
    font-size: 14px;
    color: #5B3C78;
    margin-bottom: 20px;
`

const TextAddress = styled.p`
    width: 64px;
    height: 20px;
    font-family: Kanit;
    font-size: 14px;
    font-weight: 300;
    color: #4F4F4F;
    margin-bottom: 20px;
`

const TextPassword = styled.p`
    width: 87px;
    height: 18px;
    font-family: Kanit;
    font-weight: 300;
    font-size: 14px;
    color: #4F4F4F;
    margin-bottom: 20px;
`
const TextPaymentOption = styled.p`
    width: 126px;
    height: 20px;
    font-family: Kanit;
    font-weight: 300;
    font-size: 14px;
    color: #4F4F4F;
    margin-bottom: 20px;
`

const TextHistory = styled.p`
    width: 99px;
    height: 19px;
    font-family: Kanit;
    font-weight: 300;
    font-size: 14px;
    color: #4F4F4F;
    margin-bottom: 20px;
`

const ContainerRight = styled.div`
    display: flex;
    flex-direction: row;
    width: 1137px;
    height: 452px;
    margin-left: 0 0 0 5px;
    background-color: #FFFFFF;
    border-radius: 5px;
`

const ContainerTextField = styled.div`
    display:flex;
    flex-direction: column;
    padding: 43px 0 33px 51px;
    width: 726px;
    margin-right: 114px;
`

const ContainerName = styled.p`
    display: flex;
    flex-direction: row;
    margin-bottom: 33px;
`

const TextFieldFirstName = styled(TextField)`
    && {
        width: 323px;
        margin-right: 29px;
    }
    & input{
        margin-bottom: 8px;
    }
`
const TextFieldLastName = styled(TextField)`
    && {
        width: 323px;
    }
    & input{
        margin-bottom: 8px;
    }
`

const TextFieldOther = styled(TextField)`
    && {
        width: 675px;
        margin-right: 29px;
        margin-bottom: 33px;
    }

    & input{
        margin-bottom: 8px;
    }
`

const TextFieldAddress = styled(TextField)`
    && {
        width: 675px;
        margin-right: 29px;
        margin-bottom: 40px;
    }

    & input{
        margin-bottom: 8px;
    }
`



const ContainterButton = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 675px;
`


const StyleButtonSummit = styled(Button)`
    &&{
        width: 155px;
        height: 40px;
        padding: 9px 60px 10px 60px;
        font-family: Kanit;
        font-weight: 500;
        font-size: 14px;
        color: #F2F2F2;
        background-color: #E89C6B;
        border-radius: 5px;
    }
`

const StylePicture = styled.div`
    width: 205px;
    height: 205px;
    border-radius: 50%;
    background: #BDBDBD;
    margin: 48px 94px 199px 0;

`

const StyleButtonEditPicture = styled(Button)`
    && {
        width: 61px;
        height: 21px;
        font-family: Kanit;
        font-size: 10px;
        color: #FFFFFF;
        margin: 92px 72px 92px 72px;
        border:  1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 0px 19px 3px 19px;
    }
`




const Detail =  () => {
    return (
        <ContainerDetail>
            <ContainerLeft>
                <ContainerRectangle src={Rectangle}/>
                <ContainerText>
                    <TextProfile>ข้อมูลส่วนตัว</TextProfile>
                    <TextAddress>สมุดที่อยู่</TextAddress>
                    <TextPassword>แก้ไขพาสเวิร์ด</TextPassword>
                    <TextPaymentOption>ตัวเลือกการชำระเงิน</TextPaymentOption>
                    <TextHistory>ประวัติการสั่งซื้อ</TextHistory>
                </ContainerText>
            </ContainerLeft>

            <ContainerRight>
               <ContainerTextField>

                    <ContainerName>
                        <TextFieldFirstName
                            placeholder="Firstname"
                        />
                        <TextFieldLastName
                            placeholder="Lastname"
                        />
                    </ContainerName>
                    <TextFieldOther
                        placeholder="PhoneNumber"
                    />
                     <TextFieldOther
                        placeholder="E-mail"
                    />
                     <TextFieldAddress
                        placeholder="Address"
                    />
                    <ContainterButton>
                        <StyleButtonSummit>บันทึก</StyleButtonSummit>
                    </ContainterButton>
               </ContainerTextField>

               <StylePicture>
                    <StyleButtonEditPicture size="small">แก้ไข</StyleButtonEditPicture>
                </StylePicture>
            </ContainerRight>
        </ContainerDetail>
    )
}
export default Detail
