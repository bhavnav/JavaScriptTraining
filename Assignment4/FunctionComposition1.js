function compose() {
  var arrFunctions = arguments;
  return function(val) {
    var num = val;
    for ( var fid in functions )
      num = arrFunctions[arrFunctions.length - fid - 1](num);
    return num;
  }
}