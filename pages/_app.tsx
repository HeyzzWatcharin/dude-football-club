import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import '../scss/main.scss';
import useTranslation from '../hooks/useTranslation';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
