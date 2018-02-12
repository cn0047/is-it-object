isObject
-

Most powerful way to check that value is an object in `javascript`.

## Installation

`npm i isObject`

## Usage

````js
const isObject = require('isobject');

// Strict comparisons:
isObject({});                  // true
isObject([]);                  // false
isObject(undefined);           // false
isObject(null);                // false
isObject('');                  // false
isObject(/.*/);                // false
isObject(new Date());          // false
isObject(function () {});      // false
isObject(Object.create(null)); // true

// Non-strict comparisons:
isObject({}, false);                  // true
isObject([], false);                  // true
isObject(undefined, false);           // false
isObject(null, false);                // false
isObject('', false);                  // true
isObject(/.*/, false);                // true
isObject(new Date(), false);          // true
isObject(function () {}, false);      // true
isObject(Object.create(null, false)); // true
````
More information available [here](https://stackoverflow.com/a/46663081/3612353).

## Tests

`npm test`
