import React from 'react'
import { useState } from 'react'
import Mensaje from "./Mensaje";
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // Si alguno está vacio
        // Tambien if nombre === '' || cantidad === '' 
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 2000);
            // este return impide que se ejecuten las lineas despues
            // del return
            return
        }
        guardarGasto({ nombre, cantidad, categoria })
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        id='cantidad'
                        type='text'
                        placeholder='Añade la cantidad del gasto ej. 300'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>

                    <select
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">-- Ahorro --</option>
                        <option value="comida">-- Comida --</option>
                        <option value="casa">-- Casa --</option>
                        <option value="salud">-- Salud --</option>
                        <option value="suscripciones">-- Suscripciones --</option>
                    </select>
                </div>

                <input
                    type="submit"
                    value="Añadir gasto"
                />
            </form>
        </div>
    )
}

export default Modal

