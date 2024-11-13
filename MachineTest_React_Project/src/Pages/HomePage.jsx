import React, { useEffect, useState } from 'react'; 
import { fetchPopularMovies } from '../Services/api'; 
import MovieList from '../Components/MovieList'; 
import "../CSS/HomePage.css"; 
import Pagination from '../Components/Pagination'; 

function HomePage() {
  
  const [movies, setMovies] = useState([]); // define the State for storing the list of movies
  const [page, setPage] = useState(1); // define the State for tracking the current page number
  const [totalPage, setTotalPage] = useState(1); // define the State for storing the total number of pages

  // useEffect hook to fetch popular movies whenever the page changes
  useEffect(() => {
    const loadMovies = async () => {
      // Fetch popular movies for the current page
      const data = await fetchPopularMovies(page); 
      setMovies(data.results); 
      setTotalPage(data.total_pages); 
    };
    loadMovies(); 
  }, [page]); // Depend on the page state, so it runs whenever the page changes

  console.log(totalPage); 

  return (
    <div className="homepage">
      <h2>Popular Movies</h2>
      {/* Render the list of movies using the MovieList component and pass the movies state as a prop */}
      <MovieList movies={movies} />
      
      
      <Pagination setPage={setPage} totalPage={totalPage} currentPage={page} />
    </div>
  );
}

export default HomePage;
