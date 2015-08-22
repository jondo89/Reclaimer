function performCalculations(hot,data)
{

var headers = {};
for (var i = 0; i < data.length; i++) {
headers[data[i].variable] = i;
};
//console.log(headers)
var data1 = (($('form').serializeObject()))
console.log(data1)

var formdata = {
  "Lo": parseFloat(document.getElementById('field_u88ltq3').value),
  "Z": parseFloat(document.getElementById('field_lmtmik3').value),
  "C": parseFloat(document.getElementById('field_3sbdm63').value),
  "S": parseFloat(document.getElementById('field_luz62g3').value),
  "G": parseFloat(document.getElementById('field_cq4zko').value),
  "B": parseFloat(document.getElementById('field_lkub7s').value),
  "Si": parseFloat(document.getElementById('field_pzcvup3').value),
  "driveeff": parseFloat(document.getElementById('field_a8fpk2').value),
  "cpingeff": parseFloat(document.getElementById('field_igap2e2').value),
  "redeff": parseFloat(document.getElementById('field_3qqky').value),
  "Ttu": parseFloat(document.getElementById('field_h98qhy').value)
}

console.log("Calculation.js activated")
try {
	//this is to clear the error message area
	jQuery("#errormessage").html("");	
	dataset = hot.getData();
	jQuery("#field_b9ke8l").val(JSON.stringify({"data": hot.getData()}))
	//app launch
	Length(dataset,headers);
	Height(dataset,headers);
	WorkingLength(dataset,headers);
	LineLength(dataset,headers);
	TensionEmptyBelt (dataset,headers,formdata) ;
	TensionMoveHorizontal (dataset,headers,formdata);
	TensionRaiseLoad (dataset,headers,formdata) ;
	BeltSagAtPoint (dataset,headers,formdata);
	BeltSlopeTension (dataset,headers,formdata);
	var  temp1 = EffectiveTensionsLoadedBelt (dataset,headers,formdata);
	var  temp2 = EffectiveTensionsEmptyBelt (dataset,headers,formdata);
	TakeUpLocation (dataset,headers,formdata);

	DriveLocation (dataset,headers,formdata,temp1,temp2) 
	StationTensionLoaded (dataset,headers,formdata)


//Calculation completed sucessfully , this is not a great error check as it is linked to the DOM and not variables.
	if (jQuery("#errormessage").html()=="") {
			jQuery("#errormessage").html("<div class='woo-sc-box tick  rounded full'>Calculations completed sucessfully</div>");
	} 

}
catch(err) {
    console.log("First Iteration");
}


// stage 1 convert to length and height the dataset variable
};

function Length (dataset,headers) {
// length gives the vector of the length
	dataset[0][headers.Length] = 0
	for (var i = 0; i < dataset.length; i++) {
		//console.log(dataset[i][station],dataset[i][elevation])
               try {
				h1 = dataset[i][headers.Station];
				h2 = dataset[i + 1][headers.Station];
				hstep = h2 - h1;
				//console.log(hstep)
				dataset[i+1][headers.Length] = hstep;
               } catch (err) {
                   //console.log('Trip Point');
                 }
	};
//checked 20141211	
}

function Height (dataset,headers) {
// length gives the vector of the length
	dataset[0][headers.Height] = 0
	for (var i = 0; i < dataset.length; i++) {
		//console.log(dataset[i][station],dataset[i][elevation])
               try {
				h1 = dataset[i][headers.Elevation];
				h2 = dataset[i + 1][headers.Elevation];
				hstep = h2 - h1;
				//console.log(hstep)
				dataset[i+1][headers.Height] = hstep;
               } catch (err) {
                   //console.log('Trip Point');
                 }
	};
//checked 20141211	
}

function WorkingLength (dataset,headers) {
// working length is the absolute value to get the distance between 
	dataset[0][headers.workinglength] = 0
	for (var i = 0; i < dataset.length; i++) {
		//console.log(dataset[i][station],dataset[i][elevation])
               try {
				h1 = dataset[i][headers.Station];
				h2 = dataset[i + 1][headers.Station];
				hstep = h2 - h1;
				//console.log(hstep)
				dataset[i+1][headers.workinglength] = Math.abs(hstep);
               } catch (err) {
                   //console.log('Trip Point');
                 }
	};
//checked 20141211	
}

//Required Additional Points
// 1. Add the line length and total belt length to this app.

function LineLength (dataset,headers) {
// length gives the vector of the length
for (var i = 0; i < dataset.length; i++) {
	tempvar = Math.sqrt(Math.pow(dataset[i][headers.Height],2) + Math.pow(dataset[i][headers.Length],2));	
	dataset[i][headers.linelength] = tempvar;
};

//checked 20141211	
}


//Stage 2 basic tensions

function TensionEmptyBelt (dataset,headers,formdata) {
	for (var i = 0; i < dataset.length; i++) {
	tempvar=(9.81*formdata.C*formdata.G*(dataset[i][headers.Length]/1000))/1000
	dataset[i][headers.tensionemptybelt] = Math.abs(tempvar);	
	};
}

function TensionMoveHorizontal (dataset,headers,formdata) {
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i][headers.loadedempty]=="loaded") {
			tempvar=(9.81*formdata.C*formdata.Z*(dataset[i][headers.Length]/1000))/1000
			dataset[i][headers.tensionmovehorizontal] = Math.abs(tempvar);
		} else{
			dataset[i][headers.tensionmovehorizontal] = 0;
		};
	};
}

function TensionRaiseLoad (dataset,headers,formdata) {
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i][headers.loadedempty]=="loaded") {
			tempvar=(9.81*formdata.Z*(dataset[i][headers.Height]/1000))/1000
			dataset[i][headers.tensionraiseload] = tempvar;
		} else{
			dataset[i][headers.tensionraiseload] = 0;
		};
	};
}

