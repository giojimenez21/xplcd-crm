import { WrapperComponent } from '@/components';
import {
  Container,
  Logo,
  GlowEffect
} from './ValidateAuth.styled.component';

const ValidateUserComponent = () => {
  return (
    <WrapperComponent>
      <Container>
        <GlowEffect />
        <Logo />
      </Container>
    </WrapperComponent >
  )
}

export default ValidateUserComponent;
