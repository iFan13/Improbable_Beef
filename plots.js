d3.json("samples.json").then(function(data){console.log(data)});
d3.json("samples.json").then(function(data){
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