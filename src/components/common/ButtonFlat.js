import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const ButtonFlat = ({
  width = '6.45rem',
  height = '39px',
  background = ' #e89c6b',
  border_radius = '0.2rem',
  margin = '0',
  ...props
}) => {
  const ButtonCustomFlat = styled(Button)`
    && {
      min-width: 0;
      width: ${width};
      height: ${height};
      border-radius: ${border_radius};
      background: ${background};
      margin: ${margin};
    }
  `

  return <ButtonCustomFlat>{props.children}</ButtonCustomFlat>
}

export default ButtonFlat
