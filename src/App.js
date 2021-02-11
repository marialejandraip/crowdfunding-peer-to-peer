import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Start from './Views/Start';
import Dashboard from './Views/Dashboard'

import { auth } from './firebaseConfig';

import './App.css';
import Signup from './components/signup';
import Login from './components/login';
//import Landing from './Views/Landing';


function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [pending, setPending] = useState(false);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //console.log(user)
      if (user && user.emailVerified) {
        localStorage.setItem('newUser', JSON.stringify(user));
        console.log('login')
        setIsUserLoggedIn(true)
      } else if(user && !user.emailVerified ){
        console.log('verifica email')
        setPending(true)
      }
      else {
        setPending(false)
        setIsUserLoggedIn(false); // cambiar a false
        console.log('no está logueado');
        //setPending(true)
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
        <Route path='/signup' render={() => ( !pending ? <Signup /> : <Redirect to='/login' /> )}/>
        <Route path='/admin'>
          <Login />
        </Route>
        <Route path='/login' render={() => ( !isUserLoggedIn ? <Login /> : <Redirect to='/dashboard' /> )}/>
        <Route exact path="/dashboard" render={() => ( isUserLoggedIn  ? <Dashboard /> : <Redirect to='/login' /> )}/>
        <Route path="/dashboard/:id" children={() => ( isUserLoggedIn ? <Dashboard /> : null )} />
        {/* <Route path="/dashboard/2" render={() => ( isUserLoggedIn ? <Dashboard /> : <Redirect to='/dashboard/2' /> )}/>
        <Route path="/dashboard" render={() => ( !isUserLoggedIn ? <Landing /> : <Redirect to='/id' /> )}/> */}
      </Switch>
    </Router>
  );
}

export default App;
