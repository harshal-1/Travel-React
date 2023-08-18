import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Packages from './components/pages/Packages';
import Collaborate from './components/pages/Collaborate';
import Contact from './components/pages/Contact';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/packages' element={<Packages/>} />
          <Route path='/collaborate' element={<Collaborate/>} />
          <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
   </>
      
  );
}

export default App;
