import React, { useState } from 'react';
import  AuthForm  from '../components/AuthPage/AuthForm';

export const AuthPage: React.FC = () => {
  
  const [isLogin, setIsLogin] = useState(true);

  const switchToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div>
      {isLogin ? <AuthForm isLogin={isLogin} switchToLogin={switchToLogin} /> : <AuthForm isLogin={isLogin} switchToLogin={switchToLogin} />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to SignUp' : 'Switch to Login'}
      </button>
    </div>
  );
};
