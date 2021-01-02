import {useEffect, useState} from 'react';
import {isBrowser} from '../../core/const';


export default function useScript(props) {
  const {
    src,
    checkForExisting = true,
    lazy = true,
    ...attributes
  } = props;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isBrowser) return;

    if (checkForExisting) {
      const existing = document.querySelectorAll(`script[src="${src}"]`);
      if (existing.length > 0) {
        setLoading(false);
        return;
      }
    }

    const scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.setAttribute('src', src);
    scriptElement.async = true;

    Object.keys(attributes).forEach((key) => {
      if (scriptElement[key] === undefined) {
        scriptElement.setAttribute(key, attributes[key]);
      } else {
        scriptElement[key] = attributes[key];
      }
    });

    const handleLoad = () => {
      setLoading(false);
    };

    const handleError = (error) => {
      setError(error);
    };

    scriptElement.addEventListener('load', handleLoad);
    scriptElement.addEventListener('error', handleError);

    const addScript = () => {
      document.getElementsByTagName('head')[0].appendChild(scriptElement);
      window.removeEventListener('load', addScript);
    };

    if (process.browser) {
      if (document.readyState !== 'complete' && lazy) {
        window.addEventListener('load', addScript);
      } else {
        addScript();
      }
    }

    return () => {
      window.removeEventListener('load', addScript);
      scriptElement.removeEventListener('load', handleLoad);
      scriptElement.removeEventListener('error', handleError);
    };

    // we need to ignore the attributes as they're a new object per call, so we'd never skip an effect call
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return [loading, error];
}
