import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import MapComponent from './components/MapComponent/MapComponent';
import SatellitesMenu from './components/SatellitesMenu/SatellitesMenu';
import SightingParameters from './components/SightingParameters/SightingParameters';
import UserMenu from './components/UserMenu/UserMenu';

function App() {
  return (
    <Application>
      <Header />
      <Wrapper>
        <UserMenu />
        <SatellitesMenu />
        <SightingParameters />
      </Wrapper>
      <MapComponent />
    </Application>
  );
}

export default App;

const Wrapper = styled.section`
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#3869a0, #92b7e1);
`;
const Application = styled.div`
  text-align: center;
  min-width: 320px;
`;
