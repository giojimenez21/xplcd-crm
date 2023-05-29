import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text } from '@chakra-ui/react';
import * as yup from 'yup';

import { Form, NewPasswordsContainer, Title } from './VerifiedAccount.styled.component';
import { formValidation } from './utils';
import {
  WrapperComponent,
  InputComponent,
  ButtonComponent,
  DividerComponent
} from '@/components';
import { useVerifyUser } from '@/features/auth';

type FormData = yup.InferType<typeof formValidation>;

const VerifiedAccountComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: yupResolver(formValidation) });
  const verifyUser = useVerifyUser();

  const onSubmit = (data: FormData) => {
    console.log(data);
    verifyUser.mutate({
      password: data.actualPassword,
      newPassword: data.newPassword
    });
  }

  return (
    <WrapperComponent>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text fontWeight="light">
          <Title>Contraseña Actual</Title><br />
          Coloca la contraseña que se te otorgò
        </Text>
        <InputComponent
          type="password"
          placeholder="Contraseña actual"
          name="actualPassword"
          register={register}
          error={errors.actualPassword?.message}
          isRequired
          isDisabled={verifyUser.isLoading}
        />

        <DividerComponent margin="10px 0" />

        <Text fontWeight="light" marginBottom="1rem">
          <Title>Nueva Contraseña</Title><br />
          Coloca la nueva contraseña con la que ingresaràs a partir de ahora
        </Text>
        <NewPasswordsContainer>
          <InputComponent
            type="password"
            placeholder="Contraseña nueva"
            name="newPassword"
            register={register}
            error={errors.newPassword?.message}
            isRequired
            isDisabled={verifyUser.isLoading}
          />
          <InputComponent
            type="password"
            placeholder="Repite la contraseña"
            name="newPassword2"
            register={register}
            error={errors.newPassword2?.message}
            isRequired
            isDisabled={verifyUser.isLoading}
          />
        </NewPasswordsContainer>

        <ButtonComponent
          type="submit"
          alignSelf="flex-end"
          isLoading={verifyUser.isLoading}
        >
          Cambiar password
        </ButtonComponent>
      </Form>
    </WrapperComponent>
  )
}

export default VerifiedAccountComponent;
