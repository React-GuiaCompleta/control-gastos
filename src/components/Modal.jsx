import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

// Paso 5 animarModal
// Paso 8 setAnimarModal
const Modal = ({ setModal, animarModal, setAnimarModal }) => {

    const ocultarModal = () => {
        // primero se desaparece la animacion y luego se cierra el modal
        setAnimarModal(false)
        // paso 9
        setTimeout(() => {
            setModal(false)
        }, 500)

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
            {/* // Paso 1: creamos el form */}
            {/* Paso 6 condicion de animarModal 
            Si animarModal es true entonces agrega la clase de animar 
            con opacity 1 sino no agrega otra clase*/}
            <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>Nuevo gasto</legend>
            </form>
        </div>
    )
}

export default Modal

