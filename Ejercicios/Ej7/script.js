function EcabezadoWhile(){
    
    let i=1;
    while(i <= 6){
       document.getElementById('container').innerHTML += "<H"+ i +">Encabezado de nivel "+ i +"</H"+ i +">"; 
       i++
    }

    
    
}