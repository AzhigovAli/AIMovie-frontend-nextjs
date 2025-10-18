import React, { FC } from 'react';
import clsx from 'clsx';
import { Stack, Typography } from '@mui/material';
import styles from './movieDetailsBlock.module.scss';
import { Movie } from '@/components/allTypesMovie/model/movies.type';

export interface MovieDetailsBlockProps {
  isDetailsIndex: number;
  movie: Movie;
}

export const MovieDetailsBlock: FC<MovieDetailsBlockProps> = ({ isDetailsIndex, movie }) => {
  return (
    <Stack className={clsx(styles.movieDetailsBlock, { [styles.hidden]: isDetailsIndex === 0 })}>
      <Stack className={styles.movieActors}>
        <Typography variant="h5" fontWeight={500}>
          В главных ролях
        </Typography>
        {movie.actors.map((item) => (
          <Typography key={item} fontWeight={400}>
            {item}
          </Typography>
        ))}
      </Stack>
      <Stack className={styles.movieDirector}>
        <Typography variant="h5" fontWeight={500}>
          Режиссер
        </Typography>
        <Typography fontWeight={400}>{movie.director}</Typography>
      </Stack>
      <Stack className={styles.audioTrack}>
        <Typography variant="h5" fontWeight={500}>
          Аудиодорожка
        </Typography>
        <Typography fontWeight={400}>Русский</Typography>
      </Stack>
    </Stack>
  );
};
