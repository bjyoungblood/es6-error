# es6-error

An easily-extendable error class for use with ES6 classes (or ES5, if you so
choose).

## ES6 Usage

```javascript

import ExtendableError from 'es6-error';

class MyError extends ExtendableError {
  // constructor is optional; you should omit it if you just want a custom error
  // type for inheritance and type checking
  constructor(message = 'Default message') {
    super(message);
  }
}

export default MyError;
```

## ES5 Usage

```javascript

var util = require('util');
var ExtendableError = require('es6-error');

function MyError(message) {
  message = message || 'Default message';
  ExtendableError.call(this, message);
}

util.inherits(MyError, ExtendableError);

module.exports = MyError;
```
