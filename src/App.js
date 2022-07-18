import './App.css';
//import axios from "axios";
import PosterList from './components/PosterList';
import PosterDetail from './components/PosterDetail';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";

function App() {
  // return (
  //   <PosterList></PosterList>
  // );
  
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<PosterList />} />
            <Route path="/detail/:id/:img" element={<PosterDetail />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
