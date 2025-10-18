import React from 'react';
import { axiosInstance } from '@/api/axios';
import { useMovieStore } from '../store/movies.store';

export const useGetMovieInfo = (id: number, type: string) => {
  const { movie, setMovie } = useMovieStore();

  const getMovie = async () => {
    try {
      const { data } = await axiosInstance.get(`/movies/${id}`, {
        params: {
          type,
        },
      });
      setMovie(data);
    } catch (error) {
      console.error('Ошибка при загрузке фильмов:', error);
    }
  };

  React.useEffect(() => {
    getMovie();
  }, [movie]);

  return { movie };
};
