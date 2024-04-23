import React from 'react'

function TravelItem(props) {
  return (
    <article>
      <h5>{props.title}</h5>
      <p>{props.desc}</p>
      <img 
        src={props.url_img}
        alt={props.title} 
        width={400} 
      />
      <br />
      <button onClick={() => props.delete()}>Borrar</button>
    </article>
  )
} // El hijo puede modificar el estado del padre pero solo mediante funciones

export default TravelItem