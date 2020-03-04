import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'

export const Wh_J = 1 / 3600
export const Tep_Wh = 1 / 11630000
const eV_J = 6241509000000000000

export const Units: FunctionComponent<{}> = props => {
  
  const [joules, setJoules] = useState(0)

  return <table>
    <tbody>
      <tr>
        <th>Joules</th>
        <th>Watt-heure</th>
        <th>Tep</th>
        <th>eV</th>
        <th>µm</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => setJoules(value)} value={joules} />
        </td>
        <td>
          <Input type='number' onChange={value => setJoules(value / Wh_J)} value={joules * Wh_J} />
        </td>
        <td>
          <Input type='number' onChange={value => setJoules(value / Wh_J / Tep_Wh)} value={joules * Wh_J * Tep_Wh} />
        </td>
        <td>
          <Input type='number' onChange={value => setJoules(value / eV_J)} value={joules * eV_J} />
        </td>
        <td>
          <Input type='number' onChange={value => setJoules(value)} value={1.2398 / (eV_J * joules)} />
        </td>
      </tr>
    {/* <Input type='range'
      defaultValue={start} step={0.001} min={min} max={max}
      onInput={value => setValue(value as number)} />
    <p>
      Wavelength: {value} µm<br />
      Photo Energy: {(1.2398 / value).toFixed(4)} eV or {(1.2398 / value * q)} J
    </p> */}
    </tbody>
  </table>
}