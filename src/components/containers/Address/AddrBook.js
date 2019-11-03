import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Info from './AddrInfo'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Input from '@material-ui/core/Input';
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'

const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`


const AddrFade = styled(Fade)`
    &&{
        position: absolute;
        width: 61.5rem;
        height: 75rem;
        left: 50%;
        top: 50%;
        margin-top: -37.5rem;
        margin-left: -30.75rem;
        background: #FFFFFF;
        border-radius: 5px;
        cursor: auto;
        outline: 0;
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
      height: 4.2rem;
      width: 15.5rem;
      font-family: "Kanit";
      font-size: 1.4rem;
      color: white;
      margin-right: 1.5rem;
  }
  &:hover{
        background: #ED7F38;
    }
`
const CancelButtonCustom = styled(Button)`
        height: 4rem;
        width: 15.5rem;
        font-family: "Kanit";
        font-size: 1.4rem;
        color: #828282;
        background: #F2F2F2;
        border-radius: 0.3rem;
`
const SaveButtonCustom = styled(Button)`
  &&{
        height: 4rem;
        width: 15.5rem;
        font-family: "Kanit";
        font-size: 1.4rem;
        color: white;
        background: #e89c6b;
        border-radius: 0.3rem;
  }
  &:hover{
        background: #ED7F38;
  }
`

const LastMargin = styled.div`
    margin: 0.8rem;
`

const TxtBox = styled.div`
    display: flex;
    /* position: absolute; */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* margin-left: 22rem;
    margin-top: 6rem; */
    margin-top: 6rem;
    margin-bottom: 3.254rem;
    width: 100%;
    /* background: pink; */
`
const TxtAddr = styled.div`
    position: relative;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 7.2rem;
    letter-spacing: 0.05rem;
    margin-left: 2.6rem;
`
const AddAddrBox = styled.div`
    display: flex;
    align-items: center;

`
const MarginInButton = styled.div`
    margin-left: 8px;
`
const BigInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 5px;
    margin-bottom: 13.1rem;
    width: 100%;
`
const TextInModal = styled.p`
    position: absolute;
    width: 10.3rem;
    height: 4.5rem;
    left: 6rem;
    top: 3rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    line-height: 4.5rem;
    margin-bottom: 8rem;
`

const ContainerTextField = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15rem;
    left: 6rem;
`

const InputCustom = styled(Input)`
    && {
        width: 49.1rem;
        margin-bottom: 1.2rem;
        margin-left: 6rem;
        margin-bottom: 2rem;
    }

    & input{
        margin-bottom: 0.8rem;
        font-family: Kanit;
        font-style: normal;
        font-weight: normal;
        font-size: 1.6rem;
        line-height: 2.4rem;
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
        margin-top: 3rem;
        margin-left: 25rem;
        margin-right:6rem;
`
const MarginBetweenButton = styled.div`
        margin-left: 3rem;
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
        <ContainerContent>

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
                    <Info  />
                    <Info selected={true} />
                    <Info />
                    <Info />
                    <LastMargin />
                </BigInfoBox>
                <AddrModal
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

        </ContainerContent>
    )
}

export default AddrBook
