import React, { useState, useEffect, useContext } from 'react';
import MovieTable from '../components/MovieTable'
import CircularProgress from '@mui/material/CircularProgress';
import { fetchAllMovies } from '../api';
import { Movie } from '../types';
import SimpleContainer from '../components/PageContainer'
import CreateMovieButton from '../components/CreateMovieButton';
import { AuthContext } from '../contexts/AuthContext';

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useContext(AuthContext);

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
      {isAuthenticated ? (
        <>
        <div style={{ marginBottom: '20px' }}>
          <CreateMovieButton onCreate={(newMovie) => console.log('Created movie:', newMovie)} />
        </div>
      </>
      ) : (
        <p>Please log in to use CRUD for movies.</p>
      )}
      
      {loading ? (
      <CircularProgress />
      ) : (
        <MovieTable movies={movies} />
      )}
    </SimpleContainer>
  );
};

export default HomePage;
