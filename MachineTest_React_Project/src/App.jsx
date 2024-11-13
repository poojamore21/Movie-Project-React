import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import TopRatedPage from './Pages/TopRatedPage';
import UpcomingPage from './Pages/UpcomingPage';
import MovieDetailPage from './Pages/MovieDetailPage';
import SearchResultPage from './Pages/SearchResultPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-rated" element={<TopRatedPage />} />
        <Route path="/upcoming" element={<UpcomingPage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/search/:query" element={<SearchResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
