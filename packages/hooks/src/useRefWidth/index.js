import {useEffect, useRef, useState} from 'react';

const useRefWidth = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [boundingClientRect, setBoundingClientRect] = useState({});

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
    setHeight(ref.current.offsetHeight);
    setBoundingClientRect(ref.current.getBoundingClientRect());
  }, [ref.current]);

  return {ref, width, height, boundingClientRect};
};

export default useRefWidth;
