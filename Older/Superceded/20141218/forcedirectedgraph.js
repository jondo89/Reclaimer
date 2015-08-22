function drawsigmjsgraph(input,container){
//this is to add the sigma graph
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 10)) + min;
}

var s = new sigma(container);

for (var i = 0; i < input.length; i++) {


   var teststt = {
      id: input[i].variable,
      label: input[i].shortDescription,
      x:  getRandomInt(2, 2),
      y:  getRandomInt(2, 2),
      size: 1,
      color: '#f00'
      }
s.graph.addNode(teststt)

};

for (var i = 0; i < input.length; i++) {
  for (var key in input[i].formula[0]) {

s.graph.addEdge({
      id: "i"+Math.random(),
      // Reference extremities:
      source: input[i].variable,
      target: key,
      type: "arrow"
});
  };
};

// Refresh the graph to see the changes:
s.refresh();}