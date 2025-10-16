'use client';

import React from 'react';
import styles from './allTypesMovie.module.scss';
import { Stack } from '@mui/material';
import { useGetMovies } from './model/movies.hook';
import { AllTypesMovieItem } from './ui';
import { Movie } from './model/movies.type';

export const AllTypesMovie = ({ type }: { type?: string }) => {
  const { movies, aiMovie } = useGetMovies({ type });

  return (
    <Stack className={styles.moviesList}>
      {(aiMovie.length ? aiMovie : movies).map((item: Movie) => (
        <Stack key={item.id}>
          <AllTypesMovieItem
            id={item.id}
            poster={item.poster}
            title={item.title}
            type={item.type}
            year={item.year}
            runtime={item.runtime}
            director={item.director}
            actors={item.actors}
            genres={item.genres}
            plot={item.plot}
            imdbRating={item.imdbRating}
            imdbID={item.imdbID}
            seasons={item.seasons}
            episodes={item.episodes}
          />
        </Stack>
      ))}
    </Stack>
  );
};
