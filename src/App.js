import React from 'react';
import{ Switch, Route } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';


const App = () => {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>,
      
    </div>
  );
}

export default App;