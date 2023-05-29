import { extendTheme } from '@chakra-ui/react';
import { floatLabel } from '@/components';

export const theme = extendTheme({
  components: {
    Form: floatLabel,
  },
});
