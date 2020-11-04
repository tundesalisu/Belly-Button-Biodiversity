d3.json("samples.json").then((importedData) => {
console.log(importedData);
data = importedData;

console.log(data.metadata[0].id)
console.log(data.metadata[0].ethnicity)
console.log(data.metadata[0].gender)
console.log(data.metadata[0].location)
d3.select("#sample-metadata")
    .append("div").text(data.metadata[0].id)
    .append("div").text(data.metadata[0].ethnicity)
    .append("div").text(data.metadata[0].gender)
    .append("div").text(data.metadata[0].location)

var demographic 

var sampleValue = data.samples.map(row => row.sample_values)//sample values Data
var otu_ids =data.samples.map(row => row.otu_ids)//otu_ids values Data
var otu_labels = data.samples.map(row => row.otu_labels)
// console.log(sampleValue)// sample values data
// console.log(otu_ids)//otu data
// console.log(otu_labels)//label data
// console.log(sampleValue[0])// first indivvidual sample data
// console.log(otu_ids[0])
// console.log(otu_labels[0])

var sl_sample_values =sampleValue[0].slice(0,11)
var sl_otu_ids =otu_ids[0].slice(0,11)
var sl_otu_labels =otu_labels[0].slice(0,11)

console.log(sl_sample_values)
console.log(sl_otu_ids)
console.log(sl_otu_labels)

var trace1 = {
    x: sl_otu_ids,
    y: sl_sample_values,
    text : sl_otu_labels,
    type: "bar"
  };
  var data = [trace1];
  var layout = {
    title: "horizontal bar chart",
    xaxis: { title: "otu_ids" },
    yaxis: { title: "sample_values" }    
  };
  Plotly.newPlot("bar", data, layout);


  var trace1 = {
    x: sl_otu_ids,
    y: sl_sample_values,
    mode: 'markers',
    marker: {
      size: sl_sample_values
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'bubble chart',
    showlegend: false,
    height: 600,
    width: 600
  };
  
  Plotly.newPlot('bubble', data, layout);


  d3.selectAll("body").on("change", updatePlotly);

  // This function is called when a dropdown menu item is selected
  function updatePlotly() {
    // Use D3 to select the dropdown menu
    var dropdownMenu = d3.select("#selDataset");
    // Assign the value of the dropdown menu option to a variable
    var dataset = dropdownMenu.node().value;
  
    var CHART = d3.selectAll("#bar").node();
  
    // Initialize x and y arrays
    var x = [];
    var y = [];
  
    switch(dataset) {
      case "dataset2":
        x = otu_ids[1].slice(0,11);
        y = sampleValue[1].slice(0,11)
        text = otu_labels[1].slice(0,11)
        break;
  
      case "dataset3":
        x = otu_ids[2].slice(0,11);
        y = sampleValue[2].slice(0,11)
        text = otu_labels[2].slice(0,11)
        break;

        case "dataset4":
            x = otu_ids[3].slice(0,11);
            y = sampleValue[3].slice(0,11)
            text = otu_labels[3].slice(0,11)
            break;
  
      case "dataset5":
        x = otu_ids[4].slice(0,11);
        y = sampleValue[4].slice(0,11)
        text = otu_labels[4].slice(0,11)
        break;

        case "dataset6":
        x = otu_ids[5].slice(0,11);
        y = sampleValue[5].slice(0,11)
        text = otu_labels[5].slice(0,11)
        break;

        case "dataset8":
            x = otu_ids[6].slice(0,11);
            y = sampleValue[6].slice(0,11)
            text = otu_labels[6].slice(0,11)
            break;

        case "dataset9":
        x = otu_ids[7].slice(0,11);
        y = sampleValue[7].slice(0,11)
        text = otu_labels[7].slice(0,11)
        break;

        case "dataset10":
        x = otu_ids[9].slice(0,11);
         y = sampleValue[9].slice(0,11)
      text = otu_labels[9].slice(0,11)
            break;
  
      default:
        x = sl_otu_ids;
        y = sl_sample_values;
        text = sl_otu_labels
        break;
    }
  
  
    // Note the extra brackets around 'x' and 'y'
    Plotly.restyle(CHART, "x", [x]);
    Plotly.restyle(CHART, "y", [y]);
    Plotly.restyle(CHART, "text", [text])
  }



})