import React from 'react'
import { formatearFecha } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

// Como estamos extrayendo la categoria en el paso 17 cuando lo 
// estemos mostrando, vamos a mostrar la categoria va a ser
// la posicion de este diccionario de iconos
const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
}

const Gasto = ({ gasto }) => {
    const { categoria, nombre, cantidad, id, fecha } = gasto
    return (
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
                <img
                    // Forma dinamica
                    src={diccionarioIconos[categoria]}
                    alt="Icono Gasto"
                />
                <div className='descripcion-gasto'>
                    <p className='categoria'>{categoria}</p>
                    <p className='nombre-gasto'>{nombre}</p>
                    <p className='fecha-gasto'>
                        Agregado el: {''}
                        <span>{formatearFecha(fecha)}</span>
                    </p>
                </div>
            </div>
            <p className='cantidad-gasto'>${cantidad}</p>
        </div>
    )
}

export default Gasto

