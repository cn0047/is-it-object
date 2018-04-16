/**
 * Check that value is an object.
 *
 * @param o Value for inspection is it an object.
 * @returns {boolean} Is object.
 */
function isObject(o) {
  return typeof o === 'object' && Array.isArray(o) === false && o !== null;
}

module.exports = isObject;
