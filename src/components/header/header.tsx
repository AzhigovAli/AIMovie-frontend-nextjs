'use client';

import styles from './header.module.scss';
import { Stack } from '@mui/material';
import { HeaderMenuList, HeaderRightPart } from './ui';

export const Header = () => {
  return (
    <Stack
      className={styles.header}
      sx={{
        pt: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
      }}>
      <HeaderMenuList />

      <HeaderRightPart />
    </Stack>
  );
};
