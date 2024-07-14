import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from '../reducers/Reducers';

const store = configureStore({
  reducer: {
    booking: bookingReducer
  }
});

export default store;
