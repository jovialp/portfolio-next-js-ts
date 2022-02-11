import '../styles/globals.css';
import React from 'react';

// Layout Type
import { NextPageWithLayout } from '../customTypes/types';

// Type
type Props = {
  Component: NextPageWithLayout
  //this any type is from the "import { AppProps } from 'next/app'"
  pageProps: any
}

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout

  return getLayout(<Component {...pageProps} />)
};

export default MyApp
