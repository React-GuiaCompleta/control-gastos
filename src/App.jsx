import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  // si presupuesto es valido muestra en la pantalla de gastos 
  const [isValidPresupuesto, setisValidPresupuesto] = useState (false)

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
      />
    </div>
  )
}

export default App
