
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
import TextForm from './components/TextForm';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Dark Mode has Enable ", "sucsess");
    }
    else {
      setMode('light')
      showAlert("Light Mode has been enabled");
    }
  }

  return (

    <>
      <Router>
        <Navbar title="ShivamCode" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* /users component-1
           /users/home components-2  */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to anylze below " mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
      {/* <About/> */}



    </>

  );
}

export default App;
