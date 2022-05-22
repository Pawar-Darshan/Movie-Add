import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Movie } from "./Movie";

export function MovieList({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");

  const addMovie = () => {
    const newMovie = {
      name,
      rating,
      summary,
      poster,
      trailer,
    };

    console.log(newMovie);

    setMovieList([...movieList, newMovie]);
  };

  return (
    <div>
      <div className="add-movie-form">
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          label="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          label="Poster"
          onChange={(event) => setPoster(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          label="Summary"
          onChange={(event) => setSummary(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          label="Rating"
          onChange={(event) => setRating(event.target.value)}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          label="Trailer"
          onChange={(event) => setTrailer(event.target.value)}
        />
        <Button variant="contained" color="success" onClick={addMovie}>
          Add Movie
        </Button>
        <div className="movie-list-container">
          {movieList.map((mv, index) => (
            <Movie movie={mv} id={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
