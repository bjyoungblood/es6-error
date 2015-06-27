class ExtendableError extends Error {
  constructor(message) {
    super();
    Object.defineProperty(this, 'message', { 
        get: function() {
            return message;
        }
    })
    Object.defineProperty(this, 'stack', { 
        get: function() {
            return (new Error()).stack
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
