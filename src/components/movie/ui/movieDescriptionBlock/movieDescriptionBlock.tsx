import React from 'react';
import Image from 'next/image';
import { Stack } from '@mui/material';
import { MovieInfo } from '../movieInfo';
import f1Logo from '@/assets/svg/F1-logo.svg';
import { MovieButtons } from '../movieButtons';
import styles from './movieDescriptionBlock.module.scss';
import { Movie } from '@/components/allTypesMovie/model/movies.type';
import clsx from 'clsx';
import { MovieDetailsBlock } from '../movieDetailsBlock';

export const MovieDescriptionBlock = ({
  plot,
  movie,
  isDetailsIndex,
}: {
  plot: string;
  movie: Movie;
  isDetailsIndex: number;
}) => {
  return (
    <Stack className={clsx(styles.movieDescription, { [styles.full]: isDetailsIndex === 1 })}>
      <Stack className={styles.movieDescriptionBlock}>
        <Image src={f1Logo} alt="Movie" />
        <MovieInfo {...movie} />
        <Stack className={styles.moviePlot}>{plot}</Stack>
        <MovieButtons />
      </Stack>
      <MovieDetailsBlock isDetailsIndex={isDetailsIndex} movie={movie} />
    </Stack>
  );
};
