import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/home";
import AboutPageComponent from "./Components/AboutPageComponent";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPageComponent/>}></Route>
      </Routes>

    </Router >
  );
}

export default App;
