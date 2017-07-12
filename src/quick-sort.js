'use strict';

function quickSort(input) {
    sort(input,0,((input.length)-1));
};
module.exports = quickSort;

function sort(input) {
var a;
var b;
var arr;
arr = input[0];
a = input[1];
b = input[2];
if (a >= b)
    return;

    var key;
    key = arr[a];
    var i = a + 1;
    var j = b;
    while (i < j) {
        while (i < j && arr[j] >= key)
            --j;
        while (i < j && arr[i] <= key)
            ++i;
        if (i < j)
            swap(arr, i, j);
    }
    if (arr[a] > arr[i]) {
        swap(arr, a, i);
        sort(arr, a, i - 1);
        sort(arr, i + 1, b);
    } else { // there is no left-hand-side
       sort(arr, a + 1, b);
    }
};

function swap(input) {
    var i = input[1];
    var j = input[2];
    var arr = input[0];
    var temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
};
