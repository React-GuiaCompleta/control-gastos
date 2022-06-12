import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'
import { generarId } from './helpers'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  // si presupuesto es true lo muestra en la pantalla de gastos 
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false)
  // false para que no se muestre al inicio
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])


  const handleNuevoGasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  // este = gasto, esta funcion toma un objeto de gasto
  const guardarGasto = gasto => {
    // console.log(gasto)
    // sino ponemos ...gastos, reemplaza lo que escribamos
    // en el formulario, y siempre va a quedar 1 solo objeto
    // si lo ponemos, aparece todo lo que escribamos al hacer 
    // click en añadir gasto cada vez
    gasto.id = generarId()
    setGastos([...gastos, gasto])

    //cierra el modal apenas agregamos el gasto
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
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
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
      />}
    </div>
  )
}

export default App
