var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);

  //skill drill 
  var sortedCitiesPop = cityGrowths.sort((a, b)=>
  b.population - a.population)

  var topSevenCities = sortedCitiesPop.slice(0,7);
  var topSevenCityNames = topSevenCities.map(city => city.City);
  var topSevenCityPop = topSevenCities.map(city => parseInt(city.population));

  var tracePop = {
    x: topSevenCityNames,
    y: topSevenCityPop,
    type: "bar"
  };
  var data1 = [tracePop]
  var layout1 = {
    title: "Largest City Populations",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("skilldrill", data1, layout1);