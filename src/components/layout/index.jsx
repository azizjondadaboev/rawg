import Head from 'next/head';

import { Wrapper } from './components';
import Header from '../header';

const Layout = ({ children, title }) => {
  return (
    <>
      <Wrapper>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <Header />

        <main>{children}</main>
      </Wrapper>
    </>
  );
};

export default Layout;
