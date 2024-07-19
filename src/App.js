import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import './App.css'; // Assuming you have an App.css file for additional styling

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {               
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      setMovies(data.docs);
    } catch (err) {
      setError('Failed to fetch movies');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="loadingColor">Loading...</p>}
      {error && <p>{error}</p>}
      <div className="movie-cards-container">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
