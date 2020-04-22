"use strict";
exports.__esModule = true;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiples = function (myArray) {
        var arr = [];
        var j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 5 == 0 || myArray[i] % 10 == 0) {
                arr[j++] = myArray[i];
            }
        }
        return arr;
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        var arr = [], j = 0;
        for (var i = 0; i < myArray.length; i++) {
            if (typeof myArray[i] == 'string') {
                arr[j++] = myArray[i];
            }
        }
        return arr;
    };
    ArrayManipulations.prototype.arraySplit = function (str) {
        var arr = str.split(",");
        var prime = [];
        var k = 0;
        for (var i = 0; i < arr.length; i++) {
            var y = +arr[i];
            for (var j = 2; j < y; j++) {
                if (y % j === 0)
                    continue;
                else {
                    prime[k] = y;
                    k++;
                }
            }
        }
        return prime;
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
        myArray.sort();
        return myArray;
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
        for (var i = 0; i < myArray.length; i++) {
            if (myArray[i] % 3 === 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    };
    return ArrayManipulations;
}());
exports.ArrayManipulations = ArrayManipulations;
var myArray = [25, 87, 45, 14, 36, 45, 14, 28, 49];
var array = new ArrayManipulations();
console.log("Array multiples" + array.arrayFindMultiples(myArray));
console.log("Array separate" + array.arraySeparate(myArray));
console.log("Array Sort" + array.arraySort(myArray));
console.log("Array replace" + array.arrayReplace(myArray));
