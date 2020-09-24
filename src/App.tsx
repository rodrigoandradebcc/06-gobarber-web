import React from 'react';
import GlobalStyle from './styles/global';
// import { Container } from './styles';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <SignIn />

      <GlobalStyle />
    </>
  );
};

export default App;
