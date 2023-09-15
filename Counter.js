var createCounter = function(n) {
    var counter = -1;
    return () => {return ++counter + n};
};