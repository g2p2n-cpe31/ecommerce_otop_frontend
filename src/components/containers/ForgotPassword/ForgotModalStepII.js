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
import CheckSharpIcon from '@material-ui/icons/CheckSharp'
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'
import axios from 'axios'

const CheckIcon = styled(CheckSharpIcon)`
  width: 42px;
  height: 30px;
  color: #27ae60;
  position: absolute;
  margin-left: 365px;
  margin-top: -32px;
`

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
    display: flex;
    align-items: center;
    width: 93px;
    height: 24px;
    font-family: 'Kanit';
    background: rgba(91, 60, 120, 0.7);
    border-radius: 30px;
    margin-bottom: 7px;
  }
`

const ConfirmText = styled.div`
  font-size: 12px;
  line-height: 15px;
  display: absolute;
  align-items: flex-start;
  justify-content: center;
  letter-spacing: 0.5px;
  color: #f2f2f2;
`

const EditButton = styled(Button)`
  margin-top: 55px;
  margin-left: 255px;
  padding-top: 3px;
  border-color: #27ae60;
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
    & :hover {
      background-color: #412a57;
    }
    & span {
      color: white;
    }
  }
`

const FieldFont = styled(TextField)`
  && {
    width: 337px;
    margin: auto;
    margin-top: 20px;
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

    & .accept {
      margin: normal;
      border-bottom-color: green;
      border-color: 'green';
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

const TextFieldCustom = styled(TextField)`
  && {
    width: 337px;
    margin: auto;
    margin-top: 20px;
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

    & .MuiInput-underline:before {
      border-bottom-color: green;
    }

    & .MuiInput-underline:after {
      border-bottom-color: green;
    }
  }
`

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-258px',
    marginLeft: '-238px',
    width: 476,
    height: 516,
    backgroundColor: theme.palette.background.paper,
    border: '0.5px solid #000',
    boxShadow: theme.shadows[1],
    fontFamily: 'Kanit',
    borderRadius: '10px',
    // padding: '44px 36px',
    outline: 0,
    cursor: 'auto',
  },
  textField1: {
    lineHeight: '43px',
    marginLeft: theme.spacing(4),
    width: 337,
    padding: '2px',
    marginBottom: '5px',
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
  const [pwdTemp, setpwdTemp] = useState('')
  const [confirmpwdTemp, setConfirmpwdTemp] = useState('')

  const changePassword = async () => {
    try {
      const res = await axios.post('/put/:_id', {

      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const submit = () => {
    if (pwdTemp === confirmpwdTemp && pwdTemp !== '' && confirmpwdTemp !== '') {
      props.nextStep()
      props.setPwd(pwdTemp)
    }
  }
  return (
    <div>
      <ModalContainer
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        // open={true}
        open={() => props.step !== 'close'}
        onClose={() => {
          props.handleClose()
        }}
      >
        <Box style={modalStyle} className={classes.paper}>
          <CloseIconButton
            className={classes.button}
            aria-label="close"
            onClick={props.handleClose}
          >
            <CloseIcon />
          </CloseIconButton>
          <ModalTitle id="simple-modal-title">ลืมรหัสผ่าน</ModalTitle>

          <SearchTextBox
            type="text"
            value={props.verify}
            className={classes.textField1}
            margin="normal"
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <ConfirmButton disabled>
                    <ConfirmText>ยืนยัน</ConfirmText>
                  </ConfirmButton>
                </InputAdornment>
              ),
            }}
          />

          <TextFieldCustom
            type="text"
            value={props.otp}
            className="accept"
            InputProps={{
              readOnly: true,
            }}
          />

          <CheckIcon />

          <FieldFont
            type="password"
            value={pwdTemp}
            onChange={e => setpwdTemp(e.target.value)}
            placeholder="รหัสผ่านใหม่"
            className={classes.textField1}
            margin="normal"
          />
          <FieldFont
            type="password"
            value={confirmpwdTemp}
            onChange={e => setConfirmpwdTemp(e.target.value)}
            placeholder="ยืนยันรหัสผ่านใหม่"
            className={classes.textField1}
            margin="normal"
          />

          <EditButton onClick={submit}>แก้ไขรหัสผ่าน</EditButton>
        </Box>
      </ModalContainer>
    </div>
  )
}
