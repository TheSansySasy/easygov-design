import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Pricing from "./routes/Pricing";
import About from "./routes/About";
import Contact from "./routes/Contact";
import {HashLink as Link} from 'react-router-hash-link';

function App() {
  return (
    <div className="App">
      
      {/* <Link to ='/'>Home</Link>
      <Link to ='/pricing'>Pricing</Link>
      <Link to ='/about'>About</Link>
      <Link to ='/contact'>Contact</Link> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
