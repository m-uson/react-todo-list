import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { AddProject, Home } from "./views";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddProject />} />
      </Routes>
    </div>
  );
};

export default App;
