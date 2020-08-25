import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import MyWallet from './Components/MyWallet';

function App() {
  return (
    <div className="App">
      <Container>
        <MyWallet/>
      </Container>
    </div>
  );
}

export default App;
