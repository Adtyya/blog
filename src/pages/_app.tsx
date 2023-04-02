/* eslint-disable import/no-extraneous-dependencies */
import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Patrick_Hand } from 'next/font/google';
import NextNProgress from 'nextjs-progressbar';

const PatrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: ['400'],
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={PatrickHand.className}>
    <NextNProgress
      color="#94a3b8"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow={true}
    />
    <Component {...pageProps} />
  </main>
);

export default MyApp;
