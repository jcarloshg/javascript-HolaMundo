
let punto = {
    x: 10,
    y: 1,
}

const newPointed = Object.assign({}, punto, { z: 40, x: 2 });

console.log(`[punto] -> `, punto);
console.log(`[newPunto] -> `, newPointed);



let punto02 = {
    x: 10,
    y: 70,
}
const clonePoint01 = Object.assign({}, punto02);
const clonePoint02 = { ...punto02 };
console.log(`[clonePoint01] -> `, clonePoint01);
console.log(`[clonePoint02] -> `, clonePoint02);
