import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'
import moment from 'moment'

import { Input } from '../components/input'
import { degToRad } from '../helpers'

const densité = 1.2

export const Wind: FunctionComponent<{}> = props => {
  
  const [radius, setRadius] = useState(15)
  const [windSpeed, setWindSpeed] = useState(9)
  // const [tempSurface, setTempSurface] = useState(425 + 273)
  // const [tempAmbient, setTempAmbient] = useState(20 + 273)
  // const [tempEnv, setTempEnv] = useState(20 + 273)

  return <table>
    <tbody>
      <tr>
        <th>Radius</th>
        <th>Wind Speed</th>
        <th>Area</th>
        <th>Puissance éolienne (kW)</th>
        <th>Puissance max du rotor (kW)</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => setRadius(value)} value={radius} />
        </td>
        <td>
          <Input type='number' onChange={value => setWindSpeed(value)} value={windSpeed} />
        </td>
        {function () {
          const area = Math.PI * Math.pow(radius, 2)
          const pe = 0.5 * densité * area * Math.pow(windSpeed, 3)
          return <>
            <td>{area}</td>
            <td>
              {pe / 1000}
            </td>
            <td>
              {(16/27) * pe / 1000}
            </td>
          </>
        }()}
      </tr>
    </tbody>
  </table>
}