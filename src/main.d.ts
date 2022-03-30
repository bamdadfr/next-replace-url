declare module 'next-replace-url' {
  /**
   * Replace URL parameters in Next.js without re-rendering
   *
   * @param {string} parameter - Route parameter
   * @param {string} value - New parameter value
   */
  export function nextReplaceUrl(parameter: string, value: string): void;

  /**
   * React Hook for replacing URL parameter in Next.js without re-rendering
   *
   * @param {string} parameter - Route parameter
   * @param {string} value - New parameter value
   */
  export function useNextReplaceUrl(parameter: string, value: string): void;
}
