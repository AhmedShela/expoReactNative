  
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import mntOrders from './reducers/mntOrders';



let reducers = combineReducers({ 
    mntOrders 
});
const store = configureStore({ reducer: reducers });
export default store;