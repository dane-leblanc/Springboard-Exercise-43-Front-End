import React, { useState } from "react";

function SearchForm({ search }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="mb-4 mt-4">
      <form className="form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control flex-grow-1"
          name="searchTerm"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-lg btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
