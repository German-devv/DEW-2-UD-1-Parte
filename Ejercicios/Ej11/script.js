function piramide() {

  for(i = 1;i<=51;i++){

    let h = document.createElement("p");
    for(j = 1;j<i;j++){
    h.innerText += j;
    
    }
    document.getElementById("container").appendChild(h);
  }
  }