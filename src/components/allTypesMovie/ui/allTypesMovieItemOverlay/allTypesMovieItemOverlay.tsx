import { Stack, Typography } from '@mui/material';
import { AllTypesMovieItemOverlayProps } from './model/allTypesMovieItemOverlay.types';
import styles from './allTypesMovieItemOverlay.module.scss';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { CustomButton } from '@/shared/ui';

export const AllTypesMovieItemOverlay: FC<AllTypesMovieItemOverlayProps> = ({
  id,
  type,
  year,
  genres,
  runtime,
  episodes,
  seasons,
  title,
}) => {
  const router = useRouter();
  const handleClickMovie = () => {
    router.push(`/${type}/${id}`);
  };

  return (
    <Stack className={styles.overlay}>
      <Stack>
        <Typography variant="h5" fontWeight={500}>
          {title}
        </Typography>
        {episodes && seasons && (
          <Typography variant="body1" fontWeight={500}>
            {seasons} сезон {episodes} серий
          </Typography>
        )}
        <Typography variant="body1" fontWeight={500}>
          {year} {genres.join(', ')}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          {runtime}
        </Typography>
      </Stack>

      <CustomButton className={styles.overlayButton} onClick={handleClickMovie}>
        Подробнее
      </CustomButton>
    </Stack>
  );
};
