import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Layout/Header';
import Contacts from './Component/Contact/Contacts';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoA11y = true;

function App() {
  return (
    <div className="App">
      <Header />
      <Contacts />
    </div>
  );
}

export default App;
