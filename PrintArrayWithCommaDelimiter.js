function printArray(array){
var result= "";
for (var i = 0; i < array.length-1 ; i++) {
result += array[i] + ",";
}
result += array[array.length-1];
return result;  
};
