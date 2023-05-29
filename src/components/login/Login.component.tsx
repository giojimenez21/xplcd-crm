import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Container, Form, Logo } from './Login.styled.component';
import { formValidation } from './utils';
import {
  WrapperComponent,
  InputComponent,
  ButtonComponent,
  DividerComponent
} from '@/components';
import { useAuth } from '@/features/auth';

type FormData = yup.InferType<typeof formValidation>;

const LoginComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(formValidation) });
  const auth = useAuth();

  const onSubmit = (data: FormData) => {
    auth.mutate(data);
  }

  return (
    <WrapperComponent>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo />
          <DividerComponent />
          <InputComponent
            placeholder="Username"
            name="userName"
            register={register}
            error={errors.userName?.message}
            isRequired
            isDisabled={auth.isLoading}
          />
          <InputComponent
            placeholder="Password"
            name="password"
            type="password"
            register={register}
            error={errors.password?.message}
            isRequired
            isDisabled={auth.isLoading}
          />
          <ButtonComponent type="submit" isLoading={auth.isLoading}>
            Iniciar Sesion
          </ButtonComponent>
        </Form>
      </Container>
    </WrapperComponent>
  )
}

export default LoginComponent;
