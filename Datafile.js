function loadChartData(){
console.log("loading chart data")


//////////
// DATA //
//////////
var MaximumStress = [{"Date":"Jan","Value":75.9879628},
					{"Date":"Feb","Value":67.58316313},
					{"Date":"Mar","Value":35.53074857},
					{"Date":"Apr","Value":53.08834616},
					{"Date":"May","Value":29.92635067},
					{"Date":"Jun","Value":85.12499777},
					{"Date":"Jul","Value":72.80940745},
					{"Date":"Aug","Value":41.59139049},
					{"Date":"Sep","Value":65.37279327},
					{"Date":"Oct","Value":50.37046854},
					{"Date":"Nov","Value":82.15181143},
					{"Date":"Dec","Value":51.82612729}];

//////////
// DATA //
//////////
var AccumulatedDamage = [{"Date":"Jan","Value":7.90319959},
						{"Date":"Feb","Value":7.940490024},
						{"Date":"Mar","Value":17.98872694},
						{"Date":"Apr","Value":15.69852643},
						{"Date":"May","Value":40.80289509},
						{"Date":"Jun","Value":65.59880707},
						{"Date":"Jul","Value":35.26518029},
						{"Date":"Aug","Value":84.51816338},
						{"Date":"Sep","Value":55.97949546},
						{"Date":"Oct","Value":77.89834188},
						{"Date":"Nov","Value":45.5473412},
						{"Date":"Dec","Value":26.72791556}];

//////////
// DATA //
//////////
var ProjectedLife = [{"Date":"01 April 2015","Value1":0.0000,"Value2":0.0000},
{"Date":"01 May 2015","Value1":0.0016,"Value2":0.0042},
{"Date":"01 June 2015","Value1":0.0087,"Value2":0.0084},
{"Date":"01 July 2015","Value1":0.0184,"Value2":0.0126},
{"Date":"01 August 2015","Value1":0.0257,"Value2":0.0168},
{"Date":"01 September 2015","Value1":0.0272,"Value2":0.0210},
{"Date":"01 October 2015","Value1":0.0300,"Value2":0.0252},
{"Date":"01 November 2015","Value1":0.0313,"Value2":0.0294},
{"Date":"01 December 2015","Value1":0.0389,"Value2":0.0336},
{"Date":"01 January 2016","Value1":0.0470,"Value2":0.0378},
{"Date":"01 February 2016","Value1":0.0559,"Value2":0.0420},
{"Date":"01 March 2016","Value1":0.0647,"Value2":0.0462},
{"Date":"01 April 2016","Value1":0.0711,"Value2":0.0504},
{"Date":"01 May 2016","Value1":0.0791,"Value2":0.0546},
{"Date":"01 June 2016","Value1":0.0802,"Value2":0.0588},
{"Date":"01 July 2016","Value1":0.0825,"Value2":0.0630},
{"Date":"01 August 2016","Value1":0.0871,"Value2":0.0672},
{"Date":"01 September 2016","Value1":0.0937,"Value2":0.0714},
{"Date":"01 October 2016","Value1":0.1027,"Value2":0.0756},
{"Date":"01 November 2016","Value1":0.1042,"Value2":0.0798},
{"Date":"01 December 2016","Value1":0.1091,"Value2":0.0840},
{"Date":"01 January 2017","Value1":0.1126,"Value2":0.0882},
{"Date":"01 February 2017","Value1":0.1174,"Value2":0.0924},
{"Date":"01 March 2017","Value1":0.1174,"Value2":0.0966},
{"Date":"01 April 2017","Value1":0.1232,"Value2":0.1008},
{"Date":"01 May 2017","Value1":0.1240,"Value2":0.1050},
{"Date":"01 June 2017","Value1":0.1260,"Value2":0.1092},
{"Date":"01 July 2017","Value1":0.1281,"Value2":0.1134},
{"Date":"01 August 2017","Value1":0.1342,"Value2":0.1176},
{"Date":"01 September 2017","Value1":0.1383,"Value2":0.1218},
{"Date":"01 October 2017","Value1":0.1387,"Value2":0.1261},
{"Date":"01 November 2017","Value1":0.1439,"Value2":0.1303},
{"Date":"01 December 2017","Value1":0.1472,"Value2":0.1345},
{"Date":"01 January 2018","Value1":0.1539,"Value2":0.1387},
{"Date":"01 February 2018","Value1":0.1610,"Value2":0.1429},
{"Date":"01 March 2018","Value1":0.1655,"Value2":0.1471},
{"Date":"01 April 2018","Value1":0.1724,"Value2":0.1513},
{"Date":"01 May 2018","Value1":0.1765,"Value2":0.1555},
{"Date":"01 June 2018","Value1":0.1807,"Value2":0.1597},
{"Date":"01 July 2018","Value1":0.1808,"Value2":0.1639},
{"Date":"01 August 2018","Value1":0.1892,"Value2":0.1681},
{"Date":"01 September 2018","Value1":0.1900,"Value2":0.1723},
{"Date":"01 October 2018","Value1":0.1983,"Value2":0.1765},
{"Date":"01 November 2018","Value1":0.2076,"Value2":0.1807},
{"Date":"01 December 2018","Value1":0.2169,"Value2":0.1849},
{"Date":"01 January 2019","Value1":0.2211,"Value2":0.1891},
{"Date":"01 February 2019","Value1":0.2223,"Value2":0.1933},
{"Date":"01 March 2019","Value1":0.2250,"Value2":0.1975},
{"Date":"01 April 2019","Value1":0.2342,"Value2":0.2017},
{"Date":"01 May 2019","Value1":0.2346,"Value2":0.2059},
{"Date":"01 June 2019","Value1":0.2391,"Value2":0.2101},
{"Date":"01 July 2019","Value1":0.2489,"Value2":0.2143},
{"Date":"01 August 2019","Value1":0.2567,"Value2":0.2185},
{"Date":"01 September 2019","Value1":0.2584,"Value2":0.2227},
{"Date":"01 October 2019","Value1":0.2629,"Value2":0.2269},
{"Date":"01 November 2019","Value1":0.2710,"Value2":0.2311},
{"Date":"01 December 2019","Value1":0.2747,"Value2":0.2353},
{"Date":"01 January 2020","Value1":0.2821,"Value2":0.2395},
{"Date":"01 February 2020","Value1":0.2864,"Value2":0.2437},
{"Date":"01 March 2020","Value1":0.2868,"Value2":0.2479},
{"Date":"01 April 2020","Value1":0.2886,"Value2":0.2521},
{"Date":"01 May 2020","Value1":0.2891,"Value2":0.2563},
{"Date":"01 June 2020","Value1":0.2944,"Value2":0.2605},
{"Date":"01 July 2020","Value1":0.3041,"Value2":0.2647},
{"Date":"01 August 2020","Value1":0.3125,"Value2":0.2689},
{"Date":"01 September 2020","Value1":0.3190,"Value2":0.2731},
{"Date":"01 October 2020","Value1":0.3193,"Value2":0.2773},
{"Date":"01 November 2020","Value1":0.3254,"Value2":0.2815},
{"Date":"01 December 2020","Value1":0.3316,"Value2":0.2857},
{"Date":"01 January 2021","Value1":0.3337,"Value2":0.2899},
{"Date":"01 February 2021","Value1":0.3344,"Value2":0.2941},
{"Date":"01 March 2021","Value1":0.3391,"Value2":0.2983},
{"Date":"01 April 2021","Value1":0.3401,"Value2":0.3025},
{"Date":"01 May 2021","Value1":0.3444,"Value2":0.3067},
{"Date":"01 June 2021","Value1":0.3464,"Value2":0.3109},
{"Date":"01 July 2021","Value1":0.3539,"Value2":0.3151},
{"Date":"01 August 2021","Value1":0.3623,"Value2":0.3193},
{"Date":"01 September 2021","Value1":0.3672,"Value2":0.3235},
{"Date":"01 October 2021","Value1":0.3766,"Value2":0.3277},
{"Date":"01 November 2021","Value1":0.3791,"Value2":0.3319},
{"Date":"01 December 2021","Value1":0.3839,"Value2":0.3361},
{"Date":"01 January 2022","Value1":0.3849,"Value2":0.3403},
{"Date":"01 February 2022","Value1":0.3944,"Value2":0.3445},
{"Date":"01 March 2022","Value1":0.4028,"Value2":0.3487},
{"Date":"01 April 2022","Value1":0.4089,"Value2":0.3529},
{"Date":"01 May 2022","Value1":0.4181,"Value2":0.3571},
{"Date":"01 June 2022","Value1":0.4233,"Value2":0.3613},
{"Date":"01 July 2022","Value1":0.4278,"Value2":0.3655},
{"Date":"01 August 2022","Value1":0.4306,"Value2":0.3697},
{"Date":"01 September 2022","Value1":0.4331,"Value2":0.3739},
{"Date":"01 October 2022","Value1":0.4400,"Value2":0.3782},
{"Date":"01 November 2022","Value1":0.4414,"Value2":0.3824},
{"Date":"01 December 2022","Value1":0.4475,"Value2":0.3866},
{"Date":"01 January 2023","Value1":0.4565,"Value2":0.3908},
{"Date":"01 February 2023","Value1":0.4571,"Value2":0.3950},
{"Date":"01 March 2023","Value1":0.4652,"Value2":0.3992},
{"Date":"01 April 2023","Value1":0.4741,"Value2":0.4034},
{"Date":"01 May 2023","Value1":0.4831,"Value2":0.4076},
{"Date":"01 June 2023","Value1":0.4855,"Value2":0.4118},
{"Date":"01 July 2023","Value1":0.4855,"Value2":0.4160},
{"Date":"01 August 2023","Value1":0.4884,"Value2":0.4202},
{"Date":"01 September 2023","Value1":0.4946,"Value2":0.4244},
{"Date":"01 October 2023","Value1":0.5035,"Value2":0.4286},
{"Date":"01 November 2023","Value1":0.5126,"Value2":0.4328},
{"Date":"01 December 2023","Value1":0.5154,"Value2":0.4370},
{"Date":"01 January 2024","Value1":0.5188,"Value2":0.4412},
{"Date":"01 February 2024","Value1":0.5253,"Value2":0.4454},
{"Date":"01 March 2024","Value1":0.5328,"Value2":0.4496},
{"Date":"01 April 2024","Value1":0.5404,"Value2":0.4538},
{"Date":"01 May 2024","Value1":0.5406,"Value2":0.4580},
{"Date":"01 June 2024","Value1":0.5444,"Value2":0.4622},
{"Date":"01 July 2024","Value1":0.5485,"Value2":0.4664},
{"Date":"01 August 2024","Value1":0.5530,"Value2":0.4706},
{"Date":"01 September 2024","Value1":0.5538,"Value2":0.4748},
{"Date":"01 October 2024","Value1":0.5594,"Value2":0.4790},
{"Date":"01 November 2024","Value1":0.5688,"Value2":0.4832},
{"Date":"01 December 2024","Value1":0.5700,"Value2":0.4874},
{"Date":"01 January 2025","Value1":0.5736,"Value2":0.4916},
{"Date":"01 February 2025","Value1":0.5755,"Value2":0.4958},
{"Date":"01 March 2025","Value1":0.5783,"Value2":0.5000},
{"Date":"01 April 2025","Value1":0.5822,"Value2":0.5042},
{"Date":"01 May 2025","Value1":0.5873,"Value2":0.5084},
{"Date":"01 June 2025","Value1":0.5906,"Value2":0.5126},
{"Date":"01 July 2025","Value1":0.6000,"Value2":0.5168},
{"Date":"01 August 2025","Value1":0.6094,"Value2":0.5210},
{"Date":"01 September 2025","Value1":0.6151,"Value2":0.5252},
{"Date":"01 October 2025","Value1":0.6247,"Value2":0.5294},
{"Date":"01 November 2025","Value1":0.6315,"Value2":0.5336},
{"Date":"01 December 2025","Value1":0.6338,"Value2":0.5378},
{"Date":"01 January 2026","Value1":0.6422,"Value2":0.5420},
{"Date":"01 February 2026","Value1":0.6430,"Value2":0.5462},
{"Date":"01 March 2026","Value1":0.6450,"Value2":0.5504},
{"Date":"01 April 2026","Value1":0.6525,"Value2":0.5546},
{"Date":"01 May 2026","Value1":0.6544,"Value2":0.5588},
{"Date":"01 June 2026","Value1":0.6630,"Value2":0.5630},
{"Date":"01 July 2026","Value1":0.6670,"Value2":0.5672},
{"Date":"01 August 2026","Value1":0.6740,"Value2":0.5714},
{"Date":"01 September 2026","Value1":0.6837,"Value2":0.5756},
{"Date":"01 October 2026","Value1":0.6910,"Value2":0.5798},
{"Date":"01 November 2026","Value1":0.6984,"Value2":0.5840},
{"Date":"01 December 2026","Value1":0.7083,"Value2":0.5882},
{"Date":"01 January 2027","Value1":0.7099,"Value2":0.5924},
{"Date":"01 February 2027","Value1":0.7173,"Value2":0.5966},
{"Date":"01 March 2027","Value1":0.7174,"Value2":0.6008},
{"Date":"01 April 2027","Value1":0.7251,"Value2":0.6050},
{"Date":"01 May 2027","Value1":0.7313,"Value2":0.6092},
{"Date":"01 June 2027","Value1":0.7352,"Value2":0.6134},
{"Date":"01 July 2027","Value1":0.7357,"Value2":0.6176},
{"Date":"01 August 2027","Value1":0.7422,"Value2":0.6218},
{"Date":"01 September 2027","Value1":0.7507,"Value2":0.6261},
{"Date":"01 October 2027","Value1":0.7606,"Value2":0.6303},
{"Date":"01 November 2027","Value1":0.7667,"Value2":0.6345},
{"Date":"01 December 2027","Value1":0.7676,"Value2":0.6387},
{"Date":"01 January 2028","Value1":0.7727,"Value2":0.6429},
{"Date":"01 February 2028","Value1":0.7752,"Value2":0.6471},
{"Date":"01 March 2028","Value1":0.7830,"Value2":0.6513},
{"Date":"01 April 2028","Value1":0.7913,"Value2":0.6555},
{"Date":"01 May 2028","Value1":0.8009,"Value2":0.6597},
{"Date":"01 June 2028","Value1":0.8045,"Value2":0.6639},
{"Date":"01 July 2028","Value1":0.8142,"Value2":0.6681},
{"Date":"01 August 2028","Value1":0.8185,"Value2":0.6723},
{"Date":"01 September 2028","Value1":0.8202,"Value2":0.6765},
{"Date":"01 October 2028","Value1":0.8286,"Value2":0.6807},
{"Date":"01 November 2028","Value1":0.8334,"Value2":0.6849},
{"Date":"01 December 2028","Value1":0.8429,"Value2":0.6891},
{"Date":"01 January 2029","Value1":0.8517,"Value2":0.6933},
{"Date":"01 February 2029","Value1":0.8571,"Value2":0.6975},
{"Date":"01 March 2029","Value1":0.8656,"Value2":0.7017},
{"Date":"01 April 2029","Value1":0.8708,"Value2":0.7059},
{"Date":"01 May 2029","Value1":0.8762,"Value2":0.7101},
{"Date":"01 June 2029","Value1":0.8849,"Value2":0.7143},
{"Date":"01 July 2029","Value1":0.8948,"Value2":0.7185},
{"Date":"01 August 2029","Value1":0.8958,"Value2":0.7227},
{"Date":"01 September 2029","Value1":0.8974,"Value2":0.7269},
{"Date":"01 October 2029","Value1":0.9010,"Value2":0.7311},
{"Date":"01 November 2029","Value1":0.9038,"Value2":0.7353},
{"Date":"01 December 2029","Value1":0.9091,"Value2":0.7395},
{"Date":"01 January 2030","Value1":0.9110,"Value2":0.7437},
{"Date":"01 February 2030","Value1":0.9206,"Value2":0.7479},
{"Date":"01 March 2030","Value1":0.9288,"Value2":0.7521},
{"Date":"01 April 2030","Value1":0.9327,"Value2":0.7563},
{"Date":"01 May 2030","Value1":0.9396,"Value2":0.7605},
{"Date":"01 June 2030","Value1":0.9418,"Value2":0.7647},
{"Date":"01 July 2030","Value1":0.9429,"Value2":0.7689},
{"Date":"01 August 2030","Value1":0.9436,"Value2":0.7731},
{"Date":"01 September 2030","Value1":0.9460,"Value2":0.7773},
{"Date":"01 October 2030","Value1":0.9512,"Value2":0.7815},
{"Date":"01 November 2030","Value1":0.9611,"Value2":0.7857},
{"Date":"01 December 2030","Value1":0.9639,"Value2":0.7899},
{"Date":"01 January 2031","Value1":0.9708,"Value2":0.7941},
{"Date":"01 February 2031","Value1":0.9718,"Value2":0.7983},
{"Date":"01 March 2031","Value1":0.9767,"Value2":0.8025},
{"Date":"01 April 2031","Value1":0.9847,"Value2":0.8067},
{"Date":"01 May 2031","Value1":0.9905,"Value2":0.8109},
{"Date":"01 June 2031","Value1":0.9964,"Value2":0.8151},
{"Date":"01 July 2031","Value1":null,"Value2":0.8193},
{"Date":"01 August 2031","Value1":null,"Value2":0.8235},
{"Date":"01 September 2031","Value1":null,"Value2":0.8277},
{"Date":"01 October 2031","Value1":null,"Value2":0.8319},
{"Date":"01 November 2031","Value1":null,"Value2":0.8361},
{"Date":"01 December 2031","Value1":null,"Value2":0.8403},
{"Date":"01 January 2032","Value1":null,"Value2":0.8445},
{"Date":"01 February 2032","Value1":null,"Value2":0.8487},
{"Date":"01 March 2032","Value1":null,"Value2":0.8529},
{"Date":"01 April 2032","Value1":null,"Value2":0.8571},
{"Date":"01 May 2032","Value1":null,"Value2":0.8613},
{"Date":"01 June 2032","Value1":null,"Value2":0.8655},
{"Date":"01 July 2032","Value1":null,"Value2":0.8697},
{"Date":"01 August 2032","Value1":null,"Value2":0.8739},
{"Date":"01 September 2032","Value1":null,"Value2":0.8782},
{"Date":"01 October 2032","Value1":null,"Value2":0.8824},
{"Date":"01 November 2032","Value1":null,"Value2":0.8866},
{"Date":"01 December 2032","Value1":null,"Value2":0.8908},
{"Date":"01 January 2033","Value1":null,"Value2":0.8950},
{"Date":"01 February 2033","Value1":null,"Value2":0.8992},
{"Date":"01 March 2033","Value1":null,"Value2":0.9034},
{"Date":"01 April 2033","Value1":null,"Value2":0.9076},
{"Date":"01 May 2033","Value1":null,"Value2":0.9118},
{"Date":"01 June 2033","Value1":null,"Value2":0.9160},
{"Date":"01 July 2033","Value1":null,"Value2":0.9202},
{"Date":"01 August 2033","Value1":null,"Value2":0.9244},
{"Date":"01 September 2033","Value1":null,"Value2":0.9286},
{"Date":"01 October 2033","Value1":null,"Value2":0.9328},
{"Date":"01 November 2033","Value1":null,"Value2":0.9370},
{"Date":"01 December 2033","Value1":null,"Value2":0.9412},
{"Date":"01 January 2034","Value1":null,"Value2":0.9454},
{"Date":"01 February 2034","Value1":null,"Value2":0.9496},
{"Date":"01 March 2034","Value1":null,"Value2":0.9538},
{"Date":"01 April 2034","Value1":null,"Value2":0.9580},
{"Date":"01 May 2034","Value1":null,"Value2":0.9622},
{"Date":"01 June 2034","Value1":null,"Value2":0.9664},
{"Date":"01 July 2034","Value1":null,"Value2":0.9706},
{"Date":"01 August 2034","Value1":null,"Value2":0.9748},
{"Date":"01 September 2034","Value1":null,"Value2":0.9790},
{"Date":"01 October 2034","Value1":null,"Value2":0.9832},
{"Date":"01 November 2034","Value1":null,"Value2":0.9874},
{"Date":"01 December 2034","Value1":null,"Value2":0.9916},
{"Date":"01 January 2035","Value1":null,"Value2":0.9958}]

////////////
// Charts //
////////////
var charts = [{"Order":1,"data":MaximumStress,"Graph Title":"FALSE","Div Title":"Maximum Stress - MPa","Subtitle":"Maximum Recorded Stress for the Month","Class":"col-md-6","Class Div":"panel  panel-default","Maximum":30,"Maximum Label":"High Stress","X Label":"Month","Y Label":"Mpa"},
{"Order":2,"data":AccumulatedDamage,"Graph Title":"FALSE","Div Title":"Maximum Damage - %","Subtitle":"Maximum Recorded Damage for the Month","Class":"col-md-6","Class Div":"panel  panel-default","Maximum":23,"Maximum Label":"Allowable Max Damage ","X Label":"Month","Y Label":"Damage %"},
{"Order":3,"data":ProjectedLife,"Graph Title":"FALSE","Div Title":"Projected Equipment Life - Years","Subtitle":"Projected Failure Point : BS 7608 :1993","Class":"col-md-12","Class Div":"panel  panel-default","Maximum":1,"Maximum Label":"100% of Life","X Label":"Year","Y Label":"Damge %"}]

///////////////////////
// LOAD GRAPH FORMAT //
///////////////////////
var chartData = charts;


////////////////////
// HTML FOR GRAPH //
////////////////////
for (var i = 0; i < chartData.length; i++) {
htmlString = '<div class="'
htmlString = htmlString.concat(chartData[i]["Class"])
htmlString = htmlString.concat('">')
htmlString = htmlString.concat('<div class="')
htmlString = htmlString.concat(chartData[i]["Class Div"])
htmlString = htmlString.concat('">')

htmlString = htmlString.concat('<div class="panel-body"><div id="')
htmlString = htmlString.concat('container'+chartData[i]["Order"])
htmlString = htmlString.concat('" style="height:280px">')
htmlString = htmlString.concat('</div>')



htmlString = htmlString.concat('</div>')
htmlString = htmlString.concat('<div class="panel-footer"><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> More Info</button></div>')
htmlString = htmlString.concat('</div>')
htmlString = htmlString.concat('</div>')
$("#chartArea").append(htmlString)
};


//////////////////////////////
// DATA FORMATING FOR CHART //
//////////////////////////////
var predictedData=[]
var actualData=[]
var dates

for (var i = 0; i < chartData[2]["data"].length; i++) {
  dates = new Date(chartData[2]["data"][i]["Date"]).toLocaleString();
  dates=Date.parse(dates) 
  actualData.push([dates,chartData[2]["data"][i]["Value1"]])
  predictedData.push([dates,chartData[2]["data"][i]["Value2"]])
};


var maxStress=[];
for (var i = 0; i < chartData[0]["data"].length; i++) {
  dates = chartData[0]["data"][i]["Date"];
  maxStress.push([dates,chartData[0]["data"][i]["Value"]])
};
var maxDamage=[];
for (var i = 0; i < chartData[1]["data"].length; i++) {
  dates = chartData[1]["data"][i]["Date"];
  maxDamage.push([dates,chartData[1]["data"][i]["Value"]])
};



loadChart(maxStress,"container1",chartData[0]["Y Label"],chartData[0]["Div Title"],chartData[0]["Maximum"],chartData[0]["Maximum Label"])
loadChart(maxDamage,"container2",chartData[1]["Y Label"],chartData[1]["Div Title"],chartData[1]["Maximum"],chartData[1]["Maximum Label"])

function loadChart(data,location,ylabel,divtitle,maximum , maximumlabel) {
    $('#'+location).highcharts({
    	      global: {
        useUTC: false
      },
        chart: {
            type: 'column'
        },
        credits: {
          enabled: false
        },
        title: false,
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            title: {
                text: ylabel
            },
            plotLines : [{
                    value : maximum,
                    color : '#C60C30',
                    dashStyle : 'shortdash',
                    width : 2,
                    label : {
                        text : maximumlabel
                    }
                }]
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: divtitle,
            color : "#002776",
            data: data,            


        }]
    });
}



////////////
// CHART //
///////////
$(function () {
    $('#container3').highcharts({
    	      global: {
        useUTC: false
      },
        chart: {
            type: 'area',
            zoomType: 'x'
        },
        title: {
            text: 'Worst Case Maximum Damage Projected to Failure'
        },
        subtitle: {
            text: 'BS 7608:1993'
        },
        credits: {
          enabled: false
        },
        xAxis: {
            allowDecimals: false,
             type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Damage %'
            },
           plotLines : [{
                    value : chartData[2]["Maximum"],
                    color : '#C60C30',
                    dashStyle : 'shortdash',
                    width : 2,
                    label : {
                        text : chartData[2]["Maximum Label"]
                    }
                }]
        },
        tooltip: {
            pointFormat: '{series.name} damage <b>{point.y}</b><br/>'
        },
        plotOptions: {
            area: {
                //pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Predicted %',
            color : "#002776",
            data: actualData
        }, {
            name: 'Allowable %',
            color : "#CBD6ED",
            data: predictedData
        }]
    });
});
}