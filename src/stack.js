const _ = require('underscore');

let stack = [];

// Lägger ett element överst i heapen
exports.push = function (x) {
    console.log("La till: ", x);
    stack.push(parseInt(x));
    bubbleUp();
    console.log(stack);
};

// Returnerar det översta elementet i heapen och tar bort det
exports.pop = function () {
    const firstValue = stack[0];
    stack[0] = stack.pop();
    bubbleDown();
    console.log(stack);
    return firstValue;
}

// Returnerar det sista elementet i Heapen
exports.peek = function () {
    return _.last(stack);
}

exports.leftChild = (index) => {
    return stack[index * 2 + 1];
}

exports.rightChild = (index) => {
    return stack[index * 2 + 2];
}

bubbleUp = () => {
    const lastValue = stack[stack.length - 1];
    let index = stack.length - 1
    while (index !== 0) {
        if (stack[index] < stack[parseInt((index - 1) / 2)]) {
            const temp = stack[parseInt((index - 1) / 2)];
            stack[parseInt((index - 1) / 2)] = stack[index];
            stack[index] = temp;
        }
        index = parseInt((index - 1) / 2);
    }

}

bubbleDown = () => {
    let index = 0;
    let minimum = this.leftChild(index);
    let childIndex = 0;
    while (this.leftChild(index)) {
        childIndex = index * 2 + 1;
        if (this.leftChild(index) > this.rightChild(index)) {
            minimum = this.rightChild(index);
            childIndex = index * 2 + 2;
        }

        if (stack[index] < stack[childIndex]) {
            break;
        } else {
            const temp = stack[index];
            stack[index] = stack[childIndex];
            stack[childIndex] = temp;
        }
        index = childIndex;

    }
}