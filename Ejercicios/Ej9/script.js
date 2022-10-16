function CountdownWhile() {

    let x = parseInt(prompt("Por favor, introduzca un número"));
    let result = "";

    if (Number.isNaN(x)) alert("Por favor, asegurese de introducir un número.");

    else {

        let y = x;
        //for (x >= 0; x--;) {
            while(x >= 0){

            result += x + ", ";
            x--;
        }

        alert("cuenta atrás: " + result.substring(0, result.length - 2));
        result = "";
        
        for(x = 0; x <= y ; x++){
            
            result += x + ", ";
        }

        alert("cuenta adelante: " + result.substring(0, result.length - 2));

    }
}