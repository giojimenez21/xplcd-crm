import { FC } from 'react';
import { Box, GridProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { ImageComponent } from '@/components';
import logo from '@/resources/logo.png';

export const Container: FC<GridProps> = ({ children }) => (
  <motion.div
    style={{
      display: 'grid',
      position: 'relative'
    }}
    initial={{ scale: 0.9 }}
    animate={{ scale: 1.1 }}
    transition={{
      ease: 'easeInOut',
      duration: 1.25,
      repeat: Infinity,
      repeatType: 'reverse'
    }}
  >
    {children}
  </motion.div>
)

export const Logo = () => (
  <ImageComponent
    src={logo}
    alt="Logotipo"
    width={["250px", "250px", "350px"]}
    margin="0 auto"
    zIndex="1"
  />
)

export const GlowEffect = () => (
  <Box
    as="span"
    position="absolute"
    width="1px"
    height="1px"
    left="calc(50% - 1px)"
    top="calc(50% - 1px)"
    boxShadow={`
      0 0 120px 30px #fff,
      0 0 160px 60px #f0f,
      0 0 200px 90px #0ff; 
    `}
  />
)
