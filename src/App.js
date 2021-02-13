import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './containers/Home'
import List from './containers/List'
import Detail from './containers/Detail'

import "./App.css"

export default function App() {
  return (
    <Router>
        <header>
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
        </header>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/characters">
            <List />
          </Route>

          <Route path="/character/:id">
            <Detail />
          </Route>

        </Switch>

  </Router>
  );
}