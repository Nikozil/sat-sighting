import React from 'react';
import styled from 'styled-components';
import {
  FIRST_BACKGROUND_COLOR,
  HEADER_HEIGHT,
  MAIN_TEXT_COLOR,
} from '../../config/cssConfig';

const Header = () => {
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
  font-size: 1.3em;
  text-align: center;
  color: ${MAIN_TEXT_COLOR};

  @media (max-width: 930px) {
    font-size: 1.1em;
  }
  @media (max-width: 768px) {
    font-size: 0.8em;
  }

  @media (max-width: 576px) {
    font-size: 0.7em;
  }
`;

const Wrapper = styled.section`
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${FIRST_BACKGROUND_COLOR};
`;
