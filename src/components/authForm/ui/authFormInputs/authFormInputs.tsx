import { Stack } from '@mui/material';
import styles from './authFormInputs.module.scss';
import { useAuthStore } from '@/shared/store/auth';

export const AuthFormInputs = ({ isRegister }: { isRegister: boolean }) => {
  const { email, fullName, password, setEmail, setFullName, setPassword } = useAuthStore();

  return (
    <Stack className={styles.authFormInputs}>
      {isRegister && (
        <input
          className={styles.authFormInput}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Полное имя"
        />
      )}
      <input
        className={styles.authFormInput}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className={styles.authFormInput}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
        type="password"
      />
    </Stack>
  );
};
