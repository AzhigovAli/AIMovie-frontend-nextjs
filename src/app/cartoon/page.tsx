import { AllTypesMovie } from '@/components/allTypesMovie';
import { Stack } from '@mui/material';
import '../../global.css';

export default function CartoonsPage() {
  return (
    <Stack className="wrapper">
      <AllTypesMovie type="cartoon" />
    </Stack>
  );
}
