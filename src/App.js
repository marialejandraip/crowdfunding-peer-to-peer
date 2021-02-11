import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { auth } from './firebaseConfig';

import Start from './Views/Start';
import Signup from './components/signup';
import Login from './components/login';
import Waiting from './Views/Waiting';
import Dashboard from './Views/Dashboard';

import './App.css';
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
        setPending(false)
      } else if(user && !user.emailVerified ){
        setPending(true)
        setIsUserLoggedIn(true)
      }
      else {
        setPending(false)
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
        <Route exact path='/signup'>
          <Signup pending={pending} setPending={setPending}/>
        </Route>
        <Route exact path='/waiting'>
          <Waiting />
        </Route>
        <Route path='/admin'>
          <Login />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/dashboard'>
          <Dashboard isUserLoggedIn={isUserLoggedIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
