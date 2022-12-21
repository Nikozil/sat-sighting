import React from 'react';
import { Placemark } from 'react-yandex-maps';
import satIcon from '../../../assets/images/satellite2.svg';
import { Coordinates } from '../../../Redux/modules/satellitesSlice';

const SatellitePlacemark: React.FC<PropTypes> = ({ coordinates, name }) => {
  const balloonContent = (name: string) => `
  <div style="text-align: center;font-size: 1.5em"}>
 ${name}
</div>
  `;
  return (
    <Placemark
      geometry={coordinates}
      properties={{
        balloonContent: balloonContent(name),
      }}
      options={{
        iconLayout: 'default#image',
        iconImageHref: satIcon,
        iconImageSize: [45, 45],
        iconImageOffset: [-20, -25],
        iconColor: '#fa0536',
        cursor: 'pointer',
        draggable: false,
        hasBalloon: true,
        openBalloonOnClick: true,
        openEmptyBalloon: true,
        balloonCloseButton: false,
        hideIconOnBalloonOpen: false,
        balloonOffset: [0, -12],
        zIndex: 10,
      }}
      modules={['geoObject.addon.balloon']}
    />
  );
};

export default SatellitePlacemark;

interface PropTypes {
  coordinates: Coordinates;
  name: string;
}
