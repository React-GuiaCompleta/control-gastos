import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  // si presupuesto es true lo muestra en la pantalla de gastos 
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false)
  // false para que no se muestre al inicio
  const [modal, setModal] = useState(false)
  
  const handleNuevoGasto = () => {
    setModal(true)
  }

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
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal
      //Paso 3
        setModal={setModal}
      />}
    </div>
  )
}

export default App
