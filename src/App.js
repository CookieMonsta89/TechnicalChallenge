import React from 'react';
import {AppDiv} from './App-Styled-components';
import HomeView from '../src/components/Home-view/HomeView'
import Header from '../src/components/Individual-Single-Components/Header/Header'
import { Route, Switch } from 'react-router-dom'
import MovieDetails from './components/Single-View/MovieDetails';




const App = () => {


  return (
    <AppDiv>     
        <Header />      
        <Switch>
          <Route path="/" component={HomeView} exact />
          <Route path="/:movieId" component={MovieDetails} exact />
        </Switch>
    </AppDiv>
  )
}

export default App;
