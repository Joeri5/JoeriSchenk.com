import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudy from './pages/CaseStudy';
import FrontPage from './pages/FrontPage';
import "./index.css"

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route element={<FrontPage />} path="/" exact />
      <Route element={<CaseStudy />} path="/:slug" />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
