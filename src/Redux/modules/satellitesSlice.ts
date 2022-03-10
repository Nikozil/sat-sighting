import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

export const initialState = {
  areasCheckCount: 0,
  satellites: [
    {
      name: 'AMER',
      coordinates: [0, -98],
      area: [
        [77.71, -103.97],
        [75.05, -63.46],
        [72.3, -55.77],
        [66.12, -40.15],
        [58.08, -32.95],
        [50.32, -28.95],
        [42.29, -26.45],
        [37.5, -25.42],
        [28.54, -24.02],
        [23.68, -23.51],
        [15.33, -22.91],
        [7.63, -22.6],
        [-0.11, -22.5],
        [-7.81, -22.6],
        [-15.46, -22.92],
        [-23.88, -23.53],
        [-28.65, -24.05],
        [-37.67, -25.44],
        [-42.28, -26.44],
        [-50.39, -28.99],
        [-58.7, -33.36],
        [-66.26, -40.67],
        [-69.55, -46.03],
        [-75.43, -65.43],
        [-77.68, -106.7],
        [-76.64, -121.55],
        [-70.93, -146.99],
        [-63.81, -158.31],
        [-56.19, -164.27],
        [-48.62, -167.88],
        [-40.32, -170.02],
        [-32.08, -171.51],
        [-27.45, -172.1],
        [-18.88, -172.87],
        [-11.41, -173.29],
        [-3.95, -173.48],
        [3.82, -173.48],
        [11.35, -173.29],
        [18.74, -172.89],
        [26.61, -172.2],
        [32.05, -171.52],
        [40.84, -169.9],
        [48.6, -167.69],
        [56.5, -164.06],
        [64.0, -158.06],
        [70.54, -147.84],
        [76.45, -123.12],
      ],

      areaFillColor: '#17273A',
      areaStrokeColor: '#26486E',
      isInPolygone: false,
    },
    {
      name: 'EMEA',
      coordinates: [0, 25],
      area: [
        [78.0, 12.0],
        [77.0, 45.0],
        [75.0, 62.0],
        [70.0, 77.0],
        [63.0, 86.0],
        [56.0, 85.0],
        [49.0, 84.0],
        [43.0, 83.0],
        [34.0, 80.0],
        [26.0, 77.0],
        [22.0, 76.0],
        [15.0, 73.0],
        [9.0, 72.0],
        [3.0, 71.0],
        [-3.0, 71.0],
        [-16.0, 72.0],
        [-23.0, 74.0],
        [-37.0, 77.0],
        [-43.0, 78.0],
        [-53.0, 82.0],
        [-73.0, 68.0],
        [-77.0, 44.0],
        [-77.0, -16.0],
        [-66.0, -33.0],
        [-61.0, -38.0],
        [-55.0, -39.0],
        [-48.0, -36.0],
        [-43.0, -36.0],
        [-37.0, -34.0],
        [-35.0, -34.0],
        [-27.0, -32.0],
        [-21.0, -32.0],
        [-12.0, -30.0],
        [-7.0, -31.0],
        [1.0, -33.0],
        [7.0, -34.0],
        [12.0, -35.0],
        [22.0, -38.0],
        [30.0, -40.0],
        [32.0, -40.0],
        [41.0, -41.0],
        [45.0, -44.0],
        [55.0, -42.0],
        [58.0, -42.0],
        [66.0, -34.0],
        [67.0, -26.0],
        [75.0, -7.0],
      ],

      areaFillColor: '#1DDE1D',
      areaStrokeColor: '#0C5E0C',
      isInPolygone: false,
    },
    {
      name: 'MEAS',
      coordinates: [0, 64],
      area: [
        [77.69, 58.05],
        [75.05, 98.51],
        [72.29, 109.24],
        [66.09, 121.5],
        [58.07, 129.06],
        [50.3, 133.02],
        [42.26, 135.52],
        [37.52, 136.59],
        [28.53, 137.96],
        [23.69, 138.49],
        [15.32, 139.1],
        [7.64, 139.4],
        [0.0, 139.5],
        [-7.79, 139.4],
        [-15.46, 139.09],
        [-23.88, 138.47],
        [-28.65, 137.96],
        [-37.67, 136.56],
        [-42.27, 135.55],
        [-50.39, 133.01],
        [-58.7, 128.66],
        [-66.26, 121.33],
        [-69.54, 115.97],
        [-75.41, 96.56],
        [-77.67, 55.73],
        [-76.65, 40.46],
        [-70.91, 15.02],
        [-63.78, 3.7],
        [-56.17, -2.26],
        [-48.61, -5.68],
        [-40.32, -8.02],
        [-32.07, -9.51],
        [-27.44, -10.11],
        [-18.88, -10.88],
        [-11.42, -11.28],
        [-3.95, -11.48],
        [3.82, -11.48],
        [11.35, -11.28],
        [18.75, -10.89],
        [26.62, -10.2],
        [32.05, -9.51],
        [40.84, -7.9],
        [48.6, -5.68],
        [56.5, -2.06],
        [64.0, 3.93],
        [70.54, 14.16],
        [76.46, 38.9],
      ],

      areaFillColor: '#F03F00',
      areaStrokeColor: '#701E00',
      isInPolygone: false,
    },
    {
      name: 'APAC',
      coordinates: [0, 143.5],

      area: [
        [77.69, -222.45],
        [75.0, -182.0],
        [72.29, -171.29],
        [66.0, -159.0],
        [58.0, -151.43],
        [50.32, -147.46],
        [42.28, -144.95],
        [37.53, -143.91],
        [28.54, -142.53],
        [23.69, -142.0],
        [15.32, -141.4],
        [7.65, -141.1],
        [-0.1, -141.0],
        [-7.79, -141.1],
        [-15.45, -141.41],
        [-23.88, -142.0],
        [-28.65, -142.54],
        [-37.67, -143.93],
        [-42.27, -144.95],
        [-50.38, -147.49],
        [-58.7, -151.84],
        [-66.27, -159.17],
        [-69.54, -164.53],
        [-75.41, -183.94],
        [-77.67, -225.0],
        [-76.64, -240.04],
        [-70.91, -264.49],
        [-63.79, -276.8],
        [-56.17, -282.76],
        [-48.61, -286.18],
        [-40.32, -288.52],
        [-32.08, -290.0],
        [-27.0, -290.6],
        [-18.88, -291.38],
        [-11.42, -291.78],
        [-3.95, -291.98],
        [3.82, -291.98],
        [11.34, -291.79],
        [18.75, -291.39],
        [26.61, -290.7],
        [32.05, -290.0],
        [40.84, -288.4],
        [48.6, -286.18],
        [56.5, -282.56],
        [64.0, -276.57],
        [70.54, -266.34],
        [76.47, -241.6],
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
    setCount: (state) => {
      state.areasCheckCount += 1;
    },
  },
});

export const { setIsInPolygone, setCount } = satellitesSlice.actions;

export default satellitesSlice;

export const setIsInPolygoneThunk =
  (name: string, isInPolygone: boolean): AppThunk =>
  (dispatch, getState) => {
    dispatch(setIsInPolygone({ name, isInPolygone }));
    dispatch(setCount());
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
