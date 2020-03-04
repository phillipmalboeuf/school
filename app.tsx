import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Switch, Link } from 'react-router-dom'

import { Wavelength } from './exercises/wavelength'
import { Units } from './exercises/units'
import { SolarTime } from './exercises/solar_time'
import { Carnot } from './exercises/carnot'
import { Perfect } from './exercises/perfect'
import { Puissance } from './exercises/puissance'
import { Actualisation } from './exercises/actualisation'
import { WaterHeating } from './exercises/water_heating'
import { Gon } from './exercises/gon'
import { Consommation } from './exercises/consommation'
import { Capteur } from './exercises/capteur'
import { Wind } from './exercises/wind'
import { LCOE } from './exercises/lcoe'

render(
  <HashRouter>
    <Switch>
      <Route path='/units' component={Units} />
      <Route path='/puissance' component={Puissance} />
      <Route path='/perfect' component={Perfect} />
      <Route path='/carnot' component={Carnot} />
      <Route path='/water_heat' component={WaterHeating} />
      <Route path='/actualisation' component={Actualisation} />
      <Route path='/consommation' component={Consommation} />
      <Route path='/solar_time' component={SolarTime} />
      <Route path='/gon' component={Gon} />
      <Route path='/capteur' component={Capteur} />
      <Route path='/wind' component={Wind} />
      <Route path='/lcoe' component={LCOE} />
      <Route render={() => <>
        <Link to='/units'>Units</Link><br />
        <Link to='/puissance'>Puissance</Link><br />
        <Link to='/perfect'>Gaz Parfait</Link><br />
        <Link to='/carnot'>Carnot</Link><br />
        <Link to='/water_heat'>Water Heating</Link><br />
        <Link to='/actualisation'>Actualisation</Link><br />
        <Link to='/consommation'>Consommation</Link><br />
        <Link to='/solar_time'>Solar Time</Link><br />
        <Link to='/gon'>Gon</Link><br />
        <Link to='/capteur'>Capteur</Link><br />
        <Link to='/wind'>Wind</Link><br />
        <Link to='/lcoe'>LCOE</Link>
      </>} />
    </Switch>
  </HashRouter>,
  document.getElementById('main'),
)