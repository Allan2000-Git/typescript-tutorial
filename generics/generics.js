"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scores = [];
var names = [];
// return either number or boolean value
function identityOne(val) {
    return val;
}
// returns anything. if we pass a number, then it can return a string also
function identityTwo(val) {
    return val;
}
// once if we pass a number, then it will return a number itself
// Type is locked as number
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
//----------------------------------
function getProducts(prod) {
    return prod[3];
}
var getProds = function (prod) {
    return prod[3];
};
