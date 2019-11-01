import { keyframes } from 'styled-components'

export const SliderLTR = keyframes`
  0%  { transform: translateX(0%); }
  10%  { transform: translateX(-10%); }
  20%  { transform: translateX(-20%); }
  30%  { transform: translateX(-30%); }
  40%  { transform: translateX(-40%); }
  50%  { transform: translateX(-51%); }
  60%  { transform: translateX(-40%); }
  70%  { transform: translateX(-30%); }
  80%  { transform: translateX(-20%); }
  90%  { transform: translateX(-10%); }
  100% { transform: translateX(-0%); }
`
export const SliderRTL = keyframes`
  0%  { transform: translateX(0%); }
  10%  { transform: translateX(10%); }
  20%  { transform: translateX(20%); }
  30%  { transform: translateX(30%); }
  40%  { transform: translateX(40%); }
  50%  { transform: translateX(51%); }
  60%  { transform: translateX(40%); }
  70%  { transform: translateX(30%); }
  80%  { transform: translateX(20%); }
  90%  { transform: translateX(10%); }
  100% { transform: translateX(0%); }
`
