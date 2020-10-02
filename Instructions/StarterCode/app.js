d3.json("samples.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;

//     2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.


// * Use `sample_values` as the values for the bar chart.
    top_10_sample_values = data.samples.slice(0,10)
    console.log(top_10_sample_values)

    var sampleValues = top_10_sample_values.map(value => value.sample_values)
    console.log("Samples Values: ", sampleValues)
    

    var otu_ids =  top_10_sample_values.map(value => value.otu_ids)
    console.log("OTU Ids: ", otu_ids)

    var otu_labels =  top_10_sample_values.map(value => value.otu_labels)
    console.log("otu_labels: ", otu_labels)






})


