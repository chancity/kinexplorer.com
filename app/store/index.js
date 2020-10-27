import {persistReducer, persistStore} from 'redux-persist';

import {LoggerMiddleware, PromiseMiddleware} from './_middleware';

import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createWrapper} from 'next-redux-wrapper';

const reducers = {};

const makeConfiguredStore = (reducer) => {
  return createStore(
    reducer,
    undefined,
    applyMiddleware(
      ...[
        LoggerMiddleware,
        PromiseMiddleware,
        thunkMiddleware,
      ],
    ),
  );
};

export const makeStore = (/* {AppTree, Component, router, ctx} */) => {
  if (!process.browser) {
    return makeConfiguredStore(combineReducers(reducers));
  }

  const persistConfig = {
    key: 'nextjs',
    blacklist: [],
    version: -1,
  };

  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers(reducers),
  );

  const store = makeConfiguredStore(persistedReducer);
  store.__persistor = persistStore(store); // Nasty hack
  return store;
};

export const wrapper = createWrapper(makeStore);
