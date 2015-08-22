function drawhotable(input,containers){
	//get headers for the table
  var headingArray=[]
    for (var key in input[0]) {
      headingArray.push(key);
    };

//Show the Current variable Table.
container = document.getElementById(containers)
settings1 = {
  data:input,  
  colHeaders: headingArray,
  minSpareRows: 0 //always keep at least 1 spare row at the bottom
},
hot = new Handsontable(container,settings1);
hot.render();

}