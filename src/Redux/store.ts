import { configureStore } from '@reduxjs/toolkit';
import reduxThunk, { ThunkAction } from 'redux-thunk';
import satellitesSlice from './modules/satellitesSlice';
import userSlice from './modules/userSlice';
import { AnyAction } from 'redux';

const reducer = {
  satellites: satellitesSlice.reducer,
  user: userSlice.reducer,
};

const store = configureStore({
  reducer,
  middleware: [reduxThunk],
});
export default store;

export type AppStateType = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AnyAction
>;
