import { FC } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';

import Container from './Container';
import { theme } from '@/theme';

const queryClient = new QueryClient();

const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Container />
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
