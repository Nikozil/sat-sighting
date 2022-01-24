import React from 'react';
import { Polygon, YMapsApi } from 'react-yandex-maps';
import { Coordinates } from '../../../Redux/modules/satellitesSlice';

const SatellitePolygon: React.FC<PropTypes> = ({
  area,
  areaFillColor,
  areaStrokeColor,
  onClick,
}) => {
  return (
    <Polygon
      geometry={[area]}
      options={{
        fillColor: areaFillColor,
        strokeColor: areaStrokeColor,
        opacity: 0.3,
        strokeWidth: 6,
        strokeStyle: 'solid',
      }}
      onClick={onClick}
    />
  );
};

export default SatellitePolygon;

interface PropTypes {
  area: Coordinates[];
  areaFillColor: string;
  areaStrokeColor: string;
  onClick: (e: YMapsApi) => void;
}
