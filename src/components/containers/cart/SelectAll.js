import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const Box = styled.div`
  display: flex;
  width: 115rem;
  height: 4.6rem;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f4f3;
  border-radius: 0.2rem;
  margin-top: 8rem;
  margin-bottom: 2rem;
`

const SelectButtonBox = styled.div`
  margin-left: 2.479rem;
`

const TextLabel = styled(FormControlLabel)`
  && .MuiTypography-body1 {
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
  }
`
const TrashLabel = styled(FormControlLabel)`
  && .MuiTypography-body1 {
    font-family: Kanit;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    color: #bdbdbd;
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
  //   input: {
  //     display: 'none',
  //   },
}))

const SelectAll = () => {
  const [state, setState] = useState({
    checkboxOne: false,
  })

  const handleChange = (name, event) => {
    console.log(state)
    setState({ ...state, [name]: event.target.checked })
  }

  //   const

  const classes = useStyles()
  useEffect(() => {
    console.log(state)
  }, [state.checkboxOne])

  return (
    <>
      <Box>
        {/* <input type='checkbox' onchange='handleChange(this)'> */}
        <SelectButtonBox>
          <TextLabel
            control={
              <Checkbox
                checked={state.checkboxOne}
                // onChange={ handleChange('checkboxOne')}
                onChange={e => handleChange('checkboxOne', e)}
                value="checkboxOne"
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
