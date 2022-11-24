import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Pages/Home";
import '../src/assets/CSS/Style.css';
import '../src/assets/CSS/boots.css';

function App( ) {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
