import React, { Fragment } from 'react';
import { YMapsApi } from 'react-yandex-maps';
import { Satellite } from '../../../Redux/modules/satellitesSlice';
import SatellitePlacemark from './SatellitePlacemark';
import SatellitePolygon from './SatellitePolygon';

const SatelliteMapComponent: React.FC<PropTypes> = ({ satellite, onClick }) => {
  const { name, coordinates, area, areaFillColor, areaStrokeColor } = satellite;

  return (
    <Fragment>
      <SatellitePlacemark name={name} coordinates={coordinates} />
      <SatellitePolygon
        name={name}
        area={area}
        areaFillColor={areaFillColor}
        areaStrokeColor={areaStrokeColor}
        onClick={onClick}
      />
    </Fragment>
  );
};

export default SatelliteMapComponent;

interface PropTypes {
  satellite: Satellite;
  onClick: (e: YMapsApi) => void;
}
