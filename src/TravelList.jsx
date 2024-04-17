import React, { useState } from 'react';
import TravelCard from './TravelCard';
import data from './data';

function TravelList() {

    const [list, setList] = useState(data); // Así escrito, es lo mismo que decir que list = data = [{},{},{}]

    const paintCards = () => list.map((item, index) => <TravelCard
        key={index}
        title={item.title}
        desc={item.desc}
        url_img={item.url_img}
        delete={() => deleteCard(index)} //Puedo pasar funciones por props
    />);

    const clearCards = () => setList([]);

    const resetCards = () => setList(data);

    const createCard = () => {
        alert("Crear destino nuevo")
        const title = prompt("Introduce tu destino");
        const desc = prompt("Introduce la descripción del destino");
        const url_img = prompt("Introduce la url de la imagen");

        const card = {title, desc, url_img}

        setList([...list, card]); //La documentación dice que para modificar un estado mejor no tirar de .push o .shift, hacerlo con el propio setter
    };

    const deleteCard = (pos) => {
        alert("Borrar destino");
        const remainingCards = list.filter((item, index) => index !== pos);
        setList(remainingCards); //Modifica el estado con las cards que quedan
    };

    //Funciones entre llaves dentro de los return
    return (
        <section>
            <h4>TravelList</h4>
            <button onClick={clearCards}>Borrar todo</button>
            <button onClick={resetCards}>Recargar</button>
            <button onClick={createCard}>Crear destino</button>
            {paintCards()}
        </section>
    )
}

export default TravelList