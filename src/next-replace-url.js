/**
 * Replace URL parameters in Next.js without re-rendering
 *
 * @param {string} parameter - Route parameter
 * @param {string} value - New parameter value
 */
export function nextReplaceUrl(parameter, value) {
  if (typeof parameter !== 'string') {
    throw new Error('parameter is not a string');
  }

  if (typeof value !== 'string') {
    throw new Error('value is not a string');
  }

  // Current state
  const {as, url} = window.history.state;
  const args = as.split('/');

  // Find the parameter index
  const parameterId = new RegExp(`^(.*)(\\[${parameter}\\])(.*)$`)
    .exec(url)
    .slice(1)[0]
    .split('/')
    .length - 1;

  // Replace value
  args[parameterId] = value;

  // Build the new state
  const newAs = args.join('/');
  const newUrl = url.replace(
    new RegExp(`${parameter}=.*?(?=&|$)`),
    `${parameter}=${value}`,
  );

  // Apply the new state
  window.history.replaceState(
    {...window.history.state, as: newAs, url: newUrl},
    '',
    newAs,
  );
}