function BeltSagAtPoint (dataset,headers,formdata) {
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i][headers.carryreturn]=="carry") {
			tempvar=(9.81*(formdata.Z+formdata.B)*(dataset[i][headers.idlerspacing]/1000))/(80*formdata.Si)
			dataset[i][headers.beltsagatpoint] = tempvar;
		} else{
			tempvar=(9.81*(formdata.B)*(dataset[i][headers.idlerspacing]/1000))/(80*formdata.Si)
			dataset[i][headers.beltsagatpoint] = tempvar;
		};
	};
}

function BeltSlopeTension (dataset,headers,formdata) {
	for (var i = 0; i < dataset.length; i++) {
			tempvar=(9.81*(formdata.B)*(dataset[i][headers.Height]/1000))/1000
			dataset[i][headers.beltslopetension] = tempvar;
	};
}


function EffectiveTensionsLoadedBelt (dataset,headers,formdata) {
	var total = 0;
	for (var i = 0; i < dataset.length; i++) {
	tempvar=
		parseFloat(dataset[i][headers.nondrivelosses])+
		parseFloat(dataset[i][headers.tsMaterial])+
		parseFloat(dataset[i][headers.tamaterial])+
		parseFloat(dataset[i][headers.ancillarytension])+
		dataset[i][headers.tensionemptybelt]+
		dataset[i][headers.tensionmovehorizontal]+
		dataset[i][headers.tensionraiseload]+
		dataset[i][headers.beltslopetension]
		;
	dataset[i][headers.effectivetensionsloadedbelt] = tempvar;
	total=total+tempvar;
	};
	return total
}

function EffectiveTensionsEmptyBelt (dataset,headers,formdata) {
	var total = 0;
	for (var i = 0; i < dataset.length; i++) {
	tempvar=(
		dataset[i][headers.nondrivelosses]+
		dataset[i][headers.ancillarytension]+
		dataset[i][headers.tensionemptybelt]+
		dataset[i][headers.beltslopetension]
		);
	dataset[i][headers.effectivetensionsemptybelt] = tempvar;
	total=total+tempvar;
	};
	return total
}

function TakeUpLocation (dataset,headers,formdata) {
	var errorFlag=1;	
	for (var i = 0; i < dataset.length; i++) {
if (dataset[i][headers.TakeupLocation]=="Yes") {
			dataset[i][headers.TakeupLocationandSize] = formdata.Ttu;
			errorFlag=0
		} else{
			dataset[i][headers.TakeupLocationandSize] = 0;
		};
	};

	alerts(errorFlag);
}
 
function DriveLocation (dataset,headers,formdata,temp1,temp2) {
	var errorFlag=2;	
	for (var i = 0; i < dataset.length; i++) {
if (dataset[i][headers.DriveLocation]=="Primary") {
			dataset[i][headers.LoadedBeltDriveEff] = parseFloat(temp1);
			dataset[i][headers.EmptyBeltDriveEff] = temp2;
			errorFlag=0
		} else{
			dataset[i][headers.LoadedBeltDriveEff] = 0;
			dataset[i][headers.EmptyBeltDriveEff] = 0;
		};
	};
	alerts(errorFlag);
}

//this is the core calcualtion engine area.


function StationTensionLoaded (dataset,headers,formdata) {
	for (var i = 0; i < dataset.length; i++) {
		if (dataset[i][headers.TakeupLocation]=="Yes") {
			tempvar1 = dataset[i][headers.effectivetensionsloadedbelt]+dataset[i][headers.TakeupLocationandSize]
			tempvar2 = dataset[i][headers.effectivetensionsemptybelt]+dataset[i][headers.TakeupLocationandSize]
			dataset[i][headers.StTensionsLoaded] = tempvar1;
			dataset[i][headers.StTensionsEmpty] = tempvar2;
			var indexvar = i;
			for (var j = i+1; j < dataset.length; j++) {
				tempvar1 = dataset[j][headers.effectivetensionsloadedbelt]+dataset[j-1][headers.StTensionsLoaded]
				tempvar2 = dataset[j][headers.effectivetensionsemptybelt]+dataset[j-1][headers.StTensionsEmpty]
				dataset[j][headers.StTensionsLoaded] = tempvar1;
				dataset[j][headers.StTensionsEmpty] = tempvar2;
				var storagevar1 = tempvar1;
				var storagevar2 = tempvar2;
			};
		} 
	};

//this is extreamly shitty
				tempvar1 = dataset[0][headers.effectivetensionsloadedbelt]+storagevar1
				tempvar2 = dataset[0][headers.effectivetensionsemptybelt]+storagevar2
				dataset[0][headers.StTensionsLoaded] = tempvar1;
				dataset[0][headers.StTensionsEmpty] = tempvar2;

for (var i = 1; i < indexvar; i++) {
				tempvar1 = dataset[i][headers.effectivetensionsloadedbelt]+dataset[i-1][headers.StTensionsLoaded]
				tempvar2 = dataset[i][headers.effectivetensionsemptybelt]+dataset[i-1][headers.StTensionsEmpty]
				dataset[i][headers.StTensionsLoaded] = tempvar1;
				dataset[i][headers.StTensionsEmpty] = tempvar2;
};

}

function alerts(errorFlag){
var errormessage = [
				{
					"errormessage":""
				},
				{
					"errormessage":"<div class='woo-sc-box  alert'>There is no take up location defined</div>"
				},
				{
					"errormessage":"<div class='woo-sc-box  alert'>There is no drive location defined</div>"
				},  
			];
	jQuery("#errormessage").append(errormessage[errorFlag].errormessage);	
}

