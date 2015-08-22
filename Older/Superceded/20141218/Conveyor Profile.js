  
  $(document).ready(function () {

  //input is a JSON that hold the heads and heading types
  
  //this array poulates the table headings
  var headingArray=[]
  for (var i = 0; i < input.length; i++) {
    headingArray.push(input[i].description)
  };
  //console.log(headingArray)


var data=[];
var noProfilePoints=10
for (var i = 0; i < noProfilePoints; i++) {
  data.push([i,"","","","",,"","carry","loaded"])
  //console.log(data)
};


var noProfilePoints=10
for (var i = 0; i < noProfilePoints; i++) {
  data.push([i+10,,,,,,,"return","empty"])
  //console.log(data)
};   


//this allows the cells validation and type , including scource to be set.
var columnsTypeArray = [];
for (var i = 0; i < input.length; i++) {
  if (input[i].type>"") {
    columnsTypeArray.push( 
    { 
      type: input[i].type,
      source: input[i].source
      }
  )
  } else {
    columnsTypeArray.push( 
    { 
      }
  )
  };

};
container = document.getElementById('example1'),
hot = [];
var settings1 = ({
  data: data,
  colHeaders: headingArray,
  columns: columnsTypeArray,
  afterChange: function (changes, source) {performCalculations(hot)}
});
hot = new Handsontable(container,settings1);

hot.render();

});