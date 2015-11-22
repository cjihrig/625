# DO NOT USE!

# 625

[![Current Version](https://img.shields.io/npm/v/625.svg)](https://www.npmjs.org/package/625)
[![Build Status via Travis CI](https://travis-ci.org/continuationlabs/625.svg?branch=master)](https://travis-ci.org/continuationlabs/625)
![Dependencies](http://img.shields.io/david/continuationlabs/625.svg)

Babel 6 CLI convenience wrapper. If you have a simple Babel 6 setup, 625 can remove much of the boilerplate. No need for a `.babelrc` file. No need to pollute your `package.json` file with a bunch of Babel modules. No need to remember which Babel module does what. No need to repeat this process for all of your projects.

## Steps to use 625:

1. `npm i 625`
2. Replace any command line usage of Babel with `625`.
3. Remove the unnecessary Babel boilerplate and cruft.
4. Profit!

## The Fine Print

- 625 provides the functionality of `babel-preset-es2015`.
- 625 is only a wrapper around Babel, which is run inside of a child process.
- 625 does not currently provide any type of API; just a simple CLI wrapper.
