import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Spinner from '../../assets/Spinner/Spinner';
import { setSightingParametersThunk } from '../../Redux/modules/userSlice';
import {
  getCoordinates,
  getIsFetching,
  getSightingImpossibly,
  getSightingParameters,
} from '../../Redux/selectors/userSelectors';

const SightingParameters = () => {
  const dispatch = useDispatch();

  const sightingParameters = useSelector(getSightingParameters);
  const userCoordinates = useSelector(getCoordinates);
  const sightingImpossibly = useSelector(getSightingImpossibly);
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    dispatch(setSightingParametersThunk());
  }, [userCoordinates, dispatch]);

  return (
    <Wrapper>
      {sightingImpossibly ? (
        <Alert>Наведение невозможно</Alert>
      ) : (
        Object.entries(sightingParameters).map(([key, parameter]) => (
          <Parameter key={parameter.name}>
            <div>{parameter.name}</div>
            <ParameterData>
              {isFetching ? <Spinner /> : `${parameter.data} °`}
            </ParameterData>
          </Parameter>
        ))
      )}
    </Wrapper>
  );
};

export default SightingParameters;

const Wrapper = styled.section`
  display: flex;
  margin: 5px 0;
  height: 100px;
`;
const Parameter = styled.div`
  margin: 0 5px;
  color: #242424;
  text-align: center;
  font-size: 1.2em;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 1em;
  }
  @media (max-width: 576px) {
    font-size: 0.9em;
  }
`;
const Alert = styled.div`
  color: #242424;
  font-size: 1.9em;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;
const ParameterData = styled.div`
  height: 25px;
`;
