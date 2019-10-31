import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const BoxBottom = styled(Box)`
  width: 799px;
  height: 102px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`

const BoxMiddle = styled(Box)`
  width: 799px;
  height: 310px;
  border-radius: 10px;
  padding: 20px 45px 0 55px;
`

const BoxTop = styled(Box)`
  width: 763px;
  height: 49px;
  border-radius: 10px;
  padding: 44px 0 0 36px;
`

const BottomLeft = styled(Box)`
  width: 404px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  padding-top:10px;
  margin-top: -8px;
`

const BottomMiddle = styled(Box)`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-top:10px;
  margin-top: 5px;
  padding-right: 0px;
`

const BottomRight = styled(Box)`
  width: 314px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 8px;
  padding-left: 20px;
  margin-right: -45px;
`

const CloseIconButton = styled(IconButton)`
  &&{
      position: absolute;
      padding: 3px;
      top: 28px;
      right: 28px;
  }
`

const ConfirmButton = styled(Button)`
  &&  {
    display: flex;
    align-items: center;
    width: 93px;
    height: 24px;
    background: #E0E0E0;
    border-radius: 30px;
    margin-bottom: 7px;

    & :hover {
      background-color: #c4c4c4;
    }
}
`

const ConfirmText = styled.div`
  font-family: 'Kanit';
  font-size: 12px;
  line-height: 15px;
  color: #828282;
  display: absolute; 
  align-items: flex-start;
  justify-content: center;
  /* margin-bottom: 25px; */
  letter-spacing: 0.5px;
`

const FieldFont = styled(TextField)`
  &&  {
    & input{
      padding: 5px;
      text-indent: 5px;
      font-family: Kanit;
      font-size: 14px;
      line-height: 43px;
      letter-spacing: 0.5px;
    }
  }
`

const ModalTitle = styled.div`
  line-height: 43px;
  font-family: Kanit;
  font-weight: 600;
  font-size: 36px;
  display: flex;
  justify-content: flex-start;
  letter-spacing: 0.5px;
  color: #444444;
  padding: 10px;
  margin-bottom: 10px;
`

const ModalContainer = styled(Modal)`
  && {
    background: linear-gradient(316.04deg, #44275D 0%, #3C5B78 100%);
    opacity: 0.9;
  }
`

const LogInButton = styled(Button)`
  &&  {

    width: 85px;
    height: 43px;
    font-family: 'Kanit';
    font-size: 13px;
    text-align: center;
    letter-spacing: 0.5px;
    color: rgb(91, 60, 120);
    padding-top: 0;
    padding-bottom: 0;
    opacity: 0.5;

    & span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  & :hover {
   opacity: .7;
  }
  & span {
    color: none;
  }
`

const SearchTextBox = styled(TextField)`
  && {
    input {
      padding: 5px;
      text-indent: 5px;
      font-family: Kanit;
      font-size: 14px;
      line-height: 43px;
      letter-spacing: 0.5px;
    }

    & .MuiOutlinedInput-adornedEnd {
      padding-right: 0;
    }
  }
`

const SignUpButton = styled(Button)`
  &&  {
    width: 234px;
    height: 48px;
    font-family: 'Kanit';
    border-radius: 25px;
    background-color: #5B3C78;
    & :hover {
        background-color: #412a57;
      }
    & span{
      color: white;
    }
}
`

const TextEnd = styled.div`
  font-family: Kanit;
  font-size: 13px;
  letter-spacing: 0.5px;
  color: rgba(51, 51, 51, 0.8);
  mix-blend-mode: normal;
  opacity: 0.5;
`

const StyledHR = styled.hr`

  color: rgb(91, 60, 120);
  background-color: rgb(91, 60, 120);
  border: none;
  width: 70%;
  height: .2rem;
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  margin-top: -1rem;
  left: 40.7rem;
  top: 45.9rem;
  margin: auto 0;
 

`

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-263px',
    marginLeft: '-409px',
    width: 817,
    height: 525,
    backgroundColor: theme.palette.background.paper,
    border: '0.5px solid #000',
    boxShadow: theme.shadows[1],
    fontFamily: 'Kanit',
    borderRadius: '10px',
    outline: 0,
  },
  textField1: {
    lineHeight:'43px',
    marginLeft: '19px',
    width: 665,
    padding: '2px',
  },
  textField2: {
    lineHeight:'43px',
    marginLeft: '19px',
    width: 323,
    padding: '2px',
  },
}));

