var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(pName) {
    this.name = pName;
}

//util.inherits(Person, EventEmitter);

var obj1 = new Person("Nandi");
var obj2 = new Person("Marc");

obj1.on ('speak', function(said) {
    console.log (`${this.name}: ${said}`)

});

obj2.on ('com', function(said) {
    console.log (`complaint: ${this.name}: ${said}`)

});

obj1.emit('speak', "I want to go to celebrate (late) the diwali");
obj2.emit('com', "I am waiting for my wife to come back from a retreat");







