import { AppStateType } from '../store';

export const getSatellites = (state: AppStateType) =>
  state.satellites.satellites;
