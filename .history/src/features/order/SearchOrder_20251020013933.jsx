import { useState } from "react";
import { Navigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    console.log(query);
    Navigate(`/order/${query}`);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
