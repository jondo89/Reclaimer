function drawbelt2roll(x,y,height,width,angle,rolloverlap,radiussetback,thickness,beltwidth,numberofrolls,Tracking) {

xstart=x;
ystart=y;

//this concole.log is useful for debugging
//console.log(x,y,height,width,angle,rolloverlap,radiussetback,"thickness",thickness,beltwidth,"here",numberofrolls)



//two varibales are declared , belting defines the profile of the belt belt along the full idler.
//belting actuctual will hold the profile for the belt to be drawn.

//used to plot the entire belt
var belting = ([[x,y,"yes"]]);//starting coordinate
//used to measure the belt length
var beltingactual = ([[x,y,"yes"]]);//starting coordinate
//array used to store segment length
var segmentlength = ([0]);//starting coordinate
//array used to offsets

var offsetbelting = ([[]]);//starting coordinate
console.log("0",offsetbelting)
//this is to allow for the turn up on the last idler in 5 roll belting.
if (numberofrolls==1) {
var angle1=0
var angle2=0
var angle3=0
};
if (numberofrolls==2) {
var angle1=angle*(Math.PI/180);
var angle2=(angle*(Math.PI/180))/2;
var angle3=(angle*(Math.PI/180));

};
if (numberofrolls==3) {
var angle1=0
var angle2=(angle*(Math.PI/180))/2;
var angle3=(angle*(Math.PI/180));
};
if (numberofrolls==5) {
var angle1=0
var angle2=(angle*(Math.PI/180))/2;
var angle3=(angle*(Math.PI/180));

};




//this is the quadrant selector and is used to determine the quadrant ( 7 quadrants in total 5 roll ) that the belt width will be drawn in.
function checklength(arraybelting)
{
var lengthbelt=0;
for (var i = 0; i < arraybelting.length; i++) {
	try	{
		x1=arraybelting[i-1][0]
		y1=arraybelting[i-1][1]
	}
	catch(e){
		var x1=0
		var	y1=0
	}	
		x2=arraybelting[i][0]
		y2=arraybelting[i][1]
		lengthbelt=Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))+lengthbelt;
		//console.log(lengthbelt)
		if (beltwidth/2>lengthbelt) {



		} else{};
	};
	
	};


//this batch of varibalies stores the new circle radius , very complicated , but defines the length of the line between the circle center and intersection roll
//face line , it is to do with the calcualtion of the cords of the cirle.
radiussetback1=radiussetback*Math.tan(angle1)

//this batch of varibalies stores the circle center points.
var centerpoints = ([[x,radiussetback/Math.cos(angle1),"yes"]]);//starting coordinate

//define direction and length of segments
var removed = offsetbelting.splice(0, 1); 
// for some un godly reason there is an additional point in the array ,  I cannot explain
//1 ok
offsetbelting.push([radiussetback*angle1,radiussetback*angle1*Math.tan(angle1)]);
console.log("1",offsetbelting[0][0],offsetbelting[0][1])

