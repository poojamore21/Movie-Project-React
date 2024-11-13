import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'; 
import { fetchMovieDetails, fetchMovieCredits } from '../Services/api';
import "../CSS/MovieDetailPage.css"; 

function MovieDetailPage() {
  // Get the 'id' parameter from the route to identify the specific movie
  const { id } = useParams();

  // State to store movie details and cast information
  const [movie, setMovie] = useState(null); 
  const [cast, setCast] = useState([]); 

  // useEffect hook to fetch movie details and credits when the component mounts or the 'id' changes
  useEffect(() => {
    
    const loadMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id); 
      setMovie(movieData); 

      const creditsData = await fetchMovieCredits(id); // Fetch movie credits based on the movie ID
      setCast(creditsData.cast); 
    };

    loadMovieDetails(); 
  }, [id]); // Depend on the 'id', so it re-fetches data if the movie ID changes


  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail-page">
      
      <div className="movie-header">
        
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
          />
        </div>
        
        
        <div className="movie-info">
          <h2>{movie.title}</h2> 
          <p className="movie-rating">Rating: {movie.vote_average}</p> 
          <p className="movie-runtime">{movie.runtime} min</p>
          <p className="movie-genres">
            {movie.genres?.map(genre => genre.name).join(', ')} 
          </p>
          <p className="movie-release-date">
            Release Date: {new Date(movie.release_date).toDateString()} 
          </p>
          <h3>Overview</h3>
          <p>{movie.overview}</p> {/* Display movie overview */}
        </div>
      </div>

      {/* Cast Section */}
      <div className="movie-cast">
        <h3>Cast</h3>
        <div className="cast-list">
          {cast.slice(0, 6).map((actor) => ( // Display top 6 cast members
            <div key={actor.cast_id} className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} // Display actor's profile picture
                alt={actor.name} 
              />
              <p className="cast-name">{actor.name}</p> 
              <p className="cast-character">{actor.character}</p> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailPage; 