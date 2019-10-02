import React , {useState, useEffect} from 'react'
import  styled  from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    // height: 28px;
    // width: 23.8px;

`

// const Styled_Button = styled(Button)`
//     padding: 20px;
//     border-radius: 1px;
//     background-color: #e0e0e0;
//     justify-content: center;
// `

const TextFieldCustom = styled(TextField)`
    && {
        margin: 0 2px;
        height: 23.8px;
        & input {
            padding: 0;
            width: 57px;
            height: 23.8px;

            
            
            
        }
        & fieldset {
            border-radius: 1px;
          }
        
    }
    
`
const ButtonCustom = styled(Button)`
    &&{
        width: 28px;
        min-width: 28px;
        height: 23.8px;
        border-radius: 1px;
        background-color: #e0e0e0;
    }
`


const PlusandMinus = () => {
    const [count,setCount] = useState(0)
    
    useEffect(()=>{
        console.log(count)
        if(count < 0 ) setCount(0)
        if(count === 'NaN') setCount(0)
    },[count])

    return(
        <>
            <ContainerButton>
                <ButtonCustom onClick={() => setCount(parseInt(count)-1)}>-</ButtonCustom>
                {/* <Text_Field type="input"  InputProps={count} value={count}></Text_Field> */}
                <TextFieldCustom
                    id="outlined-bare"
                    // type="number"
                    defaultValue={count}
                    margin="normal"
                    variant="outlined"
                    // inputProps={{ 'aria-label': 'bare' }}
                    value={count}
                    onChange={(e) => e.target.value !== null?setCount(e.target.value):setCount(0)}
                    // setCount(parseInt(e.target.value))
                />
                <ButtonCustom onClick={() => setCount(parseInt(count)+1)}>+</ButtonCustom>
            </ContainerButton>
        </>
    )
}
export default PlusandMinus
