'use client';

import React from 'react';
import styles from './header-input-search.module.scss';
import { Search } from '@mui/icons-material';
import { Stack, InputBase } from '@mui/material';
import { useHeaderStore } from '@/shared/store/header.store';
import { useSearchAI } from '../../model/header.hook';

export const HeaderInputSearch = () => {
  const { search, setSearch } = useHeaderStore();

  useSearchAI({ search });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Stack className={styles.headerInputSearch}>
      <Search className={styles.searchIcon} />
      <InputBase
        className={styles.searchInput}
        value={search}
        onChange={onChange}
        placeholder="Поиск с ИИ..."
      />
    </Stack>
  );
};
