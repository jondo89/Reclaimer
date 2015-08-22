function draw1Rollidler(data,locations)
{


for(var key in data){
	data[key]=parseFloat(data[key])
};

var canvas = document.getElementsByTagName(locations)[0];
var ctx = canvas.getContext('2d');

var rectan=drawrectangle(
  0-data.RollWidth/2,
  0,
  data.RollDiameter,
  data.RollWidth,
  0)



//stage1---------------------------------------------------------    
console.log(rectan)
for (var i = rectan.length - 1; i >= 0; i--) {

if (rectan[i][2]=="yes") {
// console.log(rectan)

ctx.lineTo(rectan[i][0],rectan[i][1]);
};
};

//stage1--------------------------------------------------------- 


};