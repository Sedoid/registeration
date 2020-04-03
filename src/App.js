import React from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register/register';
import Update from './components/update/update';
import Delete from './components/delete/delete';


function App() {

  
  return (
    <div className="App">
      <Router>
          <Route path="/" exact component={Welcome} />
          <Route path="/register" component ={Register} />
          <Route path ="/update" component = {Update} />
          <Route path="/delete" component = {Delete} />         
      </Router>
   
    </div>
  );
}   

export default App;
