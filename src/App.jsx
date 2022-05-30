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
  // Paso 3
  // Cuanto esté en true, agrega la clase .formulario.animar
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)
    // Paso 2
    setTimeout(() => {
      // Paso 4
      setAnimarModal(true)
    }, 500)
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
          {/* Boton + para agregar */}
          <img
            src={IconoNuevoGasto}
            alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal
        setModal={setModal}
        // Paso 3.1
        animarModal={animarModal}
        // Paso 7
        setAnimarModal={setAnimarModal}
      />}
    </div>
  )
}

export default App
