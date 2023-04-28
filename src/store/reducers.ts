import { appSlice } from './app/appSlice';
import { beerSlice } from './beer/beerSlice';

const reducers = {
  app: appSlice.reducer,
  beers: beerSlice.reducer,
};

export default reducers;
