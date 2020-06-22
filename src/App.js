import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header'
import About from './pages/about'
import Home from './pages/home'
import Work from './pages/work'


const App = () => (
 <Router>
      <>
      <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
);


export default App;
