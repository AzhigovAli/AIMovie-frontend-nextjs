'use client';

import styles from './authForm.module.scss';
import { Stack } from '@mui/material';
import Image from 'next/image';
import logo from '@/assets/img/logo.png';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthFormTitle, AuthFormButtons, AuthFormInputs } from './ui';

export const AuthForm = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const handleClickButton = () => {
    setIsRegister(!isRegister);
  };

  return (
    <Stack className={styles.auth}>
      <Image src={logo} width={220} height={60} alt="AI Movie" />
      <Stack className={styles.authForm}>
        <AuthFormTitle />
        <AuthFormInputs isRegister={isRegister} />
        <AuthFormButtons isRegister={isRegister} handleClickButton={handleClickButton} />
      </Stack>
      <Toaster />
    </Stack>
  );
};
