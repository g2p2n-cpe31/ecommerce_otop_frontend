import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'
import Input from '@material-ui/core/Input';


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
const TextInModal = styled.p`
    position: absolute;
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

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
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
        width: 145px;
        height: 43px;
        font-family: "Kanit";
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: white;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        border-radius: 5px;

        font-family: Kanit;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.5px;
        color: #4F4F4F;
  }
`
const EditAndEraseButtonCustom = styled(Button)`
  &&{
        font-family: "Kanit";
        font-size: 16px;

        font-family: Kanit;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 0.5px;
        text-decoration-line: underline;
        color: #4F4F4F;
        background: none;
  }
`

const AddrInfoBox = styled.div`
    display: flex;
    margin-top: 13px;
    width: 960px;
    height: 250px;

    background: #FBFBFB;
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 5px;
`
const TitleBox = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    /* background: lightsalmon; */
    margin-top: 31px;
    margin-left: 70px;
`

const InTitleBox = styled.div`
    font-family: "Kanit";
    font-size: 16px;
    margin-bottom: 17px;
    color: #828282;
`
const InfoBox = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    /* background: lightskyblue; */
    margin-top: 31px;
    margin-left: 155px;
`

const InInfoBox = styled.div`
    font-family: "Kanit";
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #333333;
`
const InInfoBoxLine2 = styled.div`
    font-family: "Kanit";
    font-size: 16px;
    margin-top: 17px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #333333;
`

const AddrEdit = styled.p`
    display: flex;
    position: absolute;
    margin-top: 48px;
    margin-left: 823px;
`
const AddrErase = styled.p`
    display: flex;
    position: absolute;
    margin-top: 48px;
    margin-left: 878px;
`

const SetAsDefault = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    margin-top: 103px;
    margin-left: 770px;
`

const AddrText = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    max-height: 96px;
    max-width: 278px;
    color: #333333;
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
   

const AddrInfo = () => {
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
            <AddrInfoBox>
                <TitleBox>
                    <InTitleBox>ชื่อ</InTitleBox>
                    <InTitleBox>โทรศัพท์</InTitleBox>
                    <InTitleBox>ที่อยู่</InTitleBox>
                </TitleBox>
                <InfoBox>
                    <InInfoBox>ปูรณ์  โชตอะไรซักอย่าง</InInfoBox>
                    <InInfoBoxLine2>088-088-0888</InInfoBoxLine2>
                    <InInfoBox>
                        <AddrText>
                            111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา แขวงบลาบลาบลา เขตบลาบลาบลา จังหวัดบลาบลาบลา 10110
                        </AddrText>
                    </InInfoBox>
                </InfoBox>
                <AddrEdit>
                    <EditAndEraseButtonCustom type="button" onClick={handleOpen}>
                        แก้ไข
                    </EditAndEraseButtonCustom>
                </AddrEdit>
                <AddrErase>
                    <EditAndEraseButtonCustom size="small" className={classes.margin}>
                        ลบ
                    </EditAndEraseButtonCustom>
                </AddrErase>
                <SetAsDefault>
                    <ButtonCustom variant="outlined" color="#BDBDBD" className={classes.button}>
                        ตั้งเป็นค่าเริ่มต้น
                    </ButtonCustom>
                </SetAsDefault>
            </AddrInfoBox>
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
                    <TextInModal>แก้ไขที่อยู่</TextInModal>
                    <ContainerTextField >
                        <InputCustom
                            defaultValue="ปูรณ์ โชตอะไรซักอย่าง"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'description',
                            }}
                        />
                        <InputCustom
                            defaultValue="088-088-0888"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'description',
                            }}
                        />
                        <InputCustom
                            defaultValue="จังหวัดบลาบลาบลา"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'description',
                            }}
                        />
                        <InputCustom
                            defaultValue="เขตบลาบลาบลา"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'description',
                            }}
                        />
                        <InputCustom
                            defaultValue="แขวงบลาบลาบลา"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'description',
                            }}
                        />
                        <InputCustom
                            defaultValue="10100"
                            className={classes.input}
                            inputProps={{
                            'aria-label': 'description',
                            }}
                        />
                        <InputCustom
                            defaultValue="111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา"
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
        </div>
    )
}

export default AddrInfo
