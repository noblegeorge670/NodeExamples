var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('myCustomEvent', function(message, status) {
    console.log(`${status}: ${message}`);
});

emitter.emit('myCustomEvent', "File Not Found", 404);




