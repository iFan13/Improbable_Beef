//plot 1
Plotly.newPlot("plotArea0", [{x: [1, 2, 3], y: [10, 20, 30]}], {responsive:true});

//plot 2
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
Plotly.newPlot("plotArea1", [trace], layout, {responsive:true});

// plot 3
var trace = {
    /*Drinks*/ x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    /*% of Drinks Ordered*/y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
}
var data = [trace];
var layout = {
    title: "'Bar' Chart",
    xaxis: { title: "Drinks"},
    yaxis: { title: "% of Drinks Ordered"}
};
Plotly.newPlot("plotArea2", data, layout, {responsive:true});

// plot 4
var data = [{
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
}];

var layout = {
    title: "'Pie' Chart",
};

Plotly.newPlot("plotArea3", data, layout, {responsive:true});

// plot 5
var data = [{
    x: [1, 3, 2, 4],
    y: [10, 20, 30, 40],
    mode: "markers",
    type: "scatter"
}];

var layout = {
    title: "Scatter Graph",
    xaxis: {title: "x values"},
    yaxis: {title: "y values"}
};

Plotly.newPlot("plotArea4", data, layout, {responsive:true});

// map function
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

// map function practice
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// skill drill: return city population

var cityNames1 = cities.map(function(city){
    return city.population;
});
console.log(cityNames1);

// filter function 

var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});
console.log(olderThanFive)

// skill drill: return that start with S
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var startsWithS = words.filter(function(animals){return animals.startsWith("s");});
console.log(startsWithS)

var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

var familyAge = [3,2,39,37,9];
//default function: (a,b)=>a-b for ascending; descending b-a. reverse() also works but needs to be sorted first **remember sort and reverse are in place
var sortedAge = familyAge.sort((a,b) => a - b);
console.log("Sorted Age: " + sortedAge);

var descSortedAge = familyAge.sort((a,b) => b-a);
console.log("Desc Sorted Age: " + descSortedAge);

var descSortedAge2 = familyAge.sort((a,b) => a - b);
descSortedAge2.reverse()
console.log("Desc Sorted Age2: " + descSortedAge2);

var revSortedAge = sortedAge.reverse()
console.log("Sorted Age Rev: "+ revSortedAge)

//slice

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var sliceFirst3 = words.slice(0,3);
console.log(sliceFirst3)

var array1 = [1, 2, 3];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

var reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
