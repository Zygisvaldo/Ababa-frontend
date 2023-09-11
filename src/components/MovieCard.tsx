import React from 'react';
import { Movie } from '../types';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
    </div>
  );
};

export default MovieCard;
