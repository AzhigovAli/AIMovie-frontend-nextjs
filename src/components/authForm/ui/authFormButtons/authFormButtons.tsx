import { Stack, Typography } from '@mui/material';
import styles from './authFormButtons.module.scss';
import { useAuthForm } from '../../model/authForm.hook';
import { FC } from 'react';
import { CustomButton } from '@/shared/ui';

export interface AuthFormButtonsProps {
  /** Проверка на то, идет ли регистрация или нет */
  isRegister: boolean;
  /** Функция переключения */
  handleClickButton: () => void;
}

export const AuthFormButtons: FC<AuthFormButtonsProps> = ({ isRegister, handleClickButton }) => {
  const { handleLogin } = useAuthForm();

  return (
    <Stack className={styles.authFormButtons}>
      <CustomButton className={styles.authFormButton} onClick={() => handleLogin(isRegister)}>
        {isRegister ? 'Зарегистрироваться' : 'Войти'}
      </CustomButton>
      <Typography className={styles.authFormSwitchButton} onClick={handleClickButton}>
        {isRegister ? 'Войти' : 'Зарегистрироваться'}
      </Typography>
    </Stack>
  );
};
