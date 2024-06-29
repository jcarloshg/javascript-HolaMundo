
// the first letter of the function must be UpperCase
function User() {
    this.id = 10;
    this.guardar = function(){
        console.log("Guardar...");
    }
}

// 1. create the object this
// 2. vicula prototipo to object this
// 3. se asigna las properties id y guardar to this
// 4. if not specify the type of return. The function return this
const user = new User();
console.log(`[user] -> `, user);
