/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from 'next/link';
import { jsx, Box, Container, Grid, Link, SxProp, Text } from 'theme-ui';

const socialAccounts = {
  github: {
    username: 'expandrew',
    url: 'https://github.com/expandrew',
  },
  instagram: {
    username: 'expandrew',
    url: 'https://instagram.com/expandrew',
  },
  linkedin: {
    username: 'andrewwestling',
    url: 'https://linkedin.com/in/andrewwestling',
  },
  twitter: {
    username: 'andwest',
    url: 'https://twitter.com/andwest',
  },
  lastfm: {
    username: 'andwest',
    url: 'https://last.fm/user/andwest',
  },
  spotify: {
    username: '1283883',
    url: 'https://open.spotify.com/user/1283883',
  },
};

export const Footer = (props: { sx?: SxProp }) => {
  return (
    <footer sx={{ variant: 'styles.footer', ...props.sx }}>
      <Container>
        <Grid columns={['1fr', '1fr 1fr 1fr']} gap={2}>
          <Box sx={{ marginBottom: 3 }}>
            <Text variant="footer">Andrew M Westling</Text>
            <Text variant="footer">Brooklyn, NY</Text>
            <Text variant="footer">
              <Link href="mailto:hi@andrewwestling.com">
                hi@andrewwestling.com
              </Link>
            </Text>
            <Text variant="footer">
              <NextLink href="/resume" passHref>
                <Link>Resume</Link>
              </NextLink>
            </Text>
            <Text variant="footer" sx={{ a: { color: 'highlight' } }}>
              <NextLink href="/awds" passHref>
                <Link>AWDS</Link>
              </NextLink>
            </Text>
          </Box>
          <Box>
            {Object.keys(socialAccounts).map((account) => (
              <Link
                key={account}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                href={socialAccounts[account].url}
              >
                <svg width={16} height={16} fill={'currentColor'}>
                  <use
                    xlinkHref={`/assets/minima-social-icons.svg#${account}`}
                  ></use>
                </svg>
                <Text variant="footer" sx={{ marginLeft: 2 }}>
                  {socialAccounts[account].username}
                </Text>
              </Link>
            ))}
          </Box>
        </Grid>
      </Container>
    </footer>
  );
};
