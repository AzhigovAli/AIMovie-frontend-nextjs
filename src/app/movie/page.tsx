import { AllTypesMovie } from '@/components/allTypesMovie';
import { Stack } from '@mui/material';
import '../../global.css';

export default function MoviePage() {
  return (
    <Stack className="wrapper">
      <AllTypesMovie type="movie" />
    </Stack>
  );
}
