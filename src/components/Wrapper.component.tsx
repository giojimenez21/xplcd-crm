import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}
const WrapperComponent: FC<Props> = ({ children }) => (
  <Box
    width="100%"
    height="100vh"
    backgroundColor="gray.100"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Box>
)


export default WrapperComponent;