if (numberofrolls==2) {

//2 ok
//this is the first offset on the v return
var lengthtemp=(Math.sqrt(Math.pow((radiussetback*angle1),2)+Math.pow((radiussetback*angle1*Math.tan(angle1)),2)))
offsetbelting.push([(-1*rolloverlap-lengthtemp)*Math.cos(angle1),(-1*rolloverlap-lengthtemp)*Math.sin(angle1)]);
console.log("2",offsetbelting[1][0],offsetbelting[1][1])

//3 ok
offsetbelting.push([(width)*Math.cos(angle1),(width)*Math.sin(angle1)]);
console.log("3",offsetbelting[2][0],offsetbelting[2][1])

//split---------------------------------------------

//4
offsetbelting.push([(width/2)*Math.cos(angle1),(width/2)*Math.sin(angle1)]);
console.log("4",offsetbelting[3][0],offsetbelting[3][1])

//5
offsetbelting.push([-1*rolloverlap-radiussetback*Math.tan(angle2),0]);
console.log("5",offsetbelting[4][0],offsetbelting[4][1])

//6
offsetbelting.push([radiussetback*Math.tan(angle2),0]);
console.log("6",offsetbelting[5][0],offsetbelting[5][1])

//7
offsetbelting.push([(radiussetback*Math.tan(angle3/2))*Math.cos(angle3),(radiussetback*Math.tan(angle3/2))*Math.sin(angle3)]);
console.log("7",offsetbelting[6][0],offsetbelting[6][1])

//8
var lengthtemp=(Math.sqrt(Math.pow(offsetbelting[6][0],2)+Math.pow(offsetbelting[6][1],2)))
offsetbelting.push([(-1*rolloverlap-lengthtemp)*Math.cos(angle3),(-1*rolloverlap-lengthtemp)*Math.sin(angle3)]);

//split---------------------------------------------

//9 good
offsetbelting.push([(width)*Math.cos(angle3),(width)*Math.sin(angle3)]);
console.log("9",offsetbelting[8][0],offsetbelting[8][1])


//10 good
offsetbelting.push([(-1*rolloverlap-(radiussetback*Math.tan(angle2)))*Math.cos(angle3),(-1*rolloverlap-(radiussetback*Math.tan(angle2)))*Math.sin(angle3)]);
console.log("10",offsetbelting[9][0],offsetbelting[9][1])


//11 good
offsetbelting.push([((radiussetback*Math.tan(angle2)))*Math.cos(angle3),((radiussetback*Math.tan(angle2)))*Math.sin(angle3)]);
console.log("11",offsetbelting[10][0],offsetbelting[10][1])

//12 good
offsetbelting.push([((radiussetback*Math.tan(angle2)))*Math.cos(angle3*2),((radiussetback*Math.tan(angle2)))*Math.sin(angle3*2)]);
console.log("12",offsetbelting[11][0],offsetbelting[11][1])

//13
offsetbelting.push([(-1*rolloverlap-(radiussetback*Math.tan(angle2)))*Math.cos(angle3*2),(-1*rolloverlap-(radiussetback*Math.tan(angle2)))*Math.sin(angle3*2)]);
console.log("10",offsetbelting[9][0],offsetbelting[9][1])


//split---------------------------------------------





} 
else{
//2 ok
//this is the first offset on the v return
var lengthtemp=(Math.sqrt(Math.pow((radiussetback*angle1),2)+Math.pow((radiussetback*angle1*Math.tan(angle1)),2)))
offsetbelting.push([(-1*0-lengthtemp)*Math.cos(angle1),(-1*rolloverlap-lengthtemp)*Math.sin(angle1)]);
console.log("2",offsetbelting[1][0],offsetbelting[1][1])

//3 

offsetbelting.push([(-1*0-lengthtemp)*Math.cos(angle1),(-1*rolloverlap-lengthtemp)*Math.sin(angle1)]);
console.log("3",offsetbelting[2][0],offsetbelting[2][1])

//split---------------------------------------------

//4
offsetbelting.push([(width/2)*Math.cos(angle1),(width/2)*Math.sin(angle1)]);
console.log("4",offsetbelting[3][0],offsetbelting[3][1])

//5
offsetbelting.push([-1*rolloverlap-radiussetback*Math.tan(angle2),0]);
console.log("5",offsetbelting[4][0],offsetbelting[4][1])

//6
offsetbelting.push([radiussetback*Math.tan(angle2),0]);
console.log("6",offsetbelting[5][0],offsetbelting[5][1])

//7
offsetbelting.push([(radiussetback*Math.tan(angle3/2))*Math.cos(angle3),(radiussetback*Math.tan(angle3/2))*Math.sin(angle3)]);
console.log("7",offsetbelting[6][0],offsetbelting[6][1])

//8
var lengthtemp=(Math.sqrt(Math.pow(offsetbelting[6][0],2)+Math.pow(offsetbelting[6][1],2)))
offsetbelting.push([(-1*rolloverlap-lengthtemp)*Math.cos(angle3),(-1*rolloverlap-lengthtemp)*Math.sin(angle3)]);

//split---------------------------------------------

//9 good
offsetbelting.push([(width)*Math.cos(angle3),(width)*Math.sin(angle3)]);
console.log("9",offsetbelting[8][0],offsetbelting[8][1])


//10 good
offsetbelting.push([(-1*rolloverlap-(radiussetback*Math.tan(angle2)))*Math.cos(angle3),(-1*rolloverlap-(radiussetback*Math.tan(angle2)))*Math.sin(angle3)]);
console.log("10",offsetbelting[9][0],offsetbelting[9][1])


//11 good
offsetbelting.push([((radiussetback*Math.tan(angle2)))*Math.cos(angle3),((radiussetback*Math.tan(angle2)))*Math.sin(angle3)]);
console.log("11",offsetbelting[10][0],offsetbelting[10][1])

//12 good
offsetbelting.push([((radiussetback*Math.tan(angle2)))*Math.cos(angle3*2),((radiussetback*Math.tan(angle2)))*Math.sin(angle3*2)]);
console.log("12",offsetbelting[11][0],offsetbelting[11][1])

//13
offsetbelting.push([(-1*rolloverlap-(radiussetback*Math.tan(angle2)))*Math.cos(angle3*2),(-1*rolloverlap-(radiussetback*Math.tan(angle2)))*Math.sin(angle3*2)]);
console.log("10",offsetbelting[9][0],offsetbelting[9][1])


//split---------------------------------------------
};




