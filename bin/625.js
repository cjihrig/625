#!/usr/bin/env node
'use strict';
var ChildProcess = require('child_process');
var Path = require('path');
var location = require.resolve('babel-cli/package.json');
var pkg = require(location);
var cmd = Path.resolve(Path.dirname(location), pkg.bin.babel);
var args = process.argv.slice(2);
var options = {
  cwd: process.cwd(),
  stdio: 'inherit',
  encoding: 'utf8'
};
var babel = ChildProcess.spawn(cmd, args, options);

babel.on('error', console.error);
babel.on('close', process.exit);
