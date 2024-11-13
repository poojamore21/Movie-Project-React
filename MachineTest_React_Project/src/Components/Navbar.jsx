import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import "../CSS/Navbar.css"; 

function Navbar() {
  // State for handling the search query input
  const [query, setQuery] = useState(''); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for toggling mobile menu visibility
  const navigate = useNavigate(); // Hook to programmatically navigate to different routes

  // Debounce effect to delay the search navigation for smoother performance
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        navigate(`/search/${query}`); 
      }
    }, 500); // Delay in milliseconds (500ms) for debounce

    // Cleanup function to clear the timer if the component unmounts or query changes
    return () => clearTimeout(timer);
  }, [query, navigate]);


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav>
      
      <h1>Movie Panel</h1>
      
      
      <span className="menu-toggle" onClick={toggleMobileMenu}>
        &#9776; 
      </span>
      
     
      <div className={`nav-options ${isMobileMenuOpen ? 'mobile' : ''}`}>
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Popular</Link>
        <Link to="/top-rated" onClick={() => setIsMobileMenuOpen(false)}>Top Rated</Link>
        <Link to="/upcoming" onClick={() => setIsMobileMenuOpen(false)}>Upcoming</Link>
      </div>

     
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search movie"
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
      </form>
    </nav>
  );
}

export default Navbar;
