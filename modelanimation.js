/////////////////////
// FUNCTIONS AREA  //
/////////////////////

function doStuff(results) {


    console.log("2. Initiate Array Construction")
    $("#loading").attr('style', 'width:70%');

    //populate the loaded Tag Table.
    $('#myTags').html("");
    for (var key in results[0]) {
    $('#myTags').append("<tr><td>"+key+"</td></tr>");
    temp[key]=0
    }

    console.log("3. Determine Tags availble in SCADA file - Complete")


    //I think this can be improved , 2 varibale parsing seem a was of memory.
    $("#loading").attr('style', 'width:80%');
    CSVstring = results

    console.log("4. Re-assign variable - Complete")

    var options = HighChart("E641_CV01_UAC01.STA_Current")

    $('#containerChart').highcharts('StockChart', options)
    console.log("5. Load charting area - Complete")


    $("#loading").attr('style', 'width:95%');
    tableLoad()
    console.log("6. Populate table area - Complete")


    $("#loading").attr('style', 'width:100%');
    //move to the tab containg the Graph
    $( "#PlotAreaClick" ).trigger( "click" );
  }

////////////////////////////////////
// RECLAIMER MOVING AND ANIMATION //
////////////////////////////////////

$('#containerChart').mousemove(function(e){    
  var chartLength = Highcharts.charts.length-1
  try {
  var positions=0
  var indexing = parseFloat(Highcharts.charts[chartLength].hoverPoints[0].index)
  var luffAngle = CSVstring[indexing]["E641_CV01_ZT10.STA_PV"] * Math.PI/180
  var slewAngle = CSVstring[indexing]["E641_SR01_ZT11.STA_PV"] * Math.PI/180
  var positions = CSVstring[indexing]["E641_SR01_ZT04.STA_PV"]  
  var bucketCurrent = CSVstring[indexing]["E641_SR01_UAC01.STA_Current"]
  if (bucketCurrent>0) {
  pivot3.rotation.x += -0.1;
  } else{
  console.log("Bucket is stationary")
  };
  //pass all animations
  pivot1.rotation.y =  (slewAngle); 
  pivot2.rotation.x =  (luffAngle); 
  ParentStacker.position.set( 0,0,positions)
  update();
  render();   
  }
  catch(err) {
  //console.log(err)
  }
});

////////////////
// STATS AREA //
////////////////
function tableLoad(){
  $("#tBody").html('');
  for(var key in CSVstring[0]) {
    var nullCount=0
    var temp=[];
    for(var i = 0; i < CSVstring.length; i++) {
      if (CSVstring[i][key]=="(null)") {
        nullCount=nullCount+1
        temp.push(new Array());
        temp[i].push(0)
      } else{
        temp.push(new Array());
        temp[i].push(CSVstring[i][key])
      };
    }

    var peakWeight = (Math.max.apply(undefined, temp).toFixed(1));
    var minWeight = (Math.min.apply(undefined, temp).toFixed(1));

//var peakWeight = 0;
//var minWeight = 0;

for (var i = 0; i < tags.length; i++) {
  if (key==tags[i]["Tag nr"]) {
    var htmlString =       '<input type="checkbox" name="radios" id="'+ tags[i]["Tag nr"] +'" value="'+ tags[i]["Tag nr"] +'">'
    $('#myStats').append("<tr>"+"<td>"+htmlString+"</td>"+"<td>"+tags[i]["Description"]+"</td>"+"<td>"+tags[i]["Units"]+"</td>"+"<td>"+peakWeight+"</td>"+"<td>"+minWeight+"</td>"+"<td>"+nullCount+"</td>"+"</tr>");
        //plot listner
        var plotItem = document.getElementById(tags[i]["Tag nr"])
        plotItem.addEventListener('click', function () {
          var n = $( "input:checked" );
          formatHighChart(n);
          var chartLength = Highcharts.charts.length-1
          for (var i = 0; i < Highcharts.charts[chartLength].series.length; i++) {
             //console.log(Highcharts.charts[chartLength].series[i])
           };
         })
      } else{
        $('#CSVArray').html("This is some kind of error trap area")
      };
    };


  }

  console.log("     5a. Calculate Stats - Complete")
  console.log("     5b. Populate Table - Complete")
};


function formatHighChart(active){
    //this is load the chart you are interested in.
    var seriesArray=[];
    for (var J = 0; J < active.length; J++) {
      var temp=[];
      var tagName=active[J].id
    //console.log(tagName);
    for(var i = 0; i < CSVstring.length; i++) {
      temp.push(new Array());
      temp[i].push(CSVstring[i]["DateTime"]);
      temp[i].push(CSVstring[i][tagName])
    }

    var option = {
      name: tagName,
      data : temp,
      shadow: false,
      dataGrouping: {
        enabled: false
      }
    }
    seriesArray.push(option)
  };
  var options = chartFrameWork();
  for (var i = 0; i < seriesArray.length; i++) {
    console.log(seriesArray)  
    options.series.push(seriesArray[i]);
  };
  $('#containerChart').highcharts('StockChart', options)



}

//bootstrap tab javascript
$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})


////////////////////////////////
// PAPAPARSE CSV LOADING AREA //
////////////////////////////////

//files are streamed into a variable called results  ,this is then pased through a UTC date filter to get the time periods correct.
//this is then handed to the graphing function.

