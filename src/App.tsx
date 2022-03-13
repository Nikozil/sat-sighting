import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header/Header';
import MapComponent from './components/MapComponent/MapComponent';
import SatellitesMenu from './components/SatellitesMenu/SatellitesMenu';
import SightingParameters from './components/SightingParameters/SightingParameters';
import UserMenu from './components/UserMenu/UserMenu';
import {
  CONTENT_HEIGHT,
  CONTENT_HEIGHT_MOBILE,
  FIRST_BACKGROUND_COLOR,
  HEADER_HEIGHT,
  LAST_BACKGROUND_COLOR,
  MIDDLE_BACKGROUND_COLOR,
} from './config/cssConfig';

function App() {
  return (
    <Application>
      <Header />
      <Wrapper>
        <UserMenu />
        <SatellitesMenu />
        <SightingParameters />
      </Wrapper>
      <MapWrapper>
        <MapComponent />
      </MapWrapper>
    </Application>
  );
}

export default App;

const Wrapper = styled.section`
  height: ${CONTENT_HEIGHT};
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    ${FIRST_BACKGROUND_COLOR},
    ${MIDDLE_BACKGROUND_COLOR},
    ${LAST_BACKGROUND_COLOR}
  );

  @media (max-width: 768px) {
    height: ${CONTENT_HEIGHT_MOBILE};
    padding-bottom: none;
  }
`;
const MapWrapper = styled.section`
  height: calc(100vh - ${HEADER_HEIGHT} - ${CONTENT_HEIGHT});
  background-color: ${LAST_BACKGROUND_COLOR};

  @media (max-width: 768px) {
    height: calc(100vh - ${HEADER_HEIGHT} - ${CONTENT_HEIGHT_MOBILE});
  }
`;
const Application = styled.div`
  text-align: center;
  min-width: 320px;
`;
