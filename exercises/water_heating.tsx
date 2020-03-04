import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'

const capicité = 4.19 // kJ/kg*K

export const WaterHeating: FunctionComponent<{}> = props => {
  
  const [mass, setMass] = useState(1)
  const [puissance, setPuissance] = useState(200)
  const [time, setTime] = useState(10*60)

  return <table>
    <tbody>
      <tr>
        <th>Mass (kg)</th>
        <th>Puissance (W)</th>
        <th>Temps (secondes)</th>
        <th>Temperature delta</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => {
            setMass(value)
          }} value={mass} />
        </td>
        <td>
          <Input type='number' onChange={value => {
            setPuissance(value)
          }} value={puissance} />
        </td>
        <td>
          <Input type='number' onChange={value => {
            setTime(value)
          }} value={time} />
        </td>
        <td>
          {(time * puissance / 1000) / (mass * capicité)}
        </td>
      </tr>
    </tbody>
  </table>
}