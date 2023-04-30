import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Detail } from './App/4Pages/Detail/Detail';
import { Home } from './App/4Pages/Home/Home';
import React from 'react';
import './App.scss';

export const App = () => {
  return (
    <div className='cont'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/detail' component={Detail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};