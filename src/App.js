import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Start from './Views/Start';
import Dashboard from './Views/Dashboard'
import { auth } from './firebaseConfig';
import './App.css';
import Signup from './components/signup';
import Login from './components/login';


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


function LoggedInRoute({ children, isUserLoggedIn, ...rest }) {
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
}

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
        if(localStorage.getItem('emailForSignIn')){
          console.log('waiting link...')
          //setPending(true);  cambiar a false
        }
        setIsUserLoggedIn(false); // cambiar a false
        console.log('no está logueado');
      }
      setLoading(false);
      console.log('esperando por el link')
      return console.log('CLEAN UP Funtion');
    });
  }, []);

  if (loading) return <span>Loading</span>;

  return (
    <Router>
    <Switch>
      <Route exact path='/'>
        <Start />
      </Route>
      <Route path='/signup'>
        <Signup />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
     {/*  <NonLoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path="/">
        <Start />
      </NonLoggedInRoute>
      <NonLoggedInRoute isUserLoggedIn={isUserLoggedIn} path="/signup">
        <Signup />
      </NonLoggedInRoute>
      <NonLoggedInRoute isUserLoggedIn={isUserLoggedIn} path="/login">
        <Login />
      </NonLoggedInRoute> */}
      <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path="/dashboard">
        <Dashboard />
      </LoggedInRoute>
      </Switch>
      </Router>
    
  );
}

export default App;
