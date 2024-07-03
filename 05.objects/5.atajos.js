// it has el method constructor. All Objects have this method
// Both are the same.
let object = {};
let object02 = new Object();

// ============================================================
// There are many constructor like
// ============================================================
/**
 * new Array();
 * nwe String();
 * new Number();
 */

function Usuario() {
    this.user = "Pedro";
}
let userPedro = new Usuario();
console.log(userPedro.constructor);

// ============================================================
// this object literally like 12, "hola" && false have a
// different behavior if you created them with new Number,
// new String and new Boolean,
// ============================================================

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s1, s2); // they have different value
console.log(eval(s1), eval(s2));
console.log(s1.valueOf(), s2.valueOf());