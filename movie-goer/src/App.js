import React from 'react';
import {AppDiv} from './App-Styled-components';
import HomeView from '../src/components/Home-view/HomeView'
import Header from '../src/components/Individual-Single-Components/Header/Header'

const App = () => {
  return (
    <AppDiv>
      <Header /> 
      <HomeView /> 
    </AppDiv>
  )
}

export default App;
