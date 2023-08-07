/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from 'next/link';
import { jsx, Box, Container, Grid, Link, SxProp, Text } from 'theme-ui';

const socialAccounts = [
  {
    icon: 'instagram',
    username: 'expandrew',
    url: 'https://instagram.com/expandrew',
  },
  {
    icon: 'instagram',
    username: 'antiperformances',
    url: 'https://instagram.com/antiperformances',
  },
  {
    icon: 'github',
    username: 'expandrew',
    url: 'https://github.com/expandrew',
  },
  {
    icon: 'linkedin',
    username: 'andrewwestling',
    url: 'https://linkedin.com/in/andrewwestling',
  },
  {
    icon: 'lastfm',
    username: 'andwest',
    url: 'https://last.fm/user/andwest',
  },
  {
    icon: 'spotify',
    username: '1283883',
    url: 'https://open.spotify.com/user/1283883',
  },
];

export const Footer = (props: { sx?: SxProp }) => {
  return (
    <footer className="no-print" sx={{ variant: 'styles.footer', ...props.sx }}>
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
              <NextLink href="/projects" passHref>
                <Link>Projects</Link>
              </NextLink>
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
                key={socialAccounts[account].url}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                href={socialAccounts[account].url}
              >
                <svg width={20} height={20} fill={'currentColor'}>
                  <use
                    xlinkHref={`/assets/minima-social-icons.svg#${socialAccounts[account].icon}`}
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
