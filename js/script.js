function calcular(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
  
    if (isNaN(peso) || peso.length === 0 || isNaN(altura) || altura.length === 0){
        window.alert("Preencha os campos corretamente.");
        return;
    }

    if (peso < 1 || altura < 1){
        window.alert("PESO e ALTURA não podem ser menores ou iguais a 0.");
        return;
    }
  
    var imc = peso / (altura * altura);
    var classificacao;
  
    if (imc < 18.5){
      classificacao = "Magreza";
    } else if (imc < 25){
      classificacao = "Normal";
    } else if (imc < 30){
      classificacao = "Sobrepeso";
    } else if (imc < 35){
      classificacao = "Obesidade grau I";
    } else if (imc < 40){
      classificacao = "Obesidade grau II";
    } else{
      classificacao = "Obesidade grau III";
    }
  
    document.getElementById("imc").value = imc.toFixed(2);
    document.getElementById("classificacao").value = classificacao;
  }

function limpar(){
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("imc").value = "IMC";
    document.getElementById("classificacao").value = "Classificação";
}