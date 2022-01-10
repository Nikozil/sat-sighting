import React, { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  GeoObject,
  Map,
  Placemark,
  Polygon,
  YMaps,
  YMapsApi,
} from 'react-yandex-maps';
import satIcon from '../../assets/images/satellite2.svg';
import { Coordinates } from '../../Redux/modules/satellitesSlice';
import { setUserCoordinatesThunk } from '../../Redux/modules/userSlice';
import { AppStateType } from '../../Redux/store';

const MapComponent = () => {
  const dispatch = useDispatch();
  const satellites = useSelector(
    (state: AppStateType) => state.satellites.satellites
  );
  const selectedSatellite = useSelector(
    (state: AppStateType) => state.user.userParameters.selectedSatellite
  );
  const userCoordinates = useSelector(
    (state: AppStateType) => state.user.user.coordinates
  );

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

  const balloonContent = (name: string) => `
                    <div style="text-align: center;font-size: 1.5em"}>
                   ${name}
                  </div>
                    `;
  return (
    <YMaps>
      <Map
        style={{
          minWidth: '320px',
          width: '100vw',
          height: 'calc(100vh - 270px)',
        }}
        defaultState={{
          center: [55.751574, 37.573856],
          zoom: 3,
        }}
        options={{
          suppressMapOpenBlock: true,
          minZoom: 2,
          //@ts-ignore

          // restrictMapArea: [
          //   [85, -178.9],
          //   [-85, 181],
          // ],
          // restrictMapArea: [[85], [-85]],
        }}
        onClick={onClickHandler}>
        <Placemark
          geometry={userCoordinates}
          properties={
            {
              // id: dot.id,
              // balloonContent: balloonContent(`${userCoordinates}`),
            }
          }
          options={{
            preset: 'islands#nightCircleDotIcon',
            iconColor: '#20232a',
            cursor: 'pointer',
            draggable: true,
          }}
          modules={['geoObject.addon.balloon']}
          onDrag={onDragHandler}
          onDragEnd={onDragEndHandler}
        />
        <GeoObject
          instanceRef={lineRef}
          geometry={{
            type: 'LineString',
            coordinates: [userCoordinates, selectedSatellite.coordinates],
          }}
          options={{
            geodesic: true,
            strokeWidth: 5,
            strokeColor: '#25006E',
            // strokeColor: '#61dafb',
          }}
        />
        {satellites.map((satellite) => (
          <Fragment key={satellite.name}>
            <Placemark
              geometry={satellite.coordinates}
              properties={{
                // id: satellite.id,
                balloonContent: balloonContent(satellite.name),
              }}
              options={{
                iconLayout: 'default#image',
                iconImageHref: satIcon,
                // iconImageSize: [30, 42],
                iconImageSize: [45, 45],
                // iconImageOffset: [-5, -38],
                iconImageOffset: [-20, -25],
                // preset: 'islands#nightCircleDotIcon',
                iconColor: '#fa0536',
                cursor: 'pointer',
                draggable: false,
                hasBalloon: true,
                openBalloonOnClick: true,
                openEmptyBalloon: true,
                balloonCloseButton: false,
                hideIconOnBalloonOpen: false,
                balloonOffset: [0, -12],
              }}
              modules={['geoObject.addon.balloon']}
            />
            <Polygon
              geometry={[satellite.area]}
              options={{
                fillColor: satellite.areaFillColor,
                strokeColor: satellite.areaStrokeColor,
                opacity: 0.3,
                strokeWidth: 6,
                strokeStyle: 'solid',
              }}
              onClick={onClickHandler}
            />
          </Fragment>
        ))}
      </Map>
    </YMaps>
  );
};

export default MapComponent;
