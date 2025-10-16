/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { axiosInstance } from '@/api/axios';
import { useMovieStore } from '@/shared/store/movies';

export const useSearchAI = ({ search }: { search: string }) => {
  const { setAiMovie } = useMovieStore();

  const getMovies = async () => {
    try {
      const { data } = await axiosInstance.get('/movies/search', {
        params: {
          query: search,
        },
      });

      setAiMovie(data);
    } catch (error) {
      console.error('Ошибка при загрузке фильмов:', error);
    }
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      getMovies();
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [search]);
};
