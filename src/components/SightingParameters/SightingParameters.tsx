import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Spinner from '../../assets/Spinner/Spinner';
import { setSightingParametersThunk } from '../../Redux/modules/userSlice';
import { getCashedAreasCheckCount } from '../../Redux/selectors/satellitesSelectors';
import {
  getCoordinates,
  getInitialization,
  getIsFetching,
  getSelectedSatellite,
  getSightingImpossibly,
  getSightingParameters,
} from '../../Redux/selectors/userSelectors';

const SightingParameters = () => {
  const dispatch = useDispatch();

  const coordinates = useSelector(getCoordinates);
  const sightingParameters = useSelector(getSightingParameters);
  const sightingImpossibly = useSelector(getSightingImpossibly);
  const selectedSatellite = useSelector(getSelectedSatellite);
  const isFetching = useSelector(getIsFetching);
  const initialization = useSelector(getInitialization);

  const areasCheckCountChanged = useSelector(getCashedAreasCheckCount);

  useEffect(() => {
    dispatch(setSightingParametersThunk());
  }, [areasCheckCountChanged, coordinates, dispatch]);

  return (
    <Wrapper>
      {initialization ? (
        sightingImpossibly ? (
          <Alert>Терминал вне зоны покрытия выбранного спутника</Alert>
        ) : (
          <>
            {Object.entries(sightingParameters).map(([key, parameter]) => (
              <Parameter key={parameter.name}>
                <div>{parameter.name}</div>
                <ParameterData>
                  {isFetching ? <Spinner /> : `${parameter.data} °`}
                </ParameterData>
              </Parameter>
            ))}
            <Parameter key={selectedSatellite.name}>
              <div>Координаты спутника</div>
              <ParameterData>
                {isFetching ? (
                  <Spinner />
                ) : (
                  `${selectedSatellite.coordinates[0]}, ${selectedSatellite.coordinates[1]}`
                )}
              </ParameterData>
            </Parameter>
          </>
        )
      ) : (
        <Spinner size={50} />
      )}
    </Wrapper>
  );
};

export default SightingParameters;

const Wrapper = styled.section`
  display: flex;
  margin: 5px 0;
  height: 100px;
  @media (max-width: 768px) {
    height: 60px;
  }
`;
const Parameter = styled.div`
  margin: 0 5px;
  color: #242424;
  text-align: center;
  font-size: 1.2em;
  font-weight: 900;
  @media (max-width: 1024px) {
    font-size: 1em;
  }
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
  @media (max-width: 576px) {
    font-size: 0.7em;
  }
`;
const Alert = styled.div`
  color: #242424;
  font-size: 1.9em;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;
const ParameterData = styled.div`
  height: 25px;
`;
