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