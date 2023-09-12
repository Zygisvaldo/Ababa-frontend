import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface AuthFormProps {
  isLogin: boolean;
  switchToLogin: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, switchToLogin  }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError('Both username and password are required');
      return;
    }

    try {
      const url = isLogin ? 'http://localhost:3000/auth/login' : 'http://localhost:3000/auth/register';
      const response = await axios.post(url, { username, password });
      console.log(response.data);
      setSuccess(isLogin ? 'Login successful!' : 'Sign up successful! Please log in!');
      
      setTimeout(() => {
        setSuccess('');
        if (isLogin) {
          login(response.data.access_token)
        } else {
          switchToLogin(); 
        }
      }, 1500);
      
    } catch (error) {
      setError('Error occurred during authentication');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={{ width: '100%', marginTop: 2 }} spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
      </Stack>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
    </form>
  );
};

export default AuthForm;
