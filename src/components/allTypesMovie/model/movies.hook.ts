import { axiosInstance } from '@/api/axios';
import { useMovieStore } from '@/shared/store/movies';
import React from 'react';
import { Movie } from './movies.type';

export const useGetMovies = ({ type }: { type?: string }) => {
  const { movies, setMovies, aiMovie } = useMovieStore();

  React.useEffect(() => {
    async function fetchMovies() {
      try {
        const { data } = await axiosInstance.get<Movie[]>('/movies', {
          params: {
            type,
          },
        });
        setMovies(data);
      } catch (error) {
        console.error('Ошибка при загрузке фильмов:', error);
      }
    }

    fetchMovies();
  }, [setMovies, type]);

  return { movies, aiMovie };
};
