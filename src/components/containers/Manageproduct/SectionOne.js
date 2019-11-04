import React ,{ useState }   from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import Dropdown from '../../../images/SearchPage/dropdown_filter.svg'
import Fab from '@material-ui/core/Fab'
import IconPlus from '../../../images/Sell/Plus.png'
import Button from '@material-ui/core/Button'


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
    justify-content: space-between;
    width: 35%;
    margin: 0.3rem 4rem 0 0 ;
`
const InputTextFeild = styled(TextField)`
    &&{
        width: 100%;
        margin:0 0 3rem  0;
        &:nth-child(1) {
            margin-top: .6rem;
        }

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
            color: #4F4F4F;
        }
        & .MuiInput-underline::before{
            border-bottom-color: #BDBDBD;
        }
    }
`

const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 35%;
    margin: 0.3rem 4rem 0 0 ;
`



const StyledFormControl= styled(FormControl)`
    &&{
        width: 60%;
        margin-bottom: 0;
    }
`


const StyledSelect = styled(Select)`
    &&{
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        font-family: Kanit;
        /* color:  #4F4F4F; */
        color: #828282;
        border: 0.1rem solid #BDBDBD;
        border-radius: 0.3rem;
        fieldset {
            border-width: 0 !important;
            border-radius: 0.2rem;
            background: #fff;
        }
        & .MuiOutlinedInput-input{
        padding: auto 1.9rem;
        }
        & .MuiInputBase-input {
        z-index: 2;
        }
    }
`

const StyledIcon = styled.img`
    position: absolute;
    width: 2rem;
    height: 1.1rem;
    margin: auto 1rem;
    cursor: pointer;
    right: 0;
    z-index: 1;
`

const Item = styled(MenuItem)`
    &&{
        font-family: Kanit;
        /* color: rgba(0,0,0,0.87); */
        color: #4F4F4F;
    }
`

const StyledDetail = styled(TextField)`
    &&{
        width: 100%;
        padding: 0;
        & textarea{
            font-family: Kanit;
            font-size: 1.6rem;
            font-weight: normal;
            color: #BDBDBD;
            line-height: normal;
            margin: 0 1.9rem;
            padding-top: 1.2rem;
        }

        fieldset {
            border: 0.1rem solid #BDBDBD;
            border-radius: 0.3rem;
            font-family: Kanit;
        }

        & .MuiOutlinedInput-multiline {
            display: flex;
            justify-content: space-between;
            margin-top: 2.2rem;
            height: 11rem;
            padding: 4px;
        }
    }
`

const ContainerPicture = styled.div`
    display: flex;
    width: 25%;
    margin-right: 4rem;
`

const StyledFabPicture = styled(Fab)`
    width: 100%;
    height: 100%;
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
    height: 100%;
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

const SectionOne = ({
    displayEmpty = true,
    placeholder = '',
    margin_form = '0',
    width = '100%',
})  => {
    const [age, setAge] = useState('');
    const handleChange = event => {
        setAge(event.target.value)
    }

    return(
           <DetailAddProduct>
                <ContainerTextFiled>
                    <InputTextFeild placeholder="ชื่อสินค้า"/>
                    <InputTextFeild placeholder="ราคา"/>
                    <InputTextFeild placeholder="จำนวน"/>
                </ContainerTextFiled>

                <ContainerSelect>
                    <StyledFormControl variant="outlined">
                        <StyledSelect
                            displayEmpty={displayEmpty}
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
                        variant="outlined"
                    />
                </ContainerSelect>
                <ContainerPicture>
                    <StyledFabPicture  disableRipple={true}>
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
