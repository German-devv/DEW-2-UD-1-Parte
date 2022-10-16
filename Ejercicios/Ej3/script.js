function UniteStrings(){
    
    let x = prompt("Por favor, introduzca un número");
    let y = prompt("Por favor, introduzca otro número");

    let result;

    try{

        x = parseInt(x);
        y = parseInt(y);


        if(Number.isNaN(x) || Number.isNaN(y)) throw new Error(err);

        if(x < y) result = y + " es mayor que " + x;
            
        else if(x > y) result = x + " es mayor que " + y;

        else result = "Los números son iguales"


    } catch(err){
        result = "Por favor, asegurese de introducir números."
    }


    return alert(result);
    
}