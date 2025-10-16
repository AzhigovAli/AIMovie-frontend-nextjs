import React from 'react';
import styles from './movieButtons.module.scss';
import { Stack, Button } from '@mui/material';

export const MovieButtons = () => {
  return (
    <Stack className={styles.movieButtons}>
      <Button className={styles.watchButton}>Смотреть сейчас</Button>
      <Button className={styles.trailerButton}>Трейлер</Button>
    </Stack>
  );
};
