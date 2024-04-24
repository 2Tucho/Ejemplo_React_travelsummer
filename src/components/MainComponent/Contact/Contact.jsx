import {useState} from "react";
import FormContact from "./FormContact";
import CardContact from "./CardContact"



const Contact = () => {
  const [message, setMessage] = useState(""); //Se crea estado que mandará el mensaje cambiado en el input de un hijo a la card del otro
  return <section>
    <h2>Contact</h2>
    <FormContact setMessage={setMessage}/>
    <CardContact message={message}/>
  </section>;
};

export default Contact;
