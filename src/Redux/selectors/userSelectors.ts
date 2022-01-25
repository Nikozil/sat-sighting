import { AppStateType } from '../store';

export const getSelectedSatellite = (state: AppStateType) =>
  state.user.userParameters.selectedSatellite;

export const getCoordinates = (state: AppStateType) =>
  state.user.user.coordinates;

export const getSightingParameters = (state: AppStateType) =>
  state.user.userParameters.sightingParameters;

export const getSelectedSatelliteName = (state: AppStateType) =>
  state.user.userParameters.selectedSatellite.name;

export const getSightingImpossibly = (state: AppStateType) =>
  state.user.userParameters.sightingImpossibly;

export const getIsFetching = (state: AppStateType) =>
  state.user.userParameters.isFetching;
