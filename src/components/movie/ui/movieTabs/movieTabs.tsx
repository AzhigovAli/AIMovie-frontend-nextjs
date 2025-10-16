import React, { FC } from 'react';
import clsx from 'clsx';
import { movieTabs } from '../../model';
import styles from './movieTabs.module.scss';
import { Stack, Button } from '@mui/material';

export const MovieTabs: FC<{
  isDetailsIndex: number;
  setIsDetails: (isDetailsIndex: number) => void;
}> = ({ isDetailsIndex, setIsDetails }) => {
  const handleOpenDetails = (i: number) => {
    setIsDetails(i);
  };

  return (
    <Stack className={styles.movieTabs}>
      {movieTabs.map((tab, i) => (
        <Button
          key={i}
          className={clsx(styles.tab, {
            [styles.active]: isDetailsIndex === i,
          })}
          onClick={() => handleOpenDetails(i)}>
          {tab}
        </Button>
      ))}
    </Stack>
  );
};
