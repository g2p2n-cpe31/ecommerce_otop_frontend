import React , {useState} from 'react'
import  styled  from 'styled-components'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    height: 28px;
    width: 23.8px;

`

// const Styled_Button = styled(Button)`
//     psdding: 20px;
//     border-radius: 1px;
//     background-color: #e0e0e0;
//     justify-content: center;
// `

const Text_Field = styled(TextField)`
    font-family: Kanit;
    font-size: 1.6rem;
    padding : 10px 30px;
    background: #ffffff;
    border-radius: 1px;
    border: solid 1px #bdbdbd;
    margin-right: 1px;
    margin-left: 1px;
`




const PlusandMinus = () => {
    const [count,setCount] = useState(0)
    return(
        <>
            <ContainerButton>
                <button onClick={() => setCount(count-1)}>-</button>
                <Text_Field inputProps={count}></Text_Field>
                <button onClick={() => setCount(count+1)}>+</button>
            </ContainerButton>
        </>
    )
}
export default PlusandMinus
