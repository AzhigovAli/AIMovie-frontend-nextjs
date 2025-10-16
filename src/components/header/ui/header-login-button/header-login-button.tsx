'use client';
import styles from './header-login-button.module.scss';
import Person from '@mui/icons-material/Person';
import { Stack, Typography } from '@mui/material';

export const HeaderLoginButton = ({ onClick }: { onClick?: () => void }) => {
  const userId = localStorage.getItem('token');

  const handleSignOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <Stack className={styles.headerLoginButton} onClick={userId ? handleSignOut : onClick}>
      {userId ? (
        <Typography>Выйти</Typography>
      ) : (
        <>
          <Person />
          <Typography className={styles.loginTitle}>Войти</Typography>
        </>
      )}
    </Stack>
  );
};
