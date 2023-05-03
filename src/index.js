import * as stack from './stack.js';

window.onload = function () {
    console.log('Done!');
    var pop = document.getElementById('pop');
    var push = document.getElementById('push');
    var peek = document.getElementById('peek');
    var display = document.getElementById('top_of_stack');

    pop.addEventListener('click', function () {
        var tesct = "Popped: " + stack.pop();
        alert(tesct);
    });

    push.addEventListener('click', function () {
        var x = prompt('Vad ska vi lägga på stacvken?');
        stack.push(x);
        display.innerHTML = x;
    });

    peek.addEventListener('click', function () {
        display.innerHTML = stack.peek();
    });
};