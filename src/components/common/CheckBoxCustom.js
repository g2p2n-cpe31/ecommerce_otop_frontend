import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const TextLabel = styled(FormControlLabel)`
  && {
    margin: 0;
    .MuiTypography-body1 {
      font-family: Kanit;
      font-style: normal;
      font-weight: 300;
      font-size: 1.4rem;
    }
  }
`

const CheckBox = styled(Checkbox)`
  && {
    color: ${props => props.colorCustom || 'black'};

    width: 2rem;
    height: 2rem;

    .MuiSvgIcon-root {
      width: ${props => props.width || '2.125rem'};
      height: ${props => props.height || '1.8rem'};
    }
    &:hover {
      background: ${props => props.bgHover || 'rgba(208, 188, 227, 0.2)'};
    }
  }
`
const CheckBoxCus = props => {
  return props.label ? (
    <TextLabel control={<CheckBox {...props} />} label={props.label} />
  ) : (
    <CheckBox {...props} />
  )
}

export default CheckBoxCus
