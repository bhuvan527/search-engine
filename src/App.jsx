import "./App.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  return (
    <>
      <header>
        <div className="container">
          <h1>SEARCH ENGINE</h1>
        </div>
      </header>

      <div className="form">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter the search text"
        />
        <button
          onClick={() => {
            fetch("/api/search?text=" + text)
              .then((response) => response.json())
              .then((results) => setResults(results))
              .catch((error) => console.error("Failed to search!", error));
          }}
        >
          Search
        </button>

        <ul>
          {results.length > 0 ? (
            results.map(({ url, title }, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
                <div>{title}</div>
              </li>
            ))
          ) : (
            <div>No results found</div>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
