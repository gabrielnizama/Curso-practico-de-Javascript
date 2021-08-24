//Código del cuadrado
// console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados de cuadrado mide: " + ladoCuadrado +'cm');

// const perimetroCuadrado = 4 * ladoCuadrado ;
// console.log('El perímetro del cuadrado es : ' + perimetroCuadrado + 'cm');

// const areaCuadrado = ladoCuadrado ** 2;
// console.log('El área del cuadrado es: ' + areaCuadrado + 'cm2');
// console.groupEnd();

// //Código del triángulo
// console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriángulo = 4;
// const alturaTriangulo = 5.5

// console.log("Los lados del triámgulo miden: " + ladoTriangulo1 +'cm, ' + ladoTriangulo2 + 'cm, ' + baseTriángulo + 'cm');

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriángulo ;
// console.log('El perímetro del triangulo es : ' + perimetroTriangulo + 'cm');


// const areaTriangulo  = (baseTriángulo * alturaTriangulo) / 2;
// console.log('El área del triángulo es :' + areaTriangulo + 'cm2' );

// console.groupEnd();

//Código del circulo 
// console.group("Circulos")

// const radioCirculo = 4;
// const diametroCirculo = radioCirculo * 2;
const pi = Math.PI

// const perimetroCirculo = radioCirculo * pi;
// const areaCirculo = pi * radioCirculo * radioCirculo

// console.log('El perímetro del circulo es: ' + perimetroCirculo + 'cm');
// console.log('El área del círculo es: ' + areaCirculo + 'cm2')

// console.groupEnd();


// Ecapsulamos el código en funciones

function perimetroCuadrado(lado){
    return lado * 4
}

function areaCuadrado(lado){
    return lado * lado
}

function perimetroTriangulo(lado1, lado2 , base){
    return lado1 + lado2 + base
}

function areaTriangulo(base, altura){
    return (base * altura) / 2
}

function perimetroCirculo(radio){
    return 2 * radio * pi 
}

function areaCirculo(radio){
    return radio * radio * pi
}

//Aquí interactuamos con el html
//Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    const result = document.getElementById("Cuadrado");
    result.innerText = "El perímetro del cuadrado es: "+ perimetro + "cm"
  }
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    const result = document.getElementById("Cuadrado");
    result.innerText = "El área del cuadrado es: " + area + "cm2"
  }

  //Triángulo
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");

    const value1 = Number.parseInt(input1.value);
    const value2 = Number.parseInt(input2.value);
    const value3 = Number.parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    const result = document.getElementById("Triangulo");
    result.innerText = "El perímetro del triángulo es: " + perimetro + "cm"; 
}
function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3");
    const input4 = document.getElementById("InputTriangulo4");

    const value3 = Number.parseInt(input3.value);
    const value4 = Number.parseInt(input4.value);

    const area = areaTriangulo(value3, value4);
    const result = document.getElementById("Triangulo");
    result.innerText = "El área del triángulo es: " + area + "cm2";
}

// Círculo
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    const result = document.getElementById("Circulo");
    result.innerText = "El perímetro del circulo es: " + perimetro.toFixed(2) + "cm";
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    const result = document.getElementById("Circulo");
    result.innerText = "El área del círculo es: " + area.toFixed(2) + "cm2";
}
