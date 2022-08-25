import Head from 'next/head';

import { Wrapper } from './components';
// import Header from '../header';
// import Footer from '../footer';

const Layout = ({ children, title }) => {
  return (
    <>
      <Wrapper>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        {/* <Header /> */}

        <main>{children}</main>
      </Wrapper>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
