import React from 'react'
import styled from 'styled-components'
import SelectFlat from '../../common/SelectFlat'
const ContainerFilter = styled.div`
  width: 47.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #e0e0e0;
`

const TextTopic = styled.p`
  font-family: Kanit;
  font-family: 1.8rem;
  color: #4f4f4f;
`

const WrapContainer = styled.div`
  width: 280px;
`

const FilterSide = () => {
  return (
    <ContainerFilter>
      <WrapContainer>
        <TextTopic>ค้นหาแบบละเอียด</TextTopic>
        <SelectFlat />
      </WrapContainer>
    </ContainerFilter>
  )
}

export default FilterSide
