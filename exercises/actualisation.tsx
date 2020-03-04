import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'

import { Input } from '../components/input'


export const Actualisation: FunctionComponent<{}> = props => {
  
  const [amount, setAmount] = useState(300)
  const [years, setYears] = useState(30)
  const [taux, setTaux] = useState(0.03)
  const [inflation, setInflation] = useState(0)

  return <table>
    <tbody>
      <tr>
        <th>Montant ($)</th>
        <th># d'années</th>
        <th>Taux d'actualisation</th>
        <th>Taux d'inflation</th>
        <th>Valeur Actualisé</th>
        <th>Valeur Actualisé si Récurrent</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => {
            setAmount(value)
          }} value={amount} />
        </td>
        <td>
          <Input type='number' onChange={value => {
            setYears(value)
          }} value={years} />
        </td>
        <td>
          <Input type='number' onChange={value => {
            setTaux(value)
          }} value={taux} />
        </td>
        <td>
          <Input type='number' onChange={value => {
            setInflation(value)
          }} value={inflation} />
        </td>
        <td>
          {(amount * (Math.pow(1 + inflation, years - 1) / Math.pow(1 + taux, years))).toFixed(0)}
        </td>
        <td>
          {((amount / (taux - inflation)) * (1 - Math.pow((1 + inflation) / (1 + taux), years))).toFixed(0)}
        </td>
      </tr>
    </tbody>
  </table>
}