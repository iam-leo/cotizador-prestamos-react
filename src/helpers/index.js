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

  export {
    buttonEffect,
    formatearDinero
  }