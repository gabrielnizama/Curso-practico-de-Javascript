function alturaIsosceles(lado1, lado2, lado3){
    if(lado1 == lado2){
        console.log("El triángulo es isósceles");
        const altura1 = Math.sqrt((lado1 * lado2) - (lado3 *lado3)/4)
        console.log("La altura del triangulo es: " + altura1)
    }else if(lado2 == lado3){
        console.log("El triángulo es isósceles");
        const altura2 = Math.sqrt((lado2 * lado3) - (lado1 *lado1)/4)
        console.log("La altura del triangulo es: " + altura2)
        
    }else if(lado1 == lado3){
        console.log("El triángulo es isósceles");
        const altura = Math.sqrt((lado1 * lado3) - (lado2 *lado2)/4)
        console.log("La altura del triangulo es: " + altura)
    }
    else{
        console.log("El triángulo no es isósceles")
    }
    
    
}
alturaIsosceles(6,5,5)