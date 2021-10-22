import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hero from './components/Hero';
import Header from './components/Header';
import Products from "./components/Products";
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Products />
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
