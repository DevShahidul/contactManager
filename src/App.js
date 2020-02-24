import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Layout/Header';
import Contacts from './Component/Contact/Contacts';
import Provider from './Context';

import { config } from '@fortawesome/fontawesome-svg-core';
import AddContact from './Component/Contact/AddContact';
config.autoA11y = true;

function App() {
  return (
    <Provider>
      <div className="App pb-5">
        <Header />
        <AddContact />
        <Contacts />
      </div>
    </Provider>
  );
}

export default App;
