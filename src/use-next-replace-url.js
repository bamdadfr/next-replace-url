import {useEffect} from 'react';
import {nextReplaceUrl} from './next-replace-url';

/**
 * React Hook for replacing URL parameter in Next.js without re-rendering
 *
 * @param {string} parameter - Route parameter
 * @param {string} value - New parameter value
 */
export function useNextReplaceUrl(parameter, value) {
  useEffect(() => {
    nextReplaceUrl(parameter, value);
  }, [parameter, value]);
}
