import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'

const start = 0.6
const min = 0.38
const max = 0.74
const q = 1.602 * Math.pow(10, -19)


export const Wavelength: FunctionComponent<{}> = props => {
  
  const [value, setValue] = useState(start)

  return <>
    <Input type='range'
      defaultValue={start} step={0.001} min={min} max={max}
      onChange={value => setValue(value as number)} />
    <p>
      Wavelength: {value} µm<br />
      Photo Energy: {(1.2398 / value).toFixed(4)} eV or {(1.2398 / value * q)} J
    </p>
  </>
}
