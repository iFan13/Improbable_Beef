function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    /*
    var start = performance.now()
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
    var end = performance.now()
    console.log(end-start) //0.1549
    */
    
    //var start = performance.now()
    for (category in result) {
      PANEL.append("h5").text(`${category.toUpperCase()}: ${result[category]}`)
    } // performance difference of 0.1s in favour
    //var end = performance.now()
    //console.log(end-start) //0.0599

  });
}

function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = data.metadata;
    var resultArrayMetadata = metadata.filter(sampleObj => sampleObj.id == parseInt(sample));
    //expected result: 1 object matching ID

    // Create a variable that holds the first sample in the array.
    var samples = data.samples;
    var resultArraySamples = samples.filter(sampleObj=> parseInt(sampleObj.id) == sample);
    //expected result: an array with 1 object matching ID
    
    // 2. Create a variable that holds the first sample in the metadata array.
    var metadataResult = resultArrayMetadata[0];

    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var sampleResult = resultArraySamples[0];
    
    var all_otu_ids = sampleResult.otu_ids;
    var all_otu_labels = sampleResult.otu_labels;
    var all_sample_values = sampleResult.sample_values;
        
    // 3. Create a variable that holds the washing frequency.
    var wash_frequency = parseFloat(metadataResult.wfreq);

    // Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order 
    // so the otu_ids with the most bacteria are last.  

    var yticks = all_otu_ids.map(x=> `OTU ${x.toString()} `).slice(0,10).reverse()
    var top_10_otu_labels = all_otu_labels.map(x => x).slice(0,10).reverse()
    var top_10_sample_values = all_sample_values.map(x=>x).slice(0,10).reverse()

    // Create the trace for the bar chart. 
    var barData = [{
      x: top_10_sample_values,
      y: yticks,
      text: top_10_otu_labels,
      type: "bar",
      orientation: "h"
    }];  
    // Create the layout for the bar chart. 
    var barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      yaxis: {ticktext: top_10_otu_labels},
      bargap:0.2,
      paper_bgcolor: "silver",
      plot_bgcolor: "lightgray"
    };

    // Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", barData, barLayout, {responsive:true})
    
    // Create the trace for the bubble chart.
    var bubbleData = [{
      x: all_otu_ids,
      y: all_sample_values,
      mode: "markers",
      marker: {
        color: all_otu_ids,
        colorscale: 'Earth',
        size: all_sample_values
      },
      text: all_otu_labels,
      hovertemplate: `(%{x}, %{y})<br>%{text}<extra></extra>`,
    }];

    // Create the layout for the bubble chart.
    var bubbleLayout = {
      hovermode:'closest',
      title: "Bacteria Cultures Per Sample" ,
      xaxis: {title: "OTU ID"},
      margin: { t: 60, r: 40, l: 40, b: 70 },
      paper_bgcolor: "silver",
      plot_bgcolor: "lightgray"
    };

    // D2: 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData,bubbleLayout, {responsive:true})
    

    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      value: wash_frequency,
      title: {text: "Scrubs Per Week",font: {size:16}},
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: {range: [null, 14], tickwidth: 1, tickcolor: "black", tickmode:"linear", tick0: 0, dtick: 2},
        bar: {color: "black"},
        steps: [
          {range: [0,2], color: "crimson"},
          {range: [2,4], color: "orangered"},
          {range: [4,6], color: "orange"},
          {range: [6,8], color: "gold"},
          {range: [8,10], color: "yellow"},
          {range: [10,12], color: "yellowgreen"},
          {range: [12,14], color: "green"}
        ]
      }
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      autosize: true,
      title: {
        text: "Belly Button Washing Frequency",
        font: {size:20}
      },
      margin: { t: 100, r: 50, l: 50, b: 20 },
      paper_bgcolor: "silver"
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData,gaugeLayout, {responsive:true})
    
  });
}