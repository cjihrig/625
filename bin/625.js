#!/usr/bin/env node
'use strict';
var ChildProcess = require('child_process');
var Path = require('path');
var cmd = Path.join(__dirname, '..', 'node_modules', '.bin', 'babel');
var args = process.argv.slice(2);
var options = {
  cwd: process.cwd(),
  stdio: 'inherit',
  encoding: 'utf8'
};
var babel = ChildProcess.spawn(cmd, args, options);

babel.on('error', console.error);
babel.on('close', process.exit);
