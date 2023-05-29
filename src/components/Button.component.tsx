import { Button, ButtonProps } from '@chakra-ui/react';
import { ReactNode, FC } from 'react'

interface Props extends ButtonProps {
  children: ReactNode;
}
const ButtonComponent: FC<Props> = ({ children, ...props }) => {
  return (
    <Button
      colorScheme="purple"
      {...props}
    >
      {children}
    </Button>
  )
}

export default ButtonComponent;
