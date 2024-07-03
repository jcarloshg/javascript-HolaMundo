const punto = {
    x: 10,
    y: 20,
    dibujar(){
        console.log("dibujar...")
    }
}

for(key in punto){
    console.log(key, punto[key]);
}