import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
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
    onFilter({ title, rating });
  };

  return (
    <form onSubmit={handleSubmit} className="filter">
  <label htmlFor="title" className="form-label">Title</label>
  <input type="text" id="title" className="form-input" placeholder="Title" value={title} onChange={handleTitleChange} />

  <label htmlFor="rating" className="form-label">Rating</label>
  <input type="number" id="rating" className="form-input" placeholder="Rating" value={rating} onChange={handleRatingChange} />

  <button type="submit" className="form-submit">Filter</button>
</form>
  );
};

export default Filter;