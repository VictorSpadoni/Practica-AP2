import React, { useState } from "react";

function FormularioCosas()  {
    const [valores , setValores ] = useState ({nombre: '', apellido: '', edad: '', vehiculo: false , nacionalidad: null});

    

 return ( 
 <form onSubmit={handleSubmit}>
    <label>Nombre
        <input
        type="text"
        name="loquevayaaca"
        value={valores.loquevayaaca || ""}
        onChange={handleChange}
        />
         </label>
         <label>Apellido
            <input
            type="text"
            name="loquevayaaca2"
            value={valores.loquevayaaca2 || ""}
            onChange={handleChange}
            />
         </label>
         <label>Edad
            <input
            type="number"
            name="loquevayaaca3"
            value={valores.loquevayaaca3 || ""}
            onChange={handleChange}
             />

         </label>
         <label>Posee vehículo ?
            <input
            type="checkbox"
            name="loquevayaaca4"
            checked={valores.loquevayaaca4}
            onChange={handleChange}
             />

         </label>
         <label>País de origen
         <select
          name="opcionSeleccionada"
          value={valores.opcionSeleccionada}
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

 )};
 
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




export default { FormularioCosas , BotonTickets};

