import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Icon from '../../images/Pay/Vector.svg'
import Address from './AddressItem'

const ContainerDropdown = styled.div`
  display: flex;
  justify-content: flex-start;
  position: relative;
`

const StyleButton = styled(Button)`
  && {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 15rem;
    background: rgba(51, 51, 51, 0.5);
    border-radius: 2px;
    padding: 0;

    & > span {
      height: 16.8rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &:hover {
      background: rgba(51, 51, 51, 0.8);
    }
  }
`

const StyledIcon = styled.img`
  position: absolute;
  width: 4rem;
  height: 2rem;
  top: 6.5rem;
  right: 5.6rem;
`

const ItemDropdown = styled.div`
  display: flex;
  position: absolute;
  background: #524e62;
  border-radius: 2px;
  top: 15rem;
  width: 100%;
  height: 39rem;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0;
`

const AddressDropdown = () => {
  const [show, setShow] = useState(false)

  return (
    <ContainerDropdown>
      <StyleButton onClick={() => setShow(!show)}>
        <StyledIcon src={Icon} />
        <Address
          street="111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา"
          province="แขวงบลาบลาบลา เขตบลาบลาบลา"
          subdistrict=" จังหวัดบลาบลาบลา"
          code="10100"
          isUnderline={false}
        />
      </StyleButton>
      {show ? (
        <ItemDropdown onBlur={() => setShow(false)} tabIndex={0}>
          <Address
            street="111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา"
            province="แขวงบลาบลาบลา เขตบลาบลาบลา"
            subdistrict=" จังหวัดบลาบลาบลา"
            code="10100"
          />
          <Address
            street="111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา"
            province="แขวงบลาบลาบลา เขตบลาบลาบลา"
            subdistrict=" จังหวัดบลาบลาบลา"
            code="10100"
          />
          <Address
            street="111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา"
            province="แขวงบลาบลาบลา เขตบลาบลาบลา"
            subdistrict=" จังหวัดบลาบลาบลา"
            code="10100"
          />
          <Address
            street="111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา"
            province="แขวงบลาบลาบลา เขตบลาบลาบลา"
            subdistrict=" จังหวัดบลาบลาบลา"
            code="10100"
          />
          <Address
            street="111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา"
            province="แขวงบลาบลาบลา เขตบลาบลาบลา"
            subdistrict=" จังหวัดบลาบลาบลา"
            code="10100"
          />
          <Address
            street="111/111 ซอยบลาบลาบลา ถนนบลาบลาบลา"
            province="แขวงบลาบลาบลา เขตบลาบลาบลา"
            subdistrict=" จังหวัดบลาบลาบลา"
            code="10100"
          />
        </ItemDropdown>
      ) : null}
    </ContainerDropdown>
  )
}

export default AddressDropdown
