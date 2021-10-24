import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Home from "./components/Home";
import SingleProduct from './components/SingleProduct';

function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product">
            <SingleProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
