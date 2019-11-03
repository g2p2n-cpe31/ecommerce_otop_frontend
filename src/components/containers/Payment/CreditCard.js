import React , { useState , useEffect} from 'react'
import GlobalStyle from '../../utility/GlobalStyle'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Line from '../../../images/Payment/Line.png'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Input from '@material-ui/core/Input';
import ic_cancel_white from '../../../images/Navbar/ic_cancel_white.svg'
import AddedCreditCard from './AddedCreditCard'
import PathVisa from '../../../images/Payment/visa.svg'
import PathMasterCard from '../../../images/Payment/mastercard.svg'
import PathUnionPay from '../../../images/Payment/unionpay.svg'
import PathJCB from '../../../images/Payment/jcb.svg'

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
        margin: '0',
      },    
  }));

const ButtonCustom = styled(Button)`
  &&{
      background: #e89c6b;
      height: 4rem;
      width: 21rem;
      font-family: "Kanit";
      font-size: 1.4rem;
      color: white;
      margin-right: 4.3rem;
      margin-top: 2.5rem;
  }
`
const AddBankAccountButtonCustom = styled(Button)`
  &&{
      background: #e89c6b;
      height: 4rem;
      width: 17.3rem;
      font-family: "Kanit";
      font-size: 1.4rem;
      color: white;
      margin-right: 4.3rem;
      margin-top: 2.5rem;
  }
`
const InputCustom = styled(Input)`
    && {
        width: 41.5rem;
        margin-bottom: 4.1rem;
        /* margin-bottom: 2rem; */
    }

    & input{
        /* margin-bottom: 1.2rem; */
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

const InputCustom2 = styled(Input)`
    && {
        width: 20rem;
        margin-bottom: 4.2rem;
    }

    & input{
        /* margin-bottom: 1.2rem; */
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

const TextInModal = styled.p`
    position: absolute;
    width: 100%;
    left: 6rem;
    top: 3rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 3rem;
    line-height: 4.5rem;
    margin-bottom: 8rem;
`
const AddButtonCustom = styled(Button)`
  &&{
        height: 4rem;
        width: 15.5rem;
        font-family: "Kanit";
        font-size: 1.4rem;
        color: #F2F2F2;
        background: #E89C6B;
        border-radius: 0.3rem;
  }
`
const ContainerInModal = styled.div`
    display: flex;
    margin-top: 11.2rem;
    width: 100%;
`
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    /* background: lightsalmon; */
`
const Textbox = styled.div`
    display: flex;
    margin-top: 6rem;
    margin-left: 2.6rem;
    margin-bottom: 3.3rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 4.8rem;
    line-height: 7.2rem;
    letter-spacing: 0.05rem;
    color: #333333;
`
const OptionBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-bottom: 8.4rem;
`
const CreditBox = styled.div`
    display: flex;
    width: 113.7rem;
    height: 37.5rem;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 1rem;
`
const AddedCreditCardBox = styled.div`
    display: flex;
    width: 100%;
    max-width: 103.6rem;
    height: 29.4rem;
    overflow-x: scroll;
    padding-left: 6.3rem;
    padding-top: 2.7rem;
`
const TextandButtonBox = styled.div`
    display: flex;
    width: 100%;
    height: 8.1rem;
    justify-content: space-between;
    /* background: lightskyblue; */
`
const Text = styled.p`
    display: flex;
    margin-top: 2.9rem;
    margin-left: 6.3rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 2.4rem;
    line-height: 3.6rem;
    letter-spacing: 0.05rem;
    color: #333333;
`
const LineBox = styled.div`
    display: flex;
    padding-left: 5.8rem;
    padding-right: 4.3rem;
    margin-bottom: 0rem;
`
const BankAccountBox = styled.div`
    display: flex;
    width: 113.7rem;
    height: 37.5rem;
    flex-direction: column;
    background: #FFFFFF;
    border-radius: 5px;
    opacity: 0.5;
`
const AddrFade = styled(Fade)`
    &&{
        position: absolute;
        width: 107.4rem;
        height: 45rem;
        left: 50%;
        top: 50%;
        margin-top: -22.5rem;
        margin-left: -53.7rem;
        background: #FFFFFF;
        border-radius: 5px;
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
      opacity: 0.4;
    }
  }
`
const CreditCardBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 7.3rem;
    margin-bottom: 10.2rem;
    margin-top: 2.8rem;
    width: 41.5rem;
    height: 23.6rem;
    border-radius: 12px;
    background: ${props => props.colorBankType};
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25);
`
const TextFieldBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    margin-left: 8.9rem;
    width: 41.5rem;
    height: 100%;
`
const BoxInTextField = styled.div`
    display: flex;
    width: 100%;
    /* background: khaki; */
`
const MarginTextField = styled.div`
    margin-right: 1.5rem;
`
const AddButtonBox = styled.div`
    display: flex;
    justify-content: flex-end;
`
const BankName = styled.p`
    display: flex;
    width: 100%;
    height: 5.4rem;
    margin-top: 1rem;
    margin-left: 3.2rem;
    margin-bottom: 0rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: normal;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: #FFFFFF;
`
const CardNumber = styled.p`
    display: flex;
    width: 35.7rem;
    height: 4.8rem;
    margin-top: 3.3rem;
    margin-left: 3.2rem;
    margin-bottom: 0rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 3.2rem;
    line-height: 4.8rem;
    color: #4F4F4F;
`
const CardName = styled.p`
    display: flex;
    width: 25rem;
    margin-top: 0.5rem;
    margin-left: 3.2rem;
    margin-bottom: 0rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: #FFFFFF;
`
const ExpiryContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`
const ExpiryDate = styled.p`
    display: flex;
    width: 7.7rem;
    height: 2.2rem;
    margin-top: 0.6rem;
    margin-left: 3.2rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 2.2rem;
    color: #FFFFFF;
