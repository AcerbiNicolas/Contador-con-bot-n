import React, { useState } from "react";

const Cont = () => {
    const [carrito, setCarrito] = useState([12])


    return(
        <div class="qty mt-5">
            
            <h5 class="card-title">{carrito.length}</h5>
            <button class="btn btn-dark btn-lg">-</button>
            <button class="btn btn-dark btn-lg">+</button>
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