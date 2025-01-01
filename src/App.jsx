import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Portfolio from './components/Portfolio.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';

 function App() {
 
  return (
    <>
     <Navbar />
     <Header />
    <Routes>
    <Route path ='/' element={<Home />}></Route>
    <Route path ='/portfolio' element={<Portfolio />}></Route>
    <Route path ='/about' element={<About />}></Route>
    <Route path ='/contact' element={<Contact />}></Route>
    <Route path ='*' element={<h2>Page Not Found</h2>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
