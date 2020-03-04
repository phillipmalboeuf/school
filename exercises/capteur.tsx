import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'
import moment from 'moment'

import { Input } from '../components/input'
import { degToRad } from '../helpers'


const sigma = 5.67 * Math.pow(10, -8)
const Gs = 1000

export const Capteur: FunctionComponent<{}> = props => {
  
  const [emissivité, setEmissivité] = useState(0)
  const [absorption, setAbsorption] = useState(8)
  const [tempSurface, setTempSurface] = useState(425 + 273)
  const [tempAmbient, setTempAmbient] = useState(20 + 273)
  const [tempEnv, setTempEnv] = useState(20 + 273)

  return <table>
    <tbody>
      <tr>
        <th>emissivité</th>
        <th>absorption</th>
        <th>T (K)</th>
        <th>h</th>
        <th>q" surface</th>
        <th>q" env</th>
        <th>q" convection</th>
        <th>q" radiation</th>
        <th>q" u</th>
        <th>Rendement</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => setEmissivité(value)} value={emissivité} />
        </td>
        <td>
          <Input type='number' onChange={value => setAbsorption(value)} value={absorption} />
        </td>
        <td>
          Surface: <Input type='number' onChange={value => setTempSurface(value)} value={tempSurface} /><br />
          Ambient: <Input type='number' onChange={value => setTempAmbient(value)} value={tempAmbient} /><br />
          Env: <Input type='number' onChange={value => setTempEnv(value)} value={tempEnv} />
        </td>
        {function () {
          // const h = 1.35 * Math.pow(tempSurface - tempAmbient, 1/3)
          const h = 10
          const qsur = absorption * Gs
          const qenv = emissivité * sigma * Math.pow(tempEnv, 4)
          const qconv = h * (tempSurface - tempAmbient) * 8
          const qrad = emissivité * sigma * Math.pow(tempSurface, 4)
          const qu = qsur + qenv - qconv - qrad
          return <>
            <td>
              {h}
            </td>
            <td>
              {qsur}
            </td>
            <td>
              {qenv}
            </td>
            <td>
              {qconv}
            </td>
            <td>
              {qrad}
            </td>
            <td>
              {qu}
            </td>
            <td>
              {qu / Gs}
            </td>
          </>
        }()}
      </tr>
    </tbody>
  </table>
}