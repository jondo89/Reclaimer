function drawrectangle(x,y,height,width,angle) {








var xstart=x;
var ystart=y;
var rectan = ([[x,y,"yes"]]);//starting coordinate
var angle=angle*(Math.PI/180);
//console.log(angle);


var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');

rectan.push([x+width*Math.cos(angle),y+width*Math.sin(angle),"yes"]);
x=x+width*Math.cos(angle)
y=y+width*Math.sin(angle)
//console.log(x,y);

rectan.push([x+height*Math.sin(angle),y-height*Math.cos(angle),"yes"]);
x=x+height*Math.sin(angle)
y=y-height*Math.cos(angle)
//console.log(x,y);

rectan.push([x-width*Math.cos(angle),y-width*Math.sin(angle),"yes"]);
x=x-width*Math.cos(angle)
y=y-width*Math.sin(angle)
//console.log(x,y);

//close the rectangle
rectan.push([xstart,ystart,"yes"]);

//console.log(rectan);

//populate the text paragraph box for autocad
var Roll = "pline "
for (var i = rectan.length - 1; i >= 0; i--) {
  Roll=Roll.concat((rectan[i][0]) +","+ (rectan[i][1]) + " ")
};
Roll=Roll.concat("c ")
//jquery fill the text box with variable.
$("#CadExportArea").append(Roll);

return rectan;
}

