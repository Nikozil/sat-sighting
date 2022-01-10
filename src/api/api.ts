import axios from 'axios';
import { Coordinates } from '../Redux/modules/satellitesSlice';

export const instance = axios.create({
  baseURL: 'https://www.ngdc.noaa.gov/geomag-web/calculators',
});

export const getDeclination = async (coordinates: Coordinates) => {
  const latHemisphere = coordinates[0] > 0 ? 'N' : 'S';
  const lonHemisphere = coordinates[1] > 0 ? 'E' : 'W';

  const latitude = Math.abs(coordinates[0]);
  const longitude = Math.abs(coordinates[1]);

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  let response = await instance.get(
    `/calculateDeclination?browserRequest=true&magneticComponent=d&lat1=${latitude}&lat1Hemisphere=${latHemisphere}&lon1=${longitude}&lon1Hemisphere=${lonHemisphere}&model=WMM&startYear=${year}&startMonth=${month}&startDay=${day}&resultFormat=json`
  );

  return response.data.result[0].declination as number;
};
