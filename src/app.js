import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import MainCart from "./mainCart";
import Footer from "./footer";
import MainOrder from "./mainOrder";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch />
      <Route exact path="/" render={() => <Main />} />
      <Route exact path="/cart" component={() => <MainCart />} />
      <Route exact path="/order" component={() => <MainOrder />} />
      <Switch />
      <Footer />
    </div>
  );
}

export default App;
