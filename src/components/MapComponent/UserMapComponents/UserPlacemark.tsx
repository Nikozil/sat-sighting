import React from 'react';
import { Placemark, YMapsApi } from 'react-yandex-maps';
import { Coordinates } from '../../../Redux/modules/satellitesSlice';

const UserPlacemark: React.FC<PropTypes> = ({
  userCoordinates,
  onDrag,
  onDragEnd,
}) => {
  return (
    <Placemark
      geometry={userCoordinates}
      properties={{}}
      options={{
        preset: 'islands#nightCircleDotIcon',
        iconColor: '#20232a',
        cursor: 'pointer',
        draggable: true,
      }}
      modules={['geoObject.addon.balloon']}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
    />
  );
};

export default UserPlacemark;

interface PropTypes {
  userCoordinates: Coordinates;
  onDrag: (e: YMapsApi) => void;
  onDragEnd: (e: YMapsApi) => void;
}
