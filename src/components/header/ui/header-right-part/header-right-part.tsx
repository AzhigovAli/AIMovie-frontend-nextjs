import styles from './header-right-part.module.scss';
import { Stack } from '@mui/material';
import { HeaderInputSearch } from '../header-input-search/header-input-search';
import { HeaderLoginButton } from '../header-login-button/header-login-button';
import { useRouter } from 'next/navigation';

export const HeaderRightPart = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/auth');
  };

  return (
    <Stack className={styles.headerRightPart}>
      <HeaderInputSearch />

      <HeaderLoginButton onClick={onClick} />
    </Stack>
  );
};
