import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 72.8rem;
`

const ContainerPersonal = styled.p`
  height: 7.2rem;
  width: 27.6rem;
  font-family: Kanit;
  font-size: 4.8rem;
  margin-top: 6rem;
  margin-bottom: 3.3rem;
  margin-left: 2.6rem;
`

const ContainerDetial = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 113.7rem;
  height: 45.2rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
`

const ContainerTextField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.3rem 0 3.3rem 5.1rem;
  margin-right: 11.4rem;
  width: 60%;
`

const ContainerName = styled.p`
  display: flex;
  flex-direction: row;
  margin-bottom: 3.3rem;
`

const TextFieldFirstName = styled(TextField)`
  && {
    width: 50%;
    margin-right: 2.9rem;
    & input {
      margin-bottom: 0.2rem;
      margin-left: 1rem;
      font-family: Kanit;
      font-style: normal;
      font-size: 1.4rem;
      line-height: 2.11rem;
      letter-spacing: 0.05rem;
      color: #4F4F4F;  
    }
    & .MuiInput-underline::before {
      height: 0.5rem;
      border-bottom-color: #4f4f4f;
    }

  }
`
const TextFieldLastName = styled(TextField)`
  && {
    width: 50%;
    & input {
      margin-bottom: 0.2rem;
      margin-left: 1rem;
      font-family: Kanit;
      font-style: normal;
      font-size: 1.4rem;
      line-height: 2.1rem;
      letter-spacing: 0.05rem;
      color: #4F4F4F;  
  }
  & .MuiInput-underline::before {
    height: 0.5rem;
    border-bottom-color: #4f4f4f;
  }

  }
`

const TextFieldOther = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 3.3rem;
    & input {
      margin-bottom: 0.2rem;
      margin-left: 1rem;
      font-family: Kanit;
      font-style: normal;
      font-size: 1.4rem;
      line-height: 2.1rem;
      letter-spacing: 0.05rem;
      color: #4F4F4F;  
    }
    & .MuiInput-underline::before {
      height: 0.5rem;
      border-bottom-color: #4f4f4f;
    }
  }
`

const TextFieldAddress = styled(TextField)`
  && {
    width: 100%;
    margin-bottom: 4rem;
    & input {
      margin-bottom: 0.2rem;
      margin-left: 1rem;
      font-family: Kanit;
      font-style: normal;
      font-size: 1.4rem;
      line-height: 2.1rem;
      letter-spacing: 0.05rem;
      color: #4F4F4F;  
  }
  & .MuiInput-underline::before {
    height: 0.5rem;
    border-bottom-color: #4f4f4f;
  }

  }
`

const ContainterButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const StyleButtonSummit = styled(Button)`
  && {
    width: 15.5rem;
    height: 4rem;
    padding: 0.9rem 6rem 1rem 6rem;
    font-family: Kanit;
    font-weight: 500;
    font-size: 1.4rem;
    color: #f2f2f2;
    background-color: #e89c6b;
    border-radius: 0.5rem;
  }
  &:hover {
    background: #ed7f38;
  }
`

const StylePicture = styled.div`
  width: 20.5rem;
  height: 20.5rem;
  border-radius: 50%;
  background: #bdbdbd;
  margin: 4.8rem 9.4rem 19.9rem 0;
`

const StyleButtonEditPicture = styled(Button)`
  && {
    width: 6.1rem;
    height: 2.1rem;
    font-family: Kanit;
    font-size: 1rem;
    color: #ffffff;
    margin: 9.2rem 7.2rem 9.2rem 7.2rem;
    border: 0.1rem solid #ffffff;
    box-sizing: border-box;
    border-radius: 0.5rem;
    padding: 0 1.9rem 0.3rem 1.9rem;
  }
`

const Information = () => {
  return (
    <ContainerRight>
      <ContainerPersonal>ข้อมูลส่วนตัว</ContainerPersonal>
      <ContainerDetial>
        <ContainerTextField>
          <ContainerName>
            <TextFieldFirstName placeholder="ชื่อ" />
            <TextFieldLastName placeholder="นามสกุล" />
          </ContainerName>

          <TextFieldOther placeholder="เบอร์โทร" />
          <TextFieldOther placeholder="อีเมล" />
          <TextFieldAddress placeholder="ที่อยู่" />
          <ContainterButton>
            <StyleButtonSummit>บันทึก</StyleButtonSummit>
          </ContainterButton>
        </ContainerTextField>

        <StylePicture>
          <StyleButtonEditPicture size="small">แก้ไข</StyleButtonEditPicture>
        </StylePicture>
      </ContainerDetial>
    </ContainerRight>
  )
}
export default Information
