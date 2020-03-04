import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'
import moment from 'moment'

import { Input } from '../components/input'
import { degToRad } from '../helpers'

const densité = 1.2

export const LCOE: FunctionComponent<{}> = props => {
  
  const [tic, setTIC] = useState(10000000000)
  const [lifetime, setLifetime] = useState(30)
  const [cost, setCost] = useState(20)
  const [power, setPower] = useState(1000)
  const [r, setR] = useState(0.05)

  return <table>
    <tbody>
      <tr>
        <th>TIC</th>
        <th>Years</th>
        <th>Coût de production</th>
        <th>Puissance (kW)</th>
        <th>Taux d'intérêt</th>
        <th>Q</th>
        <th>LFC</th>
        <th>LCOE ($/kWh)</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => setTIC(value)} value={tic} />
        </td>
        <td>
          <Input type='number' onChange={value => setLifetime(value)} value={lifetime} />
        </td>
        <td>
          <Input type='number' onChange={value => setCost(value)} value={cost} />
        </td>
        <td>
          <Input type='number' onChange={value => setPower(value)} value={power} />
        </td>
        <td>
          <Input type='number' onChange={value => setR(value)} value={r} />
        </td>
        {function () {
          const q = power * 24 * 360
          const lfc = ((tic * r) / (1 - Math.pow(1 + r, -lifetime))) / q
          const lcoe = lfc + cost
          return <>
            <td>{q}</td>
            <td>{lfc.toFixed(2)}</td>
            <td>{lcoe.toFixed(2)}</td>
          </>
        }()}
      </tr>
    </tbody>
  </table>
}