import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import Main from "./main";
import MainCart from "./mainCart";
import Footer from "./footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch />
      <Route exact path="/" render={() => <Main />} />
      <Route exact path="/cart" component={() => <MainCart />} />
      <Switch />
      <Footer />
    </div>
  );
}

export default App;
