'use client';

import React from 'react';
import { WatchMovie } from '@/components/movie';
import { useParams } from 'next/navigation';
import { useGetMovieInfo } from '@/shared/hooks/useGetMovieInfo';

export default function MoviePage() {
  const { id } = useParams();
  const { movie } = useGetMovieInfo(Number(id), 'movie');

  return <WatchMovie movie={movie} />;
}
