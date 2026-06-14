import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    navigate(`/search?service=${service}&city=${city}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Service (Decorator, Makeup Artist...)"
        value={service}
        onChange={(e) => setService(e.target.value)}
      />

      <input
        type="text"
        placeholder="City (Delhi, Agra...)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={handleSearch} style={{ marginLeft: "10px" }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;