'use strict';

const babel = require('babel-core'),
  fs = require('fs');

// es5 build
babel.transformFile('./src/index.js', (err, result) => {
  if (err) throw err;
  fs.writeFile('./lib/index.js', result.code, onWriteCompleted);
});

// jsnext build

let jsnextOpts = {
  presets: [ [ 'es2015', { modules: false } ] ],
  babelrc: false
};

babel.transformFile('./src/index.js', jsnextOpts, (err, result) => {
  if (err) throw err;
  fs.writeFile('./lib/index.jsnext.js', result.code, onWriteCompleted);
});

function onWriteCompleted(err) {
  if (err) throw err;
}
