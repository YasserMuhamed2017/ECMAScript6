// Question 2
import * as file from "./day3.js";

let e = new file.Employee('Yasser', 'Hr');
console.log(e);
let e1 = new file.Employee('Ahmed', 'IT');

let m = new file.Manager('Ahmed', 'TA', [{e}, {e1}]);
console.log(m);

let w = new file.WorkerBee('Mohamed', 'CX', ['P0', 'P1', 'P2']);
console.log(w);

let s = new file.SalesPerson('Nour');
console.log(s);

let en = new file.Engineer('Salem', 'Dynamic Machine');
console.log(en);