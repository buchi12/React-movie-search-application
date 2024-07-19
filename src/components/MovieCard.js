import React, { useEffect, useState } from 'react';
import './App.css'; // Import the CSS file for MovieCard

const MovieCard = ({ movie }) => {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogImage(data.message);
    };

    fetchDogImage();
  }, []);

  return (
    <div className="movie-card">
      <img src={dogImage} alt="Random Dog" class="image"/>
      <h2>Title: {movie.title}</h2>
      <p>AuthorNamw: {movie.author_name ? movie.author_name.join(', ') : 'Unknown Author'}</p>
      <p>Yera: {movie.first_publish_year ? movie.first_publish_year : 'Unknown Year'}</p>
    </div>
  );
};

export default MovieCard;
