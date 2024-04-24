import React from 'react'

function TravelItem({title, desc, url_img, deleteItem}) { //También se puede poner props como parámetro y en el cuerpo de la función poner props.title o lo que toque
  return (
    <article>
      <h5>{title}</h5>
      <p>{desc}</p>
      <img 
        src={url_img}
        alt={title} 
        width={400} 
      />
      <br />
      <button onClick={() => deleteItem()}>Borrar</button>
    </article>
  )
} // El hijo puede modificar el estado del padre pero solo mediante funciones

export default TravelItem