import React from "react";
import { useParams } from "react-router-dom";
import { INITIAL_MOVIE_LIST } from "./App";

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = INITIAL_MOVIE_LIST[id];
  console.log(movie.name);
  return (
    <div>
      <h1>Details of - {movie.name}</h1>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      ;<p>{movie.summary}</p>
    </div>
  );
}
