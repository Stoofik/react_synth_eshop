import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Home from "./components/Home";
import SingleProduct from './components/SingleProduct';
import Cart from "./components/Cart"


function App() {

  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <SingleProduct />
          </Route>
            <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
