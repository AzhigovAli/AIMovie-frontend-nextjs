import { FC } from 'react';
import { Stack } from '@mui/material';
import { Input } from '@/shared/ui';
import styles from './authFormInputs.module.scss';
import { useAuthStore } from '@/shared/store/auth.store';

export interface AuthFormInputsProps {
  isRegister: boolean;
}

export const AuthFormInputs: FC<AuthFormInputsProps> = ({ isRegister }) => {
  const { email, fullName, password, setEmail, setFullName, setPassword } = useAuthStore();

  return (
    <Stack className={styles.authFormInputs}>
      {isRegister && (
        <Input
          className={styles.authFormInput}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Полное имя"
        />
      )}
      <Input
        className={styles.authFormInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <Input
        className={styles.authFormInput}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        type="password"
      />
    </Stack>
  );
};
