import React, { useEffect, useState } from "react";
import axios from "axios";
const FIlm = () => {
  const [film, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const searchFilm = async () => {
    try {
      const response = await axios.get("https://www.omdbapi.com/", {
        params: {
          apikey: "54e4f3e6",
          t: query,
        },
      });

      if (response.data.Response == "True") {
        setFilms(response.data);
      } else {
        setError("Gagal Mengambil Data / film tidak ditemukan");
      }
    } catch (error) {
      setError("Gagal mengambil data", error);
    }
  };

  useEffect(() => {
    searchFilm();
  }, [query]);
  console.log(film);

  return (
    <div>
      
    </div>
  );
  
};

export default FIlm;