function  varibables(){

var input = [
  {
    "description":"Flight Number",
    "variable":"flightnumber",
    "type":"numeric",
    "source":"",
    "unit":"",
  },
  {
    "description":"Description",
    "variable":"description",
    "type":"",
    "source":"",
    "unit":""
  },
  {
    "description":"Station",
    "variable":"Station",
    "type":"numeric",
    "source":"",
    "unit":"mm"
  },
  {
    "description":"Elevation",
    "variable":"Elevation",
    "type":"numeric",
    "source":"",
    "unit":"mm"
  },
  {
    "description":"Idler Spacing",
    "variable":"idlerspacing",
    "type":"numeric",
    "source":"",
    "unit":"mm"
  },
  {
    "description":"Carry / Return",
    "variable":"carryreturn",
    "type":"dropdown",
    "source":["carry", "return"],
    "unit":""
  },
  {
    "description":"Loaded / Empty",
    "variable":"loadedempty",
    "type":"dropdown",
    "source":["loaded", "empty"],
    "unit":""
  },
  {
    "description":"Take-up Location",
    "variable":"TakeupLocation",
    "type":"dropdown",
    "source":["Yes",""],
    "unit":""
  },
  {
    "description":"Drive Location",
    "variable":"DriveLocation",
    "type":"dropdown",
    "source":["Primary","Secondary","Tertiary"],
    "unit":""
  },
  {
    "description":"Vertical Radius",
    "variable":"VerticalRadius",
    "type":"numeric",
    "source":"",
    "unit":"mm"
  },
  {
    "description":"Pulley Type",
    "variable":"PulleyType", 
    "type":"dropdown",
    "source":["Drive", "HT Snub","LT Snub"],
    "unit":""
  },
  {
    "description":"Non Drive Pulley Losses",
    "variable":"nondrivelosses",
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Ts - Material on Skirting",
    "variable":"tsMaterial",
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Tam - Acceleration of material",
    "variable":"tamaterial",    
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Ancillary Tension",
    "variable":"ancillarytension",      
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Take up Location and Size",
    "variable":"TakeupLocationandSize",   
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Loaded Belt Drive Effective Tension",
    "variable":"LoadedBeltDriveEff", 
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Empty Belt Drive Effective Tension",
    "variable":"EmptyBeltDriveEff", 
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"T Empty Belt",
    "variable":"tensionemptybelt",     
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"T Horizontal Move",
    "variable":"tensionmovehorizontal",     
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"T Lift",
    "variable":"tensionraiseload",     
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Required Sag Tension at Point",
    "variable":"beltsagatpoint", 
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Ts - Belt Slope Tension",
    "variable":"beltslopetension",     
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"T Effective - Loaded Belt",
    "variable":"effectivetensionsloadedbelt",     
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Station Tensions - Loaded Belt",
    "variable":"StTensionsLoaded",     
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Calculated Stretch at Point",
    "variable":"",     
    "type":"numeric",
    "source":"",
    "unit":"m"
  },
  {
    "description":"T Effective - Empty Belt",
    "variable":"effectivetensionsemptybelt",     
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Station Tensions - Empty Belt",
    "variable":"StTensionsEmpty",     
    "type":"numeric",
    "source":"",
    "unit":"kN"
  },
  {
    "description":"Calculated Stretch at Point",
    "variable":"",     
    "type":"numeric",
    "source":"",
    "unit":"m"
  },
  {
    "description":"Working length",
    "variable":"", 
    "type":"numeric",
    "source":"",
    "unit":"m"
  },
  {
    "description":"Length",
    "variable":"Length",     
    "type":"numeric",
    "source":"",
    "unit":"mm"
  },
  {
    "description":"Height",
    "variable":"Height",     
    "type":"numeric",
    "source":"",
    "unit":"mm"
  },
  {
    "description":"Cumulative Length",
    "variable":"",     
    "type":"numeric",
    "source":"",
    "unit":"mm"
  },
  {
    "description":"Line Length",
    "variable":"",     
    "type":"numeric",
    "source":"",
    "unit":"mm"
  }
]

return input;
//function end
}