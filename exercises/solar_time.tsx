import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'
import moment from 'moment'

import { Input } from '../components/input'
import { degToRad } from '../helpers'


const d = new Date()
d.setMonth(1)
d.setDate(3)


export const SolarTime: FunctionComponent<{}> = props => {
  
  const [datetime, setDatetime] = useState(d.getTime())
  const [long, setLong] = useState(89.4)
  const [stdLong, setStdLong] = useState(90)

  return <table>
    <tbody>
      <tr>
        <th>Datetime</th>
        <th>Longitude</th>
        <th>n</th>
        <th>E</th>
        <th>Solar time</th>
      </tr>
      <tr>
        <td>
          <input type='datetime-local' onChange={e => setDatetime(e.currentTarget.valueAsNumber)} value={new Date(datetime).toISOString().replace('Z', '')} />
        </td>
        <td>
          <Input type='number' onChange={value => setLong(value)} value={long} /><br />
          <Input type='number' onChange={value => setStdLong(value)} value={stdLong} />
        </td>
        
        {function(){
          const d = moment(datetime).utc()
          const n = d.dayOfYear()
          const b = degToRad((n - 1) * (360/365))

          const e = 2.2918*(0.0075 + (0.1868*Math.cos(b)) - (3.2077*Math.sin(b)) - (1.4615*Math.cos(b*2)) - (4.089*Math.sin(b*2)))

          return <>
            <td>{n}</td>
            <td>{e}</td>
            <td>{d.set('minutes', d.get('minutes') + e + (4 * (stdLong - long))).toISOString()}</td>
          </>
        }()}
      </tr>
    </tbody>
  </table>
}