var element = document.querySelector("#greeting");
element.innerText = "Hello, world!";

function generateTable(textAreaName,tableID) { // This function is used to enable copy & pasting of data from a spreadsheet directly into the webpage, retaining the rows and columns
  var data = $('textarea[name='+textAreaName+']').val();
  //console.log(data); // For testing purposes only
  var rows = data.split("\n"); 
  
  var table = $('<table />'); 
  
  for(var y in rows) { 
    var cells = rows[y].split("\t");
    var row = $('<tr />'); 
    for (var x in cells) { 
      row.append('<td>'+cells[x]+'</td>');
    }
    table.append(row);
  }
  // Insert into DOM 
  $('#'+tableID+'').html(table);
}