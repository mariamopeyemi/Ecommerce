import React from 'react';
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../next-mui-setup/theme";
import createEmotionCache from "../next-mui-setup/createEmotionCache";
import { CartProvider } from '../store/cart.context';
import "../styles/globals.scss";
import "../styles/typography.scss";
import AOS from 'aos'
import 'aos/dist/aos.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  if (typeof window !== 'undefined') {
    AOS.init();
  }
 
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Mariam Store</title>
          <link rel="icon" href="/images/favIcon.svg" sizes="20x20" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
       
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {/* <AppContextProvider> */}
          <CartProvider>
          <Component {...pageProps} />
          </CartProvider>
                
          {/* </AppContextProvider> */}
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
