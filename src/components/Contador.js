import { useState } from "react";
import './contador.scss'

const Contador = () => {
    
    const [cuenta, setContador] = useState(0);
    const stock = 7;

    const handleSumar= () =>  {
        
        if(cuenta < stock){
            setContador(cuenta + 1);
        }
    }

    const handleRestar = () => {
        
        if(cuenta > 0){
            setContador(cuenta-1)
        };
    }

    const handleReset = () => {
        setContador(cuenta - cuenta);
        console.log("apretado");
    }

    return(
        <div className="contador">
            
            <div className="contador__container">
            <h3 className="contador__titulo">Star Wars: Jedi Fallen Order</h3>
            <div className="contador__contador">
            <button className="contador__iconos" onClick={handleSumar}><i class="fa-solid fa-circle-plus"></i></button>
            <span className="contador__cuenta">{cuenta}</span>
            <button className="contador__iconos" onClick={handleRestar}><i class="fa-solid fa-circle-minus"></i></button>
            </div>
            <h6 className="contador__stock">Unidades en Stock: {stock} </h6>
            <button type="button" className="btn btn-outline-primary contador__boton" onClick={handleReset}>Agregar al carrito</button>

            </div>

        </div>
    )
}

export default Contador;