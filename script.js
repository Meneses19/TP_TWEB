function calcular(){

    var marca = document.getElementById('marca').value;
    var modelo = document.getElementById('modelo').value;
    var preco = document.getElementById('preco').value;
    var ano = document.getElementById('ano').value;
    var km = document.getElementById('Km').value;


        var idade = 2023 - anoCarro; 
        var c1;
        var c2;
        var precoFinal; 

        if(idade < 10 ){
            c1 = 0.05; 
        }

        else if(idade > 10){
            c1 = 0.04;
        }

        if(kmCarro < 30000 ) {
             c2 = 1; 
            }
        else if (kmCarro > 70000 ) {
            c2 = 0.9; 
        }
        else {
            c2 = 0.95; 
        }

        precoFinal = preco * (1-idade * c1)c2;


        if(precoFinal < 500){
            document.getElementById("preco").innerHTML = "não aceitamos carros a baixo de 500€!";
        }
        else{
        precoFinalMau = precoFinal0.6;
        precoFinalMuito = precoFinal*1.1;
        document.getElementById("mau").innerHTML = precoFinalMau;
        document.getElementById("bom").innerHTML = precoFinal;
        document.getElementById("mbom").innerHTML = precoFinalMuito;
        }
  }