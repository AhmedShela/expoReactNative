import { createSlice } from '@reduxjs/toolkit';

const mntOrders = createSlice({
    name:'mntOrders',
    initialState : {    
        mntOrders: []
    },
    reducers: {
        setMntOrders(state, action) {
            // console.log("in add state!! ");
            state.mntOrders = action.payload.results || action.payload.result
        },
        addOrder(state, action) {
            // console.log("in add state!! ");
            state.mntOrders.push(action.payload)
        },

    }
});


export const { setMntOrders,addOrder } = mntOrders.actions;

export default mntOrders.reducer;