//------------------------------------------------------------------------------------------
//This pushes the offsets in the belting varibale . therfor the belting array is the points 1 to 13 in cartesian coordinates.
for (var i = 0; i < offsetbelting.length; i++) {
	//console.log(offsetbelting)
	x=x+offsetbelting[i][0];
	y=y+offsetbelting[i][1];
	belting.push([x,y]);
};
//------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//Radius cicle centers
//this is the second circle center
var xtemp1=offsetbelting[1][0]*2+offsetbelting[2][0]+offsetbelting[3][0]+offsetbelting[4][0]
var ytemp1=offsetbelting[1][1]*2+offsetbelting[2][1]+offsetbelting[3][1]+offsetbelting[4][1]
//this batch of varibalies stores the circle center points.
centerpoints.push([centerpoints[0][0]+xtemp1,centerpoints[0][1]+ytemp1]);

//this is the third circle center
var xtemp1=offsetbelting[1][0]*2+offsetbelting[2][0]+offsetbelting[3][0]+offsetbelting[4][0]+offsetbelting[7][0]+offsetbelting[8][0]+offsetbelting[9][0]
var ytemp1=offsetbelting[1][1]*2+offsetbelting[2][1]+offsetbelting[3][1]+offsetbelting[4][1]+offsetbelting[7][1]+offsetbelting[8][1]+offsetbelting[9][1]
//this batch of varibalies stores the circle center points.
centerpoints.push([centerpoints[0][0]+xtemp1,centerpoints[0][1]+ytemp1]);

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

//stage 2
//start belt draw new
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');



//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//This is where you are working now
//Detemine which segment is beining worked in , ideally change the max length below to have the 
// an array that hold each segment length , something something something.

//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------


