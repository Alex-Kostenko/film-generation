import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { useIdleTimer } from 'react-idle-timer';

import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '../fonts/fonts.css';
import { Paths } from '@/utils/paths';

const App = ({ Component, pageProps }: AppProps) => {
  const onIdle = () => {
    if (localStorage.getItem('access_token')) {
      localStorage.removeItem('access_token');
      window.location.href = Paths.registration;
    }
  };

  useIdleTimer({
    onIdle,
    timeout: 7200000,
    crossTab: true,
    startOnMount: true,
  });
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default appWithTranslation(App);
