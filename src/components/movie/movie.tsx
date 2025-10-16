import styles from './movie.module.scss';
import { Stack } from '@mui/material';
import Image from 'next/image';
import f1Banner from '@/assets/img/F1-banner.png';
import { Movie } from '../allTypesMovie/model/movies.type';
import { MovieDescriptionBlock } from './ui';
import clsx from 'clsx';
import { useMovieStore } from '@/shared/store/movies';
import { MovieTabs } from './ui/movieTabs/movieTabs';

export const WatchMovie = ({ movie }: { movie: Movie }) => {
  const { isDetailsIndex, setIsDetails } = useMovieStore();

  return (
    <Stack className={styles.movie}>
      <MovieTabs isDetailsIndex={isDetailsIndex} setIsDetails={setIsDetails} />
      <MovieDescriptionBlock plot={movie.plot} movie={movie} isDetailsIndex={isDetailsIndex} />
      <Image
        className={clsx(styles.movieBanner, { [styles.hidden]: isDetailsIndex === 1 })}
        src={f1Banner}
        alt="Movie"
      />
    </Stack>
  );
};
