import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  // si presupuesto es true lo muestra en la pantalla de gastos 
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
      />
      {/* Si es true ejecuta */}
      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
          />
        </div>
      )}
    </div>
  )
}

export default App
