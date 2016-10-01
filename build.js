'use strict';

const babel = require('babel-core'),
  fs = require('fs');

// es5 build
babel.transformFile('./src/index.js', (err, result) => {
  if (err) throw err;

  let filename = './lib/index.js';
  fs.writeFile(filename, result.code, onWriteCompleted(filename));
});

// jsnext build

let jsnextOpts = {
  presets: [ [ 'es2015', { modules: false } ] ],
  babelrc: false
};

babel.transformFile('./src/index.js', jsnextOpts, (err, result) => {
  if (err) throw err;

  let filename = './lib/index.jsnext.js';
  fs.writeFile(filename, result.code, onWriteCompleted(filename));
});

function onWriteCompleted(filename) {
  return err => {
    if (err) throw err;
    console.log(`${filename} written`);
  }
}
