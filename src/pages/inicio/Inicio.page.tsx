import { FC } from 'react';
import { Text } from '@chakra-ui/react';

import { WrapperComponent } from '@/components';
import { CardListComponent } from './components';
import { Container } from './Inicio.styled.page';

const InicioPage: FC = () => {

  return (
    <WrapperComponent>
      <Container>
        <Text
          fontSize="5xl"
          fontWeight="hairline"
          marginBottom="2rem"
        >Inicio</Text>
        <CardListComponent />
      </Container>
    </WrapperComponent>
  )
}

export default InicioPage;
