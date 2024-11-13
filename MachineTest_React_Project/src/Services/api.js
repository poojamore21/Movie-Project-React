const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';
import axios from 'axios';

export const fetchPopularMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}&limit=5`);
  return response.json();
};



export const fetchTopRatedMovies = async (category, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${category}`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};


export const fetchUpcomingMovies = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, {
      params: {
        api_key: API_KEY,
        page,
      },
    });
    // Check if the response contains data and results
    if (response.data && response.data.results) {
      return response.data.results;
    } else {
      console.error("Unexpected API response format:", response);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch upcoming movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return response.json();
};

export const fetchSearchMovies = async (query, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query,
        page,
      },
    });
    // Check if the response contains data and results
    if (response.data && response.data.results) {
      return response.data;
    } else {
      console.error("Unexpected API response format:", response);
      return { results: [] }; // Return an empty array to avoid errors
    }
  } catch (error) {
    console.error("Failed to fetch search movies:", error);
    throw error;
  }
};


export const fetchMovieCredits = async (movieId) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
