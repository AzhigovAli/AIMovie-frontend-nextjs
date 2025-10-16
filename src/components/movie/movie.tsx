import styles from './movie.module.scss';
import { Stack } from '@mui/material';
import Image from 'next/image';
import f1Banner from '@/assets/img/F1-banner.png';
import { Movie } from '../allTypesMovie/model/movies.type';
import { MovieDescriptionBlock } from './ui';

export const WatchMovie = ({ movie }: { movie: Movie }) => {
  return (
    <Stack className={styles.movie}>
      <MovieDescriptionBlock plot={movie.plot} movie={movie} />
      <Image className={styles.movieBanner} src={f1Banner} alt="Movie" />
    </Stack>
  );
};
