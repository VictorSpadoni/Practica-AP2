import React, { useState } from "react";

function formularioCosasA() {
    const [valores, setValores] = useState ({});

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
  </form>


)
render(<formularioCosasA/>)