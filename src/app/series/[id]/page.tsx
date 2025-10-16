'use client';

import { WatchMovie } from '@/components/movie';
import { useGetMovieInfo } from '@/shared/hooks/useGetMovieInfo';
import { useParams } from 'next/navigation';

export default function OneSeriesPage() {
  const { id } = useParams();
  const { movie } = useGetMovieInfo(Number(id), 'series');

  return <WatchMovie movie={movie} />;
}
