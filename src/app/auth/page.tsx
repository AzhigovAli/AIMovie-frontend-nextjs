'use client';

import styles from './auth.module.scss';
import { AuthForm } from '@/components';
import { Stack } from '@mui/material';

export default function AuthPage() {
  return (
    <Stack className={styles.authPage}>
      <AuthForm />
    </Stack>
  );
}
