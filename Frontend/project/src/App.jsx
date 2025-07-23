import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Home from "./components/Home";
import PlayingVideo from "./components/PlayingVideo";
import { useAuth } from "./context/AuthProvider";

function App() {
const{loading,data}= useAuth()
console.log(loading);
console.log(data);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search/:searchQuery" element={<Search />} />
        <Route path="/video/:id" element={<PlayingVideo />} />
      </Routes>
      
    </>
  );
}

export default App;
