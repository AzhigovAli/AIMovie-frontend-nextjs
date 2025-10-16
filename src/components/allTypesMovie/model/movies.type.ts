export interface Movie {
  /**
   * ID фильма
   */
  id: number;

  /**
   * Название фильма
   */
  title: string;

  /**
   * Тип фильма
   */
  type: 'movie' | 'series' | 'cartoon';

  /**
   * Год выпуска
   */
  year: number;

  /**
   * Длительность
   */
  runtime: string;

  /**
   * Режиссёр
   */
  director: string;

  /**
   * Актеры
   */
  actors: string[];

  /**
   * Жанры
   */
  genres: string[];

  /**
   * Сюжет
   */
  plot: string;

  /**
   * Постер
   */
  poster: string;

  /**
   * Рейтинг IMDB
   */
  imdbRating: number;

  /**
   * ID фильма в IMDB
   */
  imdbID: string;

  /**
   * Количество сезонов
   */
  seasons?: number;

  /**
   * Количество серий
   */
  episodes?: number;
}
