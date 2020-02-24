import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './Context';

import Header from './Component/Layout/Header';
import Contacts from './Component/Contact/Contacts';
import AddContact from './Component/Contact/AddContact';
import EditContact from './Component/Contact/EditContact';
import About from './Component/Pages/About';
import NotFound from './Component/Pages/NotFound';

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoA11y = true;

function App() {
  return (
    <Provider>
      <Router>
        <div className="App pb-5">
          <Header />
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
