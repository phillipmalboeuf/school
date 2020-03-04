import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'

const R = 8.314 // J/K.mol
const MAir = 28.976 // g/mol

export const Perfect: FunctionComponent<{}> = props => {
  
  const [pression, setPression] = useState(100000)
  const [volume, setVolume] = useState(120)
  const [temperature, setTemperature] = useState(273+25)
  const [mol, setMol] = useState(4843)

  return <table>
    <tbody>
      <tr>
        <th>Pression (Pa)</th>
        <th>Volume (m^3)</th>
        <th>Temperature (ºK)</th>
        <th>Quantité (mol)</th>
        <th>Masse Air (g)</th>
      </tr>
      <tr>
        <td>
          {/* <Input type='number' onChange={value => {
            setPression(value)
          }} value={pression} /> */}
          {(R * mol * temperature)/volume}
        </td>
        <td>
          <Input type='number' onChange={value => {
            setVolume(value)
          }} value={volume} />
          {/* {(R * mol * temperature)/pression} */}
        </td>
        <td>
          <Input type='number' onChange={value => {
            setTemperature(value)
          }} value={temperature} />
          {/* {(pression*volume)/(R * mol)} */}
        </td>
        <td>
          <Input type='number' onChange={value => {
            setMol(value)
          }} value={mol} />
          {/* {(pression*volume)/(R * temperature)} */}
        </td>
        <td>
          {/* {(pression*volume)/(R * temperature)*MAir} */}
        </td>
      </tr>
    </tbody>
  </table>
}