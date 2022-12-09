//Efecto de presionar botón
function buttonEffect(btn){
    btn.classList.remove('shadow-md');
    setTimeout(() => {
      btn.classList.add('shadow-md');
    }, 200);
  }

  export {
    buttonEffect
  }