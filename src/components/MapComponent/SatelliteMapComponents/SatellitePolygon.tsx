import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Polygon, YMapsApi } from 'react-yandex-maps';
import {
  Coordinates,
  setIsInPolygoneThunk,
} from '../../../Redux/modules/satellitesSlice';
import { getCoordinates } from '../../../Redux/selectors/userSelectors';

const SatellitePolygon: React.FC<PropTypes> = ({
  name,
  area,
  areaFillColor,
  areaStrokeColor,
  onClick,
}) => {
  const dispatch = useDispatch();

  const userCoordinates = useSelector(getCoordinates);

  const polyRef = useCallback(
    (node) => {
      if (node !== null) {
        const name = node.properties.get('name');
        const isInPolygone = node.geometry.contains(userCoordinates);
        dispatch(setIsInPolygoneThunk(name, isInPolygone));
      }
    },
    [userCoordinates, dispatch]
  );

  return (
    <Polygon
      instanceRef={polyRef}
      geometry={[area]}
      properties={{
        name: name,
      }}
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
  name: string;
  area: Coordinates[];
  areaFillColor: string;
  areaStrokeColor: string;
  onClick: (e: YMapsApi) => void;
}
