import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'
import { radToDeg } from '../helpers'


export const Puissance: FunctionComponent<{}> = props => {
  
  const [réel, setRéel] = useState(10)
  const [facteur, setFacteur] = useState(0.75)

  return <table>
    <tbody>
      <tr>
        <th>P réel (kW)</th>
        <th>Facteur de puissance (cos𝜑)</th>
        <th>P apparente (kVA)</th>
        <th>P réactive (kVAR)</th>
        <th>L'angle 𝜑</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => {
            setRéel(value)
          }} value={réel} />
        </td>
        <td>
          <Input type='number' onChange={value => {
            setFacteur(value)
          }} value={facteur} />
        </td>
        {function() {
          const S = réel / facteur
          return <>
            <td>
              {S}
            </td>
            <td>
              {Math.sqrt(Math.pow(S, 2) - Math.pow(réel, 2))}
            </td>
            <td>
              {Math.acos(facteur)} rad<br />
              {radToDeg(Math.acos(facteur))}º
            </td>
          </>
        }()}
        
      </tr>
    </tbody>
  </table>
}