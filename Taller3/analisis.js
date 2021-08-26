
//Helpers

function esPar(numero){
    return (numero %2 == 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};

//mediana general
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
        return mediana;
    }else{
        const personaMitad = lista[mitad]
        return personaMitad
    }
};
const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);


const salariosColsorted = salariosCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);
const medianaGeneralcol = medianaSalarios(salariosColsorted);


//Mediana top 10

const spliceStart = (salariosColsorted.length * 0.9);
const spliceCount = (salariosColsorted.length - spliceStart);

const salarioscolTop10 = salariosColsorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalarios(salarioscolTop10);


console.log(
    medianaGeneralcol,
    medianaTop10Col
)