# Improbable Beef

## What is Improbable Beef?

Improbable Beef is a food startup company. They have partnered with Roza, a biological researcher in a prominent microbiology laboratory. Their goal is to discover and document bacterial species with particular interest in baceterial species that have the ability to synthesize proteins that taste like beef. Roza hypothesizes that the human navel may be able to play host to this desired bacteria. To test her hypothesis Roza has sampled the navels of people across the country to identify bacterial species that colonize the human navel.

## Repository Overview

This repository serves as the back end hosting for the deployed dashboard [https://ifan13.github.io/Improbable_Beef/](https://ifan13.github.io/Improbable_Beef/). The project is to help fellow researchers, Roza & her volunteers access an individual person's bacterial biodiversity based on an ID system. Participants will know their own IDs however non participants would not allowing for anonymity. Should a desireable candidate to manufacture synthetic beef be identified, Roza's volunteers will be able to identify whether that species is found in their navel and potentially sell their bacteria to Improbable Beef.

## Resources

Resources used in this repository include:

* HTML
  * Bootstrap
* JSON
* Javascript
  * plotly
  * D3

## Data sources

The data source is attached and may be found [here](/samples.json).

## Recommendations

The [script](/plot.js) does have a flaw in that if the sample_values array in the samples object are not in a pre-sorted order, it would be necessary to perform a sort on the sample_values then repeat the new order of original indices onto the otu_ids and otu_labels arrays. In this script, insurance for such an event is implemented by the following code.

```javascript
// create an array of arrays with samples' sample_values indexed
var all_sample_values_indexed = [];
for (var index = 0; index < all_sample_values.length;index++){
    all_sample_values_indexed[index]=[all_sample_values[index], index];
}

// sort descending by sample values
all_sample_values_indexed.sort((a,b)=> b[0]-a[0])

// sort otu_labels & otu_ids by sample_values indexed's second index ie: the original index location
var all_otu_labels_resort = [];
var all_otu_ids_resort = [];
if (all_otu_ids.length == all_sample_values_indexed.length && all_otu_labels.length == all_sample_values_indexed.length){
    for (var index = 0; index < all_sample_values_indexed.length; index++){
    all_otu_labels_resort[index] = all_otu_labels[all_sample_values_indexed[index][1]];
    all_otu_ids_resort[index]=all_otu_ids[all_sample_values_indexed[index][1]];
    }
}
```

Before performing the remainder of the operations

```javascript
var yticks = all_otu_ids_resort.slice(0,10).map(element=> `OTU ${element.toString()} `).reverse()
var top_10_otu_labels = all_otu_labels_resort.slice(0,10).map(element => element).reverse()
var top_10_sample_values = all_sample_values_indexed.slice(0,10).map(element=>element[0]).reverse()
```
