import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'
import moment from 'moment'

import { Input } from '../components/input'
import { degToRad } from '../helpers'

const groundTemp = 7
const groundConductivity = 0.52 // W / m.K
const PVCConductivity = 0.35 // W / m.K
const airDensity = 1.287 // kg / m^3
const airSpecificHeat = 1006 // J / kg.K

function resistance(outside: number, inside: number, length: number, conductivity: number) {
  return Math.log(outside / inside) / (2 * Math.PI * length * conductivity)
}

export const Ground: FunctionComponent<{}> = props => {
  
  const [diameter, setDiameter] = useState(0.2)
  const [length, setLength] = useState(40)
  const [wallThickness, setWallThickness] = useState(0.003)
  const [groundThickness, setGroundThickness] = useState(0.15)
  const [temp, setTemp] = useState(-5.099)
  const [air, setAir] = useState(200) // CFM

  return <table>
    <tbody>
      <tr>
        <th>Diameter</th>
        <th>Length</th>
        <th>Wall Thickness</th>
        <th>Ground Thickness</th>
        <th>Outside Temp (ºC)</th>
        <th>Air volume (CFM)</th>
        <th>Mass flow rate (kg / s)</th>
        <th>Wall/Ground Resistance</th>
        <th>Gain thermique</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => setDiameter(value)} value={diameter} />
        </td>
        <td>
          <Input type='number' onChange={value => setLength(value)} value={length} />
        </td>
        <td>
          <Input type='number' onChange={value => setWallThickness(value)} value={wallThickness} />
        </td>
        <td>
          <Input type='number' onChange={value => setGroundThickness(value)} value={groundThickness} />
        </td>
        <td>
          <Input type='number' onChange={value => setTemp(value)} value={temp} />
        </td>
        <td>
          <Input type='number' onChange={value => setAir(value)} value={air} />
        </td>
        {function () {
          const mdot = air * 0.00047194745 * 1.2922
          const r = resistance(diameter + (2 * wallThickness), diameter, length, PVCConductivity)
            + resistance((2 * groundThickness), diameter + (2 * wallThickness), length, PVCConductivity)
          
          return <>
            <td>{mdot}</td>
            <td>{r}</td>
            <td></td>
          </>
        }()}
      </tr>
    </tbody>
  </table>
}