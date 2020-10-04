import React from "react";
import ReactDOM from "react-dom";
import AddToCart from "./Components/AddToCart/AddToCart.jsx";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const App = () => {
  var url = window.location.pathname + "products/";
  if(url === "/products/"){
    url += 1
  }
  var id = url.substring(url.lastIndexOf('/') + 1);
  return (
    <Router>
      <div>
        <Link to={`/products/${id}`}>Alan</Link>
        <Route
          path={`/products/${id}`}
          component={AddToCart}
        />
      </div>
    </Router>
  );
};



ReactDOM.render(
  <App />
  , document.getElementById("root"));
