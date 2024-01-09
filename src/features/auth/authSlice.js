import { createSlice } from '@reduxjs/toolkit';
import { loadTokenFromLocalStorage, saveTokenToLocalStorage, removeTokenFromLocalStorage,saveJWTTokenToLocalStorage,loadJWTTokenFromLocalStorage,removeJWTTokenFromLocalStorage } from '../../utils/localStorage';


const initialState = {
    token: loadTokenFromLocalStorage(),
    jwtToken: loadJWTTokenFromLocalStorage()
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
        },
        getJWTToken: (state) => {
            state.jwtToken = loadJWTTokenFromLocalStorage();
        },
        setJWTToken: (state, action) => {
            state.jwtToken = action.payload;
            saveJWTTokenToLocalStorage(state.jwtToken);
            
        },
        removeJWTToken: (state) => {
            state.jwtToken = null;
            removeJWTTokenFromLocalStorage();
        },
    },
});

export const { setToken, removeToken,getToken, setJWTToken, removeJWTToken, getJWTToken } = authSlice.actions;

export default authSlice.reducer;