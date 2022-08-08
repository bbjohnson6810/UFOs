// import data from data.js
const tableData = data;

// reference the html table using the d3 library's 'tbody' tag
var tbody = d3.select("tbody"); // looks for <tbody> tags in html, assigns to variable 'tbody'

// function: take data from an array and place it into a table
function buildTable(data) {

    tbody.html("");     // clear the data - creates an empty table in which to insert data
    
    data.forEach((dataRow) => {
        let row = tbody.append("tr");   // find the <tbody> tag and append a table row
        Object.values(dataRow).forEach((val) => {   // put each UFO sighting into a row of data
            let cell = row.append("td");    // append data into a table data tag (<td>)
            cell.text(val);     // add data to the row
        });

    });
};

// function: 
function handleClick() {

    let date = d3.select("#datetime").property("value"); // d3 library: select the 1st '#datetime' ID in html tags
    let filteredData = tableData; // raw dataset

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date); // show only rows with the chosen date
    }

    buildTable(filteredData); // construct a new table with filtered data
};

// execute handleClick when a filter button is clicked
d3.selectAll("#filter-btn").on("click", handleClick); 

// construct the complete table when the page loads
buildTable(tableData); 
