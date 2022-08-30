import React, { useState } from "react";

const Cont = () => {
    const [carrito, setCarrito] = useState([12])


    return(
        <div class="qty mt-5">
            <span class="minus bg-dark" id="restar">-</span>
            <span>{carrito.length}</span>
            <span >+</span>
            <br />
            <button onClick={() => {
                setCarrito([...carrito, "Zapatillas"]);
            }}>
                Agregar al carrito
            </button>
        </div>
        
    )
}

export default Cont;