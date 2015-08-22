
function HighChart(startChart){
  //this is load the chart you are interested in.


var temp=[];
  for(var i = 0; i < CSVstring.length; i++) {
      temp.push(new Array());
      temp[i].push(CSVstring[i]["DateTime"]);
      temp[i].push(CSVstring[i][startChart]);
  }

var options = chartFrameWork();

for (var i = 0; i < tags.length; i++) {
  if (startChart == tags[i]["Tag nr"]) {
           options.yAxis.push ( {
                title : {
                    text : tags[i]["Description"]
                },

                plotLines : [{
                    value : tags[i]["Max High"],
                    color : 'red',
                    dashStyle : 'shortdash',
                    width : 2,
                    label : {
                        text : tags[i]["Max High Description"]+tags[i]["Max High"]
                    }
                },
                {
                    value : tags[i]["Min High"],
                    color : 'red',
                    dashStyle : 'shortdash',
                    width : 2,
                    label : {
                        text : tags[i]["Max High Description"]+tags[i]["Min High"]
                    }
                },
                {
                    value : 0,
                    color : 'green',
                    dashStyle : 'shortdash',
                    width : 2,
                    label : {
                        text : "Zero"
                    }
                },
                ]
            })


 options.series.push( {
                          name: tags[i]["Description"],
                          yAxis: i,
                          data : temp,
                          shadow: false,
                          dataGrouping: {
                                          enabled: false,
                                          units: [[
                                                  'second',
                                                  [1]
                                                ]]
                                        }
                        })
  } else{
  };
};

return options

}

function chartFrameWork(){
  var data;
    var options = {
      global: {
        useUTC: false
      },
      chart: {
        renderTo: 'container',
        zoomType: 'x',
      },
      navigator : {
        enabled: true,
        adaptToUpdatedData: false,
        series : {
          data : data
        }
      },
                  scrollbar: {
                liveRedraw: false
            },
      credits: {
        enabled: false
      },
      title: {
        text: 'SCADA Data'
      },
      xAxis: {
        type: 'datetime',
        format: "{value:%Y-%m-%d}" ,
        title: {
          text: 'Date'
        }
      },
      rangeSelector : {
        enabled: true,
        buttons: [{
          type: 'hour',
          count: 1,
          text: '1h'
        }],
              inputEnabled: false, // it supports only days
              selected : 0
            },
            yAxis: [{
              title: {
                text: 'Units'
              }
            },
            ],
            tooltip: {
              pointFormat: '<br>x = {point.y:.f} ; y = {point.x:%Y/%m/%d} </br>'
            },
            plotOptions: {
              spline: {
                lineWidth: 0,
                marker: {
                  enabled: false,
                  radius : 2
                }
              }
            },
            series: []
          };
return options

}

