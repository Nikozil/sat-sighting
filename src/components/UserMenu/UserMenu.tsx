import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setUserCoordinatesThunk } from '../../Redux/modules/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const success = (position: GeolocationPosition) => {
    const coordinates = position.coords;

    dispatch(
      setUserCoordinatesThunk([coordinates.latitude, coordinates.longitude])
    );
  };

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  const clickHandler = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  return (
    <Wrapper>
      <Button onClick={clickHandler}>Определить местоположение</Button>
    </Wrapper>
  );
};

export default UserMenu;

const Wrapper = styled.section`
  margin: 10px 0px;
`;

const Button = styled.button`
  margin: 0px 8px;
  padding: 6px 9px;
  background: #17273a;

  outline: none;
  border: none;
  font-size: 1.5em;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  // box-shadow: '1px 1px 5px 5px #203C5C';

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;
