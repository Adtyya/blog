import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Patrick_Hand } from 'next/font/google';

const PatrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: ['400'],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={PatrickHand.className}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
