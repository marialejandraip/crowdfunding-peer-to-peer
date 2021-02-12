import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { auth } from './firebaseConfig';

import Start from './Views/Start';
import Signup from './Views/signup';
import Login from './Views/login';
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
<<<<<<< HEAD
        <Route path='/login' render={() => ( !isUserLoggedIn ? <Login /> : <Redirect to='/dashboard' /> )}/>
        <Route exact path="/dashboard" render={() => ( isUserLoggedIn ? <Dashboard /> : <Redirect to='/login' /> )}/>
        <Route path="/dashboard/:id" children={() => ( isUserLoggedIn ? <Dashboard /> : null )} />
        {/* <Route path="/dashboard/2" render={() => ( isUserLoggedIn ? <Dashboard /> : <Redirect to='/dashboard/2' /> )}/>
        <Route path="/dashboard" render={() => ( !isUserLoggedIn ? <Landing /> : <Redirect to='/id' /> )}/> */}
        <Route path="/Landing" exact component={Landing} />
=======
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/dashboard/'>
          <Dashboard isUserLoggedIn={isUserLoggedIn} />
        </Route>
{/*         <Route path='/dashboard/1'>
          <Dashboard isUserLoggedIn={isUserLoggedIn} />
        </Route>
        <Route path='/dashboard/2'>
          <Dashboard isUserLoggedIn={isUserLoggedIn} />
        </Route> */}
>>>>>>> 1cb7efa16f54a21bdd534783d1e0795a853e66cf
      </Switch>
    </Router>
  );
}

export default App;
