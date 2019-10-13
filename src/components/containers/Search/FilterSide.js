import React from 'react'
import styled from 'styled-components'
import SelectFlat from '../../common/SelectFlat'
import ButtonFlat from '../../common/ButtonFlat'

const ContainerFilter = styled.div`
  max-width: 67.5rem;
  min-width: 28rem;
  width: 35%;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #e0e0e0;
  align-items: flex-end;
`

const TextTopic = styled.p`
  font-family: Kanit;
  font-family: 1.8rem;
  color: #4f4f4f;
`

const WrapContainer = styled.div`
  width: 280px;
  margin: 4.3rem 8.2rem;
`

const WrapPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TextFilter = styled.p`
  color: #828282;
  font-family: Kanit;
  font-weight: 300;
  font-size: 17px;
  margin-bottom: 0;
  margin-right: 2.5rem;
  white-space: nowrap;
`

const WrapSort = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem auto 1.6rem;
`
const WrapForm = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 3.3rem;
`

const FilterSide = () => {
  return (
    <ContainerFilter>
      <WrapContainer>
        <TextTopic>ค้นหาแบบละเอียด</TextTopic>
        <SelectFlat placeholder="หมวดหมู่" />
        <SelectFlat placeholder="ภูมิภาค" margin_form="2.6rem 0" />
        <WrapPrice>
          <TextFilter>ราคา</TextFilter>
          <WrapSort>
            <ButtonFlat
              background="#F2F2F2"
              width="13.9rem"
              font_weight="300"
              color="#BDBDBD"
              font_size="13px"
            >
              น้อยสุด
            </ButtonFlat>
            <ButtonFlat
              background="#F2F2F2"
              width="13.9rem"
              font_weight="300"
              color="#BDBDBD"
              font_size="13px"
            >
              มากสุด
            </ButtonFlat>
          </WrapSort>
        </WrapPrice>
        <WrapSort>
          <TextFilter>เรียงตาม</TextFilter>
          <SelectFlat
            placeholder="เรียงตาม"
            displayEmpty={false}
            width="188px"
          />
        </WrapSort>
        <WrapForm>
          <ButtonFlat
            background="#BDBDBD"
            width="10.6rem"
            font_weight="normal"
            color="#F2F2F2"
            font_size="17px"
          >
            ล้าง
          </ButtonFlat>
          <ButtonFlat
            width="16.4rem"
            font_weight="normal"
            color="#F2F2F2"
            font_size="17px"
          >
            ตกลง
          </ButtonFlat>
        </WrapForm>
      </WrapContainer>
    </ContainerFilter>
  )
}

export default FilterSide