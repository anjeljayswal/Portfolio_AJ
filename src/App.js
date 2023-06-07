// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/project' element={<Projects/>} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;


// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/anjeljayswal/Portfolio_AJ.git
// git push -u origin main