`
const ExpiryDateNumber = styled.p`
    display: flex;
    width: 4.7rem;
    height: 2.7rem;
    margin-top: 0.2rem;
    margin-left: 0.9rem;
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 2.7rem;
    color: #FFFFFF;
`

const IconBank = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    margin-left: 30.8rem;
    margin-top: 14.9rem;
    width: 8.3rem;
    height: 8.3rem;
`

const CreditCard = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [pathCreditType, setPathCreditType] = useState('')
    const [colorBankType, setColorBankType] = useState('')
    const [firstLetter, setFirstLetter] = useState('')
    const [lastnameLetter, setLastnameLetter] = useState('')
    const [nameBank, setNameBank] = useState('')
    const [values, setValues] = useState({
        nameCredit: '',
        numberCredit: '',
        exeCredit: '',
        numberCVV: ''
    })
    const handleValues = name => e => {
        setValues({ ...values, [name]: e.target.value})
    } 

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const colorBank = {
        default: 'linear-gradient(312.35deg, rgba(80, 80, 80, 0.8) 0%, rgba(208, 208, 208, 0.8) 100%)',
        kBank : 'linear-gradient(312.35deg, rgba(1, 113, 91, 0.8) 0%, rgba(211, 220, 107, 0.8) 100%)',
        scbBank: 'linear-gradient(312.35deg, rgba(151, 37, 224, 0.8) 0%, rgba(251, 140, 255, 0.8) 100%)',
        tmbBank: 'linear-gradient(312.35deg, rgba(3, 68, 231, 0.8) 0%, rgba(0, 187, 254, 0.8) 100%)',
        aomsinBank: 'linear-gradient(312.35deg, rgba(225, 102, 158, 0.8) 0%, rgba(251, 217, 227, 0.8) 100%)',
        krungsriBank: 'linear-gradient(312.35deg, rgba(242, 137, 0, 0.8) 0%, rgba(255, 199, 2, 0.8) 100%)',
        thanachat: 'linear-gradient(312.35deg, rgba(241, 69, 33, 0.8) 0%, rgba(253, 168, 86, 0.8) 100%)',
        krungthaiBank: 'linear-gradient(312.35deg, rgba(0, 141, 213, 0.8) 0%, rgba(182, 224, 249, 0.8) 100%)'
    }

    const checkpathBankType = (number) => {
        
        if(number === '4162') setColorBankType(colorBank.kBank)
        else if(number === '5577') setColorBankType(colorBank.scbBank)
        else if(number === '4013' ) setColorBankType(colorBank.tmbBank)
        else if(number === '4834') setColorBankType(colorBank.aomsinBank)
        else if(number === '4215') setColorBankType(colorBank.krungsriBank)
        else if(number === '4389') setColorBankType(colorBank.thanachat)
        else if(number === '4732') setColorBankType(colorBank.krungthaiBank)
        else setColorBankType(colorBank.default)
        // console.log('get bank-type success') 
    }

    const checkpathBankName = (number) => {
        if(number === '4162') setNameBank('KBank')
        else if(number === '5577') setNameBank('SCB')
        else if(number === '4013' ) setNameBank('TMB')
        else if(number === '4834') setNameBank('ออมสิน')
        else if(number === '4215') setNameBank('Krungsri')
        else if(number === '4389') setNameBank('Thanachat')
        else if(number === '4732') setNameBank('Krungthai')
        else setNameBank('Card')
        // console.log('get bank-type success') 
    }

    const checkCredittype = (digit) => {
        if(digit === '3') setPathCreditType(PathJCB)
        else if(digit === '4') setPathCreditType(PathVisa)
        else if(digit === '5' || digit === '2') setPathCreditType(PathMasterCard)
        else if(digit === '6') setPathCreditType(PathUnionPay)
        else setPathCreditType('')
        // console.log('get credit-type success')   
    }

    const checkNameCredit = (namecredit) => {
        const str  = namecredit.split(' ')
        if (str[0].length === 0) setFirstLetter('x')
        else if (str.length === 1) setFirstLetter(str[0].substring(0,1))
        if(str.length > 1) setLastnameLetter(str[1])
        else setLastnameLetter('xxxxxxxxxxxxxxxxxxx')
    }

    const getExeCredit = (exeCredit) => {
        // const str = exeCredit.split('/')
        return 'XXXX'.split('').map( (c, index) => exeCredit.length > index? exeCredit[index]: c).splice(',').join('')
    }
    const exeFormat = exeCredit => {
        const result = getExeCredit(exeCredit)
        return result.slice(0,2) + '/' + result.slice(2,4)
    }
    
    const handleonChange = name => e => {
        const re = /(^[0-9]+$|^$)/
        if (re.test(e.target.value) && e.target.value.length <= 16) {
            setValues({ ...values, [name]: e.target.value})
        }
    }

    const handleonChangeDate = name => e => {
        const re = /(^[0-9]+$|^$)/
        if (re.test(e.target.value) && e.target.value.length <= 4) {
            setValues({ ...values, [name]: e.target.value})
        }
    }

    const handleonChangeCVV = name => e => {
        const re = /(^[0-9]+$|^$)/
        if (re.test(e.target.value) && e.target.value.length <= 3) {
            setValues({ ...values, [name]: e.target.value})
        }
    }
    
    const creditFormat = number => {
        return convertToCreditFormat(getCreditMask(number))
    }

    const getCreditMask = number => {
        return 'XXXXXXXXXXXXXXXX'.split('').map( (c, index) => number.length > index? number[index]: c).splice(',').join('')
        
    }
    
    const convertToCreditFormat = number => {
         if(number !== '') return number.toString().match(/.{1,4}/g).join(' ')
        // return number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
    }

    useEffect(() => {
        checkpathBankType(values.numberCredit.substring(0, 4))
        checkpathBankName(values.numberCredit.substring(0, 4))
        checkCredittype(values.numberCredit[0])
        // if(values.numberCredit.length >= 4)
    }, [values.numberCredit])

    useEffect(() => {
        checkNameCredit(values.nameCredit)
    }, [values.nameCredit])


    return (
        <>
            <Container>
                <GlobalStyle />
                <Textbox>ตัวเลือกการชำระเงิน</Textbox>
                <OptionBox>
                    <CreditBox>
                        <TextandButtonBox>
                            <Text>บัตรเครดิต</Text>
                            <ButtonCustom type="button" onClick={handleOpen}> 
                                เพิ่มบัตรเครดิต / เดบิต
                            </ButtonCustom>
                        </TextandButtonBox>
                        <LineBox>
                            <img src={Line} />
                        </LineBox>
                        <AddedCreditCardBox>
                            <AddedCreditCard />
                            <AddedCreditCard />
                            <AddedCreditCard />
                            <AddedCreditCard />
                            <AddedCreditCard />
                        </AddedCreditCardBox>
                    </CreditBox>
                    <BankAccountBox>
                        <TextandButtonBox>
                            <Text>บัญชีธนาคาร</Text>
                            <AddBankAccountButtonCustom variant="contained" color="primary" disabled className={classes.button}>
                                เพิ่มบัญชีธนาคาร
                            </AddBankAccountButtonCustom>
                        </TextandButtonBox>
                        <LineBox>
                            <img src={Line} />
                        </LineBox>
                    </BankAccountBox>
                </OptionBox>
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
                        <TextInModal>เพิ่มบัตรเครดิต / เดบิต</TextInModal>
                        <ContainerInModal>
                            <CreditCardBox colorBankType={colorBankType}>
                                <BankName>{nameBank}</BankName>
                                <CardNumber>{creditFormat(values.numberCredit)}</CardNumber>
                                <CardName>{firstLetter + ' ' + lastnameLetter}</CardName>
                                <ExpiryContainer>
                                    <ExpiryDate>วันหมดอายุ :</ExpiryDate>
                                    <ExpiryDateNumber>{exeFormat(values.exeCredit)}</ExpiryDateNumber>
                                </ExpiryContainer>
                                <IconBank>
                                    <img src={pathCreditType} />
                                </IconBank>
                            </CreditCardBox>
                            <TextFieldBox>
                                <InputCustom
                                    placeholder="ชื่อที่ปรากฎบนบัตร"
                                    value={values.nameCredit}
                                    onChange={handleValues('nameCredit')}
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'description',
                                    }}
                                />
                                <InputCustom
                                    placeholder="หมายเลขบัตร"
                                    value={values.numberCredit}
                                    onChange={handleonChange('numberCredit')}
                                    className={classes.input}
                                    inputProps={{
                                    'aria-label': 'description',
                                    }}
                                />
                                <BoxInTextField>
                                    <InputCustom2
                                        placeholder="วันหมดอายุ"
                                        value={values.exeCredit}
                                        onChange={handleonChangeDate('exeCredit')}
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'description',
                                        }}
                                    />
                                    <MarginTextField />
                                    <InputCustom2
                                        placeholder="CVV"
                                        value={values.numberCVV}
                                        onChange={handleonChangeCVV('numberCVV')}
                                        className={classes.input}
                                        inputProps={{
                                        'aria-label': 'description',
                                        }}
                                    />
                                </BoxInTextField>
                                <AddButtonBox>
                                    <AddButtonCustom type="button" onClick={handleClose}>เพิ่ม</AddButtonCustom>
                                </AddButtonBox>
                            </TextFieldBox>
                        </ContainerInModal>
                    </div>
                    </AddrFade>
                </AddrModal>
            </Container>
        </>
    )
}

export default CreditCard
