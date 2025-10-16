'use client';

import Image from 'next/image';
import styles from './header-menu-list.module.scss';
import { Stack, Typography } from '@mui/material';
import logo from '@/assets/img/logo.png';
import clsx from 'clsx';
import { usePathname, useRouter } from 'next/navigation';
import { menuItems } from './model/header-menu-list.constants';

export const HeaderMenuList = () => {
  const pathname = usePathname();
  const router = useRouter();

  console.log(pathname);

  return (
    <Stack className={styles.headerMenuList}>
      <Image className={styles.logo} onClick={() => router.push('/')} src={logo} alt="AI Movie" />

      <Stack className={styles.menuList}>
        {menuItems.map(({ label, path }) => (
          <Typography
            key={path}
            onClick={() => router.push(path)}
            className={clsx(styles.menuItem, {
              [styles.active]: pathname === path,
            })}>
            {label}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};
