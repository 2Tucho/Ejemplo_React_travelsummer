import React, { useState, useRef } from 'react';
import TravelItem from './TravelItem';
import data from './data';

function TravelList() {

    const [list, setList] = useState(data); // Así escrito, es lo mismo que decir que list = data = [{},{},{}]

    const [values, setValues] = useState({
        title: "",
        desc: "",
        url_img: ""
    });

    const titleRef = useRef();

    const paintCards = () => list.map((item, index) => <TravelItem
        key={index}
        title={item.title}
        desc={item.desc}
        url_img={item.url_img}
        deleteItem={() => deleteItem(index)} // Puedo pasar funciones por props
    />);

    const clearCards = () => setList([]);

    const resetCards = () => setList(data);

    const createCard = () => {
        alert("Crear destino nuevo");
        const title = prompt("Introduce tu destino");
        const desc = prompt("Introduce la descripción del destino");
        const url_img = prompt("Introduce la url de la imagen");

        const card = { title, desc, url_img };

        setList([...list, card]); //La documentación dice que para modificar un estado mejor no tirar de .push o .shift, hacerlo con el propio setter
    };

    const deleteItem = (pos) => {
        alert("Borrar destino");
        const remainingCards = list.filter((item, index) => index !== pos);
        setList(remainingCards); // Modifica el estado con las cards que quedan
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const desc = e.target.desc.value;
        const url_img = e.target.url_img.value;

        const item = { title, desc, url_img }; // Nuevo objeto destino
        setList([...list, item]); // Añade el nuevo destino a la lista
        //Probando ref
        console.log(titleRef.current.value);
        titleRef.current.value = "";
        console.log(titleRef.current.value);
    };  

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    // Funciones entre llaves dentro de los return
    return (
        <section>
            <h4>TravelList</h4>
            <button onClick={clearCards}>Borrar todo</button>
            <button onClick={resetCards}>Recargar</button>
            <button onClick={createCard}>Crear destino</button>
            {paintCards()}

            {values.title || values.desc || values.url_img?
            <div>
                <h3>Nuevo destino a crear</h3>
                <p>Título: {values.title}</p>
                <p>Descripción: {values.desc}</p>
                <p>URL: {values.url_img}</p>
            </div> : null}

            <br />
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Título</label>
                <br />
                <input type="text" name="title" ref={titleRef} onChange={handleChange}/>
                <br />

                <label htmlFor="price">Descripción</label>
                <br />
                <input type="text" name="desc" onChange={handleChange}/>
                <br />

                <label htmlFor="url">URL imagen</label>
                <br />
                <input type="url" name="url_img" onChange={handleChange}/>
                <br />

                {values.title && values.desc && values.url_img?
                <button type="submit">Crear destino</button> : <></>}
            </form>
        </section>
    )
}

export default TravelList