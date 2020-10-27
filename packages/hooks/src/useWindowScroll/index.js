import {useEffect, useState} from 'react';

export const DIRECTION = {
  down: 'DOWN',
  up: 'UP',
  unset: 'UNSET',
};

const getDocumentBoundingClientRect = (documentElement) =>
  typeof documentElement.getBoundingClientRect === 'function' ?
    documentElement.getBoundingClientRect() :
    {
      top: 0,
      left: 0,
    };

const getDocumentElement = (isServer) =>
  !isServer ?
    document.documentElement
    : {
      scrollHeight: 0,
      scrollWidth: 0,
      getBoundingClientRect: getDocumentBoundingClientRect,
    };

const getWindowSize = (isServer) => ({
  innerHeight: !isServer ? window.innerHeight : 0,
  innerWidth: !isServer ? window.innerWidth : 0,
});

const createScrollState = (lastScrollTop) => {
  const isServer = !process.browser;
  const documentElement = getDocumentElement(isServer);
  const bodyBoundingRect = documentElement.getBoundingClientRect();
  const windowSize = getWindowSize(isServer);

  const scrollY = bodyBoundingRect.top;
  const scrollX = bodyBoundingRect.left;
  const scrollYMax = documentElement.scrollHeight - windowSize.innerHeight;
  const scrollXMax = documentElement.scrollWidth - windowSize.innerWidth;
  const scrollDirection = lastScrollTop > bodyBoundingRect.top ? DIRECTION.down : DIRECTION.up;

  return {
    scrollY,
    scrollX,
    scrollDirection,
    scrollYMax,
    scrollXMax,
  };
};

const useWindowScroll = () => {
  const [state, setState] = useState(createScrollState(0));

  useEffect(() => {
    const listener = () =>
      setState(previousState =>
        createScrollState(previousState.scrollY),
      );

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return state;
};

export default useWindowScroll;
