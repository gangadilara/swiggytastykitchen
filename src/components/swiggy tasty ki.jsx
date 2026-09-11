import React, { useState } from "react"

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState("")

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for food or restaurants..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch}>
        🔍 Search
      </button>
    </div>
  );
}

export default SearchBar;