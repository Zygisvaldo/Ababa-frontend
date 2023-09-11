import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieTable from './pages/MovieTable';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/movies" element={<MovieTable/>} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