function parser(file){
  console.log("0. Initialize")
  var count = 0 ;
  var result = [];
  var start = new Date().getTime();
  var config = {
    download:true,
    header: true,
    dynamicTyping: true,
                        //preview: 150000,
                        fastMode: true,
                        step:function(results){
                          count = count+1;

                          //here is the date to UTC parse , used to change the Date format
                          results.data[0]["DateTime"]=   Date.parse(results.data[0]["DateTime"])
                          //push the data into a varible in memeory
                          result.push(results.data[0])

                          switch(true) {

                            case (count ==20000):
                            $('#pointArea').html("<strong>Number of Points :</strong> "+count + " of 86000");
                            $("#loading").attr('style', 'width:20%');

                            break;
     
                            case (count ==40000):
                            $('#pointArea').html("<strong>Number of Points :</strong> "+count + " of 86000");
                            $("#loading").attr('style', 'width:30%');

                            break;    
    
                            case (count ==60000):
                            $('#pointArea').html("<strong>Number of Points :</strong> "+count + " of 86000");
                            $("#loading").attr('style', 'width:40%');

                            break;    
  
                            case (count ==80000):
                            $('#pointArea').html("<strong>Number of Points :</strong> "+count + " of 86000");
                            $("#loading").attr('style', 'width:60%');

                            break;   
                          }


                        },
                        complete: function(results, file) {
                          $('#pointArea').html("<strong>Number of Points :</strong> "+count);

                          var end = new Date().getTime();
                          var time = end - start;
                          $('#timeArea').append("<strong>Time to Load :</strong> "+ time + " ms");
                        
                          console.log("1. CSV Parse from File - Complete")
                          doStuff(result);
                        }
                      }

                      Papa.parse(file+".csv",config)
                    }


                    var tags = [{"Channel nr":1,"Tag nr":"E641_CV01_UAC01.STA_Current","Description":"Boom conveyor drive current","Units":"Amperes","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":2,"Tag nr":"E641_CV01_WIT01A.STA_Analog","Description":"Boom conveyor 10 sec Avg belt weigher","Units":"t/hr","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":3,"Tag nr":"E641_CV01_ZT10.STA_PV","Description":"Lufting angle encoder","Units":"Deg","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":4,"Tag nr":"E641_CV01_ZT10.STA_PV1","Description":"Lufting angle encoder","Units":"Deg","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":5,"Tag nr":"E641_HY01_TT04.STA_Analog","Description":"Hydraulic oil temperature transmitter","Units":"°C","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":6,"Tag nr":"E641_SR01_PT01.STA_Analog","Description":"Cyl 1 L/H side Top of piston press tx","Units":"Bar","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":7,"Tag nr":"E641_SR01_PT02.STA_Analog","Description":"Cyl 1 L/H side bottom of piston press tx","Units":"Bar","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":8,"Tag nr":"E641_SR01_PT03.STA_Analog","Description":"Cyl 1 R/H side Top of piston press tx","Units":"Bar","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":9,"Tag nr":"E641_SR01_PT04.STA_Analog","Description":"Cyl 1 R/H side bottom of piston press tx","Units":"Bar","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":10,"Tag nr":"E641_SR01_ST01.STA_Analog","Description":"Anemometer (wind speed)","Units":"km/hr","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":11,"Tag nr":"E641_SR01_TT03.STA_Analog","Description":"Bucket Wheel G/Box oil pump temp","Units":"C","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":12,"Tag nr":"E641_SR01_UAC01.STA_Current","Description":"Bucket wheel drive","Units":"Amperes","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":13,"Tag nr":"E641_SR01_UAC04_07.STA_Current","Description":"Slew drives current","Units":"Amperes","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":14,"Tag nr":"E641_SR01_UAC04_07.STA_SpeedFB","Description":"Slew drives speed","Units":"Hz","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":15,"Tag nr":"E641_SR01_UAC13_19.STA_Current","Description":"Long travel drives-Droup A","Units":"Amperes","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":16,"Tag nr":"E641_SR01_UAC13_19.STA_SpeedFB","Description":"Long travel drives-Droup A","Units":"Hz","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":17,"Tag nr":"E641_SR01_ZT04.STA_PV","Description":"Travel position encoder-Right","Units":"m","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":18,"Tag nr":"E641_SR01_ZT04.STA_PV1","Description":"Travel position encoder-Right","Units":"m","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":19,"Tag nr":"E790_WE01_WIT01a.STA_Analog","Description":"LOS Feed Conveyor Weightometer","Units":"t/hr","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"},
                    {"Channel nr":20,"Tag nr":"E641_SR01_WT01.STA_Analog","Description":"Cylinder 1 Force","Units":"kN","Max High":1700,"Max Low":1500,"Min High":-1350,"Min Low":-1250,"Max High Description":"Supplier Pushing Force","Max Low Description":"Supplier Structure Push","Min High Description":"Supplier Pulling Force","Min Low Description":"Supplier Structure Pull"},
                    {"Channel nr":21,"Tag nr":"E641_SR01_WT02.STA_Analog","Description":"Cylinder 1 Force","Units":"kN","Max High":1700,"Max Low":1500,"Min High":-1350,"Min Low":-1250,"Max High Description":"Supplier Pushing Force","Max Low Description":"Supplier Structure Push","Min High Description":"Supplier Pulling Force","Min Low Description":"Supplier Structure Pull"},
                    {"Channel nr":22,"Tag nr":"E641_SR01_ZT11.STA_PV","Description":"Slewing Angle Encoder","Units":"Deg","Max High":0,"Max Low":0,"Min High":0,"Min Low":0,"Max High Description":"None","Max Low Description":"None","Min High Description":"None","Min Low Description":"None"}]