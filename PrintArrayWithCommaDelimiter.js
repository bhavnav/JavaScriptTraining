function printArray(array){
var result;
for (i = 0; i < array.length; i++) { 
    if(i == array.length-1){
	if(result == null)
{
  result = array[i];
}
else
{
  result = result + array[i];
}
     return result;
}
if(result == null)
{
  result = array[i] + ",";
}
else
{
  result = result + array[i] + ",";
}
}
  return result;  
};
