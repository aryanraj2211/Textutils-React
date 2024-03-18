import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/about';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,

  Link
} from "react-router-dom";


function App() {
 const[mode, Setmode]=useState('light');
 const[alert, SetAlert]=useState(null);

 const showAlert=(message, type)=>{
  SetAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>{
    SetAlert(null)
  },1500)
 }

 const togglemode=()=>{
  if(mode=="light")
  {
    Setmode("dark")
    document.body.style.backgroundColor="#042743"
    showAlert("dark mode has been enabled","success")
    document.title="TextUtils- Dark Mode"
    // setInterval(()=>{
    //   document.title="TextUtils- Dark Mode"
    // },2000)
    // setInterval(()=>{
    //   document.title="TextUtils- is nice"
    // },1500)
  }
  else
  {
    Setmode("light")
    document.body.style.backgroundColor="white"
    showAlert("light mode has been enabled","success")
    document.title="TextUtils- Light Mode"
  }
 }
 
 return (
<>
<Router>
<Navbar title="Textutils"  mode={mode} togglemode={togglemode} aboutText="About Textutils"/>
<Alert alert={alert}/>
<div classNameName="conatiner my-3">
<Switch>
          <Route exact path="/about"> 
            <About />
          </Route>
          
          <Route exact path="/">
  <TextForm showAlert={showAlert} heading="enter the text" mode={mode}/>
            
          </Route>
        </Switch>


</div>
</Router> 
</>
  );
}

export default App;
