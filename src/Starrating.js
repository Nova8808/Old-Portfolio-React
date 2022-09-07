import React, { startTransition, useState } from "react";
import './index.css';

function Starrating( {totalStars}) {
const [stars, setStars] = useState(null);
const [counter, setCounter] = useState(0);

    return(
        <>
        <h2>star</h2>
        <div>
        {[...Array(5)].map((starVal, ind) => (
            <i class="fa-solid fa-burst" onClick={() => setStars(ind +1)}></i>
        ))
        }
        <br />
        <br />
        <input type={"button"} onClick={() => setCounter(counter +1)} value="Add" />
        <h2>{counter}</h2>
        </div>            
        </>
        )
}

export default Starrating;