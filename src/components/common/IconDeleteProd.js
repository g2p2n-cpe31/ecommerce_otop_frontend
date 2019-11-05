import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import bin from '../../images/Cart/bin.svg'
import styled from 'styled-components'

const IconButtonCustom = styled(IconButton)`
  && {
    margin: 0 2rem;
    padding: 0;
    width: 4.9rem;
    height: 4.9rem;
  }
`

const IconBin = styled.img`
  width: 1.2rem;
  height: 1.4rem;
`

const ButtonDeleteAll = styled.p`
  font-family: Kanit;
  font-style: normal;
  font-weight: 300;
  font-size: 1.4rem;
  color: #bdbdbd;
  margin-left: 0.7rem;
`

const IconDeleteProd = () => {
  return (
    <IconButtonCustom aria-label="delete">
      <IconBin src={bin} />
      <ButtonDeleteAll>ลบ</ButtonDeleteAll>
    </IconButtonCustom>
  )
}

export default IconDeleteProd
