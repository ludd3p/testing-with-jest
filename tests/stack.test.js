const stack = require('../src/stack.js');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBe(undefined);
});
test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});
test('peek on stack with two elements returns the first element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

//Eget test
test('peek on stack after pop that had two elements returns the first element', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});