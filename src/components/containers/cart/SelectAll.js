// import React from 'react'
// import Checkbox from '@material-ui/core/Checkbox'

// export default function Checkboxes() {
//   const [state, setState] = React.useState({
//     checkedA: true,
//     checkedB: true,
//     checkedF: true,
//   })

//   const handleChange = name => event => {
//     setState({ ...state, [name]: event.target.checked })
//   }

//   return (
//     <div>
//       <Checkbox
//         checked={state.checkedA}
//         onChange={(e) => handleChange('checkedA', e)}
//         value="checkedA"
//         inputProps={{
//           'aria-label': 'primary checkbox',
//         }}
//       />
//       <Checkbox
//         checked={state.checkedB}
//         onChange={handleChange('checkedB')}
//         value="checkedB"
//         color="primary"
//         inputProps={{
//           'aria-label': 'secondary checkbox',
//         }}
//       />
//       <Checkbox
//         value="checkedC"
//         inputProps={{
//           'aria-label': 'uncontrolled-checkbox',
//         }}
//       />
//       <Checkbox
//         disabled
//         value="checkedD"
//         inputProps={{
//           'aria-label': 'disabled checkbox',
//         }}
//       />
//       <Checkbox
//         disabled
//         checked
//         value="checkedE"
//         inputProps={{
//           'aria-label': 'disabled checked checkbox',
//         }}
//       />
//       <Checkbox
//         checked={state.checkedF}
//         onChange={handleChange('checkedF')}
//         value="checkedF"
//         indeterminate
//         inputProps={{
//           'aria-label': 'indeterminate checkbox',
//         }}
//       />
//       <Checkbox
//         defaultChecked
//         color="default"
//         value="checkedG"
//         inputProps={{
//           'aria-label': 'checkbox with default color',
//         }}
//       />
//     </div>
//   )
// }
import React from 'react'
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
  const [state, setState] = React.useState({
    checkedB: true,
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  const classes = useStyles()

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