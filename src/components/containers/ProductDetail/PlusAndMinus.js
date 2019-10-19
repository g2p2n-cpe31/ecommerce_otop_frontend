import React , {useState, useEffect} from 'react'
import  styled  from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
`

const TextFieldCustom = styled(TextField)`
    && {
        margin: 0 2px;
        height: 23.8px;
        & input {
            text-indent: 45%;
            text-align: left;
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
                <TextFieldCustom
                    margin="normal"
                    variant="outlined"
                    value={count}
                    onChange={(e) =>  e.target.value !== null ? setCount(e.target.value):setCount(0)}
                />
                <ButtonCustom onClick={() => setCount(parseInt(count)+1)}>+</ButtonCustom>
            </ContainerButton>
        </>
    )
}
export default PlusandMinus
