import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
import InputAdornment from '@material-ui/core/InputAdornment'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'

const CloseIconButton = styled(IconButton)`
  && {
    position: absolute;
    padding: 3px;
    top: 28px;
    right: 28px;
  }
`

const ConfirmButton = styled(Button)`
  && {
    width: 93px;
    height: 24px;
    background: #e0e0e0;
    border-radius: 30px;
    margin-bottom: 7px;
  }
`

const ConfirmText = styled.div`
  display: absolute;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 25px;
  font-family: 'Kanit';
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.5px;
  color: #828282;
`

const FieldFont = styled(TextField)`
  && {
    width: 337px;
    margin: auto;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    & input {
      width: 337px;
      padding: 10px;
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
  justify-content: center;
  letter-spacing: 0.5px;
  color: #444444;
  padding: 10px;
  margin-top: 64px;
  margin-bottom: 5px;
`

const ModalContainer = styled(Modal)`
  && {
    
      cursor: url(${ic_cancel_white}) 205 205, auto;
    
    

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -2;
      background: linear-gradient(316.04deg, #44275d 0%, #3c5b78 100%);
      opacity: 0.9;
    }
  }
`


const NextButton = styled(Button)`
  margin-top: 55px;
  margin-left: 250px;
  && {
    width: 177px;
    height: 48px;
    font-family: 'Kanit';
    border-radius: 25px;
    background-color: #5b3c78;
    font-weight: 500;
    font-size: 14px;
    line-height: 43px;
    letter-spacing: 0.5px;
    text-align: center;
    color: #ffffff;
    align-items: center;
    padding: 0 8 0 8;

    & span {
      width: 161px;
      height: 36px;
    }

  }
`

const SearchTextBox = styled(TextField)`
  && {
    width: 337px;
    margin: auto;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    input {
      padding: 10px;
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

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-196px',
    marginLeft: '-238px',
    height: 391,
    width: 475,
    backgroundColor: theme.palette.background.paper,
    border: '0.5px solid #000',
    boxShadow: theme.shadows[1],
    fontFamily: 'Kanit',
    borderRadius: '10px',
    outline: 0,
    cursor: 'auto'
  },
  textField1: {
    lineHeight: '43px',
    marginLeft: theme.spacing(4),
    width: 337,
    padding: '2px',
  },
}))

function getModalStyle() {
  return {
    background: '#fff',
  }
}

export default function SimpleModal(props) {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [verifyTemp, setVerifyTemp] = useState('')
  const [otpTemp, setOtpTemp] = useState('')

  const checkOtp = () => {
    return (verifyTemp !== '' && otpTemp === '555555') ? true : false;
  }

  const submit = () => {
    if (checkOtp()) {
      props.nextStep()
      props.setVerify(verifyTemp)
      props.setOtp(otpTemp)
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
          <ModalTitle id="simple-modal-title">ลืมรหัสผ่าน</ModalTitle>

          <SearchTextBox
            type="text"
            placeholder="เบอร์โทรศัพท์ / อีเมล"
            className={classes.textField1}
            margin="normal"
            value={verifyTemp}
            onChange={e => setVerifyTemp(e.target.value)}
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
            value={otpTemp}
            onChange={e => setOtpTemp(e.target.value)}
            placeholder="รหัสยืนยัน"
            className={classes.textField1}
            margin="normal"
          />

          <NextButton onClick={submit}> ถัดไป </NextButton>
        </Box>
      </ModalContainer>
    </div>
  )
}
