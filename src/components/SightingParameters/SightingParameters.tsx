import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setSightingParametersThunk } from '../../Redux/modules/userSlice';
import { AppStateType } from '../../Redux/store';

const SightingParameters = () => {
  const dispatch = useDispatch();
  const sightingParameters = useSelector(
    (state: AppStateType) => state.user.userParameters.sightingParameters
  );
  const userCoordinates = useSelector(
    (state: AppStateType) => state.user.user.coordinates
  );
  useEffect(() => {
    dispatch(setSightingParametersThunk());
  }, [userCoordinates, dispatch]);
  return (
    <Wrapper>
      {Object.entries(sightingParameters).map(([key, parameter]) => (
        <Parameter key={parameter.name}>
          <div>{parameter.name}</div>
          <div>{`${parameter.data} °`}</div>
        </Parameter>
      ))}
    </Wrapper>
  );
};

export default SightingParameters;

const Wrapper = styled.section`
  display: flex;
  margin: 5px 0;
`;
const Parameter = styled.div`
  margin: 0 5px;
  color: #242424;

  font-size: 1.2em;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
