import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User, UserLogin } from '../../models/User';
/* import { webTokenDecode } from '../../utils'; */
import { loginService } from '../../services/auth';

// Define the initial state using that type
const initialState: User = {
  token: '',
  uid: null,
  name: '',
  surname: '',
  companyName: '',
  email: '',
  error: {},
  status: 'idle',
};

export const login = createAsyncThunk('user/login', async (body: UserLogin, { rejectWithValue }) => {
  try {
    return await loginService(body);
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const user = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.status = 'fulfilled';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'reject';
      state.error = action.error;
    });
  },
});

export default user.reducer;
