import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movies'); // Adjust the URL as necessary
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
