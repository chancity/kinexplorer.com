import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import {ReactReduxContext} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {wrapper} from '../store';
import {KinExplorerThemeProvider} from '@kinexplorer/theme';


/**
 * Determines if we are running on server or in client.
 * @return {boolean} true if running on server
 */
function getIsServerRendered() {
  return typeof window === 'undefined';
}

/**
 * Accessibility tool - outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe
 */
if (process.env.NODE_ENV !== 'production' && !getIsServerRendered()) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ReactDOM = require('react-dom');
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axe = require('react-axe');

  axe(React, ReactDOM, 1000);
}

export default wrapper.withRedux(
  class MyApp extends App {
    render() {
      const {Component, pageProps} = this.props;
      return (
        <>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, user-scalable=yes"
            />
          </Head>
          <KinExplorerThemeProvider>
            <ReactReduxContext.Consumer>
              {({store}) => (
                <PersistGate
                  persistor={store.__persistor}
                  loading={<Component {...pageProps} />}>
                  <Component {...pageProps} />
                </PersistGate>
              )}
            </ReactReduxContext.Consumer>
          </KinExplorerThemeProvider>
        </>
      );
    }
  },
);
