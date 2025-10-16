'use client';

import React from 'react';
import styles from './movieButtons.module.scss';
import { Stack, Button } from '@mui/material';
import { useRouter } from 'next/navigation';

export const MovieButtons = () => {
  const router = useRouter();

  const handleWatchClick = () => {
    if (localStorage.getItem('token')) {
      router.push('/moviePlayer');
    } else {
      router.push('/auth');
    }
  };

  return (
    <Stack className={styles.movieButtons}>
      <Button className={styles.watchButton} onClick={handleWatchClick}>
        Смотреть сейчас
      </Button>
      <Button className={styles.trailerButton} onClick={handleWatchClick}>
        Трейлер
      </Button>
    </Stack>
  );
};
