import { createSlice } from '@reduxjs/toolkit';
import { LoadStatus, IResponseDataErrors, IBeerItem } from 'helpers/global.types';
import { getBeersAsync } from './beerThunks';
import { RootState } from '../index';

const initialState: any = {
  status: LoadStatus.Idle,
  list: [],
  error: {},
};

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {
    resetCurrentCityData: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getBeersAsync.pending, (state: any) => {
      state.status = LoadStatus.Loading;
    });
    builder.addCase(getBeersAsync.fulfilled, (state: any, { payload }: { payload: IBeerItem[] }) => {
      state.status = LoadStatus.Success;
      state.list = [...state.list, ...payload];
    });
    builder.addCase(getBeersAsync.rejected, (state: any, { payload }) => {
      console.log({ payload });
      state.status = LoadStatus.Failed;
      state.error = payload as IResponseDataErrors;
    });
  },
});

export const { resetCurrentCityData } = beerSlice.actions;

export const beersSelector = (state: RootState) => state.beers;
export const beersListSelector = (state: RootState) => state.beers.list;
export const beersListLoadingSelector = (state: RootState) =>
  state.beers.status;

export default beerSlice.reducer;
