function partitionOn(pred, items) {
    var arrEven = [];
    var arrOdd = [];
    var resultArr = [];
    for (i = 0; i < items.length; i++) {
        pred(items[i]) ? arrEven.push(items[i]) : arrOdd.push(items[i]);
    }
    resultArr = arrOdd.concat(arrEven);
    for (var i = 0; i < resultArr.length; i++) {
        items[i] = resultArr[i];
    }
    return arrOdd.length;
}
