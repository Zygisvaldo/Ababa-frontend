import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieTable from '../components/MovieTable'

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movies');
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie Page with table component</h1>
      {loading ? (
      <p>Loading...</p>
      ) : (
        <MovieTable movies={movies} />
      )}
    </div>
  );
};

export default HomePage;
