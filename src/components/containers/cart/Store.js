import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Product from './Product'

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1150px;
    /* height: 46rem;   */
    background-color: #F7F4F3;
    border-radius: 2px;
`
const Box2 = styled.div`
    margin-top: 5px;
    margin-left: 40px;
    display: flex;
    width: 100%;   
`

const Margin_Line = styled.div`
    margin: 5px;
`

const Line = styled.hr`
    width: 93%;
`

const Store = () => {
    const [state, setState] = React.useState({
        checkedB: true,
      });
    
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div>
            <Box>
                <Box2>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="ชื่อร้านค้า"
                    />
                </Box2>
                <Margin_Line></Margin_Line>
                <Line />
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </Box>
        </div>
    )
}

export default Store


