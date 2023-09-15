
var args = [2,3];
var createHelloWorld = function() {
    return function(...args) {
    return "Hello World";
    }
};

const f = createHelloWorld();
f();
