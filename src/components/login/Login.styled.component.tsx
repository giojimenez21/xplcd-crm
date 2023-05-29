import { FC, FormEventHandler, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

import { ImageComponent } from '@/components';
import logo from '@/resources/logo.png';

interface Props {
  children: ReactNode;
}

export const Container: FC<Props> = ({ children }) => (
  <Box
    backgroundColor="white"
    display="flex"
    flexDirection="column"
    alignItems="center"
    shadow="md"
    padding="1rem"
    rounded="md"
    width="95%"
    maxWidth="380px"
  >
    {children}
  </Box>
)

interface FormProps extends Props {
  onSubmit: FormEventHandler<HTMLDivElement> & FormEventHandler<HTMLFormElement>;
}
export const Form: FC<FormProps> = ({ children, onSubmit }) => (
  <Box
    as="form"
    display="grid"
    width="100%"
    gap="1.5rem"
    padding="1rem 0"
    onSubmit={onSubmit}
  >
    {children}
  </Box>
)

export const Logo: FC = () => (
  <ImageComponent
    src={logo}
    alt="Logotipo"
    width="40%"
    margin="1rem auto"
  />
)
