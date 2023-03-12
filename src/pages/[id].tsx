import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';
import type MovieDetails from '@/entities/MoviesDetails';
import {
  MovieDetailsCard,
  MovieCardDescription,
} from '@/styles/MovieDetails.styled';

const MoviePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movieDetails, setMovieDetails] = useState<MovieDetails>();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios.get<MovieDetails>(
        `http://www.omdbapi.com/?i=${id}&apikey=9002be4f`
      );
      setMovieDetails(response.data);
    };
    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movieDetails) {
    return <div>Loading.....</div>;
  }

  const { Title, Poster, Plot, Year, Actors, imdbRating } = movieDetails;
  return (
    <>
      <MovieDetailsCard>
        <h1>{Title}</h1>
        <Image src={Poster} alt={Title} width="300" height="400" />
        <MovieCardDescription>
          <p>Year of release:{Year}</p>
          <p>Plot: {Plot}</p>
          <p>Actors: {Actors}</p>
          <p>IMDB Rating: {imdbRating}</p>
        </MovieCardDescription>
      </MovieDetailsCard>
    </>
  );
};

export default MoviePage;

