import { Movie } from '@/components/allTypesMovie/model/movies.type';
import { create } from 'zustand';

interface MovieStore {
  movie: Movie;
  aiMovie: Movie[];
  movies: Movie[];
  isDetailsIndex: number;
  setMovies: (movies: Movie[]) => void;
  setMovie: (movie: Movie) => void;
  setIsDetails: (isDetailsIndex: number) => void;
  setAiMovie: (aiMovie: Movie[]) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movie: {
    id: 0,
    title: '',
    type: 'movie',
    year: 0,
    runtime: '',
    director: '',
    actors: [],
    genres: [],
    plot: '',
    poster: '',
    imdbRating: 0,
    imdbID: '',
  },
  aiMovie: [],
  movies: [],
  isDetailsIndex: 0,
  setIsDetails: (isDetailsIndex) => set({ isDetailsIndex }),
  setMovies: (movies) => set({ movies }),
  setMovie: (movie: Movie) => set({ movie: movie }),
  setAiMovie: (aiMovie) => set({ aiMovie }),
}));
