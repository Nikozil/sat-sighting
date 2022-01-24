import React, { RefObject } from 'react';
import { GeoObject, YMapsApi } from 'react-yandex-maps';
import { Coordinates } from '../../../Redux/modules/satellitesSlice';

const SightLine: React.FC<PropTypes> = ({
  innerRef,
  userCoordinates,
  satelliteCoordinates,
}) => {
  return (
    <GeoObject
      instanceRef={innerRef}
      geometry={{
        type: 'LineString',
        coordinates: [userCoordinates, satelliteCoordinates],
      }}
      options={{
        geodesic: true,
        strokeWidth: 5,
        strokeColor: '#25006E',
        // strokeColor: '#61dafb',
      }}
    />
  );
};

export default SightLine;

interface PropTypes {
  innerRef: RefObject<YMapsApi>;
  userCoordinates: Coordinates;
  satelliteCoordinates: Coordinates;
}
