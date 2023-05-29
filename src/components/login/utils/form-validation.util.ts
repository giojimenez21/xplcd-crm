import * as yup from 'yup';

export const formValidation = yup.object({
  userName: yup
    .string()
    .required('El username es obligatorio')
    .min(4, 'El nombre debe tener al menos cuatro caracteres'),
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'La contraseña debe ser de ocho caràcteres, tener por lo menos una mayùscula, una minùscula y un nùmero'
    ),
}).required();
