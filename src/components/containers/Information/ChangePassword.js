import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Lock from '../../../images/ChangePassword/lock.png'

const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 48rem;
    box-sizing: border-box;
`

const ContainerEditPassword = styled.p`
    width: 27.6rem;
    font-family: Kanit;
    font-size: 4.8rem;
    margin: 6rem 0 3.3rem 2.6rem;
`

const ContainerDetial = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    max-width: 113.7rem;
    background-color: #FFFFFF;
    border-radius: 0.5rem;
    padding-left: 4.1rem;
`

const ItemLeft = styled.div`
    display:flex;
    flex-direction: column;
    width: 50%;
    padding-bottom: 5.1rem;
`

const StyleText = styled.p`
    font-family: Kanit;
    font-weight: normal;
    font-size: 1.4rem;
    color: #333333;
    margin: 3.2rem 0 4.3rem 0;
    letter-spacing: 0.5px;
    white-space : nowrap;
`

const ContainerTextField = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 2.2rem 0 2.2rem;
    width: 70%;
`

const TextFieldPassWord = styled(TextField)`
    && {
        width: 100%;
        margin-bottom: 3.6rem;
    }
    & input{
        font-family: Kanit;
        font-weight: normal;
        font-size: 14px;
        color: #828282;
        margin-bottom: 0.8rem;
        margin-left: 1.2rem;
    }
    & .MuiInput-underline::before{
        height: 0.5rem;
        border-bottom-color: #4F4F4F;
    }
`
const ContainterButton = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`

const StyleButtonSummit = styled(Button)`
    &&{
        width: 15.5rem;
        height: 4rem;
        padding: 0.9rem 6rem 1rem 6rem;
        font-family: Kanit;
        font-weight: 500;
        font-size: 1.4rem;
        color: #F2F2F2;
        background-color: #E89C6B;
        border-radius: 0.5rem;
        margin-top: 1.1rem;
    }
    &:hover{
        background: #ED7F38;
    }
`

const ItemRight = styled.div`
    width: 50%;
`

const StyledImg = styled.img`
    width: 100%;
    height:100%;
`


const Testone = () => {
    return(
        <ContainerRight>
           <ContainerEditPassword>แก้ไขรหัสผ่าน</ContainerEditPassword>
           <ContainerDetial>
               <ItemLeft>
                   <StyleText>กรุณาอย่าเปิดเผยรหัสผ่านแก่ผู้อื่น เพื่อความปลอดภัยของบัญชีผู้ใช้คุณเอง</StyleText>
                   <ContainerTextField>
                       <TextFieldPassWord placeholder="รหัสผ่านเก่า"/>
                       <TextFieldPassWord placeholder="รหัสผ่านใหม่"/>
                       <TextFieldPassWord placeholder="ยืนยันรหัสผ่านใหม่"/>
                       <ContainterButton><StyleButtonSummit>ยืนยัน</StyleButtonSummit></ContainterButton>
                   </ContainerTextField>
               </ItemLeft>
              <ItemRight><StyledImg src={Lock}/></ItemRight>
           </ContainerDetial>
        </ContainerRight>
    )
}
export default Testone