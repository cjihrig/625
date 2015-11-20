'use strict';
var ChildProcess = require('child_process');
var Path = require('path');
var Code = require('code');
var Fse = require('fs-extra');
var Lab = require('lab');

// Test shortcuts
var lab = exports.lab = Lab.script();
var expect = Code.expect;
var describe = lab.describe;
var it = lab.it;

Code.settings.truncateMessages = false;

var fixturesDirectory = Path.join(__dirname, 'fixtures');
var outputDirectory = Path.join(process.cwd(), 'test-tmp');

function run (args) {
  return ChildProcess.fork('bin/625', args);
}

describe('625', function () {
  lab.afterEach(function (done) {
    Fse.remove(outputDirectory, done);
  });

  it('transpiles a directory of files', function (done) {
    var child = run([
      fixturesDirectory,
      '--out-dir',
      outputDirectory
    ]);

    child.once('error', function (err) {
      expect(err).to.not.exist();
    });

    child.once('close', function (code, signal) {
      expect(code).to.equal(0);
      expect(signal).to.not.exist();

      var outputFile = Path.join(outputDirectory, 'test.js');
      var data = Fse.readFileSync(outputFile, 'utf8');

      expect(data).to.equal('"use strict";\n\nvar foo = 1;');
      done();
    });
  });
});
