import { FC, useState } from 'react';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { UseFormRegister } from 'react-hook-form';

interface Props extends InputProps {
  /**
   * Función de registro proporcionada por useForm() de React Hook Form.
   */
  register: UseFormRegister<any>;

  /**
   * Nombre del campo en el formulario.
   */
  name: string;

  /**
   * Mensaje de error a mostrar debajo del campo si es necesario.
   */
  error?: string;

  /**
   * Texto de marcador de posición para el campo.
   */
  placeholder?: string;
}

/**
 * Componente de entrada personalizado que puede manejar entradas de texto y contraseñas.
 */
const InputComponent: FC<Props> = ({
  register,
  name,
  error,
  isRequired,
  placeholder = '',
  type = 'text',
  ...props
}) => {
  /**
   * Estado que indica si la contraseña se muestra o no.
   */
  const [show, setShow] = useState<boolean>(false);

  /**
   * Manejador de clic para el botón de mostrar/ocultar contraseña.
   */
  const handleClick = () => setShow(!show);

  return (
    <FormControl
      variant="floating"
      isRequired={isRequired}
      isInvalid={!!error}
    >
      {type !== 'password' ? (
        <Input
          type={type}
          placeholder=" "
          focusBorderColor={error ? 'red.500' : 'purple.500'}
          {...register(name)}
          {...props}
        />
      ) : (
        <Input
          type={show ? 'text' : 'password'}
          placeholder=" "
          focusBorderColor={error ? 'red.500' : 'purple.500'}
          {...register(name)}
          {...props}
        />
      )}
      <FormLabel fontWeight="normal" cursor="text">{placeholder}</FormLabel>
      <FormErrorMessage>{error}</FormErrorMessage>

      {type === 'password' && (
        <Button
          h="1.75rem"
          size="sm"
          fontSize="xl"
          position="absolute"
          right="6px"
          top="6px"
          zIndex="2"
          onClick={handleClick}
        >
          {show ? <AiFillEyeInvisible /> : <AiFillEye />}
        </Button>
      )}
    </FormControl>
  );
}

export default InputComponent;
