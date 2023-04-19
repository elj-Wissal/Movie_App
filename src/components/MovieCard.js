import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className="rating">{movie.rating}</span>
      </div>
      <div className="movie-status">{movie.status}</div>
    </div>
  );
};

export default MovieCard;