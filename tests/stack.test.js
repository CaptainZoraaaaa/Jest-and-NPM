const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('Look at the left childs value given a certain index of the heap', () => {
    stack.push(8);
    stack.push(5);
    stack.push(12);
    stack.push(16);
    expect(stack.leftChild(1)).toBeDefined();
    expect(stack.rightChild(1)).toBe(16);
});
