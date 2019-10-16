import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import 'typeface-kanit'
import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
    
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
  }
`

const ConfirmButton = styled(Button)`
  &&  {
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
  color: #F2F2F2;
`

const FieldFont = styled(TextField)`
  &&  {
    width: 337px;
    margin: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    & input{
        width: 337px;
        padding: 5px;
        text-indent: 5px;
        font-family: Kanit;
        font-size: 14px;
        line-height: 43px;
        letter-spacing: 0.5px;
    }
    
     & .accept{
      margin: normal;
      border-bottom-color : green;
      border-color: green;
      
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
  margin-top: 9px;
`

const ModalContainer = styled(Modal)`
  && {
    background: linear-gradient(316.04deg, #44275D 0%, #3C5B78 100%);
    opacity: 0.9;
    border-radius: 10px;
  }
`

const EditButton = styled(Button)`
    margin-top: 55px;
    margin-left: 215px;
    &&  {
        width: 177px;
        height: 48px;
        font-family: 'Kanit';
        border-radius: 25px;
        background-color: #5B3C78;
        font-weight: 500;
        font-size: 14px;
        line-height: 43px;
        letter-spacing: 0.5px;
        text-align: center;    
        color: #FFFFFF;
        & span{
        color: white;
        }
    }
`

const SearchTextBox = styled(TextField)`
  && {
    width:337px;
    padding: 0px;
    margin-top: 30px;
    margin-bottom: 0px;
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
    marginTop: '-258px',
    marginLeft: '-238px',
    width: 476,
    height: 516,   
    backgroundColor: theme.palette.background.paper,
    border: '0.5px solid #000',
    boxShadow: theme.shadows[1],
    fontFamily: 'Kanit',
    borderRadius: '10px',
    padding: '44px 36px',
  },
  textField1: {
    lineHeight:'43px',
    marginLeft: theme.spacing(4),
    width: 337,
    padding: '2px',
  },
}));

function getModalStyle() {
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
        ถัดไป
      </ButtonShow>
      <ModalContainer
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <Box style={modalStyle} className={classes.paper}>
            <CloseIconButton
              className={classes.button}
              aria-label="close"
              onClick={handleClose}
            >
                <CloseIcon />
            </CloseIconButton>          
            <ModalTitle id="simple-modal-title">ลืมรหัสผ่าน</ModalTitle>

            <SearchTextBox
                disabled
                type="tel"
                placeholder="เบอร์โทรศัพท์ / อีเมล"
                className={classes.textField1}
                margin="normal"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <ConfirmButton disabled>
                                <ConfirmText disabled>ยืนยัน</ConfirmText>
                            </ConfirmButton>
                        </InputAdornment>                        
                    ),
                }}
            />
            <FieldFont
                type="tel"
                placeholder="รหัสยืนยัน"
                className= "accept"
            />

            <FieldFont
                type="tel"
                placeholder="รหัสผ่านใหม่"
                className={classes.textField1}
                margin="normal"
            />
            <FieldFont
                type="tel"
                placeholder="ยืนยันรหัสผ่านใหม่"
                className={classes.textField1}
                margin="normal"
            />

            <EditButton>แก้ไขรหัสผ่าน</EditButton>

        </Box>
      </ModalContainer>
    </div>
  );
}