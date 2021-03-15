Plotly.newPlot("plotArea0", [{x: [1, 2, 3], y: [10, 20, 30]}]);

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

 Plotly.newPlot("plotArea1", [trace], layout);

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

Plotly.newPlot("plotArea2", data, layout);

var data = [{
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
}];

var layout = {
    title: "'Pie' Chart",
};

Plotly.newPlot("plotArea3", data, layout);

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

Plotly.newPlot("plotArea4", data, layout);