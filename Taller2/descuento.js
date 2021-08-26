// const precioOriginal = 100;
// const descuento = 15;


// console.log(`El precio original es: ${precioOriginal}` )

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDescuento = 100 -descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return precioConDescuento
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue){
        case "Platino":
            descuento = 15;
        break
        case "Oro":
            descuento = 30;
        break
        case "Premium":
            descuento = 35
        break
        default:
            descuento = couponValue
    }
    if (priceValue == []){
        alert("Por favor escribe el precio de tu producto")
    }else if(couponValue == []){
        alert("Por favor escribe el descuento o elige un cupón")
    }else{
        var precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento es $" + precioConDescuento;
        console.log(precioConDescuento)
    }
}

    

