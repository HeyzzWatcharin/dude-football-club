import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import '../scss/main.scss';
import DudeNavbar from '../components/molecule/navbar-header';
import Head from 'next/head';
import useTranslation from '../hooks/useTranslation';

function MyApp({ Component, pageProps }: AppProps) {

  const { translate } = useTranslation();

  return (
    <>
      <Head>
        <title>{translate('NAVBAR_HEADER')}</title>
      </Head>
      <div className='w-100 mb-5'>
        <DudeNavbar />
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
