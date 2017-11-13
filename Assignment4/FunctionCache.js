function cache(func) {
    var functions = {};
    return function() {
        var input = JSON.stringify(arguments);
        if (!(input in functions)) {
            functions[input] = func.apply(null, arguments);
        }
        return functions[input];
    };
}