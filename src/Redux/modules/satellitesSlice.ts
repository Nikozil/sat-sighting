import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

export const initialState = {
  satellites: [
    {
      name: 'AMER',
      coordinates: [0, -98],
      area: [
        [75.39, -98],
        [56.41, -33.53],
        [0, -21.3],
        [-51.46, -30.41],
        [-75.39, -97.56],
        [-57.85, -165.91],
        [0, -175.05],
        [56.44, -162.91],
      ],
      // areaFillColor: '#3869A0',
      areaFillColor: '#17273A',
      areaStrokeColor: '#26486E',
      isInPolygone: false,
    },
    {
      name: 'EMEA',
      coordinates: [0, 25],
      area: [
        [78.25, 20.32],
        [62.85, 85.87],
        [0, 70.87],
        [-53.14, 81.58],
        [-78.9, 18.53],
        [-57.47, -39.58],
        [0, -32.58],
        [52.16, -43.08],
      ],
      areaFillColor: '#1DDE1D',
      areaStrokeColor: '#0C5E0C',
      isInPolygone: false,
    },
    {
      name: 'MEAS',
      coordinates: [0, 64],
      area: [
        [75.22, 62.69],
        [56.51, 129.12],
        [0, 140.8],
        [-56.51, 128.72],
        [-75.5, 63.61],
        [-56.71, -0.92],
        [0, -13.19],
        [56.51, -0.92],
      ],
      areaFillColor: '#F03F00',
      areaStrokeColor: '#701E00',
      isInPolygone: false,
    },
    {
      name: 'APAC',
      coordinates: [0, 143.5],
      area: [
        [75.21, 141.67],
        [56.21, -151.43],
        [0, -139.36],
        [-56.62, -151.48],
        [-75.81, 142.21],
        [-56.71, 78.38],
        [0, 66.31],
        [56.51, 78.58],
      ],
      areaFillColor: '#8D00A3',
      areaStrokeColor: '#610070',
      isInPolygone: false,
    },
  ] as Satellite[],
};

export type initialStateType = typeof initialState;

const satellitesSlice = createSlice({
  name: 'satellites',
  initialState,
  reducers: {
    setIsInPolygone: (
      state,
      action: PayloadAction<{ name: string; isInPolygone: boolean }>
    ) => {
      state.satellites.filter(
        (satellite) => satellite.name === action.payload.name
      )[0].isInPolygone = action.payload.isInPolygone;
    },
  },
});

export const { setIsInPolygone } = satellitesSlice.actions;

export default satellitesSlice;

export const setIsInPolygoneThunk =
  (name: string, isInPolygone: boolean): AppThunk =>
  (dispatch, getState) => {
    dispatch(setIsInPolygone({ name, isInPolygone }));
  };

export interface Satellite {
  name: string;
  coordinates: Coordinates;
  area: Coordinates[];
  areaFillColor: string;
  areaStrokeColor: string;
  isInPolygone: boolean;
}

export type Coordinates = number[];
