import React, { useState, useEffect } from 'react';
import MovieTable from '../components/MovieTable'
import CircularProgress from '@mui/material/CircularProgress';
import { fetchAllMovies } from '../api';
import { Movie } from '../types';
import SimpleContainer from '../components/PageContainer'

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData  = await fetchAllMovies();
        setMovies(moviesData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <SimpleContainer>
      <h1>Movie Page with table component</h1>
      {loading ? (
      <CircularProgress />
      ) : (
        <MovieTable movies={movies} />
      )}
    </SimpleContainer>
  );
};

export default HomePage;
