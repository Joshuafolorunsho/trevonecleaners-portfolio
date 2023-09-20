import { type AppType } from 'next/dist/shared/lib/utils';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from '~/components';
import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MyApp;
