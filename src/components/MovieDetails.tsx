import React from 'react';
import { Movie } from '../types';

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
