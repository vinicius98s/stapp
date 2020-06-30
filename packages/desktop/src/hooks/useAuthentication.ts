import { useState, useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useAuthentication() {
  const [token, setToken] = useLocalStorage('@stapp/authentication', '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  return { isAuthenticated, token, setToken };
}
