import React, { useEffect, useState } from "react";
import axios from "axios";

const Film = () => {
  const [film, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const searchFilm = async () => {
    setLoading(true);
    setError(null); // Clear previous error

    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "54e4f3e6",
          t: query,
        },
      });

      if (response.data.Response === "True") {
        setFilms(response.data);
      } else {
        setError("Gagal Mengambil Data / film tidak ditemukan");
        setFilms([]); // Clear film data if not found
      }
    } catch (error) {
      setError("Gagal mengambil data");
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (query) {
  //     searchFilm();
  //   }
  // }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter film title"
        style={{
          padding: "10px",
          width: "250px",
          fontSize: "16px",
          marginRight: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />
      <button
        onClick={searchFilm}
        disabled={loading || !query}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: loading || !query ? "not-allowed" : "pointer",
          opacity: loading || !query ? 0.7 : 1,
        }}
      >
        {loading ? "Loading..." : "Search"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {film.Title && (
        <div style={{ marginTop: "20px", textAlign: "left",  width: "80vh"}}>
          <h2>{film.Title}</h2>
          <p>
            <strong>Year:</strong> {film.Year}
          </p>
          <p>
            <strong>Genre:</strong> {film.Genre}
          </p>
          <p>
            <strong>Plot:</strong> {film.Plot}
          </p>
          {film.Poster && (
            <img
              src={film.Poster}
              alt={film.Title}
              style={{ width: "200px", marginTop: "10px", borderRadius: "4px" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Film;
