import React, { useState } from 'react';

const NewMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [trailerLink, setVideoURL] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePosterURLChange = (event) => {
    setPosterURL(event.target.value);
  };

  const handleVideoURLChange = (event) => {
    setVideoURL(event.target.value);
  };

  const handleRatingChange = (event) => {
    let value = Number(event.target.value);

    if (value < 0) {
      value = 0;
    } else if (value > 10) {
      value = 10;
    }
  
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const movie = { title, description, posterURL, trailerLink, rating };
    onAddMovie(movie);
    setTitle('');
    setDescription('');
    setPosterURL('');
    setVideoURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="new-movie-form"> 
        <label htmlFor="title" className="form-label">Title</label> 
        <input type="text" id="title" className="form-input" placeholder="Title" value={title} onChange={handleTitleChange} required/>
        <label htmlFor="description" className="form-label">Description</label> 
        <input type="text" id="description" className="form-input" placeholder="Description" value={description} onChange={handleDescriptionChange} required/>
        <label htmlFor="posterURL" className="form-label">Poster URL</label> 
        <input type="text" id="posterURL" className="form-input" placeholder="Poster URL" value={posterURL} onChange={handlePosterURLChange} required />
        <label htmlFor="videoURL" className="form-label">Video URL</label> 
        <input type="text" id="videoURL" className="form-input" placeholder="Video URL" value={trailerLink} onChange={handleVideoURLChange} required />
        <label htmlFor="rating" className="form-label">Rating</label>
        <input type="number" id="rating" className="form-input" placeholder="Rating" value={rating} onChange={handleRatingChange} required/>
        <button type="submit" className="form-submit">Add Movie</button>
    </form>
  );
};

export default NewMovieForm;
