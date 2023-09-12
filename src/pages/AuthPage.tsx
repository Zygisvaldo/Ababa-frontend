import React, { useState } from 'react';
import  Login  from '../components/AuthPage/LoginForm';
import  SignUp  from '../components/AuthPage/SignupForm';


export const AuthPage: React.FC = () => {
  
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div >
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Switch to SignUp' : 'Switch to Login'}
      </button>
      {isLogin ? <Login /> : <SignUp />}
    </div>
  );
};
