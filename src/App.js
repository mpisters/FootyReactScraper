import React, {Component} from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Analysis from './Analysis';
import {Switch, Route} from 'react-router-dom'
class App extends Component {


  render() {
    return <div className="page">
      <NavBar/>
       <Switch>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>;
  }
}

export default App;
