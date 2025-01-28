import { useState, useEffect } from "react";
import "./Search.css";

const Search = () => {
  const [query, setQuery] = useState("pizza");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
    
      setError(null);

      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=d5e69bd98dc14f3d93c25fc679f2a753&query=${query}`
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong");
      }

      const data = await response.json();
      
      setResults(Array.isArray(data.results) ? data.results : []);
      console.log(data.results);
    } catch (err) {
      setError(err.message);
      setResults([]); 
    }
  };

  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="recipe-card">
      <input className="recipe-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {results.length > 0
          ? results.map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img
                  className="recipe-image"
                  src={recipe.image}
                  alt={recipe.title}
                  style={{ width: "100px" }}
                />
                <h3>{recipe.title}</h3>
                <button className="view-recipe-button">View Recipe </button>
              </div>
            ))
          : !error && query && <p>No results found.</p>}
      </div>
    </div>
  );
};

export default Search;
