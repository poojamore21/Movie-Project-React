import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearchMovies } from '../Services/api'; 
import MovieList from '../Components/MovieList'; 
import Pagination from '../Components/Pagination'; 

const SearchResultPage = () => {
  const { query } = useParams(); // Get the search query from the URL
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch search results based on the query and page number
        const response = await fetchSearchMovies(query, page);
        setMovies(response.results || []); // If results are not available, fallback to an empty array
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        setMovies([]); // Set an empty array in case of an error
      }
    };
    fetchData();
  }, [query, page]); // Re-run fetch when query or page changes
console.log(movies)
  return (
    <div>
      <MovieList movies={movies} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default SearchResultPage;
