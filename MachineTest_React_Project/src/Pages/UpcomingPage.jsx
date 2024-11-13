import React, { useEffect, useState } from 'react'; 
import { fetchUpcomingMovies } from '../Services/api'; 
import MovieList from '../Components/MovieList'; 
import Pagination from '../Components/Pagination'; 


const UpcomingPage = () => {
  // State to store the list of movies, current page, and total number of pages
  const [movies, setMovies] = useState([]); 
  const [page, setPage] = useState(1); 
  const [totalPage, setTotalPage] = useState(1); 

  // useEffect hook to fetch upcoming movies whenever the 'page' changes
  useEffect(() => {
    // Fetch upcoming movies from the API based on the current page
    fetchUpcomingMovies(page)
      .then((moviesData) => {
        setMovies(moviesData); 
        
      })
      .catch((error) => {
        console.error("Failed to fetch upcoming movies:", error); 
        setMovies([]); 
        setTotalPage(1); 
      });
  }, [page]); // Dependency on 'page' to refetch movies when the page number changes

  return (
    <div>
      
      <center><h1>Upcoming Movies</h1></center>
      <MovieList movies={movies} />
      <Pagination setPage={setPage} totalPage={totalPage} currentPage={page} />
    </div>
  );
};

export default UpcomingPage; 
