import React, { FC } from 'react';
import Image from 'next/image';
import { Stack } from '@mui/material';
import { MovieInfo } from '../movieInfo';
import f1Logo from '@/assets/svg/F1-logo.svg';
import { MovieButtons } from '../movieButtons';
import styles from './movieDescriptionBlock.module.scss';
import { Movie } from '@/components/allTypesMovie/model/movies.type';
import clsx from 'clsx';
import { MovieDetailsBlock } from '../movieDetailsBlock';

export interface MovieDescriptionBlockProps {
  plot: string;
  movie: Movie;
  isDetailsIndex: number;
}

export const MovieDescriptionBlock: FC<MovieDescriptionBlockProps> = ({
  plot,
  movie,
  isDetailsIndex,
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
