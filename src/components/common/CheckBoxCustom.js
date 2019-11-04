import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'

const CheckBox = styled(Checkbox)`
  && {
    color: ${props => props.colorCustom || 'black'};

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
  return <CheckBox {...props} />
}

export default CheckBoxCus
