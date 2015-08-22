function draw1Rollidler(data,locations)
{


for(var key in data){
	data[key]=parseFloat(data[key])
};

var canvas = document.getElementById(locations);
var ctx = canvas.getContext('2d');

//Create a matrix of all of the components of the idler
//each location will be a  nested array
//each item will consit of 4 points , where the center of the idler will be at the 0,0,0 i.e the idler will be drawn equally in all directions.


function drawrRectangle (height,width) {

	x=0;
	y=0;
	var rectan=([]);//starting coordinate

	//5 points in total
	rectan.push(
	{
		"x":x,
		"y":y,
		"drawn" :"yes"
	});
	//5 points in total
	rectan.push(
	{
		"x":-width/2,
		"y":height/2,
		"drawn" :"yes"
	});
	rectan.push(
	{
		"x":width/2,
		"y":height/2,
		"drawn" :"yes"
	});
	rectan.push(
	{
		"x":width/2,
		"y":-height/2,
		"drawn" :"yes"
	});
	rectan.push(
	{
		"x":-width/2,
		"y":-height/2,
		"drawn" :"yes"
	});
	return	rectan
}


var idler = {
	"shaft": drawrRectangle(data.ShaftSeries,data.GaugeLength+2*data.FlatLength),
	"Shaft Step": drawrRectangle(data.ShaftStepSeries,data.ShaftStepLength),
	"Shell": drawrRectangle(data.RollDiameter,data.RollWidth),
	"Flat": drawrRectangle(data.ShaftSeries,data.FlatLength)
};


ctx.beginPath();
 for (var key in idler) {
 	ctx.moveTo(idler[key][1].x,idler[key][1].y)
 	for (var i = 1; i < idler[key].length; i++) {
 		idler[key][i]
 		ctx.lineTo(idler[key][i].x,idler[key][i].y);
 	};
 	ctx.lineTo(idler[key][1].x,idler[key][1].y)
}




};