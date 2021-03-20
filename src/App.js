//& Import "React" &//
import React, { Fragment } from 'react';
//& Import "BrowserRouter", "Route", "Switch" &//
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//& Import "pages" &//
import Home from './components/Home';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'

//! ------------------------------------------------------------------------------------------------------------------------------------------------------------------ !//

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <div className='App'>
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Route exact path='/Contact' component={Contact} />

          </div>

        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
