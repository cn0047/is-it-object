/**
 * Check that value is an object.
 *
 * @param o Value for inspection is it an object.
 * @returns {boolean} Is object.
 */
function isObject(o) {
  if (o === null) {
    return false;
  }

  return typeof o === 'object' && Array.isArray(o) === false;
}

module.exports = isObject;
