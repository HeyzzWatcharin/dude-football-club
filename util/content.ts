/**
 *  Next.js is a React framework with pre-rendering abilities.
 *  This means that for every page, Next.js will try to generate
 *  the HTML of the page for better SEO and performance.
 *  Then it will fail with "ReferenceError: window is not defined":
 *  Because in the Node.js world, window is not defined, window is only available in browsers.
 *
 *  this function below is to check that there is window before using it
 */

export const isBrowser = () => typeof window !== 'undefined';