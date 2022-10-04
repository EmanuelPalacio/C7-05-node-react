import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import axios from 'axios';
import { API_URL, CONFIG_TOKEN } from '@/utils/config';
import { useAppDispatch } from '../redux/hooks';
import { setCashierJwt } from '@/redux/slices/cashierSlice';

export default function useVerifyAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<undefined | boolean>(undefined);

  const dispatch = useAppDispatch();

  const { isAuth } = useAppSelector((state) => state.Cashier);
  const cashierJwt = localStorage.getItem('cashierJwt');

  const isJwtValid = () => {
    axios
      .get(API_URL + '/auth', CONFIG_TOKEN)
      .then((response) => {
        if (response.status === 200) {
          cashierJwt && dispatch(setCashierJwt(cashierJwt));
          setIsAuthenticated(true);
          // Agregar al redux cuando se confirme la data que regresa
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        setIsAuthenticated(false);
      });
  };

  useEffect(() => {
    if (isAuth) return setIsAuthenticated(true);

    if (cashierJwt) return isJwtValid();

    return setIsAuthenticated(false);
  }, [isAuth]);

  return [isAuthenticated];
}
