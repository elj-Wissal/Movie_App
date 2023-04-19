import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import NewMovieForm from './components/NewMovieForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';

import './App.css';


const App = () => {
  const [movies, setMovies] = useState(
    [
    {
      id: 1,
      title: 'Buzz Lightyear',
      posterURL: "https://d1lxrd8xkfqt44.cloudfront.net/wp-content/uploads/2017/04/07135227/hr_tht64070_a.jpg",
      rating: 10,
      status: 'Released',
      description :'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      trailerLink: 'https://www.youtube.com/watch?v=BwZs3H_UN3k'
    },
    {
      id: 2,
      title: 'Luck',
      posterURL: 'https://th.bing.com/th/id/OIP.JBEShY9_Dij4orrX-UXWqgHaK9?pid=ImgDet&rs=1',
      rating: 8.9,
      status: 'Released',
      description : 'A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park\'s cloned dinosaurs to run loose.',
      trailerLink: 'https://youtu.be/xSG5UX0EQVg'
    },
    {
      id: 3,
      title: 'Unicorn Wars',
      posterURL:'https://www.catsuka.com/interf/icons4/unicornwars_affichefr.jpg',
      rating: 15.7,
      status: 'Released',
      description : 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
      trailerLink: 'https://youtu.be/CyY8QgsO6jI'
    }
  ]
  );
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));
    if (storedMovies) {
      setMovies(storedMovies);
    }else {
      setMovies([]);
    }
  }, []);


  
  const handleAddMovie = (movie) => {
    // Create a new movie object with a unique ID
    const newMovie = { ...movie, id: movies.length + 1, trailerLink: movie.trailerLink };
    setMovies(prevMovies => {
      const updatedMovies = [...prevMovies, newMovie];
      localStorage.setItem('movies', JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  };
  
  

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);
  

  return (
    <Router>
    <div className="app">
      <h1>Movie App</h1>
      <div className="center_position">
        <Filter
          onFilter={({ title, rating }) => {
            setTitleFilter(title);
            setRatingFilter(rating);
          }}
        />
      
      </div>
      <Routes>
        <Route exact path="/" element={
          <MovieList
            movies={movies.filter((movie) => {
              return (
                movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
                movie.rating >= ratingFilter
              );
            })}
          />
        } />
        <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
      </Routes>
      <NewMovieForm onAddMovie={handleAddMovie} />
    </div>
  </Router>
  );
};

export default App;