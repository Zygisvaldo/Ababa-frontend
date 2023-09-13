import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import ResponsiveAppBar from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import { AuthPage } from './pages/AuthPage';
import AuthProvider from './contexts/AuthContext';
import SimpleContainer from './components/PageContainer'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <ResponsiveAppBar />
            <SimpleContainer>
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MovieDetailsPage />} />
                <Route path="/auth" element={<AuthPage />} />
              </Routes>
            </SimpleContainer>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
