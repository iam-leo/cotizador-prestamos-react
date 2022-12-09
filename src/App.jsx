import { useState } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import { buttonEffect } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(50000);

  const MIN = 10000;
  const MAX = 100000;
  const STEP = 1000;

  //Recuperar el valor ingresado por el usuario
  function handleChange(e){
    const cantidadIngresada = +e.target.value // "e.target.value" -> string / con el signo + lo convertimos a number

    setCantidad(cantidadIngresada);
  }

  //Validar que la cantidad no se pase del mínimo disponible
  function handleClickDecremento(){
    const valor = cantidad - STEP

    setCantidad(valor > MIN ? valor : MIN)
  }

  //Validar que la cantidad no se pase del máximo disponible
  function handleClickIncremento(){
    const valor = cantidad + STEP

    setCantidad(valor > MAX ? MAX : valor)
  }

  return (
    <>
      <h1 className="my-10 text-5xl text-center text-white">Cotiza tu prestamo</h1>
      <div className="max-w-2xl p-10 mx-auto bg-white rounded-lg shadow-lg shadow-slate-400">
        <Header/>
        <div className="flex items-center justify-center mt-4">
          <Button
            operador='-'
            margin='mr-3'
            fn={handleClickDecremento}
            effect={buttonEffect}
          />
          <input
            type="range"
            className="w-3/5 h-6 bg-gray-300 accent-fuchsia-900 hover:accent-fuchsia-800"
            onChange={handleChange}
            min="10000"
            max="100000"
            step="1000"
            value={cantidad}
          />
          <Button
            operador='+'
            margin='ml-3'
            fn={handleClickIncremento}
            effect={buttonEffect}
          />
        </div>
        <p className="my-10 text-4xl font-bold text-center">${cantidad}</p>
      </div>
    </>
  )
}

export default App
