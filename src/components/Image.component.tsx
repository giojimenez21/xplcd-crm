import { FC } from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

const ImageComponent: FC<ImageProps> = ({ src, alt = 'default image', ...props }) => (
  <Image
    src={src}
    alt={alt}
    {...props}
  />
)

export default ImageComponent;
