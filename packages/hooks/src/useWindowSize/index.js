import {useEffect, useState} from 'react';
import debounce from 'lodash/debounce';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: process.browser ? window.innerWidth : null,
    height: process.browser ? window.innerHeight : null,
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
