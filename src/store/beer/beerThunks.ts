import {
  IRequestData,
  IResponseErrors,
} from 'helpers/global.types';
import BeerAPI from './beerAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setSnackbarState } from '../app/appSlice';

export const getBeersAsync = createAsyncThunk(
  'beersList/get',
  async (requestData:IRequestData, { rejectWithValue, dispatch }) => {
    try {
      const response = await BeerAPI.getBeersList(requestData);
      return response?.data;
    } catch (err) {
      let error = err as IResponseErrors; // cast the error for access
      if (!error?.response) {
        throw err;
      }
      dispatch(
        setSnackbarState({
          message: error.response.data.message,
          isSnackbarVisible: true,
        }),
      );
      return rejectWithValue(error.response.data);
    }
  },
);
