import Video from 'next-video';
import styles from './moviePlayer.module.scss';
import kolobokMovie from '../../../videos/kolobok.mp4';
import { Stack } from '@mui/material';

export default function MoviePlayerPage() {
  return (
    <Stack className={styles.container}>
      <Stack className={styles.playerWrapper}>
        <Video src={kolobokMovie} controls className={styles.video} />
      </Stack>
    </Stack>
  );
}
