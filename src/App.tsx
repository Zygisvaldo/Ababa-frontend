import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/movies" element={<HomePage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
