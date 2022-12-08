import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [cantidad, setCantidad] = useState(50000);

  function handleChange(e){
    const cantidadIngresada = +e.target.value // "e.target.value" -> string / con el signo + lo convertimos a number

    setCantidad(cantidadIngresada);
  }

  return (
    <>
      <h1 className="my-10 text-5xl text-center text-white">Cotiza tu prestamo</h1>
      <div className="max-w-2xl p-10 mx-auto bg-white rounded-lg shadow-lg shadow-slate-400">
        <Header/>
        <div className="flex justify-center mt-4">
          <input
            type="range"
            className="w-3/5 h-6 bg-gray-300 accent-fuchsia-900 hover:accent-fuchsia-800"
            onChange={handleChange}
            min="10000"
            max="100000"
            step="1000"
            value={cantidad}
          />
        </div>
        <p className="text-center my-10 font-bold text-4xl">${cantidad}</p>
      </div>
    </>
  )
}

export default App
