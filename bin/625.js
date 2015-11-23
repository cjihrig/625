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

// FIXME: Ideally, this should load our local .babelrc. However, specifying
// the .babelrc path from the command line does not seem to be supported.
// Since we spawn Babel with the caller's working directory, Babel won't
// see our .babelrc. The workaround is to append our settings to the existing
// arguments. Currently, that just means using the es2015 preset.
args.push('--presets', require.resolve('babel-preset-es2015'));

var babel = ChildProcess.spawn(cmd, args, options);

babel.on('error', console.error);
babel.on('close', process.exit);
