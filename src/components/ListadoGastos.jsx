import React from 'react'
import Gasto from './Gasto'

// Paso 9
const ListadoGastos = ({ gastos }) => {
    return (
        <div className='listado-gastos contenedor'>
            {/* Si el tamaño de gastos existe escriba el titulo gastos sino... */}
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>
            {gastos.map(gasto => (
                <Gasto
                key={gasto.id}
                gasto={gasto}
                />
            ))}
        </div>
    )
}

export default ListadoGastos
