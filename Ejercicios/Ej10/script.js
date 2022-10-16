function piramide() {

    for(i = 1;i<=50;i++){
  
      let h = document.createElement("p");
      
      for(j = 0;j<i;j++){
      h.innerText += i;
      
      }
      document.getElementById("container").appendChild(h);
    }
  }