import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {ReactReduxContext} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {wrapper} from '../core/store';
import {KinExplorerThemeProvider} from '../core/theme';
import {isServer} from '../core/const';
import {Layout} from '../components/Layout';
import header from '../redux/header';


/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe
 */
if (process.env.NODE_ENV !== 'production' && !isServer) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactDOM = require('react-dom');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axe = require('react-axe');

  axe(React, ReactDOM, 1000);
}

export default wrapper({
  ...header
}).withRedux(
  class MyApp extends App {
    render() {
      const {Component, pageProps} = this.props;
      return (
        <>
          <Head>
            <meta name="viewport"
                  content="width=device-width, initial-scale=1.0, user-scalable=yes" />
            <title>Kin Explorer</title>
          </Head>
          <KinExplorerThemeProvider>
            <ReactReduxContext.Consumer>
              {({store}) => (
                <PersistGate
                  persistor={store.__persistor}
                  loading={
                    <Layout>
                      <Component {...pageProps} />
                    </Layout>
                  }
                >
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </PersistGate>
              )}
            </ReactReduxContext.Consumer>
          </KinExplorerThemeProvider>
        </>
      );
    }
  },
);
