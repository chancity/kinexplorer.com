import LoggerMiddleware from './loggerMiddleware';
import PromiseMiddleware from './promiseMiddleware';
import createReducerManager from './createReducerManager'

import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from 'redux';

import {createWrapper} from 'next-redux-wrapper';

import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import {isServer} from '../const';


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

const makeStore = (staticReducers) => {

  return (/* {AppTree, Component, router, ctx} */) => {
    if (isServer) {
      return makeConfiguredStore(combineReducers(staticReducers));
    }

    const persistConfig = {
      key: 'nextjs',
      storage,
      blacklist: [],
      version: -1,
    };

    const reducerManager = createReducerManager(staticReducers)

    const persistedReducer = persistReducer(
      persistConfig,
      reducerManager.reduce,
    );


    const store = makeConfiguredStore(persistedReducer);
    store.__persistor = persistStore(store);
    store.__reducerManager = reducerManager;
    return store;
  }
};

export default
  (staticReducers) => createWrapper(makeStore(staticReducers));
