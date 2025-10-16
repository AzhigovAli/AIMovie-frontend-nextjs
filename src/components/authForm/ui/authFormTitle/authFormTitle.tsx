import { Typography } from '@mui/material';
import styles from './authFormTitle.module.scss';

export const AuthFormTitle = () => {
  return (
    <Typography className={styles.authTitle} variant="h4">
      Войдите или зарегистрируйтесь
    </Typography>
  );
};
