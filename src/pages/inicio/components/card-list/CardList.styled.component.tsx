import {
  ComponentWithAs,
  Grid,
  GridItem,
  GridItemProps,
  GridProps,
  Image,
  ImageProps,
  Text,
  TextProps
} from '@chakra-ui/react';

export const CardListGrid: ComponentWithAs<'div', GridProps> = ({ children, ...props }) => (
  <Grid
    width="100%"
    gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
    gap="1.5rem"
    {...props}
  >
    {children}
  </Grid>
)

export const CardItem: ComponentWithAs<'div', GridItemProps> = ({ children, ...props }) => (
  <GridItem
    width="100%"
    backgroundColor="#FFFFFF"
    shadow="md"
    rounded="md"
    padding="8px"
    display="grid"
    gap="10px"
    cursor="pointer"
    transition="all 300ms"
    _hover={{
      backgroundColor: '#e6fdff'
    }}
    {...props}
  >
    {children}
  </GridItem>
)

export const CardCover: ComponentWithAs<'img', ImageProps> = ({ ...props }) => (
  <Image
    objectFit="cover"
    height="10rem"
    width="100%"
    rounded="md"
    alt="board's cover"
    {...props}
  />
)

export const CardText: ComponentWithAs<'p', TextProps> = ({ children, ...props }) => (
  <Text
    isTruncated
    fontSize="lg"
    fontWeight="light"
    {...props}
  >
    {children}
  </Text>
)
