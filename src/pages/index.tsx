import Head from 'next/head';
import Image from 'next/image';
import {
  Main,
  MoviesSection,
  MovieItem,
  SearchButton,
  DetailsBtn,
  InputElem,
  SearchSection,
} from '@/styles/Main.styled';
import { useState } from 'react';
import axios from 'axios';
import type Movie from '@/entities/MovieData';
import { useRouter } from 'next/router';

type SearchResponse = {
  Search: Movie[];
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchError, setSearchError] = useState('');

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const router = useRouter();

  const handleClick = (movieId: string) => {
    router.push(`${movieId}`);
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    const response = await axios.get<SearchResponse>(
      `http://www.omdbapi.com/?s=${searchQuery}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
    );

    if (response.data?.Search) {
      const moviesWithIds = response.data.Search.map(movie => ({
        ...movie,
        imdbID: movie.imdbID,
      }));
      setMovies(moviesWithIds);
      setSearchError('');
    } else {
      setMovies([]);
      setSearchError('No results found. Please try a different search query.');
    }
  };

  return (
    <>
      <Head>
        <title>Movie Search NextJS App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1 style={{ textAlign: 'center' }}>Movie Search App</h1>

        <SearchSection>
          <InputElem
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchSection>

        <section>
          {searchError ? (
            <p>{searchError}</p>
          ) : (
            <MoviesSection>
              {movies.map(({ imdbID, Title, Type, Year, Poster }) => (
                <MovieItem key={imdbID}>
                  <Image src={Poster} alt={Title} width="300" height="400" />
                  <div>
                    <h2>{Title}</h2>
                    <p>{Year}</p>
                    <p>{Type}</p>
                  </div>
                  <DetailsBtn onClick={() => handleClick(imdbID)}>
                    More Details
                  </DetailsBtn>
                </MovieItem>
              ))}
            </MoviesSection>
          )}
        </section>
      </Main>
    </>
  );
}

