import React, { useState } from 'react'
import styled from 'styled-components'
import SelectFlat from '../../common/SelectFlat'
import ButtonFlat from '../../common/ButtonFlat'
import TextField from '@material-ui/core/TextField'

const TextFieldMinMax = styled(TextField)`
  && {
    color: #bdbdbd;
    background: #f2f2f2;
    max-width: 13.9rem;
    margin: auto 0;

    & input {
      padding: 0 0.4rem;
      height: 4rem;
      font-family: Kanit;
      font-size: 17px;
      font-weight: 300;
      color: #828282;
      text-align: center;
    }

    & fieldset {
      border: 0;
      box-sizing: border-box;
      border-radius: 2px;
    }
  }
`

const ContainerFilter = styled.div`
  /* max-width: 67.5rem; */
  min-width: 28rem;
  width: 39%;
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

const FilterSide = props => {
  const [option, setOption] = useState('')
  const [region, setRegion] = useState('')
  const [sort, setSort] = useState('')
  const [min, setMin] = useState('')
  const [max, setMax] = useState('')

  const handleFilterSubmit = () => {
    props.setFilters({
      sortby: sort,
      cata: option,
      region: region,
      price_min: min,
      price_max: max,
    })
    props.getProduct()
  }

  return (
    <ContainerFilter>
      <WrapContainer>
        <TextTopic>ค้นหาแบบละเอียด</TextTopic>
        <SelectFlat
          value={option}
          onChange={e => setOption(e.target.value)}
          placeholder="หมวดหมู่"
          options={[
            { label: 'ผลไม้', value: 'ผลไม้' },
            { label: 'ของใช้', value: 'ของใช้' },
            { label: 'เสื้อผ้า', value: 'เสื้อผ้า' },
            { label: 'อื่นๆ', value: 'อื่นๆ' },
          ]}
        />
        <SelectFlat
          value={region}
          onChange={e => setRegion(e.target.value)}
          border_radius=".3rem"
          placeholder="ภูมิภาค"
          // border=".15rem solid #BDBDBD"
          margin_form="2.6rem 0"
          options={[
            { label: 'ภาคเหนือ', value: 'ภาคเหนือ' },
            { label: 'ภาคอีสาน', value: 'ภาคอีสาน' },
            { label: 'ภาคตะวันออก', value: 'ภาคตะวันออก' },
            { label: 'ภาคกลาง', value: 'ภาคกลาง' },
            { label: 'ภาคตะวันตก', value: 'ภาคตะวันตก' },
            { label: 'ภาคใต้', value: 'ภาคใต้' },
          ]}
        />
        <WrapPrice>
          <TextFilter>ราคา</TextFilter>
          <WrapSort>
            <TextFieldMinMax
              defaultValue=""
              margin="normal"
              variant="outlined"
              placeholder="น้อยสุด"
              value={min}
              onChange={e => setMin(e.target.value)}
            />
            <TextFieldMinMax
              defaultValue=""
              margin="normal"
              variant="outlined"
              placeholder="มากสุด"
              value={max}
              value={e => setMax(e.target.value)}
            />
          </WrapSort>
        </WrapPrice>
        <WrapSort>
          <TextFilter>เรียงตาม</TextFilter>
          <SelectFlat
            value={sort}
            onChange={e => setSort(e.target.value)}
            placeholder="เรียงตาม"
            displayEmpty={false}
            width="188px"
            options={[
              { label: 'ชื่อ', value: 'searchbyname' },
              { label: 'ราคา(น้อยไปมาก)', value: 'sortbyprice1' },
              { label: 'ราคา(มากไปน้อย)', value: 'sortbyprice_1' },
              { label: 'ความนิยม(น้อยไปมาก)', value: 'sortbyrating1' },
              { label: 'ความนิยม(มากไปน้อย)', value: 'sortbyrating_1' },
              { label: 'ขายแล้ว(น้อยไปมาก)', value: 'sortbysell1' },
              { label: 'ขายแล้ว(มากไปน้อย)', value: 'sortbysell_1' },
            ]}
          />
        </WrapSort>
        <WrapForm>
          <ButtonFlat
            background="#BDBDBD"
            width="10.6rem"
            font_weight="normal"
            color_btn="#F2F2F2"
            font_size="17px"
          >
            ล้าง
          </ButtonFlat>
          <ButtonFlat
            width="16.4rem"
            font_weight="normal"
            color_btn="#F2F2F2"
            font_size="17px"
            onClick={handleFilterSubmit}
          >
            ตกลง
          </ButtonFlat>
        </WrapForm>
      </WrapContainer>
    </ContainerFilter>
  )
}

export default FilterSide
