import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'
import { degToRad } from '../helpers'
import { Wh_J, Tep_Wh } from './units'



export const Consommation: FunctionComponent<{}> = props => {
  
  // const [exajoule, setExajoule] = useState(11700)
  const [exajoule, setExajoule] = useState(1.26*1000000)

  return <table>
    <tbody>
      <tr>
        <th>Exajoule</th>
        <th>Tep</th>
        <th>Combien de fois</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => {
            setExajoule(value)
          }} value={exajoule} />
        </td>
        <td>
          {exajoule * 1000000000 * 0.02388458966275} |
        </td>
        <td>
          {exajoule * 1000000000 * 0.02388458966275 / 1000000000 / 13}
          {/* {exajoule * 1000000000000000000 * Wh_J * Tep_Wh / 1000000 / 13} */}
        </td>
      </tr>
    </tbody>
  </table>
}