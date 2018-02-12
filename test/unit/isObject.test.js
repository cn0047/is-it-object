const assert = require('assert');

const isObject = require('./../../src/isObject');

describe('Test suite for: `isObject`.', () => {
  const f = function testFunction() {};

  describe('Strict comparisons:', () => {
    it('# Plain object:', () => {
      assert.strictEqual(isObject({}), true);
    });
    it('# Plain array:', () => {
      assert.strictEqual(isObject([]), false);
    });
    it('# Undefined:', () => {
      assert.strictEqual(isObject(undefined), false);
    });
    it('# Null:', () => {
      assert.strictEqual(isObject(null), false);
    });
    it('# Empty string:', () => {
      assert.strictEqual(isObject(''), false);
    });
    it('# Regex:', () => {
      assert.strictEqual(isObject(/.*/), false);
    });
    it('# Date:', () => {
      assert.strictEqual(isObject(new Date()), false);
    });
    it('# Function:', () => {
      assert.strictEqual(isObject(f), false);
    });
    it('# Object.create:', () => {
      assert.strictEqual(isObject(Object.create(null)), true);
    });
  });

  describe('Non-strict comparisons:', () => {
    it('# Plain object:', () => {
      assert.strictEqual(isObject({}, false), true);
    });
    it('# Plain array:', () => {
      assert.strictEqual(isObject([], false), true);
    });
    it('# Undefined:', () => {
      assert.strictEqual(isObject(undefined, false), false);
    });
    it('# Null:', () => {
      assert.strictEqual(isObject(null, false), false);
    });
    it('# Empty string:', () => {
      assert.strictEqual(isObject('', false), true);
    });
    it('# Regex:', () => {
      assert.strictEqual(isObject(/.*/, false), true);
    });
    it('# Date:', () => {
      assert.strictEqual(isObject(new Date(), false), true);
    });
    it('# Function:', () => {
      assert.strictEqual(isObject(f, false), true);
    });
    it('# Object.create:', () => {
      assert.strictEqual(isObject(Object.create(null), false), true);
    });
  });
});
