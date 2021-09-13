/** @jsxRuntime classic */
/** @jsx jsx */
import NextImage from 'next/image';
import NextLink from 'next/link';
import { jsx, Box, Container, Flex, Link, Text, SxProp } from 'theme-ui';
import { DarkModeToggle } from './DarkModeToggle';

export const Header = (props: { sx?: SxProp }) => (
  <header
    role="banner"
    sx={{
      alignItems: 'center',
      borderBottomColor: 'highlight',
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      borderTopColor: 'primary',
      borderTopStyle: 'solid',
      borderTopWidth: '5px',
      display: 'flex',
      minHeight: '56px',
      ...props.sx,
    }}
  >
    <Container>
      <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ flex: '0 1 auto' }}>
          <NextLink href="/" passHref>
            <Link sx={{ display: 'flex', alignItems: 'center' }}>
              <NextImage
                src="/assets/a.png"
                alt="Andrew Westling 'A' logo"
                width={32}
                height={32}
                sx={{ borderRadius: 'full' }}
              />
              <Text sx={{ marginLeft: '10px' }}>andrewwestling.com</Text>
            </Link>
          </NextLink>
        </Box>
        <Box>
          <DarkModeToggle />
        </Box>
      </Flex>
    </Container>
  </header>
);
