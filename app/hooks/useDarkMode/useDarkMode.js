import {useEffect, useState} from 'react';

const matchDark = '(prefers-color-scheme: dark)';

export default () => {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia && window.matchMedia(matchDark),
  );

  useEffect(() => {
    const matcher = window.matchMedia(matchDark);
    const onChange = ({matches}) => setIsDark(matches);
    matcher.addEventListener(onChange);
    return () => {
      matcher.removeEventListener(onChange);
    };
  }, [setIsDark]);

  return isDark;
};
