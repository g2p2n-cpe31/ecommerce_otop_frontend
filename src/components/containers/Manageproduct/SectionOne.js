import React  from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import Dropdown from '../../../images/Sell/dropdown.png'
import Fab from '@material-ui/core/Fab'
import IconPlus from '../../../images/Sell/Plus.png'
import Button from '@material-ui/core/Button'


const useStyles = makeStyles(theme => ({
    formControl: {
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  }));


  const DetailAddProduct = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: #FFFFFF;
    border: 0.1rem solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 0.3rem;
    padding: 2.5rem 3.5rem 4rem 3.6rem;
`

const ContainerTextFiled = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 0.3rem 5.7rem 0 0 ;
`
const InputTextFeild = styled(TextField)`
    &&{
        width: 100%;
        margin:0 0 3rem  0;
        &:last-child{
            margin-bottom: 0;
        }
        & input{
            font-family: Kanit;
            font-size: 1.6rem;
            font-weight: normal;
            margin-left: 1rem;
            margin-bottom: 1.2rem;
            line-height: 2.4rem;
            padding: 0;
            color: #BDBDBD;
        }
        & .MuiInput-underline::before{
            border-bottom-color: #BDBDBD;
        }
    }
`

const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 0.3rem 6.1rem 0 0 ;
`



const StyledFormControl= styled(FormControl)`
    &&{
        width: 60%;
        margin-bottom: 0;
    }
`


const StyledSelect = styled(Select)`
    &&{
        font-family: Kanit;
        height: 2.4rem;
        color: #BDBDBD;
    }
    & .MuiOutlinedInput-input{
       padding: 0 0 0 1.9rem;
       box-sizing: border-box;
       width: 19.8rem;
    }
`

const StyledIcon = styled.img`
    width: 2rem;
    height: 1.1rem;
    top: 1.5rem;
    cursor: pointer;
`

const Item = styled(MenuItem)`
    &&{
        height: 1.1rem;
        font-family: Kanit;
        margin-right: 2.2rem;
    }
`

const StyledDetail = styled(TextField)`
    &&{
        width: 100%;
    }
    & input{
        font-family: Kanit;
        font-size: 1.6rem;
        font-weight: normal;
        color: #BDBDBD;
        padding: 0;
    }
    & .MuiOutlinedInput-multiline {
        padding: 0 1.9rem 1.3rem 1.9rem;
        height: 11.5rem;
        margin-top: 2.2rem;
    }
`

const ContainerPicture = styled.div`
    display: flex;
    width: 25%;
    margin-right: 4.7rem;
`

const StyledFabPicture = styled(Fab)`
    width: 100%;
    height: 17.2rem;
    border-radius: 0.3rem;
    background: #F2F2F2;
    border: 0.2rem solid #BDBDBD;
    box-shadow: none;
`
const StyledIconPlus = styled.img`
    display: flex;
    justify-content: center;
`

const ContainerAdd = styled.div`
    display: flex;
    width: 10%;
`

const StyledButton = styled(Button)`
    width: 100%;
    height: 17.2rem;
    border-radius: 0.3rem;
    background: #E89C6B;
    font-family: Kanit;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    color: #F2F2F2;
    &:hover{
        background: #ED7F38;
    }
`

const SectionOne = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = event => {
        setAge(event.target.value);
    };

    return(
           <DetailAddProduct>
                <ContainerTextFiled>
                    <InputTextFeild placeholder="ชื่อสินค้า"/>
                    <InputTextFeild placeholder="ราคา"/>
                    <InputTextFeild placeholder="จำนวน"/>
                </ContainerTextFiled>

                <ContainerSelect>
                    <StyledFormControl variant="outlined" className={classes.formControl} >
                        <StyledSelect
                            displayEmpty
                            value={age}
                            onChange={handleChange}
                            IconComponent={() => (
                                <StyledIcon src={Dropdown}/>
                              )}>
                        >
                        <Item value="" disabled>หมวดหมู่</Item>
                        <Item value={10}>ผลไม้</Item>
                        <Item value={20}>ของใช้</Item>
                        <Item value={30}>เสื้อผ้า</Item>
                        <Item value={30}>อื่นๆ</Item>
                        </StyledSelect>
                    </StyledFormControl>
                    <StyledDetail
                        rows="4"
                        multiline
                        placeholder="รายละเอียดเพิ่มเติม"
                        className={classes.textField}
                        variant="outlined"
                    />
                </ContainerSelect>
                <ContainerPicture>
                    <StyledFabPicture lassName={classes.fab} disableRipple={true}>
                        <StyledIconPlus src={IconPlus} />
                    </StyledFabPicture>
                </ContainerPicture>
                <ContainerAdd>
                    <StyledButton>เพิ่ม</StyledButton>
                </ContainerAdd>
            </DetailAddProduct>
    )
}
export default SectionOne
