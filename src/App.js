import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { auth } from './firebaseConfig';

import Start from './Views/Start';
import Signup from './Views/signup';
import Login from './Views/login';
import Dashboard from './Views/Dashboard';

import './App.css';
//import Landing from './Views/Landing';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  //const [pending, setPending] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //console.log(user)
      if (user) {
        localStorage.setItem('newUser', JSON.stringify(user.uid));
        setIsUserLoggedIn(true);
      }
      else {
        setIsUserLoggedIn(false); 
        console.log('no está logueado');
      }
      setLoading(false);
      return console.log('CLEAN UP Funtion');
    });
  }, []);

  if (loading) return <span>Loading...</span>;

  return (
<Router>
      <Switch>
        <Route exact path='/'>
          <Start />
        </Route>
        <Route path="/signup" render={() => ( !isUserLoggedIn ? <Signup /> : <Redirect to='/dashboard' /> )}/>
        <Route path='/admin'>
          <Login />
        </Route>
        <Route path='/login' render={() => ( !isUserLoggedIn ? <Login /> : <Redirect to='/dashboard' /> )}/>
        <Route path="/dashboard" render={() => ( isUserLoggedIn ? <Dashboard /> : <Redirect to='/login' /> )}/>
        <Route path="/Landing" exact component={Landing} />
      </Switch>
    </Router>
  );
}

export default App;
