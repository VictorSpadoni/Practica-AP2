import React, { useState } from "react";

function FormularioCosas() {
    const [valores, setValores] = useState ({nombre: '', apellido: '', edad: '', tienePasaporte: false });

}
return (
  <form onSubmit={handleSubmit}>
    <label>Nombre
        <input
        type="text"
        name="loquevayaaca"
        value={inputs.loquevayaaca || ""}
        onChange={handleChange}
        />
         </label>
         <label>Apellido
            <input
            type="text"
            name="loquevayaaca2"
            value={inputs.loquevayaaca2 || ""}
            onChange={handleChange}
            />
         </label>
         <label>Edad
            <input
            type="number"
            name="loquevayaaca3"
            value={inputs.loquevayaaca3 || ""}
            onChange={handleChange}
             />

         </label>
         <label>Posee vehículo ?
            <input
            type="checkbox"
            name="loquevayaaca4"
            checked={inputs.loquevayaaca4}
            onChange={handleChange}
             />

         </label>
         <label>País de origen
         <select
          name="opcionSeleccionada"
          value={inputs.opcionSeleccionada}
          onChange={handleChange}
         >
          <option value="opcion1">Argentina</option>
          <option value="opcion2">Chile</option>
          <option value="opcion3">Brasil</option>
          <option value="opcion4">Uruguay</option>
        </select>
            </label>

         <button type="submit">Enviar</button>
  </form>


);
 
function BotonTickets() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Cantidad de tickets {count} encargados
    </button>
  );
}




export default {FormularioCosas , BotonTickets};

