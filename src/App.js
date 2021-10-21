import React from 'react';

import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import LoginS from './components/Login/LoginS'
import SignupS from './components/Login/SignupS'
import CreTest from './components/Test/CreTest';
import Quiz from './components/Quiz/Quiz';
import Test from './components/Test/takeTest';
import {AuthProvider} from './context/auth'
import QuizList from './components/Quiz/QuizList.js';
import AddQuestion from './components/Test/AddQuestion';
import Alert from './components/Home/Alert';
import RsList from './components/Quiz/RsList';

function App() {
  
 

  return (
    
      <AuthProvider>
        
      <Router>
        <Nav />
        <Switch >
          <Route path='/'  exact render={() => <Home  />}  />
          <Route path='/teacher-login'  exact render={() => <Login  />}  />
          <Route path='/teacher-signup'  exact render={() => <Signup  />}  />
          <Route path='/student-login'  exact render={() => <LoginS  />}  />
          <Route path='/student-signup'  exact render={() => <SignupS  />}  />
          <Route path='/student-signup'  exact render={() => <SignupS  />}  />
          <Route path='/take-quiz-:examid'  exact render={() => <Quiz  />}  />
          <Route path='/insert-code'  exact render={() => <  Test/>}  />
          <Route path='/create-quiz'  exact render={() => <  CreTest/>}  />
          <Route path='/add-question'  exact render={() => <  AddQuestion/>}  />
          <Route path='/quiz-list'  exact render={() => <  QuizList/>}  />
          <Route path='/alert'  exact render={() => <  Alert/>}  />
          <Route path='/result-list' exact render={() => <  RsList/>}/>
        </Switch>
        <Footer/>
      </Router>
     
      </AuthProvider>
    
    
  );
}

export default App;
