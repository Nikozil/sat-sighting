import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDeclination } from '../../api/api';
import { calcAzimuth, calcElevationAngle } from '../../lib/functions';
import { AppThunk } from '../store';
import { Coordinates, Satellite } from './satellitesSlice';

export const initialState = {
  user: { coordinates: [56.185138378217, 36.97672197631281] } as User,
  userParameters: {
    selectedSatellite: { name: 'AMER', coordinates: [0, -98] },
    sightingImpossibly: false,
    sightingParameters: {
      elevationAngle: { name: 'Угол места', data: 0 },
      trueAzimuth: { name: 'Истинный азимут', data: 0 },
      magneticDeclination: { name: 'Магнитное склонение', data: 0 },
      magneticAzimuth: { name: 'Магнитный азимут', data: 0 },
    },
    isFetching: false,
  },
};

export type initialStateType = typeof initialState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserCoordinates: (state, action: PayloadAction<Coordinates>) => {
      state.user.coordinates = action.payload;
    },
    setSelectedSatellite: (state, action: PayloadAction<Satellite>) => {
      state.userParameters.selectedSatellite.name = action.payload.name;
      state.userParameters.selectedSatellite.coordinates =
        action.payload.coordinates;
    },
    setElevationAngle: (state, action: PayloadAction<number>) => {
      state.userParameters.sightingParameters.elevationAngle.data =
        action.payload;
    },
    setAzimuth: (state, action: PayloadAction<number>) => {
      state.userParameters.sightingParameters.trueAzimuth.data = action.payload;
    },
    setDeclination: (state, action: PayloadAction<number>) => {
      state.userParameters.sightingParameters.magneticDeclination.data =
        action.payload;
    },
    setMagneticAzimuth: (state, action: PayloadAction<number>) => {
      state.userParameters.sightingParameters.magneticAzimuth.data =
        action.payload;
    },
    setSightingImpossibly: (state, action: PayloadAction<boolean>) => {
      state.userParameters.sightingImpossibly = action.payload;
    },
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.userParameters.isFetching = action.payload;
    },
  },
});

export const {
  setUserCoordinates,
  setSelectedSatellite,
  setElevationAngle,
  setAzimuth,
  setDeclination,
  setMagneticAzimuth,
  setSightingImpossibly,
  setIsFetching,
} = userSlice.actions;

export default userSlice;

export const setUserCoordinatesThunk =
  (coordinates: Coordinates): AppThunk =>
  (dispatch, getState) => {
    dispatch(setUserCoordinates(coordinates));
  };

export const setSelectedSatelliteThunk =
  (name: string): AppThunk =>
  (dispatch, getState) => {
    const satellites = getState().satellites.satellites;
    const satellite = satellites.filter(
      (satellite) => satellite.name === name
    )[0];

    dispatch(setSelectedSatellite(satellite));

    dispatch(setSightingParametersThunk());
  };

export const setElevationAngleThunk = (): AppThunk => (dispatch, getState) => {
  const satelliteCoordinates =
    getState().user.userParameters.selectedSatellite.coordinates;
  const userCoordinates = getState().user.user.coordinates;

  const elevationAngle = calcElevationAngle(
    userCoordinates[0],
    userCoordinates[1],
    satelliteCoordinates[1]
  );

  dispatch(setElevationAngle(elevationAngle));
};

export const setAzimuthThunk = (): AppThunk => (dispatch, getState) => {
  const satelliteCoordinates =
    getState().user.userParameters.selectedSatellite.coordinates;
  const userCoordinates = getState().user.user.coordinates;

  const azimuth = calcAzimuth(
    userCoordinates[0],
    userCoordinates[1],
    satelliteCoordinates[1]
  );

  dispatch(setAzimuth(azimuth));
};

export const setDeclinationThunk =
  (): AppThunk => async (dispatch, getState) => {
    const userCoordinates = getState().user.user.coordinates;

    const data = await getDeclination(userCoordinates);
    const declination = +data.toFixed(1);

    dispatch(setDeclination(declination));
  };

export const setMagneticAzimuthThunk =
  (): AppThunk => async (dispatch, getState) => {
    const userCoordinates = getState().user.user.coordinates;
    const azimuth =
      getState().user.userParameters.sightingParameters.trueAzimuth.data;
    const declination =
      getState().user.userParameters.sightingParameters.magneticDeclination
        .data;

    const longitude = userCoordinates[1];
    const magneticAzimuth =
      longitude > 0 ? azimuth - declination : azimuth + declination;
    const fixedMagneticAzimuth = +magneticAzimuth.toFixed(1);

    dispatch(setMagneticAzimuth(fixedMagneticAzimuth));
  };

export const setSightingParametersThunk =
  (): AppThunk => async (dispatch, getState) => {
    const selected = getState().user.userParameters.selectedSatellite;
    const satellites = getState().satellites.satellites;
    const isInPolygone = satellites.filter(
      (satellite) => satellite.name === selected.name
    )[0].isInPolygone;

    if (isInPolygone) {
      dispatch(setIsFetching(true));

      dispatch(setSightingImpossibly(false));

      await dispatch(setDeclinationThunk());
      await dispatch(setMagneticAzimuthThunk());
      dispatch(setElevationAngleThunk());
      dispatch(setAzimuthThunk());

      dispatch(setIsFetching(false));
    } else {
      dispatch(setSightingImpossibly(true));
    }
  };
export interface User {
  coordinates: Coordinates;
}
