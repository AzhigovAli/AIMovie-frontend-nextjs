import { Button, Stack, Typography } from '@mui/material';
import styles from './authFormButtons.module.scss';
import { useAuthForm } from '../../model/authForm.hook';

export const AuthFormButtons = ({
  isRegister,
  handleClickButton,
}: {
  isRegister: boolean;
  handleClickButton: () => void;
}) => {
  const { handleLogin } = useAuthForm();

  return (
    <Stack className={styles.authFormButtons}>
      <Button className={styles.authFormButton} onClick={() => handleLogin(isRegister)}>
        {isRegister ? 'Зарегистрироваться' : 'Войти'}
      </Button>
      <Typography className={styles.authFormSwitchButton} onClick={handleClickButton}>
        {isRegister ? 'Войти' : 'Зарегистрироваться'}
      </Typography>
    </Stack>
  );
};
