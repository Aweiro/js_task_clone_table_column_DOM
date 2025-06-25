'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const text = table.rows[i].cells[1].innerHTML;
  const row = table.rows[i];
  const td = document.createElement(table.rows[i].cells[1].tagName);
  const lastCell = table.rows[i].cells.length;
  const reserv = row.cells[lastCell - 1].innerHTML;

  td.textContent = text;
  row.appendChild(td);

  row.cells[lastCell - 1].innerHTML = row.cells[lastCell].innerHTML;
  row.cells[lastCell].innerHTML = reserv;
}
