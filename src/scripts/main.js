'use strict';

const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
  const text = table.rows[i].cells[1].innerHTML;
  const row = table.rows[i];
  const td = document.createElement(table.rows[i].cells[1].tagName);
  const reserv = row.cells[4].innerHTML;

  td.textContent = text;
  row.appendChild(td);

  row.cells[4].innerHTML = row.cells[5].innerHTML;
  row.cells[5].innerHTML = reserv;
}
