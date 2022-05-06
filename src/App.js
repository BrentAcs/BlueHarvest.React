import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import PageNotFound from "./PageNotFound";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        {/* <Route path="/starclusters" element={StarClusterView} /> */}
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
