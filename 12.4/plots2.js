
d3.json("../samples.json").then(function(data){console.log(data)});
d3.json("../samples.json").then(function(data){
    //get all wash frequency from metadata
    wfreq = data.metadata.map(person => person.wfreq)
    //sort descending
    .sort(
            (a,b) => b - a);
    //filter non zero/aka nulls
        filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});

d3.selectAll("#selectOption").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};

//skill drill
d3.selectAll("#selectDisney").on("change", disneyCharacter);

function disneyCharacter(){
    var dropdownDisney = d3.selectAll("#selectDisney").node();
    console.log(dropdownDisney.value)
}



function init() {
    data = [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }];
    Plotly.newPlot("plot", data);
  };
  
  d3.selectAll("#dropdownMenu").on("change", updatePlotly);
  function updatePlotly() {
    var dropdownMenu = d3.select("#dropdownMenu");
    var dataset = dropdownMenu.property("value");
  
    var xData = [1, 2, 3, 4, 5];
    var yData = [];
  
    if (dataset === 'dataset1') {
      yData = [1, 2, 4, 8, 16];
    };
  
    if (dataset === 'dataset2') {
      yData = [1, 10, 100, 1000, 10000];
    };
  
    var trace = {
      x: [xData],
      y: [yData],
    };
    Plotly.restyle("plot", trace);
  };
  
  init();