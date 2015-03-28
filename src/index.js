class ExtendableError extends Error {
  constructor(message) {
    Error.captureStackTrace(this, this.constructor);
    this.message = message;
    super(message);
  }

  get name() {
    return this.constructor.name;
  }
}

export default ExtendableError;
