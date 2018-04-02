isObject
-

[![NPM](https://nodei.co/npm/is-it-object.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/is-it-object/)

[![Build Status](https://travis-ci.org/cn007b/is-it-object.svg?branch=master)](https://travis-ci.org/cn007b/is-it-object)
[![Coverage Status](https://coveralls.io/repos/github/cn007b/is-it-object/badge.svg?branch=master)](https://coveralls.io/github/cn007b/is-it-object?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/8da29a447e037573f675/maintainability)](https://codeclimate.com/github/cn007b/is-it-object/maintainability)
[![bitHound Code](https://www.bithound.io/github/cn007b/is-it-object/badges/code.svg)](https://www.bithound.io/github/cn007b/is-it-object)

Most powerful way to check that value is an object in `javascript`.

## Installation

`npm i is-it-object`

## Usage

````js
const isObject = require('is-it-object');

isObject({});                              // true
isObject([]);                              // false
isObject(undefined);                       // false
isObject(null);                            // false
isObject(0);                               // false
isObject('');                              // false
isObject(/.*/);                            // true
isObject(new Date());                      // true
isObject(function () {});                  // false
isObject(Object.create({}));               // true
isObject(Object.create(null));             // true
isObject(Object.create(Object.prototype)); // true
````
More information available [here](https://stackoverflow.com/a/46663081/3612353).

## Tests

`npm test`
