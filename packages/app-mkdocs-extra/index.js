import Tablesort from 'tablesort/dist/tablesort.min.js';
import quicklink from 'quicklink/dist/quicklink.js';

document$.subscribe(function () {
  var tables = document.querySelectorAll('article table:not([class])');
  tables.forEach(function (table) {
    new Tablesort(table);
  });
});

window.addEventListener('load', () => {
  quicklink.listen();
});
