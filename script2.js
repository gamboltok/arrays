"use strict";

const arr = [12, 32, 13, 24, 45];

function superSort(a, b){
    return a - b;
}

console.log( arr.sort(superSort) );