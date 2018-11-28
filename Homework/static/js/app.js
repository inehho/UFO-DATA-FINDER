// from data.js
var tableData = data;

// YOUR CODE HERE!
var submit = d3.select("#filter-btn");

submit.on("click", function(){

    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.node().value;
    console.log(inputValue);

    //connecting the dots :)
    var ufodata = tableData.filter(stats => stats.datetime === inputValue);
    console.log(ufodata);

    tbody = d3.select("#data-table")
    // ufodata.forEach( (elem, i)=> {
    // var trow = tbody.append("tr");
    // trow.append("td").text(elem.datetime[i]);
    // trow.append("td").text(elem.city[i]);
    // trow.append("td").text(elem.state[i]);
    // trow.append("td").text(elem.country[i]);
    // trow.append("td").text(elem.shape[i]);
    // trow.append("td").text(elem.durationMinutes[i]);
    // trow.append("td").text(elem.comments[i]);
    //     });
    ufodata.forEach((elem, i) => {
        var row = tbody.append("tr");
        Object.entries(elem).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        });
      });

});

// d3.select("#filter-btn").on("click", HandleSubmit);

