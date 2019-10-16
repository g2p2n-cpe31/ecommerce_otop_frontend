import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import 'typeface-kanit'
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import picture from './login-pict.jpg';

const BigBox = styled(Box)`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
`

const BoxOne = styled(Box)`
    width: 272px;
    height: 474px;
    border-radius: 10px;
    /* margin: 0 0 0 0; */
`

const BoxTwo = styled(Box)`
    width: 458px;
    height: 474px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    /* border-radius: 10px; */
`

const SmallBox = styled(Box)`
    display: flex;
    flex-direction: row;
`

const BoxThree = styled(Box)`
    width: 235px;
    height: 43px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: auto;
    margin-top: 6px;
    margin-right: 5px;
`

const BoxFour = styled(Box)`
    width: 205px;
    height: 43px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: auto;
    margin-top: 6px;
    margin-left: 0px;
`


const ButtonShow = styled.button`
  font-family: 'Kanit';
  font-size: 14px;
  line-height: 43px;
`

const CloseIconButton = styled(IconButton)`
  &&{
      position: absolute;
      padding: 3px;
      top: 28px;
      right: 28px;
      background: rgba(255, 255, 255, 0.5);
      color: grey;
  }
`

const ForgotPassword = styled(Button)`
  &&  {
    width: 100px;
    height: 43px;  
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 290px;
    top : 18px;
    font-family: Kanit;
    font-size: 13px;
    letter-spacing: 0.5px;
    color: linear-gradient(316.04deg, #44275D 0%, #3C5B78 100%);
    opacity: 0.7;
  }
`

const ImageSideLeft = styled.img`
  width: 272px;
  height: 474px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin: 0 0 0 0;
`

const NotMember = styled.div`
    font-family: Kanit;
    font-size: 13px;
    line-height: 43px;

    text-align: center;
    letter-spacing: 0.5px;
    margin-top: 8px;
    /* margin-left: 130px; */

    color: rgba(51, 51, 51, 0.8);

    mix-blend-mode: normal;
    opacity: 0.5;
`

const ModalTitle = styled.div`
    line-height: 43px;
    font-family: Kanit;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.5px;
    color: #444444;

    display: flex;
    justify-content: center;
    top: "67px";
    margin-bottom: 30px;
    margin-top: 67px;
`

const ModalContainer = styled(Modal)`
  && {
    background: linear-gradient(316.04deg, #44275D 0%, #3C5B78 100%);
    opacity: 0.9;
  }
`

const PasswordField = styled(TextField)`
  &&  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    top: 12px;
    & input{
        width: 290px;
        padding: 10px;
        text-indent: 5px;
        font-family: Kanit;
        font-size: 14px;
        line-height: 43px;
        letter-spacing: 0.5px;
    }
  }
`

const SignInButton = styled(Button)`
  &&  {
    width: 234px;
    height: 48px;    
    font-family: 'Kanit';
    border-radius: 25px;
    background-color: #5B3C78;
    color: white;
    margin: 44px 114px 0px;
  }
`

const SignUpButton = styled(Button)`
  &&  {
    width: 100px;
    height: 43px;
    font-family: 'Kanit';
    font-size: 13px;
    text-align: center;
    letter-spacing: 0.5px;
    color: rgba(91, 60, 120, 0.5);
    margin-top: 8px;

    & span{
      color: white;
    }
  }
`

const Underline = () => (
  <hr
      style={{
          color: 'rgba(91, 60, 120, 0.5)',
          backgroundColor: 'rgba(91, 60, 120, 0.5)',
          width: 67,
          height: 2,
          display: 'flex',
          position: "absolute",
          left: 534,
          top: 417,
      }}
  />
);

const UserField = styled(TextField)`
  &&  {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    top: 10px;
    margin-bottom: 15px;
    & input{
        width: 290px;
        padding: 10px;
        text-indent: 5px;
        font-family: Kanit;
        font-size: 14px;
        line-height: 43px;
        letter-spacing: 0.5px;
    }
  }
`

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: '-263px',
    marginLeft: '-409px',
    width: '730px',
    height: '474px',    
    backgroundColor: theme.palette.background.paper,
    border: '0.5px solid #000',
    // boxShadow: theme.shadows[1],
    // padding: theme.spacing(2, 4, 3),
    fontFamily: 'Kanit',
    borderRadius: '10px',
    padding:0,
  },
  textField2: {
    lineHeight:'43px',
    marginLeft: theme.spacing(4),
    width: 337, 
    padding: '2px',
  },
}));

function getModalStyle() {
  // const top = 20 ;
  // const left = 52 ;
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
        เข้าสู่ระบบ
      </ButtonShow>
      <ModalContainer
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <BigBox style={modalStyle} className={classes.paper}>

            <CloseIconButton 
              className={classes.button} 
              aria-label="close"
              onClick={handleClose}
            >
                <CloseIcon />
            </CloseIconButton>  

            <BoxOne style={modalStyle} >
                <ImageSideLeft src={picture}/>
            </BoxOne>

            <BoxTwo style={modalStyle}>
                <ModalTitle id="simple-modal-title"> เข้าสู่ระบบ </ModalTitle>
                <UserField
                    type="email"
                    placeholder="ชื่อบัญชี / อีเมล"
                    className={classes.textField2}
                    margin="normal"
                />
                <PasswordField
                    placeholder="รหัสผ่าน"
                    className={classes.textField2}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <ForgotPassword href="#text-buttons" className={classes.button} flexbox="flex-end">
                  ลืมรหัสผ่าน
                </ForgotPassword>  
                <SignInButton>เข้าสู่ระบบ</SignInButton>

                <SmallBox>
                  <BoxThree>
                    <NotMember>ยังไม่เป็นสมาชิก ?</NotMember>     
                  </BoxThree>

                  <BoxFour>
                    <SignUpButton>สมัครสมาชิก</SignUpButton>
                  </BoxFour>

                </SmallBox>
                <Underline/>

            </BoxTwo>

        </BigBox>

      </ModalContainer>
    </div>
  );
}