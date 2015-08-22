function drawinputs(input,location){
	//I think that each varible will have to hold all of the variables that it affects.

for (var i = 0; i < input.length; i++) {


if (input[i].type=="select" ) {
	$( "#"+location ).append(function() {

	//console.log("selects:",input[i].variable)

var html1='<div class="form-group"><label class="col-md-3 control-label" for="selectbasic">'
var html2='</label><div class="col-md-9"><select id="'
var html3='" name="'
var html4='" class="form-control">'

var html5='<option value="1">Option one</option>'
var html6='<option value="2">Option two</option>'

var html7='</select><span class="help-block">'
var html8='</span></div></div>'

var combinedHtml = 
	html1+
	input[i].shortDescription+
	html2+
	i +
	html3+
	input[i].variable +   
	html4+
	input[i].defaultvalue+
	html5+
	html6+
	html7+
	input[i].description+
	html8


  return  combinedHtml


})

} else{
$( "#"+location ).append(function() {
  var html1 = '<div class="form-group"><label class="col-md-3 control-label" for="appendedtext">'
  var html2 = '</label><div class="col-md-9"><div class="input-group"><input id="'
  var html6 = '" name="'
  var html7='" class="form-control input-sm" value="'
  var html3= '" type="number"><span class="input-group-addon">'
  var html4='</span></div><p class="help-block">'
  var html5='</p></div></div>'

var combinedHtml = 
	html1+
	input[i].shortDescription+
	html2+
	//this could cause long term issues , best course of action is to continue blindly
	i +
	html6+
	input[i].variable +   
	html7+  
	input[i].defaultvalue+
	html3+
	input[i].unit+
	html4+
	input[i].description+
	html5;
	return  combinedHtml
})

};



};



}