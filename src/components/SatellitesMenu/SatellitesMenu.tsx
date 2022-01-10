import React, { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSelectedSatelliteThunk } from '../../Redux/modules/userSlice';
import { AppStateType } from '../../Redux/store';

const SatellitesMenu = () => {
  const dispatch = useDispatch();
  const satellites = useSelector(
    (state: AppStateType) => state.satellites.satellites
  );
  const userSelected = useSelector(
    (state: AppStateType) => state.user.userParameters.selectedSatellite.name
  );
  const clickHandler = (e: MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    dispatch(setSelectedSatelliteThunk(target.innerHTML));
  };

  return (
    <Wrapper>
      {satellites.map((satellite) => (
        <Button
          key={satellite.name}
          theme={{ background: `${satellite.areaFillColor}` }}
          onClick={clickHandler}
          isSelected={satellite.name === userSelected}>
          {satellite.name}
        </Button>
      ))}
    </Wrapper>
  );
};

export default SatellitesMenu;

const Wrapper = styled.section`
  // height: 100px;
  margin: 10px 0px;
`;
const Button = styled.button<{ isSelected: boolean }>`
  margin: 0px 8px;
  padding: 6px 9px;
  background: ${(props) =>
    props.theme.background ? props.theme.background : '#203C5C'};
  outline: none;
  border: none;
  font-size: 1.5em;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? '1px 1px 5px 5px #203C5C' : null};
  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;
// background: #203c5c;
