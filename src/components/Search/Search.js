import React , { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Search.css';
export default function Search({result}) {
    const navigate = useNavigate();
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
      setSearchInput(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search/${searchInput}`);
    };
  return (
    <form
            className="d-flex align-items-center justify-content-evenly px-4"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control me-2 py-2 border border-1" 
              type="search"
              value={result ?? searchInput}
              onChange={handleChange}
              placeholder="Search and explore...."
              aria-label="Search"
            />
            <button className="btn btn-warning px-4 py-2" type="submit">
              Search
            </button>
          </form>
  )
}
