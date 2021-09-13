/** @jsxRuntime classic */
/** @jsx jsx */
import NextApp from 'next/app';
import Head from 'next/head';
import { jsx, Container, Flex, ThemeProvider } from 'theme-ui';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import theme from '../theme';

declare const window: any;
const goatCount = () => {
  window.goatcounter.count({
    path: location.pathname + location.search + location.hash,
  });
};

export default class App extends NextApp {
  constructor(props) {
    super(props);
    this.props.router?.events?.on('routeChangeComplete', goatCount);
  }

  componentWillUnmount() {
    this.props.router.events?.off('routeChangeComplete', goatCount);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <title>andrewwestling.com</title>
          <script
            data-goatcounter="https://andrewwestling.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          ></script>
        </Head>
        <Flex sx={{ minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          <main sx={{ flex: 1 }}>
            <Container sx={{ marginBottom: 5 }}>
              <Component {...pageProps} />
            </Container>
          </main>
          <Footer sx={{ flex: 0 }} />
        </Flex>
      </ThemeProvider>
    );
  }
}
