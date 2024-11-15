import React, { useEffect, useState } from "react";
import axios from "axios";
const FIlm = () => {
  const [film, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const searchFilm = async () => {
    try {
      setLoading(true)
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
    }finally{
      setLoading(false)
    }
  };

  // useEffect(() => {
  //   searchFilm();
  // }, [query]);
  // console.log(film);

  return (
    <div>
      <input 
      type="text" 
      value={query} 
      onChange={(e)=> setQuery(e.target.value)} 
      placeholder="Enter film title"
      style={{padding : "8px",width:"240px" , marginRight:"8px"
      }}
      />

      <button onClick={searchFilm} disabled={loading || !query}>
        {loading ? "Loading..." : "seacrh"}
      </button>
      {error && <p style={{color:"red"}}>{error}</p>}
      {
        film.Title && (
          <div style={{marginTop : "16px"}}>
            <h2>{film.Title}</h2>
            <p>Year : {film.Year} </p>
            <p>Genre : {film.Genre}</p>
            <p>Plot : {film.Plot}</p>
            {film.Poster && <img src={film.Poster} alt={film.Title}
            style={{width : "250px"}}/>}

          </div>
        )
      }
    </div>
  );
  
};

export default FIlm;