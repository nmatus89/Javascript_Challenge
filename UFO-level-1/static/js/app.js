// from data.js
var tableData = data;
// YOUR CODE HERE!
var tbody = d3.select("tbody");


// Select the button
var filter_button = d3.select("#filter-btn");

filter_button.on("click", function () {

    d3.event.preventDefault();
    d3.select(".summary").html("");
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    //console.log(inputValue);
    //console.log(tableData);

    // iterar el valor del filtro en la tabla
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);

    // Use D3 to select the table body
    // filteredData.forEach((dateData) => {
    //     var row = tbody.append("tr");
    //     Object.entries(dateData).forEach(([key, value]) => {
    //         var cell = row.append("td");
    //         cell.text(value);
    //     });
    // });
    
    tbody.html("");
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});

