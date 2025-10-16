import { Stack } from '@mui/material';
import '../global.css';
import { AllTypesMovie } from '@/components/allTypesMovie';

export default function Home() {
  return (
    <Stack className="wrapper">
      <AllTypesMovie />
    </Stack>
  );
}
