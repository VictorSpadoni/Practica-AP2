import React, { useState } from "react";

function formularioCosasA() {
    const [valores, setValores] = useState ({nombre: '', apellido: '', edad: '', tienePasaporte: false });

}
return (
  <form onSubmit={handleSubmit}>
    <label>Valor 1
        <input
        type="text"
        name="loquevayaaca"
        value={inputs.loquevayaaca || ""}
        onChange={handleChange}
        />
         </label>
         <label>Valor 2
            <input
            type="text"
            name="loquevayaaca2"
            value={inputs.loquevayaaca2 || ""}
            onChange={handleChange}
            />
         </label>
         <label>Valor 3
            <input
            type="number"
            name="loquevayaaca3"
            value={inputs.loquevayaaca3 || ""}
            onChange={handleChange}
             />

         </label>
         <label>Valor 4
            <input
            type="checkbox"
            name="loquevayaaca4"
            checked={inputs.loquevayaaca4}
            onChange={handleChange}
             />

         </label>
         <button type="submit">Enviar</button>
  </form>


); 

render(<formularioCosasA/>)