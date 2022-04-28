import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem('userToken'))

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
};

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        return await authService.register(userData)
        
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || (err.message) || err.toString();
        return thunkAPI.rejectWithValue(message)
    }
});
export const login = createAsyncThunk();
export const logout = createAsyncThunk();

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                register.pending,
                (state) => {
                    state.isLoading = true;
                }
            )
            .addCase(
                register.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.user = action.payload;
                }
            )
            .addCase(
                register.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                    state.user = null;
                }
            )
            .addCase(
                login.pending,
                (state) => {
                    state.isLoading = true;
                }
            )
            .addCase(
                login.fulfilled,
                (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.user = action.payload;
                }
            )
            .addCase(
                login.rejected,
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.message = action.payload;
                    state.user = null;
                }
            )
            .addCase(
                logout.fulfilled,
                (state) => {
                    state.user = null;
                }
            );
    },
});

export default authSlice.reducer;