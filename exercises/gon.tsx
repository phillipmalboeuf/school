import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'
import { degToRad } from '../helpers'

const GSC = 1367 // W/m^2

export const Gon: FunctionComponent<{}> = props => {
  
  const [day, setDay] = useState(6)

  return <table>
    <tbody>
      <tr>
        <th>Journée</th>
        <th>Gon</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => {
            setDay(value)
          }} value={day} />
        </td>
        <td>
          {GSC * (1 + (0.0334 * Math.cos(degToRad((360 * (day - 3)) / 365))))}
        </td>
      </tr>
    </tbody>
  </table>
}