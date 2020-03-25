import React, { useContext, useState } from 'react'
import { FunctionComponent } from 'react'
import moment from 'moment'

import { Input } from '../components/input'

const densité = 1000 // kg / m^3
const gravity = 9.81

export const STEP: FunctionComponent<{}> = props => {
  
  const [hauteur, setHauteur] = useState(926) // m
  const [volume, setVolume] = useState(134.8) // hm^3
  const [rendementPompe, setRendementPompe] = useState(0.981 * 0.898)
  const [consumedEnergy, setConsumedEnergy] = useState(1720) // GWh
  const [puissance, setPuissance] = useState(1920) // MW
  const [hours, setHours] = useState(1)

  return <table>
    <tbody>
      <tr>
        <th>Hauteur</th>
        <th>Volume réservoir</th>
        <th>Énergie consommé (GWh)</th>
        <th>Énergie potentielle (MWh)</th>
        <th>Rendement pompe</th>
        <th>X fois le réservoir</th>
        <th>Puissance</th>
        <th># d'heures</th>
        <th>Énergie produite (J)</th>
        <th>Volume d'eau (hm^3)</th>
      </tr>
      <tr>
        <td>
          <Input type='number' onChange={value => setHauteur(value)} value={hauteur} />
        </td>
        <td>
          <Input type='number' onChange={value => setVolume(value)} value={volume} />
        </td>
        <td>
          <Input type='number' onChange={value => setConsumedEnergy(value)} value={consumedEnergy} />
        </td>
        {function () {

          const potentielle = (densité * (volume * 1000000) * gravity * hauteur) / 3600000000
          const pumped = consumedEnergy * rendementPompe

          return <>
            <td>{potentielle}</td>
            <td>{rendementPompe}</td>
            <td>{pumped} / {potentielle/1000} = {pumped / (potentielle/1000)}</td>
          </>
        }()}
        <td>
          <Input type='number' onChange={value => setPuissance(value)} value={puissance} />
        </td>
        <td>
          <Input type='number' onChange={value => setHours(value)} value={hours} />
        </td>
        {function () {

          const energy = puissance * 1000000 * 60 * 60 * hours
          const v = energy / (densité * 9.81 * hauteur)

          return <>
            <td>{energy}</td>
            <td>{v / 1000000}</td>
          </>
        }()}
      </tr>
    </tbody>
  </table>
}