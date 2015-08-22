function calculationfunction(data,triggerInput,input){
    //-------------------------------------------------
    //in order to handle the name of the input into the formula in the JSON , the array has to be changed into variable values , as the JSON needs to be as simple as possible , as such this for loop should remove most of that complexity.
    for (var key in data) {
      if (data[key]  ==""){
        string1 = "var "+ key + "= 0 "
        eval (string1)
      } else{        
        string1 = "var "+ key + '= ' + data[key]
        eval (string1)
        };
    };

    //-------------------------------------------------
    //this gets the key names for the formula component of the input JSON
    //this will determine all of the cells to be modified on the form.
    var keystorage =[];
    for (var key in input[triggerInput].formula[0]) {
     //this pulls out each equation and processes
     var CalculationEvent = eval(input[triggerInput].formula[0][key])
      $("input[name='"+key+"']").val(CalculationEvent);
    }
}

function inputvariable() {

  var input=[
  {
    "variable":"BeltWidth",
    "shortDescription":"Belt Width",
    "unit":"mm",
    "defaultvalue":900,
    "description":"The transverse width of a conveyor belt.",
    "category":"Conveyor belt",
    "type":"numeric",
    "formula":""
  },
  {
    "variable":"BeltSpeed",
    "shortDescription":"Belt Speed",
    "unit":"m/s",
    "defaultvalue":1,
    "description":"The traveling speed of material on the belt during normal operation.",
    "category":"Conveyor belt",
    "type":"numeric",
    "formula":""
  },
  {
    "variable":"BeltFOS",
    "shortDescription":"Belting factor of safety",
    "unit":"Null",
    "defaultvalue":10,
    "description":"The factr used to detetmine the rated tension of the belt.",
    "category":"Conveyor belt",
    "type":"numeric",
    "formula":""
  },
  {
    "variable":"BeltClass",
    "shortDescription":"Belt Class",
    "unit":"kN/m",
    "defaultvalue":1000,
    "description":"The rating given to a belt which is tested according to the relevant standards rating for the belt type in question.",
    "category":"Conveyor belt",
    "type":"number",
    "formula":""
  },
  {
    "variable":"RadiusSetback",
    "shortDescription":"Radius Setback",
    "unit":"mm",
    "defaultvalue":75,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"Tracking",
    "shortDescription":"Tracking",
    "unit":"mm",
    "defaultvalue":0,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"TroughAngle",
    "shortDescription":"Trough Angle",
    "unit":"Degrees",
    "defaultvalue":35,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"RollWidth",
    "shortDescription":"Roll Width",
    "unit":"mm",
    "defaultvalue":340,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"RollOverlap",
    "shortDescription":"Roll Overlap",
    "unit":"mm",
    "defaultvalue":5,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"ShaftSeries",
    "shortDescription":"Shaft Series",
    "unit":"mm",
    "defaultvalue":25,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"GaugeLength",
    "shortDescription":"Gauge Length",
    "unit":"mm",
    "defaultvalue":350,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"FlatLength",
    "shortDescription":"Flat Length",
    "unit":"mm",
    "defaultvalue":14,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"Freeboard",
    "shortDescription":"Freeboard",
    "unit":"mm",
    "defaultvalue":150,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"SurchargeAngle",
    "shortDescription":"Surcharge Angle",
    "unit":"Degrees",
    "defaultvalue":15,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"BeltThickness",
    "shortDescription":"Belt Thickness",
    "unit":"mm",
    "defaultvalue":15,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"CrossSectionalArea",
    "shortDescription":"Cross Sectional Area ",
    "unit":"mm",
    "defaultvalue":0,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"BulkDensity",
    "shortDescription":"Bulk Density",
    "unit":"kg/m²",
    "defaultvalue":1000,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"BeltCapacity",
    "shortDescription":"Belt Capacity",
    "unit":"TPH",
    "defaultvalue":0,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"RollDiameter",
    "shortDescription":"Roll Diameter",
    "unit":"mm",
    "defaultvalue":127,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"ShaftStepSeries",
    "shortDescription":"Shaft Step Series",
    "unit":"mm",
    "defaultvalue":30,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  },
  {
    "variable":"ShaftStepLength",
    "shortDescription":"Shaft Ste6567567p Length",
    "unit":"mm",
    "defaultvalue":320,
    "description":"",
    "category":"Idlers",
    "type":"number",
    "formula":""
  }
]
return input;
}