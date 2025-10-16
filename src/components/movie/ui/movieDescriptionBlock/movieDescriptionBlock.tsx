import React from 'react';
import Image from 'next/image';
import { Stack } from '@mui/material';
import { MovieInfo } from '../movieInfo';
import f1Logo from '@/assets/svg/F1-logo.svg';
import { MovieButtons } from '../movieButtons';
import styles from './movieDescriptionBlock.module.scss';
import { Movie } from '@/components/allTypesMovie/model/movies.type';

export const MovieDescriptionBlock = ({ plot, movie }: { plot: string; movie: Movie }) => {
  return (
    <Stack className={styles.movieDescription}>
      <Image src={f1Logo} alt="Movie" />
      <MovieInfo {...movie} />
      <Stack className={styles.moviePlot}>{plot}</Stack>
      <MovieButtons />
    </Stack>
  );
};
