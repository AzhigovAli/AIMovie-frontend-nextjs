import { Stack } from '@mui/material';
import Image from 'next/image';
import styles from './allTypesMovieItem.module.scss';
import { Movie } from '../../model/movies.type';
import { AllTypesMovieItemOverlay } from '../allTypesMovieItemOverlay';
import clsx from 'clsx';

export const AllTypesMovieItem = ({
  id,
  imdbRating,
  poster,
  type,
  title,
  year,
  genres,
  runtime,
  seasons,
  episodes,
}: Movie) => {
  return (
    <Stack className={styles.movieItem} key={id}>
      <Stack
        className={clsx(styles.movieRating, {
          [styles.good]: imdbRating >= 7,
          [styles.bad]: imdbRating < 7,
        })}>
        {imdbRating}
      </Stack>

      <Image className={styles.moviePoster} src={poster} width={220} height={330} alt={title} />

      <Stack className={styles.movieOverlay}>
        <AllTypesMovieItemOverlay
          id={id}
          type={type}
          title={title}
          year={year}
          genres={genres}
          runtime={runtime}
          episodes={episodes}
          seasons={seasons}
        />
      </Stack>
    </Stack>
  );
};
