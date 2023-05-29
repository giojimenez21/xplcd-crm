import { FC, FormEventHandler, ReactNode } from 'react';
import { Flex, Grid, Text } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

interface FormProps extends Props {
  onSubmit: FormEventHandler<HTMLDivElement> & FormEventHandler<HTMLFormElement>;
}
export const Form: FC<FormProps> = ({ children, onSubmit }) => (
  <Flex
    as="form"
    flexDirection="column"
    width="90%"
    maxWidth="700px"
    margin="0 auto"
    rounded="md"
    shadow="md"
    padding="1rem"
    backgroundColor="white"
    gap="1rem"
    onSubmit={onSubmit}
  >
    {children}
  </Flex>
)

export const NewPasswordsContainer: FC<Props> = ({ children }) => (
  <Grid
    gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
    gap="1.5rem"
  >
    {children}
  </Grid>
)

export const Title: FC<Props> = ({ children }) => (
  <Text
    as="span"
    fontWeight="hairline"
    fontSize="3xl"
    marginBottom="10px"
  >
    {children}
  </Text>
)
