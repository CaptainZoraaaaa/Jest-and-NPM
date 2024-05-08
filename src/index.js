import * as stack from './stack.js';

window.onload = function () {

    var pop = document.getElementById('pop');
    var push = document.getElementById('push');
    var peek = document.getElementById('peek');
    var display = document.getElementById('top_of_stack');
    const left = document.getElementById('leftChild');
    const right = document.getElementById('rightChild');

    pop.addEventListener("click", function() {
        var text = "Tog bort " + stack.pop();
        alert(text);
    });

    push.addEventListener("click", function() {
        var x = prompt("Vad ska vi lägga på stacken?");
        stack.push(x);
        display.innerHTML = x;
    });

    peek.addEventListener("click", function() {
        display.innerHTML = stack.peek();
    });

    left.addEventListener("click", () => {
        alert("Left childs value is "+ stack.leftChild(prompt("What index to check left child value?")));
    });

    right.addEventListener("click", () => {
        alert("Right childs value is "+ stack.rightChild(prompt("What index to check right child value?")));
    });
};