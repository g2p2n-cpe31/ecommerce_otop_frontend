import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Pineapple from "./pineapple.png"
import React , {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField' 
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

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
const TextFieldCustom = styled(TextField)`
    && {
        margin: 0 2px;
        height: 23.8px;
        & input {
            padding: 0;
            width: 53.13px;
            height: 22px;
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
const ContainerButton = styled.div`
    margin-top: 20px;
    display: flex;
    width: 109.13px;
    height: 22px;
    /* background: blue; */
`
const Box = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 1150px;
    height: 10rem;
`
const ProductNameBox = styled.div`
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    width: 35rem;
    height: 10rem;
    /* background: green; */
`
const Box2 = styled.div`
    /* margin-left: 40px; */
    display: flex;
    flex-direction: column;
    width: 15rem;
    height: 10rem;
    /* background: pink; */
`
const TextBox = styled.div`
    display:flex;
    align-items: center;
    /* background: orange; */
`
const DeleteBox = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: flex-start;
`

const Margin = styled.div`
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
`
const Margin2 = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`
const Margin3 = styled.div`
    margin-left: 73px;
`
const SetMargin = styled.div`
    margin-left: 55px;
`
const FontSize = styled.div`
    font-size: 18px;
`
const FontSize2 = styled.div`
    font-size: 13px;
    color: #828282;
`
const FontSize3 = styled.div`
    font-size: 24px;
    color: #5B3C78;
`
const FontSize4 = styled.div`
    font-size: 12px;
    letter-spacing: 0.5px;
    color: #828282;
`
const FontSize5 = styled.div`
    margin-top: 20px;
    font-size: 12px;
    color: #4F4F4F;
`
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));  

const Product = () => {
    const [count,setCount] = useState(0)
    
    useEffect(()=>{
        console.log(count)
        if(count < 0 ) setCount(0)
        if(count === 'NaN') setCount(0)
    },[count])

    const [state, setState] = React.useState({
        checkedB: true,
      });

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const classes = useStyles();

    return (
        <div>
            <Box>
                <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange('checkedB')}
                    value="checkedB"
                    color="primary"
                    inputProps={{
                    'aria-label': 'secondary checkbox',
                    }}
                />
                <img src={Pineapple}
                     width="100rem"
                     height="87rem">
                </img>
                <TextBox>
                    <ProductNameBox>
                        <Margin>
                            <FontSize>
                                ชื่อสินค้า
                            </FontSize>
                        </Margin>
                        <FontSize2>
                            รายละเอียดสินค้า
                        </FontSize2>
                    </ProductNameBox>
                    <Box2>
                        <Margin2>
                            <FontSize3>
                                255 บาท
                            </FontSize3>
                        </Margin2>
                        <FontSize4>
                            ฟรีค่าจัดส่ง
                        </FontSize4>
                    </Box2>
                </TextBox>
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
                <SetMargin>
                    <Box2>
                        <FontSize5>
                            รายละเอียดถึงผู้ขาย
                        </FontSize5>
                        <FontSize5>
                            -----------------
                        </FontSize5>
                    </Box2>
                </SetMargin>
                <Margin3></Margin3>
                <DeleteBox>
                    <FormControlLabel
                        control={
                            <IconButton className={classes.button} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                        label="ลบ"
                    />
                </DeleteBox>
            </Box>   
        </div>
    )
}

export default Product
