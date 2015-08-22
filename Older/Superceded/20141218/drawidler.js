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
$("#belting").append(Roll);

return rectan;
}

function drawidleratangle()
{
//left
drawrectangle(0-rolloverlap*Math.cos(troughangle/180*Math.PI),
  0-rolloverlap*Math.sin(troughangle/180*Math.PI),
  rolldiameter,
  rollwidth,
  troughangle);

//Shaft---------------------------------------------------------    
Totalsshaftlength=guagelength+flatlength*2+22.5*2 
extension=(Totalsshaftlength-rollwidth)/2

newx=0+rolloverlap*Math.cos(troughangle/180*Math.PI)-(rolldiameter/2-shaftseries/2)*Math.sin(troughangle/180*Math.PI)
newy=0-rolloverlap*Math.sin(troughangle/180*Math.PI)-(rolldiameter/2-shaftseries/2)*Math.cos(troughangle/180*Math.PI)

newx1=0-rolloverlap*Math.cos(troughangle/180*Math.PI)+(rolldiameter/2-shaftseries/2)*Math.sin(troughangle/180*Math.PI)
newy1=0-rolloverlap*Math.sin(troughangle/180*Math.PI)-(rolldiameter/2-shaftseries/2)*Math.cos(troughangle/180*Math.PI)

y=-rolldiameter/2+shaftseries/2;
 
//left
drawrectangle(newx,
  newy,
  shaftseries,
  extension,
  360-troughangle);

//left
drawrectangle(newx1,
  newy1,
  shaftseries,
  -extension,
  troughangle);

//flats---------------------------------------------------------

//special varibale for offset
Totalsshaftlength=guagelength+flatlength*2+22.5*2 
spvar1=(Totalsshaftlength-(22.5*2)-2*flatlength-rollwidth)/2
//console.log(spvar1)


flatnewx=0+(rolloverlap+spvar1)*Math.cos(troughangle/180*Math.PI)-(rolldiameter/2-shaftseries/2)*Math.sin(troughangle/180*Math.PI)
flatnewy=0-(rolloverlap+spvar1)*Math.sin(troughangle/180*Math.PI)-(rolldiameter/2-shaftseries/2)*Math.cos(troughangle/180*Math.PI)

flatnewx1=0-(rolloverlap+spvar1)*Math.cos(troughangle/180*Math.PI)+(rolldiameter/2-shaftseries/2)*Math.sin(troughangle/180*Math.PI)
flatnewy1=0-(rolloverlap+spvar1)*Math.sin(troughangle/180*Math.PI)-(rolldiameter/2-shaftseries/2)*Math.cos(troughangle/180*Math.PI)

//left
drawrectangle(flatnewx,
  flatnewy,
  shaftseries,
  flatlength,
  360-troughangle);

//left
drawrectangle(flatnewx1,
  flatnewy1,
  shaftseries,
  -flatlength,
  troughangle);
};