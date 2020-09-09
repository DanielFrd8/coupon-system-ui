import React from 'react';
import { Router, Switch, Route, } from "react-router-dom";
import { createBrowserHistory, } from 'history'
import { Context } from './context/context'
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Error from './components/Error/Error';

function App() {

  const history = createBrowserHistory()

  return (
    <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error" component={Error} />
          <Route path="/admin" component={Admin} />
          {/* <Route path="/company" component={}/>
          <Route path="/customer" component={}/> */}
        </Switch>
    </Router>
  );
}

export default App;
