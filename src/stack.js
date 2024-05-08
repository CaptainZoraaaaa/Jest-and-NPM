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
    if (stack.length > 1) {
        stack[0] = stack.pop(); // remvoes the last value and instead moves it to the first index
        bubbleDown();
    }else{
        stack.pop();
    } 
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
// when instering the last value is checked with its parent if parent is bigger switch place: 
// then set index to the parents index since we jsut switched em 
// After the index is set check the next parent value 
// It does this untill the index is === 0 which means we have checked all values
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
/* 
    start index is set to 0 since it will be the number that was overwritten
    after this it we also sets the child index to 0
    The first thing that happens in the loop is that we presume that the left child is smaller than the right child
    Then we actually controll this by comapring the lft and right childs value if left is smaller nothing ahppens.
    But of the right childs value is samller than the left one we set child index to the right childs index
    efter this we comapre that if the current index value is smaller than the child then we know that the value is put correctly
    if not the the current index value is wwtiched with the childs value
    after this the index we looking at is swtiched to the childs index so that we can continue to move it to the corect position
*/
bubbleDown = () => {
    let index = 0;
    let childIndex = 0;
    while (this.leftChild(index)) {
        childIndex = index * 2 + 1;
        if (this.leftChild(index) > this.rightChild(index)) {
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