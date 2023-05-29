import { Box, ChakraComponent } from '@chakra-ui/react';

export const Container: ChakraComponent<'div', {}> = ({ children }) => (
  <Box
    height="100%"
    width="90%"
    maxWidth="1300px"
    padding="3rem 0"
  >
    {children}
  </Box>
)