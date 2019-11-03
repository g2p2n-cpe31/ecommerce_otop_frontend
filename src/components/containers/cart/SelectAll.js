import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Box = styled.div`
    display: flex;
    width: 115rem;
    height: 4.6rem;  
    align-items: center;
    justify-content: space-between;
    background-color: #F7F4F3;
    border-radius: 0.2rem;
    margin-top: 8rem;
`
const SelectButtonBox = styled.div`
    margin-left: 2.479rem;
`
const TextLabel = styled(FormControlLabel)`
    && .MuiTypography-body1 {
        font-family : Kanit;
        font-style: normal;
        font-weight: '300';
        font-size: '14';
    }
`
const TrashLabel = styled(FormControlLabel)`
    && .MuiTypography-body1 {
        font-family: Kanit;
        font-style: normal;
        font-weight: '300';
        font-size: '14px';
        color: #BDBDBD;
    }
`
const TrashBox = styled.div`
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
`
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
  }));  


const SelectAll = () => {
    const [state, setState] = React.useState({
        checkedB: true,
      });
    
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const classes = useStyles();

    return (
        <>
            <Box>
                <SelectButtonBox>
                    <TextLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange('checkedB')}
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="เลือกทั้งหมด"
                    />
                </SelectButtonBox>
                <TrashBox>
                    <TrashLabel
                        control={
                            <IconButton className={classes.button} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        }
                        label="ลบ"
                    />
                </TrashBox>
            </Box>
        </>
    )
}

export default SelectAll
