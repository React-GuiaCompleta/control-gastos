import React from 'react'

const Mensaje = ({children, tipo}) => {
  return (
      //clase alerta en index.css
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje

