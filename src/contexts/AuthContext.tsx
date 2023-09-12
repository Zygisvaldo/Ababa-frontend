import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
  token: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const login = (newToken: string) => {
    setToken(newToken);
    navigate('/movies');
    console.log(newToken)
  };

  const logout = () => {
    setToken(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return React.useContext(AuthContext);
}

export default AuthProvider;


