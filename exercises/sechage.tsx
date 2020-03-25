import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'
import moment from 'moment'

import { Input } from '../components/input'

const PCIWood = 19.191 // MJ / kg or 5330 // kWh / tonne
const PCIGas = 38.1 // MJ / kg
const PCIWater = 2200 // kJ / kg (or 2257)

export const Séchage: FunctionComponent<{}> = props => {
  
  const [siccité, setSiccité] = useState(0.5)
  const [mass, setMass] = useState(1)
  const [rendementGas, setRendementGas] = useState(0.7)
  const [rendementWood, setRendementWood] = useState(0.4)

  return <table>
    <tbody>
      <tr>
        <th>Siccité</th>
        <th>Mass (tonne)</th>
        <th>Rendement Gas</th>
        <th>Rendement Wood</th>
        <th>Water Heat (MJ)</th>
        <th>Required GN (kg)</th>
        <th>Required Wood (kg)</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => setSiccité(value)} value={siccité} />
        </td>
        <td>
          <Input type='number' onChange={value => setMass(value)} value={mass} />
        </td>
        <td>
          <Input type='number' onChange={value => setRendementGas(value)} value={rendementGas} />
        </td>
        <td>
          <Input type='number' onChange={value => setRendementWood(value)} value={rendementWood} />
        </td>
        {function () {

          const waterMass = (mass - (mass * siccité)) * 1000
          const waterHeat = waterMass * PCIWater / 1000

          const gasMass = waterHeat / PCIGas / rendementGas
          const woodMass = waterHeat / PCIWood / rendementWood

          return <>
            <td>{waterHeat}</td>
            <td>{gasMass}</td>
            <td>{woodMass}</td>
          </>
        }()}
      </tr>
    </tbody>
  </table>
}