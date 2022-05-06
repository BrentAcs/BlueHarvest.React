import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import PageNotFound from "./PageNotFound";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";

function App() {
  const exact = true;

  return (
    <div className="App container-fluid">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/starclusters" element={StarClusterView} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
