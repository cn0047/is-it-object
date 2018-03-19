/**
 * Check that value is an object using strict strategy.
 *
 * @param o Value for inspection is it an object.
 * @returns {boolean} Is object.
 */
function checkByStrictStrategy(o) {
  return (o instanceof Object || typeof o === 'object')
    && (o.constructor === undefined || o.constructor === Object);
}

/**
 * Check that value is an object using weak (non-strict) strategy.
 *
 * @param o Value for inspection is it an object.
 * @returns {boolean} Is object.
 */
function checkByWeakStrategy(o) {
  return o.constructor === undefined || typeof o.constructor === 'function';
}

/**
 * Check that value is an object.
 *
 * @param o Value for inspection is it an object.
 * @param {boolean} strict Strict comparison strategy.
 * @returns {boolean} Is object.
 */
function isObject(o, strict = true) {
  if (o === null || o === undefined) {
    return false;
  }

  return strict === true ? checkByStrictStrategy(o) : checkByWeakStrategy(o);
}

module.exports = isObject;
