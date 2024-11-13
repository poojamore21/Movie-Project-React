import React from "react";
import { Link } from "react-router-dom"; // Import Link component for navigation
import "../CSS/MovieList.css"; // Import CSS for styling the component

// MovieList component: displays a list of movie cards
function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {/* Map through the list of movies and create a card for each movie */}
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            {/* Unique key for each movie */}

            <Link to={`/movie/${movie.id}`} className="movie-link">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />

              <h3>{movie.title}</h3>

              <p>Rating: {movie.vote_average}</p>
            </Link>
          </div>
        ))
      ) : (
        <div>No Movies Found</div>
      )}
    </div>
  );
}

export default MovieList;
