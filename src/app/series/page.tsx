import { AllTypesMovie } from '@/components/allTypesMovie';
import '../../global.css';
import { Stack } from '@mui/material';

export default function SeriesPage() {
  return (
    <Stack className="wrapper">
      <AllTypesMovie type="series" />
    </Stack>
  );
}
