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

    // iterar el valor del filtro en la tabla
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
// city
    var inputElement2 = d3.select("#city");
    // Get the value property of the input element
    var inputValue2 = inputElement2.property("value");

    // iterar el valor del filtro en la tabla
    var filteredData2 = tableData.filter(tableData => tableData.city === inputValue);
    console.log(filteredData2);
// state 
    var inputElement = d3.select("#state");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // iterar el valor del filtro en la tabla
    var filteredData = tableData.filter(tableData => tableData.state === inputValue);
    console.log(filteredData);

// country 
    var inputElement = d3.select("#country");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // iterar el valor del filtro en la tabla
    var filteredData = tableData.filter(tableData => tableData.country === inputValue);
    console.log(filteredData);

// shape 
    var inputElement = d3.select("#shape");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // iterar el valor del filtro en la tabla
    var filteredData = tableData.filter(tableData => tableData.shape === inputValue);
    console.log(filteredData);

    tbody.html("");
    filteredData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

    tbody.html("");
    filteredData2.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});



