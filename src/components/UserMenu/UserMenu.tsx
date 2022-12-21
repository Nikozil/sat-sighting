import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatCoordinates, isCoordinate } from '../../lib/functions';
import { setUserCoordinatesThunk } from '../../Redux/modules/userSlice';
import { getCoordinates } from '../../Redux/selectors/userSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();

  const coordinates = useSelector(getCoordinates);

  const formatedCoordinates = formatCoordinates(coordinates);

  const [formCoordinates, setFormCoordinates] = useState(formatedCoordinates);

  useEffect(() => {
    setFormCoordinates(formatCoordinates(coordinates));
  }, [coordinates]);

  const success = (position: GeolocationPosition) => {
    const coordinates = position.coords;

    dispatch(
      setUserCoordinatesThunk([coordinates.latitude, coordinates.longitude])
    );
  };

  const error = (err: any) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(success, error);
  };

  const setCoordinatesHandler = () => {
    const newCoordinates = [+formCoordinates[0], +formCoordinates[1]];
    dispatch(setUserCoordinatesThunk(newCoordinates));
  };

  const changeLatitude = (event: any) => {
    const newLatitude = event.target.value;
    if (isCoordinate(newLatitude)) {
      const newCoordinates = [newLatitude, formCoordinates[1]];
      setFormCoordinates(newCoordinates);
    }
  };

  const changeLongitude = (event: any) => {
    const newLongitude = event.target.value;
    if (isCoordinate(newLongitude)) {
      const newCoordinates = [formCoordinates[0], +newLongitude];
      setFormCoordinates(newCoordinates);
    }
  };

  return (
    <Wrapper>
      <CoordinatesContainer>
        <CoordinatesForm>
          <Label htmlFor="latitude">Широта</Label>
          <Input
            name="latitude"
            value={formCoordinates[0]}
            onChange={changeLatitude}
          />
        </CoordinatesForm>
        <CoordinatesForm>
          <Label htmlFor="longitude">Долгота</Label>
          <Input
            name="longitude"
            value={formCoordinates[1]}
            onChange={changeLongitude}
          />
        </CoordinatesForm>
      </CoordinatesContainer>
      <div>
        <Button onClick={setCoordinatesHandler}>Задать координаты</Button>
        <Button onClick={getLocationHandler}>Определить местоположение</Button>
      </div>
    </Wrapper>
  );
};

export default UserMenu;

const Wrapper = styled.article`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CoordinatesContainer = styled.section`
  display: flex;
  margin: 0.6em 0px;
  align-items: center;
`;
const CoordinatesForm = styled.div`
  margin: 0px 0.8em;
`;
const Input = styled.input`
  padding: 0.2em;
  font-size: 1em;
  height: 1.2em;
  text-align: center;
  border-radius: 5px;
  width: 3.85em;
  outline: none;
  border: none;
`;
const Label = styled.label`
  margin-right: 0.5em;
  color: #242424;
  text-align: center;
  font-size: 1.2em;
  font-weight: 900;
`;

const Button = styled.button`
  margin: 0px 8px;
  padding: 6px 9px;
  background: #17273a;

  outline: none;
  border: none;
  font-size: 1.2em;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  // box-shadow: '1px 1px 5px 5px #203C5C';

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    // font-size: 1.2em;
    font-size: 0.8em;
  }
`;
