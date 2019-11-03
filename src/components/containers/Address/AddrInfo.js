import React,{useState} from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'
import Input from '@material-ui/core/Input';


const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      margin: theme.spacing(1),
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
}));

const AddrFade = styled(Fade)`
    &&{
        position: absolute;
        left: '50%';
        top: '50%';
        width: 61.5rem;
        height: 75rem;
        margin-top: '-37.5rem';
        margin-left: '-30.75rem';
        background: #FFFFFF;
        border-radius: 0.5rem;
        cursor: auto;
        outline: 0;
    }
`
const AddrModal = styled(Modal)`
    && {
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

const ButtonCustom = styled(Button)`
  &&{
        width: 14.5rem;
        height: 4.3rem;
        font-family: "Kanit";
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        color: white;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        border-radius: 0.5rem;

        font-family: Kanit;
        font-style: normal;
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 2.4rem;
        letter-spacing: 0.05rem;
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
        font-size: 1.6rem;
        letter-spacing: 0.05rem;
        text-decoration-line: underline;
        color: #4F4F4F;
        background: none;
  }
`

const AddrInfoBox = styled.div`
    display: flex;
    margin-top: 1.3rem;
    width: 97%;
    height: 25rem;

    background: ${props => props.selected ? 'rgba(91, 60, 120, 0.1)':'#FBFBFB'};
    border: 1px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 0.5rem;
`
const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.1rem;
    margin-left: 7rem;
`

const InTitleBox = styled.div`
    font-family: "Kanit";
    font-size: 1.6rem;
    margin-bottom: 1.7rem;
    color: #828282;
`
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.1rem;
    margin-left: 2.7rem;
`

const InInfoBox = styled.div`
    font-family: "Kanit";
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: 0.05rem;
    color: #333333;
`
const InInfoBoxLine2 = styled.div`
    font-family: "Kanit";
    font-size: 1.6rem;
    margin-top: 1.7rem;
    margin-bottom: 0.9rem;
    font-style: normal;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: 0.05rem;
    color: #333333;
`

const AddrEdit = styled.p`
    display: flex;
    margin-right: 0.05rem;
`

const SetAsDefault = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
`

const AddrText = styled.p`
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.3rem;
    letter-spacing: 0.05rem;
    color: #333333;
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
const ButtonInModal = styled.div`
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
        color: #F2F2F2;
        background: #e89c6b;
        border-radius: 0.3rem;
        &:hover{
        background: #ED7F38;
        }
  }
`
const DefaultSign = styled.div`
    display: flex;
    position: absolute;
    margin-top: 0.2rem;
    margin-left: 17rem;
    justify-content: center;
    align-items: center;
    width: 7.7rem;
    height: 2.3rem;
    background: white;
    opacity: 0.7;
    border-radius: 1rem;

    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 0.05rem;
    color: linear-gradient(325.22deg, #44275D 0%, #3C5B78 100%);
`

const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`
const SetOfButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3.2rem;
    width: 20%;
`
const ContainerEditErase = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: center;
    margin-right: 3rem;
`
const SetOfInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
`

const AddrInfo = ({ selected = false, ...props}) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true);

    const handleOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };

    return (
            show ? <> <AddrInfoBox selected={selected}>
                <ContainerContent>
                    <SetOfInfo>
                        <TitleBox>
                            <InTitleBox>ชื่อ</InTitleBox>
                            <InTitleBox>โทรศัพท์</InTitleBox>
                            <InTitleBox>ที่อยู่</InTitleBox>
                        </TitleBox>
                        <InfoBox>
                            <InInfoBox>ปูรณ์  โชตอะไรซักอย่าง</InInfoBox>
                            {
                                selected ? (<DefaultSign>ค่าเริ่มต้น</DefaultSign>): null
                            }
                            <InInfoBoxLine2>088-088-0888</InInfoBoxLine2>
                            <InInfoBox>
                                <AddrText>111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา</AddrText>
                                <AddrText>แขวงบลาบลาบลา เขตบลาบลาบลา</AddrText>
                                <AddrText>จังหวัดบลาบลาบลา</AddrText>
                                <AddrText>10100</AddrText>
                            </InInfoBox>
                        </InfoBox>
                    </SetOfInfo>
                    <SetOfButton>
                        <ContainerEditErase>
                            <AddrEdit>
                                <EditAndEraseButtonCustom type="button" onClick={handleOpen} disabled={selected}>
                                    แก้ไข
                                </EditAndEraseButtonCustom>
                            </AddrEdit>
                                <EditAndEraseButtonCustom size="small" className={classes.margin} disabled={selected} onClick={() => setShow(false)}>
                                    ลบ
                                </EditAndEraseButtonCustom>
                        </ContainerEditErase>
                        <SetAsDefault>
                            <ButtonCustom variant="outlined" color="#BDBDBD" className={classes.button} onclick={()=>alert('wating api')}>
                                ตั้งเป็นค่าเริ่มต้น
                            </ButtonCustom>
                        </SetAsDefault>
                    </SetOfButton>
                </ContainerContent>
            </AddrInfoBox>
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
                        <ButtonInModal>
                            <CancelButtonCustom type="button" onClick={handleClose}>ยกเลิก</CancelButtonCustom>
                            <MarginBetweenButton />
                            <SaveButtonCustom type="button" onClick={handleClose}>บันทึก</SaveButtonCustom>
                        </ButtonInModal>
                    </ContainerTextField>
                </div>
                </AddrFade>
            </AddrModal> </> : null
    )
}

export default AddrInfo
