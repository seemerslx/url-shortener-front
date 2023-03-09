import React from 'react';
import './App.css';
import AuthContextProvider from './components/Auth/AuthContextProvider';
import MyRouter from './router/router-config';

function App() {
  return (
    <AuthContextProvider>
      <MyRouter />
    </AuthContextProvider>
  );
}

export default App;
