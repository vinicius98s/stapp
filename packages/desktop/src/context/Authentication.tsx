import React from 'react';

export interface Authentication {
  token: string;
  isAuthenticated: boolean;
  setToken?: (token: string) => void;
}

export const AuthenticationContext = React.createContext<Authentication>({
  token: '',
  isAuthenticated: false,
});
