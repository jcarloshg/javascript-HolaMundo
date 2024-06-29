
let user = {
    name: "Carlos",
    email: "carlos@gmail.com",
    address: {
        street: "Vicente",
        number: 40,
    },
    active: true,
    recoverKey: function () {
        console.log("Recovering key... ");
    },

}

console.log(`[user] -> `, user);