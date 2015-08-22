function drawbelt1roll(x,y,height,width,angle,rolloverlap,radiussetback,thickness,beltwidth,freeboard,surcharge) {

xstart=x;
ystart=y;


var belting = ([[x,y,"yes"]]);//starting coordinate
var angle=angle*(3.14159/180);
var lengthbelt=0;


//1
x=x+(beltwidth/2);
y=y;
belting.push([x,y]);

//2
x=x;
y=y+thickness;
belting.push([x,y]);

//3
x=x-(beltwidth);
y=y;
belting.push([x,y]);

//4
x=x;
y=y-thickness;
belting.push([x,y]);

//close the belting
belting.push([xstart,ystart,"yes"]);


//populate the text paragraph box for autocad
      var belttext = "pline "
      for (var i = belting.length - 1; i >= 0; i--) {
                   belttext=belttext.concat((belting[i][0]) +","+ (belting[i][1]) + " ")
      };
      belttext=belttext.concat("c ")
//jquery fill the text box with variable.
 $("#belting").append(belttext);

return  belting;

}

function drawmaterial1roll(x,y,height,width,angle,rolloverlap,radiussetback,thickness,beltwidth,freeboard,surcharge) {

xstart=x;
ystart=y+thickness;
var belting = ([[x,y+thickness,"yes"]]);//starting coordinate
var angle=angle*(3.14159/180);
var lengthbelt=0;


//1
x=x+(beltwidth/2-freeboard);
y=y+thickness;
belting.push([x,y]);
lengthbelt=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));


//2
x=xstart;
y=y+(beltwidth/2-freeboard)*Math.sin(surcharge);
belting.push([x,y]);
lengthbelt=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));

//3
x=x-(beltwidth/2-freeboard);
y=y-(beltwidth/2-freeboard)*Math.sin(surcharge);
belting.push([x,y]);
lengthbelt=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));

//close the belting
belting.push([xstart,ystart,"yes"]);



//populate the text paragraph box for autocad
      var belttext = "pline "
      for (var i = belting.length - 1; i >= 0; i--) {
                   belttext=belttext.concat((belting[i][0]) +","+ (belting[i][1]) + " ")
      };
      belttext=belttext.concat("c ")
//jquery fill the text box with variable.
 $("#belting").append(belttext);

return  belting

}
