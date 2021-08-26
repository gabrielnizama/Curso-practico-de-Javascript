function interesSimple(iv, t, it){
    const interesSimple =iv * (1 + t * it/100 ) ;
    const interesSimpleDecimales = interesSimple.toFixed(2);
    const resultado = document.getElementById("resultado");
    if(t == 1){
        resultado.innerText = "La inversión resultante luego de " + t + " año, es: " + interesSimpleDecimales; 
    }else{
        resultado.innerText = "La inversión resultante luego de " + t + " años, es: " + interesSimpleDecimales; 
    }
    
}

function interesCompuesto(iv, t ,it){
    const interes = 1 + it/100
    const interesCompuesto = iv * (Math.pow(interes,t));
    const interesCompuestoDecimales = interesCompuesto.toFixed(4)
    const resultado = document.getElementById("resultado");
    if(t == 1){
        resultado.innerText = "La inversión resultante luego de " + t + " año, es: " + interesCompuestoDecimales;
    }else{
        resultado.innerText = "La inversión resultante luego de " + t + " años, es: " + interesCompuestoDecimales;
    }
     
}


function calcularInteres(){
    const inputInversion = document.getElementById("inputInversion");
    const inversion = inputInversion.value;

    const inputInteres = document.getElementById("inputInteres");
    const interes = inputInteres.value;

    const inputTiempo = document.getElementById("inputTiempo");
    const tiempo = inputTiempo.value;

    const inputtipo= document.getElementById("inputTipo");
    const tipo = inputtipo.value;
    
    if(inversion == [] || interes == [] || tiempo == [] || tipo == []){
        alert("Por favor complete todos los datos");
    }else{
        if (tipo == "Simple"){
            interesSimple(inversion, tiempo, interes)
        }else if(tipo == "Compuesto"){
            interesCompuesto(inversion, tiempo, interes)
    }
    }

    
}