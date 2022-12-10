//Efecto de presionar botón
function buttonEffect(btn){
    btn.classList.remove('shadow-md');
    setTimeout(() => {
      btn.classList.add('shadow-md');
    }, 200);
  }

//Formatear string -> $
const formatearDinero = (valor) => {
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    });

    return formatter.format(valor);
}

//Calcular total a pagar
const totalPagar = (cantidad, plazo) => {
  let total;

  //Mientras mas alta es la cantidad solicitada menor es el interés
  if(cantidad < 32500){
    total = cantidad * 1.5 //50%
  } else if(cantidad > 32500 && cantidad < 55000){
    total = cantidad * 1.4 //40%
  } else if(cantidad > 55000 && cantidad < 77500){
    total = cantidad * 1.3 //30%
  } else {
    total = cantidad * 1.2 //20%
  }

  //Mayor el plazo, mayor el interés
  if(plazo === 6){
    total *= 1.1; //10%
  }else if(plazo === 12){
    total *= 1.2; //20%
  }else if(plazo === 18){
    total *= 1.3; //30%
  }else{
    total *= 1.4; //40%
  }

  return total;
}

export {
  buttonEffect,
  formatearDinero,
  totalPagar
}