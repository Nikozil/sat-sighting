import React from 'react';
import styled from 'styled-components';

// const str = `75,21°N 141,67°E
// 56,21°N -151,43°E
// 0°N -139,36°W
// -56,62°S -151,48°W
// -75,81°S 142,21°E
// -56,71°S 78,38°E
// 0°N 66,31°E
// 56,51°N 78,58°E`;

const Header = () => {
  // console.log(formatCoordinates(str));

  return (
    <header>
      <Wrapper>
        <Title>
          Определение параметров настройки спутниковой антенны по местоположению
          на карте
        </Title>
      </Wrapper>
    </header>
  );
};

export default Header;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
  @media (max-width: 500px) {
    font-size: 1em;
  }
`;

const Wrapper = styled.section`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3869a0;
`;
