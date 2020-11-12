function EventListener() {
  this.callbacks = [];

  this.on = function(eventType, callback) {
    this.callbacks[eventType] = this.callbacks[eventType] || [];
    this.callbacks[eventType].push(callback);
  }

  this.fire = function(eventType) {
    var callbacksForEventType = this.callbacks[eventType] || [];
    callbacksForEventType.forEach(function(f) {
      f();
    });
  }
}