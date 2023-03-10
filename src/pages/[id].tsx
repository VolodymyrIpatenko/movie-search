import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

type MovieDetails = {
  Title: string;
  Year: string;
  Plot: string;
  Actors: string;
  imdbRating: string;
  Poster: string;
};

const MoviePage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router)
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get<MovieDetails>(
        `http://www.omdbapi.com/?i=${id}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
      );
      setMovieDetails(response.data);
      console.log(movieDetails)
    };
    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <p>{movieDetails.Year}</p>
      <p>{movieDetails.Plot}</p>
      <p>Actors: {movieDetails.Actors}</p>
      <p>IMDB Rating: {movieDetails.imdbRating}</p>
    </>
  );
};

export default MoviePage;
