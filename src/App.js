import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Start from './Views/Start';
import Dashboard from './Views/Dashboard'

import firebase from 'firebase/app';
import { auth } from './firebaseConfig';

import './App.css';
import Signup from './components/signup';
import Login from './components/login';
import Landing from './Views/Landing';


/* function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
} */


/* function LoggedInRoute({ children, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserLoggedIn) {
          console.log('si aparece aqio')
          return <Dashboard>{children}</Dashboard>;
        }
        return <Redirect to="/" />;
      }}
    />
  );
} */

/* function NonLoggedInRoute({ children, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!isUserLoggedIn) {
          return <>{children}</>;
        }
        return <Redirect to="/dashboard" />;
      }}
    />
  );
} */

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  //const [pending, setPending] = useState(false);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        localStorage.setItem('newUser', JSON.stringify(user));
        console.log('login')
        setIsUserLoggedIn(true)
      } else {
        setIsUserLoggedIn(false); // cambiar a false
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
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/admin'>
          <Login />
        </Route>
        <Route path='/login' render={() => ( !isUserLoggedIn ? <Login /> : <Redirect to='/dashboard' /> )}/>
        <Route path="/dashboard" render={() => ( isUserLoggedIn ? <Dashboard /> : <Redirect to='/login' /> )}/>
       {/*  <Route path="/dashboard" render={() => ( !isUserLoggedIn ? <Landing /> : <Redirect to='/:id' /> )}/> */}
      </Switch>
    </Router>
  );
}

export default App;
