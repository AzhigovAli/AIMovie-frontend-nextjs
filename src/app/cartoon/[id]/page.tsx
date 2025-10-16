'use client';

import { WatchMovie } from '@/components/movie';
import { useGetMovieInfo } from '@/shared/hooks/useGetMovieInfo';
import { useParams } from 'next/navigation';

export default function CartoonPage() {
  const { id } = useParams();
  const { movie } = useGetMovieInfo(Number(id), 'cartoon');

  return <WatchMovie movie={movie} />;
}
