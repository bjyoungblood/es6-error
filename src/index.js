class ExtendableError extends Error {
  constructor(message) {
    super(message);

    Object.defineProperty(this, 'name', {
      enumerable : false,
      value : this.constructor.name,
    });

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      Object.defineProperty(this, 'stack', {
        enumerable : false,
        value : (new Error(message)).stack,
      });
    }
  }
}

export default ExtendableError;
