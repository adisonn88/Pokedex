const Http = new XMLHttpRequest();
const url='https://pokeapi.co/api/v2/pokemon';
Http.open("GET", url);
Http.send();
let response;

Http.onreadystatechange=(e)=>{
    response = JSON.parse(Http.responseText);
    response.results.forEach(pokemon => {

        var tableRef = document.getElementById('pokemons').getElementsByTagName('tbody')[0];

        // Insert a row in the table at the last row
        var newRow   = tableRef.insertRow(tableRef.rows.length);
        
        // Insert a cell in the row at index 0
        var newCell  = newRow.insertCell(0);
        
        // Append a text node to the cell
        var newText  = document.createTextNode(pokemon.name);
        newCell.appendChild(newText);

});
}
