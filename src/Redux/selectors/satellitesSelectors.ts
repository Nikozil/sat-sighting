import { createSelector } from '@reduxjs/toolkit';
import { AppStateType } from '../store';

export const getSatellites = (state: AppStateType) =>
  state.satellites.satellites;

export const getAreasCheckCount = (state: AppStateType) =>
  state.satellites.areasCheckCount;

export const getCashedAreasCheckCount = createSelector(
  getAreasCheckCount,
  getSatellites,
  (count, satellites) => {
    if (count % satellites.length === 0) {
      return true;
    }
  }
);
