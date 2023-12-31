import { createSlice } from '@reduxjs/toolkit';
import { loadTokenFromLocalStorage, saveTokenToLocalStorage, removeTokenFromLocalStorage } from '../../utils/localStorage';


const initialState = {
    token: loadTokenFromLocalStorage(),
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        getToken: (state) => {
            state.token = loadTokenFromLocalStorage();
        },
        setToken: (state, action) => {
            state.token = action.payload;
            saveTokenToLocalStorage(state.token);
            
        },
        removeToken: (state) => {
            state.token = null;
            removeTokenFromLocalStorage();
        }
    },
});

export const { setToken, removeToken,getToken } = authSlice.actions;

export default authSlice.reducer;