
let numbers = [12,26,34,48,59];

for(var j=0; j<numbers.length;j++){
    alert(numbers[j]);
}

var numberArray=[12,26,34,48,59], thisTotal=0,thisAverage=0;

 for(var i=0;i<numberArray.length;i++)
  {thisTotal+=numberArray[i];}

 thisAverage=(thisTotal/numberArray.length);

 alert(thisAverage)