//1
ctx.beginPath();
startangle=0-Math.PI/2
length=beltwidth
endangle=(length/radiussetback)-Math.PI/2
var maxlength=angle1*radiussetback;
if (maxlength>length) {
console.log("draw this 1 ")
ctx.arc(centerpoints[0][0],
	centerpoints[0][1],
	radiussetback,
	startangle,
	endangle,
	false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();
} else{
console.log("stop draw this 1 ")
};

//2
length=beltwidth
var maxlength=offsetbelting[3][0]+offsetbelting[4][0];
console.log(maxlength)
if (maxlength>length) {
console.log("draw this 2")
x=belting[1][0]+beltwidth*Math.cos(angle1)
y=belting[1][1]+beltwidth*Math.sin(angle1)
      ctx.beginPath();
      ctx.moveTo(
      	belting[1][0], 
      	belting[1][1]);
      ctx.lineTo(x, y);
      ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
      ctx.stroke();
} else{
console.log("stop draw this 2")
x=belting[1][0]+maxlength*Math.cos(angle1)
y=belting[1][1]+maxlength*Math.sin(angle1)
      ctx.beginPath();
      ctx.moveTo(
      	belting[1][0], 
      	belting[1][1]);
      ctx.lineTo(x, y);
      ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
      ctx.stroke();
};

//3
ctx.beginPath();
startangle=0-Math.PI/2
length=beltwidth
endangle=(length/radiussetback)-Math.PI/2
var maxlength=angle2*2*radiussetback;
if (maxlength>length) {
console.log("draw this 3 ")
ctx.arc(centerpoints[1][0],
	centerpoints[1][1],
	radiussetback,
	startangle,
	endangle,
	false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();
} else{
console.log("stop draw this 3 ")
ctx.arc(centerpoints[1][0],
	centerpoints[1][1],
	radiussetback,
	startangle,
	angle2*2-Math.PI/2,
	false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();
};

//4
length=beltwidth
var maxlength=(offsetbelting[3][0]+offsetbelting[4][0])*2;
console.log(maxlength)
if (maxlength>length) {
console.log("draw this 2")
x=belting[7][0]+beltwidth*Math.cos(angle3)
y=belting[7][1]+beltwidth*Math.sin(angle3)
      ctx.beginPath();
      ctx.moveTo(
      	belting[7][0], 
      	belting[7][1]);
      ctx.lineTo(x, y);
      ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
      ctx.stroke();
} else{
console.log("stop draw this 2")
x=belting[7][0]+maxlength*Math.cos(angle3)
y=belting[7][1]+maxlength*Math.sin(angle3)
      ctx.beginPath();
      ctx.moveTo(
      	belting[7][0], 
      	belting[7][1]);
      ctx.lineTo(x, y);
      ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
      ctx.stroke();
};


//5
ctx.beginPath();
startangle=angle3-Math.PI/2
length=beltwidth
endangle=startangle+(length/radiussetback)

var maxlength=angle3*radiussetback;
if (maxlength>length) {

console.log("draw this 3 ")
ctx.arc(centerpoints[2][0],
	centerpoints[2][1],
	radiussetback,
	startangle,
	endangle,
	false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();

} else{

console.log("stop draw this 3 ")
ctx.arc(centerpoints[2][0],
	centerpoints[2][1],
	radiussetback,
	startangle,
	angle3*2-Math.PI/2,
	false);
ctx.lineWidth = 5;
ctx.strokeStyle = '#ff0000';
ctx.stroke();

};





//6
length=beltwidth
x=belting[12][0]+length*Math.cos(angle3*2)
y=belting[12][1]+length*Math.sin(angle3*2)
      ctx.beginPath();
      ctx.moveTo(
      	belting[12][0], 
      	belting[12][1]);
      ctx.lineTo(x, y);
      ctx.stroke();

//_________________________________________________________________________________________________________

//this variable will store each of the segments lengths.
//it is structured left to right , with offset then length.
//ie 3 mm from the left start drawing a line 8 mm long

var segmentlengths = ([[Tracking,50,"yes"]]);
	segmentlengths.push([Tracking,76,"yes"]);
	//console.log(segmentlengths)

//_________________________________________________________________________________________________________








//_________________________________________________________________________________________________________
//populate the text paragraph box for autocad

//draw first circle
	i=0;
	var belttext = "circle "
	belttext=belttext.concat((centerpoints[i][0]) +","+ (centerpoints[i][1]) + " ")
	belttext=belttext.concat(radiussetback + " ")	
	$("#belting").append(belttext);
//draw second circle
	i=1;
	var belttext = "circle "
	belttext=belttext.concat((centerpoints[i][0]) +","+ (centerpoints[i][1]) + " ")
	belttext=belttext.concat(radiussetback + " ")	
	$("#belting").append(belttext);
//draw third circle
	i=2;
	var belttext = "circle "
	belttext=belttext.concat((centerpoints[i][0]) +","+ (centerpoints[i][1]) + " ")
	belttext=belttext.concat(radiussetback + " ")	
	$("#belting").append(belttext);
//draw 
	i=0;
for (var i = belting.length - 1; i >= 0; i--) {
	var belttext = "line "
	belttext=belttext.concat((centerpoints[0][0]) +","+ (centerpoints[0][1]) + " ")
	belttext=belttext.concat((belting[i][0]) +","+ (belting[i][1]) + "  ")
	$("#belting").append(belttext);	
};



//_________________________________________________________________________________________________________


  
for (var i = 0; i < belting.length; i++) {
      ctx.beginPath();
      ctx.arc(belting[i][0], belting[i][1], 1, 0, 2 * Math.PI, false);
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
};



ctx.scale(-1, -1);      
for (var i = 0; i < belting.length; i++) {

ctx.fillStyle = 'blue';	
ctx.font = "5px Arial";
ctx.fillText(i,-belting[i][0],-belting[i][1]-3);
};





     

return  belting;


}

