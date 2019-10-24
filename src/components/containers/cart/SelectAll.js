import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Box = styled.div`
    display: flex;
    width: 1150px;
    height: 4.6rem;  
    align-items: center;
    background-color: #F7F4F3;
    border-radius: 2px;
`
const Margin = styled.div`
    margin: 80px;
`

const MarginLeft = styled.div`
    margin-left: 20px;
`
const TrashMargin = styled.div`
    margin-left: 95rem;
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
        <div>
            <Margin />
            <Box>
                <MarginLeft />
                <FormControlLabel
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
                <TrashMargin />
                <FormControlLabel
                    control={
                        <IconButton className={classes.button} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    }
                    label="ลบ"
                />
            </Box>
        </div>
    )
}

export default SelectAll
