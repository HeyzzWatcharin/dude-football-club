import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import '../scss/main.scss';
import useTranslation from '../hooks/useTranslation';
import DudeNavbar from '../components/molecule/navbar-header/navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DudeNavbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
