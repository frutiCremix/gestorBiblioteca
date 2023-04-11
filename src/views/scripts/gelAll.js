const URL="http://localhost:3000/api";
const main=document.querySelector(".main")
fetch(URL)
.then(res=>res.json())
.then(data=>imprimir(data));

function imprimir(data) {
    let table = document.createElement('table');
  console.log(data)
    // Crea la fila de encabezado
    let headerRow = document.createElement('tr');
    let headerId = document.createElement('th');
    let headerTitulo = document.createElement('th');
    let headerAutor=document.createElement('th');
    let headerPrecio = document.createElement('th');
    headerId.textContent = 'Id';
    headerTitulo.textContent = 'Título';
    headerAutor.textContent = 'Autor';
    headerPrecio.textContent = 'Precio';
    headerRow.appendChild(headerId);
    headerRow.appendChild(headerTitulo);
    headerRow.appendChild(headerAutor);
    headerRow.appendChild(headerPrecio);
    table.appendChild(headerRow);
  
    // Crea las filas de datos
    data.forEach(element => {
      let row = document.createElement('tr');
      let cellId=document.createElement('td');
      let cellTitulo = document.createElement('td');
      let cellAutor=document.createElement('td');
      let cellPrecio = document.createElement('td');
      cellId.textContent=element.id;
      cellTitulo.textContent = element.titulo;
      cellAutor.textContent=element.autor;
      cellPrecio.textContent = `$ ${element.precio}`;
      row.appendChild(cellId);
      row.appendChild(cellTitulo);
      row.appendChild(cellAutor);
      row.appendChild(cellPrecio);
      table.appendChild(row);
    });
  
    main.appendChild(table);
  }