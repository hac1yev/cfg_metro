import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Guzergah from "./pages/Guzergah/Guzergah";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guzergah" element={<Guzergah />} />
      </Routes> 
      <Footer />
    </>
  );
};

export default App;