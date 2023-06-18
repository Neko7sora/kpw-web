import Tablesort from "tablesort/src/tablesort.js";
import quicklink from "quicklink/dist/quicklink.js";

document$.subscribe(function () {
  var tables = document.querySelectorAll("article table:not([class])");
  tables.forEach(function (table) {
    new Tablesort(table);
  });
});

window.addEventListener("load", () => {
  quicklink.listen({
    limit: 30,
  });
});
