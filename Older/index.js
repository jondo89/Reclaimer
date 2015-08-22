
//used to extract to a table all of the inputs from the form
function drawTable(data,input,Variabletablebody,Variabletable) {

$( "#"+Variabletablebody ).empty();
for(var key in data){
    var row = $("<tr />")
    $("#"+Variabletable).append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it


        for (var i = 0; i < input.length; i++) {
            if (key==input[i].variable) {
                    row.append($("<td>" + input[i].shortDescription + "</td>"));
                    row.append($("<td>" + data[key] + "</td>"));
                    row.append($("<td>" + input[i].unit + "</td>"));
            } 
                else{};
    };
    
 //alert('key name: ' + key + ' value: ' + data[key]); 
}

for (var i = 0; i < input.length; i++) {
    input[i]
};


}

 // Use internal $.serializeArray to get list of form elements which is consistent with $.serialize
//
// And to avoid names such as 
// => object["favorite-color"]
//
// We camelcase the name part, so the notation becomes 
// => object["favoriteColor"]
//
// Conveniently, this allows period notation to be used.
// => object.favoriteColor
//
// This behaviour is similar to $(element).data()
//
// $('<div data-favorite-color="yellow"></div>').data()
// => { favoriteColor: 'yellow' }

$.fn.serializeObject = function() {
    var o = Object.create(null),
        elementMapper = function(element) {
            element.name = $.camelCase(element.name);
            return element;
        },
        appendToResult = function(i, element) {
            var node = o[element.name];

            if ('undefined' != typeof node && node !== null) {
                o[element.name] = node.push ? node.push(element.value) : [node, element.value];
            } else {
                o[element.name] = element.value;
            }
        };
    $.each($.map(this.serializeArray(), elementMapper), appendToResult);
    return o;
};