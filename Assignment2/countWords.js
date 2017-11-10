function countWords(words) {
    words = words.replace(/\s +/
        g, ' ');
    var arr = words.split(" ");
    var result = new Array();
    for (i = 0; i < arr.length; i++) {
        if (arr[i] != "" && arr[i] != " ") {
            result.push(arr[i]);
        }
    }
    return result.length;
}