function getModalStyle() {
  return {
    background: '#fff'
  };
}

export default function SimpleModal(props) {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [pwd, setPwd] = useState('')
  const [confirmPwd, setConfirmPwd] = useState('')
  const [telNum, setTelNum] = useState('')
  const [otp, setOtp] = useState('')

  const check = () => {
    return (otp === '555555'
            && name !== ''
            && surname !== ''
            && email !== ''
            && username !== ''
            && pwd !== ''
            && confirmPwd !== ''
            && telNum !== ''
            ) ? true : false;
  }

  const submit = () => {
    if (check()) {
      props.handleClose()
    }
  }

  return (
    <div>
      <ModalContainer
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={() => props.step !== 'close'}
        onClose={()=>{ 
          props.handleClose()   
        }} 
      >
        <Box style={modalStyle} className={classes.paper}>
          <CloseIconButton 
            className={classes.button} 
            aria-label="close"
            onClick={(e) => props.handleClose(e)}
          >
            <CloseIcon />
          </CloseIconButton> 

          <BoxTop>        
            <ModalTitle id="simple-modal-title">สมัครสมาชิก</ModalTitle>
          </BoxTop>

          <BoxMiddle>
              <FieldFont
                placeholder="ชื่อ"
                autoComplete="first-name"
                className={classes.textField2}
                margin="normal"
                value={name}
                onChange={e => setName(e.target.value)}
                /> 
              <FieldFont
                placeholder="นามสกุล"
                autoComplete="family-name"
                className={classes.textField2}
                margin="normal"
                value={surname}
                onChange={e => setSurname(e.target.value)}
              />

              <SearchTextBox
                type="tel"
                autoComplete="tel"
                placeholder="เบอร์โทรศัพท์"
                className={classes.textField2}
                margin="normal"
                value={telNum}
                onChange={e => setTelNum(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ConfirmButton>
                        <ConfirmText>ยืนยัน</ConfirmText>
                      </ConfirmButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FieldFont
                type="password"
                placeholder="รหัส OTP (รหัสยืนยันจากโทรศัพท์)"
                className={classes.textField2}
                margin="normal"
                value={otp}
                onChange={e => setOtp(e.target.value)}
              />    
            
            <FieldFont
                type="email"
                autoComplete="email"
                placeholder="อีเมล"
                className={classes.textField1}
                margin="normal"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />    
            <FieldFont
                type="text"
                placeholder="ชื่อบัญชีผู้ใช้"
                className={classes.textField1}
                margin="normal"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />     

              <FieldFont
                placeholder="รหัสผ่าน"
                className={classes.textField2}
                type="password"
                autoComplete="new-password"
                margin="normal"
                value={pwd}
                onChange={e => setPwd(e.target.value)}
              />      
              <FieldFont
                placeholder="ยืนยันรหัสผ่าน"
                className={classes.textField2}
                type="password"
                margin="normal"
                value={confirmPwd}
                onChange={e => setConfirmPwd(e.target.value)}
              />  

          </BoxMiddle>

          <BoxBottom>

            <BottomLeft>
              <TextEnd>เป็นสมาชิกอยู่แล้ว ?</TextEnd>
            </BottomLeft>

            <BottomMiddle>
              <LogInButton className={classes.button}>
                เข้าสู่ระบบ
                <StyledHR />       
              </LogInButton>
           
            </BottomMiddle>

            <BottomRight>
              <SignUpButton 
                variant="extended" 
                className={classes.margin}
                onClick={submit}                // onClick={() => props.setStep('close')}
              >
                สมัครสมาชิก
              </SignUpButton>
            </BottomRight>

          </BoxBottom>

      </Box>
    </ModalContainer>
  </div>
    
  );
}