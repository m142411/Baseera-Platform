import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Bayina from './pages/Bayina';
import Yaqin from './pages/Yaqin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Developer from './pages/Developer';
import Contact from './pages/Contact';
import MediaCenter from './pages/MediaCenter';
import Security from './pages/Security';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col" dir="rtl">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bayina" element={<Bayina />} />
            <Route path="/yaqin" element={<Yaqin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<MediaCenter />} />
            <Route path="/security" element={<Security />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;