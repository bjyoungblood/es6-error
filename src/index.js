class ExtendableError {
  constructor(message) {
    Error.call(this, message);
    Error.captureStackTrace(this, this.constructor);
    Object.defineProperty(this, 'name', {
      configurable : true,
      enumerable : false,
      value : this.constructor.name,
    });
  }
}

ExtendableError.prototype = new Error();

export default ExtendableError;
