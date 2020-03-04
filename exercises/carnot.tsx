import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'


export const Carnot: FunctionComponent<{}> = props => {
  
  const [rendement, setRendement] = useState(0)
  const [chaud, setChaud] = useState(0)
  const [froid, setFroid] = useState(0)

  return <table>
    <tbody>
      <tr>
        <th>Rendement</th>
        <th>Chaud (ºC)</th>
        <th>Froid (ºC)</th>
        <th>COP refrigérateur</th>
        <th>COP thermopompe</th>
      </tr>
      <tr>
        <td>
          {/* <Input type='number' onChange={value => setRendement(value)} value={rendement} /> */}
          {1 - ((froid+273)/(chaud+273))}
        </td>
        <td>
          <Input type='number' onChange={value => setChaud(value)} value={chaud} />
        </td>
        {function() {
          // const froid = chaud - (rendement*chaud)
          return <>
            <td>
              <Input type='number' onChange={value => setFroid(value)} value={froid} />
              {/* {froid} */}
            </td>
            <td>
              {1 / (((chaud+273)/(froid+273)) - 1)}
            </td>
            <td>
              {1 / (1 - ((froid+273)/(chaud+273)))}
            </td>
          </>
        }()}
        
      </tr>
    </tbody>
  </table>
}