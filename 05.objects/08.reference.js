// ============================================================
// Primitivos se copian
//  - String, number, boolean
//
// Referencia se mantiene la referencia
//  - Object, function, arrays
// ============================================================

let a = 1;
let b = a;

b++;
console.log(a, b);

let obj1 = {};
let obj2 = obj1;
obj2.prop = "props";
console.log(obj1, obj2);

// ============================================================
// functions
// ============================================================

let num = 1;

function suma(num) {
    num++;
}

suma(num);
console.log(num);

// ============================================================
// object with functions
// ============================================================

const obj10 = { prop: 1 };
function updateObject(object) {
    object.prop++;
}
updateObject(obj10);
console.log(obj10);