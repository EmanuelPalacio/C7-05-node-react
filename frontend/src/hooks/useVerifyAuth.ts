import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/hooks';
import axios from 'axios';
import { API_URL, CONFIG_TOKEN } from '@/utils/config';

export default function useVerifyAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { isAuth } = useAppSelector((state) => state.Cashier);
  const cashierJwt = localStorage.getItem('cashierJwt');

  const isJwtValid = () => {
    axios
      .get(API_URL + 'auth', CONFIG_TOKEN)
      .then((response) => {
        if (response.status === 200) {
          setIsAuthenticated(true);
          // Agregar al redux cuando se confirme la data que regresa
        } else {
          setIsAuthenticated(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsAuthenticated(false);
      });
  };

  useEffect(() => {
    if (isAuth) return setIsAuthenticated(false);

    if (cashierJwt) {
      isJwtValid();
    }
  }, []);

  return [isAuthenticated];
}
