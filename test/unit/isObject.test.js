const assert = require('assert');

const isObject = require('./../../src/isObject');

describe('Test suite for: `isObject`.', () => {
  const f = function testFunction() {};

  describe('Basic comparisons:', () => {
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
    it('# Zero:', () => {
      assert.strictEqual(isObject(0), false);
    });
    it('# Empty string:', () => {
      assert.strictEqual(isObject(''), false);
    });
    it('# Regex:', () => {
      assert.strictEqual(isObject(/.*/), true);
    });
    it('# Date:', () => {
      assert.strictEqual(isObject(new Date()), true);
    });
    it('# Function:', () => {
      assert.strictEqual(isObject(f), false);
    });
    it('# Object.create {}:', () => {
      assert.strictEqual(isObject(Object.create({})), true);
    });
    it('# Object.create null:', () => {
      assert.strictEqual(isObject(Object.create(null)), true);
    });
    it('# Object.create prototype:', () => {
      assert.strictEqual(isObject(Object.create(Object.prototype)), true);
    });
  });
});
