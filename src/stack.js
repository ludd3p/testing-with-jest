var _ = require('underscore');
let stack = [];

exports.push = function (x) {
    stack.push(x);
};

exports.pop = function () {
    return stack.pop();
};

expports.peek = function () {
    return stack[0];
};