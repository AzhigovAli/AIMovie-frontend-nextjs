import React, { FC } from 'react';
import clsx from 'clsx';
import { movieTabs } from '../../model/movie.constants';
import styles from './movieTabs.module.scss';
import { Stack } from '@mui/material';
import { CustomButton } from '@/shared/ui';

export interface MovieTabsProps {
  isDetailsIndex: number;
  setIsDetails: (isDetailsIndex: number) => void;
}

export const MovieTabs: FC<MovieTabsProps> = ({ isDetailsIndex, setIsDetails }) => {
  const handleOpenDetails = (i: number) => {
    setIsDetails(i);
  };

  return (
    <Stack className={styles.movieTabs}>
      {movieTabs.map((tab, i) => (
        <CustomButton
          key={i}
          className={clsx(styles.tab, {
            [styles.active]: isDetailsIndex === i,
          })}
          onClick={() => handleOpenDetails(i)}>
          {tab}
        </CustomButton>
      ))}
    </Stack>
  );
};
