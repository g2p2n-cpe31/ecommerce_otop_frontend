import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import 'typeface-kanit'
import Box from '@material-ui/core/Box';
import { borderRadius } from '@material-ui/system';
import InputAdornment from '@material-ui/core/InputAdornment'

const ButtonShow = styled.button`
  font-family: 'Kanit';
  font-size: 14px;
  line-height: 43px;
`

const ConfirmButton = styled(Button)`
  &&  {
    display: flex;
    align-items: center;
    width: 93px;
    height: 24px;
    font-family: 'Kanit';
    background: #E0E0E0;
    border-radius: 30px;
    margin-bottom: 7px;
    & span{
      font-size: 12px;
      display: absolute; 
      align-items: flex-start;
      justify-content: center; 
      letter-spacing: 0.5px;
      color: #828282;
      margin-bottom: 25px;
      }
}
`

const ConfirmText = styled.div`
  font-size: 12px;
  line-height: 15px;
  display: absolute; 
  align-items: flex-start;
  justify-content: center;
  letter-spacing: 0.5px;
  color: #828282;
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
    border-radius: 10px;
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

const SignInButton = styled(Button)`
  &&  {
    font-family: 'Kanit';
    font-size: 13px;
    line-height: 43px;
    color: rgba(91, 60, 120, 0.5);
  }
`
const SignUpButton = styled(Button)`
  &&  {
    width: 234px;
    height: 48px;
    font-family: 'Kanit';
    border-radius: 25px;
    background-color: #5B3C78;
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

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-263px',
    marginLeft: '-409px',
    width: 818,
    height: 526,
    backgroundColor: theme.palette.background.paper,
    border: '0.5px solid #000',
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
    fontFamily: 'Kanit',
    borderRadius: '10px',
    padding: '44px 36px',
  },
  textField1: {
    lineHeight:'43px',
    marginLeft: theme.spacing(4),
    // marginRight: theme.spacing(2),
    width: 670,
    padding: '2px',
  },
  textField2: {
    lineHeight:'43px',
    marginLeft: theme.spacing(4),
    // marginRight: theme.spacing(3),
    width: 320,
    padding: '2px',
  },
}));

function getModalStyle() {
  const top = 20 ;
  const left = 52 ;
  return {
    background: '#fff'
  };
}

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <div>
        <ButtonShow type="button" onClick={handleOpen}>
          สมัครสมาชิก
        </ButtonShow>
        <ModalContainer
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={handleClose}
        >

        <Box style={modalStyle} className={classes.paper}>
          <ModalTitle id="simple-modal-title">สมัครสมาชิก</ModalTitle>

          <div>
            <FieldFont
              placeholder="ชื่อ"
              className={classes.textField2}
              margin="normal"
            /> 
            <FieldFont
              placeholder="นามสกุล"
              className={classes.textField2}
              margin="normal"
            />
          </div>

          <div>
            <SearchTextBox
              type="tel"
              placeholder="เบอร์โทรศัพท์"
              className={classes.textField2}
              margin="normal"
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
              type="tel"
              placeholder="รหัส OTP (รหัสยืนยันจากโทรศัพท์)"
              className={classes.textField2}
              margin="normal"
            />    
          </div>
          
          <FieldFont
              type="email"
              placeholder="อีเมล"
              className={classes.textField1}
              margin="normal"
            />    
          <FieldFont
              type="tel"
              placeholder="ชื่อบัญชีผู้ใช้"
              className={classes.textField1}
              margin="normal"
            />     

          <div>
            <FieldFont
              placeholder="รหัสผ่าน"
              className={classes.textField2}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />      
            <FieldFont
              placeholder="ยืนยันรหัสผ่าน"
              className={classes.textField2}
              type="password"
              autoComplete="current-password"
              margin="normal"
            />  
          </div>

        <Box display="flex" justifyContent="flex-end" alignItems="center" p={5}>
            <TextEnd>เป็นสมาชิกอยู่แล้ว ?</TextEnd>
            <SignInButton href="#text-buttons" className={classes.button}>
              เข้าสู่ระบบ
            </SignInButton>

            <SignUpButton variant="extended" color="primary" aria-label="add" className={classes.margin}>
              สมัครสมาชิก
            </SignUpButton>
        </Box>

        </Box>
      </ModalContainer>
    </div>
  );
}