import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User, UserLogin, UserRegister } from '../../models/User';
import { loginService } from '../../services/auth';
import jwtDecode from 'jwt-decode';
import { JwtDecode } from '../../types/jwtDecode';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../../utils';
import { registerSerivce } from '../../services/user';

const storageState = getLocalStorage<Pick<User, 'uid' | 'token' | 'email'> | null>('userLogin');
const userState: User = {
  token: '',
  uid: null,
  name: '',
  surname: '',
  companyName: '',
  email: '',
  error: undefined,
  status: 'idle',
};
const initialState = storageState ? { ...userState, ...storageState } : userState;

export const login = createAsyncThunk('user/login', async (body: UserLogin, { rejectWithValue }) => {
  try {
    const data = await loginService(body);
    const { uid } = jwtDecode<JwtDecode>(data.token);
    const newObject = { uid, token: data.token, email: body.email };
    setLocalStorage('userLogin', newObject);
    return newObject;
  } catch (error) {
    clearLocalStorage();
    return rejectWithValue(error);
  }
});
export const register = createAsyncThunk('user/register', async (body: UserRegister, { rejectWithValue }) => {
  try {
    return await registerSerivce(body);
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    logOut: () => {
      clearLocalStorage();
      return userState;
    },
    errorUserClear: (state) => (state.error = undefined),
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, () => {
      return { ...initialState, status: 'pending' };
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.uid = action.payload.uid;
      state.status = 'fulfilled';
    });
    builder.addCase(login.rejected, (_state, action) => {
      return { ...initialState, status: 'reject', error: action.payload };
    });
    builder.addCase(register.pending, (state) => {
      state.status = 'pending';
    });
    builder.addCase(register.fulfilled, (state) => {
      state.status = 'fulfilled';
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = 'reject';
      state.error = action.payload;
    });
  },
});
export const { reset, errorUserClear, logOut } = user.actions;

export default user.reducer;
