import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User, UserLogin } from '../../models/User';
import { loginService } from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { JwtDecode } from '../../types/jwtDecode';
import { getLocalStorage, setLocalStorage } from '../../utils';

const userLoginData: Pick<User, 'uid' | 'token'> | null = getLocalStorage('userLogin');
const initialState: User = {
  token: userLoginData?.token || '',
  uid: userLoginData?.uid || null,
  name: '',
  surname: '',
  companyName: '',
  email: '',
  error: {},
  status: 'idle',
};

export const login = createAsyncThunk('user/login', async (body: UserLogin, { rejectWithValue }) => {
  try {
    const data = await loginService(body);
    const { uid } = jwtDecode<JwtDecode>(data.token);
    const newObject = { uid, token: data.token };
    setLocalStorage('userLogin', newObject);
    return newObject;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.status = 'fulfilled';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'reject';
      state.error = action.error;
    });
  },
});

export default user.reducer;
