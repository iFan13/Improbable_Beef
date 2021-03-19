const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

//skill drill
d3.json(url).then(spaceXResults => spaceXResults.forEach(entry => console.log(entry.full_name+": " + entry.location.latitude+", "+entry.location.longitude)));