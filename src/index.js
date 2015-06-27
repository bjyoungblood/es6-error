class ExtendableError extends Error {
  constructor(message) {
    super();
    var tmp = Error.apply(this, arguments);
    this.message = tmp.message;
    Object.defineProperty(this, 'stack', { 
        get: function() {
            return tmp.stack
        }
    })
    Object.defineProperty(this, 'name', {
      configurable : true,
      enumerable : false,
      value : this.constructor.name,
    });
  }
}

export default ExtendableError;
