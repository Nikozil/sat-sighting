import { Coordinates } from '../Redux/modules/satellitesSlice';

export const formatCoordinatesArray = (string: string) => {
  return string
    .replace(/,/g, '.')
    .split(/°[EW]\n?/)
    .map((coords) => coords.split(/°[SN] /))
    .slice(0, -1)
    .map((coordinates) =>
      coordinates.map((coordinate) => parseFloat(coordinate))
    );
};

export const calcElevationAngle = (
  userLatidute: number,
  userLongitude: number,
  satelliteLongitude: number
) => {
  const longitudeDifference = satelliteLongitude - userLongitude;

  const grad = longitudeDifference / 57.29578;
  const lrad = userLatidute / 57.29578;

  const a = Math.cos(grad);
  const b = Math.cos(lrad);
  const elevation = Math.atan(
    (a * b - 0.1512) / Math.sqrt(1 - a * a * (b * b))
  );

  return +(elevation * 57.29578).toFixed(1);
};

export const calcAzimuth = (
  userLatidute: number,
  userLongitude: number,
  satelliteLongitude: number
) => {
  const longitudeDifference = satelliteLongitude - userLongitude;

  const grad = longitudeDifference / 57.29578;
  const lrad = userLatidute / 57.29578;

  const azi = 3.14159 - Math.atan(Math.tan(grad) / Math.sin(lrad));

  return +(azi * 57.29578).toFixed(1);
};

export const isCoordinate = (string: string) =>
  /^-?[0-9]*\.?[0-9]*$/.test(string);

export const formatCoordinates = (coordinates: Coordinates): Coordinates => [
  +coordinates[0].toFixed(2),
  +coordinates[1].toFixed(2),
];
