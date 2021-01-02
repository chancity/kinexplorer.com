import {useEffect, useState} from 'react';
import debounce from 'lodash/debounce';
import {isBrowser} from '../../core/const';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: isBrowser ? window.innerWidth : null,
    height: isBrowser ? window.innerHeight : null,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    const debounceHandleResize = debounce(handleResize, 300);
    window.addEventListener('resize', debounceHandleResize);
    debounceHandleResize();
    return () => window.removeEventListener('resize', debounceHandleResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
