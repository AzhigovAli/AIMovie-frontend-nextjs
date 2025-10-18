'use client';

import React from 'react';
import styles from './movieButtons.module.scss';
import { Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { CustomButton } from '@/shared/ui';

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
      <CustomButton className={styles.watchButton} onClick={handleWatchClick}>
        Смотреть сейчас
      </CustomButton>
      <CustomButton className={styles.trailerButton} onClick={handleWatchClick}>
        Трейлер
      </CustomButton>
    </Stack>
  );
};
