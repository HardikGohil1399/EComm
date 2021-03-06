import HomePage from './pages/homepage/homepage';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import './App.css';
import './components/header/header';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
export default App;
