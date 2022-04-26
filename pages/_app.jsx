import Router from 'next/router';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { theme } from '../utils/theme';


function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
export default MyApp
