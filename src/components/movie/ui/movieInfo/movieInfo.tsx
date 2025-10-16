import React, { FC } from 'react';
import styles from './movieInfo.module.scss';
import { Stack, Typography } from '@mui/material';
import { Movie } from '@/components/allTypesMovie/model/movies.type';

export const MovieInfo: FC<Movie> = ({ imdbRating, year, genres, runtime, seasons, episodes }) => {
  return (
    <Stack className={styles.movieInfo}>
      <Typography variant="h6" fontWeight={300}>
        {imdbRating}
      </Typography>
      <Typography variant="h6" fontWeight={300}>
        {year}
      </Typography>
      <Typography variant="h6" fontWeight={300}>
        {genres}
      </Typography>
      <Typography variant="h6" fontWeight={300}>
        {runtime}
      </Typography>
      {seasons && episodes && (
        <Typography variant="h6" fontWeight={300}>
          {seasons} сезон {episodes} серий
        </Typography>
      )}
    </Stack>
  );
};
