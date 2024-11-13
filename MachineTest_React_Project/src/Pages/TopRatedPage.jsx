import React, { useEffect, useState } from 'react'; 
import { fetchTopRatedMovies } from '../Services/api'; 
import MovieList from '../Components/MovieList'; 
import Pagination from '../Components/Pagination'; 
import "../CSS/TopRatedPage.css"; 

// Define the TopRatedPage component
const TopRatedPage = () => {
  // State to store the list of movies, current page, and total number of pages
  const [movies, setMovies] = useState([]); 
  const [page, setPage] = useState(1); 
  const [totalPage, setTotalPage] = useState(1); 


  
  // useEffect hook to fetch top-rated movies whenever the 'page' changes
  useEffect(() => {
    // Fetch movies from the API based on the current page
    fetchTopRatedMovies('top_rated', page)
      .then((response) => {
        setMovies(response?.data?.results || []); // Update the 'movies' state with the list of movies from the response
    
        setTotalPage(response?.data?.total_pages); // Update the 'totalPage' state with the total pages from the response
      })
      .catch((error) => {
        console.error("Failed to fetch top-rated movies:", error); 
      });
  }, [page]); // Dependency on 'page' to refetch movies when the page number changes

  return (
    <div>
     
      <center><h1>Top Rated Movies</h1></center>
      <MovieList movies={movies} />
      <Pagination setPage={setPage} totalPage={totalPage} currentPage={page} />
    </div>
  );
};

export default TopRatedPage; 
