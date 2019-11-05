import React ,{ useState }   from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Fab from '@material-ui/core/Fab'
import IconPlus from '../../../images/Sell/Plus.png'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import SelectFlat from '../../common/SelectFlat'


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

const Containerfilter = styled.div`
    display: flex;
    justify-content: space-between;

`

// const StyleSelectFlat = styled(SelectFlat)`
//     &&{
//         margin-right: 5rem;
//         border: 1.5px solid #BDBDBD;
//         border-radius: 3px;
//         & :last-child{
//             margin-right: 0;
//         }
//     }
// `



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
            font-weight: 350;
            margin-left: 1rem;
            margin-bottom: 0.8rem;
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



const StyledDetail = styled(TextField)`
    &&{
        width: 100%;
        padding: 0;
        & textarea{
            font-family: Kanit;
            font-size: 1.6rem;
            font-weight: 350;
            color: #4f4f4f;
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
    ...props
})  => {
    const [age, setAge] = useState('')
    const [nameproduct,setNameproduct] = useState('')
    const [price,setPrice] = useState('')
    const [amount,setAmount] = useState('')
    const [detail,setDetail] = useState('')
    const [picture,setPicture] = useState([])


    const handleChange = event => {
        setAge(event.target.value)
    }

    const handleAdd = async () => {
        addProduct()
       setNameproduct('')
       setPrice('')
       setAmount('')
       setDetail('')
       setPicture('')
    }

    const handlePrice = (e) => {
        const re = /^[0-9\b]+$/
        if (e.target.value !== '' && re.test(e.target.value)) {
            setPrice(e.target.value)
        }
    }
    const handleAmount = (e) => {
        const re = /^[0-9\b]+$/
        if (e.target.value !== '' && re.test(e.target.value)) {
            setAmount(e.target.value)
        }
    }

    const addProduct = async () =>
    {
        try{
            const product = await axios.post('https://otop-d5bqdesqsq-an.a.run.app/v01/api/product',
            {
                "name"  : nameproduct,
                "price" : price,
                "total" : amount,
                "detail" : detail
            })
            console.log(product)
            await props.search('')
        }catch(error){
            console.error();
        }
    }


    const [cata, setCate] = useState('')
    const [region, setRegion] = useState('')
    
    

    return(
           <DetailAddProduct>
                <ContainerTextFiled>
                    <InputTextFeild placeholder="ชื่อสินค้า" value={nameproduct}  onChange ={ e => setNameproduct(e.target.value)}/>
                    <InputTextFeild placeholder="ราคา" value={price}  onChange ={ e => handlePrice(e)}/>
                    <InputTextFeild placeholder="จำนวน" value={amount}  onChange ={ e => handleAmount(e)}/>
                </ContainerTextFiled>

                <ContainerSelect>
                    <Containerfilter>
                    <SelectFlat
                        value={cata}
                        onChange={(e) => setCate(e.target.value)}
                        border_radius=".3rem"
                        border=".15rem solid #BDBDBD"
                        margin_form="0 2rem 0 0"
                        placeholder="หมวดหมู่"
                        options={[
                            { label: 'ผลไม้', value: 'ผลไม้' },
                            { label: 'ของใช้', value: 'ของใช้' },
                            { label: 'เสื้อผ้า', value: 'เสื้อผ้า' },
                            { label: 'อื่นๆ', value: 'อื่นๆ' },
                          ]}
                        />
                    <SelectFlat
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        border_radius=".3rem"
                        placeholder="ภูมิภาค"
                        border=".15rem solid #BDBDBD"
                        options={[
                            { label: 'ภาคเหนือ', value: 'ภาคเหนือ' },
                            { label: 'ภาคอีสาน', value: 'ภาคอีสาน' },
                            { label: 'ภาคตะวันออก', value: 'ภาคตะวันออก' },
                            { label: 'ภาคกลาง', value: 'ภาคกลาง' },
                            { label: 'ภาคตะวันตก', value: 'ภาคตะวันตก' },
                            { label: 'ภาคใต้', value: 'ภาคใต้' },
                          ]}
                        />
                    </Containerfilter>
                    <StyledDetail
                        rows="4"
                        multiline
                        placeholder="รายละเอียดเพิ่มเติม"
                        variant="outlined"
                        value={detail}
                        onChange ={ e => setDetail(e.target.value)}
                    />
                </ContainerSelect>
                <ContainerPicture>
                    <StyledFabPicture  disableRipple={true} value={picture} onChange ={ e => setPicture(e.target.value)}>
                        <StyledIconPlus src={IconPlus} />
                    </StyledFabPicture>
                </ContainerPicture>
                <ContainerAdd>
                    <StyledButton onClick={handleAdd}>เพิ่ม</StyledButton>
                </ContainerAdd>
            </DetailAddProduct>
    )
}
export default SectionOne
