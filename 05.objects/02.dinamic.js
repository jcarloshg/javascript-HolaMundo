const user = { id: 3, name: "Pepe" };

user.email = "jose@email.com";
user.guardar = function () {
    console.log("Guardando...")
};

delete user.email;
delete user.guardar;

console.log(`[user] -> `, user);

// don't chance values and properties
// const userFreeze = Object.freeze({ id: 3, name: "Jose" });

// only chances values, the properties NOT.
const userFreeze = Object.seal({ id: 3, name: "Jose" });

userFreeze.guardar = function () { }
console.log(`[userFreeze] -> `, userFreeze);