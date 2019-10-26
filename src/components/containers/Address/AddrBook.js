import React from 'react'
import styled from 'styled-components'
import Layout from '../../common/Layout'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Info from './AddrInfo'
import Selected from './SelectedInfo'
import Option from './Option'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Input from '@material-ui/core/Input';
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'

const AddrFade = styled(Fade)`
    &&{
        position: absolute;
        width: 615px;
        height: 750px;
        left: 425px;
        top: 30px;
        background: #FFFFFF;
        border-radius: 5px;
        cursor: auto;
    }
`

const AddrModal = styled(Modal)`
    && {
    /* background: linear-gradient(316.04deg, #44275d 0%, #3c5b78 100%); */
    /* opacity: 0.9; */
    cursor: url(${ic_cancel_white}) 205 205, auto;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -2;
      background: linear-gradient(316.04deg, #44275d 0%, #3c5b78 100%);
      opacity: 0.7;
    }
  }
`

const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      input: {
        margin: theme.spacing(1),
      },    
  }));

const ButtonCustom = styled(Button)`
  &&{
      background: #e89c6b;
      height: 42px;
      width: 332.94px;
      font-family: "Kanit";
      font-size: 14px;
      color: white;
  }
`
const CancelButtonCustom = styled(Button)`
  &&{
        height: 40px;
        width: 155px;
        font-family: "Kanit";
        font-size: 14px;
        color: black;
        background: #F2F2F2;
        border-radius: 3px;
  }
`
const SaveButtonCustom = styled(Button)`
  &&{
        height: 40px;
        width: 155px;
        font-family: "Kanit";
        font-size: 14px;
        color: black;
        background: #e89c6b;
        border-radius: 3px;
  }
`

const LastMargin = styled.div`
    margin: 8px;
`

const TxtBox = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    margin-left: 220px;
    margin-top: 60px;
    width: 97rem;
    /* background: pink; */
`
const TxtAddr = styled.div`
    position: relative;

    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: 0.5px;
`
const AddAddrBox = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    left: 79.3%;
    top: 43.72%;
    width: 155px;
    height: 40px;
`
const MarginInButton = styled.div`
    margin-left: 8px;
`
const BigInfoBox = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;

    left: 21.40%;
    right: 10.43%;
    top: 35.24%;

    border-radius: 5px;
    margin-bottom: 131px;
`
const TextInModal = styled.p`
    position: absolute;
    width: 103px;
    height: 45px;
    left: 60px;
    top: 30px;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 80px;
`

const ContainerTextField = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    left: 60px;
`

const InputCustom = styled(Input)`
    && {
        width: 491px;
        margin-bottom: 1.2rem;
        margin-left: 60px;
        margin-bottom: 20px;
    }

    & input{
        margin-bottom: 0.8rem;
        font-family: Kanit;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
    }
    & .MuiInput-underline::before{
        height: 0.5rem;
        border-bottom-color: #4F4F4F;
    }
`
const BottonInModal = styled.div`
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        margin-top: 30px;
        margin-left: 250px;
        margin-right:60px;
`
const MarginBetweenButton = styled.div`
        margin-left: 30px;
`


const AddrBook = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Layout>
                <TxtBox>
                    <TxtAddr>
                        สมุดที่อยู่
                    </TxtAddr>
                    <AddAddrBox>
                        <ButtonCustom type="button" onClick={handleOpen}>
                            <AddIcon /> 
                            <MarginInButton>
                                เพิ่มที่อยู่
                            </MarginInButton>
                        </ButtonCustom>
                    </AddAddrBox>
                </TxtBox>
                <BigInfoBox>
                    <Selected />
                    <Info />
                    <Info />
                    <LastMargin />
                </BigInfoBox>
                <Option />
                <AddrModal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <AddrFade in={open}>
                    <div className={classes.paper}>
                        <TextInModal>เพิ่มที่อยู่</TextInModal>
                        <ContainerTextField >
                            <InputCustom
                                placeholder="ชื่อ นามสกุล"
                                className={classes.input}
                                inputProps={{
                                'aria-label': 'description',
                                }}
                            />
                            <InputCustom
                                placeholder="เบอร์โทรศัพท์"
                                className={classes.input}
                                inputProps={{
                                'aria-label': 'description',
                                }}
                            />
                            <InputCustom
                                placeholder="จังหวัด"
                                className={classes.input}
                                inputProps={{
                                'aria-label': 'description',
                                }}
                            />
                            <InputCustom
                                placeholder="เขต / อำเภอ"
                                className={classes.input}
                                inputProps={{
                                'aria-label': 'description',
                                }}
                            />
                            <InputCustom
                                placeholder="แขวง / ตำบล"
                                className={classes.input}
                                inputProps={{
                                'aria-label': 'description',
                                }}
                            />
                            <InputCustom
                                placeholder="รหัสไปรษณีย์"
                                className={classes.input}
                                inputProps={{
                                'aria-label': 'description',
                                }}
                            />
                            <InputCustom
                            placeholder="รายละเอียดที่อยู่เพิ่มเติม (บ้านเลขที่ , ซอย , ถนน)"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'description',
                            }}
                            />
                            <BottonInModal>
                                <CancelButtonCustom type="button" onClick={handleClose}>ยกเลิก</CancelButtonCustom>
                                <MarginBetweenButton />
                                <SaveButtonCustom type="button" onClick={handleClose}>บันทึก</SaveButtonCustom>
                            </BottonInModal>
                        </ContainerTextField>
                    </div>
                    </AddrFade>
                </AddrModal>
            </Layout>
        </div>
    )
}

export default AddrBook 
