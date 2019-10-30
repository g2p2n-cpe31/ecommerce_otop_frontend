import React  from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import Dropdown from '../../images/Sell/dropdown.png'

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


  const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    width: 10%;
    margin: auto 3.1rem ;
`


const StyledFormControl= styled(FormControl)`
    &&{
        margin-bottom: 0;
        background: #FFFFFF;
    }
`


const StyledSelect = styled(Select)`
    &&{
        font-family: Kanit;
        height: 2.4rem;
        color: #BDBDBD;
        border-radius: 0.2rem;
    }
    & .MuiOutlinedInput-input{
       padding: 0 0 0 1.9rem;
       box-sizing: border-box;
       width: 24.9rem;
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



const Filter = () =>{
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
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
            <Item value={10}>ชื่อสินค้า</Item>
            <Item value={20}>ราคา</Item>
            <Item value={30}>วันที่เพิ่มสินค้า</Item>
            <Item value={40}>วันที่แก้ไขล่าสุด</Item>
            <Item value={50}>จำนวนคงเหลือ</Item>
            </StyledSelect>
        </StyledFormControl>
    </ContainerSelect>
    )
}
export default Filter