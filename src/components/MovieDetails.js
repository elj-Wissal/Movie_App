import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id));

  return (
    <div className='video_detail'>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe width="942" height="530" src={movie.trailerLink} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

       <Link to="/">Retour à l’accueil</Link>
    </div>
  );
};  
export default MovieDetails;