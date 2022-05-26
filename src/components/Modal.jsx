import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal}) => {
    //paso 2
    const ocultarModal = () => {
        setModal(false)
    }
    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    // Ocultando modal paso 1
                    onClick={ocultarModal}
                />
            </div>
        </div>
    )
}

export default Modal