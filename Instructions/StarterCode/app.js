d3.json("samples.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;

//     2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


// * Use `sample_values` as the values for the bar chart.
    top_10_sample_values = data.samples.slice(0,10)
    console.log(top_10_sample_values)

    var sampleValues = top_10_sample_values.map(value => value.sample_values)
    console.log("Samples Values: ", sampleValues)
    sampleValuesList = []
    for (x = 0; x<10; x++){
        sampleValuesList.push(sampleValues[x][0])
    }
    console.log("top 10 sample value:", sampleValuesList)
    

    var otu_ids =  top_10_sample_values.map(value => value.otu_ids)
    console.log("OTU Ids: ", otu_ids)

    otu_ids_list = []
    for (x = 0; x<10; x++){
        otu_ids_list.push(otu_ids[x][0])
    }
    console.log("top 10 otu_ids_list:", otu_ids_list)

    
    var otu_labels =  top_10_sample_values.map(value => value.otu_labels)
    console.log("otu_labels: ", otu_labels)

    otu_labels_list = []
    for (x = 0; x<10; x++){
        otu_labels_list.push(otu_labels[x][0])
    }
    console.log("top 10 otu_labels_list:", otu_labels_list)



    var trace = {
        x: otu_ids,
        y: sampleValuesList,
        type: "bar",
        text :otu_labels
      };
      
      // 6. Create the data array for our plot
      var data = [trace];
      
      // 7. Define our plot layout
      var layout = {
        title: "bar Chart",
        xaxis: { title: "OTU Ids" },
        yaxis: { title: "sample value"}
       
      };
      
      // 8. Plot the chart to a div tag with id "bar-plot"
      Plotly.newPlot("bar", data, layout);


})


