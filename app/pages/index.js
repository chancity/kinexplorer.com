import React, {useEffect} from 'react';
import {useStore} from 'react-redux';
import {combineReducers} from 'redux';

const Page = () => {
  const store = useStore();

  useEffect(() => {
    if(store) {
      store.__reducerManager.add(
        'PageName',
        combineReducers({
          test1: (state = {}, action) => {
            console.log('test1', action);
            console.log('test1', state)
            return state;
          },
          test2: (state = {}, action) => {
            console.log('test2', action);
            console.log('test2', state)
            return state;
          }
        })
      )

      return () => {
        store.__reducerManager.remove('PageName')
      }
    }
  }, [store])

  return (
    <div />
  );
};

export default Page;
