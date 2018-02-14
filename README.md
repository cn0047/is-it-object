isObject
-

[![NPM](https://nodei.co/npm/is-it-object.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-it-object/)

[![Build Status](https://travis-ci.org/cn007b/is-it-object.svg?branch=master)](https://travis-ci.org/cn007b/is-it-object)
[![Coverage Status](https://coveralls.io/repos/github/cn007b/is-it-object/badge.svg?branch=master)](https://coveralls.io/github/cn007b/is-it-object?branch=master)
[![bitHound Code](https://www.bithound.io/github/cn007b/is-it-object/badges/code.svg)](https://www.bithound.io/github/cn007b/is-it-object)

Most powerful way to check that value is an object in `javascript`.

## Installation

`npm i is-it-object`

## Usage

````js
const isObject = require('is-it-object');

// Strict comparisons:
isObject({});                              // true
isObject([]);                              // false
isObject(undefined);                       // false
isObject(null);                            // false
isObject(0);                               // false
isObject('');                              // false
isObject(/.*/);                            // false
isObject(new Date());                      // false
isObject(function () {});                  // false
isObject(Object.create({}));               // true
isObject(Object.create(null));             // true
isObject(Object.create(Object.prototype)); // true

// Non-strict comparisons (to check is it instance of any class):
isObject({}, false);                              // true
isObject([], false);                              // true
isObject(undefined, false);                       // false
isObject(null, false);                            // false
isObject('', false);                              // true
isObject(/.*/, false);                            // true
isObject(new Date(), false);                      // true
isObject(function () {}, false);                  // true
isObject(Object.create(null), false);             // true
isObject(Object.create(Object.prototype), false); // true
````
More information available [here](https://stackoverflow.com/a/46663081/3612353).

## Tests

`npm test`
