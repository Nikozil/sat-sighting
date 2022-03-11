import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Map, YMaps, YMapsApi } from 'react-yandex-maps';
import { Coordinates } from '../../Redux/modules/satellitesSlice';
import { setUserCoordinatesThunk } from '../../Redux/modules/userSlice';
import { getSatellites } from '../../Redux/selectors/satellitesSelectors';
import {
  getCoordinates,
  getSelectedSatellite,
} from '../../Redux/selectors/userSelectors';
import SatelliteMapComponent from './SatelliteMapComponents/SatelliteMapComponent';
import SightLine from './UserMapComponents/SightLine';
import UserPlacemark from './UserMapComponents/UserPlacemark';

const MapComponent = () => {
  const dispatch = useDispatch();

  const satellites = useSelector(getSatellites);
  const selectedSatellite = useSelector(getSelectedSatellite);
  const userCoordinates = useSelector(getCoordinates);

  const lineRef = useRef<YMapsApi>(null);

  const onDragHandler = (e: YMapsApi) => {
    const newCoordinates = e
      .get('target')
      .geometry.getCoordinates() as Coordinates;

    lineRef?.current?.geometry.setCoordinates([
      newCoordinates,
      selectedSatellite.coordinates,
    ]);
  };

  const onDragEndHandler = (e: YMapsApi) => {
    const newCoordinates = e
      .get('target')
      .geometry.getCoordinates() as Coordinates;

    dispatch(setUserCoordinatesThunk(newCoordinates));
  };

  const onClickHandler = (e: YMapsApi) => {
    const newCoordinates = e.get('coords') as Coordinates;

    dispatch(setUserCoordinatesThunk(newCoordinates));
  };

  return (
    <YMaps>
      <Map
        style={{
          minWidth: '320px',
          width: '100vw',
          height: '100%',
        }}
        defaultState={{
          center: [55.751574, 37.573856],
          zoom: 3,
        }}
        options={{
          suppressMapOpenBlock: true,
          minZoom: 3,
          //@ts-ignore

          // restrictMapArea: [
          //   [85, -178.9],
          //   [-85, 181],
          // ],
          // restrictMapArea: [[85], [-85]],
        }}
        onClick={onClickHandler}>
        <UserPlacemark
          userCoordinates={userCoordinates}
          onDrag={onDragHandler}
          onDragEnd={onDragEndHandler}
        />
        <SightLine
          innerRef={lineRef}
          userCoordinates={userCoordinates}
          satelliteCoordinates={selectedSatellite.coordinates}
        />

        {satellites.map((satellite) => (
          <SatelliteMapComponent
            key={satellite.name}
            satellite={satellite}
            onClick={onClickHandler}
          />
        ))}
      </Map>
    </YMaps>
  );
};

export default MapComponent;
