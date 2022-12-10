import { useState, useEffect } from "react";
import Button from "./components/Button";
import Header from "./components/Header";
import { buttonEffect, formatearDinero, totalPagar } from "./helpers";

function App() {
  const [cantidad, setCantidad] = useState(50000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [cuota, setCuota] = useState(0);

  useEffect(() => {
    //Total a pagar
    const resultadoTotalPagar = totalPagar(cantidad,meses).toFixed(2);
    setTotal(resultadoTotalPagar);
  }, [cantidad, meses]);

  useEffect(() => {
    //Total Cuota
    setCuota(total / meses);
  }, [total])

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
        <p className="my-10 text-4xl font-bold text-center">{formatearDinero(cantidad)}</p>

        <h2 className="text-xl font-semibold text-center">Elige un <span className="italic text-indigo-800 border-b-2 border-indigo-800">plazo</span> a pagar</h2>

        <div className="flex justify-center">
          <select
            className="w-3/5 p-2 mt-5 text-lg font-bold text-center border rounded-md bg-fuchsia-200 border-fuchsia-900"
            value={meses}
            onChange={ e => setMeses(+e.target.value)}
          >
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="18">18 Meses</option>
            <option value="24">24 Meses</option>
          </select>
        </div>
        <div className="p-5 my-5 space-y-3 rounded-md bg-fuchsia-300">
          <h2 className="text-xl font-semibold text-center">Resumen de <span className="italic font-bold text-indigo-800">pagos</span></h2>
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">{meses} Meses</p>
            <p className="text-lg font-bold">Total a pagar: {formatearDinero(total)}</p>
            <p className="text-lg font-bold">Cuota: {formatearDinero(cuota)}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
