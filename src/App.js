import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PlanetsContainer from './containers/PlanetsContainer'
import Navigation from './components/Navigation'
import PlanetDescription from './components/PlanetDescription'

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/planets/page/:planetsPage" exact component={PlanetsContainer} />
        <Route path="/planet/:planetID" exact component={PlanetDescription} />
        <Redirect to="/planets/page/1" />
      </Switch>
    </>
  )
}

export default App
